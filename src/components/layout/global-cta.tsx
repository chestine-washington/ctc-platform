"use client";

import { usePathname } from "next/navigation";
import { CTASection } from "@/components/layout/cta-section";

const CUSTOM_CTA_ROUTES = ["/resources", "/services", "/about"];

export function GlobalCTA() {
  const pathname = usePathname();
  if (
    CUSTOM_CTA_ROUTES.includes(pathname) ||
    pathname.startsWith("/services/")
  )
    return null;

  return (
    <CTASection
      heading="Ready to Take the First Step?"
      description="Whether you're seeking help for yourself or a loved one, our team is here to listen, guide, and support you, confidentially and compassionately."
    />
  );
}
