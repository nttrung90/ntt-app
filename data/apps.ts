export type Lang = "vi" | "en";

export const LANGS: Lang[] = ["vi", "en"];

export function isLang(x: string): x is Lang {
  return x === "vi" || x === "en";
}

export const siteConfig = {
  name: "NTT Apps",
  tagline: "Ứng dụng hữu ích cho mọi người",
  taglineEn: "Useful apps for everyone",
  // Domain thật sau khi deploy (dùng cho sitemap + robots)
  url: "https://nttapp.vercel.app",
  email: "firstntt90@gmail.com",
};

export function siteTagline(lang: Lang): string {
  return lang === "en" ? siteConfig.taglineEn : siteConfig.tagline;
}

export interface AppInfo {
  slug: string;
  name: string;
  packageName: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  /** Link Google Play; để trống nếu chưa phát hành -> hiển thị "Sắp ra mắt" */
  playStoreUrl: string;
  /** Nhãn trạng thái riêng khi chưa có link (VD: "Tham gia thử nghiệm"); bỏ trống -> dùng "Sắp ra mắt" */
  statusLabel?: string;
  statusLabelEn?: string;
  /** Thông tin chương trình thử nghiệm: nút mở bảng hướng dẫn 3 bước (vào group -> nhận thử nghiệm -> cài đặt) */
  testing?: {
    groupEmail: string;
    groupUrl: string;
    optInUrl: string;
    installUrl: string;
  };
  /** Màu gradient cho icon placeholder, ví dụ "from-emerald-500 to-teal-700" */
  gradient: string;
  /** Tên file icon trong /public/icons/<slug>.png — để trống thì dùng chữ cái đầu */
  iconFile?: string;
  /** URL icon (ưu tiên hơn iconFile) — dùng ảnh từ CDN Google Play */
  iconUrl?: string;
  /** true = đã có nội dung privacy policy trong content/privacy/<slug>.md */
  hasPrivacyPolicy: boolean;
}

export interface LocalizedApp extends AppInfo {
  lang: Lang;
  lTagline: string;
  lDescription: string;
  lFeatures: string[];
}

export function localizeApp(app: AppInfo, lang: Lang): LocalizedApp {
  return {
    ...app,
    lang,
    lTagline: lang === "en" ? app.taglineEn : app.tagline,
    lDescription: lang === "en" ? app.descriptionEn : app.description,
    lFeatures: lang === "en" ? app.featuresEn : app.features,
  };
}

export const apps: AppInfo[] = [
  {
    slug: "lich-viet",
    iconUrl: "https://play-lh.googleusercontent.com/VzXpFGaAnU5vHVeS5l-SRBWA375yy8yjYLGw4rVC6NNgYjO1sfi26wErcl_tlr3lb-cA6fPFJN8cv7rmfVzRqA=s512-rw",
    name: "Lịch Việt (Vạn Niên)",
    packageName: "com.lichviet.vannienntt",
    tagline: "Xem lịch âm dương không lo quảng cáo làm phiền bạn",
    taglineEn: "Lunar–solar calendar without annoying ads",
    description:
      "Lịch Việt (Vạn Niên) là ứng dụng xem lịch âm – dương chính xác cho người Việt: tra cứu ngày tốt xấu, đổi ngày âm dương, nhắc sự kiện — với trải nghiệm gọn nhẹ, không bị quảng cáo làm phiền.",
    descriptionEn:
      "Lịch Việt (Vạn Niên) is an accurate lunar–solar calendar app: look up auspicious dates, convert between lunar and solar dates, and get event reminders — a lightweight experience free of annoying ads.",
    features: [
      "Xem lịch âm – dương theo ngày, tháng, năm",
      "Đổi nhanh ngày dương ↔ ngày âm",
      "Tra ngày tốt, giờ hoàng đạo",
      "Nhắc sự kiện: sinh nhật, giỗ chạp, lịch hẹn",
      "Giao diện gọn nhẹ, không quảng cáo gây phiền",
    ],
    featuresEn: [
      "Lunar–solar calendar by day, month, and year",
      "Quick solar ↔ lunar date conversion",
      "Auspicious-day and lucky-hour lookup",
      "Event reminders: birthdays, anniversaries, appointments",
      "Lightweight UI, no annoying ads",
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
    taglineEn: "Scan documents with OCR right on your phone",
    description:
      "T-Scanner biến điện thoại thành máy quét tài liệu bỏ túi: chụp ảnh tài liệu, hóa đơn, giấy tờ rồi trích xuất văn bản (OCR tiếng Việt / tiếng Anh), xuất PDF — toàn bộ xử lý ngay trên thiết bị, không tải tài liệu lên máy chủ.",
    descriptionEn:
      "T-Scanner turns your phone into a pocket document scanner: capture documents, receipts, and papers, then extract text (Vietnamese/English OCR) and export PDFs — everything processed on-device, never uploaded to any server.",
    features: [
      "Quét tài liệu, hóa đơn, giấy tờ bằng camera",
      "OCR tiếng Việt & tiếng Anh (Tesseract + ML Kit)",
      "Xuất PDF, ghép ảnh dài",
      "Xử lý 100% trên thiết bị — riêng tư tối đa",
      "Không cần tài khoản để dùng tính năng quét",
    ],
    featuresEn: [
      "Scan documents, receipts, and papers with your camera",
      "Vietnamese & English OCR (Tesseract + ML Kit)",
      "PDF export and long-image stitching",
      "100% on-device processing — maximum privacy",
      "No account needed for scanning features",
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
    tagline: "Giả lập NES, SNES, GBA và các hệ máy game cổ điển — tiếng Việt, chơi offline",
    taglineEn: "NES, SNES, GBA emulator for classic games — offline play",
    description:
      "T-Emulator là trình giả lập các hệ máy game cổ điển của Nintendo trên Android: NES, SNES, Game Boy, Game Boy Color, Game Boy Advance (GBA) và nhiều hệ máy khác. Chọn ROM do bạn tự cung cấp từ máy và chơi ngay với phím cảm ứng tối ưu từng hệ máy, lưu game 10 slot, tua nhanh, cheat Game Genie/Action Replay — hoàn toàn offline, không cần tài khoản.",
    descriptionEn:
      "T-Emulator is an emulator for classic Nintendo game systems on Android: NES, SNES, Game Boy, Game Boy Color, Game Boy Advance (GBA) and more. Pick a self-provided ROM from your device and play instantly with touch controls optimized per system, 10 save slots, fast-forward, Game Genie/Action Replay cheats — fully offline, no account required.",
    features: [
      "Hỗ trợ NES, SNES, Game Boy, Game Boy Color, GBA và nhiều hệ máy khác",
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
    featuresEn: [
      "Support for NES, SNES, Game Boy, Game Boy Color, GBA and more classic systems",
      "Pick and run ROMs directly from your device",
      "Touch controls with per-system layouts",
      "10 save slots + Quick Save/Quick Load",
      "Rewind mode and Turbo Boost",
      "Display options: FPS, video filters, scanlines, screen rotation",
      "Game Genie and Action Replay cheat support",
      "Screenshot capture while playing",
      "Vietnamese and English interface",
      "Fully offline, no account required",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.temulator.app",
    gradient: "from-violet-500 to-purple-800",
    hasPrivacyPolicy: true,
  },
  {
    slug: "clock-chess",
    iconFile: "clock-chess.svg",
    name: "Clock Chess",
    packageName: "com.ntt.clockchess",
    tagline: "Đồng hồ bấm giờ cho cờ vua, cờ tướng, cờ vây, cờ caro",
    taglineEn: "Chess clock for chess, xiangqi, go and gomoku",
    description:
      "Clock Chess là ứng dụng đồng hồ bấm giờ cho 2 người chơi các môn cờ: cờ vua, cờ tướng, cờ vây, cờ caro. Hỗ trợ 6 chế độ tính giờ (Sudden Death, Fischer, Bronstein, Hourglass, Byo-yomi...), 14 preset có sẵn cho từng môn cờ, tự tạo preset riêng, chạy chính xác ngay cả khi khóa màn hình — hoàn toàn offline, không cần tài khoản.",
    descriptionEn:
      "Clock Chess is a 2-player chess clock for board games: chess, xiangqi, go and gomoku. It supports 6 time controls (Sudden Death, Fischer, Bronstein, Hourglass, Byo-yomi and more), 14 built-in presets per game, custom presets, and accurate timing even with the screen locked — fully offline, no account required.",
    features: [
      "6 chế độ tính giờ: Sudden Death, Fischer, Bronstein, Hourglass, Byo-yomi...",
      "14 preset có sẵn cho cờ vua, cờ tướng, cờ vây",
      "Tự tạo, sửa, xóa preset thời gian riêng",
      "Chạy chính xác khi khóa màn hình (foreground service)",
      "Âm thanh + rung khi chuyển lượt và hết giờ",
      "Tự tạm dừng khi có cuộc gọi đến",
      "Giữ màn hình luôn sáng trong ván đấu",
      "Giao diện tiếng Việt và tiếng Anh",
      "Hoàn toàn offline, không cần tài khoản",
    ],
    featuresEn: [
      "6 time controls: Sudden Death, Fischer, Bronstein, Hourglass, Byo-yomi and more",
      "14 built-in presets for chess, xiangqi and go",
      "Create, edit and delete your own custom presets",
      "Accurate timing with screen locked (foreground service)",
      "Sound + vibration on move switch and time-up",
      "Auto-pause on incoming calls",
      "Keep screen on during games",
      "Vietnamese and English interface",
      "Fully offline, no account required",
    ],
    playStoreUrl: "",
    statusLabel: "Tham gia thử nghiệm",
    statusLabelEn: "Join testing",
    testing: {
      groupEmail: "testappLV@googlegroups.com",
      groupUrl: "https://groups.google.com/g/testappLV",
      optInUrl: "https://play.google.com/apps/testing/com.ntt.clockchess",
      installUrl:
        "https://play.google.com/store/apps/details?id=com.ntt.clockchess",
    },
    gradient: "from-red-500 to-orange-600",
    hasPrivacyPolicy: true,
  },
];

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}
