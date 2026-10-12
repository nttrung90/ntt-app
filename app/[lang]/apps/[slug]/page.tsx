import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { apps, getApp, isLang, LANGS, localizeApp, siteConfig } from "@/data/apps";
import { strings } from "@/data/i18n";
import { AppIcon, PlayButton } from "@/components/app-ui";

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
  const app = getApp(slug);
  if (!app) return {};
  const l = localizeApp(app, lang);
  return {
    title: l.name,
    description: `${l.lTagline}. ${l.lDescription}`,
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: raw, slug } = await params;
  const lang = isLang(raw) ? raw : "vi";
  const t = strings(lang);
  const app = getApp(slug);
  if (!app) notFound();
  const l = localizeApp(app, lang);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900"
      >
        <ArrowLeft size={15} /> {t.detail.back}
      </Link>

      <div className={`relative mt-6 overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br ${app.gradient} p-[1px]`}>
        <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-6 backdrop-blur sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <AppIcon app={app} size="lg" />
            <div>
              <h1 className="text-3xl font-black tracking-tight">{l.name}</h1>
              <p className="mt-1.5 font-medium text-indigo-600">{l.lTagline}</p>
              {l.packageName && (
                <p className="mt-1.5 inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-500">{l.packageName}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-neutral-700">{l.lDescription}</p>

      <h2 className="mt-8 text-lg font-extrabold">{t.detail.features}</h2>
      <ul className="mt-3 space-y-2.5">
        {l.lFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <PlayButton app={app} lang={lang} />
        <Link
          href={`/${lang}/privacy/${l.slug}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-5 py-3 text-sm font-bold text-neutral-700 transition hover:bg-neutral-50"
        >
          <ShieldCheck size={16} /> {t.detail.privacyBtn}
        </Link>
      </div>

      <p className="mt-10 border-t border-black/10 pt-6 text-xs text-neutral-400">
        {t.detail.publishedBy} {siteConfig.name}. {t.detail.contact}{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </main>
  );
}
