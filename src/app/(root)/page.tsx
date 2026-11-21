import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { serviceItemListSchema, faqSchema, jsonLdGraph } from "@/lib/schema";
import { SERVICES, FAQ_ITEMS, PHONE } from "@/lib/site-data";
import { HomeContent } from "@/components/home/home-content";
import { JsonLd } from "@/components/json-ld";
import { getLatestPosts } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata({
  title: "Licensed Recovery & Support Services | Chance to Change",
  absoluteTitle: true,
  description: `Chance to Change offers addiction recovery, mental health counseling, housing, and job placement support services across 11 states. Call ${PHONE}.`,
  path: "/",
});

const jsonLd = jsonLdGraph(
  serviceItemListSchema(
    "/",
    SERVICES.map((s) => ({
      title: s.title,
      slug: s.slug,
      shortDesc: s.shortDesc,
    })),
  ),
  faqSchema("/", FAQ_ITEMS),
);

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeContent latestPosts={getLatestPosts(3)} />
    </>
  );
}
