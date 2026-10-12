import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import type { AppInfo, Lang, LocalizedApp } from "@/data/apps";
import { strings } from "@/data/i18n";

export function AppIcon({ app, size = "md" }: { app: AppInfo; size?: "sm" | "md" | "lg" }) {
  const dims =
    size === "lg" ? "h-24 w-24 rounded-3xl" : size === "sm" ? "h-12 w-12 rounded-2xl" : "h-16 w-16 rounded-2xl";
  if (app.iconUrl) {
    return (
      <img
        src={app.iconUrl}
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

export function PlayButton({ app, compact = false, lang = "vi" }: { app: AppInfo; compact?: boolean; lang?: Lang }) {
  const t = strings(lang);
  if (!app.playStoreUrl) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-neutral-100 font-semibold text-neutral-500 ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
        }`}
      >
        <Clock size={compact ? 14 : 16} />
        {t.play.soon}
      </span>
    );
  }
  return (
    <a
      href={app.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-neutral-900 font-bold text-white transition hover:bg-neutral-700 ${
        compact ? "px-4 py-2 text-xs" : "px-5 py-3 text-sm"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className={compact ? "h-4 w-4" : "h-5 w-5"} aria-hidden>
        <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" />
        <path d="M16.7 15.7 13 12l3.7-3.7 4.6 2.6c1.3.7 1.3 1.9 0 2.6l-4.6 2.2z" opacity=".9" />
        <path d="M16.7 8.3 13 12 3.6 2.3c.4-.4 1-.4 1.7 0l11.4 6z" opacity=".75" />
        <path d="M16.7 15.7l-11.4 6c-.7.4-1.3.4-1.7 0l9.4-9.4 3.7 3.4z" opacity=".75" />
      </svg>
      {t.play.download}
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
