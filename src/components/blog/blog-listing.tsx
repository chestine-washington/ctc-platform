import Link from "next/link";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { PostCard } from "@/components/blog/post-card";
import { getCategories, toSummary, type BlogCategory, type BlogPost } from "@/lib/blog";
import { PHONE } from "@/lib/site-data";

/** The blog's photographic header, shared by the index, category and topics pages. */
export function BlogPageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <PageHeader
      icon={BookOpen}
      eyebrow="Insights"
      title={title}
      description={description}
      image="/images/terms-hero.jpg"
      imageAlt="Sunlit wooden bookshelves filled with books, with a trailing houseplant spilling over one shelf."
      imagePosition="top"
    />
  );
}

interface BlogListingProps {
  posts: BlogPost[];
  /** Total across all pages, for the article count. */
  total: number;
  category?: BlogCategory;
}

/** Index and category listings: posts beside a sidebar of topics, recent reads and a CTA. */
export function BlogListing({ posts, total, category }: BlogListingProps) {
  const categories = getCategories();

  return (
    <>
      <BlogPageHeader
        title={category ? category.name : "Insights & Updates"}
        description={
          category?.description ??
          "Guidance on recovery, mental health, housing and family support from the Chance to Change team."
        }
      />

      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              {categories.length > 0 && (
                <div className="lg:hidden -mx-1 mb-8 flex flex-wrap gap-2">
                  <Link
                    href="/blog"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      category ? "bg-card border border-border text-charcoal/80" : "bg-sage text-white"
                    }`}
                  >
                    All
                  </Link>
                  {categories.map((term) => (
                    <Link
                      key={term.slug}
                      href={`/blog/category/${term.slug}`}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        category?.slug === term.slug ? "bg-sage text-white" : "bg-card border border-border text-charcoal/80"
                      }`}
                    >
                      {term.name}
                    </Link>
                  ))}
                </div>
              )}

              {posts.length > 0 ? (
                <>
                  <div className="flex items-baseline justify-between mb-6">
                    <h2 className="font-display text-xl font-semibold text-charcoal">
                      {category ? category.name : "All articles"}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {total} {total === 1 ? "article" : "articles"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {posts.map((post) => (
                      <PostCard key={post.slug} post={toSummary(post)} />
                    ))}
                  </div>

                </>
              ) : (
                <div className="rounded-2xl border border-border bg-card p-10 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light">
                    <BookOpen className="h-6 w-6 text-sage-dark" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-charcoal mb-3">
                    {category ? "Nothing in this topic yet" : "Articles are on the way"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-7">
                    {category
                      ? "We have not published under this topic yet. Browse everything else, or reach out if you need support today."
                      : "We are putting together guidance on recovery, mental health, housing and family support. In the meantime, our team is ready to talk."}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href={category ? "/blog" : "/resources"}
                      className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-white font-semibold hover:bg-sage-dark transition-colors"
                    >
                      {category ? "All articles" : "Browse resources"}
                    </Link>
                    <a
                      href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-charcoal hover:border-sage/40 transition-colors"
                    >
                      Call {PHONE}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <BlogSidebar active={category?.slug ?? null} topicsClassName="hidden lg:block" />
          </div>
        </div>
      </section>
    </>
  );
}
