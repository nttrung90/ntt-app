import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import type { AppInfo, Lang, LocalizedApp } from "@/data/apps";
import { strings } from "@/data/i18n";
import { TestingButton } from "./testing-button";

export function AppIcon({ app, size = "md" }: { app: AppInfo; size?: "sm" | "md" | "lg" }) {
  const dims =
    size === "lg" ? "h-24 w-24 rounded-3xl" : size === "sm" ? "h-12 w-12 rounded-2xl" : "h-16 w-16 rounded-2xl";
  const src = app.iconUrl || (app.iconFile ? `/icons/${app.iconFile}` : null);
  if (src) {
    return (
      <img
        src={src}
        alt={`Icon ${app.name}`}
        width={size === "lg" ? 96 : size === "sm" ? 48 : 64}
        height={size === "lg" ? 96 : size === "sm" ? 48 : 64}
        loading="lazy"
        className={`shrink-0 object-cover shadow-lg ${dims}`}
      />
    );
  }
  const initial = app.name.charAt(0).toUpperCase();
  return (
    <span
      className={`grid shrink-0 place-items-center bg-gradient-to-br font-black text-white shadow-lg ${app.gradient} ${dims} ${size === "lg" ? "text-4xl" : size === "sm" ? "text-xl" : "text-2xl"}`}
      aria-hidden
    >
      {initial}
    </span>
  );
}

const PLAY_BADGES: Record<Lang, string> = {
  vi: "https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png",
  en: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
};

export function PlayButton({ app, compact = false, lang = "vi" }: { app: AppInfo; compact?: boolean; lang?: Lang }) {
  const t = strings(lang);
  if (!app.playStoreUrl) {
    if (app.testing) {
      return <TestingButton app={app} compact={compact} lang={lang} />;
    }
    const label =
      lang === "en" ? app.statusLabelEn || t.play.soon : app.statusLabel || t.play.soon;
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-neutral-100 font-semibold text-neutral-500 ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
        }`}
      >
        <Clock size={compact ? 14 : 16} />
        {label}
      </span>
    );
  }
  // Badge "Tải trên Google Play" chính thức của Google
  return (
    <a
      href={app.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition hover:scale-[1.03] hover:opacity-95"
    >
      <img
        src={PLAY_BADGES[lang]}
        alt={t.play.download}
        loading="lazy"
        className={compact ? "h-10 w-auto" : "h-14 w-auto"}
      />
    </a>
  );
}

export function AppCard({ app }: { app: LocalizedApp }) {
  const t = strings(app.lang);
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-1 bg-gradient-to-r ${app.gradient}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          <AppIcon app={app} />
          <div className="min-w-0 pt-1">
            <h3 className="text-xl font-extrabold tracking-tight">{app.name}</h3>
            <p className="mt-1 text-sm font-medium leading-snug text-indigo-600">{app.lTagline}</p>
          </div>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
          {app.lDescription}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-black/5 pt-5">
          <PlayButton app={app} compact lang={app.lang} />
          <Link
            href={`/${app.lang}/apps/${app.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-neutral-700 transition group-hover:gap-1.5 hover:text-indigo-600"
          >
            {t.card.details} <ArrowRight size={15} />
          </Link>
          <Link
            href={`/${app.lang}/privacy/${app.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-neutral-600"
          >
            <ShieldCheck size={15} /> {t.card.privacy}
          </Link>
        </div>
      </div>
    </article>
  );
}
