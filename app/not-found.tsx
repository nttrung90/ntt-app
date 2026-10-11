import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div>
        <p className="text-7xl font-black text-indigo-600">404</p>
        <h1 className="mt-3 text-2xl font-extrabold">Trang này không tồn tại</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Có thể đường dẫn đã thay đổi hoặc nội dung chưa được xuất bản.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
        >
          <ArrowLeft size={16} /> Về trang chủ
        </Link>
      </div>
    </main>
  );
}
