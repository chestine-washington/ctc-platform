import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sendEnquiry } from "@/lib/mailer";

const contactSchema = z.object({
  source: z.enum(["home", "contactPage"]),
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().max(5000).optional(),
  smsConsent: z.boolean().optional(),
});

const SOURCE_LABELS = { home: "Homepage", contactPage: "Contact page" } as const;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const name = [d.firstName, d.lastName].filter(Boolean).join(" ");
  try {
    await sendEnquiry({
      subject: `Website enquiry from ${name}${d.subject ? `: ${d.subject}` : ""}`,
      heading: `New message from the ${SOURCE_LABELS[d.source].toLowerCase()}`,
      visitor: { name: d.firstName, email: d.email },
      confirmation: {
        subject: "We received your message – Chance To Change",
        message:
          "Thank you for contacting Chance To Change. We've received your message and a member of our team will get back to you shortly.",
      },
      fields: [
        ["Name", name],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Subject", d.subject],
        ["Message", d.message],
        ["SMS consent", d.smsConsent ?? false],
        ["Sent from", SOURCE_LABELS[d.source]],
      ],
    });
  } catch (err) {
    console.error("[contact] email failed", err);
    return NextResponse.json(
      { success: false, message: "We couldn't send your message. Please call us or try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 201 });
}
