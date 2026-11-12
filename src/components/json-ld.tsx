// Renders each entity from jsonLdGraph() as its own <script> tag. See the
// comment on jsonLdGraph() in src/lib/schema.ts for why: one @type-bearing
// document per tag, not a single @graph bundle.
export function JsonLd({ data }: { data: object[] }) {
  return (
    <>
      {data.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
