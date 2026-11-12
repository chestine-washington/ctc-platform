import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { IntakeContent } from "@/components/intake/intake-content";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Intake Form",
  description:
    "Complete the Chance to Change intake form to get started with our services.",
  path: "/intake",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/intake",
    "WebPage",
    "Intake Form",
    "Complete the intake form for recovery and support services at Chance to Change.",
  ),
  breadcrumbSchema("/intake", [
    { name: "Home", path: "/" },
    { name: "Intake", path: "/intake" },
  ]),
);

export default function Intake() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <IntakeContent />
    </>
  );
}
