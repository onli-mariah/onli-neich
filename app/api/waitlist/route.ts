import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Test mode: sending to verified email only
const RECIPIENT_EMAIL = "onlisyn2025@gmail.com"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }

    // Send notification email about new waitlist signup
    const { error } = await resend.emails.send({
      from: "Species Waitlist <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      subject: "New Waitlist Signup - Species",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; font-weight: 300; margin-bottom: 30px; color: #000;">New Waitlist Signup</h1>
          
          <div style="background: #f5f5f5; padding: 24px; margin-bottom: 24px;">
            <p style="margin: 0; color: #666; font-size: 14px;">Email Address</p>
            <p style="margin: 8px 0 0 0; color: #000; font-size: 18px;">${email}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 24px; margin-bottom: 24px;">
            <p style="margin: 0; color: #666; font-size: 14px;">Signup Time</p>
            <p style="margin: 8px 0 0 0; color: #000; font-size: 18px;">${new Date().toLocaleString()}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px;">
            This person has requested early access to Species.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return Response.json({ error: "Failed to join waitlist" }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("[v0] Waitlist error:", error)
    return Response.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
