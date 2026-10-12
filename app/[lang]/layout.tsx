import type { Metadata } from "next";
import { isLang, siteTagline } from "@/data/apps";
import { SiteFooter, SiteHeader } from "@/components/chrome";
import { SetHtmlLang } from "@/components/lang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "vi";
  // Ghi đè Open Graph của root layout cho đúng ngôn ngữ (bot/scraper không chạy JS)
  return {
    description: siteTagline(lang),
    openGraph: {
      locale: lang === "en" ? "en_US" : "vi_VN",
      description: siteTagline(lang),
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "vi";

  return (
    <div className="flex min-h-screen flex-col">
      <SetHtmlLang lang={lang} />
      <SiteHeader lang={lang} />
      <div className="flex-1">{children}</div>
      <SiteFooter lang={lang} />
    </div>
  );
}
