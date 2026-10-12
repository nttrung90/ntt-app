import { LangRedirect } from "@/components/lang";
import { strings } from "@/data/i18n";

/** Trang root: tự động chuyển tới /vi hoặc /en theo vị trí người dùng */
export default function RootPage() {
  // Hiển thị song ngữ trong lúc detect để không bị trắng trang
  const vi = strings("vi");
  const en = strings("en");
  return (
    <main className="grid min-h-screen place-items-center">
      <LangRedirect />
      <p className="text-sm text-neutral-400">
        {vi.redirect.loading} · {en.redirect.loading}
      </p>
    </main>
  );
}
