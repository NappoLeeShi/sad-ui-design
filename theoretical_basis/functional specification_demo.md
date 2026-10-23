# Đặc tả chức năng sơ bộ — Topic 7
## Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

- **Dự án:** SAD — Hệ thống tiếp nhận và xử lý phản ánh của người dân
- **Phạm vi tài liệu:** Các chức năng và hành vi liên quan trực tiếp đến thiết kế giao diện, luồng thao tác và kiểm chứng khả năng sử dụng.
- **Trạng thái:** Bản đặc tả sơ bộ để làm cơ sở vẽ User Flow, Activity Diagram và Wireframe.
- **Lưu ý:** Đây là đề xuất phạm vi ban đầu. Cần đối chiếu với yêu cầu chính thức của toàn dự án trước khi chốt.

---

## 1. Mục tiêu

Đặc tả những nhiệm vụ người dùng cần thực hiện qua giao diện để nhóm có thể:

1. Xác định tác nhân, mục tiêu và điều kiện hoàn thành của từng nhiệm vụ.
2. Vẽ luồng thao tác chính, các nhánh thay thế và trường hợp lỗi.
3. Thiết kế wireframe/prototype cho các màn hình cần thiết.
4. Xây dựng kịch bản kiểm thử khả năng sử dụng (usability testing).
5. Đánh giá luồng thao tác dựa trên khả năng hoàn thành nhiệm vụ, lỗi và mức độ dễ hiểu.

Tài liệu này **không** đặc tả toàn bộ nghiệp vụ, kiến trúc, cơ sở dữ liệu hoặc API của hệ thống.

## 2. Tác nhân trong phạm vi Topic 7

| Mã | Tác nhân | Vai trò liên quan đến giao diện |
|---|---|---|
| ACT-01 | Người dân | Gửi phản ánh, xem thông tin và tra cứu trạng thái phản ánh. |

Người kiểm thử là vai trò trong hoạt động đánh giá, không nhất thiết là một tác nhân nghiệp vụ của hệ thống triển khai.

## 3. Quy ước ưu tiên

- **P1 — Cốt lõi:** Nên có trong phạm vi thiết kế và minh họa của Topic 7.
- **P2 — Hỗ trợ:** Có thể đưa vào nếu cần minh họa luồng thay thế hoặc vai trò cán bộ.
- **P3 — Ngoài phạm vi trước mắt:** Chưa cần thiết kế chi tiết trong giai đoạn đầu.

## 4. Danh sách chức năng

| ID | Tên chức năng | Tác nhân chính | Ưu tiên | Mục đích |
|---|---|---|---|---|
| FR-UI-01 | Bắt đầu gửi phản ánh | Người dân | P1 | Giúp người dân tìm đúng chức năng gửi phản ánh. |
| FR-UI-02 | Nhập thông tin phản ánh | Người dân | P1 | Thu thập nội dung và thông tin cần thiết theo biểu mẫu. |
| FR-UI-03 | Kiểm tra và sửa thông tin trước khi gửi | Người dân | P1 | Giúp người dân phát hiện, sửa lỗi trước khi gửi. |
| FR-UI-04 | Gửi phản ánh và nhận xác nhận | Người dân | P1 | Thông báo rõ kết quả gửi và hướng dẫn bước tiếp theo. |
| FR-UI-05 | Tra cứu phản ánh | Người dân | P1 | Giúp người dân tìm được phản ánh và hiểu trạng thái hiện tại. |
| FR-UI-06 | Xem chi tiết và trạng thái phản ánh | Người dân | P1 | Trình bày thông tin, tiến độ và thông báo dễ hiểu. |

## 5. Đặc tả chức năng chi tiết

### FR-UI-01 — Bắt đầu gửi phản ánh

- **Tác nhân:** Người dân
- **Mục tiêu:** Tìm và mở được chức năng gửi phản ánh.
- **Tiền điều kiện:** Người dùng đang ở giao diện của hệ thống.
- **Luồng chính:**
  1. Người dùng mở trang/chức năng chính.
  2. Giao diện hiển thị hành động “Gửi phản ánh” rõ ràng.
  3. Người dùng chọn hành động đó.
  4. Hệ thống mở biểu mẫu gửi phản ánh.
- **Luồng thay thế/ngoại lệ:**
  - Nếu không thể mở biểu mẫu, giao diện thông báo vấn đề và đưa ra cách thử lại hoặc quay về trang trước.
- **Hậu điều kiện:** Biểu mẫu gửi phản ánh được hiển thị.
- **Tiêu chí chấp nhận:**
  - Người dùng có thể nhận ra điểm bắt đầu của nhiệm vụ.
  - Nhãn nút/hành động mô tả đúng kết quả sẽ xảy ra.
- **Đầu ra phục vụ thiết kế:** User Flow từ trang chính đến biểu mẫu; wireframe trang chính và biểu mẫu.

### FR-UI-02 — Nhập thông tin phản ánh

- **Tác nhân:** Người dân
- **Mục tiêu:** Điền các thông tin cần thiết để mô tả phản ánh.
- **Tiền điều kiện:** Biểu mẫu gửi phản ánh đã được mở.
- **Dữ liệu dự kiến:** Nội dung phản ánh và các trường thông tin mà yêu cầu nghiệp vụ chính thức quy định. Địa điểm, hình ảnh hoặc thông tin liên hệ chỉ được coi là trường bắt buộc nếu đặc tả chung của dự án yêu cầu.
- **Luồng chính:**
  1. Giao diện hiển thị các trường nhập liệu cùng nhãn và hướng dẫn.
  2. Người dùng nhập thông tin.
  3. Người dùng đính kèm thông tin bổ sung nếu được hỗ trợ.
  4. Người dùng chọn tiếp tục hoặc gửi để chuyển sang bước kiểm tra.
- **Luồng thay thế/ngoại lệ:**
  - Nếu người dùng không hiểu trường nhập liệu, giao diện cung cấp hướng dẫn ngắn.
  - Nếu định dạng dữ liệu không hợp lệ, giao diện chỉ rõ trường cần sửa.
- **Hậu điều kiện:** Thông tin được nhập trên biểu mẫu và sẵn sàng để kiểm tra.
- **Tiêu chí chấp nhận:**
  - Nhãn trường và hướng dẫn dễ hiểu.
  - Trường bắt buộc được phân biệt rõ.
  - Lỗi được chỉ ra gần trường liên quan, không chỉ bằng một thông báo chung.
- **Đầu ra phục vụ thiết kế:** Wireframe biểu mẫu; trạng thái bình thường, đang nhập và lỗi xác thực.

### FR-UI-03 — Kiểm tra và sửa thông tin trước khi gửi

- **Tác nhân:** Người dân
- **Mục tiêu:** Xem lại nội dung và sửa thông tin chưa chính xác trước khi gửi.
- **Tiền điều kiện:** Người dùng đã nhập một phần hoặc toàn bộ biểu mẫu.
- **Luồng chính:**
  1. Người dùng chọn xem lại thông tin.
  2. Giao diện trình bày dữ liệu đã nhập theo cách dễ đọc.
  3. Người dùng xác nhận thông tin hoặc quay lại chỉnh sửa.
  4. Sau khi sửa, người dùng có thể xem lại lần nữa.
- **Luồng thay thế/ngoại lệ:**
  - Nếu thiếu dữ liệu bắt buộc, giao diện chỉ rõ nội dung còn thiếu và cung cấp đường dẫn quay lại trường tương ứng.
- **Hậu điều kiện:** Người dùng có thể tiếp tục với dữ liệu đã kiểm tra hoặc quay lại sửa.
- **Tiêu chí chấp nhận:**
  - Người dùng phân biệt được thao tác “Quay lại chỉnh sửa” với “Gửi phản ánh”.
  - Khi quay lại, dữ liệu đã nhập không bị mất ngoài dự kiến.
- **Đầu ra phục vụ thiết kế:** User Flow có nhánh xác nhận/chỉnh sửa; wireframe màn hình xem lại.

### FR-UI-04 — Gửi phản ánh và nhận xác nhận

- **Tác nhân:** Người dân
- **Mục tiêu:** Gửi thông tin và biết rõ thao tác có thành công hay không.
- **Tiền điều kiện:** Biểu mẫu đáp ứng các quy tắc xác thực của hệ thống.
- **Luồng chính:**
  1. Người dùng xác nhận gửi.
  2. Giao diện thể hiện trạng thái đang xử lý nếu thao tác không hoàn tất ngay lập tức.
  3. Khi hệ thống xác nhận tiếp nhận thành công, giao diện hiển thị thông báo thành công.
  4. Giao diện hiển thị mã tham chiếu nếu hệ thống có cấp mã và hướng dẫn cách tra cứu.
- **Luồng thay thế/ngoại lệ:**
  - Nếu gửi thất bại, giao diện thông báo rằng phản ánh chưa được xác nhận tiếp nhận và đưa ra hành động phù hợp như thử lại.
  - Tránh thông báo thành công khi hệ thống chưa xác nhận kết quả.
- **Hậu điều kiện:** Người dùng nhận được kết quả rõ ràng; mã tham chiếu chỉ xuất hiện khi thực sự được hệ thống tạo.
- **Tiêu chí chấp nhận:**
  - Thành công và thất bại được phân biệt rõ.
  - Không khiến người dùng gửi lặp do không biết yêu cầu trước đã được tiếp nhận hay chưa.
  - Có hướng dẫn bước tiếp theo.
- **Đầu ra phục vụ thiết kế:** Wireframe trạng thái đang gửi, thành công và thất bại.

### FR-UI-05 — Tra cứu phản ánh

- **Tác nhân:** Người dân
- **Mục tiêu:** Tìm được phản ánh đã gửi.
- **Tiền điều kiện:** Người dùng truy cập chức năng tra cứu; phương thức tra cứu tuân theo yêu cầu chung của dự án.
- **Dữ liệu đầu vào:** Mã tham chiếu hoặc thông tin tra cứu mà hệ thống chính thức hỗ trợ.
- **Luồng chính:**
  1. Người dùng mở chức năng tra cứu.
  2. Giao diện hiển thị trường nhập thông tin tra cứu và hướng dẫn.
  3. Người dùng nhập thông tin và thực hiện tra cứu.
  4. Hệ thống trả về kết quả phù hợp; giao diện hiển thị kết quả và đường dẫn xem chi tiết.
- **Luồng thay thế/ngoại lệ:**
  - Không có kết quả: thông báo rõ và gợi ý kiểm tra lại thông tin.
  - Dữ liệu nhập thiếu hoặc sai định dạng: yêu cầu sửa trường tương ứng.
  - Lỗi hệ thống: thông báo chưa thể tra cứu và cung cấp cách thử lại.
- **Hậu điều kiện:** Kết quả tra cứu được hiển thị hoặc người dùng nhận được hướng dẫn khắc phục.
- **Tiêu chí chấp nhận:**
  - Người dùng hiểu cần nhập thông tin gì.
  - Trạng thái không có kết quả không bị nhầm với lỗi hệ thống.
- **Đầu ra phục vụ thiết kế:** User Flow tra cứu; wireframe tìm kiếm, có kết quả và không có kết quả.

### FR-UI-06 — Xem chi tiết và trạng thái phản ánh

- **Tác nhân:** Người dân
- **Mục tiêu:** Hiểu tình trạng hiện tại và thông tin liên quan đến phản ánh.
- **Tiền điều kiện:** Người dùng đã tìm được phản ánh mà họ có quyền xem.
- **Luồng chính:**
  1. Người dùng mở một kết quả tra cứu.
  2. Giao diện hiển thị thông tin chi tiết được phép xem.
  3. Giao diện thể hiện trạng thái hiện tại bằng nhãn rõ nghĩa và, nếu có dữ liệu, lịch sử cập nhật.
  4. Người dùng đọc hướng dẫn hoặc quay lại kết quả tra cứu.
- **Luồng thay thế/ngoại lệ:**
  - Nếu không thể truy cập thông tin, giao diện thông báo phù hợp mà không tiết lộ dữ liệu trái quyền.
  - Nếu chưa có cập nhật mới, giao diện nói rõ hiện chưa có thông tin mới thay vì để trống gây hiểu nhầm.
- **Hậu điều kiện:** Người dùng hiểu trạng thái hiển thị và biết bước tiếp theo nếu có.
- **Tiêu chí chấp nhận:**
  - Trạng thái được viết bằng ngôn ngữ dễ hiểu, không chỉ dựa vào màu sắc.
  - Thời điểm cập nhật được hiển thị nếu có dữ liệu.
- **Đầu ra phục vụ thiết kế:** Wireframe trang chi tiết; mẫu hiển thị trạng thái và lịch sử.


### FR-UI-07 — Hiển thị phản hồi khi có lỗi

- **Tác nhân:** Người dân 
- **Mục tiêu:** Giúp người dùng hiểu điều gì xảy ra và cách tiếp tục.
- **Điều kiện kích hoạt:** Có lỗi nhập liệu, không có kết quả, thao tác thất bại hoặc lỗi truy cập.
- **Yêu cầu hành vi:**
  1. Giao diện mô tả lỗi bằng ngôn ngữ dễ hiểu.
  2. Giao diện chỉ rõ trường hoặc thao tác liên quan nếu xác định được.
  3. Giao diện cung cấp hành động tiếp theo phù hợp, chẳng hạn sửa dữ liệu, thử lại hoặc quay lại.
  4. Giữ lại dữ liệu đã nhập khi an toàn và hợp lý.
  5. Không tiết lộ thông tin kỹ thuật nhạy cảm hoặc dữ liệu mà người dùng không được phép xem.
- **Tiêu chí chấp nhận:**
  - Thông báo nêu được vấn đề và hướng xử lý, không chỉ ghi “Có lỗi”.
  - Lỗi được trình bày nhất quán giữa các màn hình.
- **Đầu ra phục vụ thiết kế:** Bộ trạng thái lỗi và quy tắc hiển thị thông báo.



## 6. Các luồng người dùng nên thiết kế trước

### Flow A — Gửi phản ánh

`Trang chính → Biểu mẫu → Nhập thông tin → Kiểm tra thông tin → Gửi → Xác nhận kết quả`

Nhánh cần xem xét:
- Thiếu thông tin hoặc dữ liệu không hợp lệ.
- Quay lại chỉnh sửa.
- Gửi thất bại.
- Gửi thành công và nhận mã tham chiếu nếu hệ thống hỗ trợ.

### Flow B — Tra cứu trạng thái phản ánh

`Trang chính → Tra cứu → Nhập thông tin → Xem kết quả → Xem chi tiết/trạng thái`

Nhánh cần xem xét:
- Có kết quả.
- Không có kết quả.
- Dữ liệu nhập không hợp lệ.
- Lỗi tra cứu.


## 7. Kịch bản kiểm thử sơ bộ

| ID | Nhiệm vụ giao cho người tham gia | Điều kiện hoàn thành | Quan sát chính |
|---|---|---|---|
| UT-01 | Hãy gửi một phản ánh về một vấn đề được mô tả trong tình huống giả định. | Người tham gia đi đến trạng thái xác nhận gửi thành công trong prototype/hệ thống thử nghiệm. | Có tìm được điểm bắt đầu không? Có hiểu trường nhập liệu không? Có mắc lỗi không? |
| UT-02 | Hãy tìm trạng thái của một phản ánh với thông tin tra cứu được cung cấp. | Người tham gia mở được thông tin trạng thái phù hợp. | Có hiểu cần nhập gì không? Có phân biệt được không có kết quả với lỗi không? |
## 8. Nguyên tắc giao diện cần kiểm tra

Có thể dùng các nguyên tắc sau làm danh sách kiểm tra ban đầu:

- **Visibility of system status:** Luôn cho người dùng biết hệ thống đang xử lý, đã thành công hay thất bại.
- **Match between system and the real world:** Dùng từ ngữ gần với cách người dân/cán bộ hiểu nghiệp vụ.
- **Consistency and standards:** Các nút, nhãn trạng thái và cách hiển thị lỗi nhất quán.
- **Error prevention:** Giảm khả năng nhập sai hoặc xác nhận nhầm.
- **Recognition rather than recall:** Hiển thị hướng dẫn và thông tin cần thiết, tránh buộc người dùng phải nhớ.
- **Help users recognize, diagnose, and recover from errors:** Giải thích lỗi và chỉ cách khắc phục.
- **Aesthetic and minimalist design:** Tránh đưa quá nhiều trường hoặc thông tin không cần thiết lên cùng một màn hình.

Đây là danh sách định hướng đánh giá, không phải tuyên bố rằng giao diện đã đáp ứng các nguyên tắc.

## 9. Các sơ đồ và sản phẩm thiết kế được tạo từ đặc tả

| Sản phẩm | Mục đích | Mức ưu tiên |
|---|---|---|
| Use Case Diagram phạm vi Topic 7 | Xác định tác nhân và các chức năng liên quan | P1 nếu bài cần sơ đồ chức năng |
| Activity Diagram — gửi phản ánh | Thể hiện luồng chính và các nhánh lỗi/chỉnh sửa | P1 |
| User Flow — gửi phản ánh | Thể hiện chuyển đổi giữa các màn hình | P1 |
| Wireframe biểu mẫu và xác nhận gửi | Minh họa cách bố trí giao diện và phản hồi | P1 |
| User Flow — tra cứu trạng thái | Kiểm tra hành trình tra cứu | P1 |
| Wireframe tra cứu và chi tiết | Minh họa kết quả, trạng thái và lỗi | P1 |
| Prototype tương tác | Cho phép thực hiện nhiệm vụ kiểm thử | P1 nếu cần usability testing thực tế |
| Bảng kết quả usability testing | Ghi nhận dữ liệu và vấn đề quan sát được | P1 nếu có thực hiện kiểm thử |
| Sequence Diagram, ERD | Mô tả tương tác kỹ thuật hoặc dữ liệu | P3 — không phải trọng tâm trước mắt |
