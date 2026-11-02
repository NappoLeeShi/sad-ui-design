# Wireframe Salt — VNeID Topic 7

Bộ wireframe tĩnh viết bằng **PlantUML Salt** cho ba chức năng người dân trong phạm vi Topic 7:

- **F1 — Gửi phản ánh**
- **F2 — Tra cứu trạng thái phản ánh**
- **F3 — Xem chi tiết và lịch sử xử lý**

Mỗi chức năng có hai phiên bản: **As-Is** (giao diện hiện tại) và **To-Be** (giao diện đề xuất).
Mỗi tệp `.puml` chứa đúng một wireframe Salt độc lập, bắt đầu bằng `@startsalt` và kết thúc bằng `@endsalt`.

Ánh xạ chi tiết từng màn hình về chức năng và User Flow: [`function-screen-mapping.md`](function-screen-mapping.md).

## 1. Phạm vi

### Chức năng trong phạm vi

| Mã | Chức năng | Tác nhân | Nguồn |
|---|---|---|---|
| F1 | Gửi phản ánh | Người dân | `F1_Submit_Report_User_Flow.mmd`, `AS_IS_VNeID_Activity_Diagram.puml`, FR-UI-01..04, FR-UI-07 |
| F2 | Tra cứu trạng thái phản ánh | Người dân | `F2_Check_Report_Status_User_Flow.mmd`, FR-UI-05, FR-UI-07 |
| F3 | Xem chi tiết và lịch sử xử lý | Người dân | `F3_Report_Details_and_History_User_Flow.mmd`, FR-UI-06, FR-UI-07 |

### Chức năng ngoài phạm vi

**F4 — Tiếp nhận và phân loại phản ánh** và **F5 — Cập nhật tiến độ/kết quả xử lý** không có trong bộ wireframe này.

Lý do: `diagrams/topic7/README.md` ghi rõ F4/F5 là luồng mở rộng cho vai trò cán bộ, **nằm ngoài đặc tả Topic 7**, được xây dựng ở mức khái quát và cần xác nhận trước khi dùng như đặc tả chính thức. Đặc tả chức năng hiện chỉ mô tả ACT-01 Người dân và các yêu cầu FR-UI-01..07. Vì vậy, không thiết kế wireframe cho F4/F5 để tránh tự đặt vai trò, hàng đợi, quyền xử lý và bộ trạng thái chưa được xác minh.

## 2. Phân biệt As-Is và To-Be

| Tiêu chí | As-Is | To-Be |
|---|---|---|
| Mục đích | Mô phỏng giao diện/luồng hiện có | Mô phỏng giao diện cải tiến theo kế hoạch |
| Nguồn chính | `AS_IS_VNeID_Activity_Diagram.puml` | Ba tệp User Flow To-Be, dàn ý Topic 7, FR-UI |
| Điều hướng F1 | Trang chính → Dịch vụ khác → module → landing → biểu mẫu | Trang chính có “Gửi phản ánh” nổi bật → 4 bước |
| Tra cứu F2 | Chỉ xem lịch sử yêu cầu | Tra cứu bằng mã tham chiếu, có kết quả/không kết quả/lỗi |
| Chi tiết F3 | Chi tiết và tài liệu đính kèm | Bổ sung trạng thái, thời điểm cập nhật, lịch sử xử lý |
| Trạng thái lỗi | Chỉ dựng khi nguồn xác nhận hoặc suy luận rõ | Đầy đủ: lỗi nhập, đang xử lý, thất bại, trống, không tìm thấy, không có quyền |

## 3. Danh mục màn hình

### F1 — Gửi phản ánh

**As-Is — 7 màn hình**

| Mã | Tệp | Nội dung |
|---|---|---|
| AS-IS-F1-01 | `F1_Submit_Report/AS_IS/W01_Navigation_Main.puml` | Trang chính VNeID, mục “Dịch vụ khác” |
| AS-IS-F1-02 | `F1_Submit_Report/AS_IS/W02_Services.puml` | Danh mục “Dịch vụ khác” |
| AS-IS-F1-03 | `F1_Submit_Report/AS_IS/W03_Feedback_Module.puml` | Module “Tiếp nhận góp ý, phản ánh & vướng mắc” |
| AS-IS-F1-04 | `F1_Submit_Report/AS_IS/W04_Feedback_Landing.puml` | Landing “Phản ánh kiến nghị về dịch vụ công” |
| AS-IS-F1-05 | `F1_Submit_Report/AS_IS/W05_Report_Form.puml` | Biểu mẫu phản ánh hiện tại |
| AS-IS-F1-06 | `F1_Submit_Report/AS_IS/W06_Form_Validation_Error.puml` | Lỗi trường bắt buộc |
| AS-IS-F1-07 | `F1_Submit_Report/AS_IS/W07_Submission_Success.puml` | “Tạo yêu cầu thành công” |

**To-Be — 12 màn hình**

| Mã | Tệp | Cải tiến chính |
|---|---|---|
| TO-BE-F1-01 | `F1_Submit_Report/TO_BE/W01_Home.puml` | Đưa “Gửi phản ánh” và “Tra cứu phản ánh” lên “Công cụ yêu thích” |
| TO-BE-F1-02 | `F1_Submit_Report/TO_BE/W02_Category_Step1.puml` | Bước 1/4; loại vấn đề có tên, mô tả, ví dụ |
| TO-BE-F1-03 | `F1_Submit_Report/TO_BE/W03_Category_Error.puml` | Lỗi tại chỗ khi chưa chọn loại |
| TO-BE-F1-04 | `F1_Submit_Report/TO_BE/W04_Location_Step2.puml` | Bước 2/4; tìm kiếm, bản đồ, vị trí hiện tại |
| TO-BE-F1-05 | `F1_Submit_Report/TO_BE/W05_Location_Permission_Denied.puml` | Không có quyền vị trí vẫn cho tìm/nhập thủ công |
| TO-BE-F1-06 | `F1_Submit_Report/TO_BE/W06_Describe_Step3.puml` | Bước 3/4; tóm tắt ngữ cảnh, mô tả, tệp tùy chọn |
| TO-BE-F1-07 | `F1_Submit_Report/TO_BE/W07_Describe_Error.puml` | Lỗi xác thực gần trường, giữ dữ liệu |
| TO-BE-F1-08 | `F1_Submit_Report/TO_BE/W08_Review_Step4.puml` | Bước 4/4; xem lại, sửa từng phần, cam đoan |
| TO-BE-F1-09 | `F1_Submit_Report/TO_BE/W09_Sending.puml` | Trạng thái “Đang gửi phản ánh…” |
| TO-BE-F1-10 | `F1_Submit_Report/TO_BE/W10_Success.puml` | Xác nhận thành công, mã tham chiếu, hướng dẫn tra cứu |
| TO-BE-F1-11 | `F1_Submit_Report/TO_BE/W11_Submit_Error.puml` | Phân biệt chưa gửi được, giữ dữ liệu, cho thử lại |
| TO-BE-F1-12 | `F1_Submit_Report/TO_BE/W12_Form_Open_Error.puml` | Nhánh “Không thể mở biểu mẫu” có thử lại/quay về |

### F2 — Tra cứu trạng thái

**As-Is — 2 màn hình**

| Mã | Tệp | Nội dung |
|---|---|---|
| AS-IS-F2-01 | `F2_Check_Status/AS_IS/W01_Report_History.puml` | Lịch sử yêu cầu hiện có; không có tra cứu mã/trạng thái |
| AS-IS-F2-02 | `F2_Check_Status/AS_IS/W02_Empty_History.puml` | Trạng thái trống (suy luận giao diện) |

**To-Be — 8 màn hình**

| Mã | Tệp | Cải tiến chính |
|---|---|---|
| TO-BE-F2-01 | `F2_Check_Status/TO_BE/W01_Lookup.puml` | Ô nhập mã tham chiếu, hướng dẫn định dạng |
| TO-BE-F2-02 | `F2_Check_Status/TO_BE/W02_Input_Error.puml` | Lỗi định dạng tại ô nhập, giữ dữ liệu |
| TO-BE-F2-03 | `F2_Check_Status/TO_BE/W03_Searching.puml` | Trạng thái “Đang tra cứu…” |
| TO-BE-F2-04 | `F2_Check_Status/TO_BE/W04_Result.puml` | Kết quả có trạng thái, thời điểm cập nhật, xem chi tiết |
| TO-BE-F2-05 | `F2_Check_Status/TO_BE/W05_Results_List.puml` | Danh sách phản ánh có trạng thái và thời điểm |
| TO-BE-F2-06 | `F2_Check_Status/TO_BE/W06_Empty_List.puml` | Danh sách trống có hướng dẫn gửi mới |
| TO-BE-F2-07 | `F2_Check_Status/TO_BE/W07_NotFound.puml` | Phân biệt “không tìm thấy” với lỗi hệ thống |
| TO-BE-F2-08 | `F2_Check_Status/TO_BE/W08_System_Error.puml` | Lỗi hệ thống dễ hiểu, có thử lại |

### F3 — Xem chi tiết và lịch sử

**As-Is — 2 màn hình**

| Mã | Tệp | Nội dung |
|---|---|---|
| AS-IS-F3-01 | `F3_View_Details_History/AS_IS/W01_Report_Detail.puml` | Chi tiết yêu cầu hiện tại |
| AS-IS-F3-02 | `F3_View_Details_History/AS_IS/W02_Attachment_Viewer.puml` | Xem tài liệu đính kèm |

**To-Be — 6 màn hình**

| Mã | Tệp | Cải tiến chính |
|---|---|---|
| TO-BE-F3-01 | `F3_View_Details_History/TO_BE/W01_Detail_History.puml` | Trạng thái, thời điểm cập nhật, lịch sử xử lý |
| TO-BE-F3-02 | `F3_View_Details_History/TO_BE/W02_Detail_No_Update.puml` | Ghi rõ chưa có cập nhật/lịch sử thay vì để trống |
| TO-BE-F3-03 | `F3_View_Details_History/TO_BE/W03_Attachment_Viewer.puml` | Xem tài liệu từ trang chi tiết |
| TO-BE-F3-04 | `F3_View_Details_History/TO_BE/W04_Loading.puml` | Trạng thái “Đang tải chi tiết…” |
| TO-BE-F3-05 | `F3_View_Details_History/TO_BE/W05_NotFound.puml` | Phản ánh đã xóa/đường dẫn không hợp lệ |
| TO-BE-F3-06 | `F3_View_Details_History/TO_BE/W06_No_Permission.puml` | Không có quyền xem, không tiết lộ dữ liệu |

Tổng cộng: **11 màn hình As-Is** và **26 màn hình To-Be**, tức **37 tệp `.puml`** và **37 PNG** đã render.

## 4. Nguồn tài liệu

- `diagrams/topic7/README.md` — phạm vi F1–F3, F4/F5 ngoài phạm vi, giả định.
- `diagrams/topic7/AS_IS_VNeID_Activity_Diagram.puml` — luồng As-Is.
- `diagrams/topic7/F1_Submit_Report_User_Flow.mmd` — luồng To-Be F1.
- `diagrams/topic7/F2_Check_Report_Status_User_Flow.mmd` — luồng To-Be F2.
- `diagrams/topic7/F3_Report_Details_and_History_User_Flow.mmd` — luồng To-Be F3.
- `theoretical_basis/functional specification_demo.md` — FR-UI-01..07.
- `plan/Dan_y_Topic_7_Thiet_ke_giao_dien_va_kiem_chung_luong_thao_tac.md` — định hướng cải tiến.
- `theoretical_basis/3-usability-heuristics.md` — 5 heuristic được áp dụng.

## 5. Quy ước Salt

- `title` đặt ngay sau `@startsalt`, ngoài khối `{ ... }`, để tiêu đề không bị hiểu là nội dung màn hình.
- Ô nhập một dòng: `"Nội dung..."`.
- Vùng nhập nhiều dòng: khối `{+ ... }` có dòng `"..."` và các dòng `.`.
- Droplist: `^Lựa chọn^`.
- Checkbox: `[ ]` / `[X]`; radio: `( )` / `(X)`; nút: `[Nhãn]`.
- Danh sách: dòng bắt đầu bằng `*`.
- Phân cách: `--`, `..`.
- Nhóm có nhãn: `{^"Nhãn" ... }`.
- Tab (nếu dùng) là `{/ ... }`; `{T` là tree trong Salt, không phải tab. Bộ wireframe này không dùng tab/tree để tránh nhầm lẫn.
- Biểu tượng dùng OpenIconic qua `<&tên_icon>`.
- Không dùng HTML/CSS; chỉ dùng cú pháp Salt và Creole được PlantUML hỗ trợ.

## 6. Cách render

Yêu cầu: Java 8+ và `plantuml.jar` (bản 1.2025.4 đã dùng khi tạo bộ này). Không cần Graphviz cho Salt.

Render tất cả tệp, ghi PNG cạnh từng `.puml`:

```bash
find diagrams/topic7/wireframes -name '*.puml' -print0 \
  | xargs -0 -n1 java -jar /duong/dan/plantuml.jar -tpng
```

Kiểm tra cú pháp trước khi render:

```bash
find diagrams/topic7/wireframes -name '*.puml' -print0 \
  | xargs -0 -n1 java -jar /duong/dan/plantuml.jar -checkonly
```

Render một tệp cụ thể:

```bash
java -jar /duong/dan/plantuml.jar -tpng \
  diagrams/topic7/wireframes/F1_Submit_Report/TO_BE/W01_Home.puml
```

Nếu muốn xuất SVG:

```bash
find diagrams/topic7/wireframes -name '*.puml' -print0 \
  | xargs -0 -n1 java -jar /duong/dan/plantuml.jar -tsvg
```

Trong môi trường tạo bộ này, jar nằm tại `/tmp/tools/plantuml.jar` (không đưa jar vào repository).

## 7. Giả định và điểm chưa xác minh

As-Is được dựng từ **Activity Diagram**, không phải ảnh chụp giao diện VNeID thật. Vì vậy:

1. **Bố cục, khoảng cách, biểu tượng và thanh điều hướng** là diễn giải hợp lý để tạo wireframe; chỉ các trường, nhãn và bước được Activity Diagram xác nhận mới được coi là nội dung nghiệp vụ.
2. **Trường bắt buộc As-Is:** Activity Diagram chỉ nói “kiểm tra các trường bắt buộc có dấu * đỏ”, không liệt kê trường nào. Wireframe đánh dấu Mã hồ sơ, loại phản ánh và nội dung là bắt buộc; cần xác nhận lại.
3. **Thông điệp lỗi As-Is:** câu chữ cụ thể không được đặc tả; các thông báo trong `W06` là ví dụ minh họa.
4. **F2 As-Is:** nguồn không có màn hình tra cứu bằng mã, bộ lọc hay nhãn trạng thái. Wireframe chỉ mô phỏng lịch sử yêu cầu và một trạng thái trống **suy luận**.
5. **F2 To-Be:** tra cứu bằng mã tham chiếu là giả định đã nêu trong `diagrams/topic7/README.md`.
6. **Bộ trạng thái:** “Đang xử lý”, “Đã tiếp nhận”, “Hoàn thành” chỉ là nhãn minh họa; tài liệu không quy định bộ trạng thái chính thức.
7. **Danh mục loại vấn đề:** “Đèn đường / chiếu sáng”, “Rác thải / vệ sinh môi trường”, “Đường giao thông”, “Cấp thoát nước” là ví dụ; không phải danh mục chính thức.
8. **Dữ liệu mẫu:** mã `PA-2026-000123`, `HS-2026-001234`, địa chỉ “Số 12, đường Hoa Sen, phường An Phú”, tệp `anh_den_duong.jpg`, mốc thời gian 27–28/10/2026 đều là dữ liệu hư cấu.
9. **Mã hồ sơ:** được giữ từ As-Is; quy tắc bắt buộc/định dạng chính thức chưa được xác nhận.
10. **Tệp đính kèm:** số lượng, định dạng, kích thước và cách xem chưa được đặc tả; wireframe chỉ minh họa một tệp ảnh.
11. **Trạng thái tải:** “Đang gửi…”, “Đang tra cứu…”, “Đang tải…” là phản hồi đề xuất theo FR-UI-04/07, không phải yêu cầu bắt buộc.
12. **Không mô hình hóa:** thông báo tự động, SLA, phê duyệt, chuyển tiếp, leo thang, phân công cán bộ hoặc xác thực tài khoản.

## 8. Kiểm chứng đã thực hiện

Kiểm tra tự động:

- 37/37 tệp `.puml` tồn tại, không rỗng.
- 37/37 tệp bắt đầu bằng `@startsalt` và kết thúc bằng `@endsalt`; mỗi tệp có đúng một khối Salt.
- `plantuml -checkonly` trên toàn bộ 37 tệp trả về mã thoát `0`, không có lỗi cú pháp.
- Render `-tpng` trên toàn bộ 37 tệp thành công; 37 PNG không rỗng.
- Ảnh render là thang xám (không có pixel màu), không có vùng nội dung chạm mép canvas; kích thước ảnh nằm trong khoảng 183–516 px chiều rộng, phù hợp bố cục mobile-first.
- Hai màn hình từng quá rộng (`W08_Review_Step4`, `W11_Submit_Error`) đã được sửa bố cục và render lại.

Chưa thực hiện:

- Chưa có bước **soát thị giác thủ công** trên từng PNG (môi trường tạo bộ này không có công cụ xem ảnh/OCR). Các kiểm tra trên chỉ xác nhận cú pháp, render thành công, không cắt mép và thang xám; cần mở PNG để xác nhận độ dễ đọc và căn chỉnh chi tiết.
