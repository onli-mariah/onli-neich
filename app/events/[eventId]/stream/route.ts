export const dynamic = "force-dynamic"

const stages = [
  { topic: "request.authenticated", delay: 500 },
  { topic: "request.enqueued", delay: 800 },
  { topic: "order.validated", delay: 1200 },
  { topic: "order.classified", delay: 1500 },
  { topic: "order.matched", delay: 2000 },
  { topic: "payment.confirmed", delay: 2500 },
  { topic: "ownership.changed", delay: 3000 },
  { topic: "order.completed", delay: 3500 },
]

export async function GET(request: Request, { params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = await params

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      for (const stage of stages) {
        await new Promise((resolve) => setTimeout(resolve, stage.delay))
        const data = `data: ${JSON.stringify({ topic: stage.topic, eventId })}\n\n`
        controller.enqueue(encoder.encode(data))
      }
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
