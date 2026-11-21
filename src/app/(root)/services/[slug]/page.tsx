import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PHONE } from "@/lib/site-data";
import { SERVICES, getService, serviceFaqs } from "@/lib/services";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/layout/cta-section";
import { ProgramIcon } from "@/components/shared/program-icon";
import { ServiceBlocks } from "@/components/services/service-blocks";
import { buildPageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  jsonLdGraph,
} from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service Not Found", robots: { index: false, follow: true } };
  }
  return buildPageMetadata({
    title: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.shortDesc,
    path: `/services/${slug}`,
    // 1200x630 share card; the 4:3 page photograph was cropped by every platform.
    image: `/og/${slug}.jpg`,
  });
}

export default async function ServiceDetail({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  // A real 404 status, rendered by not-found.tsx beside this file.
  if (!service) notFound();

  const faqs = serviceFaqs(service);
  const jsonLd = jsonLdGraph(
    serviceSchema(`/services/${slug}`, service),
    breadcrumbSchema(`/services/${slug}`, [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${slug}` },
    ]),
    ...(faqs.length ? [faqSchema(`/services/${slug}`, faqs)] : []),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        description={service.shortDesc}
        maxWidth="max-w-2xl"
        image={service.image}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-sage transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-sage transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-charcoal">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Overview + sticky contact card */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <ProgramIcon name={service.icon} className="h-7 w-7 text-sage" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <h2 className="font-display text-lg font-semibold text-charcoal mb-4">
                {service.featuresHeading ?? "What's Included"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border sticky top-28">
                <h2 className="font-display text-lg font-semibold text-charcoal mb-2">
                  Interested in This Service?
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Our team can help you get started right away. Fill out our
                  intake form or call us directly.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-terracotta text-white font-semibold text-sm hover:bg-terracotta-light hover:text-charcoal transition-all duration-200 mb-3"
                >
                  <Phone className="h-4 w-4" />
                  Call {PHONE}
                </a>
                <Link href="/intake">
                  <span className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sage text-white font-semibold text-sm hover:bg-sage-dark transition-all duration-200">
                    Intake Form
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-service body. Section types and order differ by service. */}
      {service.blocks && <ServiceBlocks blocks={service.blocks} />}

      {/* Other Services */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-8">
            Explore Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/services/${p.slug}`}>
                  <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-all duration-300">
                    <h3 className="font-display font-semibold text-charcoal text-sm mb-1">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {p.shortDesc}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to Get Started With ${service.title}?`}
        description="Reach out today for a confidential, no-obligation conversation with our admissions team about your next steps."
      />
    </>
  );
}
