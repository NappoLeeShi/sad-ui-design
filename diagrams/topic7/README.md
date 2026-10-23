# Topic 7 — Bộ User Flow và Activity Diagram

## 1. Mục đích

Thư mục này chứa 5 luồng người dùng (Mermaid User Flow) và 5 sơ đồ hoạt động (PlantUML UML Activity Diagram) cho chức năng phản ánh trên giao diện di động:

- 5 tệp nguồn Mermaid: `*.mmd`
- 5 tệp nguồn PlantUML: `*.puml`
- 10 tệp SVG và 10 tệp PNG đã render trong `rendered/`

Mỗi chức năng có hai góc nhìn:

- **User Flow**: người dùng nhìn thấy màn hình nào, thực hiện thao tác gì, nhận phản hồi gì và đi tiếp ra sao.
- **Activity Diagram**: tác nhân và hệ thống luân phiên xử lý những bước nào, điều kiện, vòng lặp, nhánh lỗi và điểm kết thúc.

## 2. Nguồn tài liệu và giới hạn phạm vi

Đã đọc và đối chiếu:

- `theoretical_basis/functional specification_demo.md`: nguồn chính cho phạm vi chức năng và mã `FR-UI-01..07`.
- `plan/Dan_y_Topic_7_Thiet_ke_giao_dien_va_kiem_chung_luong_thao_tac.md`: bối cảnh Topic 7, gợi ý biểu mẫu và các bước giao diện.
- `plan/plan.md`: yêu cầu chung của bài.
- `theoretical_basis/1-ucd.md`: tác nhân và quan hệ use case.

Giới hạn quan trọng:

- Đặc tả chức năng hiện chỉ mô tả **ACT-01 Người dân** và các yêu cầu `FR-UI-01..07`.
- **F4 và F5 không nằm trong đặc tả Topic 7**. Đây là các luồng mở rộng cho vai trò cán bộ, được xây dựng ở mức khái quát và phải được xác nhận trước khi dùng như đặc tả chính thức.
- Không có yêu cầu chính thức về danh mục vấn đề, bộ trạng thái, SLA, thông báo, phê duyệt, chuyển tiếp hay cơ chế xác thực. Các sơ đồ không tự đặt ra những giá trị này.

## 3. Năm chức năng

| Mã | Chức năng | Tác nhân | Nguồn đặc tả | Ghi chú |
|---|---|---|---|---|
| F1 | Gửi phản ánh | Người dân | `FR-UI-01..04`, `FR-UI-07`; Flow A | Luồng chính của Topic 7 |
| F2 | Tra cứu trạng thái phản ánh | Người dân | `FR-UI-05`, `FR-UI-07`; Flow B | Tra cứu bằng mã tham chiếu là giả định |
| F3 | Xem chi tiết và lịch sử xử lý | Người dân | `FR-UI-06`, `FR-UI-07` | Lịch sử chỉ hiển thị khi có dữ liệu |
| F4 | Tiếp nhận và phân loại phản ánh | Cán bộ tiếp nhận (giả định) | Ngoài phạm vi Topic 7 | Luồng mở rộng, cần xác nhận |
| F5 | Cập nhật tiến độ hoặc kết quả xử lý | Cán bộ xử lý (giả định) | Ngoài phạm vi Topic 7 | Luồng mở rộng, cần xác nhận |

## 4. Tóm tắt luồng

### F1 — Gửi phản ánh

- **Luồng chính:** Trang chính → mở biểu mẫu → chọn loại vấn đề → chọn/xác nhận vị trí → nhập mô tả, đính kèm ảnh nếu có → xem lại → gửi → nhận xác nhận và mã tham chiếu nếu hệ thống hỗ trợ.
- **Nhánh lỗi/ngoại lệ:** Không mở được biểu mẫu; chưa chọn loại; không có quyền vị trí; chưa xác nhận vị trí; dữ liệu không hợp lệ; gửi thất bại.
- **Khả năng phục hồi:** Thử lại, quay lại chỉnh sửa, giữ dữ liệu đã nhập, quay về trang chính.
- **Kết thúc:** Gửi thành công; hoặc dừng sau khi người dân chọn không thử lại.

### F2 — Tra cứu trạng thái phản ánh

- **Luồng chính:** Trang chính → nhập mã tham chiếu → tra cứu → xem trạng thái hiện tại và thời điểm cập nhật nếu có.
- **Nhánh lỗi/ngoại lệ:** Mã không hợp lệ; không tìm thấy phản ánh; lỗi hệ thống khi tra cứu.
- **Khả năng phục hồi:** Sửa mã và tra cứu lại; thử lại khi lỗi hệ thống; quay về trang chính.
- **Kết thúc:** Xem được trạng thái; không có kết quả; hoặc quay về trang chính.

### F3 — Xem chi tiết và lịch sử xử lý

- **Luồng chính:** Danh sách kết quả → chọn phản ánh → xem chi tiết → xem trạng thái, thời điểm cập nhật và lịch sử nếu có → quay lại danh sách.
- **Nhánh lỗi/ngoại lệ:** Phản ánh không còn tồn tại; người dùng không có quyền xem.
- **Khả năng phục hồi:** Quay lại danh sách kết quả; không tiết lộ dữ liệu khi không có quyền.
- **Kết thúc:** Quay lại danh sách kết quả.

### F4 — Tiếp nhận và phân loại phản ánh

- **Luồng chính:** Mở hàng đợi → chọn phản ánh → kiểm tra quyền → xem nội dung → kiểm tra thông tin → chọn phân loại từ danh sách hệ thống cung cấp → xác nhận tiếp nhận → lưu kết quả.
- **Nhánh lỗi/ngoại lệ:** Không có phản ánh chờ; không có quyền; thông tin thiếu/không hợp lệ; phân loại chưa hợp lệ; lưu thất bại; không còn đủ điều kiện tiếp nhận.
- **Khả năng phục hồi:** Chọn lại phân loại; thử lại khi lưu thất bại; quay về danh sách.
- **Kết thúc:** Phản ánh được tiếp nhận và phân loại; hoặc quay về danh sách.

### F5 — Cập nhật tiến độ hoặc kết quả xử lý

- **Luồng chính:** Mở danh sách phản ánh được phân công → chọn phản ánh → kiểm tra quyền → chọn trạng thái mới từ danh sách hỗ trợ → nhập ghi chú/kết quả → xem lại → kiểm tra điều kiện cập nhật → lưu → xem xác nhận.
- **Nhánh lỗi/ngoại lệ:** Không có phản ánh được phân công; không có quyền; dữ liệu không hợp lệ; phản ánh không còn phù hợp để cập nhật; lưu thất bại.
- **Khả năng phục hồi:** Chỉnh sửa và gửi lại; thử lại khi lưu thất bại; quay về danh sách.
- **Kết thúc:** Cập nhật được lưu; hoặc quay về danh sách.

## 5. Danh mục tệp nguồn

| Chức năng | User Flow (Mermaid) | Activity Diagram (PlantUML) |
|---|---|---|
| F1 | [F1_Submit_Report_User_Flow.mmd](F1_Submit_Report_User_Flow.mmd) | [F1_Submit_Report_Activity_Diagram.puml](F1_Submit_Report_Activity_Diagram.puml) |
| F2 | [F2_Check_Report_Status_User_Flow.mmd](F2_Check_Report_Status_User_Flow.mmd) | [F2_Check_Report_Status_Activity_Diagram.puml](F2_Check_Report_Status_Activity_Diagram.puml) |
| F3 | [F3_Report_Details_and_History_User_Flow.mmd](F3_Report_Details_and_History_User_Flow.mmd) | [F3_Report_Details_and_History_Activity_Diagram.puml](F3_Report_Details_and_History_Activity_Diagram.puml) |
| F4 | [F4_Receive_and_Classify_Report_User_Flow.mmd](F4_Receive_and_Classify_Report_User_Flow.mmd) | [F4_Receive_and_Classify_Report_Activity_Diagram.puml](F4_Receive_and_Classify_Report_Activity_Diagram.puml) |
| F5 | [F5_Update_Processing_User_Flow.mmd](F5_Update_Processing_User_Flow.mmd) | [F5_Update_Processing_Activity_Diagram.puml](F5_Update_Processing_Activity_Diagram.puml) |

## 6. Tệp đã render

Mỗi chức năng có một SVG và một PNG. PNG được xuất ở tỉ lệ 3x để dùng trong báo cáo/slide.

| Chức năng | Loại | SVG | PNG 3x |
|---|---|---|---|
| F1 | User Flow | [SVG](rendered/F1_Submit_Report_User_Flow.svg) | [PNG](rendered/F1_Submit_Report_User_Flow.png) |
| F1 | Activity | [SVG](rendered/F1_Submit_Report_Activity_Diagram.svg) | [PNG](rendered/F1_Submit_Report_Activity_Diagram.png) |
| F2 | User Flow | [SVG](rendered/F2_Check_Report_Status_User_Flow.svg) | [PNG](rendered/F2_Check_Report_Status_User_Flow.png) |
| F2 | Activity | [SVG](rendered/F2_Check_Report_Status_Activity_Diagram.svg) | [PNG](rendered/F2_Check_Report_Status_Activity_Diagram.png) |
| F3 | User Flow | [SVG](rendered/F3_Report_Details_and_History_User_Flow.svg) | [PNG](rendered/F3_Report_Details_and_History_User_Flow.png) |
| F3 | Activity | [SVG](rendered/F3_Report_Details_and_History_Activity_Diagram.svg) | [PNG](rendered/F3_Report_Details_and_History_Activity_Diagram.png) |
| F4 | User Flow | [SVG](rendered/F4_Receive_and_Classify_Report_User_Flow.svg) | [PNG](rendered/F4_Receive_and_Classify_Report_User_Flow.png) |
| F4 | Activity | [SVG](rendered/F4_Receive_and_Classify_Report_Activity_Diagram.svg) | [PNG](rendered/F4_Receive_and_Classify_Report_Activity_Diagram.png) |
| F5 | User Flow | [SVG](rendered/F5_Update_Processing_User_Flow.svg) | [PNG](rendered/F5_Update_Processing_User_Flow.png) |
| F5 | Activity | [SVG](rendered/F5_Update_Processing_Activity_Diagram.svg) | [PNG](rendered/F5_Update_Processing_Activity_Diagram.png) |

Kích thước tham khảo (SVG làm tròn theo `viewBox`):

| Chức năng | User Flow SVG | Activity SVG | User Flow PNG | Activity PNG |
|---|---|---|---|---|
| F1 | 1619 × 3599 | 1488 × 2854 | 4858 × 10798 | 4464 × 8562 |
| F2 | 1289 × 1805 | 1869 × 770 | 3866 × 5414 | 5607 × 2310 |
| F3 | 1118 × 1944 | 1591 × 991 | 3355 × 5831 | 4773 × 2973 |
| F4 | 1159 × 2334 | 1835 × 2075 | 3477 × 7002 | 5505 × 6225 |
| F5 | 1323 × 2564 | 1607 × 2350 | 3969 × 7692 | 4821 × 7050 |

F1 User Flow là sơ đồ cao nhất; nên đặt trên trang dọc hoặc dùng SVG khi trình chiếu để giữ độ nét.

## 7. Quy ước trình bày

### User Flow (Mermaid)

- Hình bầu dục màu xanh đậm: bắt đầu/kết thúc.
- Hình chữ nhật màu xanh nhạt: màn hình.
- Hình chữ nhật màu vàng: thao tác của người dùng.
- Hình chữ nhật màu xanh lá nhạt: phản hồi/trạng thái đang xử lý.
- Hình chữ nhật màu đỏ nhạt: lỗi hoặc thông báo ngoại lệ.
- Hình thoi màu tím nhạt: điểm quyết định.
- Cạnh có nhãn: điều kiện rẽ nhánh.

### Activity Diagram (PlantUML)

- Swimlane tách tác nhân và hệ thống.
- `start`/`stop` cho điểm bắt đầu/kết thúc.
- Hình thoi cho điều kiện; `while`/`repeat` cho vòng lặp khi cần.
- Nhánh lỗi quay lại bước sửa hoặc kết thúc an toàn, không tạo vòng lặp vô hạn.

## 8. Cách render

### PlantUML

Cần Java và một tệp `plantuml.jar`. Trong môi trường hiện tại đã dùng PlantUML 1.2025.4 tại `/tmp/tools/plantuml.jar` (không đưa jar vào repo).

```bash
cd diagrams/topic7
java -jar /path/to/plantuml.jar -tsvg -o rendered *.puml

for f in rendered/*.svg; do
  rsvg-convert -z 3 --background-color=white "$f" -o "${f%.svg}.png"
done
```

PlantUML dùng `!pragma layout smetana`, nên không cần Graphviz.

### Mermaid

Cách khuyến nghị nếu có Node.js:

```bash
cd diagrams/topic7
npx -y @mermaid-js/mermaid-cli \
  -i F1_Submit_Report_User_Flow.mmd \
  -o rendered/F1_Submit_Report_User_Flow.svg \
  -b white

npx -y @mermaid-js/mermaid-cli \
  -i F1_Submit_Report_User_Flow.mmd \
  -o rendered/F1_Submit_Report_User_Flow.png \
  -b white -w 2400
```

Trong môi trường hiện tại không có Node/npm/mmdc, nên SVG Mermaid được render qua `mermaid.ink`:

```bash
python3 - <<'PY'
import base64
import pathlib
import urllib.request

src = pathlib.Path("F1_Submit_Report_User_Flow.mmd")
dst = pathlib.Path("rendered/F1_Submit_Report_User_Flow.svg")
url = "https://mermaid.ink/svg/" + base64.urlsafe_b64encode(src.read_bytes()).decode().rstrip("=")
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
dst.write_bytes(urllib.request.urlopen(req, timeout=60).read())
PY
```

Các SVG Mermaid trong repo đã được thêm `width`/`height` theo `viewBox` và một hình chữ nhật nền trắng để hiển thị ổn định. PNG được tạo từ SVG bằng `rsvg-convert -z 3 --background-color=white`.

## 9. Giả định cần xác nhận

Các điểm sau **không được đặc tả rõ** trong tài liệu hiện có. Sơ đồ dùng cách hiểu hợp lý nhất nhưng cần giảng viên/nhóm xác nhận:

1. **Phạm vi F4/F5:** Đặc tả chỉ có ACT-01 Người dân. F4/F5 là luồng mở rộng cho cán bộ; tên vai trò, hàng đợi và quyền xử lý là giả định.
2. **Tra cứu bằng mã tham chiếu:** Lấy từ `FR-UI-04/05` và dàn ý. Không giả định người dân có tài khoản đăng nhập.
3. **Quyền xem/cập nhật:** Mô hình hóa bằng kiểm tra quyền chung; không tự đặt cơ chế đăng nhập, SSO hay phân quyền cụ thể.
4. **Trường dữ liệu F1:** Loại vấn đề, vị trí, mô tả, ảnh đính kèm (không bắt buộc) theo dàn ý. Các trường bắt buộc chính thức cần đối chiếu lại; chưa thêm thông tin liên hệ.
5. **Phương thức chọn vị trí:** Tìm kiếm, bản đồ, vị trí hiện tại và nhập thủ công. Không mô hình hóa riêng chế độ 2D/3D; nếu 3D là bắt buộc, cần bổ sung bước chọn chế độ.
6. **Lịch sử xử lý:** Chỉ hiển thị khi có dữ liệu; không tạo sự kiện giả. Khi chưa có, giao diện ghi rõ chưa có thông tin.
7. **Phân loại F4:** Không đặt tên danh mục cụ thể; chỉ mô tả chọn từ danh sách do hệ thống cung cấp.
8. **Trạng thái F5:** Không đặt tên bộ trạng thái cụ thể; chỉ mô tả chọn từ danh sách được hỗ trợ.
9. **Mã tham chiếu:** Chỉ hiển thị nếu hệ thống thực sự cấp mã; nếu không, màn hình xác nhận có thể bỏ mã.
10. **Không mô hình hóa:** Thông báo tự động, SLA, phê duyệt, chuyển tiếp, leo thang hoặc luồng phân công. F5 giả định phản ánh đã được phân công bởi một quy trình bên ngoài phạm vi tài liệu.
11. **Nội dung chữ, màu sắc và nhãn** là đề xuất thiết kế, không phải copy chính thức của sản phẩm.
12. **Trạng thái tải** (“Đang gửi…”, “Đang tra cứu…”, “Đang tải…”) là phản hồi gợi ý, không phải yêu cầu bắt buộc.

## 10. Kiểm chứng

### Kiểm tra nguồn và cú pháp

- Đúng 5 tệp `.mmd` và 5 tệp `.puml`; tất cả đều không rỗng (48–131 dòng/tệp).
- Cả 5 tệp PlantUML đều có `start` và ít nhất một `stop`.
- `java -jar /tmp/tools/plantuml.jar -checkonly diagrams/topic7/*.puml` trả về mã thoát `0`.
- Cả 5 tệp Mermaid đều render thành SVG hợp lệ qua `mermaid.ink`; không có lỗi cú pháp hoặc biểu tượng lỗi trong SVG.
- Cả 10 SVG đều mở/parse được bằng `rsvg-convert`; 10 PNG đều đọc được bằng ImageMagick `identify`.

### Đối chiếu User Flow và Activity Diagram

| Chức năng | Luồng chính | Nhánh lỗi/ngoại lệ | Kết thúc |
|---|---|---|---|
| F1 | Trang chính → biểu mẫu 4 bước → xem lại → gửi | Mở biểu mẫu, loại vấn đề, quyền vị trí, xác nhận vị trí, dữ liệu, gửi thất bại | Thành công/mã tham chiếu; quay về; dừng sau thất bại |
| F2 | Trang chính → nhập mã → tra cứu → trạng thái | Mã không hợp lệ, không tìm thấy, lỗi hệ thống | Xem trạng thái; không có kết quả; về trang chính |
| F3 | Danh sách kết quả → chi tiết → trạng thái/lịch sử | Không tồn tại, không có quyền | Quay lại danh sách |
| F4 | Hàng đợi → chọn → quyền → kiểm tra → phân loại → lưu | Hàng đợi rỗng, không quyền, thiếu/sai thông tin, phân loại sai, lưu lỗi | Đã tiếp nhận; quay lại danh sách |
| F5 | Danh sách được phân công → chọn → quyền → cập nhật → lưu | Danh sách rỗng, không quyền, dữ liệu sai, không đủ điều kiện, lưu lỗi | Đã lưu; quay lại danh sách |

Hai loại sơ đồ dùng cùng logic nghiệp vụ; khác nhau ở mức trừu tượng:

- User Flow tập trung vào màn hình, thao tác và phản hồi giao diện.
- Activity Diagram tập trung vào trách nhiệm của tác nhân/hệ thống, điều kiện, vòng lặp và cách phục hồi.

### Tính nhất quán và phạm vi

- Không có thông báo tự động, SLA, phê duyệt, chuyển tiếp hoặc tên trạng thái/danh mục cụ thể nào được đưa vào.
- F1/F2/F3 chỉ dùng các yêu cầu đã có trong đặc tả và dàn ý.
- F4/F5 được đánh dấu rõ là luồng mở rộng ngoài phạm vi đặc tả.
- Tài liệu nguồn không bị sửa; `git status --short` chỉ hiển thị thư mục mới `diagrams/`.

### Hạn chế kiểm chứng

Chưa có bước duyệt hình ảnh bằng mắt trên từng ảnh. Việc kiểm tra hiện dựa trên render thành công, kích thước, trích xuất văn bản từ SVG/PDF và đối chiếu nhánh. Trước khi nộp, nên mở ít nhất các SVG F1 và F4/F5 để kiểm tra bố cục, độ đọc của nhãn và hướng mũi tên.

## 11. Bàn giao

- [x] 5 User Flow Mermaid
- [x] 5 Activity Diagram PlantUML
- [x] 10 SVG + 10 PNG đã render
- [x] README mô tả luồng, giả định và kiểm chứng
- [ ] Xác nhận với giảng viên/nhóm về phạm vi F4/F5 và các giả định ở mục 9
- [ ] Duyệt hình ảnh trước khi đưa vào báo cáo/slide
