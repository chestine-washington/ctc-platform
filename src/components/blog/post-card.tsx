import Image from "next/image";
import Link from "next/link";
import { trimWords, type BlogPostSummary } from "@/lib/blog";

/** A card in the blog listings: image, topic and date, title, excerpt. */
export function PostCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="group bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-sage/30 transition-all duration-300">
      {post.image ? (
        <Link href={post.url} className="block relative aspect-[16/10] overflow-hidden bg-sage-light/30" tabIndex={-1} aria-hidden="true">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      ) : (
        <div className="h-1.5 bg-gradient-to-r from-sage via-sage-light to-terracotta-light" aria-hidden="true" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-wider text-sage font-semibold mb-2">
          {post.category?.name ?? "Article"}
          <span className="text-muted-foreground font-normal normal-case tracking-normal"> &middot; {post.displayDate}</span>
        </p>
        <h3 className="font-display text-lg font-semibold text-charcoal mb-2 leading-snug">
          <Link href={post.url} className="hover:text-sage-dark transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{trimWords(post.excerpt, 20)}</p>
        <Link href={post.url} className="mt-4 inline-flex items-center gap-2 text-sage-dark font-semibold text-sm">
          Read article <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}

/** Image-topped card used for related reading and the article 404. */
export function RelatedPostCard({ post, showExcerpt = true }: { post: BlogPostSummary; showExcerpt?: boolean }) {
  return (
    <Link
      href={post.url}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-sage/30 transition-all duration-300"
    >
      <span className="relative block w-full aspect-[16/9] overflow-hidden bg-sage-light/40">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="absolute inset-0 bg-gradient-to-br from-sage-light via-sage-light/60 to-terracotta-light/50" />
        )}
      </span>
      <span className="flex flex-col min-w-0 p-5">
        {post.category && (
          <span className="block text-xs uppercase tracking-wider text-sage font-semibold mb-2">{post.category.name}</span>
        )}
        <span className="block font-display text-lg font-semibold text-charcoal leading-snug group-hover:text-sage-dark transition-colors mb-2">
          {post.title}
        </span>
        {showExcerpt && (
          <span className="block text-muted-foreground text-sm leading-relaxed">{trimWords(post.excerpt, 18)}</span>
        )}
      </span>
    </Link>
  );
}
