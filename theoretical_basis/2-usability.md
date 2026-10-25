# Usability: Khả năng sử dụng và tiêu chí đánh giá

## Khái niệm cốt lõi

**Usability (Khả năng sử dụng)** là mức độ mà một sản phẩm có thể được sử dụng bởi người dùng cụ thể để đạt được mục tiêu cụ thể với **hiệu quả** (Effectiveness), **hiệu suất** (Efficiency) và **sự hài lòng** (Satisfaction) trong một bối cảnh sử dụng nhất định (theo **ISO 9241-11**).

Ba tiêu chí cốt lõi:
- **Effectiveness (Hiệu quả)**: Người dùng có hoàn thành **đúng** nhiệm vụ và đạt **đúng** mục tiêu không? (Đo bằng: tỷ lệ hoàn thành nhiệm vụ, số lỗi nghiêm trọng).
- **Efficiency (Hiệu suất)**: Mức độ tài nguyên (thời gian, số thao tác, nỗ lực nhận thức) người dùng tiêu tốn để hoàn thành nhiệm vụ. (Đo bằng: thời gian hoàn thành, số click/nhấn, số lần quay lại).
- **Satisfaction (Sự hài lòng)**: Cảm giác chủ quan của người dùng về trải nghiệm — dễ hiểu, dễ chịu, có muốn dùng tiếp không? (Đo bằng: phiếu phản hồi, SUS, NPS, quan sát biểu cảm/thái độ).

> **Lưu ý**: ISO 9241-11 nhấn mạnh **bối cảnh sử dụng** (người dùng nào, nhiệm vụ gì, môi trường ra sao). Không đánh giá usability trừu tượng ngoài bối cảnh.

## Tại sao cần thiết? (Gắn với Case Study: Hệ thống phản ánh người dân)

Hệ thống dịch vụ công phục vụ **người dân đa dạng** (tuổi tác, trình độ công nghệ, vùng miền khác nhau). Nếu chỉ đảm bảo "có chức năng" mà bỏ qua usability:

| Rủi ro | Hậu quả thực tế |
|---|---|
| Thiếu **Effectiveness** | Người dân chọn sai danh mục vấn đề (đường hư vs đèn đường), nhập sai vị trí → phản ánh sai tuyến, cơ quan xử lý mất thời gian xác minh. |
| Thiếu **Efficiency** | Luồng gửi phản ánh quá nhiều bước, nhập lại dữ liệu khi quay lại sửa → người dân bỏ cuộc giữa chừng, tỷ lệ gửi thành công thấp. |
| Thiếu **Satisfaction** | Thuật ngữ hành chính khó hiểu, không có hướng dẫn, lỗi không báo rõ nguyên nhân → người dân nản lòng, không tin dùng dịch vụ công trực tuyến. |

Đo lường usability **trước khi triển khai** (bằng prototype) giúp phát hiện và sửa vấn đề với chi phí thấp hơn gấp 10-100 lần so với sửa sau khi đã lên sản phẩm.

## Phương pháp hoặc quy trình thực hiện

```text
┌──────────────────────────────────────────────────────────────────────┐
│ 1. Xác định bối cảnh & người dùng đại diện                           │
│    - Người dân: khác tuổi, trình độ IT, vùng đô thị/nông thôn       │
│    - Nhiệm vụ: Gửi phản ánh đèn đường hỏng, rác thải, ngập úng...   │
│    - Môi trường: Điện thoại, mạng 4G/weak, ánh nắng ngoài trời       │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│ 2. Thiết kế prototype dựa trên nguyên tắc (Heuristics, UCD)          │
│    - Ưu tiên: hiệu quả (đúng danh mục, đúng vị trí), hiệu suất      │
│      (ít bước, không nhập lại), hài lòng (ngôn ngữ đời thường)       │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│ 3. Kiểm tra Usability Testing với người dùng thật                    │
│    - Kịch bản: "Gửi phản ánh đèn đường hỏng gần chợ/Bến xe"         │
│    - Đo: Tỷ lệ hoàn thành, Thời gian, Số lỗi/quay lại, Cần trợ giúp │
│    - Ghi nhận: Bước nào khó, thuật ngữ nào gây nhầm lẫn, phản hồi   │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
└──────────────────────────────────────────────────────────────────────┘
            4. Phân tích kết quả → Cải tiến prototype → Kiểm tra lại
```

**Chỉ số đo lường trong bài tập này:**
| Chỉ số | Cách đo | Mục tiêu mong đợi |
|---|---|---|
| **Task Success Rate** | % người tham gia gửi thành công phản ánh | ≥ 90% |
| **Time on Task** | Thời gian từ trang chủ đến màn hình "Đã gửi" | ≤ 3 phút |
| **Error Count** | Số lần chọn sai danh mục, nhập sai vị trí, phải quay lại sửa | ≤ 1 lỗi/người |
| **Help Needed** | Số lần người tham gia hỏi "ô này điền gì?", "nút nào bấm?" | = 0 |
| **SUS / Phản hồi định tính** | 5-10 câu hỏi sau test + phỏng vấn ngắn | SUS ≥ 80; phản hồi tích cực |

## Ví dụ áp dụng (Case Study: Hệ thống phản ánh người dân)

> **Vấn đề quan sát được (As-Is)**
>
> - Người dân mở app, không thấy nút "Gửi phản ánh" ngay (chôn trong menu).
> - Danh mục: "Vấn đề đường bộ", "Hạ tầng điện", "Môi trường" — người dân không biết đèn đường hỏng chọn mục nào.
> - Nhập vị trí: chỉ có ô text "Địa chỉ" — người dân ở xã/thôn không nhớ tên đường chính xác.
> - Không có màn hình "Xem lại" — nhấn gửi xong không biết đã thành công hay chưa.

> **Áp dụng Usability (ISO 9241-11) để thiết kế To-Be**
>
> 1. **Effectiveness →** Đưa nút "Gửi phản ánh" lên trang chủ (Discoverability). Danh mục đổi tên: "Đèn đường không sáng", "Đường hư/vỉa hè hỏng", "Rác thải/việc sinh" — có **ví dụ minh họa** từng mục.
> 2. **Efficiency →** Vị trí: cho **tìm kiếm địa chỉ**, **chọn trên bản đồ 2D**, **dùng GPS hiện tại** — người dân chọn cách phù hợp. Thêm màn hình **Xem lại** trước khi gửi.
> 3. **Satisfaction →** Ngôn ngữ đời thường, hướng dẫn ngắn ("Chưa biết chọn mục nào?"), thông báo lỗi rõ ràng ("Vui lòng chọn vị trí trên bản đồ"), giữ dữ liệu khi quay lại sửa.

> **Kết quả kiểm thử giả định (sau khi có prototype To-Be)**
>
> - 8/9 người tham gia hoàn thành đúng luồng gửi phản ánh đèn đường hỏng.
> - Thời gian trung bình: 2 phút 15 giây (so với 6 phút hệ thống cũ).
> - 0 người hỏi trợ giúp; 1 người chọn sai danh mục lần đầu nhưng tự sửa nhờ ví dụ minh họa.
> - Phản hồi: "Dễ hiểu, không cần ai hướng dẫn", "Chọn vị trí trên bản đồ rất nhanh".
>
> *Lưu ý: Số liệu trên là ví dụ minh họa quy trình. Kết quả thực tế sẽ báo cáo sau khi kiểm thử prototype.*