import { NextResponse } from "next/server";
import { HONEYPOT_FIELD, validateEnquiry } from "@/lib/enquiry/schema";
import { submitEnquiry } from "@/lib/enquiry/submit";
import { getEnquiryInbox, getMailer } from "@/lib/mail";

export const runtime = "nodejs"; // nodemailer needs Node.js APIs

/** Thin controller: parse → validate → hand off to the use case. */
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field: pretend success, send nothing.
  if ((body as Record<string, unknown>)[HONEYPOT_FIELD]) {
    return NextResponse.json({ ok: true });
  }

  const result = validateEnquiry(body);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  try {
    await submitEnquiry(result.data, getMailer(), getEnquiryInbox());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return NextResponse.json({ error: "Could not send your enquiry" }, { status: 502 });
  }
}
