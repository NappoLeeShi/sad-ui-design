# Usability: Khả năng sử dụng và tiêu chí đánh giá

## Khái niệm

Usability (khả năng sử dụng) là mức độ mà một sản phẩm cho phép những người dùng cụ thể đạt được mục tiêu của họ một cách **hiệu quả**, **hiệu suất** và **hài lòng** trong một **bối cảnh sử dụng cụ thể** (theo cách tiếp cận của ISO 9241-11).

Ba tiêu chí đánh giá:

- **Effectiveness (Hiệu quả):** Người dùng có hoàn thành đúng nhiệm vụ không?
- **Efficiency (Hiệu suất):** Họ mất bao lâu, cần bao nhiêu thao tác, mắc bao nhiêu lỗi?
- **Satisfaction (Mức độ hài lòng):** Trải nghiệm có dễ hiểu và dễ chịu không?

Lưu ý: usability không phải là thuộc tính cố định của giao diện. Cùng một giao diện có thể dễ dùng với nhóm người dùng này nhưng khó dùng với nhóm khác, nên luôn phải xét theo ai dùng, làm nhiệm vụ gì, trong hoàn cảnh nào.

## Vì sao cần thiết?

Giao diện đẹp hoặc đủ chức năng chưa chắc đã dễ dùng. Người dùng vẫn có thể không tìm thấy chức năng, chọn nhầm mục hoặc bỏ dở giữa chừng.

Với hệ thống dịch vụ công, người dùng có trình độ công nghệ rất khác nhau, nên cần có tiêu chí cụ thể để đánh giá thiết kế bằng việc người dùng làm được gì, thay vì cảm nhận chủ quan của nhóm thiết kế.

## Áp dụng

```
┌──────────────────────────────────────────────────────────────────────┐
│                     1. Xác định bối cảnh sử dụng                     │
│                                                                      │
│          Ai dùng? Nhiệm vụ gì? Dùng ở đâu, trên thiết bị nào?        │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                  2. Chọn nhiệm vụ cần đánh giá                       │
│                                                                      │
│        Chọn các nhiệm vụ chính, cụ thể, có điểm bắt đầu và kết thúc. │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│               3. Gắn chỉ số cho từng tiêu chí                        │
│                                                                      │
│              Hiệu quả  |  Hiệu suất  |  Mức độ hài lòng             │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│               4. Thu thập dữ liệu khi người dùng thao tác            │
│                                                                      │
│              Quan sát, ghi nhận, hỏi phản hồi sau khi làm.           │
└──────────────────────────────────────────────────────────────────────┘
                                  ↓
┌──────────────────────────────────────────────────────────────────────┐
│                      5. Phân tích và cải tiến                        │
│                                                                      │
│       Tìm điểm gây khó khăn, sửa thiết kế rồi đánh giá lại.          │
└──────────────────────────────────────────────────────────────────────┘
```

Chỉ số gợi ý cho từng tiêu chí:

| Tiêu chí | Câu hỏi cần trả lời | Chỉ số đo |
|---|---|---|
| Hiệu quả | Hoàn thành đúng nhiệm vụ không? | Tỷ lệ hoàn thành nhiệm vụ, số lỗi nghiêm trọng (chọn sai danh mục, sai vị trí) |
| Hiệu suất | Tốn bao nhiêu công sức? | Thời gian hoàn thành, số thao tác/lần quay lại không cần thiết, mức độ cần trợ giúp |
| Hài lòng | Dùng có dễ chịu không? | Phản hồi ngắn sau khi làm, thang điểm tự đánh giá (ví dụ SUS), bước người dùng thấy khó hiểu nhất |

## Ví dụ

> Vấn đề

Người dân muốn gửi phản ánh về một đèn đường bị hỏng, nhưng ứng dụng có nhiều chức năng nên có thể khó tìm mục "Gửi phản ánh", và một số danh mục khó hiểu.

> Áp dụng Usability

Nhóm xác định bối cảnh: người dân có trình độ công nghệ khác nhau, thao tác trên điện thoại. Nhiệm vụ đánh giá là "Gửi phản ánh về đèn đường hỏng". Với nhiệm vụ này, nhóm theo dõi ba nhóm chỉ số:

- Hiệu quả: người dùng có đi đến bước gửi và chọn đúng danh mục không?
- Hiệu suất: mất bao lâu, có phải quay lại nhiều lần không?
- Hài lòng: người dùng thấy bước nào khó hiểu nhất?

> Quyết định thiết kế

Nếu quan sát thấy nhiều người mất thời gian tìm nút gửi hoặc chọn nhầm danh mục, nhóm sẽ đưa "Gửi phản ánh" lên vị trí dễ thấy hơn và thêm mô tả, ví dụ cho từng danh mục, rồi kiểm thử lại. Đây là ví dụ giả định về cách áp dụng usability, không phải kết quả kiểm thử thực tế.