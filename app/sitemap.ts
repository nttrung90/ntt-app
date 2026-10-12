import type { MetadataRoute } from "next";
import { apps, LANGS, siteConfig } from "@/data/apps";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...LANGS.flatMap((lang) => [
      { url: `${base}/${lang}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
      ...apps.flatMap((app) => [
        {
          url: `${base}/${lang}/apps/${app.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        },
        {
          url: `${base}/${lang}/privacy/${app.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        },
      ]),
    ]),
  ];
}
