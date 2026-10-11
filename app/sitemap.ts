import type { MetadataRoute } from "next";
import { apps, siteConfig } from "@/data/apps";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...apps.flatMap((app) => [
      {
        url: `${base}/apps/${app.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${base}/privacy/${app.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
    ]),
  ];
}
