import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Brain, Briefcase, HeartPulse, House, Puzzle, Sprout, Users } from "lucide-react";

export interface BlogTheme {
  id: string;
  /** Matched against a category's slug and name, in order, so a new category picks up the
      right look without any setup. The first theme to match wins. */
  keywords: string[];
  icon: LucideIcon;
  /** Dark at the top-left, where the eyebrow and title sit, so white text keeps its contrast. */
  gradient: string;
  glows: [string, string];
}

/** One look per service programme, plus a general one for everything else. */
export const BLOG_THEMES: BlogTheme[] = [
  { id: "recovery", keywords: ["recover", "addiction", "sober", "substance", "relapse"], icon: Sprout,
    gradient: "from-forest via-sage-dark to-sage", glows: ["bg-sage-light/25", "bg-terracotta/35"] },
  { id: "mental-health", keywords: ["mental", "anxiety", "depress", "trauma", "therapy"], icon: Brain,
    gradient: "from-charcoal via-forest to-sage-dark", glows: ["bg-sage/45", "bg-sage-light/15"] },
  { id: "housing", keywords: ["hous", "home", "shelter", "living", "rent"], icon: House,
    gradient: "from-charcoal via-charcoal to-terracotta", glows: ["bg-terracotta/45", "bg-terracotta-light/20"] },
  { id: "family", keywords: ["famil", "youth", "parent", "child", "teen"], icon: Users,
    gradient: "from-forest via-forest to-terracotta", glows: ["bg-terracotta-light/25", "bg-sage/40"] },
  { id: "employment", keywords: ["employ", "job", "career", "work"], icon: Briefcase,
    gradient: "from-charcoal via-charcoal to-sage", glows: ["bg-sage-light/20", "bg-sage/40"] },
  { id: "wellness", keywords: ["wellness", "health", "nutrition", "fitness", "sleep"], icon: HeartPulse,
    gradient: "from-forest via-sage-dark to-terracotta-light", glows: ["bg-terracotta/40", "bg-sage/30"] },
  { id: "special-needs", keywords: ["autism", "special", "disabilit"], icon: Puzzle,
    gradient: "from-forest via-charcoal to-sage-dark", glows: ["bg-terracotta-light/20", "bg-sage-light/20"] },
  { id: "general", keywords: [], icon: BookOpen,
    gradient: "from-charcoal via-forest to-sage-dark", glows: ["bg-sage/35", "bg-terracotta/25"] },
];

/**
 * The header look for a category: the first theme whose keyword appears in the category's
 * slug or name. A category matching none still gets a stable look of its own from a hash,
 * so two unrelated topics rarely share one. No category means the general look.
 */
export function blogThemeFor(category: { name: string; slug: string } | null): BlogTheme {
  const general = BLOG_THEMES[BLOG_THEMES.length - 1];
  if (!category) return general;
  const haystack = `${category.slug} ${category.name}`.toLowerCase();
  const match = BLOG_THEMES.find((theme) => theme.keywords.some((k) => haystack.includes(k)));
  if (match) return match;
  let hash = 0;
  for (const ch of category.slug) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return BLOG_THEMES[hash % BLOG_THEMES.length];
}

interface BlogHeaderProps {
  theme: BlogTheme;
  eyebrow: string;
  eyebrowHref?: string;
  title: string;
}

/** The article hero. Unlike PageHeader it carries no photograph: each topic gets its own
    gradient and emblem, so posts read as a set without every one looking the same. */
export function BlogHeader({ theme, eyebrow, eyebrowHref, title }: BlogHeaderProps) {
  const { icon: Icon, gradient, glows } = theme;
  return (
    <section className={`relative pt-28 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className={`absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl ${glows[0]}`} />
        <div className={`absolute -bottom-40 left-1/3 h-80 w-80 rounded-full blur-3xl ${glows[1]}`} />
        <div className="absolute inset-0 [background-image:radial-gradient(rgb(255_255_255/0.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
        <Icon className="absolute -right-8 -bottom-10 h-48 w-48 text-white/10 rotate-[8deg] lg:hidden" strokeWidth={1} />
      </div>

      <div className="container relative z-10 flex items-center gap-12">
        <div className="min-w-0 max-w-3xl">
          <Link
            href={eyebrowHref ?? "/blog"}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm border shadow-sm mb-4 bg-white/15 border-white/25 transition-colors hover:bg-white/25"
          >
            <Icon className="h-3.5 w-3.5 text-sage-light" />
            <span className="font-semibold text-xs uppercase tracking-wider text-white">{eyebrow}</span>
          </Link>
          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">{title}</h1>
        </div>

        <div className="relative ml-auto hidden lg:flex h-56 w-56 shrink-0 items-center justify-center" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border border-white/15" />
          <div className="absolute inset-6 rounded-full border border-dashed border-white/20" />
          <div className="absolute inset-12 rounded-full bg-white/10 backdrop-blur-sm" />
          <Icon className="relative h-16 w-16 text-white/85" strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
}
