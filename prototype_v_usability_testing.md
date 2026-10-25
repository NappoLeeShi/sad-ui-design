# Prototype và Usability Testing: Mẫu thử nghiệm và kiểm thử khả năng sử dụng

## Khái niệm

Prototype là bản mô phỏng giao diện/tương tác (Wireframe đến mô hình tương tác) để thể hiện ý tưởng trước khi lập trình. Usability Testing là phương pháp quan sát người dùng thực tế thao tác trên Prototype để đánh giá khả năng sử dụng.

Khác với Heuristic Evaluation (chuyên gia đánh giá theo nguyên tắc UX), Usability Testing tập trung quan sát hành vi người dùng thực tế.

Thay vì chỉ tập trung vào chức năng kỹ thuật, người thiết kế xem xét:

- Người dùng có hiểu bố cục Wireframe và luồng thao tác không?
- Họ gặp khó khăn, nhầm lẫn hay bị tắc nghẽn ở bước nào?
- Làm thế nào để điều chỉnh thiết kế giúp người dùng hoàn thành nhiệm vụ nhanh nhất?

## Vì sao cần thiết?

Một chức năng hoạt động đúng về mặt kỹ thuật chưa chắc người dùng đã biết cách sử dụng. Người dùng có thể không hoàn thành được việc gửi phản ánh nếu giao diện quá rườm rà.

Prototype và Usability Testing giúp kiểm chứng các chức năng cốt lõi (P1) trước khi code, phát hiện sớm lỗi thiết kế để giảm thiểu chi phí sửa đổi ở giai đoạn hoàn thiện.

## Áp dụng

```text
┌──────────────────────────────────────────────────────────────────────┐
│                    1. Xây dựng Wireframe/Prototype                   │
│                                                                      │
│    Tạo bản mô phỏng cho các chức năng cốt lõi P1 của hệ thống.       │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                   2. Xây dựng kịch bản kiểm thử                      │
│                                                                      │
│       Xác định nhiệm vụ người dùng cần thực hiện (Ví dụ: Gửi/Tra cứu)│
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                 3. Thực hiện kiểm thử với người dùng                 │
│                                                                      │
│ Quan sát người dùng thao tác trên Prototype, ghi nhận khó khăn.     │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                   4. Phân tích kết quả và cải tiến                   │
│                                                                      │
│  Điều chỉnh giao diện và luồng thao tác trước khi hoàn thiện hệ thống.│
└──────────────────────────────────────────────────────────────────────┘
```

## Ví dụ

> Vấn đề

Dự án SAD (Hệ thống tiếp nhận phản ánh của người dân)
Nhóm phát triển cần đảm bảo luồng gửi phản ánh sự cố đủ đơn giản để mọi người dân đều thao tác được.

> Áp dụng Prototype & Usability Testing

Nhóm tạo Prototype tương tác cho các chức năng P1 (chuỗi từ FR-UI-01 đến FR-UI-04: Bắt đầu gửi -> Nhập thông tin -> Kiểm tra/sửa -> Gửi & nhận xác nhận), sau đó cho người dùng thao tác thử nghiệm theo tình huống gửi phản ánh.

> Quyết định thiết kế

Nhận thấy người dùng hay gửi nhầm thông tin do thiếu bước xác nhận, nhóm quyết định tinh chỉnh màn hình kiểm tra lại (FR-UI-03) và bổ sung thông báo kết quả rõ ràng (FR-UI-04).
Đây là ví dụ giả định về cách áp dụng Prototype & Usability Testing, không phải kết quả nghiên cứu thực tế.