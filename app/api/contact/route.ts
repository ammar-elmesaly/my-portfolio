import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Strip newlines so nothing can inject extra email headers via these fields.
function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot - real users never fill this in
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // Honeypot tripped — pretend success so bots don't learn to skip the field.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = sanitizeHeaderValue(name);
    const safeEmail = sanitizeHeaderValue(email);

    await transporter.sendMail({
      from: `"Portfolio Contact" <contact@elmesaly.dev>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: safeEmail,
      subject: `New message from ${safeName}`,
      text: `From: ${safeName} <${safeEmail}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${safeName} (${safeEmail})</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Try again later." },
      { status: 500 },
    );
  }
}