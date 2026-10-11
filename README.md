# NTT Apps

Web tĩnh giới thiệu các ứng dụng Android của NTT trên Google Play, kèm trang
Chính sách quyền riêng tư cho từng ứng dụng (theo yêu cầu của Google Play).

## Stack

- Next.js 16 + React 19 + Tailwind CSS 4
- **Xuất tĩnh hoàn toàn** (`output: "export"`) — không server, không database
- Nội dung chính sách quyền riêng tư: file Markdown trong `content/privacy/`

## Phát triển

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push repo lên GitHub
2. Vercel → Add New Project → Import repo
3. Không cần thiết lập gì thêm (không env var, không database) → Deploy

Sau khi có domain thật, sửa `siteConfig.url` trong `data/apps.ts` rồi deploy lại
(để sitemap/robots dùng đúng domain).

## Thêm / sửa ứng dụng

Sửa file `data/apps.ts` (mảng `apps`):

- `playStoreUrl` để trống → card hiển thị "Sắp ra mắt"
- Icon: hiện dùng chữ cái đầu với gradient (`gradient`); khi có icon thật, đặt
  file vào `public/icons/<slug>.png` và khai báo `iconFile` (cần cập nhật
  component `AppIcon` để ưu tiên ảnh)

## Cập nhật Chính sách quyền riêng tư

Sửa file Markdown tương ứng trong `content/privacy/<slug>.md` rồi deploy lại.
