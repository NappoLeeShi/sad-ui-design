# So sánh As-Is / To-Be

Tài liệu đối chiếu hai phiên bản wireframe cho F1, F2, F3. As-Is bám sát
`AS_IS_VNeID_Activity_Diagram.puml`; To-Be bám theo các User Flow và 5 heuristic đã chọn trong
`theoretical_basis/3-usability-heuristics.md`.

## 1. Khác biệt về hình thức

| Yếu tố | As-Is | To-Be |
| --- | --- | --- |
| Khung thiết bị | Viền mảnh, bo góc nhỏ, không tai thỏ | Viền dày, bo góc lớn, có tai thỏ |
| Mã khung | `AS-IS-F*` | `TO-BE-F*` |
| Màu sắc | Thang xám | Thang xám |
| Mức độ | Mô phỏng luồng hiện tại | Đề xuất cải tiến |
| Trạng thái lỗi | Chỉ khi nguồn xác nhận hoặc suy luận rõ | Đầy đủ: lỗi nhập, đang xử lý, thất bại, trống, không tìm thấy, không có quyền |

## 2. F1 — Gửi phản ánh

### Điều hướng

- **As-Is:** Trang chính → “Dịch vụ khác” → “Tiếp nhận góp ý, phản ánh & vướng mắc” →
  “Phản ánh kiến nghị về dịch vụ công” → “Tạo mới yêu cầu”. Chức năng nằm sâu sau 3 lớp danh mục.
- **To-Be:** Trang chính có “Gửi phản ánh” trong “Công cụ yêu thích”, đi thẳng vào biểu mẫu 4 bước.
  Giảm số bước tìm kiếm và giảm phụ thuộc vào trí nhớ.

### Thứ bậc thông tin

- **As-Is:** Một biểu mẫu dài gồm mã hồ sơ, loại phản ánh, nội dung, tài liệu, cam đoan.
  Loại phản ánh là trường chọn không có mô tả/ví dụ.
- **To-Be:** Tách thành 4 bước, mỗi bước một nhiệm vụ. Loại vấn đề dùng thẻ có tên, mô tả và ví dụ.
  Vị trí có tìm kiếm/bản đồ/nhập tay. Bước xem lại tóm tắt toàn bộ và cho sửa từng phần.

### Tương tác

- **As-Is:** Gửi một lần; thành công chỉ có “Tiếp tục phản ánh” hoặc “Trang chủ”.
- **To-Be:** Stepper 1/4–4/4, quay lại giữ dữ liệu, sửa từng phần từ bước xem lại, trạng thái
  “Đang gửi”, mã tham chiếu và hướng dẫn tra cứu sau khi thành công.

### Lỗi và phục hồi

- **As-Is:** Kiểm tra trường bắt buộc; thông điệp lỗi cụ thể chưa được đặc tả.
- **To-Be:** Lỗi tại chỗ theo từng bước, thông báo rõ; lỗi gửi giữ nguyên dữ liệu và cho thử lại;
  không có quyền vị trí vẫn cho tiếp tục bằng tìm kiếm/nhập tay.

### Heuristic áp dụng

| Heuristic | Thay đổi cụ thể |
| --- | --- |
| Visibility of system status | Stepper, trạng thái đang gửi, xác nhận thành công |
| Match between system and the real world | Tên loại vấn đề kèm mô tả và ví dụ đời thường |
| Recognition rather than recall | Thẻ lựa chọn, gợi ý vị trí, không bắt nhớ tên danh mục |
| Error prevention | Kiểm tra từng bước, xác nhận vị trí, xem lại trước khi gửi |
| User control and freedom | Quay lại không mất dữ liệu, sửa từng phần, hủy an toàn |

## 3. F2 — Tra cứu trạng thái

### Điều hướng và năng lực

- **As-Is:** Chỉ xem “Lịch sử yêu cầu” trong màn hình chức năng; không có tra cứu bằng mã,
  không có nhãn trạng thái xử lý, không có thời điểm cập nhật.
- **To-Be:** Có màn hình tra cứu bằng mã tham chiếu, trạng thái đang tra cứu, kết quả, danh sách
  phản ánh và các trạng thái lỗi/trống riêng biệt.

### Thứ bậc thông tin

- **As-Is:** Danh sách lịch sử tối giản; trạng thái trống là suy luận giao diện.
- **To-Be:** Kết quả nêu mã tham chiếu, trạng thái hiện tại, thời điểm cập nhật và đường dẫn
  xem chi tiết. Danh sách có metadata và trạng thái.

### Lỗi và phục hồi

- **As-Is:** Không có luồng lỗi tra cứu vì không có tra cứu.
- **To-Be:** Phân biệt rõ **lỗi nhập**, **không tìm thấy** và **lỗi hệ thống**; giữ dữ liệu đã nhập;
  lỗi hệ thống có cách thử lại và không lộ chi tiết kỹ thuật.

### Heuristic áp dụng

| Heuristic | Thay đổi cụ thể |
| --- | --- |
| Visibility of system status | “Đang tra cứu…”, kết quả có trạng thái và thời điểm cập nhật |
| Match between system and the real world | Thông báo “Không tìm thấy phản ánh” thay vì mã lỗi |
| Recognition rather than recall | Hướng dẫn định dạng mã và ví dụ ngay tại ô nhập |
| Error prevention | Kiểm tra định dạng trước khi gửi tra cứu |
| User control and freedom | Giữ mã đã nhập, cho sửa và tra cứu lại |

## 4. F3 — Xem chi tiết và lịch sử

### Thứ bậc thông tin

- **As-Is:** Chi tiết yêu cầu và tài liệu đính kèm. Không có trạng thái xử lý, thời điểm cập nhật
  hay lịch sử.
- **To-Be:** Trạng thái hiện tại bằng nhãn rõ nghĩa, thời điểm cập nhật, thông tin phản ánh,
  tài liệu đính kèm và timeline lịch sử xử lý.

### Trạng thái thiếu dữ liệu

- **As-Is:** Không được đặc tả.
- **To-Be:** Ghi rõ “Chưa có thông tin cập nhật mới” và “Chưa có lịch sử cập nhật” thay vì để trống.
  Không tự tạo sự kiện giả.

### Lỗi và quyền truy cập

- **As-Is:** Không được đặc tả.
- **To-Be:** “Không tìm thấy phản ánh” (đã xóa/đường dẫn sai) tách biệt với “Không có quyền xem”;
  trạng thái không có quyền không tiết lộ dữ liệu.

### Heuristic áp dụng

| Heuristic | Thay đổi cụ thể |
| --- | --- |
| Visibility of system status | Nhãn trạng thái, thời điểm cập nhật, timeline |
| Match between system and the real world | Trạng thái dùng ngôn ngữ người dân hiểu |
| Recognition rather than recall | Thông tin và lịch sử hiển thị sẵn, không phải nhớ |
| Error prevention | Phân biệt không tìm thấy và không có quyền |
| User control and freedom | Quay lại kết quả/danh sách rõ ràng |

## 5. Tác động dự kiến

| Chỉ số định tính | As-Is | To-Be (kỳ vọng) |
| --- | --- | --- |
| Số lớp điều hướng để tạo phản ánh | 4–5 | 1–2 |
| Hiểu loại phản ánh | Phải suy đoán từ tên trường | Có mô tả và ví dụ |
| Nhập vị trí | Tự gõ | Tìm kiếm, bản đồ, nhập tay |
| Sửa trước khi gửi | Hạn chế | Xem lại + sửa từng phần |
| Biết trạng thái sau khi gửi | Không rõ | Mã tham chiếu + hướng dẫn tra cứu |
| Theo dõi tiến độ xử lý | Không có | Trạng thái + lịch sử |
| Phục hồi khi lỗi | Chưa đặc tả | Giữ dữ liệu, thử lại, thông báo rõ |

Đây là **kỳ vọng thiết kế**, chưa phải kết quả đo lường. Cần kiểm thử usability với người dùng
thật để xác nhận trước khi kết luận cải thiện.

## 6. Điểm cần xác nhận

- Bộ danh mục loại vấn đề chính thức và thứ tự hiển thị.
- Quy tắc bắt buộc/định dạng của mã hồ sơ và mã tham chiếu.
- Việc hệ thống có cấp mã tham chiếu hay không và định dạng của mã.
- Nội dung, giới hạn số tệp/định dạng/kích thước tệp đính kèm.
- Mức độ chi tiết của lịch sử xử lý được phép công khai cho người dân.
- Cách xử lý quyền xem khi phản ánh thuộc nhiều cơ quan hoặc đã bị xóa.
