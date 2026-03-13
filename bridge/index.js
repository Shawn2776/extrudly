require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { WebSocketServer } = require("ws")
const http = require("http")
const mqtt = require("mqtt")
const { spawn } = require("child_process")
const crypto = require("crypto")

const {
  PRINTER_IP,
  PRINTER_MQTT_PORT = 2883,
  PRINTER_RTSP_PORT = 8554,
  PRINTER_ACCESS_CODE,
  PORT = 3001,
  BRIDGE_SECRET,
} = process.env

if (!PRINTER_IP || !PRINTER_ACCESS_CODE || !BRIDGE_SECRET) {
  console.error("❌  Missing required env vars. Copy .env.example to .env and fill it in.")
  process.exit(1)
}

// ─── In-memory print state ────────────────────────────────────────────────────
let printState = {
  status: "idle",        // idle | printing | paused | finished | error
  progress: 0,           // 0–100
  layer: 0,
  totalLayers: 0,
  remainingMins: 0,
  filename: null,
  nozzleTemp: 0,
  bedTemp: 0,
  updatedAt: null,
}

// ─── Auth middleware ──────────────────────────────────────────────────────────
// Vercel sends BRIDGE_SECRET as a Bearer token on every request
function requireSecret(req, res, next) {
  const auth = req.headers.authorization || ""
  const token = auth.replace("Bearer ", "")
  if (!BRIDGE_SECRET || token !== BRIDGE_SECRET) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  next()
}

// ─── Express app ─────────────────────────────────────────────────────────────
const app = express()
app.use(cors())
app.use(express.json())

// Health check — no auth needed, used by Cloudflare Tunnel
app.get("/health", (req, res) => {
  res.json({ ok: true, uptime: process.uptime() })
})

// Print status endpoint — called by Next.js API route
app.get("/status", requireSecret, (req, res) => {
  res.json(printState)
})

// ─── HTTP + WebSocket server ──────────────────────────────────────────────────
const server = http.createServer(app)

// WebSocket server for live camera stream
const wss = new WebSocketServer({ server, path: "/stream" })

wss.on("connection", (ws, req) => {
  // Auth check via ?secret= query param (WebSocket can't set headers easily)
  const url = new URL(req.url, `http://localhost`)
  const secret = url.searchParams.get("secret")
  if (secret !== BRIDGE_SECRET) {
    ws.close(1008, "Unauthorized")
    return
  }

  console.log("📺  Client connected to stream")

  // FFmpeg: pull RTSP from printer, convert to MJPEG chunks over WebSocket
  // The Creality K2 Plus RTSP stream is typically:
  // rtsp://<ip>:<port>/live
  const rtspUrl = `rtsp://${PRINTER_IP}:${PRINTER_RTSP_PORT}/live`

  const ffmpeg = spawn("ffmpeg", [
    "-rtsp_transport", "tcp",
    "-i", rtspUrl,
    "-f", "mjpeg",        // output as MJPEG
    "-q:v", "5",          // quality 1–31, lower = better
    "-r", "10",           // 10 fps — enough for a print timelapse feel
    "-vf", "scale=1280:720",
    "pipe:1",             // pipe to stdout
  ])

  ffmpeg.stdout.on("data", (chunk) => {
    if (ws.readyState === ws.OPEN) {
      ws.send(chunk)
    }
  })

  ffmpeg.stderr.on("data", (data) => {
    // FFmpeg logs to stderr — suppress unless debugging
    // console.log("ffmpeg:", data.toString())
  })

  ws.on("close", () => {
    console.log("📺  Client disconnected, killing ffmpeg")
    ffmpeg.kill("SIGKILL")
  })

  ffmpeg.on("error", (err) => {
    console.error("❌  FFmpeg error:", err.message)
    ws.close(1011, "Stream error")
  })
})

// ─── MQTT connection to Creality K2 Plus ─────────────────────────────────────
// Creality uses MQTT on port 2883 with a specific topic structure
// Topic format: /device/<serial>/report
// We discover the serial from the first message or set it manually

const mqttClient = mqtt.connect(`mqtt://${PRINTER_IP}:${PRINTER_MQTT_PORT}`, {
  username: "bblp",
  password: PRINTER_ACCESS_CODE,
  clientId: `extrudly-bridge-${crypto.randomBytes(4).toString("hex")}`,
  reconnectPeriod: 5000,
  connectTimeout: 10000,
})

mqttClient.on("connect", () => {
  console.log(`✅  MQTT connected to printer at ${PRINTER_IP}`)
  // Subscribe to all device report topics
  mqttClient.subscribe("#", (err) => {
    if (err) console.error("MQTT subscribe error:", err)
    else console.log("📡  Subscribed to printer topics")
  })
})

mqttClient.on("message", (topic, message) => {
  try {
    const data = JSON.parse(message.toString())
    parsePrinterMessage(topic, data)
  } catch {
    // Not all messages are JSON
  }
})

mqttClient.on("error", (err) => {
  console.error("❌  MQTT error:", err.message)
})

mqttClient.on("reconnect", () => {
  console.log("🔄  MQTT reconnecting...")
})

// ─── Parse Creality/Bambu-style MQTT messages ─────────────────────────────────
// The K2 Plus uses a similar protocol to Bambu Lab
function parsePrinterMessage(topic, data) {
  // print sub-object contains the main status
  const print = data?.print

  if (!print) return

  const prev = { ...printState }

  if (print.gcode_state !== undefined) {
    const stateMap = {
      IDLE: "idle",
      RUNNING: "printing",
      PAUSE: "paused",
      FINISH: "finished",
      FAILED: "error",
    }
    printState.status = stateMap[print.gcode_state] ?? print.gcode_state.toLowerCase()
  }

  if (print.mc_percent !== undefined)    printState.progress     = print.mc_percent
  if (print.layer_num !== undefined)     printState.layer        = print.layer_num
  if (print.total_layer_num !== undefined) printState.totalLayers = print.total_layer_num
  if (print.mc_remaining_time !== undefined) printState.remainingMins = print.mc_remaining_time
  if (print.subtask_name !== undefined)  printState.filename     = print.subtask_name
  if (print.nozzle_temper !== undefined) printState.nozzleTemp   = Math.round(print.nozzle_temper)
  if (print.bed_temper !== undefined)    printState.bedTemp      = Math.round(print.bed_temper)

  printState.updatedAt = new Date().toISOString()

  // Log status changes
  if (prev.status !== printState.status || prev.progress !== printState.progress) {
    console.log(`🖨️  [${printState.status}] ${printState.progress}% — Layer ${printState.layer}/${printState.totalLayers} — ${printState.remainingMins}min remaining`)
  }
}

// ─── Start server ─────────────────────────────────────────────────────────────
server.listen(PORT, () => {
  console.log(`\n🚀  Extrudly bridge running on http://localhost:${PORT}`)
  console.log(`📡  Connecting to printer at ${PRINTER_IP}...`)
  console.log(`\nEndpoints:`)
  console.log(`  GET  /health   — health check`)
  console.log(`  GET  /status   — print state (requires Bearer token)`)
  console.log(`  WS   /stream   — MJPEG camera stream (requires ?secret=)`)
  console.log(`\nOnce Cloudflare Tunnel is running, set these in Vercel:`)
  console.log(`  BRIDGE_URL=https://your-tunnel.extrudly.com`)
  console.log(`  BRIDGE_SECRET=<same value as in .env>\n`)
})
