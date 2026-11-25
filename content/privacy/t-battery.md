# Chính sách quyền riêng tư của T-Battery

**Ngày hiệu lực:** 25/11/2026
**Mã định danh ứng dụng (Package ID / Application ID):** `com.ntt.tbattery`

---

Chính sách quyền riêng tư này mô tả cách ứng dụng Android **T-Battery** (mã gói: `com.ntt.tbattery`) do **NTT-Studio** phát triển và vận hành xử lý thông tin trên thiết bị của bạn.

## 1. Dữ liệu ứng dụng truy cập và xử lý

T-Battery đọc các thông số kỹ thuật về pin do hệ điều hành Android và phần cứng thiết bị cung cấp (như mức pin, trạng thái sạc, nguồn điện, nhiệt độ, điện áp, dòng điện, công suất và dung lượng ước tính) nhằm:

- Hiển thị trạng thái pin theo thời gian thực trên ứng dụng, thanh thông báo và widget.
- Ghi nhận lịch sử sạc/xả và vẽ biểu đồ theo dõi.
- Ước tính thời gian sạc đầy hoặc thời gian sử dụng còn lại.
- Kích hoạt các cảnh báo pin theo ngưỡng do bạn thiết lập.

Phần Chẩn đoán (Diagnostics) có thể hiển thị một số thông tin kỹ thuật của thiết bị và mã định danh phần cứng (ví dụ: số sê-ri pin) nếu thiết bị hỗ trợ. Quyền truy cập Root hoặc Shizuku là hoàn toàn tùy chọn nhằm đọc thêm thông số nâng cao và không bắt buộc để sử dụng ứng dụng.

## 2. Lưu trữ cục bộ và Không thu thập dữ liệu

- **Xử lý hoàn toàn trên thiết bị:** Mọi dữ liệu lịch sử pin, dữ liệu dự đoán, cài đặt và cảnh báo đều được lưu trữ cục bộ trong bộ nhớ riêng của ứng dụng trên thiết bị của bạn.
- **Không gửi dữ liệu ra ngoài:** T-Battery không sử dụng quyền truy cập Internet (INTERNET), không chứa SDK quảng cáo, không tích hợp công cụ theo dõi hành vi (analytics) và không tự động thu thập hay truyền tải dữ liệu giám sát/chẩn đoán của bạn lên bất kỳ máy chủ bên ngoài nào.
- **Không tự động sao lưu đám mây:** Ứng dụng tắt tính năng tự động sao lưu đám mây và chuyển dữ liệu tự động giữa các thiết bị của Android (allowBackup="false").

## 3. Xuất dữ liệu, Sao lưu và Chia sẻ

Bạn có thể chủ động:

- Xuất lịch sử pin (định dạng CSV/JSON) thủ công hoặc tự động vào thư mục bạn chọn.
- Tạo tệp sao lưu (cài đặt, cảnh báo, lịch sử, dữ liệu dự đoán) để lưu trữ cá nhân.
- Chia sẻ thông tin chẩn đoán khi cần hỗ trợ kỹ thuật.

**Lưu ý:** Các tệp xuất ra và tệp sao lưu không được ứng dụng mã hóa. Nếu bạn lưu các tệp này lên dịch vụ đám mây hoặc gửi cho bên thứ ba, việc xử lý dữ liệu sẽ tuân theo chính sách của nhà cung cấp lưu trữ hoặc người nhận mà bạn đã chọn.

## 4. Quyền hệ thống ứng dụng sử dụng

T-Battery chỉ yêu cầu các quyền tối thiểu cần thiết để hoạt động ổn định:

- **Dịch vụ chạy nền (FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE):** Duy trì việc theo dõi trạng thái pin liên tục và cập nhật thông báo/widget.
- **Thông báo (POST_NOTIFICATIONS, POST_PROMOTED_NOTIFICATIONS):** Hiển thị thông báo trạng thái pin liên tục, gửi cảnh báo pin và hỗ trợ Live Updates trên Android 16+.
- **Khởi chạy khi bật máy (RECEIVE_BOOT_COMPLETED):** Tự động khôi phục dịch vụ theo dõi pin sau khi thiết bị khởi động lại.
- **Rung (VIBRATE):** Rung thông báo khi kích hoạt cảnh báo pin.
- **Giữ thức & bỏ qua tối ưu hóa pin (WAKE_LOCK, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS):** Đảm bảo việc ghi nhận sự kiện pin và phát cảnh báo không bị hệ thống ngắt đột ngột.

## 5. Thời gian lưu trữ và Quyền kiểm soát của bạn

Khi bật tính năng ghi nhật ký, thời gian lưu trữ lịch sử có thể được tùy chỉnh trong cài đặt ứng dụng (mặc định là 28 ngày).

Bạn có toàn quyền kiểm soát dữ liệu của mình bất cứ lúc nào:

- Xóa lịch sử pin trực tiếp bên trong ứng dụng.
- Xóa bộ nhớ ứng dụng trong Cài đặt Android hoặc Gỡ cài đặt ứng dụng để xóa toàn bộ dữ liệu do T-Battery quản lý.
- Đối với các tệp CSV/JSON hoặc tệp sao lưu bạn đã tự xuất ra, vui lòng tự xóa tại thư mục hoặc dịch vụ lưu trữ bạn đã chọn.

## 6. Quyền riêng tư của trẻ em

Ứng dụng không nhắm đến trẻ em dưới 13 tuổi (hoặc độ tuổi tương đương theo quy định pháp luật tại quốc gia của bạn) và không thu thập thông tin cá nhân từ bất kỳ đối tượng nào.

## 7. Thay đổi chính sách

Chính sách quyền riêng tư này có thể được cập nhật theo thời gian để phản ánh các thay đổi về tính năng hoặc yêu cầu pháp lý. Mọi cập nhật sẽ được công bố tại trang này kèm theo ngày có hiệu lực mới.

## 8. Thông tin liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến chính sách quyền riêng tư này, vui lòng liên hệ:

- **Nhà phát triển:** NTT-Studio
- **Email:** firstntt90@gmail.com
