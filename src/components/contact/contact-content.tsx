"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/layout/page-header";
import {
  PHONE,
  EMAIL,
  ADDRESSES,
  BUSINESS_NAME,
  STATES_SERVED,
} from "@/lib/site-data";

const SMS_CONSENT_TEXT =
  "By providing my phone number, I consent to receive SMS text messages from Chance to Change regarding my application status. Message & data rates may apply. Message frequency varies. Reply STOP to unsubscribe, HELP for help. View our Privacy Policy and SMS Terms.";

const STATE_PINS: Record<string, { city: string; isOffice?: boolean }> = {
  Utah: { city: "Salt Lake City", isOffice: true },
  Nevada: { city: "Las Vegas", isOffice: true },
  Texas: { city: "Statewide" },
  Michigan: { city: "Statewide" },
  Georgia: { city: "Statewide" },
  Tennessee: { city: "Statewide" },
};

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contactPage",
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName") || undefined,
          phone: formData.get("phone") || undefined,
          email: formData.get("email"),
          subject: formData.get("subject") || undefined,
          message: formData.get("message") || undefined,
          smsConsent: formData.get("smsConsent") === "on",
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

  return (
    <>
      <PageHeader
        icon={MessageCircle}
        eyebrow="Contact Us"
        title="We're Here to Listen"
        description="Whether you're ready to begin treatment, need information about our programs, or just want to talk, we're here for you. Reach out however feels most comfortable."
        image="/images/intake-hero.png"
        imageAlt="A Chance to Change team member holding a client’s hands in both of theirs during a supportive conversation."
      />

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-20">
        <div className="container">
          {/* Names the section for screen readers so the cards below start at h3
              under a real h2, rather than jumping straight down from the page h1. */}
          <h2 className="sr-only">Ways to reach us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sage font-medium hover:underline text-base"
                  >
                    {PHONE}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Mon-Fri 8am-6pm CT | Sat 9am-1pm CT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sage font-medium hover:underline text-base"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Offices
                  </h3>
                  {ADDRESSES.map((addr) => (
                    <p key={addr.city} className="text-charcoal/80 text-base">
                      {addr.line1}, {addr.line2}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Office Hours
                  </h3>
                  <p className="text-charcoal/80 text-sm">
                    Monday - Friday: 8:00 AM - 6:00 PM CT
                  </p>
                  <p className="text-charcoal/80 text-sm">
                    Saturday: 9:00 AM - 1:00 PM CT
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Emergency: Call 911 or 988
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                <h3 className="font-display font-semibold text-charcoal text-sm mb-2">
                  In Crisis Right Now?
                </h3>
                <p className="text-sm text-charcoal/80 mb-2">
                  Call or text{" "}
                  <a
                    href="tel:988"
                    className="font-bold text-destructive underline"
                  >
                    988
                  </a>{" "}
                  for the National Suicide & Crisis Lifeline, free,
                  confidential, available 24/7.
                </p>
                <p className="text-sm text-charcoal/80">
                  For immediate emergencies, call{" "}
                  <a
                    href="tel:911"
                    className="font-bold text-destructive underline"
                  >
                    911
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                  <CheckCircle2 className="h-12 w-12 text-sage mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    Message Sent
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Link href="/">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-white font-semibold hover:bg-sage-dark transition-all duration-200">
                      Return Home
                    </span>
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5"
                >
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All information is kept strictly confidential.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        First Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Your first name"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share as much or as little as you'd like..."
                      rows={4}
                      className="rounded-lg"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                  <div className="flex items-start gap-2">
                    <Checkbox id="sms-consent" name="smsConsent" className="mt-1" />
                    <label
                      htmlFor="sms-consent"
                      className="text-xs text-muted-foreground leading-relaxed"
                    >
                      {SMS_CONSENT_TEXT}
                    </label>
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-sage hover:bg-sage-dark text-white rounded-full py-3 font-semibold disabled:opacity-60"
                  >
                    <Send className="h-4 w-4 mr-2" /> {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8 bg-background">
        <div className="container">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal text-center mb-8">
            Find Us
          </h2>
          <div
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
            style={{ height: "450px" }}
          >
            <iframe
              src="https://www.google.com/maps?q=732+South+6th+Street+Suite+4721+Las+Vegas+NV+89101&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chance to Change Location"
            />
          </div>
        </div>
      </section>

      {/* States We Serve */}
      <section className="py-16 lg:py-20 bg-sage-light/20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Nationwide Coverage
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              States We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {BUSINESS_NAME} operates programs and services across{" "}
              {STATES_SERVED.length} states, providing accessible care and
              support to communities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {STATES_SERVED.map((state) => {
              const pin = STATE_PINS[state];
              const isOffice = pin?.isOffice;
              return (
                <div
                  key={state}
                  className={`rounded-xl p-5 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                    isOffice
                      ? "bg-sage border-sage/30 text-white"
                      : "bg-card border-border hover:border-sage/30"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin
                      className={`h-5 w-5 ${isOffice ? "text-white" : "text-sage"}`}
                    />
                    <h3
                      className={`font-display font-semibold ${isOffice ? "text-white" : "text-charcoal"}`}
                    >
                      {state}
                      {isOffice && (
                        <span className="ml-2 text-xs font-normal opacity-95">
                          (Office)
                        </span>
                      )}
                    </h3>
                  </div>
                  <p
                    className={`text-sm ${isOffice ? "text-white/95" : "text-muted-foreground"}`}
                  >
                    {pin?.city || "Regional Services"}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Services availability may vary by location. Contact us to confirm
            service availability in your area.
          </p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              How to Get Started
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Taking the first step is often the hardest part. Here&apos;s how
              we make it as easy as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Reach Out",
                desc: "Call us, fill out the intake form, or email us. Any method works — there's no wrong way to start.",
                icon: <Phone className="h-6 w-6 text-sage" />,
              },
              {
                step: "2",
                title: "Free Assessment",
                desc: "A licensed counselor conducts a confidential assessment to understand your needs and recommend the right services.",
                icon: <Users className="h-6 w-6 text-sage" />,
              },
              {
                step: "3",
                title: "Begin Your Journey",
                desc: "Once enrolled, you&apos;ll receive a personalized plan and ongoing support from our dedicated team.",
                icon: <ArrowRight className="h-6 w-6 text-sage" />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <span className="text-sage font-bold text-sm">
                  Step {item.step}
                </span>
                <h3 className="font-display text-lg font-semibold text-charcoal mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
