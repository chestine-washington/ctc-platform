import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { ContactContent } from "@/components/contact/contact-content";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Reach Chance to Change by phone, email, or our confidential contact form. Offices in Las Vegas, NV and Salt Lake City, UT, serving 11 states nationwide.",
  path: "/contact",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/contact",
    "ContactPage",
    "Contact Chance to Change",
    "Get in touch with Chance to Change for recovery, counseling, and support services.",
  ),
  breadcrumbSchema("/contact", [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
);

export default function Contact() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactContent />
    </>
  );
}
