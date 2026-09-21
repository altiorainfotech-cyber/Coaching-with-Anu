import { NextResponse } from "next/server";
import { sendRegistrationEmails } from "@/lib/mailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s().-]{7,20}$/;

export async function POST(request: Request) {
  let body: { firstName?: unknown; email?: unknown; whatsapp?: unknown; consent?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
  if (
    !firstName ||
    firstName.length > 100 ||
    !EMAIL_RE.test(email) ||
    !PHONE_RE.test(whatsapp) ||
    body.consent !== true
  ) {
    return NextResponse.json({ error: "Invalid registration" }, { status: 400 });
  }

  try {
    await sendRegistrationEmails({ firstName, email, whatsapp });
  } catch (err) {
    console.error("Registration email failed", err);
    return NextResponse.json({ error: "Could not register" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
