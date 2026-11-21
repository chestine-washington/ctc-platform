import type { Service } from "./types";

export const youthFamily: Service = {
  slug: "youth-family",
  title: "Youth & Family Support Services",
  metaTitle: "Youth and Family Support Services",
  metaDescription:
    "Youth development, after-school tutoring, mentorship, and parenting workshops supporting families with children ages 6-24. Call (800) 708-6448 today.",
  shortDesc:
    "Building stronger families and resilient communities through youth development programs, parenting support, and after-school services.",
  description:
    "Young people rarely arrive with a single, clearly labeled problem. Falling grades, withdrawal from friends, and conflict at home usually show up together, and treating any one of them in isolation tends not to work. Our youth and family services address the whole picture, including the parents, who are often the most exhausted people in the household and the least likely to ask for help themselves.",
  image: "/images/youth-family.png",
  icon: "Users",
  features: [
    "Youth Development Programs",
    "After-School Tutoring Services",
    "Parenting Support Workshops",
    "Youth Mentorship Programs",
    "Family Strengthening Counseling",
    "Community Youth Activities",
  ],
  featuresHeading: "Youth & Family Support Services We Offer",
  blocks: [
    {
      type: "age-bands",
      eyebrow: "By Age",
      heading: "Youth Development Programs by Age Group",
      intro:
        "What a nine-year-old needs from a youth development program and what a seventeen-year-old needs from youth mentorship are not the same thing, and grouping them serves neither.",
      bands: [
        {
          range: "Ages 6–10",
          label: "Elementary Youth Development Programs",
          focus:
            "Our elementary-age youth program builds academic foundations and early emotional vocabulary, in a setting that feels safe and consistent after the school day ends.",
          examples: [
            "Homework support and reading help",
            "Naming and managing big feelings",
            "Structured group play and cooperation",
            "Consistent adult relationships",
          ],
        },
        {
          range: "Ages 11–13",
          label: "Middle School Youth Support & Tutoring",
          focus:
            "The years when academic confidence and peer belonging most often fracture, and when small problems become entrenched if missed.",
          examples: [
            "Subject-specific tutoring",
            "Peer pressure and boundary skills",
            "Organization and study habits",
            "Self-esteem and identity support",
          ],
        },
        {
          range: "Ages 14–17",
          label: "High School Youth Mentorship Programs",
          focus:
            "Our high school youth mentorship program keeps students engaged and on track to graduate while they take on real independence and real risk.",
          examples: [
            "Graduation and credit recovery support",
            "Mentorship with adult role models",
            "Substance use prevention",
            "College and career exploration",
          ],
        },
        {
          range: "Ages 18–24",
          label: "Young Adult Transition & Family Support Services",
          focus:
            "This is the transition out of school, when structured youth support tends to vanish, and consequences become adult-sized. Our young adult programming fills that gap.",
          examples: [
            "Independent living skills",
            "Employment readiness",
            "Leadership development",
            "Continued mentorship",
          ],
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "After-School",
      heading: "After-School Tutoring & Youth Program",
      intro:
        "The hours between the end of school and a parent getting home are consistently identified as the highest-risk window in a young person's day. Our after-school tutoring and youth development programming is built for that gap.",
      items: [
        {
          title: "Academic support and homework help",
          description:
            "Individualized help with the subjects a student is actually struggling in, rather than generic supervised study time.",
        },
        {
          title: "A predictable routine",
          description:
            "The same place, the same people, the same rhythm each day. For young people whose home life is unstable, that consistency is often the most valuable part of the program.",
        },
        {
          title: "Enrichment beyond academics",
          description:
            "Creative and physical activities that build confidence in students who do not experience success in a classroom setting.",
        },
        {
          title: "Social and emotional skill building",
          description:
            "Practical work on managing conflict, frustration, and friendship, embedded in real interactions rather than taught as a separate lesson.",
        },
        {
          title: "Consistent adult relationships",
          description:
            "The same staff week to week. A trusted adult outside the family is one of the strongest protective factors in adolescent development.",
        },
      ],
    },
    {
      type: "pathway",
      eyebrow: "Mentorship",
      heading: "Youth Mentorship Program",
      intro:
        "A mentorship that fizzles out does more harm than no mentorship at all, so the match and the follow-through are handled deliberately.",
      stages: [
        {
          stage: "Matching",
          duration: "Getting it right first",
          description:
            "Mentors are screened and background-checked, then matched on interests, temperament, and goals rather than assigned to whoever is next on a list.",
        },
        {
          stage: "Building trust",
          duration: "Early months",
          description:
            "Early meetings are about consistency, not outcomes. Showing up reliably is the entire task at this stage, particularly for young people used to adults who do not.",
        },
        {
          stage: "Goal work and leadership",
          duration: "Ongoing",
          description:
            "Once trust is established, the relationship turns toward real goals: school, work, leadership opportunities, and community involvement. Staff check in with both sides throughout.",
        },
      ],
    },
    {
      type: "grid",
      eyebrow: "For Parents",
      heading: "Parenting Workshop Topics for Families",
      intro:
        "Our parenting support workshops and family strengthening sessions are open to any parent or caregiver, whether or not your child is enrolled in one of our youth development programs. Attending a parenting workshop is not an admission that something is wrong.",
      items: [
        {
          title: "Communication that survives adolescence",
          description:
            "How to keep a teenager talking to you, including what tends to end conversations immediately and what keeps the door open.",
        },
        {
          title: "Discipline that actually works",
          description:
            "Setting and holding consistent limits without escalation, and why consistency matters more than severity.",
        },
        {
          title: "Understanding adolescent development",
          description:
            "What is developmentally normal for the age versus what genuinely warrants concern, which spares a great deal of unnecessary alarm and catches the real problems.",
        },
        {
          title: "Recognizing Warning Signs in Teens",
          description:
            "Recognizing indicators of depression, anxiety, substance use, and self-harm, and knowing what to do next rather than waiting and hoping.",
        },
        {
          title: "Parenting through your own stress",
          description:
            "Caregiving while managing financial pressure, recovery, or your own mental health, which is the reality for many of the families we work with.",
        },
        {
          title: "Co-parenting and blended families",
          description:
            "Maintaining consistency across households and reducing the conflict children end up caught in the middle of.",
        },
      ],
    },
    {
      type: "callout",
      heading: "If a young person is in crisis",
      body:
        "If a child or teen is talking about suicide, self-harm, or is in immediate danger, call or text 988 for the Suicide & Crisis Lifeline, or call 911 for an emergency. Do not wait for a program intake appointment. Our team can help with what comes after the immediate crisis is stabilized.",
      variant: "urgent",
      tone: "plain",
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Youth & Family Services",
      items: [
        {
          question: "What ages do you serve?",
          answer:
            "Programming runs from elementary school age through young adulthood, roughly ages 6 to 24, with the format and focus changing at each stage.",
        },
        {
          question: "Can I attend a parenting workshop if my child is not enrolled?",
          answer:
            "Yes. Parenting workshops are open to any parent or caregiver, regardless of whether your child participates in another program with us.",
        },
        {
          question: "Are your mentors screened?",
          answer:
            "Yes. Mentors are screened and background-checked before being matched, and staff maintain check-ins with both the mentor and the young person throughout the relationship.",
        },
        {
          question: "My teenager refuses to participate. What can I do?",
          answer:
            "Common, and worth talking through with us. Forced participation rarely produces results, so we usually start by working with parents and finding a lower-pressure entry point rather than pushing a reluctant teen into a full program.",
        },
        {
          question: "Is tutoring for specific subjects?",
          answer:
            "It is individualized. For some students that means a specific subject like math or reading; for others it means organization, study habits, and catching up on credits.",
        },
        {
          question: "What if my child needs mental health support too?",
          answer:
            "We coordinate directly with our mental health and counseling team, so a young person can receive counseling and youth programming without you having to manage two unconnected organizations.",
        },
      ],
    },
  ],
};
