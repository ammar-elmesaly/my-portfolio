"use server";

import nodemailer from "nodemailer";

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

type ContactResult = { success: true } | { success: false; error: string };

export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? ""; // honeypot

  if (company) {
    return { success: true }; // pretend success so bots don't learn to skip it
  }

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }

  if (message.length > 5000) {
    return { success: false, error: "Message is too long." };
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
      from: `"Portfolio Contact" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: safeEmail,
      subject: `New message from ${safeName}`,
      text: `From: ${safeName} <${safeEmail}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${safeName} (${safeEmail})</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { success: false, error: "Something went wrong sending your message. Try again later." };
  }
}