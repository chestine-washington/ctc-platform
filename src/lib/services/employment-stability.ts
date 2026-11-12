import type { Service } from "./types";

export const employmentStability: Service = {
  slug: "employment-stability",
  title: "Employment & Economic Stability Services",
  metaTitle: "Employment & Job Training Services",
  metaDescription:
    "Job search assistance, resume coaching, vocational training & financial literacy workshops for lasting employment. Call our team at (800) 708-6448.",
  shortDesc:
    "Comprehensive employment services helping individuals achieve financial independence through job training, career counseling, and financial literacy.",
  description:
    "Getting hired is only half the problem. Plenty of people land a job and lose it within two months, not because they cannot do the work, but because of a transport gap, a scheduling conflict, or a first paycheck that arrives three weeks after rent was due. Our employment services are built around both halves: getting the offer, and still having the job ninety days later.",
  image: "/images/employment-stability.png",
  icon: "Briefcase",
  features: [
    "Job Search Assistance",
    "Resume & Interview Coaching",
    "Financial Literacy Workshops",
    "Vocational Training Programs",
    "Employer Partnership Placement",
    "Economic Stability Planning",
  ],
  featuresHeading: "Employment Services We Offer",
  blocks: [
    {
      type: "process",
      eyebrow: "The Pathway",
      heading: "From First Meeting to Ninety Days Employed",
      intro:
        "You can enter at whatever stage matches your situation. Someone who already has a strong resume does not need to start at step one.",
      steps: [
        {
          title: "Employment assessment",
          description:
            "A career counselor works through your work history, skills, interests, constraints, and goals. Constraints matter as much as ambitions: childcare, transport, hours you cannot work, and any legal restrictions all shape a realistic plan.",
        },
        {
          title: "Barrier removal",
          description:
            "Before applications go out, we address what would sink an offer anyway. That can mean transport, documents, interview clothing, childcare arrangements, or a plan for discussing an employment gap.",
          note: "This step is skipped most often and is the most common reason a promising job search stalls out.",
        },
        {
          title: "Resume and Job Application Materials",
          description:
            "Building or rebuilding a resume that presents your history honestly and well, including how to handle gaps, short tenures, and career changes without being evasive.",
        },
        {
          title: "Interview Coaching",
          description:
            "Practice interviews with direct feedback, focused on the questions you are dreading. If you need to explain a gap, a firing, or a record, we work on that answer until you can deliver it calmly.",
        },
        {
          title: "Active Job Search Support",
          description:
            "Structured searching using job boards, our employer partner network, and local connections. Counselors keep the search accountable so it does not quietly stop after the first few rejections.",
        },
        {
          title: "Job Placement and First-90-Days Support",
          description:
            "Support does not end at the offer letter. The first three months determine whether a job lasts, so we stay engaged through onboarding, the first paycheck cycle, and early workplace issues.",
        },
      ],
    },
    {
      type: "grid",
      eyebrow: "Real Obstacles",
      heading: "Employment Barriers We Help You Work Around",
      intro:
        "These are the practical problems that most often stand between someone and steady work. None of them are unusual, and none of them are disqualifying.",
      items: [
        {
          title: "Gaps in employment history",
          description:
            "Time away for treatment, incarceration, caregiving, or illness. We work on a truthful, composed explanation that neither hides the gap nor over-explains it.",
        },
        {
          title: "Job Search Support With a Criminal Record",
          description:
            "Guidance on what employers can ask in your state, when disclosure is required, and which of our employer partners hire with a record. Preparation makes the conversation far less damaging.",
        },
        {
          title: "No reliable transportation",
          description:
            "Bus passes and route planning through our homelessness prevention team, plus targeting the search toward employers you can actually reach on time every day.",
        },
        {
          title: "No Recent Job References",
          description:
            "Identifying who can genuinely speak for you, including supervisors from years back, volunteer coordinators, and program staff who have seen your work firsthand.",
        },
        {
          title: "Limited Digital Skills for Job Applications",
          description:
            "Nearly all applications are online now. Support with email setup, online applications, and the basic computer skills employers assume you already have.",
        },
        {
          title: "Interview-appropriate clothing",
          description:
            "A small, entirely solvable barrier that stops people from attending interviews they were qualified for. We connect clients with local resources for interview clothing.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Financial Literacy",
      heading: "Financial Literacy Workshops We Offer",
      intro:
        "Income alone does not produce stability. These sessions are led by financial professionals and are practical rather than theoretical.",
      items: [
        {
          title: "Budgeting on an irregular income",
          description:
            "Most budgeting advice assumes a predictable monthly salary. These sessions work with variable hours, gig income, and cash flow that does not line up neatly with due dates.",
        },
        {
          title: "Understanding your paycheck",
          description:
            "Gross versus net, withholding, and why the first check is often smaller and later than expected, which is a frequent cause of an early financial crisis in a new job.",
        },
        {
          title: "Banking without predatory fees",
          description:
            "Opening an account, avoiding overdraft traps, and the true cost of check-cashing and payday lending compared with the alternatives.",
        },
        {
          title: "Debt management and prioritization",
          description:
            "Which debts to address first, how to talk to creditors, and what actually happens with collections, so decisions are made from information rather than fear.",
        },
        {
          title: "Building or repairing credit",
          description:
            "How credit is scored, how to obtain and read your report, how to dispute errors, and realistic timelines for rebuilding.",
        },
        {
          title: "Saving when there is little margin",
          description:
            "Building a small emergency buffer on a tight income, and why even a modest cushion prevents one unexpected expense from undoing months of progress.",
        },
      ],
    },
    {
      type: "checklist",
      eyebrow: "Life Skills",
      heading: "Workplace Skills That Keep the Job",
      intro:
        "Technical ability is rarely why someone loses a job in the first ninety days.",
      items: [
        {
          title: "Time management and reliability",
          description:
            "Building routines that make consistent, punctual attendance realistic given your actual commute and home responsibilities.",
        },
        {
          title: "Workplace communication",
          description:
            "Asking for clarification, raising a problem before it escalates, and requesting time off in a way that gets a yes.",
        },
        {
          title: "Conflict resolution",
          description:
            "Handling disagreement with a coworker or supervisor without it becoming a disciplinary issue.",
        },
        {
          title: "Receiving feedback",
          description:
            "Taking correction without reading it as a threat to the job, which is a genuine and common difficulty for people whose employment history has been unstable.",
        },
      ],
    },
    {
      type: "callout",
      heading: "What we can and cannot promise",
      body:
        "We do not guarantee job placement, and you should be skeptical of any program that does. Hiring decisions belong to employers. What we commit to is preparation, direct connections to our employer partner network, and support that continues after you are hired rather than ending at the interview.",
      variant: "info",
      tone: "tint",
    },
    {
      type: "faq",
      eyebrow: "FAQ",
      heading: "Questions About Employment & Economic Stability",
      items: [
        {
          question: "Do you place people directly into jobs?",
          answer:
            "We connect you with employer partners and job leads and prepare you thoroughly, but employers make hiring decisions. Any program promising guaranteed placement is not being straight with you.",
        },
        {
          question: "Can you help if I have a criminal record?",
          answer:
            "Yes, and this is a common reason people come to us. We cover what employers may legally ask in your state, how and when to disclose, and which partner employers actively hire people with records.",
        },
        {
          question: "What if I have not worked in years?",
          answer:
            "That is a normal starting point here, including for clients building a first resume from scratch. Long gaps are workable with preparation, and we help you present the time honestly without it dominating the interview.",
        },
        {
          question: "Do I have to be in another program to use these services?",
          answer:
            "No. Employment services are available on their own. That said, many clients combine them with housing or recovery support, since stable income and stable housing tend to depend on each other.",
        },
        {
          question: "Are the financial workshops a one-time class or a series?",
          answer:
            "Both formats exist. Some clients attend a single session on a specific topic such as budgeting or credit; others work through the full series alongside their job search.",
        },
        {
          question: "Is there a cost?",
          answer:
            "Employment and financial literacy services are offered as part of our community programs. Contact our team to confirm what applies to your situation, and ask about sliding-scale options if cost is a concern.",
        },
      ],
    },
  ],
};
