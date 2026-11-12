import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { getCategories, getPostsInCategory, trimWords } from "@/lib/blog";
import { BlogPageHeader } from "@/components/blog/blog-listing";
import { JsonLd } from "@/components/json-ld";

const DESCRIPTION =
  "Every topic we write about, from first steps and insurance through recovery, mental health and family support.";

export const metadata: Metadata = buildPageMetadata({
  title: "Browse by Topic",
  description: DESCRIPTION,
  path: "/blog/category",
});

const jsonLd = jsonLdGraph(
  webPageSchema("/blog/category", "WebPage", "Browse by Topic", DESCRIPTION),
  breadcrumbSchema("/blog/category", [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Topics", path: "/blog/category" },
  ]),
);

/** /blog/category: every topic, with counts and the latest article in each. */
export default function BlogTopics() {
  const categories = getCategories();
  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPageHeader title="Browse by Topic" description={DESCRIPTION} />

      <section className="py-14 lg:py-20">
        <div className="container max-w-5xl">
          <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-sage-dark">
              Blog
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-charcoal">Topics</span>
          </nav>

          {categories.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.map((category) => {
                  const latest = getPostsInCategory(category.slug)[0];
                  return (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="font-display text-xl font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                          {category.name}
                        </h2>
                        <span className="shrink-0 rounded-full bg-sage-light px-3 py-1 text-xs font-semibold text-sage-dark">
                          {category.count} {category.count === 1 ? "article" : "articles"}
                        </span>
                      </div>
                      {category.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{category.description}</p>
                      )}
                      {latest && (
                        <p className="mt-auto pt-4 border-t border-border text-sm">
                          <span className="text-muted-foreground">Latest: </span>
                          <span className="text-charcoal font-medium">{trimWords(latest.title, 10)}</span>
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sage-dark font-semibold">
                  <span aria-hidden="true">&larr;</span> All articles
                </Link>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-3">No topics yet</h2>
              <p className="text-muted-foreground mb-7">Topics appear here once articles have been published under them.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-white font-semibold hover:bg-sage-dark transition-colors"
              >
                Back to the blog
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
