import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE, EMAIL, ADDRESSES, BUSINESS_NAME, NAV_LINKS, STATES_SERVED } from "@/lib/site-data";

const RESOURCE_LINKS = [
  { name: "SAMHSA Helpline", url: "https://www.samhsa.gov/find-help/national-helpline", desc: "1-800-662-4357" },
  { name: "988 Crisis Lifeline", url: "https://988lifeline.org/", desc: "Call or text 988" },
  { name: "National Runaway Safeline", url: "https://www.1800runaway.org/", desc: "1-800-RUNAWAY" },
  { name: "Feeding America", url: "https://www.feedingamerica.org/", desc: "Find local food banks" },
  { name: "NAMI Helpline", url: "https://www.nami.org/", desc: "1-800-950-NAMI" },
  { name: "Autism Speaks", url: "https://www.autismspeaks.org/", desc: "1-888-288-4763" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-192.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-sm object-contain"
              />
              <span className="font-display font-bold text-lg">Chance to Change</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Dedicated to empowering individuals and families through recovery, counseling, housing, and community support.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-white/70 hover:text-sage-light transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/70 hover:text-sage-light transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                {EMAIL}
              </a>
              {ADDRESSES.map((addr) => (
                <div key={addr.city} className="flex items-start gap-2 text-white/70">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{addr.line1}, {addr.line2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Only /intake is added by hand. Employment is already in NAV_LINKS above,
                  and repeating it here listed it twice. */}
              <li>
                <Link href="/intake" className="text-sage-light hover:text-white text-sm transition-colors font-medium">
                  Intake Form
                </Link>
              </li>
            </ul>
          </div>

          {/* States Served */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              States We Serve
            </p>
            <div className="flex flex-wrap gap-1.5">
              {STATES_SERVED.map((state) => (
                <span
                  key={state}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Crisis Resources */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Crisis Resources
            </p>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm group"
                  >
                    <span className="text-white group-hover:text-sage-light transition-colors font-medium">
                      {resource.name}
                    </span>
                    <span className="block text-white/50 text-xs mt-0.5">
                      {resource.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Design by{" "}
            <a
              href="https://zhxlabs.com"
              target="_blank"
              rel="noopener"
              className="text-white/75 hover:text-sage-light transition-colors"
            >
              ZHX Labs
            </a>
            .
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-sage-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-sage-light transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
