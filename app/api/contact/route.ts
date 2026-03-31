import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, phone, projectType, system, location, message } = await request.json()

  if (!name || !email || !location || !projectType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = `
    <h2>New Quote Request</h2>
    <table style="border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td>${email}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Phone</td><td>${phone || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Project Type</td><td>${projectType}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">System</td><td>${system || '—'}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Location</td><td>${location}</td></tr>
    </table>
    ${message ? `<h3>Project Details</h3><p>${message}</p>` : ''}
  `

  try {
    await transporter.sendMail({
      from: `"SIGNATURESPAN Website" <${process.env.SMTP_USER}>`,
      to: 'octavius@signaturespan.com',
      replyTo: email,
      subject: `Quote Request from ${name} — ${projectType}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
