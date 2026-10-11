import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { apps, getApp } from "@/data/apps";

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
    title: `Chính sách quyền riêng tư — ${app.name}`,
    description: `Chính sách quyền riêng tư của ứng dụng ${app.name} trên Google Play.`,
  };
}

async function readPolicy(slug: string): Promise<string> {
  const file = path.join(process.cwd(), "content", "privacy", `${slug}.md`);
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return "";
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  const markdown = await readPolicy(slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900"
      >
        <ArrowLeft size={15} /> Về trang chủ
      </Link>
      <article className="privacy-body mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
        {markdown ? (
          <ReactMarkdown>{markdown}</ReactMarkdown>
        ) : (
          <p className="text-neutral-500">
            Nội dung chính sách quyền riêng tư đang được cập nhật. Vui lòng quay lại sau.
          </p>
        )}
      </article>
      <p className="mt-6 text-center text-sm text-neutral-400">
        Ứng dụng: <span className="font-semibold text-neutral-600">{app.name}</span>
        {" · "}
        <Link href={`/apps/${app.slug}`} className="text-indigo-600 hover:underline">
          Xem giới thiệu ứng dụng
        </Link>
      </p>
    </main>
  );
}
