"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ArrowRight,
  Shield,
  Heart,
  Users,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  SERVICES,
  TESTIMONIALS,
  PHONE,
  EMAIL,
  ADDRESSES,
  BUSINESS_NAME,
  STATES_SERVED,
  INSURANCE_PROVIDERS,
} from "@/lib/site-data";
import { ProgramIcon } from "@/components/shared/program-icon";
import { InsuranceLogo } from "@/components/shared/insurance-logo";
import { LatestPosts } from "@/components/home/latest-posts";
import type { BlogPostSummary } from "@/lib/blog";
import { AnimatedSection } from "@/components/shared/animated-section";


export function HomeContent({ latestPosts }: { latestPosts: BlogPostSummary[] }) {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <ServicesSection />
      <WhyChooseUs />
      <TreatmentProcess />
      <InsuranceSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <ContactSection latestPosts={latestPosts} />
    </>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/50" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Heart className="h-4 w-4 text-terracotta" />
              Compassionate, Confidential Care
            </div>
            {/* This headline is 51 characters against the previous 28, so the original
                4xl/5xl/6xl ladder no longer fits: every step left "for" stranded alone on a
                line, and the lg two-column hero is the narrowest measure on the page, not the
                widest. Each size here is the largest that still keeps "Supportive Services for"
                whole at that breakpoint's measured column width. */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Supportive Services for
              <br />
              <span className="text-sage-light">Recovery, Health &amp; Stability</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Recovery, support, and lasting change begin with a single step.
              We&apos;re here to walk beside you, confidentially,
              compassionately, and without judgment.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-terracotta text-white font-semibold text-sm sm:text-base hover:bg-terracotta-light hover:text-charcoal transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span className="sm:hidden">Call Now</span>
                <span className="hidden sm:inline">Call {PHONE}</span>
              </a>
              <Link href="/intake" className="flex-1 sm:flex-none">
                <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/25 transition-all duration-200">
                  Intake Form
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-sage-light" />
                Confidential
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sage-light" />
                Most Insurance Accepted
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-sage-light" />
                {STATES_SERVED.length} States
              </div>
            </div>
          </div>

          {/* Right Side - Animated States */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[360px] h-[360px]">
              <div
                className="absolute inset-0"
                style={{ animation: "orbit-spin 50s linear infinite" }}
              >
                {(() => {
                  const size = 360;
                  const center = size / 2;
                  const radius = 125;

                  // Custom angles for better visual spacing
                  const angles = [
                    -90, // Utah
                    -50, // Texas
                    -10, // Nevada
                    30, // Michigan
                    65, // Georgia
                    95, // Arizona
                    125, // Florida
                    160, // Louisiana
                    200, // Oregon
                    235, // Maryland
                    270, // Tennessee
                  ];

                  return STATES_SERVED.map((state, i) => {
                    const angle = (angles[i] * Math.PI) / 180;

                    const x = center + Math.cos(angle) * radius;
                    const y = center + Math.sin(angle) * radius;

                    return (
                      <div
                        key={state}
                        className="absolute"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div
                          style={{
                            animation: `float-in 0.6s ease-out ${i * 0.08}s both, orbit-spin-reverse 50s linear infinite`,
                          }}
                        >
                          <div className="w-24 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default text-center">
                            {state}
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Center Badge */}
              <div
                className="absolute rounded-full bg-sage/80 backdrop-blur-sm shadow-2xl flex flex-col items-center justify-center"
                style={{
                  width: "88px",
                  height: "88px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="font-display text-3xl font-bold text-white leading-none">
                  {STATES_SERVED.length}
                </div>

                <div className="text-[10px] tracking-[0.25em] text-white/80 mt-1">
                  STATES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== WHO WE HELP =====
function WhoWeHelp() {
  const audiences = [
    {
      title: "Individuals in Recovery",
      desc: "Adults seeking substance abuse treatment, mental health support, or a safe place to rebuild their lives.",
      icon: "🧠",
    },
    {
      title: "Families in Need",
      desc: "Parents, spouses, and loved ones who need guidance, support groups, and resources to help their family heal.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Youth & Young Adults",
      desc: "Teens and young adults navigating mental health challenges, addiction, or needing mentorship and after-school support.",
      icon: "🌱",
    },
    {
      title: "Individuals with Special Needs",
      desc: "People with autism, developmental disabilities, and their families who deserve inclusive, specialized support.",
      icon: "💛",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Who We Support
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Individuals, Families &amp; Youth
            </h2>
            <p className="text-muted-foreground text-lg">
              We support individuals and families at every stage, from
              first-time seekers of help to those rebuilding their lives.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PROGRAMS =====
function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage-light/30">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From addiction recovery to supportive housing, our services are
              designed to meet you where you are and guide you forward.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((s) => (
            <AnimatedSection key={s.slug}>
              <Link href={`/services/${s.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <ProgramIcon
                        name={s.icon}
                        className="h-5 w-5 text-sage"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {s.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sage text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-10">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-white font-semibold hover:bg-sage-dark transition-all duration-200">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ===== WHY CHOOSE US =====
function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Licensed & Accredited",
      desc: "Our counselors and staff hold state licenses and our programs meet the highest standards of care.",
    },
    {
      icon: <Lock className="h-7 w-7" />,
      title: "Strictly Confidential",
      desc: "HIPAA-compliant processes ensure your information is never shared without your explicit consent.",
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Compassionate Approach",
      desc: "We treat every person with dignity, respect, and genuine care, no judgment, just support.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Community-Centered",
      desc: "We believe recovery happens in community. Our programs build connections that last a lifetime.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-6">
              Trusted by Families Across {STATES_SERVED.length} States
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {BUSINESS_NAME} runs seven connected programs under one
              organization, so recovery, housing, counseling, and employment
              support work together instead of sending you to a different
              agency for each one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0 text-sage">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-charcoal text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 lg:h-96">
              <Image
                src="/images/about-team.png"
                alt="Our professional team of counselors and support staff"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="font-display text-2xl font-bold text-sage">
                        24hr
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Response Time
                      </div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <div className="font-display text-2xl font-bold text-sage">
                        {STATES_SERVED.length}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        States Served
                      </div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <div className="font-display text-2xl font-bold text-sage">
                        7
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Core Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ===== TREATMENT PROCESS =====
function TreatmentProcess() {
  const steps = [
    {
      num: "01",
      title: "Reach Out",
      desc: "Call us, fill out the intake form, or send an email. We respond within 24 hours.",
    },
    {
      num: "02",
      title: "Assessment",
      desc: "A licensed counselor meets with you to understand your needs and create a personalized plan.",
    },
    {
      num: "03",
      title: "Insurance Verification",
      desc: "We verify your coverage and explain your benefits so there are no surprises.",
    },
    {
      num: "04",
      title: "Begin Treatment",
      desc: "Start your program with ongoing support, counseling, and community integration.",
    },
    {
      num: "05",
      title: "Continuing Care",
      desc: "We don't stop when treatment ends. Our aftercare programs support your long-term success.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sage-light font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Your Journey to Recovery
            </h2>
            <p className="text-white/60 text-lg">
              We&apos;ve made the process as simple and supportive as possible.
              Here&apos;s what to expect.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i}>
              <div className="text-center lg:text-left">
                <div aria-hidden="true" className="font-display text-4xl font-bold text-sage-light/30 mb-3">
                  {step.num}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== INSURANCE =====
function InsuranceSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage-light/20">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Insurance & Payment
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Insurance &amp; Medicaid Accepted
            </h2>
            <p className="text-muted-foreground text-lg">
              Don&apos;t let cost be a barrier to recovery. We accept most major
              insurance and offer sliding scale fees for those without coverage.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {INSURANCE_PROVIDERS.map((provider) => (
            <AnimatedSection key={provider.name}>
              <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md hover:border-sage/30 transition-all duration-300">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-border">
                  <InsuranceLogo
                    logo={provider.logo}
                    name={provider.name}
                    abbr={provider.abbr}
                    color={provider.color}
                  />
                </div>
                <span className="text-sm font-medium text-charcoal leading-tight">
                  {provider.name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Not sure if we accept your insurance? Contact us and we&apos;ll
              verify your coverage at no cost.
            </p>
            <Link href="/intake">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage text-white font-semibold hover:bg-sage-dark transition-all duration-200">
                Verify Your Insurance
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Recovery Success Stories from Our Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Every recovery story is unique. Here are just a few of the lives
              that have been changed.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={i}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <span key={j} className="text-terracotta text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-display font-semibold text-charcoal text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ADMISSIONS =====
function AdmissionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-terracotta-light/20">
      <div className="container">
        <AnimatedSection>
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">
                  Begin Recovery
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
                  Take the First Step Today
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you&apos;re ready to begin treatment or just have
                  questions, our admissions team is here to help. No pressure,
                  no judgment, just honest conversation about what&apos;s
                  possible.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-charcoal/80">
                    <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                    Complete our intake form
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/80">
                    <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                    Insurance verification within 24 hours
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/80">
                    <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                    Flexible scheduling to fit your life
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/80">
                    <CheckCircle2 className="h-5 w-5 text-sage shrink-0" />
                    Emergency intake available
                  </div>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-terracotta text-white font-semibold text-sm sm:text-base hover:bg-terracotta-light hover:text-charcoal transition-all duration-200"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    Call Now
                  </a>
                  <Link href="/intake" className="flex-1 sm:flex-none">
                    <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-sage text-white font-semibold text-sm sm:text-base hover:bg-sage-dark transition-all duration-200">
                      <span className="sm:hidden">Get Started</span>
                      <span className="hidden sm:inline">Intake Form</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-md h-80">
                <Image
                  src="/images/contact-warm.png"
                  alt="Welcoming reception at Chance to Change"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ===== FAQ =====

// ===== CONTACT =====
function ContactSection({ latestPosts }: { latestPosts: BlogPostSummary[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "home",
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName") || undefined,
          phone: formData.get("phone") || undefined,
          email: formData.get("email"),
          message: formData.get("message") || undefined,
          smsConsent: formData.get("smsConsent") === "on",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message ?? "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <LatestPosts posts={latestPosts} />
    <section className="py-20 lg:py-28 bg-background" id="contact">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              We&apos;re Here to Listen
            </h2>
            <p className="text-muted-foreground text-lg">
              Reach out however feels most comfortable. We respond within 24
              hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-sage font-medium hover:underline"
                  >
                    {PHONE}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Mon-Fri, 8am-6pm CT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sage font-medium hover:underline"
                  >
                    {EMAIL}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Offices
                  </h3>
                  {ADDRESSES.map((addr) => (
                    <p key={addr.city} className="text-charcoal/80 text-sm">
                      {addr.line1}, {addr.line2}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-1">
                    Office Hours
                  </h3>
                  <p className="text-charcoal/80 text-sm">
                    Monday - Friday: 8:00 AM - 6:00 PM CT
                  </p>
                  <p className="text-charcoal/80 text-sm">
                    Saturday: 9:00 AM - 1:00 PM CT
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Emergency: Call 911 or 988
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 mt-6">
                <p className="text-sm text-charcoal/80">
                  <span className="font-semibold text-destructive">
                    In Crisis?
                  </span>{" "}
                  Call or text{" "}
                  <a
                    href="tel:988"
                    className="font-bold text-destructive underline"
                  >
                    988
                  </a>{" "}
                  for the National Suicide & Crisis Lifeline, or call{" "}
                  <a
                    href="tel:911"
                    className="font-bold text-destructive underline"
                  >
                    911
                  </a>{" "}
                  for emergencies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection>
            {submitted ? (
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
                <CheckCircle2 className="h-12 w-12 text-sage mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5"
              >
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="contactFirstName"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contactFirstName"
                      name="firstName"
                      required
                      placeholder="Your first name"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contactLastName"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="contactLastName"
                      name="lastName"
                      placeholder="Your last name"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="contactPhone"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Phone
                  </Label>
                  <Input
                    id="contactPhone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contactEmail"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactEmail"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contactMessage"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contactMessage"
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    className="rounded-lg"
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
                <div className="flex items-start gap-2">
                  <Checkbox id="sms-consent" name="smsConsent" className="mt-1" />
                  <label
                    htmlFor="sms-consent"
                    className="text-xs text-muted-foreground leading-relaxed"
                  >
                    By providing my phone number, I consent to receive SMS text
                    messages from Chance to Change regarding my inquiry and
                    services. Message & data rates may apply. Reply STOP to
                    unsubscribe. View our{" "}
                    <Link href="/privacy-policy">
                      <span className="text-sage underline">
                        Privacy Policy
                      </span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-conditions">
                      <span className="text-sage underline">SMS Terms</span>
                    </Link>
                    .
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-sage hover:bg-sage-dark text-white rounded-full py-3 font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
    </>
  );
}
