import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import { apps, isLang, LANGS, localizeApp, siteConfig, siteDescription, siteTagline } from "@/data/apps";
import { strings } from "@/data/i18n";
import { AppCard } from "@/components/app-ui";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "vi";
  return {
    title: `${siteConfig.name} — ${siteTagline(lang)}`,
    description: siteDescription(lang),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "vi";
  const t = strings(lang);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-16 text-center sm:pt-20">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Smartphone size={13} /> {t.hero.badge}
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            {siteTagline(lang)}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            {siteDescription(lang)}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Zap size={15} className="text-amber-500" /> {t.hero.points[0]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" /> {t.hero.points[1]}
            </span>
          </div>
        </div>
      </section>

      {/* App list */}
      <section id="apps" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">{t.home.appsTitle}</h2>
        <p className="mt-1 text-sm text-neutral-500">{t.home.appsSub}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={localizeApp(app, lang)} />
          ))}
        </div>
      </section>

      {/* Privacy index */}
      <section id="privacy" className="scroll-mt-20 border-t border-black/10 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">{t.home.privacyTitle}</h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-500">
            {t.home.privacySub}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/${lang}/privacy/${app.slug}`}
                  className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <ShieldCheck size={16} className="shrink-0 text-emerald-600" />
                  <span className="truncate">{app.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
