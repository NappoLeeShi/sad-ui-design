# Function–screen mapping

Truy vết từ chức năng và bước trong User Flow / Activity Diagram sang từng khung wireframe.
Mã khung trùng với `id` của `article` trong các trang HTML, nên có thể liên kết trực tiếp:
`F1_Submit_Report/to-be.html#to-be-f1-02`.

## Tổng quan

| Chức năng | As-Is | To-Be | Tổng |
| --- | ---: | ---: | ---: |
| F1 — Gửi phản ánh | 7 | 11 | 18 |
| F2 — Tra cứu trạng thái | 2 | 8 | 10 |
| F3 — Xem chi tiết và lịch sử | 2 | 5 | 7 |
| **Tổng** | **11** | **24** | **35** |

## F1 — Gửi phản ánh

### As-Is (`F1_Submit_Report/as-is.html`)

Nguồn: `AS_IS_VNeID_Activity_Diagram.puml`.

| Mã | Màn hình | Bước nguồn |
| --- | --- | --- |
| `AS-IS-F1-01` | Trang chính VNeID | Đăng nhập mức 2 → hiển thị màn hình chính/dịch vụ |
| `AS-IS-F1-02` | Dịch vụ khác | Chọn “Dịch vụ khác” → hiển thị danh mục dịch vụ khác |
| `AS-IS-F1-03` | Tiếp nhận góp ý, phản ánh & vướng mắc | Chọn mục tương ứng → hiển thị màn hình module |
| `AS-IS-F1-04` | Phản ánh kiến nghị về dịch vụ công | Chọn “Phản ánh kiến nghị về dịch vụ công”; có “Tạo mới yêu cầu” và lịch sử |
| `AS-IS-F1-05` | Biểu mẫu phản ánh | “Tạo mới yêu cầu” → biểu mẫu: mã hồ sơ, loại phản ánh, nội dung, tài liệu, cam đoan |
| `AS-IS-F1-06` | Biểu mẫu phản ánh — lỗi trường bắt buộc | Kiểm tra trường bắt buộc có dấu `*`; minh họa lỗi tại chỗ |
| `AS-IS-F1-07` | Gửi yêu cầu thành công | “Gửi phản ánh” → tạo thành công → “Tiếp tục phản ánh” / “Trang chủ” |

### To-Be (`F1_Submit_Report/to-be.html`)

Nguồn: `F1_Submit_Report_User_Flow.mmd`; cấu trúc 4 bước theo dàn ý Topic 7.

| Mã | Màn hình | Nút/bước User Flow |
| --- | --- | --- |
| `TO-BE-F1-01` | Trang chính — Gửi phản ánh nổi bật | `Home` — hiển thị rõ hành động “Gửi phản ánh” |
| `TO-BE-F1-02` | Chọn loại vấn đề | `CategoryScreen` — bước 1/4 |
| `TO-BE-F1-03` | Chọn loại vấn đề — lỗi chưa chọn | `CategoryError` — “Vui lòng chọn loại vấn đề” |
| `TO-BE-F1-04` | Chọn vị trí | `LocationScreen` — bước 2/4, tìm kiếm/bản đồ/nhập tay |
| `TO-BE-F1-05` | Chọn vị trí — không có quyền vị trí | `PermissionError` — vẫn cho tìm/chọn thủ công |
| `TO-BE-F1-06` | Mô tả và đính kèm | `DescribeScreen` — bước 3/4, nội dung + mã hồ sơ + tệp |
| `TO-BE-F1-07` | Mô tả và đính kèm — lỗi xác thực | `DataError` — lỗi tại trường, giữ dữ liệu |
| `TO-BE-F1-08` | Xem lại và gửi | `ReviewScreen` — bước 4/4, sửa từng phần, cam đoan |
| `TO-BE-F1-09` | Đang gửi phản ánh | `Sending` — “Đang gửi phản ánh…” |
| `TO-BE-F1-10` | Gửi phản ánh thành công | `Success` — mã tham chiếu (nếu có) + hướng dẫn tra cứu |
| `TO-BE-F1-11` | Lỗi gửi phản ánh | `SubmitError` — giữ dữ liệu, cho thử lại |

Ghi chú: nhánh `FormError` (không mở được biểu mẫu) không được dựng thành khung riêng vì
User Flow chỉ mô tả thông báo, không mô tả màn hình; nội dung này được ghi trong giả định của
`TO-BE-F1-01`/`TO-BE-F1-02`. Nhánh sửa dữ liệu dùng lại các khung bước 1–3.

## F2 — Tra cứu trạng thái

### As-Is (`F2_Check_Status/as-is.html`)

Nguồn: `AS_IS_VNeID_Activity_Diagram.puml` (nhánh xem lịch sử hiện có).

| Mã | Màn hình | Bước nguồn |
| --- | --- | --- |
| `AS-IS-F1-04` | Phản ánh kiến nghị về dịch vụ công | Điểm vào có danh sách lịch sử yêu cầu; dùng chung với F1 |
| `AS-IS-F2-02` | Lịch sử yêu cầu — trạng thái trống | Suy luận giao diện khi chưa có bản ghi; nguồn không mô tả trạng thái trống |

As-Is **không có** tra cứu bằng mã tham chiếu, bộ lọc hay nhãn trạng thái xử lý.

### To-Be (`F2_Check_Status/to-be.html`)

Nguồn: `F2_Check_Report_Status_User_Flow.mmd`.

| Mã | Màn hình | Nút/bước User Flow |
| --- | --- | --- |
| `TO-BE-F2-01` | Tra cứu phản ánh | `LookupScreen` — ô mã tham chiếu + hướng dẫn định dạng |
| `TO-BE-F2-02` | Tra cứu — lỗi nhập mã | `InputError` — lỗi tại ô nhập, giữ dữ liệu |
| `TO-BE-F2-03` | Đang tra cứu | `Searching` — “Đang tra cứu…” |
| `TO-BE-F2-04` | Kết quả tra cứu | `Result` — mã, trạng thái, thời điểm cập nhật, xem chi tiết |
| `TO-BE-F2-05` | Danh sách phản ánh đã gửi | Bổ sung từ As-Is; danh sách có trạng thái/thời điểm cập nhật |
| `TO-BE-F2-06` | Danh sách phản ánh — trạng thái trống | `Empty` — hướng dẫn gửi phản ánh mới |
| `TO-BE-F2-07` | Không tìm thấy phản ánh | `NotFound` — phân biệt với lỗi hệ thống |
| `TO-BE-F2-08` | Lỗi hệ thống khi tra cứu | `SystemError` — thông báo dễ hiểu, cho thử lại |

Ghi chú: `Home` (trang chính có mục “Tra cứu phản ánh”) được thể hiện gián tiếp qua
`TO-BE-F1-01` và liên kết trong trang F2; không tạo khung trùng.

## F3 — Xem chi tiết và lịch sử

### As-Is (`F3_View_Details_History/as-is.html`)

Nguồn: `AS_IS_VNeID_Activity_Diagram.puml` (nhánh xem chi tiết).

| Mã | Màn hình | Bước nguồn |
| --- | --- | --- |
| `AS-IS-F3-01` | Chi tiết yêu cầu | Chọn bản ghi trong lịch sử → hiển thị chi tiết yêu cầu |
| `AS-IS-F3-02` | Xem tài liệu đính kèm | Chọn “Xem” → mở tài liệu đính kèm |

As-Is **không có** trạng thái xử lý, thời điểm cập nhật hay timeline lịch sử.

### To-Be (`F3_View_Details_History/to-be.html`)

Nguồn: `F3_Report_Details_and_History_User_Flow.mmd`.

| Mã | Màn hình | Nút/bước User Flow |
| --- | --- | --- |
| `TO-BE-F3-01` | Chi tiết phản ánh và lịch sử xử lý | `Detail` → `ShowUpdate` → `History` |
| `TO-BE-F3-02` | Chi tiết phản ánh — chưa có cập nhật | `NoUpdate` + `NoHistory` — ghi rõ chưa có dữ liệu |
| `TO-BE-F3-03` | Xem tài liệu đính kèm | Hành động xem tệp từ trang chi tiết |
| `TO-BE-F3-04` | Không tìm thấy phản ánh | `NotFound` — đã xóa/đường dẫn không hợp lệ |
| `TO-BE-F3-05` | Không có quyền xem | `Denied` — không tiết lộ dữ liệu |

Ghi chú: `Results` (danh sách kết quả) dùng chung với `TO-BE-F2-05`; `Loading` (đang tải chi tiết)
và nhánh “Quay lại kết quả” không được dựng thành khung riêng vì không có nội dung thị giác mới.

## Nguồn ngoài phạm vi

F4 (cán bộ tiếp nhận) và F5 (cán bộ xử lý) không có khung trong bộ này. Theo
`diagrams/topic7/README.md`, đây là các luồng mở rộng ngoài phạm vi Topic 7 và cần xác nhận
đặc tả trước khi thiết kế.
