import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = parsed.data

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: { name, email, subject, message },
    })

    // Send email notification if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL ?? 'waisalam9523@gmail.com',
        subject: `[Portfolio] New message: ${subject}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
          <hr/>
          <p style="color:#666;font-size:12px">Submitted at ${new Date().toISOString()} — view all submissions at /admin</p>
        `,
      })
    }

    return NextResponse.json({ success: true, id: submission.id })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
