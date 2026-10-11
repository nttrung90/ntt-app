export const siteConfig = {
  name: "NTT Apps",
  tagline: "Ứng dụng Việt cho người Việt",
  description:
    "Tuyển tập các ứng dụng Android của NTT trên Google Play: Lịch Việt, T-Scanner, T-Emulator.",
  // Đổi thành domain thật sau khi deploy (dùng cho sitemap + robots)
  url: "https://ntt-app.vercel.app",
  email: "support@ntt-app.vn",
};

export interface AppInfo {
  slug: string;
  name: string;
  packageName: string;
  tagline: string;
  description: string;
  features: string[];
  /** Link Google Play; để trống nếu chưa phát hành -> hiển thị "Sắp ra mắt" */
  playStoreUrl: string;
  /** Màu gradient cho icon placeholder, ví dụ "from-emerald-500 to-teal-700" */
  gradient: string;
  /** Tên file icon trong /public/icons/<slug>.png — để trống thì dùng chữ cái đầu */
  iconFile?: string;
  /** true = đã có nội dung privacy policy trong content/privacy/<slug>.md */
  hasPrivacyPolicy: boolean;
}

export const apps: AppInfo[] = [
  {
    slug: "lich-viet",
    name: "Lịch Việt (Vạn Niên)",
    packageName: "com.lichviet.vannienntt",
    tagline: "Xem lịch âm dương không lo quảng cáo làm phiền bạn",
    description:
      "Lịch Việt (Vạn Niên) là ứng dụng xem lịch âm – dương chính xác cho người Việt: tra cứu ngày tốt xấu, đổi ngày âm dương, nhắc sự kiện — với trải nghiệm gọn nhẹ, không bị quảng cáo làm phiền.",
    features: [
      "Xem lịch âm – dương theo ngày, tháng, năm",
      "Đổi nhanh ngày dương ↔ ngày âm",
      "Tra ngày tốt, giờ hoàng đạo",
      "Nhắc sự kiện: sinh nhật, giỗ chạp, lịch hẹn",
      "Giao diện gọn nhẹ, không quảng cáo gây phiền",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lichviet.vannienntt",
    gradient: "from-amber-500 to-red-600",
    hasPrivacyPolicy: false,
  },
  {
    slug: "t-scanner",
    name: "T-Scanner",
    packageName: "com.tscanner.app",
    tagline: "Quét tài liệu, OCR tiếng Việt ngay trên điện thoại",
    description:
      "T-Scanner biến điện thoại thành máy quét tài liệu bỏ túi: chụp ảnh tài liệu, hóa đơn, giấy tờ rồi trích xuất văn bản (OCR tiếng Việt / tiếng Anh), xuất PDF — toàn bộ xử lý ngay trên thiết bị, không tải tài liệu lên máy chủ.",
    features: [
      "Quét tài liệu, hóa đơn, giấy tờ bằng camera",
      "OCR tiếng Việt & tiếng Anh (Tesseract + ML Kit)",
      "Xuất PDF, ghép ảnh dài",
      "Xử lý 100% trên thiết bị — riêng tư tối đa",
      "Không cần tài khoản để dùng tính năng quét",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tscanner.app",
    gradient: "from-sky-500 to-indigo-700",
    hasPrivacyPolicy: true,
  },
  {
    slug: "t-emulator",
    name: "T-Emulator",
    packageName: "",
    tagline: "Giả lập game trên Android — sắp ra mắt",
    description:
      "T-Emulator là ứng dụng giả lập game trên Android đang được phát triển. Thông tin chi tiết và link tải sẽ được cập nhật khi ứng dụng chính thức phát hành.",
    features: [
      "Đang phát triển — thông tin sẽ cập nhật sớm",
    ],
    playStoreUrl: "",
    gradient: "from-violet-500 to-purple-800",
    hasPrivacyPolicy: false,
  },
];

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}
