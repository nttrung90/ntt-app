import Link from "next/link";
import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import { apps, siteConfig } from "@/data/apps";
import { AppCard } from "@/components/app-ui";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-16 text-center sm:pt-20">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Smartphone size={13} /> Ứng dụng Android
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Zap size={15} className="text-amber-500" /> Gọn nhẹ, thực dụng
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" /> Tôn trọng quyền riêng tư
            </span>
          </div>
        </div>
      </section>

      {/* Danh sách app */}
      <section id="apps" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Ứng dụng của chúng tôi</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Tất cả ứng dụng đều phát hành chính thức trên Google Play.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>

      {/* Privacy index */}
      <section id="privacy" className="scroll-mt-20 border-t border-black/10 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">Chính sách quyền riêng tư</h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-neutral-500">
            Mỗi ứng dụng đều có chính sách quyền riêng tư công khai theo yêu cầu của
            Google Play. Chọn ứng dụng để xem chi tiết.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {apps.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/privacy/${app.slug}`}
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
