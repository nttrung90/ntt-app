import { isLang } from "@/data/apps";
import { SiteFooter, SiteHeader } from "@/components/chrome";
import { SetHtmlLang } from "@/components/lang";

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
