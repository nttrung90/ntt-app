"use client";

import { useEffect, useState } from "react";
import { FlaskConical, X } from "lucide-react";
import type { AppInfo, Lang } from "@/data/apps";
import { strings } from "@/data/i18n";

/** Nút "Tham gia thử nghiệm" mở bảng hướng dẫn 3 bước (vào group -> nhận thử nghiệm -> cài đặt) */
export function TestingButton({
  app,
  compact = false,
  lang = "vi",
}: {
  app: AppInfo;
  compact?: boolean;
  lang?: Lang;
}) {
  const t = strings(lang).testing;
  const label =
    lang === "en" ? app.statusLabelEn || "Join testing" : app.statusLabel || "Tham gia thử nghiệm";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  const info = app.testing!;
  const steps = [
    {
      title: t.step1,
      desc: t.step1Desc,
      btn: t.step1Btn,
      href: info.groupUrl,
      extra: info.groupEmail,
    },
    { title: t.step2, desc: t.step2Desc, btn: t.step2Btn, href: info.optInUrl },
    { title: t.step3, desc: t.step3Desc, btn: t.step3Btn, href: info.installUrl },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 font-semibold text-white transition hover:bg-neutral-700 ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
        }`}
      >
        <FlaskConical size={compact ? 14 : 16} />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-1 flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold text-neutral-900">
                {t.title} — {app.name}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="cursor-pointer rounded-full p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-5 text-sm text-neutral-500">{t.intro}</p>

            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-900">{s.title}</p>
                    <p className="mt-0.5 text-sm text-neutral-500">{s.desc}</p>
                    {s.extra && (
                      <p className="mt-0.5 break-all font-mono text-xs text-neutral-400">
                        {s.extra}
                      </p>
                    )}
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-200"
                    >
                      {s.btn}
                    </a>
                  </div>
                </li>
              ))}
            </ol>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full cursor-pointer rounded-full bg-neutral-900 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
