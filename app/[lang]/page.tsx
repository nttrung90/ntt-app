import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { apps, isLang, LANGS, localizeApp, siteConfig, siteTagline } from "@/data/apps";
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
    description: siteTagline(lang),
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
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
          <div className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-200/60 blur-3xl" />
          <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="absolute -right-24 top-48 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-10 text-center sm:pb-14 sm:pt-14">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-sm backdrop-blur">
            <Smartphone size={13} /> {t.hero.badge}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.15] tracking-tight text-neutral-900 sm:text-6xl">
            {siteTagline(lang)}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 font-medium text-neutral-600 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <Zap size={15} className="text-amber-500" /> {t.hero.points[0]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 font-medium text-neutral-600 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <ShieldCheck size={15} className="text-emerald-600" /> {t.hero.points[1]}
            </span>
          </div>
          <a
            href="#apps"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-700 hover:shadow-xl"
          >
            {t.nav.apps} <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* App list */}
      <section id="apps" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-10 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.home.appsTitle}</h2>
            <p className="mt-2 text-sm text-neutral-500 sm:text-base">{t.home.appsSub}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={localizeApp(app, lang)} />
          ))}
        </div>
      </section>

      {/* Privacy index */}
      <section id="privacy" className="scroll-mt-20 border-t border-black/10 bg-neutral-50/80">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t.home.privacyTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            {t.home.privacySub}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/${lang}/privacy/${app.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50">
                    <ShieldCheck size={17} className="text-emerald-600" />
                  </span>
                  <span className="truncate group-hover:text-indigo-700">{app.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
