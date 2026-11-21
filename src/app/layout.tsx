import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { organizationSchema, websiteSchema, jsonLdGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { GoogleAnalytics } from "@next/third-parties/google";

// Google Analytics 4 and Search Console, carried over from the WordPress theme. Override
// either through the environment; set NEXT_PUBLIC_GA_MEASUREMENT_ID="" to remove the tag.
const GA_MEASUREMENT_ID = "G-YJFPS6V36E";
const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "0HG2zbQGzfQoupp2wm4W2slKi-etuTVKjzlDsAqA9zw";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chance to Change - Recovery & Support Services",
    template: "%s | Chance to Change",
  },
  description:
    "Chance To Change Supportive Services, LLC provides recovery, counseling, supportive housing, and community support services.",
  // Tab icons stay transparent so they sit on any tab colour; the Apple one has a solid
  // background because iOS composites transparency onto black.
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const rootJsonLd = jsonLdGraph(organizationSchema(), websiteSchema());

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="describedby" href="/llms.txt" type="text/markdown" />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="4eWa9f0XKfV1elqMD2bidFeBsv_wj3ajWyXl9pT5ga0"
        />

        <JsonLd data={rootJsonLd} />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <GoogleAnalytics gaId="G-YJFPS6V36E" />
      </body>
    </html>
  );
}
