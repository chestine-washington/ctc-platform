import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";
import { BlogListing } from "@/components/blog/blog-listing";
import { JsonLd } from "@/components/json-ld";

const DESCRIPTION =
  "Articles on addiction recovery, mental health, housing, and family support written by the Chance to Change team. New guidance posted regularly.";

export const metadata: Metadata = buildPageMetadata({
  title: "Recovery & Mental Health Blog",
  description: DESCRIPTION,
  path: "/blog",
});

const jsonLd = jsonLdGraph(
  webPageSchema("/blog", "WebPage", "Recovery & Mental Health Blog", DESCRIPTION),
  breadcrumbSchema("/blog", [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
);

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogListing posts={posts} total={posts.length} />
    </>
  );
}
