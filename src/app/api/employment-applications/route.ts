import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { sendEnquiry } from "@/lib/mailer";

const text = (max = 500) => z.string().trim().max(max).optional();
const dateField = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? new Date(v) : undefined));

const employmentApplicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  addressLine1: z.string().trim().min(1, "Address is required").max(200),
  addressLine2: text(200),
  city: text(100),
  state: text(50),
  zipCode: text(20),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40),
  email: z.string().trim().email("Enter a valid email address"),

  emergencyFirstName: text(100),
  emergencyLastName: text(100),
  emergencyEmail: text(200),
  emergencyPhone: text(40),
  emergencyConsent: z.boolean().optional(),

  employmentType: z.enum(["fullTime", "partTime", "prn"]).optional(),
  dateAvailable: dateField,
  desiredSalary: text(100),

  licenses: text(2000),
  education: z.string().trim().min(1, "Education is required").max(5000),
  workHistory: z.string().trim().min(1, "Work history is required").max(10000),
  references: z.string().trim().min(1, "References are required").max(5000),

  felony: z.boolean().optional(),
  felonyExplanation: text(2000),
  authorizedToWork: z.boolean().optional(),
  consentBackground: z.boolean().optional(),
  excludedMedicaid: z.boolean().optional(),

  certification: z.boolean().refine((v) => v === true, "You must certify the information provided"),
  smsConsent: z.boolean().optional(),
  signatureDate: dateField,
});

const EMPLOYMENT_TYPES = { fullTime: "Full-Time", partTime: "Part-Time", prn: "PRN" } as const;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }

  const parsed = employmentApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const name = `${d.firstName} ${d.lastName}`;
  const address = [d.addressLine1, d.addressLine2, [d.city, d.state, d.zipCode].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join("\n");
  const emergencyName = [d.emergencyFirstName, d.emergencyLastName].filter(Boolean).join(" ");

  try {
    await sendEnquiry({
      subject: `Employment application from ${name}`,
      heading: "New employment application",
      visitor: { name: d.firstName, email: d.email },
      confirmation: {
        subject: "We received your application – Chance To Change",
        message:
          "Thank you for applying to work with Chance To Change. We've received your employment application, and our team will review it and contact you about next steps.",
      },
      fields: [
        ["Name", name],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Address", address],
        ["Emergency contact", emergencyName],
        ["Emergency email", d.emergencyEmail],
        ["Emergency phone", d.emergencyPhone],
        ["Emergency contact consent", d.emergencyConsent],
        ["Employment type", d.employmentType ? EMPLOYMENT_TYPES[d.employmentType] : undefined],
        ["Date available", d.dateAvailable],
        ["Desired salary", d.desiredSalary],
        ["Licenses / certifications", d.licenses],
        ["Education", d.education],
        ["Work history", d.workHistory],
        ["References", d.references],
        ["Felony conviction", d.felony],
        ["Felony explanation", d.felonyExplanation],
        ["Authorized to work in the US", d.authorizedToWork],
        ["Consents to background check", d.consentBackground],
        ["Excluded from Medicaid", d.excludedMedicaid],
        ["Certified information is true", d.certification],
        ["SMS consent", d.smsConsent],
        ["Signature date", d.signatureDate],
      ],
    });
  } catch (err) {
    console.error("[employment] email failed", err);
    return NextResponse.json(
      { success: false, message: "We couldn't send your application. Please call us or try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: "Application submitted successfully." }, { status: 201 });
}
