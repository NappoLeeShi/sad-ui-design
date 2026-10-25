# Nguyên tắc thiết kế giao diện: Usability Heuristics

## Khái niệm

Usability Heuristics là bộ nguyên tắc chung về thiết kế giao diện do Jakob Nielsen đề xuất (10 nguyên tắc). Đây là các "quy tắc ngón tay cái" giúp nhận diện và tránh những lỗi gây khó khăn cho người dùng, không phải quy định kỹ thuật cứng nhắc.

Trong bài, nhóm chọn 5 nguyên tắc liên quan trực tiếp đến case study:

- **Visibility of system status (Hiển thị trạng thái hệ thống):** Cho người dùng biết họ đang ở bước nào, hệ thống đang làm gì.
- **Match between system and the real world (Phù hợp với thế giới thực):** Dùng ngôn ngữ và khái niệm quen thuộc với người dùng.
- **Recognition rather than recall (Nhận biết hơn ghi nhớ):** Hiển thị sẵn lựa chọn, ví dụ để người dùng không phải tự nhớ.
- **Error prevention (Ngăn ngừa lỗi):** Thiết kế để hạn chế lỗi ngay từ đầu, thay vì chỉ báo lỗi sau khi xảy ra.
- **User control and freedom (Quyền kiểm soát và tự do):** Cho phép quay lại, chỉnh sửa, hủy bỏ mà không mất dữ liệu.

## Vì sao cần thiết?

Nhiều lỗi giao diện lặp đi lặp lại ở nhiều hệ thống: người dùng không biết mình đang ở đâu, không hiểu thuật ngữ, phải nhớ thông tin, nhập sai mà không được cảnh báo, hoặc không thể quay lại sửa.

Heuristics giúp nhóm thiết kế phát hiện sớm các vấn đề này, ngay cả khi chưa có người dùng thật tham gia. Với dịch vụ công, người dùng đa dạng nên các nguyên tắc này càng quan trọng. Lưu ý heuristics chỉ là cơ sở để thiết kế và đánh giá, vẫn cần kiểm thử với người dùng để xác nhận.

## Áp dụng

```
┌──────────────────────────────────────────────────────────────────────┐
│                  1. Xác định vấn đề của người dùng                   │
│                                                                      │
│           Họ gặp khó khăn ở bước nào? Vì sao khó khăn?               │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                  2. Chọn nguyên tắc liên quan                        │
│                                                                      │
│            Vấn đề này vi phạm hoặc cần áp dụng nguyên tắc nào?       │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                 3. Chuyển thành quyết định thiết kế                  │
│                                                                      │
│              Mỗi nguyên tắc dẫn đến một thay đổi cụ thể.             │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                       4. Kiểm tra lại                                │
│                                                                      │
│      Đánh giá theo nguyên tắc và kiểm thử với người dùng.            │
└──────────────────────────────────────────────────────────────────────┘
```

Từ nguyên tắc đến quyết định thiết kế trong case study:

| Nguyên tắc | Quyết định thiết kế |
|---|---|
| Visibility of system status | Hiển thị bước hiện tại (ví dụ "Bước 2/5") và thông báo kết quả sau khi gửi |
| Match between system and the real world | Đặt tên danh mục bằng ngôn ngữ đời thường, thêm mô tả ngắn và ví dụ |
| Recognition rather than recall | Hiển thị sẵn thẻ danh mục và gợi ý địa điểm, không bắt người dùng tự nhớ tên mục hay địa chỉ |
| Error prevention | Kiểm tra trường bắt buộc, yêu cầu xác nhận vị trí trước khi tiếp tục |
| User control and freedom | Cho quay lại từng bước và chỉnh sửa, dữ liệu đã nhập được giữ nguyên |

Phân biệt: **Heuristic Evaluation** là chuyên gia hoặc nhóm thiết kế đánh giá giao diện theo các nguyên tắc; **Usability Testing** là quan sát người dùng thực hiện nhiệm vụ.

## Ví dụ

> Vấn đề

Khi gửi phản ánh, người dân phải tự gõ địa chỉ của chiếc đèn đường hỏng. Nếu không nhớ tên đường, họ có thể nhập sai hoặc bỏ dở. Khi quay lại sửa mô tả, họ lo nội dung đã nhập sẽ bị mất.

> Áp dụng Heuristics

Nhóm đối chiếu vấn đề với các nguyên tắc:

- Phải tự nhớ địa chỉ: liên quan đến Recognition rather than recall.
- Nhập sai vị trí mà không biết: liên quan đến Error prevention.
- Sợ mất dữ liệu khi sửa: liên quan đến User control and freedom.

> Quyết định thiết kế

Nhóm cho phép tìm địa điểm và chọn trên bản đồ, yêu cầu xác nhận vị trí trước khi tiếp tục, và giữ lại dữ liệu khi người dùng quay lại bước trước. Đây là ví dụ giả định về cách áp dụng heuristics, không phải kết quả kiểm thử thực tế.