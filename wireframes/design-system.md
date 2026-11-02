# Design system — Wireframe VNeID Topic 7

Hệ thống thiết kế tối giản dùng chung cho 6 trang wireframe. Mục tiêu là **độ trung thực thấp–trung bình**:
đủ rõ để đánh giá luồng, thứ bậc thông tin và trạng thái, nhưng không gây nhầm là giao diện cuối.

Mã nguồn: [`assets/wireframe.css`](assets/wireframe.css).

## 1. Nguyên tắc

- **Thang xám:** chỉ dùng trắng, xám và đen; không màu thương hiệu, không gradient trang trí.
- **Tĩnh:** không JavaScript, không dữ liệu động; mọi trạng thái được dựng thành khung riêng.
- **Một khung = một trạng thái:** mỗi màn hình hoặc biến thể lỗi/trống/đang xử lý có ID riêng.
- **Nội dung tiếng Việt:** nhãn, thông báo và dữ liệu mẫu đều là tiếng Việt.
- **Dữ liệu minh họa:** không dùng thông tin cá nhân thật.
- **Phân biệt As-Is / To-Be bằng hình thức khung**, không chỉ bằng nhãn.

## 2. Token

| Token | Giá trị | Dùng cho |
| --- | --- | --- |
| `--page` | `#f3f4f6` | Nền trang bao ngoài |
| `--surface` | `#ffffff` | Nền màn hình, thẻ, biểu mẫu |
| `--surface-2` | `#f9fafb` | Nền phụ, hàng danh sách |
| `--surface-3` | `#f4f4f5` | Nền trung tính nhẹ |
| `--ink` | `#18181b` | Chữ chính, viền khung To-Be |
| `--ink-2` | `#3f3f46` | Chữ phụ đậm |
| `--muted` | `#71717a` | Chữ phụ, metadata |
| `--muted-2` | `#a1a1aa` | Chữ mờ, mũi tên luồng |
| `--line` | `#d4d4d8` | Đường viền mặc định |
| `--line-2` | `#a1a1aa` | Viền nhấn, viền khung As-Is |
| `--dark` | `#27272a` | Nút chính, khung To-Be, nền đậm |
| `--dark-2` | `#3f3f46` | Khung As-Is, nền đậm phụ |
| `--soft` | `#e4e4e7` | Badge nền mềm, trạng thái chọn |
| `--radius` / `--radius-sm` | `12px` / `8px` | Bo góc thẻ và control |
| `--shadow` | `0 16px 40px rgba(24,24,27,.10)` | Bóng khung thiết bị |

Typography: `Inter`, dự phòng `Segoe UI`, `system-ui`, `Noto Sans`, `Arial`, `sans-serif`.
Cỡ chữ trong khung điện thoại chủ yếu 10–14px; tiêu đề trang 26–40px.

## 3. Khung thiết bị

Mỗi khung là một `article.screen-card` gồm:

1. `.screen-head` — mã khung (`.screen-id`) và tên màn hình (`h3`).
2. `.device` — khung điện thoại 360 × 760px, có thanh trạng thái giả lập.
3. `.purpose` — mục đích của khung.
4. `details.screen-details` — thành phần, tương tác, nguồn, khác biệt, giả định.

Hai biến thể khung:

| Biến thể | Class | Đặc điểm |
| --- | --- | --- |
| As-Is | `.device.as-is` | Viền 8px màu `--dark-2`, bo góc 14px, không có tai thỏ |
| To-Be | `.device.to-be` | Viền 12px màu `--dark`, bo góc 38px, có tai thỏ |

Khác biệt này giúp nhận ra phiên bản ngay cả khi ảnh bị tách khỏi nhãn.

## 4. Bố cục màn hình

- `.appbar` — thanh ứng dụng: nút quay lại, tiêu đề, hành động phải.
- `.content` — vùng cuộn, đệm 16px.
- `.bottom_nav` — điều hướng dưới 4 mục, mục đang active dùng nền đậm.
- `.section` / `.section-title` — nhóm nội dung và tiêu đề nhóm.
- `.card` — khối thông tin; `.card-soft`, `.card-dark` cho biến thể nền.
- `.row-between` — hàng căn hai đầu.
- `.screens-grid` — lưới thẻ khung, `auto-fill` tối thiểu 400px; responsive xuống 1 cột.

## 5. Component

### Biểu mẫu

- `.field`, `.field-label`, `.field-hint`, `.field-error` — nhãn, gợi ý, lỗi.
- Control: `.input`, `.textarea`, `.select`, `.file-drop`.
- Trường bắt buộc có dấu `*`; lỗi dùng viền đậm và chữ lỗi ngay dưới trường.
- `input`/`textarea` là phần tử tĩnh, không có hành vi thật.

### Lựa chọn

- `.choices` + `.choice` — thẻ chọn một, có `.choice-title`, `.choice-desc`, `.choice-example`, `.choice-check`.
- `.choice.selected` — trạng thái đã chọn, nền `--soft`, viền đậm, dấu kiểm.

### Nút

| Class | Vai trò |
| --- | --- |
| `.btn-primary` | Hành động chính (nền đậm, chữ trắng) |
| `.btn-secondary` | Hành động phụ (viền) |
| `.btn-ghost` | Hành động nhẹ, không viền |
| `.btn-block` | Chiếm toàn bộ chiều rộng |
| `.btn-sm` | Kích thước nhỏ trong thẻ/khung |
| `.btn.disabled` | Mờ, không tương tác |

### Thông tin và trạng thái

- `.badge`, `.badge-soft`, `.badge-dark`, `.badge-outline` — nhãn trạng thái.
- `.alert`, `.alert-info`, `.alert-error`, `.alert-success` — khối thông báo.
- `.empty` — trạng thái trống với biểu tượng, tiêu đề, mô tả và hành động.
- `.spinner` — trạng thái đang xử lý.
- `.timeline`, `.timeline-item`, `.timeline-dot` — lịch sử xử lý; mục hiện tại dùng chấm đậm.
- `.file-row` — tệp đính kèm: tên, metadata, hành động xem.
- `.code-box` — mã tham chiếu sau khi gửi thành công.
- `.map` / `.map-pin` — bản đồ giả lập cho bước chọn vị trí.
- `.stepper` — tiến trình 4 bước To-Be, bước hiện tại nổi bật.

## 6. Trạng thái bắt buộc

Mỗi luồng To-Be thể hiện tối thiểu:

- **Bình thường:** trạng thái mặc định và trạng thái đã chọn/đã nhập.
- **Lỗi nhập:** thiếu trường bắt buộc, mã sai định dạng.
- **Đang xử lý:** gửi/tra cứu.
- **Thành công:** xác nhận rõ ràng, bước tiếp theo.
- **Thất bại:** lỗi gửi, lỗi hệ thống, giữ dữ liệu và cho thử lại.
- **Trống:** chưa có phản ánh/lịch sử.
- **Không tìm thấy:** phân biệt với lỗi hệ thống.
- **Không có quyền:** với vị trí (F1) và phản ánh (F3).

## 7. Accessibility

- Mọi biểu tượng SVG trang trí có `aria-hidden="true"`; nhãn chữ luôn đi kèm.
- Màu không phải tín hiệu duy nhất: trạng thái luôn có chữ (badge, alert, nhãn lỗi).
- Độ tương phản chữ chính trên nền trắng đạt mức đọc tốt; chữ phụ dùng cho metadata.
- Vùng chạm của nút chính tối thiểu ~44px ở giao diện thật; trong wireframe dùng 36–44px.
- Cấu trúc heading theo thứ bậc `h1` trang → `h2` nhóm → `h3` khung.
- Không có chuyển động tự động; `scroll-behavior: smooth` chỉ áp dụng khi điều hướng neo.
- Wireframe tĩnh không thay thế kiểm thử screen reader; cần kiểm chứng khi chuyển sang UI thật.

## 8. Quy ước đặt mã khung

`AS-IS-F{chức năng}-{số}` và `TO-BE-F{chức năng}-{số}`.

- Số thứ tự phản ánh thứ tự đọc trong trang, không nhất thiết là thứ tự bấm duy nhất.
- Khung dùng chung giữ nguyên mã gốc. Ví dụ màn hình “Phản ánh kiến nghị về dịch vụ công”
  xuất hiện trong cả F1 và F2 As-Is với mã `AS-IS-F1-04`.
- Mỗi mã là `id` của `article`, cho phép liên kết neo trực tiếp, ví dụ
  `F3_View_Details_History/to-be.html#to-be-f3-01`.

## 9. Cách mở rộng

1. Thêm hoặc sửa khung trong `tools/build.py` bằng hàm `frame(...)`.
2. Dùng lại component và token trong `assets/wireframe.css`; tránh style nội tuyến mới nếu có thể.
3. Chạy lại `python3 wireframes/tools/build.py`.
4. Cập nhật `function-screen-mapping.md` và số đếm trong README nếu thêm/bớt khung.
