import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import { getCategories, getCategory, getPostsInCategory } from "@/lib/blog";
import { BlogListing } from "@/components/blog/blog-listing";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const category = getCategory((await params).category);
  if (!category) return { title: "Topic Not Found", robots: { index: false, follow: true } };
  return buildPageMetadata({
    title: category.name,
    description: category.description ?? `Articles on ${category.name} from the Chance to Change team.`,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategory({ params }: PageProps<"/blog/category/[category]">) {
  const category = getCategory((await params).category);
  if (!category) notFound();
  const posts = getPostsInCategory(category.slug);

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          breadcrumbSchema(`/blog/category/${category.slug}`, [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/category/${category.slug}` },
          ]),
        )}
      />
      <BlogListing posts={posts} total={posts.length} category={category} />
    </>
  );
}
