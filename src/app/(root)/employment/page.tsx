import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { PageHeader } from "@/components/layout/page-header";
import { EmploymentApplicationForm } from "@/components/employment/employment-application-form";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers at Chance to Change",
  absoluteTitle: true,
  description:
    "Explore open positions at Chance to Change in counseling, case management, and peer support roles across NV, UT, and 9 other states. Join our team.",
  path: "/employment",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/employment",
    "WebPage",
    "Employment Application",
    "Submit a general employment application to Chance to Change.",
  ),
  breadcrumbSchema("/employment", [
    { name: "Home", path: "/" },
    { name: "Employment", path: "/employment" },
  ]),
);

export default function GeneralApplication() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        icon={Briefcase}
        eyebrow="Careers"
        title="Employment Application"
        description="Join our team. Tell us about your experience and the role you are interested in."
        image="/images/employment-hero.jpg"
        imageAlt="Two Chance to Change team members working together over a laptop in a sunlit, plant-filled office."
      />
      <EmploymentApplicationForm jobPosting={null} />
    </>
  );
}
