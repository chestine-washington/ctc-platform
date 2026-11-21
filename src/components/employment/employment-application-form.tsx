"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SMS_CONSENT_TEXT =
  "By providing my phone number, I consent to receive SMS text messages from Chance to Change regarding my application status. Message & data rates may apply. Message frequency varies. Reply STOP to unsubscribe, HELP for help. View our Privacy Policy and SMS Terms.";

interface EmpFormData {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  emergencyFirstName: string;
  emergencyLastName: string;
  emergencyEmail: string;
  emergencyPhone: string;
  emergencyConsent: boolean;
  employmentType: string;
  dateAvailable: string;
  desiredSalary: string;
  licenses: string;
  education: string;
  workHistory: string;
  references: string;
  felony: string;
  felonyExplanation: string;
  authorizedToWork: string;
  consentBackground: string;
  excludedMedicaid: string;
  certification: boolean;
  smsConsent: boolean;
  signatureDate: string;
}

const initialEmpData: EmpFormData = {
  firstName: "", lastName: "", addressLine1: "", addressLine2: "", city: "", state: "", zipCode: "",
  phone: "", email: "",
  emergencyFirstName: "", emergencyLastName: "", emergencyEmail: "", emergencyPhone: "", emergencyConsent: false,
  employmentType: "", dateAvailable: "", desiredSalary: "",
  licenses: "", education: "", workHistory: "", references: "",
  felony: "", felonyExplanation: "",
  authorizedToWork: "", consentBackground: "",
  excludedMedicaid: "",
  certification: false, smsConsent: false, signatureDate: "",
};

const STEPS = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Emergency Contact" },
  { id: 3, label: "Availability" },
  { id: 4, label: "Credentials" },
  { id: 5, label: "Background" },
  { id: 6, label: "Consent & Submit" },
];

export function EmploymentApplicationForm({
  jobPosting,
}: {
  jobPosting: { id: string; title: string } | null;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<EmpFormData>(initialEmpData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = <K extends keyof EmpFormData>(field: K, value: EmpFormData[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return form.firstName.trim() && form.lastName.trim() && form.phone.trim() && form.email.trim() && form.addressLine1.trim();
      case 2: return true;
      case 3: return true;
      case 4: return form.education.trim() && form.workHistory.trim() && form.references.trim();
      case 5: return true;
      case 6: return form.certification;
      default: return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/employment-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          addressLine1: form.addressLine1,
          addressLine2: form.addressLine2 || undefined,
          city: form.city || undefined,
          state: form.state || undefined,
          zipCode: form.zipCode || undefined,
          phone: form.phone,
          email: form.email,
          emergencyFirstName: form.emergencyFirstName || undefined,
          emergencyLastName: form.emergencyLastName || undefined,
          emergencyEmail: form.emergencyEmail || undefined,
          emergencyPhone: form.emergencyPhone || undefined,
          emergencyConsent: form.emergencyConsent,
          employmentType: form.employmentType || undefined,
          dateAvailable: form.dateAvailable || undefined,
          desiredSalary: form.desiredSalary || undefined,
          licenses: form.licenses || undefined,
          education: form.education,
          workHistory: form.workHistory,
          references: form.references,
          felony: form.felony ? form.felony === "yes" : undefined,
          felonyExplanation: form.felonyExplanation || undefined,
          authorizedToWork: form.authorizedToWork ? form.authorizedToWork === "yes" : undefined,
          consentBackground: form.consentBackground ? form.consentBackground === "yes" : undefined,
          excludedMedicaid: form.excludedMedicaid ? form.excludedMedicaid === "yes" : undefined,
          certification: form.certification,
          smsConsent: form.smsConsent,
          signatureDate: form.signatureDate || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message ?? "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="pt-16 pb-20 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container max-w-xl text-center">
          <CheckCircle2 className="h-16 w-16 text-sage mx-auto mb-6" />
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Application Submitted
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Thank you for your interest in joining the Chance to Change team. Our HR department will review your application and contact you within 5 business days.
          </p>
          <Link href="/">
            <span className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sage text-white font-semibold hover:bg-sage-dark transition-all">
              Return Home
            </span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-16 bg-background">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 mb-6 text-sm font-medium text-sage">
          <Briefcase className="h-4 w-4" />
          {jobPosting ? `Applying for: ${jobPosting.title}` : "General Application"}
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {STEPS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => s.id < step && setStep(s.id)}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                s.id === step
                  ? "bg-sage text-white"
                  : s.id < step
                  ? "bg-sage-light text-sage-dark"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.id}</span>
            </button>
          ))}
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" required>
                  <Input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="First name" required className="rounded-lg" />
                </Field>
                <Field label="Last Name" required>
                  <Input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Last name" required className="rounded-lg" />
                </Field>
              </div>
              <Field label="Address Line 1" required>
                <Input value={form.addressLine1} onChange={(e) => update("addressLine1", e.target.value)} placeholder="Street address" required className="rounded-lg" />
              </Field>
              <Field label="Address Line 2">
                <Input value={form.addressLine2} onChange={(e) => update("addressLine2", e.target.value)} placeholder="Apt, suite, etc. (optional)" className="rounded-lg" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="City">
                  <Input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="City" className="rounded-lg" />
                </Field>
                <Field label="State">
                  <Select value={form.state} onValueChange={(v) => update("state", v)}>
                    <SelectTrigger aria-label="State" className="rounded-lg w-full"><SelectValue placeholder="State" /></SelectTrigger>
                    <SelectContent>
                      {["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Zip Code">
                  <Input value={form.zipCode} onChange={(e) => update("zipCode", e.target.value)} placeholder="Zip code" className="rounded-lg" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone Number" required>
                  <Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 555-5555" required className="rounded-lg" />
                </Field>
                <Field label="Email Address" required>
                  <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" required className="rounded-lg" />
                </Field>
              </div>
            </div>
          )}

          {/* STEP 2: Emergency Contact */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Emergency Contact Name - First">
                  <Input value={form.emergencyFirstName} onChange={(e) => update("emergencyFirstName", e.target.value)} placeholder="First name" className="rounded-lg" />
                </Field>
                <Field label="Emergency Contact Name - Last">
                  <Input value={form.emergencyLastName} onChange={(e) => update("emergencyLastName", e.target.value)} placeholder="Last name" className="rounded-lg" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Emergency Contact Email">
                  <Input type="email" value={form.emergencyEmail} onChange={(e) => update("emergencyEmail", e.target.value)} placeholder="email@example.com" className="rounded-lg" />
                </Field>
                <Field label="Emergency Contact Phone">
                  <Input type="tel" value={form.emergencyPhone} onChange={(e) => update("emergencyPhone", e.target.value)} placeholder="(555) 555-5555" className="rounded-lg" />
                </Field>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <Checkbox id="ec-consent" checked={form.emergencyConsent} onCheckedChange={(c) => update("emergencyConsent", c === true)} className="mt-1 shrink-0" />
                <label htmlFor="ec-consent" className="text-[11px] text-muted-foreground leading-relaxed">{SMS_CONSENT_TEXT}</label>
              </div>
            </div>
          )}

          {/* STEP 3: Availability */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block text-charcoal/90">Desired Employment Type</Label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: "fullTime", label: "Full-Time" },
                    { value: "partTime", label: "Part-Time" },
                    { value: "prn", label: "PRN (as needed)" },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="employmentType"
                        value={opt.value}
                        checked={form.employmentType === opt.value}
                        onChange={() => update("employmentType", opt.value)}
                        className="accent-sage"
                      />
                      <span className="text-sm text-charcoal/80">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Date Available to Start">
                  <Input type="date" value={form.dateAvailable} onChange={(e) => update("dateAvailable", e.target.value)} className="rounded-lg" />
                </Field>
                <Field label="Desired Salary">
                  <Input value={form.desiredSalary} onChange={(e) => update("desiredSalary", e.target.value)} placeholder="e.g. $45,000/year or $22/hour" className="rounded-lg" />
                </Field>
              </div>
            </div>
          )}

          {/* STEP 4: Credentials */}
          {step === 4 && (
            <div className="space-y-5">
              <Field label="Licenses & Certifications (License Type / State / License Number / Expiration Date)">
                <Textarea value={form.licenses} onChange={(e) => update("licenses", e.target.value)} placeholder="e.g. CPR - TX - 123456 - 12/2027" rows={2} className="rounded-lg" />
              </Field>
              <Field label="Education (Degree / Field of Study / Institution / Graduation Year)" required>
                <Textarea value={form.education} onChange={(e) => update("education", e.target.value)} placeholder="e.g. Bachelor's - Psychology - UT Austin - 2022" required rows={2} className="rounded-lg" />
              </Field>
              <Field label="Work History - Last 5 Years (Job Title / Company / Dates / Responsibilities)" required>
                <Textarea value={form.workHistory} onChange={(e) => update("workHistory", e.target.value)} placeholder="e.g. Case Manager - ABC Health - 2021-2024 - Managed client caseload" required rows={3} className="rounded-lg" />
              </Field>
              <Field label="References - Professional (Name / Relationship / Contact Info)" required>
                <Textarea value={form.references} onChange={(e) => update("references", e.target.value)} placeholder="e.g. Jane Doe - Former Supervisor - jane@email.com" required rows={3} className="rounded-lg" />
              </Field>
            </div>
          )}

          {/* STEP 5: Background */}
          {step === 5 && (
            <div className="space-y-5">
              <RadioQuestion label="Have you ever been convicted of a felony?" name="felony" value={form.felony} onChange={(v) => update("felony", v)} />
              {form.felony === "yes" && (
                <Field label="If yes, please explain">
                  <Textarea value={form.felonyExplanation} onChange={(e) => update("felonyExplanation", e.target.value)} placeholder="Optional explanation" rows={2} className="rounded-lg" />
                </Field>
              )}
              <RadioQuestion label="Are you authorized to work in the U.S.?" name="authorizedToWork" value={form.authorizedToWork} onChange={(v) => update("authorizedToWork", v)} />
              <RadioQuestion label="Do you consent to a background check?" name="consentBackground" value={form.consentBackground} onChange={(v) => update("consentBackground", v)} />
              <RadioQuestion label="Have you ever been excluded from Medicaid/Medicare?" name="excludedMedicaid" value={form.excludedMedicaid} onChange={(v) => update("excludedMedicaid", v)} />
            </div>
          )}

          {/* STEP 6: Consent & Submit */}
          {step === 6 && (
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Checkbox id="certification" checked={form.certification} onCheckedChange={(c) => update("certification", c === true)} className="mt-1" />
                <label htmlFor="certification" className="text-sm text-charcoal/80 leading-relaxed">
                  I certify that the information provided is true and complete to the best of my knowledge. I authorize verification of any information and understand that false statements may result in disqualification or dismissal.
                </label>
              </div>

              <Field label="Today&apos;s Date">
                <Input type="date" value={form.signatureDate} onChange={(e) => update("signatureDate", e.target.value)} className="rounded-lg" />
              </Field>

              {error && (
                <p className="text-sm text-destructive" role="alert">{error}</p>
              )}

              <div className="bg-sage-light/20 rounded-xl p-4 border border-sage/10">
                <div className="flex items-start gap-2">
                  <Checkbox id="sms-emp" checked={form.smsConsent} onCheckedChange={(c) => update("smsConsent", c === true)} className="mt-1 shrink-0" />
                  <label htmlFor="sms-emp" className="text-xs text-muted-foreground leading-relaxed">{SMS_CONSENT_TEXT}</label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="rounded-full border-border"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Previous
            </Button>

            {step < 6 ? (
              <Button
                type="button"
                onClick={() => canProceed() && setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="bg-sage hover:bg-sage-dark text-white rounded-full"
              >
                Continue <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!canProceed() || submitting}
                className="bg-terracotta hover:bg-terracotta-light text-white rounded-full font-semibold disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"} {!submitting && <CheckCircle2 className="h-4 w-4 ml-1" />}
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-sm font-medium mb-1.5 block text-charcoal/90">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}

function RadioQuestion({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label className="text-sm font-medium mb-2 block text-charcoal/90">{label}</Label>
      <div className="flex gap-4">
        {[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ].map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="accent-sage"
            />
            <span className="text-sm text-charcoal/80">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
