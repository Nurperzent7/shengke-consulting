import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const line = JSON.stringify({ ...body, createdAt: new Date().toISOString() }) + "\n";
    await appendFile(path.join(dir, "leads.jsonl"), line, "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
