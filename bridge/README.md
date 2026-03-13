# Extrudly Bridge

Runs on your home machine (or Raspberry Pi) and relays your Creality K2 Plus
print data and camera stream to your Vercel deployment via Cloudflare Tunnel.

---

## Requirements

- Node.js 18+
- FFmpeg installed (`sudo apt install ffmpeg` on Pi, `brew install ffmpeg` on Mac)
- Creality K2 Plus with LAN mode enabled

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
```

Edit `.env` and fill in:
- `PRINTER_IP` — find this in your router's device list or the Creality Print app
- `PRINTER_ACCESS_CODE` — in Creality Print > your printer > LAN Mode
- `BRIDGE_SECRET` — generate a random string:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

### 3. Enable LAN mode on your printer
On the K2 Plus touchscreen:
**Settings → Network → LAN Mode → Enable**

Note the Access Code shown on screen.

### 4. Run locally for testing
```bash
npm run dev
```

Visit `http://localhost:3001/health` — should return `{ ok: true }`.

---

## Cloudflare Tunnel Setup (when ready for Pi)

### 1. Install cloudflared on the Pi
```bash
curl -L https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared bookworm main' | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update && sudo apt install cloudflared
```

### 2. Authenticate
```bash
cloudflared tunnel login
```

### 3. Create a tunnel
```bash
cloudflared tunnel create extrudly-bridge
```

### 4. Configure tunnel
Create `~/.cloudflared/config.yml`:
```yaml
tunnel: extrudly-bridge
credentials-file: /home/pi/.cloudflared/<tunnel-id>.json

ingress:
  - hostname: bridge.extrudly.com
    service: http://localhost:3001
  - service: http_status:404
```

### 5. Add DNS record
```bash
cloudflared tunnel route dns extrudly-bridge bridge.extrudly.com
```

### 6. Run as a service
```bash
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
```

### 7. Add to Vercel environment variables
```
BRIDGE_URL=https://bridge.extrudly.com
BRIDGE_SECRET=<same value as in your .env>
```

---

## Run on Pi boot (without Cloudflare service)

Install PM2 to keep the bridge running:
```bash
npm install -g pm2
pm2 start index.js --name extrudly-bridge
pm2 save
pm2 startup
```

---

## Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/health` | None | Health check |
| GET | `/status` | Bearer token | Current print state |
| WS | `/stream?secret=` | Query param | MJPEG camera stream |

---

## Adding Elegoo Centauri Carbon (later)

The Centauri Carbon likely uses a similar MQTT structure. Once you have it:
1. Add `PRINTER_2_IP` and `PRINTER_2_ACCESS_CODE` to `.env`
2. We'll add a second MQTT client and `/status/2` + `/stream/2` endpoints
