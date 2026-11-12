import type { Metadata } from "next";

export const SITE_URL = "https://chancetochange.us";
export const SITE_NAME = "Chance to Change";
// 1200x630, matching the width/height declared below. twitter:card is summary_large_image,
// so a square logo here would be letterboxed or cropped on every platform.
export const DEFAULT_OG_IMAGE = "/og/default.jpg";

interface BuildPageMetadataOptions {
  title: string;
  /** Use the title as-is, without the "| Chance to Change" template suffix. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  keywords,
  image,
  type = "website",
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
  };
}
