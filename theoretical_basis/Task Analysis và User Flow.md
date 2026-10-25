
# 1. Task Analysis và User Flow: Phân tích nhiệm vụ, luồng thao tác

## 1. Khái niệm cốt lõi

**Task Analysis (Phân tích nhiệm vụ)** là quá trình phân tích mục tiêu, các bước thực hiện và khó khăn của người dùng khi sử dụng hệ thống để hoàn thành một công việc.

**User Flow (Luồng thao tác người dùng)** là sơ đồ mô tả các bước, màn hình, hành động và lựa chọn mà người dùng đi qua để hoàn thành một nhiệm vụ, bao gồm cả các nhánh xử lý ngoại lệ.

Hai khái niệm có mối liên hệ chặt chẽ: Task Analysis xác định người dùng cần làm gì, còn User Flow mô tả cách người dùng thực hiện nhiệm vụ đó.

## 2. Tại sao cần thiết?

Một hệ thống có đầy đủ chức năng chưa chắc đã dễ sử dụng. Nếu người dân khó tìm chức năng, không hiểu cách thao tác hoặc không biết xử lý khi xảy ra lỗi, họ có thể không hoàn thành được nhiệm vụ.

Task Analysis và User Flow giúp:
- Hiểu rõ mục tiêu và nhu cầu của người dùng.
- Phát hiện thao tác thừa, điểm gây nhầm lẫn và nguy cơ xảy ra lỗi.
- Thiết kế luồng màn hình rõ ràng, nhất quán với yêu cầu hệ thống.
- Xây dựng kịch bản kiểm thử để đánh giá khả năng hoàn thành nhiệm vụ và cải tiến giao diện.

## 3. Phương pháp hoặc quy trình thực hiện

Có thể thực hiện theo 4 bước:

1. **Xác định người dùng và mục tiêu:** Xác định ai sử dụng hệ thống và họ cần hoàn thành nhiệm vụ gì.
2. **Phân tích nhiệm vụ:** Chia mục tiêu thành các bước nhỏ, xác định dữ liệu cần nhập và khó khăn có thể gặp.
3. **Xây dựng User Flow:** Mô tả các màn hình, hành động, điểm quyết định và nhánh xử lý lỗi.
4. **Kiểm thử và cải tiến:** Cho người dùng thử prototype, ghi nhận vấn đề và điều chỉnh luồng thao tác.

Khi thực hiện, cần tập trung vào từng mục tiêu cụ thể, bảo đảm các bước rõ ràng và có hướng xử lý khi xảy ra lỗi.

## 4. Ví dụ áp dụng

**Bối cảnh**

Hệ thống tiếp nhận và xử lý phản ánh của người dân hỗ trợ hai nhiệm vụ chính: gửi phản ánh mới và tra cứu trạng thái xử lý của phản ánh đã gửi.

### 4.1. Luồng 1: Gửi phản ánh

**Mục tiêu:** Giúp người dân gửi thông tin về sự cố hoặc vấn đề cần cơ quan chức năng xử lý.

**Các bước thực hiện:**
1. Truy cập trang chủ.
2. Chọn chức năng “Gửi phản ánh”.
3. Chọn loại vấn đề cần phản ánh.
4. Nhập nội dung và thông tin liên quan.
5. Xác định vị trí xảy ra sự việc.
6. Đính kèm hình ảnh nếu cần.
7. Kiểm tra thông tin và gửi phản ánh.

**User Flow:**

```text
[Bắt đầu]
    ↓
[Trang chủ]
    ↓
[Gửi phản ánh]
    ↓
[Chọn loại vấn đề]
    ↓
[Nhập nội dung phản ánh]
    ↓
[Xác định vị trí]
    ↓
[Đính kèm hình ảnh nếu cần]
    ↓
[Kiểm tra thông tin]
    ↓
{Thông tin hợp lệ?}
    ├── Không → [Thông báo lỗi]
    │                ↓
    │        [Chỉnh sửa thông tin]
    │                ↓
    │        [Kiểm tra lại]
    │
    └── Có → [Gửi phản ánh]
                  ↓
           {Gửi thành công?}
              ├── Có → [Thông báo thành công]
              │              ↓
              │       [Hiển thị mã phản ánh]
              │
              └── Không → [Thông báo lỗi]
                                ↓
                         [Cho phép thử lại]
```

**Áp dụng vào thiết kế:**
- Thiết kế biểu mẫu dễ hiểu, chỉ yêu cầu thông tin cần thiết.
- Hiển thị lỗi gần trường cần chỉnh sửa và giữ lại dữ liệu đã nhập.
- Cho phép người dân kiểm tra thông tin trước khi gửi.
- Khi gửi thành công, hiển thị mã phản ánh để sử dụng khi tra cứu.

### 4.2. Luồng 2: Xem trạng thái phản ánh

**Mục tiêu:** Giúp người dân tra cứu tiến độ xử lý của phản ánh đã gửi.

**Các bước thực hiện:**
1. Truy cập trang chủ.
2. Chọn chức năng “Tra cứu phản ánh”.
3. Nhập mã phản ánh hoặc thông tin tra cứu theo phương thức hệ thống hỗ trợ.
4. Thực hiện tra cứu.
5. Xem thông tin và trạng thái xử lý.

**User Flow:**

```text
[Bắt đầu]
    ↓
[Trang chủ]
    ↓
[Tra cứu phản ánh]
    ↓
[Nhập mã phản ánh/thông tin tra cứu]
    ↓
[Tra cứu]
    ↓
{Thông tin hợp lệ?}
    ├── Không → [Thông báo thông tin chưa hợp lệ]
    │                    ↓
    │             [Nhập lại thông tin]
    │                    ↓
    │                [Tra cứu]
    │
    └── Có → {Tìm thấy phản ánh?}
                  ├── Không → [Thông báo không tìm thấy]
                  │                    ↓
                  │             [Kiểm tra lại thông tin]
                  │
                  └── Có → [Hiển thị chi tiết phản ánh]
                                  ↓
                           [Hiển thị trạng thái]
                                  ↓
                              [Kết thúc]
```

