import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  Award,
  Eye,
  Target,
  Sparkles,
  BadgeCheck,
  Lock,
  ClipboardList,
  HeartHandshake,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { STATES_SERVED, BUSINESS_NAME, PHONE, EMAIL, ADDRESSES } from "@/lib/site-data";
import { SERVICES } from "@/lib/services";
import { CTASection } from "@/components/layout/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  webPageSchema,
  faqSchema,
  jsonLdGraph,
} from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us | Licensed Supportive Services Organization",
  absoluteTitle: true,
  description:
    "Chance to Change is a licensed supportive services provider helping individuals and families across 11 states. Discover our story and meet our team.",
  path: "/about",
});

const ABOUT_FAQS = [
  {
    question: "What kind of organization is Chance to Change?",
    answer:
      "We are a community-based supportive services organization. Rather than specializing in a single area, we run seven connected program lines covering addiction recovery, mental health, autism and special needs, employment, youth and family services, homelessness prevention, and health and wellness.",
  },
  {
    question: "Do I need insurance to get help?",
    answer:
      "No. We work with most major insurance plans and are credentialed with Medicaid in the states we serve, and we verify your benefits before you begin so there are no surprises. If you have no coverage, sliding-scale fees are available. Cost should not be the reason you do not call.",
  },
  {
    question: "Which states do you serve?",
    answer: `We serve clients across ${STATES_SERVED.length} states: ${STATES_SERVED.join(", ")}. Availability of specific programs varies by state, so contact us to confirm what is offered where you live.`,
  },
  {
    question: "Is what I share with you confidential?",
    answer:
      "Yes. Client information is protected under HIPAA, and substance use treatment records carry the additional protection of the federal rule 42 CFR Part 2. We do not disclose that you are a client without your written authorization, apart from narrow legal exceptions such as immediate risk of serious harm.",
  },
  {
    question: "Do you only work with people struggling with addiction?",
    answer:
      "No. Addiction recovery is one of our seven service lines. Many clients come to us for counseling, housing stability, employment support, autism and special needs services, or youth programming with no substance use involvement at all.",
  },
  {
    question: "Can I get help for someone else, like a family member?",
    answer:
      "Yes. Families contact us regularly on behalf of a loved one. We can talk through options and how to approach the conversation, though for treatment to begin the individual will ultimately need to engage with us directly.",
  },
  {
    question: "How do I start?",
    answer: `Call ${PHONE}, complete the confidential intake form on this site, or email ${EMAIL}. A member of our admissions team responds within 24 hours. The first conversation costs nothing and commits you to nothing.`,
  },
];

const jsonLd = jsonLdGraph(
  webPageSchema(
    "/about",
    "AboutPage",
    "About Chance to Change",
    "Learn how Chance To Change Supportive Services coordinates recovery, mental health, housing, employment, and family programs across 11 states.",
  ),
  breadcrumbSchema("/about", [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
  faqSchema("/about", ABOUT_FAQS),
);

const AUDIENCES = [
  {
    title: "Adults in or entering recovery",
    desc: "People seeking treatment for substance use, along with those leaving inpatient care or incarceration who need somewhere stable to land.",
  },
  {
    title: "Anyone struggling with mental health",
    desc: "Adults and young people dealing with anxiety, depression, trauma, grief, or the accumulated weight of prolonged stress.",
  },
  {
    title: "Families and caregivers",
    desc: "Parents, partners, and relatives who are carrying the situation alongside someone else and rarely get support of their own.",
  },
  {
    title: "Individuals with autism and special needs",
    desc: "Children, teens, and adults with developmental disabilities, plus the families navigating school systems and adult services on their behalf.",
  },
  {
    title: "Households facing housing instability",
    desc: "People behind on rent, facing eviction, or already without housing, at every stage from early risk to rehousing.",
  },
  {
    title: "People rebuilding financially",
    desc: "Job seekers with employment gaps, records, or transport barriers who need preparation and connections, not just a list of postings.",
  },
];

const COMMITMENTS = [
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Licensed, background-checked staff",
    desc: "Counselors and case managers hold applicable state licenses or work under licensed clinical supervision, and complete background checks before working with clients.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "HIPAA and 42 CFR Part 2 protection",
    desc: "Client records are protected under HIPAA, with substance use treatment records covered by the stricter federal confidentiality rule 42 CFR Part 2.",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Individualized, reviewed plans",
    desc: "Every plan is built with the client rather than assigned to them, and reviewed at regular intervals so the level of support can change as circumstances do.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Access regardless of ability to pay",
    desc: "We work with most major insurance and Medicaid, and offer sliding-scale fees so that cost is not what stops someone from starting.",
  },
];

const VALUES = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Compassion",
    desc: "People arrive at their most vulnerable. They are met without judgment, whatever they disclose and however many times they have tried before.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Integrity",
    desc: "We tell clients the truth about what we can and cannot do, including when the honest answer is that another provider is the better fit.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community",
    desc: "Isolation makes nearly every problem we work on worse. Group programs, peer support, and family involvement are core rather than optional.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    desc: "Programs are grounded in evidence-based practice and delivered by qualified staff, because good intentions alone do not produce outcomes.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Inclusivity",
    desc: "We serve people regardless of race, gender, age, religion, background, or history, including histories that have closed other doors.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Empowerment",
    desc: "The goal is not long-term dependence on us. It is independence, with support calibrated to step back as capability grows.",
  },
];

const START_STEPS = [
  {
    title: "Reach out",
    desc: "Call, submit the intake form, or email. No cost, no obligation, and no requirement to have your situation figured out before you contact us.",
  },
  {
    title: "Talk to admissions",
    desc: "Our team responds within 24 hours to understand what is going on, answer questions, and flag anything needing urgent attention.",
  },
  {
    title: "Complete an assessment",
    desc: "A confidential assessment identifies which services fit, at what intensity. Insurance is verified in parallel so the financial picture is clear up front.",
  },
  {
    title: "Begin, and adjust",
    desc: "Your plan starts and is reviewed at regular intervals. If the level of support is wrong in either direction, the plan changes rather than the client being expected to adapt to it.",
  },
];

export default function About() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        icon={Sparkles}
        eyebrow="About Us"
        title="Empowering Lives Through Recovery & Support"
        description={`${BUSINESS_NAME} coordinates recovery, counseling, housing, employment, and family programs under one organization, so people are not left to assemble their own support from scratch.`}
        image="/images/contact-warm.png"
        maxWidth="max-w-3xl"
      />

      {/* Who we are */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sage font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-5">
                One Organization, Seven Connected Programs
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {BUSINESS_NAME} is a community-based supportive services
                organization. We were built on a straightforward premise:
                everyone deserves a genuine second chance, and lasting change
                depends on having the right support available at the moment
                it is needed.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                The problems we work with rarely arrive one at a time. Someone
                in early recovery often also needs housing. A parent seeking
                counseling for a teenager may be facing eviction the same
                month. Treating those as separate cases, handled by separate
                agencies that never speak to one another, is where most people
                fall through.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                So we run {SERVICES.length} program lines under one roof, and
                coordinate between them deliberately. Opening doors to new
                possibilities, one chance at a time, is the idea behind that
                structure.
              </p>
            </div>
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-lg h-80">
              <Image
                src="/images/about-team.png"
                alt="Chance to Change team"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-7 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-sage" />
              </div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-3">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and families affected by addiction,
                mental health challenges, and economic hardship through
                compassionate, evidence-based services that promote lasting
                recovery, self-sufficiency, and community well-being.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-7 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-xl bg-terracotta-light/50 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-terracotta" />
              </div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-3">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A future where mental health and addiction carry no stigma,
                where individuals with autism and other special needs are met
                with genuine inclusion, and where access to stability and
                quality care does not depend on your zip code or income.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-7 shadow-sm border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-sage" />
              </div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-3">
                Our Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Meet people where they actually are. Assess the whole
                situation rather than the presenting problem alone, match
                support to real circumstances, and adjust as things change
                instead of holding someone to a plan that has stopped fitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinated care model */}
      <section className="py-16 lg:py-20 bg-charcoal text-white">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4">
              How Our Programs Work Together
            </h2>
            <p className="text-white/70 text-lg">
              Most people who contact us need more than one kind of help. Our
              programs are designed to hand off between each other rather than
              sending you to start over somewhere new.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-display font-semibold mb-2">
                  A counselor who can solve a housing problem
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  If housing instability is undermining someone&apos;s
                  recovery, their counselor can bring in our homelessness
                  prevention team directly, rather than referring out and
                  hoping it gets picked up.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-display font-semibold mb-2">
                  Employment support that understands the context
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our employment team already works with clients navigating
                  recovery, records, and long gaps, so the conversation starts
                  from an accurate picture instead of an awkward disclosure.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-display font-semibold mb-2">
                  One assessment, not five intakes
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Repeating the worst period of your life to a new stranger at
                  every agency is exhausting, and it is a common reason people
                  give up partway through. We limit how often that happens.
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-4">
                Our {SERVICES.length} program lines
              </h3>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between gap-3 text-white/80 hover:text-sage-light transition-colors text-sm group"
                    >
                      <span>{s.title}</span>
                      <span
                        aria-hidden="true"
                        className="text-white/30 group-hover:text-sage-light transition-colors"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Who We Serve
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Support for Every Situation and Every Stage
            </h2>
            <p className="text-muted-foreground text-lg">
              You do not need to be in crisis to qualify for help, and you do
              not need to have run out of other options first.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUDIENCES.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <h3 className="font-display font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards of care */}
      <section className="py-16 lg:py-20 bg-sage-light/20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Standards of Care &amp; Licensed Staff
            </h2>
            <p className="text-muted-foreground text-lg">
              Compassion matters. So do standards, and you are entitled to
              know what ours are before you trust us with anything.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COMMITMENTS.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-sm border border-border flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0 text-sage">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Core Values
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              The Values Behind Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center mb-3 text-sage">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-16 lg:py-20 bg-sage-light/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span className="text-sage font-semibold text-sm uppercase tracking-wider">
                Where We Work
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
                Serving {STATES_SERVED.length} States
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Program availability varies by state, so contact us to confirm
                what is offered where you live.
              </p>
              <div className="space-y-3">
                {ADDRESSES.map((addr) => (
                  <div
                    key={addr.city}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border shadow-sm"
                  >
                    <MapPin className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-display font-semibold text-charcoal text-sm">
                        {addr.city}
                      </span>
                      <span className="block text-muted-foreground text-sm">
                        {addr.line1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {STATES_SERVED.map((state) => (
                  <div
                    key={state}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md hover:border-sage/30 transition-all duration-300"
                  >
                    <span className="h-9 w-9 shrink-0 rounded-full bg-sage-light flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-sage-dark" />
                    </span>
                    <span className="text-sm font-medium text-charcoal leading-tight">
                      {state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Getting Started
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              What Happens When You Contact Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Not knowing what to expect stops a lot of people from making the
              first call. Here is the whole process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {START_STEPS.map((step, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div aria-hidden="true" className="font-display text-3xl font-bold text-sage/25 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ. Native <details> so answers stay in the server-rendered HTML. */}
      <section className="py-16 lg:py-20 bg-sage-light/20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Questions About Our Organization
            </h2>
            <p className="text-muted-foreground text-lg">
              Looking for details on a specific program? Each service page has
              its own FAQ covering that program directly.
            </p>
          </div>
          <div className="space-y-3">
            {ABOUT_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-card rounded-xl border border-border shadow-sm px-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none font-display font-semibold text-charcoal hover:text-sage transition-colors">
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Begin Your Journey?"
        description="Our admissions team is here to help. Whether you're ready to start treatment or just have questions, we're a phone call away."
      />
    </>
  );
}
