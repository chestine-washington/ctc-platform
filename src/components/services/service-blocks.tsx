import { CheckCircle2, ChevronDown, AlertTriangle, Info } from "lucide-react";
import type {
  ServiceBlock,
  BlockTone,
  ProseBlock,
  LevelsBlock,
  PathwayBlock,
  TimelineBlock,
  ProcessBlock,
  AgeBandsBlock,
  GridBlock,
  ChecklistBlock,
  ComparisonBlock,
  TriageBlock,
  CalloutBlock,
  FaqBlock,
} from "@/lib/services/types";

const TONE_CLASSES: Record<BlockTone, string> = {
  plain: "bg-background",
  tint: "bg-sage-light/20",
  dark: "bg-charcoal text-white",
};

function SectionHeader({
  eyebrow,
  heading,
  intro,
  dark,
  centered,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-12 ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`font-semibold text-sm uppercase tracking-wider ${
            dark ? "text-sage-light" : "text-sage"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl lg:text-4xl font-bold mt-2 mb-4 ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p className={`text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

function Prose({ block }: { block: ProseBlock }) {
  return (
    <div className="container max-w-3xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="space-y-5">
        {block.paragraphs.map((p, i) => (
          <p key={i} className="text-charcoal/80 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function Levels({ block }: { block: LevelsBlock }) {
  return (
    <div className="container">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="space-y-4">
        {block.levels.map((level, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl border border-border shadow-sm p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start"
          >
            <div className="lg:col-span-3">
              <h3 className="font-display text-lg font-semibold text-charcoal">
                {level.name}
              </h3>
              <span className="inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-light text-sage-dark">
                {level.intensity}
              </span>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-sm leading-relaxed">
              {level.description}
            </p>
            <div className="lg:col-span-4 bg-sage-light/25 rounded-xl p-4 border border-sage/10">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-sage-dark mb-1">
                Usually the right fit if
              </span>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                {level.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pathway({ block }: { block: PathwayBlock }) {
  return (
    <div className="container">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {block.stages.map((stage, i) => (
          <div key={i} className="relative">
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-sage text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {stage.duration && (
                  <span className="text-xs text-muted-foreground font-medium">
                    {stage.duration}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {stage.stage}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stage.description}
              </p>
            </div>
            {i < block.stages.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sage/30"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ block }: { block: TimelineBlock }) {
  return (
    <div className="container max-w-3xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-sage/20"
        />
        <div className="space-y-7">
          {block.entries.map((entry, i) => (
            <div key={i} className="relative pl-10">
              <div
                aria-hidden="true"
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-sage border-4 border-background"
              />
              <span className="text-sage font-display font-bold text-sm">
                {entry.marker}
              </span>
              <h3 className="font-display font-semibold text-charcoal mt-0.5 mb-1">
                {entry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Process({ block }: { block: ProcessBlock }) {
  return (
    <div className="container max-w-4xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <ol className="space-y-4">
        {block.steps.map((step, i) => (
          <li
            key={i}
            className="bg-card rounded-xl border border-border shadow-sm p-5 flex gap-4"
          >
            <span aria-hidden="true" className="font-display text-2xl font-bold text-sage/30 leading-none shrink-0 w-9">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display font-semibold text-charcoal mb-1">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {step.note && (
                <p className="mt-2 text-xs text-sage-dark bg-sage-light/30 rounded-lg px-3 py-2 leading-relaxed">
                  {step.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AgeBands({ block }: { block: AgeBandsBlock }) {
  return (
    <div className="container">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {block.bands.map((band, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col"
          >
            <div className="bg-sage px-5 py-3">
              <span className="block text-white font-display font-bold text-lg leading-none">
                {band.range}
              </span>
              <span className="block text-white/95 text-xs mt-1">
                {band.label}
              </span>
            </div>
            <div className="p-5 flex-1">
              <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                {band.focus}
              </p>
              <ul className="space-y-1.5">
                {band.examples.map((ex, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-muted-foreground text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-1.5"
                    />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Grid({ block }: { block: GridBlock }) {
  const cols =
    block.columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className="container">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className={`grid grid-cols-1 ${cols} gap-5`}>
        {block.items.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border border-border shadow-sm p-6"
          >
            <h3 className="font-display font-semibold text-charcoal mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Checklist({ block }: { block: ChecklistBlock }) {
  return (
    <div className="container max-w-3xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 bg-card rounded-xl border border-border shadow-sm p-4"
          >
            <CheckCircle2 className="h-5 w-5 text-sage shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-charcoal text-sm">
                {item.title}
              </span>
              {item.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {block.footnote && (
        <p className="text-muted-foreground text-xs mt-5 leading-relaxed">
          {block.footnote}
        </p>
      )}
    </div>
  );
}

function Comparison({ block }: { block: ComparisonBlock }) {
  return (
    <div className="container max-w-4xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      {/* Wide tables scroll inside their own container, never the page body. */}
      <div className="overflow-x-auto rounded-2xl border border-border shadow-sm bg-card">
        <table className="w-full min-w-[36rem] text-sm border-collapse">
          <thead>
            <tr className="bg-sage-light/40">
              {block.columns.map((col, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`p-4 font-display font-semibold text-charcoal text-left align-bottom ${
                    i === 0 ? "" : "border-l border-border"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="border-t border-border align-top">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`p-4 leading-relaxed ${
                      j === 0
                        ? "font-medium text-charcoal"
                        : "text-muted-foreground border-l border-border"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.footnote && (
        <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
          {block.footnote}
        </p>
      )}
    </div>
  );
}

function Triage({ block }: { block: TriageBlock }) {
  return (
    <div className="container">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {block.options.map((opt, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl border border-border shadow-sm p-6 flex flex-col"
          >
            <span className="inline-flex self-start text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-terracotta-light/40 text-charcoal mb-3">
              {opt.urgency}
            </span>
            <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
              {opt.situation}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {opt.guidance}
            </p>
            <p className="text-sm font-medium text-sage-dark bg-sage-light/30 rounded-lg px-3 py-2.5 leading-relaxed">
              {opt.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout({ block }: { block: CalloutBlock }) {
  const urgent = block.variant === "urgent";
  const Icon = urgent ? AlertTriangle : Info;
  return (
    <div className="container max-w-3xl">
      <div
        className={`rounded-2xl border p-6 lg:p-8 flex items-start gap-4 ${
          urgent
            ? "bg-destructive/5 border-destructive/20"
            : "bg-sage-light/30 border-sage/20"
        }`}
      >
        <Icon
          className={`h-6 w-6 shrink-0 mt-0.5 ${
            urgent ? "text-destructive" : "text-sage"
          }`}
        />
        <div>
          <h2 className="font-display text-xl font-semibold text-charcoal mb-2">
            {block.heading}
          </h2>
          <p className="text-charcoal/80 leading-relaxed">{block.body}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Native <details> rather than a JS accordion: closed panels of a JS accordion
 * are absent from the server-rendered HTML, which would hide every answer from
 * crawlers. <details> keeps the answer text in the markup either way.
 */
function Faq({ block }: { block: FaqBlock }) {
  return (
    <div className="container max-w-3xl">
      <SectionHeader
        eyebrow={block.eyebrow}
        heading={block.heading}
        intro={block.intro}
        centered
      />
      <div className="space-y-3">
        {block.items.map((item, i) => (
          <details
            key={i}
            className="group bg-card rounded-xl border border-border shadow-sm px-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none font-display font-semibold text-charcoal hover:text-sage transition-colors">
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="text-muted-foreground leading-relaxed pb-4">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

function BlockBody({ block }: { block: ServiceBlock }) {
  switch (block.type) {
    case "prose":
      return <Prose block={block} />;
    case "levels":
      return <Levels block={block} />;
    case "pathway":
      return <Pathway block={block} />;
    case "timeline":
      return <Timeline block={block} />;
    case "process":
      return <Process block={block} />;
    case "age-bands":
      return <AgeBands block={block} />;
    case "grid":
      return <Grid block={block} />;
    case "checklist":
      return <Checklist block={block} />;
    case "comparison":
      return <Comparison block={block} />;
    case "triage":
      return <Triage block={block} />;
    case "callout":
      return <Callout block={block} />;
    case "faq":
      return <Faq block={block} />;
  }
}

export function ServiceBlocks({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        // Alternate backgrounds so adjacent sections stay visually separated,
        // unless the block asks for a specific tone.
        const tone: BlockTone = block.tone ?? (i % 2 === 0 ? "plain" : "tint");
        return (
          <section
            key={i}
            className={`py-16 lg:py-20 ${TONE_CLASSES[tone]}`}
          >
            <BlockBody block={block} />
          </section>
        );
      })}
    </>
  );
}
