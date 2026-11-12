import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE } from "@/lib/site-data";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel?: string;
}

export function CTASection({ heading, description, buttonLabel = "Intake Form" }: CTASectionProps) {
  return (
    <div className="bg-charcoal text-white border-b border-white/10">
      <div className="container py-16 lg:py-20 text-center">
        <p className="font-display text-3xl lg:text-4xl font-bold mb-4">{heading}</p>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href={`tel:${PHONE}`}
            className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-light hover:text-charcoal font-semibold text-sm sm:text-base transition-all duration-200"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span className="sm:hidden">Call Now</span>
            <span className="hidden sm:inline">Call {PHONE}</span>
          </a>
          <Link href="/intake" className="flex-1 sm:flex-none">
            <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-white text-charcoal font-semibold text-sm sm:text-base hover:bg-sage-light transition-all duration-200">
              {buttonLabel}
              <ArrowRight className="h-4 w-4 shrink-0" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
