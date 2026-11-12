import "server-only";
import { Resend } from "resend";
import { BUSINESS_NAME, EMAIL, PHONE } from "@/lib/site-data";

// Enquiries are delivered by email through Resend; nothing is stored. Configure in .env:
//   RESEND_API_KEY (required), MAIL_FROM, MAIL_TO
// The sending domain (chancetochange.us) is verified in Resend.

function readConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email is not configured: set RESEND_API_KEY.");
  return {
    apiKey,
    from: process.env.MAIL_FROM || `Chance To Change <noreply@chancetochange.us>`,
    to: (process.env.MAIL_TO || EMAIL)
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean),
  };
}

let client: Resend | null = null;
const getClient = (apiKey: string) => (client ??= new Resend(apiKey));

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export type MailField = [label: string, value: string | boolean | Date | null | undefined];

function formatValue(value: MailField[1]): string {
  if (value === undefined || value === null || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (value instanceof Date) return value.toLocaleDateString("en-US", { timeZone: "UTC" });
  return value;
}

const FONT = "font-family:Arial,Helvetica,sans-serif";

/**
 * Emails the enquiry to the business (Reply-To = the visitor), then sends the visitor a
 * confirmation (Reply-To = the business inbox). Throws if the business copy fails, so the
 * form reports an error; a failed confirmation is only logged, because the enquiry arrived.
 */
export async function sendEnquiry({
  subject,
  heading,
  visitor,
  confirmation,
  fields,
}: {
  subject: string;
  heading: string;
  visitor: { name: string; email: string };
  confirmation: { subject: string; message: string };
  fields: MailField[];
}) {
  const config = readConfig();
  const resend = getClient(config.apiKey);
  const rows = fields.map(([label, value]) => [label, formatValue(value)] as const);

  const text = [heading, "", ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");
  const html = `<h2 style="${FONT};color:#2f4f3f">${escapeHtml(heading)}</h2>
<table cellpadding="8" style="border-collapse:collapse;${FONT};font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><th align="left" valign="top" style="border:1px solid #ddd;background:#f5f7f5;white-space:nowrap">${escapeHtml(label)}</th><td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  )
  .join("\n")}
</table>`;

  const notification = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: visitor.email,
    subject,
    text,
    html,
  });
  if (notification.error) {
    throw new Error(`Resend: ${notification.error.name}: ${notification.error.message}`);
  }

  const greeting = `Hi ${visitor.name},`;
  const signOff = `${BUSINESS_NAME}\n${PHONE} · ${EMAIL}`;
  const receipt = await resend.emails.send({
    from: config.from,
    to: visitor.email,
    replyTo: EMAIL,
    subject: confirmation.subject,
    text: `${greeting}\n\n${confirmation.message}\n\nIf you need us sooner, call ${PHONE} or reply to this email.\n\n${signOff}`,
    html: `<div style="${FONT};font-size:15px;line-height:1.6;color:#1f2a24;max-width:560px">
<p>${escapeHtml(greeting)}</p>
<p>${escapeHtml(confirmation.message)}</p>
<p>If you need us sooner, call <a href="tel:${PHONE.replace(/\D/g, "")}" style="color:#2f4f3f">${escapeHtml(PHONE)}</a> or reply to this email.</p>
<p style="color:#5b6b62;font-size:13px">${escapeHtml(BUSINESS_NAME)}<br>${escapeHtml(PHONE)} · ${escapeHtml(EMAIL)}</p>
</div>`,
  });
  if (receipt.error) {
    console.error("[mailer] confirmation email failed", receipt.error);
  }
}
