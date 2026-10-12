import type { Lang } from "./apps";

const vi = {
  nav: { apps: "Ứng dụng", privacy: "Quyền riêng tư" },
  hero: {
    badge: "Ứng dụng Android",
    points: ["Gọn nhẹ, thực dụng", "Tôn trọng quyền riêng tư"],
  },
  home: {
    appsTitle: "Ứng dụng của chúng tôi",
    appsSub: "Tất cả ứng dụng đều phát hành chính thức trên Google Play.",
    privacyTitle: "Chính sách quyền riêng tư",
    privacySub:
      "Mỗi ứng dụng đều có chính sách quyền riêng tư công khai theo yêu cầu của Google Play. Chọn ứng dụng để xem chi tiết.",
  },
  card: { details: "Chi tiết", privacy: "Quyền riêng tư" },
  play: { download: "Tải trên Google Play", soon: "Sắp ra mắt" },
  detail: {
    back: "Tất cả ứng dụng",
    features: "Tính năng nổi bật",
    privacyBtn: "Chính sách quyền riêng tư",
    publishedBy: "Phát hành bởi",
    contact: "Mọi thắc mắc vui lòng liên hệ",
  },
  privacy: {
    back: "Về trang chủ",
    empty:
      "Nội dung chính sách quyền riêng tư đang được cập nhật. Vui lòng quay lại sau.",
    app: "Ứng dụng:",
    viewApp: "Xem giới thiệu ứng dụng",
    metaTitle: (name: string) => `Chính sách quyền riêng tư — ${name}`,
    metaDesc: (name: string) =>
      `Chính sách quyền riêng tư của ứng dụng ${name} trên Google Play.`,
  },
  footer: { contact: "Liên hệ", rights: "Mọi quyền được bảo lưu." },
  notFound: {
    title: "Trang này không tồn tại",
    sub: "Có thể đường dẫn đã thay đổi hoặc nội dung chưa được xuất bản.",
    home: "Về trang chủ",
  },
  redirect: { loading: "Đang tải…" },
};

const en: typeof vi = {
  nav: { apps: "Apps", privacy: "Privacy" },
  hero: {
    badge: "Android apps",
    points: ["Lightweight & practical", "Privacy-respecting"],
  },
  home: {
    appsTitle: "Our apps",
    appsSub: "All apps are officially published on Google Play.",
    privacyTitle: "Privacy Policy",
    privacySub:
      "Each app has a public privacy policy as required by Google Play. Select an app to view details.",
  },
  card: { details: "Details", privacy: "Privacy" },
  play: { download: "Get it on Google Play", soon: "Coming soon" },
  detail: {
    back: "All apps",
    features: "Key features",
    privacyBtn: "Privacy Policy",
    publishedBy: "Published by",
    contact: "For inquiries, please contact",
  },
  privacy: {
    back: "Back to home",
    empty: "The privacy policy is being updated. Please check back later.",
    app: "App:",
    viewApp: "View app details",
    metaTitle: (name: string) => `Privacy Policy — ${name}`,
    metaDesc: (name: string) => `Privacy policy of the ${name} app on Google Play.`,
  },
  footer: { contact: "Contact", rights: "All rights reserved." },
  notFound: {
    title: "This page doesn't exist",
    sub: "The link may have changed or the content hasn't been published.",
    home: "Back to home",
  },
  redirect: { loading: "Loading…" },
};

export type UIStrings = typeof vi;

export function strings(lang: Lang): UIStrings {
  return lang === "en" ? en : vi;
}
