import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { apps, getApp, isLang, LANGS } from "@/data/apps";
import { strings } from "@/data/i18n";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => apps.map((app) => ({ lang, slug: app.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang = isLang(raw) ? raw : "vi";
  const t = strings(lang);
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: t.privacy.metaTitle(app.name),
    description: t.privacy.metaDesc(app.name),
  };
}

async function readPolicy(slug: string, lang: string): Promise<string> {
  const dir =
    lang === "en" ? path.join("content", "privacy", "en") : path.join("content", "privacy");
  const file = path.join(process.cwd(), dir, `${slug}.md`);
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return "";
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: raw, slug } = await params;
  const lang = isLang(raw) ? raw : "vi";
  const t = strings(lang);
  const app = getApp(slug);
  if (!app) notFound();
  const markdown = await readPolicy(slug, lang);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900"
      >
        <ArrowLeft size={15} /> {t.privacy.back}
      </Link>
      <article className="privacy-body mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
        {markdown ? (
          <ReactMarkdown>{markdown}</ReactMarkdown>
        ) : (
          <p className="text-neutral-500">{t.privacy.empty}</p>
        )}
      </article>
      <p className="mt-6 text-center text-sm text-neutral-400">
        {t.privacy.app} <span className="font-semibold text-neutral-600">{app.name}</span>
        {" · "}
        <Link href={`/${lang}/apps/${app.slug}`} className="text-indigo-600 hover:underline">
          {t.privacy.viewApp}
        </Link>
      </p>
    </main>
  );
}
