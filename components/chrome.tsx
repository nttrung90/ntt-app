import Link from "next/link";
import type { Lang } from "@/data/apps";
import { siteConfig } from "@/data/apps";
import { strings } from "@/data/i18n";
import { LangSwitch } from "./lang";

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = strings(lang);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2.5">
          <img
            src="/icon.svg"
            alt="NTT Apps"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="text-lg font-extrabold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            href={`/${lang}#apps`}
            className="rounded-full px-3 py-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            {t.nav.apps}
          </Link>
          <Link
            href={`/${lang}#privacy`}
            className="rounded-full px-3 py-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            {t.nav.privacy}
          </Link>
          <span className="ml-1">
            <LangSwitch lang={lang} />
          </span>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = strings(lang);
  return (
    <footer className="border-t border-black/10 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-extrabold">{siteConfig.name}</p>
            <p className="mt-1 max-w-sm text-sm text-neutral-500">
              {lang === "en" ? siteConfig.descriptionEn : siteConfig.description}
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-neutral-700">{t.footer.contact}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-block text-indigo-600 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-black/10 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
