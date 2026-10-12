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
  testing: {
    title: "Tham gia thử nghiệm",
    intro: "Làm theo 3 bước dưới đây để cài đặt bản thử nghiệm:",
    step1: "Tham gia nhóm thử nghiệm",
    step1Desc: "Bấm nút bên dưới để xin tham gia nhóm bằng tài khoản Google bạn sẽ dùng để tải app.",
    step1Btn: "Tham gia nhóm",
    step2: "Xác nhận tham gia thử nghiệm",
    step2Desc: "Mở link đăng ký và bấm “Trở thành người thử nghiệm”.",
    step2Btn: "Mở link đăng ký",
    step3: "Cài đặt ứng dụng",
    step3Desc: "Sau khi được chấp nhận, cài đặt app từ Google Play.",
    step3Btn: "Cài đặt trên Google Play",
    close: "Đóng",
  },
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
  testing: {
    title: "Join testing",
    intro: "Follow these 3 steps to install the testing build:",
    step1: "Join the testing group",
    step1Desc: "Tap the button below to request access with the Google account you will use to download the app.",
    step1Btn: "Join group",
    step2: "Accept the testing invitation",
    step2Desc: "Open the opt-in link and tap “Become a tester”.",
    step2Btn: "Open opt-in link",
    step3: "Install the app",
    step3Desc: "Once accepted, install the app from Google Play.",
    step3Btn: "Install on Google Play",
    close: "Close",
  },
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
