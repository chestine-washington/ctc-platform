import type { Metadata } from "next";
import { ExternalLink, BookOpen, Home, LifeBuoy } from "lucide-react";
import { CTASection } from "@/components/layout/cta-section";
import { LatestPosts } from "@/components/home/latest-posts";
import { FAQSection } from "@/components/shared/faq-section";
import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema, jsonLdGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { getLatestPosts } from "@/lib/blog";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources",
  description:
    "Crisis support, educational resources, and community services for addiction recovery, mental health, and family support.",
  path: "/resources",
});

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/resources",
    "WebPage",
    "Recovery & Crisis Resources",
    "Crisis hotlines, educational resources, and community services for addiction recovery, mental health, and family support.",
  ),
  breadcrumbSchema("/resources", [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ]),
);

const CRISIS_RESOURCES = [
  { name: "988 Suicide & Crisis Lifeline", contact: "Call or text 988", desc: "Free, confidential 24/7 support for anyone in emotional distress or suicidal crisis.", urgent: true },
  { name: "SAMHSA National Helpline", contact: "1-800-662-4357", desc: "Free, confidential treatment referral and information service for substance abuse and mental health.", urgent: false },
  { name: "National Domestic Violence Hotline", contact: "1-800-799-7233", desc: "24/7 confidential support for victims of domestic violence.", urgent: false },
  { name: "National Runaway Safeline", contact: "1-800-RUNAWAY", desc: "Support and resources for youth experiencing homelessness or in crisis.", urgent: false },
  { name: "Crisis Text Line", contact: "Text HOME to 741741", desc: "Free 24/7 text-based crisis support from trained counselors.", urgent: false },
  { name: "National Child Abuse Hotline", contact: "1-800-422-4453", desc: "Report abuse or get help if you're a victim of child abuse.", urgent: false },
];

const EDUCATIONAL_RESOURCES = [
  { name: "Understanding Addiction", desc: "Learn about the science of addiction, risk factors, and why it's a medical condition — not a moral failing.", link: "https://www.nida.nih.gov/" },
  { name: "Supporting a Loved One in Recovery", desc: "Practical guidance for family members navigating the recovery process together.", link: "https://www.nar-anon.org/" },
  { name: "Finding Local Resources", desc: "How to find treatment centers, support groups, and community services in your area.", link: "https://www.findtreatment.gov/" },
  { name: "Mental Health First Aid", desc: "Learn to identify, understand, and respond to signs of mental health challenges.", link: "https://www.mentalhealthfirstaid.org/" },
];

const COMMUNITY_RESOURCES = [
  { name: "Food Assistance", desc: "Find local food banks, SNAP benefits, and meal programs.", link: "https://www.feedingamerica.org/" },
  { name: "Housing Assistance", desc: "Resources for finding affordable housing, rental assistance, and shelters.", link: "https://www.hud.gov/" },
  { name: "Legal Aid", desc: "Free or low-cost legal assistance for individuals who can't afford a lawyer.", link: "https://www.lawhelp.org/" },
  { name: "Veterans Services", desc: "Support and benefits for veterans including healthcare, housing, and employment.", link: "https://www.va.gov/" },
];

export default function Resources() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        icon={LifeBuoy}
        eyebrow="Resources"
        title="Help Is Available Right Now"
        description="Whether you need immediate crisis support, educational information, or community services, we've gathered the most important resources in one place."
        image="/images/resources-hero.jpg"
        imageAlt="A cream armchair with a rust throw blanket beside a sunlit window and a wall of bookshelves."
      />

      <LatestPosts
        posts={getLatestPosts(3)}
        eyebrow="Insights"
        heading="Articles & guidance"
        intro="Longer reads from our team on recovery, mental health, housing and family support."
        tone="background"
      />

      {/* Crisis Resources */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-destructive font-semibold text-sm uppercase tracking-wider">Immediate Help</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Crisis Resources, Available 24/7
            </h2>
            <p className="text-muted-foreground text-lg">
              If you or someone you know is in crisis, these resources are available immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CRISIS_RESOURCES.map((resource, i) => (
              <div key={i} className={`rounded-xl p-5 shadow-sm border ${resource.urgent ? "bg-destructive/5 border-destructive/20" : "bg-card border-border"}`}>
                <h3 className={`font-display font-semibold text-sm mb-1 ${resource.urgent ? "text-destructive" : "text-charcoal"}`}>
                  {resource.name}
                </h3>
                <p className={`font-bold text-base mb-1 ${resource.urgent ? "text-destructive" : "text-sage"}`}>
                  {resource.contact}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 lg:py-20 bg-sage-light/20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">Learn & Understand</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Educational Resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Knowledge is power. Understanding addiction and mental health helps reduce stigma and guides better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATIONAL_RESOURCES.map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-charcoal text-sm mb-1 group-hover:text-sage transition-colors">
                      {resource.name}
                      <ExternalLink className="h-3 w-3 inline ml-1 text-muted-foreground" />
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{resource.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">Community Support</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Community Resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Additional services that can help you and your family access food, housing, legal aid, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMUNITY_RESOURCES.map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <Home className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-charcoal text-sm mb-1 group-hover:text-sage transition-colors">
                      {resource.name}
                      <ExternalLink className="h-3 w-3 inline ml-1 text-muted-foreground" />
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{resource.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <CTASection
        heading="Need Personalized Help?"
        description="These resources are a starting point. Our team can create a personalized plan that addresses your specific needs."
      />
    </>
  );
}
