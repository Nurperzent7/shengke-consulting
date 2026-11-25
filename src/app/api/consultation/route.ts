import { NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";
import { sendLeadEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const topic = String(body.topic || "").trim();
    const date = String(body.date || "").trim();
    const time = String(body.time || "").trim();
    const consent = Boolean(body.consent);

    if (!name || !phone || !topic || !date || !time || !consent) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const email = String(body.email || "").trim() || undefined;
    const payload = {
      type: "consultation" as const,
      name,
      phone,
      topic,
      date,
      time,
      format: String(body.format || "").trim() || undefined,
      company: String(body.company || "").trim() || undefined,
      email,
      locale: String(body.locale || "").trim() || undefined,
    };

    storeLead(payload);

    try {
      await sendLeadEmail(payload);
    } catch {
      console.error("[consultation-email]", { status: "failed" });
      // Lead is stored even if email provider is unavailable.
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
