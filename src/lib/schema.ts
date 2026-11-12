import { SITE_URL, SITE_NAME } from "@/lib/metadata";
import { PHONE, EMAIL, ADDRESSES, STATES_SERVED } from "@/lib/site-data";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Chance To Change Supportive Services, LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE,
    email: EMAIL,
    address: ADDRESSES.map((addr) => ({
      "@type": "PostalAddress",
      streetAddress: addr.line1,
      addressLocality: addr.line2.split(",")[0]?.trim(),
      addressRegion: addr.line2.match(/,\s*([A-Z]{2})/)?.[1] ?? undefined,
      addressCountry: "US",
    })),
    areaServed: STATES_SERVED.map((state) => ({
      "@type": "State",
      name: state,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
  };
}

// One standalone JSON-LD document per entity rather than a single
// `{"@context":..., "@graph":[...]}` bundle. Google's Rich Results parser
// handles @graph fine, but plenty of lighter third-party scanners only read
// a `@type` at the root of the object and never look inside @graph, so they
// report "schema.org markup found, type undetermined." Separate documents
// keep every consumer, not just Google, able to see it. Cross-entity
// references still resolve: Google (and most JSON-LD consumers) merge all
// application/ld+json blocks on a page into one dataset before resolving
// `@id` references, so `{ "@id": ORG_ID }` links between documents still work.
export function jsonLdGraph(...entities: object[]) {
  return entities.map((entity) => ({ "@context": "https://schema.org", ...entity }));
}

export function breadcrumbSchema(
  pagePath: string,
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${pagePath}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(
  pagePath: string,
  items: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${pagePath}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceItemListSchema(
  pagePath: string,
  services: { title: string; slug: string; shortDesc: string }[],
) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}${pagePath}#services`,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${s.slug}#service`,
        name: s.title,
        description: s.shortDesc,
        url: `${SITE_URL}/services/${s.slug}`,
        provider: { "@id": ORG_ID },
      },
    })),
  };
}

export function serviceSchema(
  pagePath: string,
  service: { title: string; description: string; slug: string },
) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${pagePath}#service`,
    name: service.title,
    description: service.description,
    url: `${SITE_URL}${pagePath}`,
    provider: { "@id": ORG_ID },
    areaServed: STATES_SERVED.map((state) => ({
      "@type": "State",
      name: state,
    })),
  };
}

export function webPageSchema(
  pagePath: string,
  type: "WebPage" | "AboutPage" | "ContactPage",
  name: string,
  description: string,
) {
  return {
    "@type": type,
    "@id": `${SITE_URL}${pagePath}#webpage`,
    url: `${SITE_URL}${pagePath}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string | null;
  image: string | null;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}
