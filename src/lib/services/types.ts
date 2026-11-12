/**
 * Service page content model.
 *
 * Each service composes its OWN sequence of blocks. There is deliberately no
 * required "standard" set of sections: an addiction program and an autism
 * program have genuinely different things to explain, so they get genuinely
 * different page structures. Adding a section type here is cheaper than
 * flattening a service's real shape into a template it doesn't fit.
 */

/** Background treatment. Omit to let the renderer alternate automatically. */
export type BlockTone = "plain" | "tint" | "dark";

interface BaseBlock {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  /** Section <h2>. */
  heading: string;
  /** Optional lead paragraph under the heading. */
  intro?: string;
  tone?: BlockTone;
}

/** Free paragraphs. For genuine explanatory copy, not filler. */
export interface ProseBlock extends BaseBlock {
  type: "prose";
  paragraphs: string[];
}

/** Tiers of service intensity, each with a "this fits you if" qualifier. */
export interface LevelsBlock extends BaseBlock {
  type: "levels";
  levels: {
    name: string;
    intensity: string;
    description: string;
    bestFor: string;
  }[];
}

/** A directional progression: stage 1 leads to stage 2 leads to stage 3. */
export interface PathwayBlock extends BaseBlock {
  type: "pathway";
  stages: {
    stage: string;
    description: string;
    duration?: string;
  }[];
}

/** Time-anchored sequence (day 1, week 1, month 1). */
export interface TimelineBlock extends BaseBlock {
  type: "timeline";
  entries: {
    marker: string;
    title: string;
    description: string;
  }[];
}

/** Numbered procedural walkthrough where order is legally or clinically real. */
export interface ProcessBlock extends BaseBlock {
  type: "process";
  steps: {
    title: string;
    description: string;
    note?: string;
  }[];
}

/** Programming that differs by age or developmental stage. */
export interface AgeBandsBlock extends BaseBlock {
  type: "age-bands";
  bands: {
    range: string;
    label: string;
    focus: string;
    examples: string[];
  }[];
}

/** Card grid of topics, conditions, or focus areas. */
export interface GridBlock extends BaseBlock {
  type: "grid";
  columns?: 2 | 3;
  items: {
    title: string;
    description: string;
  }[];
}

/** Plain list of statements, each with a check mark. */
export interface ChecklistBlock extends BaseBlock {
  type: "checklist";
  items: {
    title: string;
    description?: string;
  }[];
  /** Optional source attribution rendered under the list. */
  footnote?: string;
}

/** Side-by-side comparison where the differences are the point. */
export interface ComparisonBlock extends BaseBlock {
  type: "comparison";
  /** First column is the row label; the rest are the things being compared. */
  columns: string[];
  rows: string[][];
  footnote?: string;
}

/**
 * Urgency-based routing. For services where the right first action depends
 * entirely on how far along a crisis already is.
 */
export interface TriageBlock extends BaseBlock {
  type: "triage";
  options: {
    situation: string;
    urgency: string;
    guidance: string;
    action: string;
  }[];
}

/** Emphasis panel for a single important message. */
export interface CalloutBlock extends BaseBlock {
  type: "callout";
  body: string;
  variant?: "info" | "urgent";
}

/** Questions and answers. Rendered so answers are always in the HTML. */
export interface FaqBlock extends BaseBlock {
  type: "faq";
  items: { question: string; answer: string }[];
}

export type ServiceBlock =
  | ProseBlock
  | LevelsBlock
  | PathwayBlock
  | TimelineBlock
  | ProcessBlock
  | AgeBandsBlock
  | GridBlock
  | ChecklistBlock
  | ComparisonBlock
  | TriageBlock
  | CalloutBlock
  | FaqBlock;

export interface Service {
  slug: string;
  title: string;
  /** Search-result title before the global site-name suffix. */
  metaTitle?: string;
  /** Search-result description when it differs from the card copy. */
  metaDescription?: string;
  /** Card/meta description. */
  shortDesc: string;
  /** Opening paragraph on the detail page. */
  description: string;
  image: string;
  icon: string;
  /** Bullet summary used on listing cards. */
  features: string[];
  /** Heading above the bullet summary on the detail page. */
  featuresHeading?: string;
  /**
   * Page body. Optional so a service can ship with the summary fields alone
   * while its long-form content is still being written.
   */
  blocks?: ServiceBlock[];
}

/** Convenience: pull the FAQ items out of a service for JSON-LD. */
export function serviceFaqs(service: Service) {
  const block = service.blocks?.find(
    (b): b is FaqBlock => b.type === "faq",
  );
  return block?.items ?? [];
}
