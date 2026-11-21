import Image from "next/image";
import Link from "next/link";
import { CalendarDays, FolderOpen } from "lucide-react";
import { getAllPosts, getCategories, toSummary, trimWords } from "@/lib/blog";
import { PHONE } from "@/lib/site-data";

const TEL = `tel:+1${PHONE.replace(/\D/g, "")}`;

interface BlogSidebarProps {
  /** Category slug to highlight; none highlights "All articles". */
  active?: string | null;
  /** Article left out of the recent list (the one being read). */
  exclude?: string;
  /** The article page shows no dates, at the SEO consultant's request. */
  showDates?: boolean;
  /** The listings hide the topic list on mobile, where filter chips replace it. */
  topicsClassName?: string;
  backLink?: boolean;
}

/** Shared by the listings and the article page: topics, recent reads and the CTA. */
export function BlogSidebar({
  active = null,
  exclude,
  showDates = true,
  topicsClassName = "",
  backLink = false,
}: BlogSidebarProps) {
  const posts = getAllPosts();
  const categories = getCategories();
  const recent = posts.filter((p) => p.slug !== exclude).slice(0, 5).map(toSummary);

  return (
    <aside className="lg:col-span-4">
      <div className="lg:sticky lg:top-24 space-y-6">
        {categories.length > 0 && (
          <section className={`${topicsClassName} rounded-2xl border border-border bg-card p-6`}>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-base font-semibold text-charcoal flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-sage" aria-hidden="true" />
                Categories
              </h2>
              <Link href="/blog/category" className="text-xs font-semibold text-sage-dark hover:underline">
                See all
              </Link>
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/blog"
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? "text-charcoal/80 hover:bg-sage-light/40" : "bg-sage-light/60 text-sage-dark font-semibold"
                  }`}
                >
                  <span>All articles</span>
                  <span className="text-xs text-muted-foreground">{posts.length}</span>
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      active === category.slug
                        ? "bg-sage-light/60 text-sage-dark font-semibold"
                        : "text-charcoal/80 hover:bg-sage-light/40"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-muted-foreground">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {recent.length > 0 && (
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-base font-semibold text-charcoal mb-4 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-terracotta" aria-hidden="true" />
              Recent articles
            </h2>
            <ul className="space-y-4">
              {recent.map((post) => (
                <li key={post.slug}>
                  <Link href={post.url} className="group flex gap-3">
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-sage-light/40">
                      {post.image ? (
                        <Image src={post.image} alt="" fill sizes="56px" className="object-cover object-top" />
                      ) : (
                        <span className="absolute inset-0 bg-gradient-to-br from-sage-light via-sage-light/60 to-terracotta-light/50" />
                      )}
                    </span>
                    <span className="min-w-0 flex flex-col justify-center">
                      <span className="block font-medium text-sm text-charcoal leading-snug group-hover:text-sage-dark transition-colors">
                        {trimWords(post.title, 9)}
                      </span>
                      {showDates && <span className="block text-xs text-muted-foreground mt-1">{post.displayDate}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl bg-charcoal p-6 text-white">
          <h2 className="font-display text-lg font-semibold mb-2">Need to talk today?</h2>
          <p className="text-white/75 text-sm leading-relaxed mb-5">
            Our team answers confidentially, and the first conversation costs nothing.
          </p>
          <a
            href={TEL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Call {PHONE}
          </a>
          <Link
            href="/intake"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Start intake form
          </Link>
        </section>

        {backLink && (
          <Link href="/blog" className="inline-flex items-center gap-2 text-sage-dark font-semibold text-sm px-1">
            <span aria-hidden="true">&larr;</span> Back to all articles
          </Link>
        )}
      </div>
    </aside>
  );
}
