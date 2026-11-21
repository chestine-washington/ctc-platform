import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/site-data";
import { AnimatedSection } from "@/components/shared/animated-section";

/** Shared FAQ block. Lives on Resources, where people are already looking for answers. */
export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              We&apos;ve answered the most common questions. If you don&apos;t
              see yours, reach out, we&apos;re happy to help.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-charcoal hover:text-sage transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
