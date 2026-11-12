import type { Service } from "./types";

export const addictionRecovery: Service = {
  slug: "addiction-recovery",
  title: "Addiction & Recovery Services",
  metaTitle: "Addiction Recovery & Sober Living Programs",
  metaDescription:
    "Struggling with addiction? Get compassionate counseling, safe sober housing, and a clear path to lasting recovery. Insurance & Medicaid accepted. Call now.",
  shortDesc:
    "Comprehensive addiction recovery services including outpatient counseling, sober living housing, and halfway house programs built for lasting sobriety through evidence-based treatment.",
  description:
    "Recovery is rarely a single program. Most people need a different level of addiction treatment support at month one than they do at month twelve, and the thing that most often derails progress is not lack of willpower but a gap between levels: leaving treatment with nowhere stable to live, or finishing a program with no plan for the following week. Our addiction and recovery services close those gaps.",
  image: "/images/addiction-recovery.png",
  icon: "ShieldHeart",
  features: [
    "Individual & Group Addiction Counseling",
    "Safe & Secure Sober Living Housing",
    "Halfway House Programs for Men",
    "Relapse Prevention Planning",
    "Family Therapy & Addiction Education",
    "Permanent Housing Assistance After Treatment",
  ],
  featuresHeading: "Addiction Recovery Services We Offer",
  blocks: [
    {
      type: "levels",
      eyebrow: "Levels of Support",
      heading: "Levels of Care in Addiction Treatment",
      intro:
        "Addiction treatment is organized along a continuum of care. Placing someone too low on it sets them up to fail; placing them too high takes away independence they are ready for. Your assessment determines the starting point, and it is revisited as things change.",
      levels: [
        {
          name: "Outpatient Addiction Counseling",
          intensity: "1 to 2 sessions weekly",
          description:
            "Individual and group counseling while you continue living at home, working, and meeting family obligations. Sessions focus on the drivers behind use, coping skills, and building a relapse prevention plan you can actually apply between appointments.",
          bestFor:
            "You have stable, substance-free housing and a support system at home, and your daily functioning is largely intact.",
        },
        {
          name: "Intensive Outpatient Program (IOP)",
          intensity: "Several sessions weekly",
          description:
            "A significantly higher contact schedule combining group work, individual counseling, and structured skill-building. It provides much of the structure of a residential program while you sleep at home.",
          bestFor:
            "Weekly counseling has not been enough on its own, or you are stepping down from inpatient or detox and need structure to hold the transition.",
        },
        {
          name: "Supportive Sober Living Housing",
          intensity: "Residential, flexible tenure",
          description:
            "A substance-free living environment paired with continued counseling, life skills work, and employment support. Residents keep jobs and outside commitments while living somewhere that does not undermine their recovery.",
          bestFor:
            "Your home environment is the primary risk to your recovery, or you have nowhere safe and sober to return to after treatment.",
        },
        {
          name: "Structured Halfway House for Men",
          intensity: "Residential, high structure",
          description:
            "Our men's halfway house adds daily routine, curfews, peer accountability, and house responsibilities on top of housing and addiction counseling. The structure is the point: it rebuilds the habits that independent living requires.",
          bestFor:
            "You are leaving inpatient treatment or incarceration and need external structure while internal routines are still being rebuilt.",
        },
      ],
    },
    {
      type: "callout",
      heading: "If you are in withdrawal or medical crisis right now",
      body:
        "We are not a detox or emergency medical facility. Withdrawal from alcohol and benzodiazepines in particular can be medically dangerous and sometimes fatal without supervision. If you are in acute withdrawal, call 911 or go to an emergency room. For immediate mental health crisis support, call or text 988. Our team can help coordinate a medically supervised detox referral, and we will hold your place for when you complete it.",
      variant: "urgent",
      tone: "plain",
    },
    {
      type: "pathway",
      eyebrow: "Housing Progression",
      heading: "Sober Living & Housing Programs for Recovery",
      intro:
        "Housing instability is one of the strongest predictors of return to use. Rather than treating housing as a single service, we treat it as a staged addiction recovery housing progression with a defined exit.",
      stages: [
        {
          stage: "Structured Transitional Housing",
          duration: "Early recovery",
          description:
            "High-structure residence with curfews, house responsibilities, required counseling attendance, and peer accountability. The focus is stabilization and re-establishing daily routine.",
        },
        {
          stage: "Supportive Sober Living",
          duration: "Building independence",
          description:
            "Structure loosens as responsibility grows. Residents typically hold employment, manage their own schedules and budgets, and continue counseling with less external oversight.",
        },
        {
          stage: "Permanent Housing Placement",
          duration: "Exit and aftercare",
          description:
            "Case managers help with housing applications, landlord conversations, waitlists, and benefits paperwork so the move to independent housing is planned rather than abrupt. Aftercare contact continues afterward.",
        },
      ],
    },
    {
      type: "timeline",
      eyebrow: "What to Expect",
      heading: "The Addiction Treatment Admissions Process",
      intro:
        "People hesitate to call because they do not know what happens next. Here is the actual sequence.",
      entries: [
        {
          marker: "Day 1",
          title: "First Contact",
          description:
            "You call, submit the intake form, or email. No commitment and no cost to talk. We ask what is going on, answer questions, and flag anything needing urgent attention such as active withdrawal or safety concerns.",
        },
        {
          marker: "Within 24 hours",
          title: "Admissions Response",
          description:
            "A member of the admissions team follows up to schedule your assessment and begins verifying insurance coverage so you know the financial picture before starting.",
        },
        {
          marker: "Week 1",
          title: "Clinical Assessment and Placement",
          description:
            "A confidential assessment with a licensed counselor covers substance use history, mental health, medical needs, housing, and support system. This determines your starting level of care and produces a written treatment plan with your input.",
        },
        {
          marker: "Weeks 2 to 4",
          title: "Treatment Begins",
          description:
            "Counseling starts at the agreed cadence. Early sessions concentrate on identifying personal triggers, building coping strategies, and, where housing is part of your plan, settling into the residence and its routine.",
        },
        {
          marker: "Day 30",
          title: "First Formal Plan Review",
          description:
            "You and your counselor review what is working. Level of care can step up or down here. Reviews continue at regular intervals rather than leaving the initial plan fixed indefinitely.",
        },
      ],
    },
    {
      type: "grid",
      eyebrow: "Scope of Care",
      heading: "Addiction Treatment by Substance Type",
      intro:
        "Different substances produce different withdrawal risks, relapse patterns, and treatment needs. Your plan reflects that rather than treating all use the same way.",
      items: [
        {
          title: "Alcohol Addiction Treatment",
          description:
            "Unsupervised withdrawal carries genuine medical risk, so detox is coordinated with medical providers first where indicated. Counseling then addresses the social and situational cues that make alcohol uniquely hard to avoid.",
        },
        {
          title: "Opioid Addiction Treatment",
          description:
            "Includes prescription opioids and heroin. Because overdose risk rises sharply after any period of abstinence, relapse planning and overdose awareness are treated as core clinical content, not an afterthought.",
        },
        {
          title: "Stimulant Addiction Treatment",
          description:
            "Cocaine and methamphetamine use commonly involves extended mood and energy disruption in early abstinence. Counseling emphasizes structure, sleep, and realistic expectations through that window.",
        },
        {
          title: "Benzodiazepine Addiction Treatment",
          description:
            "Like alcohol, abrupt discontinuation can be dangerous. We coordinate with prescribing providers on medically supervised tapering rather than encouraging anyone to stop on their own.",
        },
        {
          title: "Cannabis Addiction Counseling",
          description:
            "Often minimized, including by the person using. Counseling focuses on the concrete functional impact on work, relationships, motivation, and mental health rather than debating whether it counts.",
        },
        {
          title: "Polysubstance Addiction Treatment",
          description:
            "Using several substances, together or in cycles, is common and complicates both withdrawal and relapse patterns. Assessment maps the full picture instead of treating only the most visible substance.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Family & Support System",
      heading: "Family Therapy & Support in Addiction Recovery",
      intro:
        "Families are often exhausted, angry, and out of ideas by the time treatment starts. Leaving them out tends to undermine recovery; involving them well tends to protect it.",
      items: [
        {
          title: "Education on how addiction actually works",
          description:
            "Understanding the clinical picture reduces the sense that a relapse was a personal betrayal, which is one of the most common causes of family breakdown during recovery.",
        },
        {
          title: "Family counseling sessions",
          description:
            "Structured, facilitated conversations to rebuild communication and repair trust, rather than relitigating the worst incidents without a mediator.",
        },
        {
          title: "Boundary setting that is not abandonment",
          description:
            "Practical guidance on supporting someone in recovery without enabling use, and without cutting off the relationship entirely.",
        },
        {
          title: "Guidance on confidentiality limits",
          description:
            "Families are often frustrated by what we cannot disclose. We explain up front what federal law permits, what a signed release changes, and what will always stay private.",
        },
      ],
    },
    {
      type: "callout",
      heading: "A relapse does not end your treatment with us",
      body:
        "Return to use is common in recovery and is treated clinically, as information about what the current plan is missing, not as grounds for discharge. What matters most is how quickly you re-engage. Call your counselor. The plan gets adjusted and you continue.",
      variant: "info",
      tone: "tint",
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Addiction & Recovery Services",
      items: [
        {
          question: "Do I have to be sober before I contact you?",
          answer:
            "No. Most people who call are still using, and that is expected. Reaching out is the first step, not a reward for having already stopped. If you need medically supervised detox before treatment begins, we will help coordinate that referral.",
        },
        {
          question: "Do you provide medical detox?",
          answer:
            "No. We are not a detox or emergency medical facility. Withdrawal from alcohol and benzodiazepines can be medically dangerous, so we coordinate with medical providers for supervised detox where it is needed, and pick up care afterward.",
        },
        {
          question: "Is the halfway house only for men?",
          answer:
            "Our structured halfway house program is a men's transitional residence. Women and families seeking supportive housing should contact our admissions team, who can review the other housing options available in your state.",
        },
        {
          question: "Will my employer or family find out?",
          answer:
            "Not from us. Substance use treatment records carry protection under HIPAA and the stricter federal rule 42 CFR Part 2. We do not confirm to anyone that you are a client without your written authorization, with narrow legal exceptions such as an immediate safety emergency.",
        },
        {
          question: "How long does treatment last?",
          answer:
            "It varies by level of care and individual progress. Outpatient counseling may run a few months; residential housing is often measured in many months while stability is rebuilt. Rather than fixing a discharge date at intake, we review your plan at regular intervals and adjust.",
        },
        {
          question: "What if I cannot afford treatment?",
          answer:
            "We work with most major insurance plans and are credentialed with Medicaid in the states we serve. Insurance verification happens before you begin so there are no surprises, and sliding-scale fees are available for those without coverage.",
        },
        {
          question: "Can I keep working while in treatment?",
          answer:
            "Yes, and for most people that is the goal. Outpatient and supportive housing options are designed around employment. If you are between jobs, our employment and economic stability team can work alongside your recovery plan.",
        },
      ],
    },
  ],
};
