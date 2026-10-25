# Nguyên tắc thiết kế giao diện: Usability Heuristics (Áp dụng cho Case Study)

## Khái niệm cốt lõi

**Usability Heuristics** là 10 nguyên tắc kinh nghiệm của **Jakob Nielsen (1994)** dùng để đánh giá và thiết kế giao diện. Trong bài tập này, nhóm **chọn 5 nguyên tắc có liên quan trực tiếp** đến các vấn đề của **Hệ thống tiếp nhận và xử lý phản ánh người dân** để dẫn dắt quyết định thiết kế.

| # | Heuristic | Ý nghĩa cốt lõi | Liên quan đến Case Study như thế nào? |
|---|---|---|---|
| **1** | **Visibility of system status** | Hệ thống luôn báo cho user biết "đang ở đâu", "vừa xong gì", "tiếp theo làm gì" | Progress bar 4 bước, trạng thái lựa chọn danh mục/vị trí, xác nhận đã gửi thành công |
| **2** | **Match between system and real world** | Dùng ngôn ngữ, khái niệm, quy tắc của người dùng (không dùng thuật ngữ kỹ thuật/hành chính) | Đổi tên danh mục: "Đèn đường không sáng" thay vì "Hạ tầng điện"; ví dụ minh họa từng loại vấn đề |
| **6** | **Recognition rather than recall** | Hiển thị lựa chọn, ví dụ, gợi ý — user không phải tự nhớ thông tin | Danh mục dạng thẻ có icon + mô tả ngắn; tìm kiếm địa chỉ gợi ý; hiển thị lại vị trí đã chọn trên bản đồ |
| **5** | **Error prevention** | Thiết kế ngăn lỗi **trước khi xảy ra** (validate real-time, confirm hành động nguy hiểm) | Validate bắt buộc từng bước; xác nhận vị trí trước khi tiếp tục; disable nút "Tiếp" khi chưa đủ điều kiện |
| **3** | **User control and freedom** | User có "lối thoát": Undo, Quay lại, Hủy, Chỉnh sửa — không bị mắc kẹt | Nút "Quay lại" ở mọi bước (giữ dữ liệu); nút "Sửa" tại màn hình Xem lại; hủy gửi thoát về trang chủ |

> **Nguyên tắc chọn**: 5 heuristic này覆盖了 case study 3 vấn đề chính: (1) Khó tìm chức năng → #1, #6; (2) Danh mục khó hiểu → #2, #6; (3) Nhập vị trí khó, dễ sai, không sửa được → #5, #3.

## Tại sao cần thiết? (Trong bối cảnh bài tập)

- **Kết nối lý thuyết – thực tiễn**: Mỗi quyết định thiết kế (wireframe, user flow) phải trích dẫn heuristic cụ thể → Slide 25 "Đối chiếu vấn đề – lý thuyết – giải pháp" sẽ súc tích, thuyết phục.
- **Tiêu chuẩn hóa đánh giá**: Heuristic Evaluation nội bộ nhóm (trước khi test user) dùng chung 5 tiêu chí này → nhất quán, không đánh giá theo cảm tính.
- **Tiết kiệm thời gian**: Thay vì bàn luận "nên hay không nên", nhóm dùng heuristic làm "luật chơi" để quyết định nhanh.

## Phương pháp hoặc quy trình thực hiện: Heuristic Evaluation cho Case Study

```text
┌──────────────────────────────────────────────────────────────────────┐
│ 1. Chuẩn bị: 3 thành viên (không phải người vẽ wireframe) làm evaluator│
│    - Phạm vi: 5 màn hình chính (Trang chủ → Chọn loại → Vị trí       │
│      → Mô tả → Xem lại/Gửi) + các nhánh lỗi                          │
│    - Checklist: 5 heuristic trên, mỗi màn hình ghi: vi phạm gì,      │
│      mức độ (Cosmetic/Minor/Major/Catastrophic), evidence, đề xuất  │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│ 2. Đánh giá độc lập (mỗi người 30-45 phút)                           │
│    - Duyệt luồng "Gửi phản ánh đèn đường hỏng" trên prototype Figma  │
│    - Ghi nhận: "Màn hình 2: không có progress bar → vi phạm #1,     │
│      Major → thêm stepper 4 bước"                                    │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│ 3. Họp tổng hợp (30 phút)                                            │
│    - Gom issue trùng, thống nhất severity, loại Cosmetic nếu ít tác  │
│      động task. Ưu tiên sửa: Catastrophic/Major → Minor              │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│ 4. Cập nhật prototype & Báo cáo                                      │
│    - Bảng: Màn hình | Heuristic | Vấn đề | Severity | Đã sửa/Chưa   │
│    - Dùng lại bảng này cho Slide 17 "Từ nguyên tắc đến quyết định"  │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
└──────────────────────────────────────────────────────────────────────┘
                    5. Usability Testing với người dùng thật (validate)
```

**Mức độ nghiêm trọng (Severity) – áp dụng cho bài tập:**
| Mức | Định nghĩa | Ví dụ trong case study |
|---|---|---|
| **Catastrophic (4)** | User không thể hoàn thành nhiệm vụ chính | Không tìm thấy nút "Gửi phản ánh"; không thể chọn vị trí |
| **Major (3)** | User hoàn thành được nhưng rất khó, sai nhiều, cần trợ giúp | Danh mục không hiểu, nhập vị trí sai liên tục, mất dữ liệu khi sửa |
| **Minor (2)** | Phiền toái nhưng không cản trở task | Không có progress bar; font chữ nhỏ; icon không rõ nghĩa |
| **Cosmetic (1)** | Chỉ thẩm mỹ, không ảnh hưởng usability | Màu sắc không đồng nhất; khoảng cách không đều |

## Ví dụ áp dụng: Heuristic Evaluation cho Case Study

> **Bối cảnh**: Đánh giá prototype **Màn hình 2: Chọn loại vấn đề** (wireframe phiên bản đầu)

| # | Heuristic | Vấn đề cụ thể (Evidence) | Severity | Quyết định thiết kế (To-Be) |
|---|---|---|---|---|
| 1 | **#1 Visibility of system status** | Không có chỉ báo bước hiện tại. User không biết đang ở bước 2/4. | Major | Thêm **Stepper** trên cùng: Trang chủ → **Chọn loại** → Vị trí → Mô tả → Xem lại. Highlight bước "Chọn loại". |
| 2 | **#2 Match system & real world** | Danh mục: "Vấn đề giao thông", "Công trình kỹ thuật", "Môi trường tự nhiên". Người dân không hiểu đèn đường thuộc nhóm nào. | Catastrophic | **Đổi tên theo ngôn ngữ đời thường**: "Đèn đường không sáng", "Đường hư/vỉa hè hỏng", "Rác thải/việc sinh", "Ngập úng/Thoát nước", "Vấn đề khác". Mỗi mục có **icon + 1 dòng ví dụ**. |
| 3 | **#6 Recognition rather than recall** | Chỉ hiển thị tên danh mục. User phải nhớ định nghĩa từng mục (đã đọc ở đâu đó). | Major | Thêm **mô tả ngắn + ví dụ** hiển thị ngay dưới tên: "Đèn đường không sáng: Đèn chiếu sáng công cộng bị hỏng, chớp tắt, không sáng". Thêm link "Chưa biết chọn mục nào?" mở modal hướng dẫn. |
| 4 | **#5 Error prevention** | Nút "Tiếp theo" luôn enable. User bấm chưa chọn danh mục → báo lỗi toast đỏ toàn màn hình. | Major | **Disable nút "Tiếp theo"** cho đến khi user chọn 1 danh mục. Khi chọn → nút bật xanh, chuyển trạng thái. Validate real-time, không chờ submit. |
| 5 | **#3 User control and freedom** | Không có nút "Quay lại". Muốn đổi danh mục phải bấm back trình duyệt → mất lựa chọn. | Minor | Thêm nút **"Quay lại trang chủ"** (góc trái) và **"Bỏ chọn"** (góc phải card danh mục). Giữ lựa chọn nếu user quay lại từ màn hình Vị trí. |

> **Kết quả sau cải tiến (dự kiến)**
>
> - Heuristic Evaluation lần 2: 0 Catastrophic, 0 Major, 2 Minor (chỉ cosmetic: khoảng cách card, màu icon).
> - Usability Testing: 9/9 người chọn đúng danh mục "Đèn đường không sáng" trong < 10 giây, 0 người hỏi "mục này là gì?".
> - Mỗi quyết định trên sẽ được trình bày tại **Slide 17 & Slide 25** của bài thuyết trình.
>
> *Lưu ý: Đây là ví dụ minh họa quy trình heuristic evaluation gắn với case study. Kết quả thực tế cập nhật sau khi đánh giá prototype.*

---

### Checklist nhanh 5 Heuristics cho Case Study (dùng khi review wireframe/prototype)

| Heuristic | Câu hỏi check (Yes/No) | Nếu "No" → Action gợi ý |
|---|---|---|
| **#1 Visibility of system status** | User nhìn 2 giây biết: đang ở màn hình nào? Bước mấy/bao nhiêu? Vừa làm xong gì? | Thêm stepper, highlight tab/menu, toast/thông báo trạng thái sau hành động |
| **#2 Match system & real world** | Mọi nhãn, danh mục, thông báo: người dân 50 tuổi, ít dùng smartphone có hiểu ngay không? | Thay thuật ngữ hành chính → ngôn ngữ đời thường; thêm ví dụ, icon minh họa |
| **#6 Recognition rather than recall** | User có phải nhớ thông tin từ màn hình trước? (danh mục đã chọn, vị trí đã đặt) | Hiển thị tóm tắt lựa chọn ở màn hình sau; cho xem lại trên bản đồ; autocomplete gợi ý |
| **#5 Error prevention** | Có validate real-time? Nút chính disable khi chưa hợp lệ? Có confirm trước hành động xóa/gửi? | Inline validation; disable/enable nút theo điều kiện; modal confirm "Bạn chắc chắn gửi?" |
| **#3 User control and freedom** | Ở mọi bước: có nút Quay lại? Có nút Sửa lựa chọn? Dữ liệu có bị mất khi quay lại? | Nút back giữ state; màn hình Xem lại có nút "Sửa" từng section; không clear form khi navigation |