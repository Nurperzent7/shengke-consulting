import { NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const topic = String(body.topic || "").trim();
    const date = String(body.date || "").trim();

    if (!name || !phone || !topic || !date) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    storeLead({
      type: "consultation",
      name,
      phone,
      topic,
      date,
      time: String(body.time || "").trim() || undefined,
      format: String(body.format || "").trim() || undefined,
      company: String(body.company || "").trim() || undefined,
      email: String(body.email || "").trim() || undefined,
      locale: String(body.locale || "").trim() || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
