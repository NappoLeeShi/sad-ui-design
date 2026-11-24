# Ghi chú bộ sơ đồ phân tích hệ thống

Bộ sơ đồ này mô tả **Hệ thống tiếp nhận và xử lý phản ánh của người dân** ở mức phân tích SAD. Tất cả sơ đồ dùng phong cách học thuật trắng – đen, nhãn tiếng Việt và ký hiệu UML cơ bản.

## 1. Mục đích từng sơ đồ

- **01_Use_Case**: Cho thấy ranh giới hệ thống, các tác nhân chính và các ca sử dụng được yêu cầu. Chỉ giữ quan hệ `«include»` giữa `Gửi phản ánh mới` và `Quản lý thông tin và minh chứng`, vì thông tin/minh chứng là một phần của việc gửi phản ánh.
- **02_Activity**: Mô tả luồng xử lý tổng quát từ lúc người dân gửi phản ánh đến lúc nhận kết quả. Có bốn lane: Người dân, Hệ thống, Cán bộ tiếp nhận, Cán bộ đơn vị xử lý. Dùng nút bắt đầu/kết thúc và luồng điều khiển tuyến tính.
- **03_Sequence**: Mô tả trình tự tương tác chính theo thời gian giữa Người dân, Hệ thống, Cán bộ tiếp nhận, Cán bộ đơn vị xử lý và Dịch vụ thông báo.
- **04_Class**: Là mô hình khái niệm cơ bản, không phải lược đồ cơ sở dữ liệu hay thiết kế triển khai. Chỉ gồm các lớp/đối tượng và thuộc tính được suy ra trực tiếp từ yêu cầu.

## 2. Tác nhân và thực thể chính

- Tác nhân con người: **Người dân**, **Cán bộ tiếp nhận**, **Cán bộ đơn vị xử lý**, **Quản trị viên**.
- Tác nhân ngoài hệ thống: **Dịch vụ thông báo** (chỉ kết nối với ca sử dụng `Gửi thông báo` và tham gia sơ đồ trình tự).
- Thực thể khái niệm: `Account`, `Citizen`, `Officer`, `Administrator`, `Feedback`, `FeedbackCategory`, `ProcessingUnit`, `ProcessingResult`, `Notification`, `Attachment`.

## 3. Quan hệ quan trọng

- Use Case: `Gửi phản ánh mới «include» Quản lý thông tin và minh chứng`.
- Activity: luồng `Gửi phản ánh → Tiếp nhận → Kiểm tra → Phân loại/phân công → Chuyển → Nhận nhiệm vụ → Cập nhật tiến độ → Ghi nhận kết quả → Công bố → Theo dõi/nhận kết quả`.
- Sequence: các thông điệp được sắp theo trình tự nghiệp vụ; thông báo là tương tác độc lập, không gắn với điều kiện kích hoạt cụ thể.
- Class: `Citizen`, `Officer`, `Administrator` được biểu diễn là các vai trò kế thừa từ `Account`; `Feedback` liên kết với danh mục, đơn vị xử lý, kết quả và minh chứng; `Administrator` quản lý danh mục và đơn vị xử lý.

## 4. Giả định nghiệp vụ

1. **Thống kê và báo cáo**: yêu cầu có chức năng này nhưng không nêu rõ tác nhân. Ca sử dụng được giữ bên trong ranh giới hệ thống và **không nối với Quản trị viên hay tác nhân khác**.
2. **Thông báo**: yêu cầu nêu dịch vụ gửi thông báo qua email hoặc kênh tích hợp, nhưng không nêu điều kiện kích hoạt. Vì vậy không dùng `«extend»` từ `Ghi nhận kết quả và phản hồi`; thông báo được biểu diễn độc lập.
3. **Phân quyền và tài khoản**: vai trò (`Vai trò`) được đưa vào `Account` vì yêu cầu phi chức năng có kiểm soát truy cập theo vai trò và yêu cầu chức năng có quản lý tài khoản/đăng nhập.
4. **Minh chứng**: `Attachment` được thêm vì yêu cầu "Quản lý thông tin và minh chứng".
5. **Thông tin liên hệ**: được đưa vào `Citizen` vì hệ thống cần công bố kết quả và gửi thông báo cho người dân.

## 5. Yêu cầu còn chưa rõ

- Tác nhân chịu trách nhiệm xem thống kê/báo cáo chưa được xác định.
- Thời điểm gửi thông báo và kênh cụ thể ngoài "email hoặc kênh tích hợp" chưa được xác định.
- Tên thuộc tính chi tiết, kiểu dữ liệu và multiplicity chính xác của các lớp chưa được yêu cầu quy định; vì vậy sơ đồ không gán số lượng `1`, `0..1`, `1..*` cho các liên kết.

## 6. Các lược bỏ có chủ đích

- Không đưa **Nhà nước**, **Cộng đồng** làm actor UML vì chúng là stakeholder gián tiếp.
- Không đưa actor **Lãnh đạo** vì không nằm trong vai trò vận hành được duyệt.
- Không thêm tiêu chí từ chối, hạn xử lý, leo thang, phê duyệt hay trạng thái đặc thù vì yêu cầu không nêu.
- Không mô tả API, thao tác cơ sở dữ liệu, dịch vụ nội bộ, giao thức xác thực hay fragment `alt/opt/loop` không được hỗ trợ.
- Không thêm phương thức triển khai cho lớp và không giả định lược đồ cơ sở dữ liệu.

## 7. Đóng gói và xuất ảnh

- Tệp chính: `SAD_System_Analysis_Diagrams.drawio` gồm đúng 4 trang: `01_Use_Case`, `02_Activity`, `03_Sequence`, `04_Class`.
- Nội dung XML của từng trang được tạo bằng Draw.io MCP và đóng gói thành `mxfile` có ID trang duy nhất; không cắt bỏ ô, ID, geometry, style hay connector.
- PNG được xuất trực tiếp từ XML trang trong tệp `.drawio` qua dịch vụ export của diagrams.net.
- Dịch vụ export không hỗ trợ định dạng SVG trực tiếp; SVG được tạo từ PDF cùng nguồn XML bằng `pdftocairo -f 1 -l 1 -svg` (chỉ lấy trang nội dung, tránh cấu trúc `pageSet` khi PDF có trang trống phụ), vẫn đảm bảo ảnh xuất phát từ tệp `.drawio` thực tế.
