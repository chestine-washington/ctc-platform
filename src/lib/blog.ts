import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import { slugify } from "@/lib/slugify";

/**
 * Blog posts are Markdown files in content/blog/, one per article; the filename is the URL
 * slug (content/blog/what-is-a-halfway-house.md -> /blog/what-is-a-halfway-house).
 * See content/blog/README.md for the frontmatter fields. Nothing is stored in a database:
 * publishing a post means adding a file and redeploying.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
  count: number;
}

export interface BlogPostSummary {
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** e.g. "September 9, 2026". */
  displayDate: string;
  category: { name: string; slug: string } | null;
  image: string | null;
  imageAlt: string;
}

export interface BlogPost extends BlogPostSummary {
  updated: string | null;
  seoTitle: string | null;
  metaDescription: string | null;
  html: string;
}

interface Frontmatter {
  title?: string;
  excerpt?: string;
  date?: string | Date;
  updated?: string | Date;
  category?: string;
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  metaDescription?: string;
  draft?: boolean;
}

/** Width and height of a JPEG or PNG in public/, so inline images reserve their space. */
function imageSize(src: string): { width: number; height: number } | null {
  if (!src.startsWith("/")) return null;
  const file = path.join(process.cwd(), "public", src);
  if (!fs.existsSync(file)) return null;
  const buf = fs.readFileSync(file);
  if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  // JPEG: walk the segments to the first start-of-frame marker.
  let i = 2;
  while (i + 9 < buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

const markdown = new Marked({
  gfm: true,
  renderer: {
    // Links written inside an article open in a new tab, at the SEO consultant's request.
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      return `<a href="${escapeAttr(href)}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
    },
    image({ href, title, text }) {
      const size = imageSize(href);
      const dims = size ? ` width="${size.width}" height="${size.height}"` : "";
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text)}"${dims}${titleAttr} loading="lazy" decoding="async">`;
    },
  },
});

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

const toIsoDate = (value: string | Date | undefined) =>
  value === undefined ? null : new Date(value).toISOString().slice(0, 10);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export function trimWords(text: string, count: number) {
  const words = text.trim().split(/\s+/);
  return words.length <= count ? text.trim() : `${words.slice(0, count).join(" ")}…`;
}

let cache: BlogPost[] | null = null;

function loadPosts(): BlogPost[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  if (!fs.existsSync(POSTS_DIR)) return [];

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
    .map((file): BlogPost | null => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
      const fm = data as Frontmatter;
      if (fm.draft) return null;
      if (!fm.title || !fm.date) {
        throw new Error(`content/blog/${file} needs at least "title" and "date" in its frontmatter.`);
      }
      const date = toIsoDate(fm.date)!;
      const html = markdown.parse(content) as string;
      const plain = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      return {
        slug,
        url: `/blog/${slug}`,
        title: fm.title,
        excerpt: fm.excerpt?.trim() || trimWords(plain, 55),
        date,
        displayDate: formatDate(date),
        updated: toIsoDate(fm.updated),
        category: fm.category ? { name: fm.category, slug: slugify(fm.category) } : null,
        image: fm.image ?? null,
        imageAlt: fm.imageAlt ?? "",
        seoTitle: fm.seoTitle ?? null,
        metaDescription: fm.metaDescription ?? null,
        html,
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : a.date < b.date ? 1 : -1));

  cache = posts;
  return posts;
}

/** Card data only: keeps article HTML out of client component props. */
export function toSummary(post: BlogPost): BlogPostSummary {
  const { slug, url, title, excerpt, date, displayDate, category, image, imageAlt } = post;
  return { slug, url, title, excerpt, date, displayDate, category, image, imageAlt };
}

export function getAllPosts(): BlogPost[] {
  return loadPosts();
}

export function getPost(slug: string): BlogPost | undefined {
  return loadPosts().find((post) => post.slug === slug);
}

export function getLatestPosts(count = 3): BlogPostSummary[] {
  return loadPosts().slice(0, count).map(toSummary);
}

/** Optional descriptions, keyed by category slug, in content/blog/categories.json. */
function categoryDescriptions(): Record<string, string> {
  const file = path.join(POSTS_DIR, "categories.json");
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
}

export function getCategories(): BlogCategory[] {
  const descriptions = categoryDescriptions();
  const bySlug = new Map<string, BlogCategory>();
  for (const post of loadPosts()) {
    if (!post.category) continue;
    const existing = bySlug.get(post.category.slug);
    if (existing) existing.count++;
    else
      bySlug.set(post.category.slug, {
        ...post.category,
        description: descriptions[post.category.slug],
        count: 1,
      });
  }
  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategory(slug: string): BlogCategory | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getPostsInCategory(slug: string): BlogPost[] {
  return loadPosts().filter((post) => post.category?.slug === slug);
}

/** Two related articles: same topic first, then the most recent of the rest. */
export function getRelatedPosts(post: BlogPost, count = 2): BlogPostSummary[] {
  const others = loadPosts().filter((p) => p.slug !== post.slug);
  const sameTopic = others.filter((p) => post.category && p.category?.slug === post.category.slug);
  const rest = others.filter((p) => !sameTopic.includes(p));
  return [...sameTopic, ...rest].slice(0, count).map(toSummary);
}
