import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/lib/blog";

interface Props {
  posts: BlogPostSummary[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  tone?: "cream" | "background";
}

/** The latest articles, on the homepage and Resources. Absent when nothing is published. */
export function LatestPosts({
  posts,
  eyebrow = "Insights",
  heading = "Latest from our team",
  intro,
  tone = "cream",
}: Props) {
  if (!posts.length) return null;

  return (
    <section className={`py-20 lg:py-28 ${tone === "cream" ? "bg-warm-cream" : "bg-background"}`}>
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">{eyebrow}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-3">{heading}</h2>
            {intro && <p className="text-muted-foreground mt-3 leading-relaxed">{intro}</p>}
          </div>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-sage-dark font-semibold">
              View all articles <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {post.image ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-sage-light/30">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-2 bg-gradient-to-r from-sage via-sage-light to-terracotta-light" aria-hidden="true" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wider text-sage font-semibold mb-2">
                  {post.category?.name ?? "Article"}
                  <span className="text-muted-foreground font-normal normal-case tracking-normal"> &middot; {post.displayDate}</span>
                </p>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2 leading-snug group-hover:text-sage-dark transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
