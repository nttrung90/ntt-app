export const siteConfig = {
  name: "NTT Apps",
  tagline: "Ứng dụng Việt cho người Việt",
  description:
    "Tuyển tập các ứng dụng Android của NTT trên Google Play: Lịch Việt, T-Scanner, T-Emulator.",
  // Đổi thành domain thật sau khi deploy (dùng cho sitemap + robots)
  url: "https://ntt-app.vercel.app",
  email: "firstntt90@gmail.com",
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
  /** URL icon (ưu tiên hơn iconFile) — dùng ảnh từ CDN Google Play */
  iconUrl?: string;
  /** true = đã có nội dung privacy policy trong content/privacy/<slug>.md */
  hasPrivacyPolicy: boolean;
}

export const apps: AppInfo[] = [
  {
    slug: "lich-viet",
    iconUrl: "https://play-lh.googleusercontent.com/VzXpFGaAnU5vHVeS5l-SRBWA375yy8yjYLGw4rVC6NNgYjO1sfi26wErcl_tlr3lb-cA6fPFJN8cv7rmfVzRqA=s512-rw",
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
    hasPrivacyPolicy: true,
  },
  {
    slug: "t-scanner",
    iconUrl: "https://play-lh.googleusercontent.com/8UGuwJ5zUTzAlBAml4sijii71YHXRozHGhEmvMuzHique0l3ZPjkUi_Izh6Y2GDBtrDCnz84K0WOvDz6QWCP=s512-rw",
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
    iconUrl: "https://play-lh.googleusercontent.com/w4NVUy6RBtE3jyO56Xi-47_XgNi7-fO-DioSED2hhaUY7ZLU1HjAh2bPCY1XfsUmzvpZvLa_EEjaGU9h0kY4djI=s512-rw",
    name: "T-Emulator",
    packageName: "com.temulator.app",
    tagline: "Giả lập đa hệ máy cho game cổ điển — tiếng Việt, chơi offline",
    description:
      "T-Emulator là trình giả lập đa nền tảng cho game cổ điển trên Android: chọn ROM từ máy và chơi ngay với phím điều khiển cảm ứng tối ưu từng hệ máy, lưu game 10 slot, tua nhanh, cheat Game Genie/Action Replay — hoàn toàn offline, không cần tài khoản.",
    features: [
      "Hỗ trợ nhiều hệ máy game cổ điển",
      "Chọn và chạy ROM trực tiếp từ thiết bị",
      "Phím cảm ứng với layout riêng cho từng hệ máy",
      "Lưu/tải game 10 slot + Quick Save/Quick Load",
      "Chế độ Rewind và Turbo Boost",
      "Tùy chỉnh hiển thị: FPS, bộ lọc ảnh, scanline, xoay màn hình",
      "Hỗ trợ cheat Game Genie và Action Replay",
      "Chụp ảnh màn hình khi chơi",
      "Giao diện tiếng Việt và tiếng Anh",
      "Chạy hoàn toàn offline, không cần tài khoản",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.temulator.app",
    gradient: "from-violet-500 to-purple-800",
    hasPrivacyPolicy: true,
  },
];

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}
