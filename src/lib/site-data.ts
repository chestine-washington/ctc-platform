export const PHONE = "(800) 708-6448";
export const EMAIL = "info@chancetochange.us";
export const BUSINESS_NAME = "Chance To Change Supportive Services, LLC";

export const ADDRESSES = [
  { city: "Las Vegas, NV", line1: "732 South 6th Street, Suite 4721", line2: "Las Vegas, NV 89101" },
  { city: "Salt Lake City, UT", line1: "222 South Main Street", line2: "Salt Lake City, UT" },
];
export const ADDRESS = ADDRESSES[0].city;

export const STATES_SERVED = [
  "Utah", "Texas", "Nevada", "Michigan", "Georgia",
  "Arizona", "Florida", "Louisiana", "Oregon",
  "Maryland", "Tennessee"
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Employment", href: "/employment" },
  { label: "Resources", href: "/resources", children: [{ label: "Blog", href: "/blog" }] },
  { label: "Contact", href: "/contact" },
];

// Service page content lives in src/lib/services/, one file per service,
// because each service page has its own section structure rather than a
// shared template. Re-exported here so existing imports keep working.
export { SERVICES, getService, serviceFaqs } from "@/lib/services";
export type { Service } from "@/lib/services";

export const TESTIMONIALS = [
  {
    name: "Michael R.",
    role: "Recovery Program Graduate",
    text: "Chance to Change gave me a second chance when I thought all doors were closed. The supportive housing and counseling helped me rebuild my life from the ground up. I'm now 18 months sober and employed.",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Family Member",
    text: "When my son was struggling with addiction, Chance to Change provided not just treatment but genuine compassion. They treated our entire family with respect and gave us the tools to support each other.",
    rating: 5
  },
  {
    name: "David & Jennifer T.",
    role: "Program Participants",
    text: "The employment and housing services helped us get back on our feet after a devastating loss. The staff treated us like family and never gave up on us even when we struggled.",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I start the admissions process?",
    answer: "Starting is simple. You can call us at (800) 708-6448, fill out our confidential intake form, or email us at info@chancetochange.us. A member of our admissions team will guide you through the next steps within 24 hours."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we work with most major insurance plans and are actively credentialed with Medicaid. Our team will verify your coverage and explain your benefits before you begin any services."
  },
  {
    question: "Is everything confidential?",
    answer: "Absolutely. All services are protected by HIPAA regulations and strict confidentiality policies. Your personal information is never shared without your explicit consent, except in emergency situations where safety is a concern."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve clients across 11 states: Utah, Texas, Nevada, Michigan, Georgia, Arizona, Florida, Louisiana, Oregon, Maryland, and Tennessee. Our offices are in Las Vegas, NV and Salt Lake City, UT. Program availability varies by state, so contact us to confirm what is offered where you live."
  },
  {
    question: "What types of addiction do you treat?",
    answer: "We provide support for alcohol, opioid, stimulant, cannabis, and poly-substance addiction. Our approach is individualized and focuses on both the physical and psychological aspects of recovery."
  },
  {
    question: "Can families participate in treatment?",
    answer: "Yes, we strongly encourage family involvement. Our family support programs include counseling sessions, education workshops, and resources designed to help families heal together."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a confidential assessment with a licensed counselor to understand your needs, discuss treatment options, and create a personalized plan. There is no judgment—just support."
  },
  {
    question: "Do you offer emergency or crisis services?",
    answer: "While we are not an emergency room, our staff can help connect you with immediate crisis resources. If you're in crisis right now, please call or text the 988 Suicide & Crisis Lifeline, or call 911 for immediate emergencies."
  }
];

// Logos are bundled in the theme (ctc-theme/assets/insurance) rather than fetched from an
// external favicon service: no third-party requests, and no console errors when one 404s.
// A null logo falls back to the coloured initials badge, which is the same fallback as before.
export const INSURANCE_PROVIDERS = [
  { name: "Aetna", domain: "aetna.com", abbr: "AET", color: "#7C3AED", logo: "aetna" },
  { name: "Cigna / Evernorth", domain: "cigna.com", abbr: "CIG", color: "#0369A1", logo: "cigna" },
  { name: "UnitedHealthcare", domain: "uhc.com", abbr: "UHC", color: "#1D4ED8", logo: "uhc" },
  { name: "Optum", domain: "optum.com", abbr: "OPT", color: "#BD5711", logo: null },
  { name: "TriWest", domain: "triwest.com", abbr: "TRW", color: "#1E3A8A", logo: "triwest" },
  { name: "Molina Healthcare", domain: "molinahealthcare.com", abbr: "MOL", color: "#CB3E84", logo: "molina" },
  { name: "Select Health", domain: "selecthealth.org", abbr: "SH", color: "#05875E", logo: "selecthealth" },
  { name: "Healthy U", domain: "uhealthplan.utah.edu", abbr: "HU", color: "#DC2626", logo: "healthy-u" },
  { name: "Health Choice Utah", domain: "healthchoiceutah.com", abbr: "HCU", color: "#07809D", logo: "health-choice-utah" },
  { name: "Blue Cross Blue Shield", domain: "bcbs.com", abbr: "BCBS", color: "#1E40AF", logo: "bcbs" },
  { name: "Utah Medicaid", domain: "medicaid.utah.gov", abbr: "UM", color: "#6D28D9", logo: "utah-medicaid" },
];
