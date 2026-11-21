import Script from "next/script";

/**
 * Google tag (gtag.js), equivalent to Google's "paste before </head>" snippet.
 *
 * `afterInteractive` is the Next.js-recommended strategy for analytics/ads tags
 * (what @next/third-parties uses): it loads on every page right after hydration,
 * so every visit is measured and Google Ads can verify the tag.
 *
 * One gtag.js load serves every tag ID (GA4 `G-...`, Google Ads `AW-...`); each
 * ID only needs its own `config` call.
 */
export function GoogleTag({ tagIds }: { tagIds: string[] }) {
  if (tagIds.length === 0) return null;

  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${tagIds.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tagIds[0]}`}
        strategy="afterInteractive"
      />
    </>
  );
}

export default GoogleTag;
