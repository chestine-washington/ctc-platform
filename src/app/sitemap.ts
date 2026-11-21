import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { SERVICES } from "@/lib/site-data";
import { getAllPosts, getCategories } from "@/lib/blog";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticPages: { path: string; priority: number; changeFrequency: Entry["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/intake", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.75, changeFrequency: "monthly" },
    { path: "/employment", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  // The blog appears only once something is published, rather than as an empty index.
  const blog: MetadataRoute.Sitemap = posts.length
    ? [
        { url: `${SITE_URL}/blog`, lastModified: new Date(posts[0].date), changeFrequency: "weekly", priority: 0.7 },
        { url: `${SITE_URL}/blog/category`, lastModified: new Date(posts[0].date), changeFrequency: "monthly", priority: 0.4 },
        ...getCategories().map((category) => ({
          url: `${SITE_URL}/blog/category/${category.slug}`,
          changeFrequency: "weekly" as const,
          priority: 0.5,
        })),
        ...posts.map((post) => ({
          url: `${SITE_URL}${post.url}`,
          lastModified: new Date(post.updated ?? post.date),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ]
    : [];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blog,
  ];
}
