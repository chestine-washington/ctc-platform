import type { Service } from "./types";

export const homelessnessPrevention: Service = {
  slug: "homelessness-prevention",
  title: "Homelessness Prevention Services",
  metaTitle: "Homelessness Prevention Services",
  metaDescription:
    "Emergency housing assistance, case management, eviction prevention, and utility assistance to help before a housing crisis hits. Call us at (800) 708-6448.",
  shortDesc:
    "Comprehensive homelessness prevention services including case management, resource navigation, and transportation assistance.",
  description:
    "Timing changes everything in housing. The options available to someone who has received a late notice are far broader, faster, and cheaper than the options available after an eviction judgment is entered. If housing is becoming a problem, the single most useful thing you can do is contact someone before it becomes a crisis, not after.",
  image: "/images/homelessness-prevention.png",
  icon: "Home",
  features: [
    "Emergency Housing Assistance",
    "Case Management Services",
    "Housing Resource Navigation",
    "Transportation Assistance",
    "Utility Assistance Programs",
    "Self-Sufficiency Planning",
  ],
  featuresHeading: "Our Homelessness Prevention Services",
  blocks: [
    {
      type: "triage",
      eyebrow: "Start Here",
      heading: "Eviction Help by Stage: Where Do You Stand?",
      intro:
        "Eviction help looks different depending on how far along your housing crisis already is. Find the stage that matches your situation to get the right emergency housing assistance or eviction prevention support.",
      options: [
        {
          situation: "Housing is at risk",
          urgency: "Early stage",
          guidance:
            "You are behind on rent or utilities, or you can see that you will be soon. Nothing formal has been filed yet. This is the stage with the most options available and the lowest cost to resolve, and it is also the stage people most often wait through.",
          action:
            "Contact us now for a case management appointment. Early intervention can include utility assistance, rental support, and landlord mediation before anything reaches a court.",
        },
        {
          situation: "Facing eviction",
          urgency: "Time sensitive",
          guidance:
            "You have received a formal notice or court papers. Deadlines here are short and vary by state, and missing one can forfeit rights you would otherwise have had.",
          action:
            "Contact us immediately and keep every document you received. Do not ignore court dates. We can assist with eviction prevention support and connect you with legal aid in your area.",
        },
        {
          situation: "Already without housing",
          urgency: "Immediate",
          guidance:
            "You have lost your housing, are staying with others temporarily, are in a shelter, or are unsheltered. The focus shifts to immediate safety first, then rehousing.",
          action:
            "Call 211 for immediate shelter and emergency services in your area, then contact us for case management, housing navigation, and a rehousing plan.",
        },
      ],
    },
    {
      type: "callout",
      heading: "If you are unsheltered tonight",
      body:
        "Call 211 to reach local shelter availability, emergency food, and crisis services in your area. It is free, confidential, and available in most of the United States 24 hours a day. In extreme heat or cold, do not wait until morning: exposure is a genuine medical emergency and 911 is appropriate.",
      variant: "urgent",
      tone: "plain",
    },
    {
      type: "checklist",
      eyebrow: "Be Prepared",
      heading: "Documents Needed for Housing Assistance",
      intro:
        "Bring whatever you have. Missing documents will not stop us from helping, and part of case management is replacing paperwork you no longer have. This list simply speeds things up.",
      items: [
        {
          title: "Photo identification for adults in the household",
          description:
            "A state ID, driver's license, or passport. If you have lost your ID, say so early, since replacing it is often the first thing that unlocks other assistance.",
        },
        {
          title: "Social Security cards or numbers",
          description:
            "For everyone in the household, including children. Most housing and benefit programs require this.",
        },
        {
          title: "Proof of income, or documentation that there is none",
          description:
            "Recent pay stubs, benefit award letters, or unemployment documentation. If you have no income at all, that is itself relevant and often qualifying information.",
        },
        {
          title: "Your lease and any notices received",
          description:
            "The lease itself plus every notice from your landlord or the court, with dates. These determine which deadlines apply and what options remain open.",
        },
        {
          title: "Utility bills and shut-off notices",
          description:
            "Utility assistance is often available separately from rental assistance, and a pending shut-off can qualify as its own emergency.",
        },
        {
          title: "Birth certificates for children in the household",
          description:
            "Frequently required for family housing programs and for school enrollment during a move.",
        },
      ],
      footnote:
        "Do not delay contacting us because your paperwork is incomplete. Come with what you have; we will work on the rest together.",
    },
    {
      type: "grid",
      eyebrow: "Types of Support",
      heading: "What Assistance Can Cover",
      intro:
        "Availability varies by state, funding, and your specific circumstances. Your case manager will tell you plainly what you qualify for rather than leaving you to guess.",
      items: [
        {
          title: "Rental and eviction prevention assistance",
          description:
            "Financial help addressing arrears or an immediate shortfall where it can realistically keep you housed, subject to funding and eligibility.",
        },
        {
          title: "Utility assistance",
          description:
            "Support with shut-off notices and past-due utility balances, which are a common and often overlooked path into losing housing altogether.",
        },
        {
          title: "Landlord mediation",
          description:
            "Direct conversation with your landlord about payment arrangements. A landlord who prefers to avoid the cost of eviction is frequently open to an arrangement, and a third party helps that conversation happen.",
        },
        {
          title: "Housing search and application navigation",
          description:
            "Identifying available units and programs, understanding eligibility, and getting through applications and waitlists that otherwise stall for months.",
        },
        {
          title: "Transportation assistance",
          description:
            "Bus passes and rides to appointments, viewings, and interviews. A missed appointment because of a missing ride is a genuinely common reason plans collapse.",
        },
        {
          title: "Community resource connection",
          description:
            "Direct links to food assistance, healthcare, mental health counseling, and job training through our partner network, coordinated by one case manager rather than five separate offices.",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Case Management",
      heading: "How Our Case Management Process Works",
      intro:
        "You are assigned one case manager who coordinates the whole plan. You should not have to repeat your situation to a different person at every step.",
      steps: [
        {
          title: "Intake and immediate safety",
          description:
            "First we establish whether you have somewhere safe to sleep tonight. Everything else waits until that question is answered.",
        },
        {
          title: "Full situation assessment",
          description:
            "Housing, income, health, family composition, benefits, and any legal deadlines. Housing crises rarely have a single cause, and a plan built on only part of the picture tends to fail.",
        },
        {
          title: "Stabilization plan",
          description:
            "A written plan with immediate actions, who is responsible for each, and the deadlines that apply, so nothing depends on remembering a conversation.",
        },
        {
          title: "Resource activation",
          description:
            "Your case manager makes the referrals and connections directly rather than handing you a list of phone numbers and wishing you luck.",
        },
        {
          title: "Follow-through and adjustment",
          description:
            "Regular check-ins as things change. Denials happen, funding runs out, and circumstances shift; the plan is adjusted rather than abandoned.",
        },
        {
          title: "Self-sufficiency planning",
          description:
            "Once the immediate crisis is stable, attention turns to income, budgeting, and the longer-term arrangements that prevent a repeat, often alongside our employment services.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Homelessness Prevention",
      items: [
        {
          question: "I have not lost my housing yet. Can you still help?",
          answer:
            "Yes, and this is the best time to reach out. Prevention is far more effective and less costly than rehousing, and options like utility assistance and landlord mediation are only available before a situation reaches court.",
        },
        {
          question: "Do you provide direct financial assistance?",
          answer:
            "In some cases, particularly for eviction prevention and utility arrears. Availability depends on funding, your state, and your circumstances. Your case manager will tell you clearly what you qualify for rather than leaving you uncertain.",
        },
        {
          question: "Do you run a shelter?",
          answer:
            "We are not an emergency shelter. For shelter tonight, call 211 for local availability. We provide case management, housing navigation, prevention assistance, and rehousing support, and we can work with you while you are in a shelter.",
        },
        {
          question: "Can you help with an eviction court case?",
          answer:
            "We are not attorneys and do not provide legal representation. We can help you understand your notices, connect you with legal aid in your area, and work on eviction prevention. Keep every document and do not miss court dates.",
        },
        {
          question: "Is this only for individuals, or families too?",
          answer:
            "Both. We work with individuals and with families, and plans are built around the whole household including children's school stability during a move.",
        },
        {
          question: "What if I have a criminal record or a past eviction?",
          answer:
            "Both make housing harder to find but neither makes it impossible. Your case manager knows which programs and landlords work with these histories, and our employment team can help address income at the same time.",
        },
      ],
    },
  ],
};
