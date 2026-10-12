"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { strings } from "@/data/i18n";

export default function NotFound() {
  const pathname = usePathname() || "";
  const lang = pathname.startsWith("/en") ? "en" : "vi";
  const t = strings(lang as "vi" | "en");
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div>
        <p className="text-7xl font-black text-indigo-600">404</p>
        <h1 className="mt-3 text-2xl font-extrabold">{t.notFound.title}</h1>
        <p className="mt-2 text-sm text-neutral-500">{t.notFound.sub}</p>
        <Link
          href={`/${lang}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
        >
          <ArrowLeft size={16} /> {t.notFound.home}
        </Link>
      </div>
    </main>
  );
}
