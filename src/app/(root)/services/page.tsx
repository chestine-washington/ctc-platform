import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { CTASection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { ProgramIcon } from "@/components/shared/program-icon";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceItemListSchema, jsonLdGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "Recovery, Housing & Counseling Services",
  description:
    "Not sure where to start? Our team listens first, then matches you to the right service, no obligation. Call (800) 708-6448 or fill out our intake form.",
  path: "/services",
});

const jsonLd = jsonLdGraph(
  serviceItemListSchema(
    "/services",
    SERVICES.map((s) => ({
      title: s.title,
      slug: s.slug,
      shortDesc: s.shortDesc,
    })),
  ),
  breadcrumbSchema("/services", [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
);

export default function Services() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        icon={Sparkles}
        eyebrow="Our Services"
        title="Real Support for Recovery, Housing & Family Life"
        description="Chance to Change provides addiction recovery, mental health counseling, supportive housing, and family services. We listen first, then we build a plan around you."
        image="/images/programs-recovery.png"
        maxWidth="max-w-3xl"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <ProgramIcon
                        name={s.icon}
                        className="h-5 w-5 text-sage"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-charcoal mb-3">
                      {s.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {s.shortDesc}
                    </p>
                    <div className="space-y-2 mb-5">
                      {s.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-charcoal/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {s.features.length > 3 && (
                        <div className="text-sm text-muted-foreground">
                          +{s.features.length - 3} more services
                        </div>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sage text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not Sure Where to Start?"
        description="Our admissions team can help you find the right service. We'll listen, assess your needs, and guide you forward, no obligation."
      />
    </>
  );
}
