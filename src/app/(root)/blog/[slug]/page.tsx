import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema, jsonLdGraph } from "@/lib/schema";
import { getAllPosts, getPost, getRelatedPosts, trimWords } from "@/lib/blog";
import { BlogHeader, blogThemeFor } from "@/components/blog/blog-header";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { RelatedPostCard } from "@/components/blog/post-card";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const describe = (post: NonNullable<ReturnType<typeof getPost>>) =>
  post.metaDescription ?? trimWords(post.excerpt, 30);

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: true } };
  const metadata = buildPageMetadata({
    // A custom SEO title is used whole; otherwise the template appends "| Chance to Change".
    title: post.seoTitle ?? post.title,
    absoluteTitle: Boolean(post.seoTitle),
    description: describe(post),
    path: post.url,
    type: "article",
    ...(post.image ? { image: post.image } : {}),
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
      // Featured images are not cut to 1200x630, so do not declare a size for them.
      ...(post.image ? { images: [{ url: post.image, alt: post.imageAlt || post.title }] } : {}),
    },
  };
}

/**
 * A single article: a topic-themed header, then the featured image, excerpt and prose beside
 * the blog sidebar, then related reading. No publish date or read time, at the SEO
 * consultant's request.
 */
export default async function BlogArticle({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd
        data={jsonLdGraph(
          blogPostingSchema({ ...post, description: describe(post) }),
          breadcrumbSchema(post.url, [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: post.url },
          ]),
        )}
      />
      <article>
        <BlogHeader
          theme={blogThemeFor(post.category)}
          eyebrow={post.category?.name ?? "Blog"}
          eyebrowHref={post.category ? `/blog/category/${post.category.slug}` : "/blog"}
          title={post.title}
        />

        <section className="py-14 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-8 min-w-0">
                {post.image && (
                  <figure className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-sage-light/30 shadow-sm mb-8 lg:mb-10">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover"
                    />
                  </figure>
                )}

                {post.excerpt && (
                  <p className="border-l-4 border-sage pl-5 italic text-xl sm:text-2xl leading-relaxed text-muted-foreground mb-8 lg:mb-10">
                    {post.excerpt}
                  </p>
                )}

                {/* Trusted HTML: rendered at build time from Markdown files in this repository. */}
                <div className="ctc-prose text-charcoal leading-relaxed" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>

              <BlogSidebar active={post.category?.slug ?? null} exclude={post.slug} showDates={false} backLink />
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="bg-warm-cream border-t border-border py-16 lg:py-20">
          <div className="container max-w-5xl">
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <div>
                <p className="text-sage font-semibold text-sm uppercase tracking-wider">Keep reading</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mt-2">More from our team</h2>
              </div>
              <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sage-dark font-semibold text-sm shrink-0">
                All articles <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((item) => (
                <RelatedPostCard key={item.slug} post={item} />
              ))}
            </div>

            <Link href="/blog" className="sm:hidden mt-6 inline-flex items-center gap-2 text-sage-dark font-semibold">
              All articles <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
