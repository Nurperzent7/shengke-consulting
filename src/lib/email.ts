import { contacts } from "@/lib/constants";

type LeadMail = {
  type: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  topic?: string;
  date?: string;
  time?: string;
  format?: string;
  locale?: string;
  message?: string;
};

function formatBody(payload: LeadMail): string {
  return [
    `Type: ${payload.type}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.company ? `Company: ${payload.company}` : null,
    payload.topic ? `Topic: ${payload.topic}` : null,
    payload.date ? `Date: ${payload.date}` : null,
    payload.time ? `Time: ${payload.time}` : null,
    payload.format ? `Format: ${payload.format}` : null,
    payload.locale ? `Locale: ${payload.locale}` : null,
    payload.message ? `Message: ${payload.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Sends lead notification to the company mailbox when RESEND_API_KEY is configured. */
export async function sendLeadEmail(payload: LeadMail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "Shengke Consulting <onboarding@resend.dev>";
  const to = process.env.LEADS_TO_EMAIL || contacts.email;
  const subject = `[Shengke] ${payload.type}: ${payload.name}`;
  const text = formatBody(payload);

  if (!apiKey) {
    console.info("[lead-email-pending]", { to, subject, text });
    return;
  }

  const recipients = [to];
  if (payload.email) recipients.push(payload.email);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[lead-email-failed]", err);
    throw new Error("email_failed");
  }
}
