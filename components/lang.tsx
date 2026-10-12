"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/data/apps";

const KEY = "ntt-lang";

/** Đặt <html lang> cho đúng ngôn ngữ của route (static export không render server theo lang) */
export function SetHtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang ]);
  return null;
}

/** Trang root: tự chọn ngôn ngữ theo vị trí (VN -> vi, còn lại -> en), cho phép ghi nhớ lựa chọn */
export function LangRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Chỉ redirect khi đang ở đúng root "/"
    if (pathname !== "/") return;
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "vi" || saved === "en") {
        router.replace(`/${saved}`);
        return;
      }
    } catch {
      /* bỏ qua */
    }

    let cancelled = false;
    (async () => {
      // Mặc định: tiếng Việt.
      // Chỉ hiển thị tiếng Anh khi THỎA MÃN CẢ 2 điều kiện:
      //   1. vị trí ở nước ngoài (không phải VN), VÀ
      //   2. ngôn ngữ trình duyệt khác tiếng Việt.
      // Thiếu 1 trong 2 -> tiếng Việt.
      let lang: Lang = "vi";
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const res = await fetch("https://ipapi.co/country/", { signal: ctrl.signal });
        clearTimeout(timer);
        const cc = (await res.text()).trim().toUpperCase();
        const nav = (navigator.language || "").toLowerCase();
        const abroad = cc !== "" && cc !== "VN";
        const nonVietnamese = nav !== "" && !nav.startsWith("vi");
        if (abroad && nonVietnamese) lang = "en";
      } catch {
        lang = "vi"; // không xác định được vị trí -> mặc định tiếng Việt
      }
      if (!cancelled) router.replace(`/${lang}`);
    })();
    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  return null;
}

/** Nút chuyển VI/EN trên header — ghi nhớ lựa chọn của người dùng */
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Lang) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* bỏ qua */
    }
    const rest = pathname?.replace(/^\/(vi|en)(?=\/|$)/, "") || "";
    router.push(`/${next}${rest}`);
  };

  const btn = (l: Lang, label: string) =>
    lang === l ? (
      <span
        key={l}
        className="rounded-full bg-neutral-900 px-2.5 py-1 text-xs font-bold text-white"
        aria-current="true"
      >
        {label}
      </span>
    ) : (
      <button
        key={l}
        onClick={() => switchTo(l)}
        className="rounded-full px-2.5 py-1 text-xs font-bold text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
      >
        {label}
      </button>
    );

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-black/10 p-0.5" role="group" aria-label="Language">
      {btn("vi", "VI")}
      {btn("en", "EN")}
    </div>
  );
}
