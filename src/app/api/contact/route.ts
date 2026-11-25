import { NextResponse } from "next/server";

/** Contact request form removed per TZ — use /api/consultation only. */
export async function POST() {
  return NextResponse.json(
    { ok: false, error: "use_consultation_form" },
    { status: 410 },
  );
}
