import type { Service } from "./types";

export const mentalHealth: Service = {
  slug: "mental-health",
  title: "Mental Health & Counseling Services",
  metaTitle: "Mental Health & Therapy Services",
  metaDescription:
    "Individual, group & family therapy for anxiety, depression, trauma & more. Insurance accepted. Call (800) 708-6448 for a free, confidential consultation.",
  shortDesc:
    "Professional mental health services offering therapy, crisis support, and personalized treatment plans for lasting wellness.",
  description:
    "Most people wait far longer than they need to before starting mental health counseling, usually because they are not sure their situation is \"bad enough\" to warrant it. You don't have to cross a threshold. If something is affecting how you sleep, work, or relate to the people around you, that is enough reason to talk to a therapist.",
  image: "/images/mental-health.png",
  icon: "Brain",
  features: [
    "Individual Therapy Sessions",
    "Group Counseling Programs",
    "Crisis Intervention & Support",
    "Trauma-Informed Therapy",
    "Medication Management Support",
    "Family Counseling Services",
  ],
  featuresHeading: "Mental Health Services We Offer",
  blocks: [
    {
      type: "callout",
      heading: "In crisis right now?",
      body:
        "If you are having thoughts of suicide or self-harm, call or text 988 to reach the National Suicide & Crisis Lifeline. It is free, confidential, and staffed 24 hours a day. For an immediate medical emergency, call 911. Please do not wait for an appointment to get help with an acute crisis.",
      variant: "urgent",
      tone: "plain",
    },
    {
      type: "grid",
      eyebrow: "What We Support",
      heading: "Mental Health Concerns We Treat",
      intro:
        "You do not need a diagnosis to begin, and you do not need to fit neatly into one of these categories.",
      items: [
        {
          title: "Anxiety Therapy",
          description:
            "Persistent worry, panic episodes, social anxiety, and the physical symptoms that come with them. Work focuses on the avoidance cycle that keeps anxiety self-reinforcing over time.",
        },
        {
          title: "Depression Counseling",
          description:
            "Ongoing low mood, loss of interest, fatigue, and hopelessness. Counseling addresses both the thought patterns and the behavioral withdrawal that tends to deepen them.",
        },
        {
          title: "Trauma & PTSD Treatment",
          description:
            "Effects of past traumatic experience, including intrusive memories, hypervigilance, and numbness. Handled through trauma-informed care that moves at a pace you set.",
        },
        {
          title: "Grief & Loss Counseling",
          description:
            "Bereavement and non-death losses such as divorce, estrangement, or loss of health. Grief has no correct timeline, and support is available long after others expect you to have moved on.",
        },
        {
          title: "Stress & Burnout Therapy",
          description:
            "Chronic overwhelm from work, caregiving, or financial pressure. Focus is on sustainable coping and boundaries rather than advice to simply relax.",
        },
        {
          title: "Relationship & Family Counseling",
          description:
            "Communication breakdown, recurring conflict, and difficulty setting boundaries, whether you attend alone or bring family members with you.",
        },
        {
          title: "Co-occurring Mental Health & Substance Use Treatment",
          description:
            "Mental health and substance use frequently occur together. Treating them in isolation rarely works, so care is coordinated with our recovery services.",
        },
        {
          title: "Life Transition Counseling",
          description:
            "Job loss, relocation, becoming a caregiver, leaving treatment, or reentry after incarceration. Difficulty during major change is expected, not a personal failing.",
        },
        {
          title: "Self-Esteem & Identity Counseling",
          description:
            "Persistent self-criticism, difficulty with self-worth, and questions of identity and direction, explored without judgment about where you land.",
        },
      ],
    },
    {
      type: "comparison",
      eyebrow: "Choosing a Format",
      heading: "Individual, Group, or Family Counseling",
      intro:
        "These are not ranked from best to worst. They do different things, and many clients use more than one at different points.",
      columns: ["", "Individual", "Group", "Family"],
      rows: [
        [
          "Best suited to",
          "Personal concerns needing focused, private attention",
          "Challenges where hearing from others facing the same thing helps",
          "Conflict or strain involving the household as a whole",
        ],
        [
          "Who attends",
          "You and your counselor",
          "You plus other participants with a facilitator",
          "You and the family members you choose to include",
        ],
        [
          "Main strength",
          "Depth, full pacing control, complete privacy",
          "Reduced isolation, shared strategies, peer perspective",
          "Changes the dynamic itself, not only one person's response to it",
        ],
        [
          "Worth knowing",
          "Can feel intense early on while trust is being built",
          "Requires some comfort speaking in front of others",
          "Works best when participants attend willingly",
        ],
        [
          "Often used for",
          "Trauma, depression, anxiety, identity concerns",
          "Grief, women's support, shared life circumstances",
          "Communication breakdown, recovery-related repair",
        ],
      ],
    },
    {
      type: "checklist",
      eyebrow: "How We Work",
      heading: "Therapeutic Approaches We Draw From",
      intro:
        "No single method fits everyone. Counselors draw from established approaches based on what you are working through and what you respond to.",
      items: [
        {
          title: "Cognitive and behavioral approaches",
          description:
            "Identifying thought patterns that drive distress and testing them against evidence, paired with behavioral changes that interrupt cycles like avoidance and withdrawal.",
        },
        {
          title: "Trauma-informed care",
          description:
            "Practice grounded in the assumption that trauma may be present, prioritizing safety, choice, and control. You are never pushed to recount events before you are ready.",
        },
        {
          title: "Person-centered counseling",
          description:
            "You set the direction. The counselor's role is to provide a non-judgmental space and genuine understanding rather than to prescribe what your goals should be.",
        },
        {
          title: "Motivational interviewing",
          description:
            "Particularly useful when you feel two ways about a change. It works with ambivalence directly instead of arguing you out of it.",
        },
        {
          title: "Skills-based and solution-focused work",
          description:
            "Concrete tools for emotional regulation, distress tolerance, and communication, for when you need something usable this week rather than insight alone.",
        },
      ],
    },
    {
      type: "timeline",
      eyebrow: "What to Expect",
      heading: "What to Expect in Your First Therapy Session",
      intro:
        "Not knowing what happens in the room is one of the most common reasons people postpone starting. Broadly, this is it.",
      entries: [
        {
          marker: "First minutes",
          title: "Confidentiality, explained plainly",
          description:
            "Your counselor explains what stays private and the narrow legal limits, such as immediate risk of harm. You should leave this conversation clear on exactly who can access what.",
        },
        {
          marker: "Early on",
          title: "What brought you in",
          description:
            "An open conversation, not an interrogation. You control how much detail you give, and 'I don't want to talk about that yet' is a complete and acceptable answer.",
        },
        {
          marker: "Middle",
          title: "Background and context",
          description:
            "Some questions about history, health, medication, sleep, support system, and past counseling. This is about understanding context, not building a file against you.",
        },
        {
          marker: "Toward the end",
          title: "Defining what better looks like",
          description:
            "You and your counselor agree on what you actually want out of this. Goals can be modest and can change; the point is having a shared direction.",
        },
        {
          marker: "Before you leave",
          title: "Cadence and next steps",
          description:
            "You agree on how often to meet and what happens between sessions. If the fit does not feel right after a few sessions, say so. Asking for a different counselor is a reasonable request, not an insult.",
        },
      ],
    },
    {
      type: "grid",
      columns: 2,
      eyebrow: "Coordination",
      heading: "Care That Connects to the Rest of Your Life",
      intro:
        "Mental health rarely sits in isolation from housing, income, or physical health.",
      items: [
        {
          title: "Medication management support",
          description:
            "We are not a prescribing provider, but where medication is part of your care we coordinate with your prescriber, with your written consent, so treatment is not split across disconnected providers.",
        },
        {
          title: "Coordination with our other programs",
          description:
            "If housing instability, unemployment, or substance use is contributing, your counselor can connect you directly with our recovery, employment, or housing teams rather than sending you to start over elsewhere.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Mental Health & Counseling",
      items: [
        {
          question: "Do I need a diagnosis to start counseling?",
          answer:
            "No. Many clients arrive without a diagnosis and simply describe feeling overwhelmed, stuck, or not themselves. A counselor will help clarify what is going on and what support fits.",
        },
        {
          question: "Is what I say actually confidential?",
          answer:
            "Yes. Sessions and records are protected under HIPAA, and we do not share information without your written authorization. The limits are narrow and legally defined, primarily immediate risk of serious harm to yourself or someone else, and suspected abuse of a child or vulnerable adult. Your counselor will explain these in your first session.",
        },
        {
          question: "How long will I need counseling?",
          answer:
            "It varies widely. Some clients work through a specific issue in a couple of months; others continue longer term. This is reviewed with you rather than decided for you, and you may stop at any time.",
        },
        {
          question: "Can I bring my partner or family to sessions?",
          answer:
            "Yes. Family counseling is available alongside individual sessions, and many clients use both. Your counselor can help decide what makes sense given your situation.",
        },
        {
          question: "Do you prescribe medication?",
          answer:
            "No, we are not a prescribing provider. If medication may be helpful we can discuss it and coordinate with a medical provider, and we work alongside your existing prescriber with your consent.",
        },
        {
          question: "What if I do not connect with my counselor?",
          answer:
            "Tell us. Fit matters a great deal in counseling and not every pairing works. Requesting a different counselor is a normal, reasonable request and will not affect your access to services.",
        },
        {
          question: "Do you take insurance?",
          answer:
            "We work with most major insurance plans and are credentialed with Medicaid in the states we serve. We verify your benefits before you begin, and sliding-scale fees are available without coverage.",
        },
      ],
    },
  ],
};
