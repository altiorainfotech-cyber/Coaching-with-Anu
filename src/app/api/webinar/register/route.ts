import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (!firstName || !/^\+?[\d\s().-]{7,20}$/.test(whatsapp) || !EMAIL_RE.test(email) || body.consent !== true) {
    return NextResponse.json({ error: "Invalid registration" }, { status: 400 });
  }

  // TODO: forward { firstName, email, whatsapp } to the email provider / CRM
  // (e.g. Mailchimp, ConvertKit, Zoom Webinars). Until then registrations are
  // validated but NOT stored anywhere.
  return NextResponse.json({ ok: true });
}
