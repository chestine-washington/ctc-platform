import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { PHONE, EMAIL, BUSINESS_NAME, ADDRESSES } from "@/lib/site-data";
import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Chance To Change Supportive Services collects, uses, and protects your personal and health information, including HIPAA compliance details.",
  path: "/privacy-policy",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/privacy-policy",
    "WebPage",
    "Privacy Policy",
    "Chance To Change Supportive Services' privacy policy covering data collection, HIPAA compliance, and user rights.",
  ),
  breadcrumbSchema("/privacy-policy", [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]),
);

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader icon={Lock} eyebrow="Legal" title="Privacy Policy" description="Last updated: January 1, 2025" image="/images/privacy-hero.jpg" />
      <section className="py-16">
      <div className="container max-w-3xl">
        <div className="prose prose-sm max-w-none text-charcoal/80 space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you complete our intake form, contact us, or create an account. This may include your name, email address, phone number, date of birth, insurance information, and health-related information you choose to share.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services; to process your intake and connect you with appropriate programs; to communicate with you about your care; and to comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">3. HIPAA Compliance</h2>
            <p>{BUSINESS_NAME} is a HIPAA-covered entity. All protected health information (PHI) is handled in accordance with the Health Insurance Portability and Accountability Act of 1996. We will not use or disclose your PHI except as permitted or required by law, or as described in our Notice of Privacy Practices.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in our operations, with your insurance provider for billing purposes, or when required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information. For health-related information, your rights are governed by HIPAA. To exercise any of these rights, please contact us at info@chancetochange.us.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">7. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to analyze website traffic and improve our services. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-8 mb-3">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:<br />
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
