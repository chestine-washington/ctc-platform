import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PHONE, EMAIL, BUSINESS_NAME, ADDRESSES } from "@/lib/site-data";
import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Chance To Change Supportive Services website, intake forms, and SMS communications.",
  path: "/terms-conditions",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/terms-conditions",
    "WebPage",
    "Terms & Conditions",
    "Terms and conditions governing use of the Chance To Change Supportive Services website and services.",
  ),
  breadcrumbSchema("/terms-conditions", [
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ]),
);

export default function TermsConditions() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader icon={FileText} eyebrow="Legal" title="Terms & Conditions" description="Last updated: January 1, 2025" image="/images/terms-hero.jpg" />
      <section className="py-16">
      <div className="container max-w-3xl">
        <div className="prose prose-sm max-w-none text-charcoal/80 space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the {BUSINESS_NAME} website (chancetochange.us), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">2. Eligibility</h2>
            <p>You must be at least 18 years old to use our intake form and services, or be accompanied by a parent or legal guardian if you are a minor. By submitting an intake form, you confirm that the information provided is accurate and complete to the best of your knowledge.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">3. Services Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute medical advice. {BUSINESS_NAME} is not a hospital or emergency facility. In case of a medical emergency, call 911 immediately.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">4. Confidentiality</h2>
            <p>All information submitted through our intake form or communications is treated as confidential and is protected under HIPAA regulations. We will not disclose your information without your written consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">5. SMS Communications</h2>
            <p>By providing your phone number and opting in, you consent to receive SMS text messages from {BUSINESS_NAME} regarding your inquiry, services, and appointment reminders. Message and data rates may apply. Reply STOP at any time to unsubscribe.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">6. Limitation of Liability</h2>
            <p>{BUSINESS_NAME} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">8. Contact Information</h2>
            <p>For questions regarding these Terms, contact us at:<br />
            Phone: {PHONE}<br />
            Email: {EMAIL}<br />
            {ADDRESSES.map((addr) => (
              <span key={addr.city}>Address: {addr.line1}, {addr.line2}<br /></span>
            ))}
            </p>
          </section>
        </div>
      </div>
      </section>
    </>
  );
}
