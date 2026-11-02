# Function — Screen Mapping

Tài liệu ánh xạ từng màn hình Salt về chức năng và luồng người dùng nguồn. Đường dẫn tệp tính từ `diagrams/topic7/wireframes/`.

## 1. Quy ước

- Mỗi dòng là **một tệp wireframe**. Cột `Tệp As-Is` và `Tệp To-Be` chỉ điền ở phía tương ứng; dấu `—` nghĩa là màn hình không thuộc phiên bản đó.
- Ánh xạ As-Is ↔ To-Be **không phải 1:1** vì luồng To-Be tách biểu mẫu thành 4 bước và bổ sung nhiều trạng thái. Vì vậy không ép ghép từng cặp màn hình; quan hệ nghiệp vụ được ghi ở mục 4.
- `Screen ID` dùng quy ước:
  - `AS-IS-F{chức năng}-{số}` — màn hình hiện tại.
  - `TO-BE-F{chức năng}-{số}` — màn hình đề xuất.
- Tham chiếu User Flow dùng tên node trong tệp `.mmd` hoặc bước trong Activity Diagram.

## 2. Bảng ánh xạ

| Chức năng | Tham chiếu User Flow | Screen ID | Tệp As-Is (nếu có) | Tệp To-Be (nếu có) |
|---|---|---|---|---|
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — Trang chủ → “Dịch vụ khác” | AS-IS-F1-01 | `F1_Submit_Report/AS_IS/W01_Navigation_Main.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — danh mục “Dịch vụ khác” | AS-IS-F1-02 | `F1_Submit_Report/AS_IS/W02_Services.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — module “Tiếp nhận góp ý, phản ánh & vướng mắc” | AS-IS-F1-03 | `F1_Submit_Report/AS_IS/W03_Feedback_Module.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — landing “Phản ánh kiến nghị về dịch vụ công” | AS-IS-F1-04 | `F1_Submit_Report/AS_IS/W04_Feedback_Landing.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — nhập thông tin phản ánh | AS-IS-F1-05 | `F1_Submit_Report/AS_IS/W05_Report_Form.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — kiểm tra trường bắt buộc | AS-IS-F1-06 | `F1_Submit_Report/AS_IS/W06_Form_Validation_Error.puml` | — |
| F1 — Gửi phản ánh | `AS_IS_VNeID_Activity_Diagram.puml` — “Tạo yêu cầu thành công” | AS-IS-F1-07 | `F1_Submit_Report/AS_IS/W07_Submission_Success.puml` | — |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `Home`, `ClickSubmit` | TO-BE-F1-01 | — | `F1_Submit_Report/TO_BE/W01_Home.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `CategoryScreen`, `PickCategory` | TO-BE-F1-02 | — | `F1_Submit_Report/TO_BE/W02_Category_Step1.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `CategoryError` | TO-BE-F1-03 | — | `F1_Submit_Report/TO_BE/W03_Category_Error.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `LocationScreen`, `PickLocation` | TO-BE-F1-04 | — | `F1_Submit_Report/TO_BE/W04_Location_Step2.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `Permission`, `PermissionError` | TO-BE-F1-05 | — | `F1_Submit_Report/TO_BE/W05_Location_Permission_Denied.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `DescribeScreen`, `EnterInfo` | TO-BE-F1-06 | — | `F1_Submit_Report/TO_BE/W06_Describe_Step3.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `DataError`, `FixData` | TO-BE-F1-07 | — | `F1_Submit_Report/TO_BE/W07_Describe_Error.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `ReviewScreen`, `EditMenu` | TO-BE-F1-08 | — | `F1_Submit_Report/TO_BE/W08_Review_Step4.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `Sending` | TO-BE-F1-09 | — | `F1_Submit_Report/TO_BE/W09_Sending.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `Success` | TO-BE-F1-10 | — | `F1_Submit_Report/TO_BE/W10_Success.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `SubmitError`, `RetrySubmit` | TO-BE-F1-11 | — | `F1_Submit_Report/TO_BE/W11_Submit_Error.puml` |
| F1 — Gửi phản ánh | `F1_Submit_Report_User_Flow.mmd` — `FormOpen`, `FormError`, `RetryOpen` | TO-BE-F1-12 | — | `F1_Submit_Report/TO_BE/W12_Form_Open_Error.puml` |
| F2 — Tra cứu trạng thái | `AS_IS_VNeID_Activity_Diagram.puml` — lịch sử yêu cầu | AS-IS-F2-01 | `F2_Check_Status/AS_IS/W01_Report_History.puml` | — |
| F2 — Tra cứu trạng thái | `AS_IS_VNeID_Activity_Diagram.puml` — không có node riêng; trạng thái trống suy luận từ màn hình lịch sử | AS-IS-F2-02 | `F2_Check_Status/AS_IS/W02_Empty_History.puml` | — |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `LookupScreen`, `EnterCode` | TO-BE-F2-01 | — | `F2_Check_Status/TO_BE/W01_Lookup.puml` |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `InputError`, `FixCode` | TO-BE-F2-02 | — | `F2_Check_Status/TO_BE/W02_Input_Error.puml` |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `Searching` | TO-BE-F2-03 | — | `F2_Check_Status/TO_BE/W03_Searching.puml` |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `Result` | TO-BE-F2-04 | — | `F2_Check_Status/TO_BE/W04_Result.puml` |
| F2 — Tra cứu trạng thái | Mở rộng từ `F2_Check_Report_Status_User_Flow.mmd` — `Result`; danh sách nhiều phản ánh là giả định | TO-BE-F2-05 | — | `F2_Check_Status/TO_BE/W05_Results_List.puml` |
| F2 — Tra cứu trạng thái | Nhánh `Found` → “Không tìm thấy” của `F2_Check_Report_Status_User_Flow.mmd`; trạng thái danh sách trống là giả định | TO-BE-F2-06 | — | `F2_Check_Status/TO_BE/W06_Empty_List.puml` |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `NotFound` | TO-BE-F2-07 | — | `F2_Check_Status/TO_BE/W07_NotFound.puml` |
| F2 — Tra cứu trạng thái | `F2_Check_Report_Status_User_Flow.mmd` — `SystemError`, `RetrySystem` | TO-BE-F2-08 | — | `F2_Check_Status/TO_BE/W08_System_Error.puml` |
| F3 — Xem chi tiết/lịch sử | `AS_IS_VNeID_Activity_Diagram.puml` — màn hình chi tiết yêu cầu | AS-IS-F3-01 | `F3_View_Details_History/AS_IS/W01_Report_Detail.puml` | — |
| F3 — Xem chi tiết/lịch sử | `AS_IS_VNeID_Activity_Diagram.puml` — xem tài liệu đính kèm | AS-IS-F3-02 | `F3_View_Details_History/AS_IS/W02_Attachment_Viewer.puml` | — |
| F3 — Xem chi tiết/lịch sử | `F3_Report_Details_and_History_User_Flow.mmd` — `Detail`, `ShowUpdate`, `History` | TO-BE-F3-01 | — | `F3_View_Details_History/TO_BE/W01_Detail_History.puml` |
| F3 — Xem chi tiết/lịch sử | `F3_Report_Details_and_History_User_Flow.mmd` — `NoUpdate`, `NoHistory` | TO-BE-F3-02 | — | `F3_View_Details_History/TO_BE/W02_Detail_No_Update.puml` |
| F3 — Xem chi tiết/lịch sử | Mở rộng từ `F3_Report_Details_and_History_User_Flow.mmd` — `Detail`; xem tệp đính kèm là giả định | TO-BE-F3-03 | — | `F3_View_Details_History/TO_BE/W03_Attachment_Viewer.puml` |
| F3 — Xem chi tiết/lịch sử | `F3_Report_Details_and_History_User_Flow.mmd` — `Loading` | TO-BE-F3-04 | — | `F3_View_Details_History/TO_BE/W04_Loading.puml` |
| F3 — Xem chi tiết/lịch sử | `F3_Report_Details_and_History_User_Flow.mmd` — `Exists`, `NotFound` | TO-BE-F3-05 | — | `F3_View_Details_History/TO_BE/W05_NotFound.puml` |
| F3 — Xem chi tiết/lịch sử | `F3_Report_Details_and_History_User_Flow.mmd` — `Permission`, `Denied` | TO-BE-F3-06 | — | `F3_View_Details_History/TO_BE/W06_No_Permission.puml` |

Tổng: **37 màn hình** — 11 As-Is, 26 To-Be.

## 3. Đối chiếu yêu cầu chức năng

| Yêu cầu | Màn hình đáp ứng |
|---|---|
| FR-UI-01 — Lối vào rõ ràng | `TO-BE-F1-01`, `TO-BE-F2-01` |
| FR-UI-02 — Chia bước và tiến trình | `TO-BE-F1-02`, `TO-BE-F1-04`, `TO-BE-F1-06`, `TO-BE-F1-08` |
| FR-UI-03 — Hướng dẫn và ví dụ | `TO-BE-F1-02`, `TO-BE-F1-04`, `TO-BE-F1-06`, `TO-BE-F2-01` |
| FR-UI-04 — Phản hồi trạng thái | `TO-BE-F1-09`, `TO-BE-F1-11`, `TO-BE-F2-03`, `TO-BE-F2-08`, `TO-BE-F3-04` |
| FR-UI-05 — Tra cứu và lọc | `TO-BE-F2-01` … `TO-BE-F2-08` |
| FR-UI-06 — Chi tiết và lịch sử | `TO-BE-F3-01` … `TO-BE-F3-06` |
| FR-UI-07 — Lỗi dễ hiểu, giữ dữ liệu, cho thử lại | `TO-BE-F1-03`, `TO-BE-F1-05`, `TO-BE-F1-07`, `TO-BE-F1-11`, `TO-BE-F1-12`, `TO-BE-F2-02`, `TO-BE-F2-07`, `TO-BE-F2-08`, `TO-BE-F3-05`, `TO-BE-F3-06` |

## 4. Quan hệ giữa các màn hình

- **F1 As-Is:** `W04_Feedback_Landing` là lối vào dùng chung; từ đây người dân có thể vào biểu mẫu hoặc xem lịch sử yêu cầu (F2 As-Is).
- **F1 To-Be:** `W01_Home` chứa cả lối vào “Gửi phản ánh” và “Tra cứu phản ánh”; `W12_Form_Open_Error` xử lý trước khi vào `W02_Category_Step1`.
- **F2 → F3 To-Be:** `TO-BE-F2-05_W05_Results_List` là nguồn để mở `TO-BE-F3-01_W01_Detail_History`.
- **F3 To-Be:** `W03_Attachment_Viewer` được mở từ `W01_Detail_History` hoặc `W02_Detail_No_Update`; cũng có thể mở từ kết quả F2.
- **Dùng chung:** các màn hình lỗi/trạng thái (`W03`, `W05`, `W07`, `W09`, `W11`, `W12` của F1; `W02`, `W03`, `W06`, `W07`, `W08` của F2; `W04`, `W05`, `W06` của F3) là trạng thái của cùng một màn hình nghiệp vụ, không phải luồng mới.

## 5. Ghi chú về độ tin cậy của ánh xạ

- Ánh xạ As-Is dựa trên **Activity Diagram**, không phải quan sát giao diện thật; tên nút và thứ tự bước là nguồn chính.
- F2 As-Is không có màn hình tra cứu trong nguồn; `W01_Report_History` là màn hình gần nhất được mô tả, `W02_Empty_History` là suy luận.
- F2 To-Be `W05_Results_List` và `W06_Empty_List` là mở rộng hợp lý từ `Result`/`Found`; cần xác nhận nếu muốn coi là đặc tả chính thức.
- F3 To-Be `W03_Attachment_Viewer` không phải node riêng trong User Flow; được thêm vì F3 As-Is có chức năng xem tài liệu và FR-UI-06 yêu cầu xem chi tiết đầy đủ.
- Chi tiết cải tiến từng màn To-Be: xem `README.md` mục 3.
