import nodemailer from "nodemailer";
import { BRAND, WEBINAR } from "@/components/webinar/content";

export interface Registration {
  firstName: string;
  email: string;
  whatsapp: string;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function transporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;
  if (!user || !pass) throw new Error("EMAIL_USER / EMAIL_APP_PASSWORD not set");
  return {
    user,
    mail: nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    }),
  };
}

/**
 * Sends the host a notification for every registration and the registrant a
 * confirmation. Throws if the host notification fails, so the visitor is never
 * told they're registered when no one received their details.
 */
export async function sendRegistrationEmails(r: Registration) {
  const { user, mail } = transporter();
  const receiver = process.env.EMAIL_RECEIVER || user;
  const when = `${WEBINAR.dateLabel}, ${WEBINAR.timeLabel}`;

  await mail.sendMail({
    from: `"${BRAND} Webinar" <${user}>`,
    to: receiver,
    replyTo: r.email,
    subject: `New webinar registration: ${r.firstName}`,
    text: `New free webinar registration\n\nName: ${r.firstName}\nEmail: ${r.email}\nWhatsApp: ${r.whatsapp}\n`,
    html: `<h2>New free webinar registration</h2>
<p><b>Name:</b> ${esc(r.firstName)}<br>
<b>Email:</b> ${esc(r.email)}<br>
<b>WhatsApp:</b> ${esc(r.whatsapp)}</p>`,
  });

  // The confirmation is best-effort: a bounce here shouldn't fail the signup.
  try {
    await mail.sendMail({
      from: `"${BRAND}" <${user}>`,
      to: r.email,
      replyTo: receiver,
      subject: "You're registered for the free live webinar!",
      text: `Hi ${r.firstName},\n\nYou're registered! Your seat for the free live webinar is saved.\n\nWhen: ${when}\nFormat: ${WEBINAR.format}\n\nWe'll send the joining details closer to the date. See you there!\n\n${BRAND}`,
      html: `<p>Hi ${esc(r.firstName)},</p>
<p><b>You're registered!</b> Your seat for the free live webinar is saved.</p>
<p><b>When:</b> ${esc(when)}<br><b>Format:</b> ${esc(WEBINAR.format)}</p>
<p>We'll send the joining details closer to the date. See you there!</p>
<p>${esc(BRAND)}</p>`,
    });
  } catch (err) {
    console.error("Confirmation email failed", err);
  }
}
