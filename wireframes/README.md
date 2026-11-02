# Wireframe VNeID — Topic 7

Bộ wireframe HTML/CSS tĩnh cho ba chức năng người dân thuộc Topic 7:
**F1 — Gửi phản ánh**, **F2 — Tra cứu trạng thái**, **F3 — Xem chi tiết và lịch sử**.
Mỗi chức năng có hai phiên bản **As-Is** (mô phỏng luồng hiện tại) và **To-Be** (đề xuất cải tiến).

## Cách mở

Không cần cài đặt hay build. Mở trực tiếp bằng trình duyệt:

```bash
# từ thư mục gốc repository
xdg-open wireframes/index.html      # Linux
open wireframes/index.html          # macOS
start wireframes/index.html         # Windows
```

Hoặc chạy một static server nếu muốn điều hướng ổn định:

```bash
python3 -m http.server 8000 --directory wireframes
# mở http://localhost:8000
```

Trang bắt đầu: [`index.html`](index.html).

## Danh mục tệp

| Tệp | Nội dung | Số khung |
| --- | --- | --- |
| [`index.html`](index.html) | Tổng quan, liên kết tới 6 trang chức năng và tài liệu | — |
| [`F1_Submit_Report/as-is.html`](F1_Submit_Report/as-is.html) | Gửi phản ánh — luồng hiện tại | 7 |
| [`F1_Submit_Report/to-be.html`](F1_Submit_Report/to-be.html) | Gửi phản ánh — đề xuất 4 bước | 11 |
| [`F2_Check_Status/as-is.html`](F2_Check_Status/as-is.html) | Tra cứu trạng thái — lịch sử hiện tại | 2 |
| [`F2_Check_Status/to-be.html`](F2_Check_Status/to-be.html) | Tra cứu trạng thái — đề xuất | 8 |
| [`F3_View_Details_History/as-is.html`](F3_View_Details_History/as-is.html) | Chi tiết và tài liệu đính kèm — hiện tại | 2 |
| [`F3_View_Details_History/to-be.html`](F3_View_Details_History/to-be.html) | Chi tiết, lịch sử xử lý — đề xuất | 5 |
| [`assets/wireframe.css`](assets/wireframe.css) | Design system dùng chung | — |
| [`tools/build.py`](tools/build.py) | Bộ sinh HTML tĩnh (nguồn duy nhất của markup) | — |

Tổng cộng: **35 khung màn hình/trạng thái** (11 As-Is, 24 To-Be).

Tài liệu kèm theo:

- [`design-system.md`](design-system.md) — token, khung thiết bị, component, trạng thái, accessibility.
- [`function-screen-mapping.md`](function-screen-mapping.md) — truy vết chức năng và bước User Flow sang từng màn hình.
- [`as-is-vs-to-be.md`](as-is-vs-to-be.md) — đối chiếu As-Is / To-Be và cơ sở heuristic.

## Phạm vi

**Trong phạm vi:** F1, F2, F3 dành cho người dân, theo
`diagrams/topic7/README.md` và `theoretical_basis/functional specification_demo.md`.

**Ngoài phạm vi:** F4 và F5 (cán bộ tiếp nhận/xử lý). README của Topic 7 đánh dấu đây là
luồng mở rộng, cần xác nhận thêm và chưa có đặc tả đủ để thiết kế, nên **không** có wireframe
cho F4/F5 trong bộ này.

## Nguồn

- As-Is: `diagrams/topic7/AS_IS_VNeID_Activity_Diagram.puml`.
- To-Be: `diagrams/topic7/F1_Submit_Report_User_Flow.mmd`,
  `F2_Check_Report_Status_User_Flow.mmd`, `F3_Report_Details_and_History_User_Flow.mmd`.
- Yêu cầu UI: `theoretical_basis/functional specification_demo.md` (FR-UI).
- Định hướng cải tiến: `plan/Dan_y_Topic_7_Thiet_ke_giao_dien_va_kiem_chung_luong_thao_tac.md`.
- Heuristic: `theoretical_basis/3-usability-heuristics.md`.

## Quy ước và giả định

- Toàn bộ chữ trong giao diện là tiếng Việt; dữ liệu cá nhân, mã hồ sơ, địa chỉ và tệp đính kèm
  là **dữ liệu minh họa**, không phải thông tin thật.
- Độ trung thực thấp–trung bình: thang xám, không logo, không màu thương hiệu, không hình minh họa.
- As-Is chỉ dựng các thành phần được Activity Diagram xác nhận. Các điểm suy luận được ghi trong
  mục “Giả định / cần xác nhận” của từng khung (mở bằng nút *Chi tiết thiết kế*).
- To-Be không thêm chức năng backend, không đặt ra danh mục chính thức, SLA hay quy tắc nghiệp vụ mới.
- Tra cứu bằng mã tham chiếu ở F2 To-Be là giả định đã nêu trong README Topic 7; As-Is không có
  màn hình này.
- Trạng thái/lịch sử xử lý ở F3 To-Be là phần bổ sung theo F3 User Flow và FR-UI-06; As-Is không
  xác nhận các thành phần này.

## Chỉnh sửa và tái tạo

Markup được sinh từ `tools/build.py`. Nên sửa tại đó rồi chạy lại để tránh lệch giữa các trang:

```bash
python3 wireframes/tools/build.py
```

Có thể sửa trực tiếp tệp HTML đã sinh nếu chỉ cần tinh chỉnh nhanh, nhưng thay đổi sẽ bị ghi đè
ở lần chạy lại. CSS dùng chung nằm ở `assets/wireframe.css`.

## Hạn chế

- Đây là wireframe tĩnh: không có JavaScript, không gọi API, không kiểm thử luồng thật.
- Bố cục mô phỏng màn hình di động; chưa thiết kế tablet/desktop riêng cho từng chức năng.
- Một số nhãn, danh mục và thông điệp lỗi cần đối chiếu với giao diện VNeID thực tế và đặc tả
  nghiệp vụ chính thức trước khi dùng cho phát triển.
