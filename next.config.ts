import type { NextConfig } from "next";

/**
 * Addresses used by earlier versions of the site, mapped to their replacements. Two
 * generations exist: the old WordPress site's flat slugs, and before that a date-based
 * permalink scheme (/YYYY/MM/DD/slug/) whose URLs still carry backlinks.
 */
const LEGACY_PATHS: Record<string, string> = {
  "/addiction-and-recovery-services": "/services/addiction-recovery",
  "/mental-health-and-counseling-services": "/services/mental-health",
  "/autism-and-special-needs-services": "/services/autism-special-needs",
  "/employment-and-economic-stability-services":
    "/services/employment-stability",
  "/youth-and-family-services": "/services/youth-family",
  "/homelessness-prevention-and-support-services":
    "/services/homelessness-prevention",
  "/health-and-wellness-services": "/services/health-wellness",
  "/intake-form": "/intake",
  // Retired: it duplicated /employment. Kept as a redirect because it was briefly live and
  // in a sitemap.
  "/employment/apply": "/employment",
};

const DATED = "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      ...Object.entries(LEGACY_PATHS).flatMap(([source, destination]) => [
        { source, destination, permanent: true },
        { source: `${DATED}${source}`, destination, permanent: true },
      ]),
      // A dated URL for a page whose address never changed, e.g. /2023/04/19/about/.
      { source: `${DATED}/:slug`, destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
