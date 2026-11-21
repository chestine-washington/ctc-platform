import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  /** Describes the hero photograph. Left empty the image stays decorative, which is what
      a page with no meaningful photograph still wants. */
  imageAlt?: string;
  maxWidth?: string;
  tone?: "sage" | "terracotta" | "forest" | "charcoal";
  /** Where to anchor the hero crop. "top" keeps faces in frame on people photographs. */
  imagePosition?: "top" | "center";
}

const TONE_GRADIENTS: Record<string, string> = {
  sage: "from-sage-light/60 via-sage-light/25 to-background",
  terracotta: "from-terracotta-light/50 via-terracotta-light/20 to-background",
  forest: "from-forest/15 via-forest/5 to-background",
  charcoal: "from-charcoal/10 via-charcoal/5 to-background",
};

export function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  maxWidth = "max-w-2xl",
  tone = "sage",
  imagePosition = "center",
}: PageHeaderProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        {image ? (
          <>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className={imagePosition === "top" ? "object-cover object-top" : "object-cover"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/65 to-background/40" />
          </>
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${TONE_GRADIENTS[tone]}`}
            />
            {Icon && (
              <Icon
                className="absolute -right-8 -top-10 h-56 w-56 text-charcoal/5 rotate-[8deg]"
                strokeWidth={1}
              />
            )}
          </>
        )}
      </div>

      <div
        className={`container relative z-10 mx-auto text-center ${maxWidth}`}
      >
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm border shadow-sm mb-4 ${
            image ? "bg-white/15 border-white/25" : "bg-white/90 border-sage/20"
          }`}
        >
          {Icon && (
            <Icon
              className={`h-3.5 w-3.5 ${image ? "text-sage-light" : "text-sage"}`}
            />
          )}
          <span
            className={`font-semibold text-xs uppercase tracking-wider ${
              image ? "text-white" : "text-sage"
            }`}
          >
            {eyebrow}
          </span>
        </span>
        <h1
          className={`font-display text-4xl lg:text-5xl font-bold mb-5 px-2 ${
            image ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`text-lg px-2 ${image ? "text-white/80" : "text-charcoal/70"}`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
