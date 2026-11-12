import Image from "next/image";
import Link from "next/link";
import { BookOpen, ClipboardCheck, Clock, Phone } from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { SERVICES, PHONE } from "@/lib/site-data";
import { RelatedPostCard } from "@/components/blog/post-card";

export type NotFoundArea = "site" | "blog" | "services";

const HERO: Record<NotFoundArea, string> = {
  blog: "/images/resources-hero.jpg",
  services: "/images/about-team.png",
  site: "/images/contact-warm.png",
};

const COPY: Record<NotFoundArea, { eyebrow: string; title: string; body: string; cta: [string, string] }> = {
  blog: {
    eyebrow: "Article not found",
    title: "This article has moved on",
    body: "The link may be out of date, or the piece renamed. Everything we have written is still here.",
    cta: ["/blog", "Browse all articles"],
  },
  services: {
    eyebrow: "Service not found",
    title: "That service page is not here",
    body: "We run seven connected programmes. One of these is probably what you were looking for.",
    cta: ["/services", "See all services"],
  },
  site: {
    eyebrow: "Page not found",
    title: "This page took a wrong turn",
    body: "The link may be out of date or the address mistyped. Here is where most people are heading.",
    cta: ["/", "Back to the homepage"],
  },
};

const DESTINATIONS = [
  { href: "/services", title: "Our services", body: "Seven connected programmes, from recovery to housing.", icon: Clock },
  { href: "/resources", title: "Resources & crisis lines", body: "Immediate help, plus guidance you can read now.", icon: BookOpen },
  { href: "/intake", title: "Start the intake form", body: "A confidential assessment, at no cost.", icon: ClipboardCheck },
  { href: "/contact", title: "Talk to our team", body: "Phone, email, or a message from the site.", icon: Phone },
];

/**
 * The error page. The hero, copy and suggestions change with the section the visitor was
 * trying to reach, so a missing article and a missing service page do not offer the same
 * generic list.
 */
export function NotFoundView({ area = "site" }: { area?: NotFoundArea }) {
  const copy = COPY[area];
  const tel = `tel:+1${PHONE.replace(/\D/g, "")}`;

  return (
    <div className="flex flex-col bg-background">
      <section className="relative overflow-hidden">
        <Image src={HERO[area]} alt="" fill priority sizes="100vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/85" />

        <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
          <span
            className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-10 lg:-right-16 font-display font-bold leading-none tracking-tighter text-[13rem] lg:text-[17rem] text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.28)" }}
          >
            404
          </span>
          <span
            className="md:hidden absolute -bottom-8 -right-4 font-display font-bold leading-none tracking-tighter text-[8rem] text-transparent"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.24)" }}
          >
            404
          </span>
        </span>

        <div className={`container relative z-10 text-center ${area === "site" ? "py-16 lg:py-24" : "pt-32 pb-16 lg:pb-24"}`}>
          {area === "site" && (
            <Link href="/" className="inline-flex items-center gap-2.5 mb-12">
              <Image src="/logo-192.png" alt="Chance to Change" width={36} height={36} className="h-9 w-9 rounded-sm object-contain" />
              <span className="text-left">
                <span className="block font-display font-bold text-lg text-white leading-tight">Chance to Change</span>
                <span className="block text-[10px] text-white/60 tracking-widest uppercase leading-tight">Supportive Services, LLC</span>
              </span>
            </Link>
          )}

          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta-light" />
              <span className="font-semibold text-xs uppercase tracking-wider text-white">{copy.eyebrow}</span>
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">{copy.title}</h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">{copy.body}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={copy.cta[0]} className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-semibold text-white hover:bg-sage-dark transition-colors">
                {copy.cta[1]}
              </Link>
              <a href={tel} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          {area === "blog" ? (
            <BlogSuggestions />
          ) : area === "services" ? (
            <>
              <div className="flex items-baseline justify-between gap-4 mb-8">
                <h2 className="font-display text-2xl font-bold text-charcoal">Our programmes</h2>
                <Link href="/services" className="inline-flex items-center gap-2 text-sage-dark font-semibold text-sm shrink-0">
                  View all seven <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.slice(0, 3).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-sage/30 transition-all duration-300"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-sage-light/40">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </span>
                    <span className="p-5">
                      <span className="block font-display text-lg font-semibold text-charcoal leading-snug group-hover:text-sage-dark transition-colors mb-2">
                        {service.metaTitle ?? service.title}
                      </span>
                      <span className="block text-muted-foreground text-sm leading-relaxed">{service.shortDesc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Where most people are heading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {DESTINATIONS.map(({ href, title, body, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all duration-300"
                  >
                    <span className="h-12 w-12 shrink-0 rounded-xl bg-sage-light flex items-center justify-center text-sage-dark">
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-semibold text-charcoal group-hover:text-sage-dark transition-colors mb-1">
                        {title}
                      </span>
                      <span className="block text-muted-foreground text-sm leading-relaxed">{body}</span>
                    </span>
                    <span className="ml-auto shrink-0 text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogSuggestions() {
  const posts = getLatestPosts(3);
  return (
    <>
      <h2 className="font-display text-2xl font-bold text-charcoal mb-8">Recent from our team</h2>
      {posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <RelatedPostCard key={post.slug} post={post} showExcerpt={false} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          Nothing is published yet.{" "}
          <Link href="/resources" className="text-sage-dark font-semibold hover:underline">
            Browse resources instead
          </Link>
          .
        </p>
      )}
    </>
  );
}
