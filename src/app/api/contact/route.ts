import { NextResponse } from "next/server";
import { storeLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    storeLead({
      type: "contact",
      name,
      phone,
      message,
      company: String(body.company || "").trim() || undefined,
      email: String(body.email || "").trim() || undefined,
      service: String(body.service || "").trim() || undefined,
      locale: String(body.locale || "").trim() || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
