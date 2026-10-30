# PHẦN: PROTOTYPE VÀ USABILITY TESTING
## Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

- **Case study:** Hệ thống tiếp nhận và xử lý phản ánh của người dân (SAD)
- **Phạm vi:** Trình bày chi tiết khái niệm cốt lõi, vai trò, quy trình thực hiện và ví dụ áp dụng thực tế gắn liền với các chức năng cốt lõi (P1) của đồ án.

---

## 1. Khái niệm cốt lõi

### 1.1. Prototype (Mẫu thử tương tác)
- **Định nghĩa:** Prototype là mô hình mô phỏng giao diện và luồng điều hướng của ứng dụng trước khi tiến hành lập trình chính thức (Coding).
- **Mức độ chân thực (Fidelity):**
  - **Low-fidelity (Lo-fi):** Wireframe đen trắng hoặc phác thảo khung cơ bản nhằm định hình cấu trúc thông tin (Information Architecture) và bố cục màn hình (Layout).
  - **High-fidelity (Hi-fi):** Mẫu thử hoàn chỉnh về mặt thị giác (màu sắc, typography, hình ảnh) và có thể tương tác bấm nút, chuyển màn hình như một ứng dụng thật.

### 1.2. Usability Testing (Kiểm chứng khả năng sử dụng)
- **Định nghĩa:** Usability Testing là phương pháp đánh giá giao diện bằng cách quan sát người dùng thực tế thao tác trực tiếp trên prototype nhằm phát hiện các điểm nghẽn trải nghiệm.
- **Phân biệt với Heuristic Evaluation:**
  - *Heuristic Evaluation:* Chuyên gia tự đánh giá giao diện dựa trên các nguyên tắc thiết kế có sẵn (như 10 nguyên tắc của Jakob Nielsen).
  - *Usability Testing:* Quan sát hành vi, thao tác thực tế và lắng nghe phản hồi của người dùng cuối khi họ tự thực hiện các nhiệm vụ được giao.

---

## 2. Vì sao Prototype và Usability Testing là cần thiết?

- **Hệ thống chạy đúng kỹ thuật chưa chắc đã dễ dùng:** Một chức năng hoàn thiện về mặt lập trình vẫn có thể khiến người dân bối rối nếu điều hướng rườm rà hoặc thuật ngữ khó hiểu.
- **Phát hiện sớm lỗi thiết kế với chi phí tối thiểu:** Việc thay đổi một nút bấm, bố cục hoặc luồng thao tác trên prototype tốn ít thời gian và chi phí hơn rất nhiều so với việc sửa code hệ thống chính thức ở giai đoạn sau.
- **Loại bỏ sự chủ quan của nhà phát triển:** Đội ngũ xây dựng thường quen thuộc với hệ thống nên thấy mọi thứ đều dễ, trong khi người dân (với năng lực công nghệ đa dạng) có thể gặp khó khăn ở những điểm không ngờ tới.
- **Kiểm chứng giả thiết thiết kế:** Kiểm tra xem các giải pháp đề xuất (ví dụ: dùng bản đồ kết hợp tìm kiếm vị trí, cải thiện thông báo lỗi) có thực sự giải quyết được các vấn đề đã quan sát hay không.

---

## 3. Quy trình thực hiện Prototype và Usability Testing

```text
┌──────────────────────────────────────────────────────────────────────┐
│                  1. Xây dựng Wireframe / Prototype                   │
│                                                                      │
│   Thiết kế mẫu thử tương tác cho các chức năng cốt lõi (P1) của hệ   │
│   thống (từ trang chủ, biểu mẫu, đến màn hình xác nhận kết quả).     │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                    2. Xây dựng kịch bản kiểm thử                     │
│                                                                      │
│   Thiết kế các nhiệm vụ cụ thể gắn với bối cảnh thực tế của người    │
│   dân (Ví dụ: Gửi phản ánh sự cố, tra cứu trạng thái phản ánh).      │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                 3. Thực hiện kiểm thử với người dùng                 │
│                                                                      │
│   Quan sát người dùng thao tác độc lập trên prototype, ghi nhận thời │
│   gian, lỗi phát sinh và lắng nghe phản hồi ("Think-aloud").         │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                   4. Phân tích kết quả và cải tiến                   │
│                                                                      │
│   Tổng hợp khó khăn, ưu tiên sửa lỗi nghiêm trọng và tinh chỉnh giao │
│   diện luồng thao tác trước khi chuyển giao hoàn thiện hệ thống.     │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. Ví dụ áp dụng thực tế trong Case Study (SAD)

### 4.1. Bối cảnh và Nhiệm vụ kiểm thử
- **Dự án:** Hệ thống tiếp nhận và xử lý phản ánh của người dân (SAD).
- **Mục tiêu kiểm thử:** Kiểm tra xem người dân có hoàn thành luồng gửi phản ánh sự cố (`FR-UI-01` đến `FR-UI-04`) một cách suôn sẻ hay không.
- **Kịch bản nhiệm vụ giao cho người tham gia:** *"Bạn phát hiện một bóng đèn đường bị hỏng tại khu phố của mình. Hãy bắt đầu từ trang chủ, điền thông tin, xác định vị trí và gửi phản ánh."*

### 4.2. Bảng ghi nhận kết quả kiểm thử (Minh họa)

| Người tham gia | Hoàn thành nhiệm vụ? | Thời gian | Lỗi / Vấn đề quan sát được | Phản hồi thực tế |
|---|---|---|---|---|
| **Người dùng A** (42 tuổi) | Có | 40 giây | 0 lỗi | Tìm thấy nút "Gửi phản ánh" ngay trang chủ; thao tác chọn danh mục nhanh chóng. |
| **Người dùng B** (29 tuổi) | Có | 55 giây | 1 lần nhầm | Bấm nhầm nút "Hủy" thay vì "Tiếp tục" ở màn hình xem lại vì hai nút có màu sắc ngang nhau. |
| **Người dùng C** (58 tuổi) | Không hoàn thành (Dừng ở bước chọn vị trí) | 85 giây | 2 lần lúng túng | Gặp khó khăn khi xác định điểm trên bản đồ số; mong muốn có thêm ô nhập địa chỉ thủ công. |

### 4.3. Từ kết quả kiểm thử đến Quyết định cải tiến thiết kế
1. **Khắc phục vấn đề của Người dùng B:** Nút "Hủy" và "Tiếp tục" có trọng lượng thị giác tương đương gây nhầm lẫn $\rightarrow$ **Cải tiến:** Đổi nút "Tiếp tục" thành màu chủ đạo nổi bật (Primary), chuyển nút "Hủy" thành dạng văn bản phụ (Text button) để phân cấp rõ ràng.
2. **Khắc phục vấn đề của Người dùng C:** Tránh phụ thuộc hoàn toàn vào bản đồ số đối với người ít rành công nghệ $\rightarrow$ **Cải tiến:** Bổ sung ô nhập địa chỉ văn bản thủ công song song với bản đồ số (tuân thủ nguyên tắc *Error Prevention* và *User Control and Freedom*).
