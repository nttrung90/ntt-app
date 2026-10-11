import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { apps, getApp, siteConfig } from "@/data/apps";
import { AppIcon, PlayButton } from "@/components/app-ui";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: app.name,
    description: `${app.tagline}. ${app.description}`,
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900"
      >
        <ArrowLeft size={15} /> Tất cả ứng dụng
      </Link>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
        <AppIcon app={app} size="lg" />
        <div>
          <h1 className="text-3xl font-black tracking-tight">{app.name}</h1>
          <p className="mt-1 font-medium text-indigo-600">{app.tagline}</p>
          {app.packageName && (
            <p className="mt-1 font-mono text-xs text-neutral-400">{app.packageName}</p>
          )}
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-neutral-700">{app.description}</p>

      <h2 className="mt-8 text-lg font-extrabold">Tính năng nổi bật</h2>
      <ul className="mt-3 space-y-2.5">
        {app.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <PlayButton app={app} />
        <Link
          href={`/privacy/${app.slug}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-5 py-3 text-sm font-bold text-neutral-700 transition hover:bg-neutral-50"
        >
          <ShieldCheck size={16} /> Chính sách quyền riêng tư
        </Link>
      </div>

      <p className="mt-10 border-t border-black/10 pt-6 text-xs text-neutral-400">
        Phát hành bởi {siteConfig.name}. Mọi thắc mắc vui lòng liên hệ{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </main>
  );
}
