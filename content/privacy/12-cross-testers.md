# CHÍNH SÁCH QUYỀN RIÊNG TƯ

**Cập nhật lần cuối:** 15 tháng 10, 2026
**Ứng dụng:** 12 Cross Testers (Package: com.ntt.crosstest)
**Nhà phát triển:** NTT Dev Team (Liên hệ: firstntt90@gmail.com)

---

### 1. Giới thiệu

Ứng dụng **12 Cross Testers** (sau đây gọi là "Ứng dụng" hoặc "chúng tôi") là nền tảng cộng đồng phi thương mại hỗ trợ các nhà phát triển ứng dụng Android thực hiện kiểm thử chéo (Closed Testing 14 ngày với 20 tester) tuân theo quy định của Google Play. Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của người dùng.

Chính sách quyền riêng tư này giải thích rõ ràng loại dữ liệu chúng tôi thu thập, mục đích sử dụng, cách chúng tôi lưu trữ và bảo vệ dữ liệu đó.

### 2. Thông tin và Dữ liệu chúng tôi thu thập

Khi bạn sử dụng 12 Cross Testers, chúng tôi có thể thu thập các thông tin sau:

1. **Thông tin tài khoản:** Khi đăng nhập bằng tài khoản Google hoặc Email, chúng tôi nhận được địa chỉ email, tên hiển thị (display name) và liên kết ảnh đại diện (avatar URL) để định danh tài khoản và hiển thị trên bảng xếp hạng (Leaderboard).
2. **Thông tin chiến dịch kiểm thử (User-Generated Content):** Tên ứng dụng, package name, liên kết Google Play Store, đường dẫn Closed Testing track, mô tả ứng dụng, và tài khoản kiểm thử mẫu (nếu bạn cung cấp cho tester).
3. **Báo cáo và Đánh giá kiểm thử:** Ảnh chụp màn hình ứng dụng kiểm thử (được tải lên lưu trữ đám mây an toàn qua Firebase Storage làm bằng chứng test), nội dung góp ý, điểm xếp hạng (rating 1-5 sao) và lịch sử check-in hàng ngày.
4. **Nhật ký Credit và Giao dịch:** Lịch sử biến động điểm Credit (thưởng check-in, mở slot, mua gói qua Google Play Billing). Chúng tôi **không** lưu trữ và **không** có quyền truy cập vào thông tin thẻ thanh toán hay tài khoản ngân hàng của bạn (mọi giao dịch thanh toán được xử lý an toàn 100% bởi Google Play).

### 3. Quyền truy cập thiết bị đặc biệt (`QUERY_ALL_PACKAGES`)

Ứng dụng có sử dụng quyền `android.permission.QUERY_ALL_PACKAGES` với mục đích kỹ thuật duy nhất:

- **Kiểm tra sự tồn tại của ứng dụng kiểm thử:** Xác minh xem ứng dụng mục tiêu trong chiến dịch Closed Testing đã được cài đặt thực tế trên máy của tester hay chưa trước khi ghi nhận lượt check-in hàng ngày, nhằm đảm bảo tính trung thực của việc kiểm thử chéo.
- **Tối ưu trải nghiệm:** Giúp người dùng mở nhanh ứng dụng cần test trực tiếp từ màn hình chi tiết chiến dịch và trích xuất tên/icon app khi chủ app tạo chiến dịch mới.
- **Cam kết bảo mật:** Dữ liệu danh sách ứng dụng trên thiết bị chỉ được phân tích **cục bộ (on-device)** tại thời điểm thao tác. Chúng tôi **KHÔNG BAO GIỜ** thu thập, lưu trữ trên máy chủ, theo dõi hành vi, sử dụng cho quảng cáo hay chia sẻ danh sách các ứng dụng đã cài đặt trên máy bạn cho bất kỳ bên thứ ba nào.

### 4. Quyền Thông báo (`POST_NOTIFICATIONS`)

Ứng dụng sử dụng quyền này trên Android 13 trở lên để gửi thông báo cục bộ nhắc nhở bạn check-in hàng ngày vào lúc 20:00 (nếu bạn chưa hoàn thành nhiệm vụ). Bạn có thể bật hoặc tắt tính năng nhắc nhở này bất kỳ lúc nào trong mục **Cài đặt** của ứng dụng.

### 5. Dịch vụ của bên thứ ba

Chúng tôi sử dụng các dịch vụ bên thứ ba uy tín để vận hành hệ thống:

- **Google Sign-In / Credential Manager:** Xác thực đăng nhập nhanh chóng và bảo mật.
- **Supabase (Cơ sở dữ liệu đám mây):** Lưu trữ thông tin tài khoản, chiến dịch và nhật ký với cơ chế phân quyền bảo mật cấp độ dòng (Row Level Security - RLS).
- **Firebase Storage (Google Cloud):** Lưu trữ ảnh chụp màn hình báo cáo kiểm thử.
- **Google Play In-App Billing:** Xử lý các giao dịch nạp gói Credit an toàn theo chính sách của Google.

### 6. Lưu trữ và Bảo mật dữ liệu

- Tất cả các kết nối mạng giữa ứng dụng và máy chủ đều được mã hóa bằng giao thức bảo mật cao cấp SSL/TLS (HTTPS).
- Dữ liệu cơ sở dữ liệu được bảo vệ bằng chính sách Row Level Security (RLS), đảm bảo người dùng chỉ có thể thay đổi dữ liệu thuộc quyền sở hữu của mình.

### 7. Quyền của người dùng & Chính sách xóa tài khoản/dữ liệu (Data Deletion)

Bạn có toàn quyền kiểm soát dữ liệu của mình:

- **Quyền xem và chỉnh sửa:** Xem thông tin cá nhân, sửa đánh giá và quản lý các chiến dịch của bạn.
- **Yêu cầu xóa tài khoản và dữ liệu cá nhân:** Người dùng có thể yêu cầu xóa vĩnh viễn tài khoản và toàn bộ dữ liệu liên quan (thông tin tài khoản, chiến dịch, ảnh chụp màn hình, lịch sử check-in) bất kỳ lúc nào bằng cách:
  - Gửi email yêu cầu đến: **firstntt90@gmail.com** với tiêu đề *"Yêu cầu xóa tài khoản 12 Cross Testers"* kèm địa chỉ email đăng ký.
  - Chúng tôi cam kết sẽ xác minh và xóa toàn bộ dữ liệu trong vòng **7 ngày làm việc**.

### 8. Quyền riêng tư của trẻ em

Ứng dụng được thiết kế dành riêng cho các nhà phát triển và kiểm thử viên Android độc lập. Ứng dụng không nhắm mục tiêu và không cố ý thu thập bất kỳ thông tin cá nhân nào từ trẻ em dưới 13 tuổi.

### 9. Thay đổi chính sách

Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo thời gian. Mọi thay đổi sẽ được công bố trực tiếp trong tài liệu này và cập nhật ngày hiệu lực ở đầu trang.

### 10. Thông tin liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến Chính sách quyền riêng tư này, vui lòng liên hệ:

- **Email:** firstntt90@gmail.com
- **Nhà phát triển:** NTT Dev Team
