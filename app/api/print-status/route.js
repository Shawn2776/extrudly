import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function GET(request) {
  const { userId } = await auth()

  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Get orderId from query params
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get("orderId")

  if (!orderId) {
    return Response.json({ error: "Missing orderId" }, { status: 400 })
  }

  // Verify the order belongs to this user
  const order = await db.query(
    `SELECT id, status, printer_job_id FROM orders WHERE id = $1 AND user_id = $2`,
    [orderId, userId]
  )

  if (order.rows.length === 0) {
    return Response.json({ error: "Order not found" }, { status: 404 })
  }

  if (order.rows[0].status !== "printing") {
    return Response.json({ error: "Order is not currently printing" }, { status: 400 })
  }

  // Fetch live status from bridge
  try {
    const res = await fetch(`${process.env.BRIDGE_URL}/status`, {
      headers: {
        Authorization: `Bearer ${process.env.BRIDGE_SECRET}`,
      },
      // Don't cache — always fresh
      cache: "no-store",
    })

    if (!res.ok) {
      return Response.json({ error: "Bridge error" }, { status: 502 })
    }

    const data = await res.json()
    return Response.json(data)
  } catch (err) {
    console.error("Bridge fetch error:", err)
    return Response.json({ error: "Could not reach bridge" }, { status: 503 })
  }
}
