import type { Service } from "./types";

export const autismSpecialNeeds: Service = {
  slug: "autism-special-needs",
  title: "Autism & Special Needs Support Services",
  metaTitle: "Autism & Special Needs Support Services",
  metaDescription:
    "IEP advocacy, social skills training, and family support for autism and special needs across all ages. Call (800) 708-6448 today for a free consultation.",
  shortDesc:
    "Dedicated autism support and special needs services including social skills development, IEP advocacy, and family training for children, teens, and adults.",
  description:
    "Families supporting someone with autism or another developmental disability are usually not short on effort. They are short on coordination: a school saying one thing, a provider saying another, and a system that assumes parents already know their rights. Our role is to make that system navigable, and to build skills alongside the individual rather than around them.",
  image: "/images/autism-special-needs.png",
  icon: "HeartHandshake",
  features: [
    "Social Skills Development",
    "IEP Support & Advocacy",
    "Specialized Support Groups",
    "Family Training & Resources",
    "Life Skills Training",
    "Community Integration Programs",
  ],
  featuresHeading: "Autism & Special Needs Services We Offer",
  blocks: [
    {
      type: "prose",
      eyebrow: "Our Approach",
      heading: "Our Approach to Autism & Special Needs Support",
      paragraphs: [
        "Autism is a spectrum in the literal sense: two people with the same diagnosis can have entirely different communication profiles, sensory needs, and support requirements. A program that works well for one may be actively distressing for the other. That is why we start from an individual profile rather than a diagnostic category.",
        "We also work from the assumption that the goal is not to make someone appear less autistic. The goal is functional: communicating needs effectively, navigating environments comfortably, building genuine relationships, and gaining as much independence as the person wants and can sustain. Strategies that suppress natural regulation behaviors while producing no functional gain are not something we pursue.",
        "Families are part of the plan from the beginning. Caregivers spend far more hours with the individual than any program does, so a strategy that only works in a session room is of limited value. Training parents and caregivers directly in the approaches being used is one of the most reliable ways to make progress hold.",
      ],
    },
    {
      type: "age-bands",
      eyebrow: "Programming by Stage",
      heading: "Autism Support Programs by Age Group",
      intro:
        "Needs shift substantially across development. What helps a six-year-old is not what a nineteen-year-old preparing to leave school needs.",
      bands: [
        {
          range: "Early Childhood",
          label: "Early Childhood Autism Support",
          focus:
            "Establishing functional communication and helping families understand sensory and regulation needs early, when routines are still forming.",
          examples: [
            "Communication strategy development",
            "Sensory profile and regulation support",
            "Caregiver coaching in daily routines",
            "Early intervention system navigation",
          ],
        },
        {
          range: "School Age",
          label: "School-Age Autism Support",
          focus:
            "Making school work. Most of our effort at this stage goes into the educational plan and into peer interaction skills in real settings.",
          examples: [
            "IEP development and advocacy",
            "Peer and social skills groups",
            "Behavioral support planning",
            "School and provider coordination",
          ],
        },
        {
          range: "Teen Years",
          label: "Teen Autism Support",
          focus:
            "Self-advocacy and transition planning. Under federal law, transition planning must be part of the IEP by age 16, and earlier in many states.",
          examples: [
            "Self-advocacy skill building",
            "Transition plan development",
            "Independent living skills",
            "Vocational exploration",
          ],
        },
        {
          range: "Adults",
          label: "Adult Autism & Special Needs Support",
          focus:
            "Life after the school system, which is where structured support most often disappears entirely and families feel it most sharply.",
          examples: [
            "Daily living and community skills",
            "Employment readiness support",
            "Community integration programs",
            "Adult services navigation",
          ],
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Education Advocacy",
      heading: "IEP Advocacy Process for Special Education",
      intro:
        "An Individualized Education Program is a legally binding document under the federal Individuals with Disabilities Education Act. Families frequently do not realize how much authority they hold in this process. Here is the sequence and where your leverage sits.",
      steps: [
        {
          title: "Referral and request for evaluation",
          description:
            "Either the school or the parent can initiate. A parent can request an evaluation in writing at any time, and the request should be dated and kept.",
          note: "Put it in writing. A verbal request to a teacher does not reliably start the legal timeline; a dated written request to the school does.",
        },
        {
          title: "Evaluation",
          description:
            "The school must obtain your written consent before evaluating. The evaluation should assess all areas of suspected disability rather than a single narrow domain, and federal law sets a timeline of 60 days from consent, which some states shorten.",
        },
        {
          title: "Eligibility determination",
          description:
            "A team including you reviews the results and decides whether the child qualifies under one of the IDEA disability categories and needs specially designed instruction. You are a member of that team, not an observer.",
        },
        {
          title: "IEP development",
          description:
            "If eligible, the team writes the IEP: present levels of performance, measurable annual goals, services and minutes, accommodations, and placement. This meeting is where advocacy matters most, and where we most often attend with families.",
          note: "Goals should be specific and measurable. 'Will improve communication' is not measurable and gives you nothing to hold the school to at review time.",
        },
        {
          title: "Implementation",
          description:
            "Services begin as written. The IEP is a binding commitment, not an aspiration, so if the stated minutes or supports are not actually being delivered, that is a compliance issue you can raise.",
        },
        {
          title: "Review and reevaluation",
          description:
            "The IEP is reviewed at least annually, and the child is generally reevaluated at least every three years. You can request a meeting sooner at any time if something is not working, rather than waiting for the annual date.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Know Your Rights",
      heading: "Parent Rights Under IDEA for Special Education",
      intro:
        "These protections exist regardless of what any individual school tells you. Knowing them changes the conversation.",
      items: [
        {
          title: "You can request an evaluation at any time",
          description:
            "You do not need to wait for the school to suggest it, and you do not need to wait through a lengthy pre-referral period before making a written request.",
        },
        {
          title: "You are a full member of the IEP team",
          description:
            "Meetings must be scheduled at a mutually agreeable time and place. You are entitled to participate in decisions, not simply receive them.",
        },
        {
          title: "You are entitled to prior written notice",
          description:
            "The school must notify you in writing before it proposes or refuses to change identification, evaluation, placement, or services, including the reasoning behind the decision.",
        },
        {
          title: "You can disagree with the school's evaluation",
          description:
            "If you disagree with the school's evaluation, you may request an Independent Educational Evaluation, potentially at public expense.",
        },
        {
          title: "You can access your child's educational records",
          description:
            "Requesting the full file before a meeting, rather than reading documents for the first time at the table, is one of the simplest ways to be prepared.",
        },
        {
          title: "You have formal dispute options",
          description:
            "If disagreements cannot be resolved, mediation, state complaints, and due process hearings are available paths. Escalation does not have to be immediate, but it exists.",
        },
      ],
      footnote:
        "This is general information about rights under the Individuals with Disabilities Education Act, not legal advice. State rules add protections and timelines that vary. Our advocates can help you understand how these apply in your state, and we will tell you plainly if a situation calls for a special education attorney rather than an advocate.",
    },
    {
      type: "grid",
      eyebrow: "Skill Areas",
      heading: "Autism Skill-Building Support Areas",
      intro:
        "Direct work with the individual concentrates on functional skills that transfer outside the session room.",
      items: [
        {
          title: "Communication Support",
          description:
            "Expressive and receptive communication in whatever form works for the person, including speech, devices, and alternative communication systems. Being understood is the foundation everything else rests on.",
        },
        {
          title: "Sensory & Regulation Support",
          description:
            "Identifying sensory triggers and building a practical regulation toolkit, so environments become manageable rather than something to endure or avoid entirely.",
        },
        {
          title: "Social Skills Development",
          description:
            "Reading social context, initiating and maintaining interaction, and navigating conflict, practiced in real peer settings rather than only one-on-one with an adult.",
        },
        {
          title: "Behavioral Support Planning",
          description:
            "Behavior is communication. We work to identify what a behavior is accomplishing for the person and build a workable alternative, instead of simply suppressing it.",
        },
        {
          title: "Daily Living Skills Training",
          description:
            "Practical independence: personal care routines, money handling, time management, transportation, and the tasks that determine how independently someone can actually live.",
        },
        {
          title: "Community Integration Programs",
          description:
            "Structured participation in community settings, so skills built in a program generalize to shops, workplaces, transit, and public spaces.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "For Caregivers",
      heading: "Caregiver Support for Autism & Special Needs Families",
      intro:
        "Caregiver burnout is real and rarely discussed openly. These supports exist for you, not only for the person you care for.",
      items: [
        {
          title: "Caregiver support groups",
          description:
            "A space with people who do not need the situation explained from scratch, and who can share what has actually worked.",
        },
        {
          title: "Hands-on strategy training",
          description:
            "Direct training in the communication and behavioral approaches being used, so they can be applied consistently at home.",
        },
        {
          title: "Meeting preparation and attendance",
          description:
            "Help preparing for IEP and provider meetings, including what to ask and what to document, with an advocate present where appropriate.",
        },
        {
          title: "Sibling and family guidance",
          description:
            "Practical support for the whole household, including siblings, whose needs are frequently deprioritized without anyone intending it.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Autism & Special Needs Services",
      items: [
        {
          question: "Do we need a formal diagnosis to start?",
          answer:
            "Not for every service. Many families come to us during the diagnostic process, which can take a long time. We can help you navigate evaluation while providing support in the meantime. Some specific programs and funding sources do require documentation, and we will tell you clearly which ones.",
        },
        {
          question: "Will an advocate attend our IEP meeting?",
          answer:
            "Yes. Our advocates regularly attend IEP meetings with families, help prepare beforehand by reviewing records and drafting questions, and follow up afterward on whether what was agreed is actually being delivered.",
        },
        {
          question: "Is an advocate the same as a special education attorney?",
          answer:
            "No. An advocate helps you understand the process, prepare, and communicate effectively with the school. An attorney provides legal representation. Most situations are resolved at the advocacy level, and we will say directly when we believe a case warrants an attorney.",
        },
        {
          question: "Do you serve adults, or only children?",
          answer:
            "Both. Support after the school system ends is one of the largest gaps families face, and our adult programming focuses on daily living skills, employment readiness, community integration, and navigating adult services.",
        },
        {
          question: "My child is nonspeaking. Are your programs appropriate?",
          answer:
            "Yes. Communication support covers all forms of communication, including devices and alternative communication systems. Being nonspeaking is not a barrier to participating, and it is not treated as a barrier to being understood.",
        },
        {
          question: "Do you provide ABA therapy?",
          answer:
            "Our direct support focuses on social skills development, life skills, behavioral support planning, family training, and advocacy. If you are specifically seeking clinical ABA or other therapies we do not provide directly, our team can talk through what we offer and help you locate appropriate providers.",
        },
      ],
    },
  ],
};
