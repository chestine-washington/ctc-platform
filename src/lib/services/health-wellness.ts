import type { Service } from "./types";

export const healthWellness: Service = {
  slug: "health-wellness",
  title: "Health & Wellness Services",
  metaTitle: "Healthcare Navigation & Wellness Programs",
  metaDescription:
    "Healthcare navigation, nutrition education, physical programs, and stress management assistance for improved mind-body wellness. Call (800) 708-6448 today.",
  shortDesc:
    "Holistic health and wellness programs supporting mind, body, and spirit through healthcare access, nutrition, and stress management.",
  description:
    "A large share of the people we work with are not avoiding healthcare because they do not value it. They are avoiding it because they do not know what their coverage includes, cannot tell what a visit will cost, or have had an experience that made the system feel hostile. Our health and wellness services exist to make care usable, not to lecture anyone about their habits.",
  image: "/images/health-wellness.png",
  icon: "HeartPulse",
  features: [
    "Healthcare Navigation Services",
    "Nutrition Counseling & Education",
    "Fitness & Exercise Coaching",
    "Stress Management Therapy",
    "Wellness Assessments",
    "Mind-Body Wellness Programs",
  ],
  featuresHeading: "Health & Wellness Services We Offer",
  blocks: [
    {
      type: "prose",
      eyebrow: "Our Approach",
      heading: "Healthcare Navigation Built Around Your Real Life",
      paragraphs: [
        "Most general health advice quietly assumes a stable kitchen, a predictable schedule, reliable transport, and money left over at the end of the month. For many of the people we serve, one or more of those assumptions does not hold, which is why standard guidance so often fails and gets misread as a lack of discipline.",
        "We start from your actual circumstances. If you are working nights, cooking for a household on a tight budget, or living somewhere without full kitchen access, that shapes what is realistic. Guidance that ignores those constraints is not useful, however clinically correct it might be in the abstract.",
        "We are not a medical provider and do not diagnose or treat conditions. What we do is navigation and education: helping you understand coverage, connect with providers, prepare for appointments, and build habits that fit your life. When you need clinical care, our role is to make getting there easier.",
      ],
    },
    {
      type: "process",
      eyebrow: "Coverage",
      heading: "Medicaid & Health Insurance Enrollment Assistance",
      intro:
        "Insurance is the barrier we most often see, and it is one of the most solvable. This is the sequence our health insurance navigation team works through with clients.",
      steps: [
        {
          title: "Confirm Your Current Coverage Status",
          description:
            "Many people are enrolled in coverage they do not realize is active, or lost coverage without being notified. We start by establishing your actual current status.",
        },
        {
          title: "Check Medicaid & Program Eligibility",
          description:
            "Medicaid eligibility varies significantly by state and changes with income and household size. Being turned down previously, or in another state, does not mean you are ineligible now.",
          note: "Eligibility rules differ by state and change over time. It is worth rechecking even if you were denied before.",
        },
        {
          title: "Gather Your Application Documents",
          description:
            "Identification, Social Security numbers, income documentation, and household information. Incomplete applications are a leading cause of denials that were never actually about eligibility.",
        },
        {
          title: "Submit and track the application",
          description:
            "We help complete and submit it, and keep track of deadlines and requests for additional information, which are easy to miss and often cause an otherwise valid application to lapse.",
        },
        {
          title: "Understand Your Plan Benefits",
          description:
            "Once enrolled, knowing your copays, which providers are in network, how prescriptions are covered, and what preventive care is free is what turns a card in your wallet into care you actually use.",
        },
        {
          title: "Connect With a Primary Care Provider",
          description:
            "Finding a primary care provider accepting your coverage and new patients, and getting the first appointment booked. Having coverage and having a doctor are not the same thing.",
        },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Coverage Types",
      heading: "Medicaid, Medicare & Marketplace Insurance Compared",
      intro:
        "These health coverage options are routinely confused, and the distinction determines where to apply and when.",
      columns: ["", "Medicaid", "Medicare", "Marketplace"],
      rows: [
        [
          "Primarily for",
          "People with limited income and resources",
          "People 65 and older, and some younger people with disabilities",
          "People without employer or public coverage",
        ],
        [
          "Based on",
          "Income, household size, and state rules",
          "Age or qualifying disability status",
          "Available to most; subsidies depend on income",
        ],
        [
          "When to apply",
          "Any time during the year",
          "Around your eligibility date, during designated periods",
          "Open enrollment, or a special period after a qualifying life event",
        ],
        [
          "Typical cost",
          "Little to no premium in most cases",
          "Premiums vary by the parts you enroll in",
          "Premium varies; income-based subsidies may apply",
        ],
        [
          "Common misconception",
          "That a past denial or a denial in another state still applies",
          "That it automatically covers everything, including long-term care",
          "That it is unaffordable before checking subsidy eligibility",
        ],
      ],
      footnote:
        "General guidance only. Rules differ by state and change over time. Our team can help you check what currently applies in your situation.",
    },
    {
      type: "grid",
      eyebrow: "Focus Areas",
      heading: "Nutrition Counseling, Fitness & Stress Management Programs",
      intro:
        "Available individually or in groups, depending on what suits you.",
      items: [
        {
          title: "Nutrition Counseling on a Real Budget",
          description:
            "Practical food guidance built around what is affordable and available where you shop, including using SNAP benefits well and cooking with limited equipment or storage.",
        },
        {
          title: "Fitness Coaching That Fits Your Life",
          description:
            "Realistic physical activity that does not depend on a gym membership or large blocks of free time, scaled to current ability rather than an ideal.",
        },
        {
          title: "Stress Management Techniques",
          description:
            "Concrete techniques including breathing practices, grounding, and structured relaxation that can be used during a shift or a difficult moment, not only in a quiet room.",
        },
        {
          title: "Sleep Wellness Support",
          description:
            "Sleep problems worsen nearly every other condition and are frequently the first thing to address, particularly for people in recovery or working irregular schedules.",
        },
        {
          title: "Medication Education",
          description:
            "What your prescriptions do, why finishing a course matters, how to ask about side effects, and what to do about cost, which is a common unspoken reason people stop taking them.",
        },
        {
          title: "Preventive Care Guidance",
          description:
            "Which screenings apply at your age, what your plan covers at no cost, and how to prepare for an appointment so you leave with your questions answered.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Appointments",
      heading: "Getting More Out of a Medical Visit",
      intro:
        "Appointments are short. A little preparation changes how much you get from them, particularly if medical settings make you uncomfortable.",
      items: [
        {
          title: "Write your questions down beforehand",
          description:
            "The most important question is the one people most often forget under pressure. A written list also signals that you expect answers.",
        },
        {
          title: "Bring a current medication list",
          description:
            "Everything you take, including over-the-counter products and supplements, since interactions are a genuine risk your provider cannot assess without the full picture.",
        },
        {
          title: "Say plainly if cost is a factor",
          description:
            "Providers can often prescribe generics or alternatives, but only if they know cost is an issue. Saying nothing and not filling the prescription is the worse outcome.",
        },
        {
          title: "Ask for plain language",
          description:
            "If you do not understand something, ask again. 'Can you explain that differently?' is a completely reasonable request, and a good provider will not be annoyed by it.",
        },
        {
          title: "Bring someone if it helps",
          description:
            "A second person can take notes and remember what was said. We can help arrange support for appointments where that would make a difference.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Health & Wellness Services",
      items: [
        {
          question: "Are you a medical provider?",
          answer:
            "No. We do not diagnose conditions, prescribe medication, or provide treatment. We provide health education, coverage navigation, wellness programming, and connections to medical providers when clinical care is needed.",
        },
        {
          question: "Can you help me apply for Medicaid?",
          answer:
            "Yes. We help check eligibility in your state, gather required documentation, complete and submit the application, and track it through to a decision, including responding to requests for more information.",
        },
        {
          question: "I was denied coverage before. Is it worth trying again?",
          answer:
            "Often yes. Eligibility depends on income, household size, and state rules, all of which change. A denial from a previous year or a different state does not determine your status today.",
        },
        {
          question: "Do I need to be in another program to use these services?",
          answer:
            "No. Health and wellness services are available on their own, though many clients use them alongside recovery or mental health care as part of a coordinated plan.",
        },
        {
          question: "Are the programs individual or group-based?",
          answer:
            "Both are available. Some clients prefer one-to-one consultations, others do better in group classes, and many use a combination.",
        },
        {
          question: "What if I have no insurance and no income at all?",
          answer:
            "Contact us anyway. That situation frequently qualifies for programs you may not know exist, and our team can help you apply while connecting you with care that is available in the meantime.",
        },
      ],
    },
  ],
};
