import type { Metadata } from "next";
import { SITE_URL } from "@/lib/metadata";
import { EMAIL, PHONE, SERVICES } from "@/lib/site-data";
import { getAllPosts } from "@/lib/blog";
import { metadata as home } from "@/app/(root)/page";
import { metadata as about } from "@/app/(root)/about/page";
import { metadata as services } from "@/app/(root)/services/page";
import { metadata as resources } from "@/app/(root)/resources/page";
import { metadata as contact } from "@/app/(root)/contact/page";
import { metadata as intake } from "@/app/(root)/intake/page";
import { metadata as employment } from "@/app/(root)/employment/page";
import { metadata as privacy } from "@/app/(root)/privacy-policy/page";
import { metadata as terms } from "@/app/(root)/terms-conditions/page";

export const dynamic = "force-static";

const titleOf = (meta: Metadata) => {
  const t = meta.title;
  const text = typeof t === "string" ? t : t && "absolute" in t ? t.absolute : "";
  return String(text).replace(/ \| Chance to Change$/, "");
};

/** A plain-text map of the site for AI crawlers, built from the pages' own metadata. See llmstxt.org. */
export function GET() {
  const pages: [string, Metadata][] = [
    ["/", home],
    ["/about", about],
    ["/services", services],
    ["/resources", resources],
    ["/contact", contact],
    ["/intake", intake],
    ["/employment", employment],
    ["/privacy-policy", privacy],
    ["/terms-conditions", terms],
  ];
  const line = (path: string, title: string, description?: string | null) =>
    `- [${title}](${SITE_URL}${path === "/" ? "/" : path})${description ? `: ${description}` : ""}`;

  const posts = getAllPosts();
  const body = [
    "# Chance to Change",
    "",
    `> ${home.description ?? ""}`,
    "",
    `Contact: ${PHONE} | ${EMAIL}`,
    "",
    "## Pages",
    "",
    ...pages.map(([path, meta]) => line(path, titleOf(meta), meta.description)),
    "",
    "## Services",
    "",
    ...SERVICES.map((s) => line(`/services/${s.slug}`, s.metaTitle ?? s.title, s.metaDescription ?? s.shortDesc)),
    ...(posts.length
      ? ["", "## Articles", "", ...posts.map((p) => line(p.url, p.title, p.metaDescription ?? p.excerpt))]
      : []),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
