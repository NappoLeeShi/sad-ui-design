# NỘI DUNG SLIDE
## Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

---

## Slide 1. Trang bìa

**Tiêu đề:** Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

**Case study:** Hệ thống tiếp nhận và xử lý phản ánh của người dân

**Mạch nội dung:** Đặt vấn đề → cơ sở lý thuyết → phân tích luồng → thiết kế UI → kiểm chứng → demo

---

## Slide 2. Tình huống mở đầu

**Tình huống minh họa:** Buổi tối, một bóng đèn đường trong khu phố bị hỏng. Người dân muốn gửi phản ánh ngay trên điện thoại.

- Cần tìm được chức năng gửi phản ánh
- Cần chọn đúng loại vấn đề
- Cần xác định đúng vị trí sự cố

**Câu hỏi dẫn nhập:** Làm sao biết giao diện giúp người dân hoàn thành nhiệm vụ dễ dàng, thay vì chỉ trông đẹp mắt?

---

## Slide 3. Vì sao chủ đề này quan trọng?

- Có chức năng **không đồng nghĩa** người dùng tìm thấy và sử dụng được chức năng đó
- Điều hướng khó hiểu, thuật ngữ lạ, biểu mẫu khó điền → nhầm lẫn và cần trợ giúp
- Hệ thống dịch vụ công phục vụ người dùng có năng lực công nghệ rất khác nhau

**Thông điệp:** Người dùng đánh giá hệ thống qua những gì giao diện cho phép họ làm.

---

## Slide 4. Ba vấn đề cần giải quyết

**Thẻ 1 — Đã quan sát:** Khó tìm chức năng gửi phản ánh trong ứng dụng nhiều tính năng.

**Thẻ 2 — Đã quan sát:** Một số danh mục dùng thuật ngữ khó hiểu hoặc có vẻ trùng lặp.

**Thẻ 3 — Giả thuyết cần kiểm chứng:** Nhập địa chỉ bằng tay gây khó khăn khi người dùng không nhớ hoặc không chắc tên địa danh.

**Ghi chú phân loại:** Đã quan sát = có bằng chứng ghi nhận · Giả thuyết = chưa kiểm chứng

---

## Slide 5. Mục tiêu và phạm vi

**Mục tiêu**
- Giúp người dùng tìm chức năng gửi phản ánh dễ hơn
- Hỗ trợ chọn loại vấn đề và vị trí với ít nhầm lẫn hơn
- Thiết kế luồng từ trang chủ đến bước xem lại trước khi gửi

**Ngoài phạm vi**
- Đánh giá hiệu quả xử lý thực tế của cơ quan chức năng
- Đánh giá prototype như thể đã tích hợp hệ thống chính thức

---

## Slide 6. Cách tiếp cận của nhóm

1. Tìm hiểu người dùng, nhiệm vụ và bối cảnh sử dụng
2. Phân tích luồng hiện tại, chỉ ra điểm gây khó khăn
3. Vận dụng nguyên tắc thiết kế để tạo luồng mới
4. Kiểm thử với nhiệm vụ cụ thể và cải tiến dựa trên quan sát

**Thông điệp:** Thiết kế → kiểm chứng → cải tiến, lặp lại có kiểm soát.

---

## Slide 7. User-Centered Design (UCD)

**Khái niệm:** Thiết kế đặt nhu cầu, mục tiêu, đặc điểm và bối cảnh sử dụng của người dùng ở trung tâm, xuyên suốt quá trình.
*(Norman & Draper, 1986; ISO 9241-210)*

**Bốn hoạt động lặp lại**
1. Hiểu người dùng, nhiệm vụ, bối cảnh
2. Xác định yêu cầu người dùng
3. Đề xuất giải pháp thiết kế
4. Đánh giá dựa trên nhu cầu người dùng

**Áp dụng:** Không giả định mọi người dân đều hiểu thuật ngữ hành chính hoặc quen với bản đồ số.

---

## Slide 8. Usability và ba tiêu chí đánh giá

**Định nghĩa (ISO 9241-11):** Mức độ một hệ thống được người dùng cụ thể sử dụng để đạt mục tiêu cụ thể một cách hiệu quả, hiệu suất và hài lòng, trong một bối cảnh sử dụng cụ thể.

| Tiêu chí | Câu hỏi |
|---|---|
| **Effectiveness – Hiệu quả** | Người dùng có hoàn thành đúng nhiệm vụ không? |
| **Efficiency – Hiệu suất** | Họ mất bao lâu, cần bao nhiêu thao tác? |
| **Satisfaction – Hài lòng** | Trải nghiệm có dễ hiểu và dễ chịu không? |

**Cách đo:** tỷ lệ hoàn thành, thời gian, lỗi thao tác, nhu cầu trợ giúp, phản hồi người tham gia.
**Lưu ý:** Chỉ báo cáo số liệu sau khi đã thử nghiệm thực tế.

---

## Slide 9. Năm nguyên tắc Usability Heuristics

*(Jakob Nielsen)*

| Nguyên tắc | Áp dụng trong thiết kế |
|---|---|
| **Visibility of system status** | Chỉ báo "Bước 2/5", trạng thái "Đang xử lý" |
| **Match between system and the real world** | Tên danh mục đời thường, kèm mô tả và ví dụ |
| **Recognition rather than recall** | Hiển thị sẵn lựa chọn, gợi ý địa điểm |
| **Error prevention** | Kiểm tra trường bắt buộc, xác nhận vị trí |
| **User control and freedom** | Quay lại, chỉnh sửa mà không mất dữ liệu |

**Thông điệp:** Mỗi nguyên tắc phải dẫn tới một quyết định thiết kế cụ thể.

---

## Slide 10. Task Analysis và User Flow

**Task Analysis:** Phân rã mục tiêu thành nhiệm vụ và bước nhỏ; xác định điểm quyết định, trường hợp ngoại lệ, dữ liệu cần nhập.

**User Flow:** Đường đi của người dùng qua các màn hình, hành động và nhánh xử lý.

**Sáu thành phần:** điểm bắt đầu · màn hình/trạng thái · hành động · điểm quyết định · nhánh thành công/thất bại · điểm kết thúc

| | Activity Diagram | User Flow |
|---|---|---|
| Trọng tâm | Quy trình nghiệp vụ | Điều hướng màn hình |
| Đơn vị | Hoạt động, điều kiện | Màn hình, hành động |

**Luồng mục tiêu:** Trang chủ → Loại vấn đề → Vị trí → Mô tả → Xem lại → Gửi

---

## Slide 11. Wireframe, Prototype và Usability Testing

- **Wireframe:** Khung bố cục, ưu tiên cấu trúc và vị trí thành phần
- **Mockup:** Hoàn thiện thị giác nhưng tĩnh
- **Prototype:** Mẫu tương tác, mô phỏng luồng trước khi hoàn thiện hệ thống
- **Usability Testing:** Cho người dùng thực hiện nhiệm vụ, quan sát hành vi và ghi nhận khó khăn
- **Heuristic Evaluation:** Chuyên gia đánh giá theo nguyên tắc — không thay thế được quan sát người dùng thật

**Mức độ hoàn thiện:** Low-fi → Mid-fi → High-fi, chọn theo mục tiêu kiểm thử

---

## Slide 12. Giới thiệu hệ thống

**Mục đích:** Người dân báo cáo vấn đề công cộng — đường hư hỏng, đèn đường không sáng, rác thải, ngập úng.

**Người dùng chính:** Người dân gửi phản ánh.
**Người dùng liên quan (nếu trong phạm vi):** Cán bộ tiếp nhận và xử lý.

**Phân biệt rõ:**
- Chức năng của website **đề xuất** trong đồ án
- Chức năng **đã được triển khai thật**

---

## Slide 13. Người dùng và nhiệm vụ chính

- Thiết kế cho nhiều mức thành thạo công nghệ; **không** mặc định khả năng theo tuổi hay nghề nghiệp
- **Persona tham chiếu (giả định):** người dùng phổ thông bận rộn · người lớn tuổi ít rành công nghệ
- **Nhiệm vụ:** tìm chức năng → chọn loại vấn đề → xác định vị trí → mô tả/đính kèm ảnh → xem lại
- **Bối cảnh:** điện thoại màn hình nhỏ, thao tác một tay, ngoài đường, mạng có thể không ổn định

---

## Slide 14. Luồng hiện tại (As-Is)

**Các bước đã ghi nhận**
Mở ứng dụng → Tìm chức năng phản ánh → Chọn danh mục → Nhập/chọn vị trí → Nhập nội dung → Tiếp tục gửi

**Điểm gây khó khăn**
- Chức năng chính bị chôn sâu trong menu *(đã quan sát)*
- Danh mục dùng thuật ngữ khó hiểu *(đã quan sát)*
- Nhập địa chỉ thủ công khi không nhớ địa danh *(giả thuyết)*

**Nguyên tắc:** Chỉ thể hiện bước và nhánh nhóm thực sự quan sát được.

---

## Slide 15. Activity Diagram As-Is và To-Be

**As-Is:** Luồng hiện tại, đánh dấu các điểm vướng mắc đã ghi nhận.

**To-Be:**
Trang chủ → Chọn danh mục có giải thích → Chọn vị trí qua tìm kiếm/bản đồ → Mô tả → Xem lại → Gửi

**Nhánh quan trọng:** dữ liệu thiếu · cần chỉnh sửa · vị trí chưa xác nhận · gửi thất bại

**Lưu ý:** Không đưa nhánh nghiệp vụ chưa xác minh vào sơ đồ As-Is; nhánh mô phỏng phải ghi rõ.

---

## Slide 16. Từ nguyên tắc lý thuyết đến quyết định thiết kế

| Vấn đề | Nguyên tắc | Quyết định thiết kế |
|---|---|---|
| Khó tìm chức năng | Information Architecture, Recognition rather than Recall | Đưa "Gửi phản ánh" lên khu vực dễ thấy |
| Danh mục khó hiểu | Match between System and the Real World | Tên đời thường, mô tả ngắn, ví dụ |
| Khó nhập vị trí | UCD, Error Prevention | Tìm kiếm + bản đồ 2D/3D tùy chọn, xác nhận vị trí |
| Dễ mất dữ liệu khi sửa | User Control and Freedom | Quay lại chỉnh sửa, giữ nguyên nội dung |

**Thông điệp:** Mỗi quyết định gắn với một vấn đề và một nguyên tắc.

---

## Slide 17. User Flow và wireframe tổng thể

**User Flow:** Trang chủ → Chọn loại vấn đề → Chọn vị trí → Mô tả/ảnh → Xem lại và gửi

**Wireframe:** Năm màn hình chính theo đúng luồng trên

**Lưu ý:** User Flow và wireframe là công cụ thiết kế UX, **không phải** sơ đồ UML chuẩn.

**Thông điệp:** Luồng quyết định số màn hình; wireframe kiểm tra bố cục từng màn hình.

---

## Slide 18. Màn hình 1 — Trang chủ

- Đặt **"Công cụ yêu thích"** ở khu vực đầu trang
- Làm nổi bật hành động **"Gửi phản ánh"**; có thể thiết lập sẵn trong prototype
- Tra cứu và hướng dẫn vẫn dễ tìm nhưng ít nổi bật hơn hành động chính

**Liên hệ lý thuyết:** khả năng tìm thấy chức năng · kiến trúc thông tin · recognition rather than recall

---

## Slide 19. Màn hình 2 — Chọn loại vấn đề

**Tiêu đề:** "Bạn muốn phản ánh điều gì?"

- Thẻ danh mục gồm tên rõ ràng, mô tả ngắn và ví dụ
- Ví dụ: đường sá/vỉa hè · đèn đường · rác thải/vệ sinh · thoát nước/ngập úng · vấn đề khác
- Trợ giúp "Chưa biết chọn mục nào?"
- Hiển thị rõ lựa chọn đang chọn

**Lưu ý:** Danh mục cuối cùng phải theo phạm vi nghiệp vụ đã xác định, không tự thay thế danh mục chính thức.

---

## Slide 20. Màn hình 3 — Chọn vị trí

- Tìm địa chỉ bằng chữ · chọn trên bản đồ · dùng vị trí hiện tại nếu người dùng đồng ý
- **Bản đồ 2D** là lựa chọn cơ bản; **góc nhìn 3D** là lựa chọn bổ sung
- Cho đặt/điều chỉnh ghim và xem lại địa chỉ trước khi xác nhận
- Không dùng được quyền vị trí hoặc bản đồ không xác định được → vẫn nhập/chọn thủ công

**Lưu ý:** Không khẳng định 3D chính xác hơn 2D — cần kiểm thử để xác nhận giá trị.

---

## Slide 21. Màn hình 4 — Mô tả và đính kèm

- Hiển thị loại vấn đề và vị trí đã chọn để người dùng đối chiếu
- Trường mô tả có gợi ý ngắn; phân biệt rõ trường bắt buộc và tùy chọn
- Ảnh là tùy chọn nếu nghiệp vụ cho phép
- Báo lỗi ngay gần trường cần sửa và giữ lại nội dung đã nhập

**Liên hệ lý thuyết:** error prevention · phản hồi rõ ràng · giảm gánh nặng ghi nhớ và nhập liệu

---

## Slide 22. Màn hình 5 — Xem lại và gửi

- Tóm tắt danh mục, vị trí, mô tả và tệp đính kèm
- Có nút chỉnh sửa từng phần, quay lại đúng bước và giữ dữ liệu
- Sau khi gửi, hiển thị trạng thái mô phỏng phù hợp với prototype
- Mã tham chiếu và kết quả thành công/thất bại chỉ là **dữ liệu demo** nếu chưa kết nối backend thật

**Liên hệ lý thuyết:** visibility of system status · user control and freedom

---

## Slide 23. Nhánh phụ và xử lý lỗi

| Tình huống | Hành vi giao diện |
|---|---|
| Chưa chọn danh mục | Nhắc chọn trước khi tiếp tục |
| Chưa xác nhận vị trí | Hướng dẫn điều chỉnh và xác nhận |
| Không cấp quyền vị trí | Vẫn cho tìm kiếm hoặc chọn thủ công |
| Quay lại chỉnh sửa | Giữ dữ liệu đã nhập |
| Gửi thất bại | Giải thích dễ hiểu và cho thử lại |

**Thông điệp:** Mọi nhánh lỗi đều có đường đi tiếp, không có ngõ cụt.

---

## Slide 24. Đối chiếu vấn đề — lý thuyết — giải pháp

| Vấn đề | Cơ sở lý thuyết | Quyết định thiết kế |
|---|---|---|
| Khó tìm chức năng | Discoverability, IA, Recognition rather than Recall | Đưa "Gửi phản ánh" lên khu vực dễ thấy |
| Danh mục khó hiểu | Match between System and the Real World | Tên rõ ràng, ví dụ, hướng dẫn chọn |
| Có thể khó nhập vị trí | UCD, Error Prevention | Tìm kiếm kết hợp bản đồ 2D/3D tùy chọn, xác nhận vị trí |
| Dễ mất dữ liệu khi sửa | User Control and Freedom | Quay lại chỉnh sửa mà không mất nội dung |

**Lưu ý:** Đây là **giả thuyết thiết kế**, cần kiểm thử để xác nhận.

---

## Slide 25. Kế hoạch usability testing

**Mục tiêu:** Xem người dùng có hoàn thành các nhiệm vụ chính trên prototype hay không.

- **Người tham gia:** nhiều mức thành thạo công nghệ; nêu số lượng thực tế khi đã tuyển được
- **Cách làm:** giao nhiệm vụ, để người dùng tự thao tác, quan sát và ghi nhận; tránh hướng dẫn từng bước
- **Giới hạn:** không yêu cầu người tham gia gửi phản ánh thật lên hệ thống chính thức

---

## Slide 26. Kịch bản kiểm thử

1. **Tìm chức năng:** "Bạn thấy một đèn đường bị hỏng. Hãy bắt đầu gửi phản ánh."
2. **Chọn danh mục:** "Chọn mục phù hợp để báo cáo."
3. **Chọn vị trí:** "Đánh dấu vị trí chiếc đèn hỏng gần một địa điểm dễ nhận biết."
4. **Sửa thông tin:** "Quay lại chỉnh sửa mô tả trước khi gửi."

**Lưu ý:** Kịch bản phải khớp với tính năng thực sự có trong prototype.

---

## Slide 27. Chỉ số và cách ghi nhận

| Chỉ số | Cách thu thập |
|---|---|
| Task Completion Rate | Số người hoàn thành đúng ÷ tổng số người thử |
| Time on Task | Ghi thời điểm bắt đầu và kết thúc |
| Error Rate | Đếm từng lỗi, vị trí xảy ra, số lần lặp |
| Steps / Backtracking | Đếm thao tác và số lần quay lại ngoài kế hoạch |
| Mức độ cần trợ giúp | Số lần hỏi hoặc cần gợi ý |
| User Satisfaction | Hỏi ngắn sau nhiệm vụ; SUS khi đủ người tham gia |

**Lưu ý:** Chưa kiểm thử thì trình bày kế hoạch và tiêu chí, không trình bày số liệu.

---

## Slide 28. Từ kết quả đến cải tiến

- Nhóm lỗi theo mức độ ảnh hưởng tới việc hoàn thành nhiệm vụ
- Ưu tiên lỗi khiến người dùng không thể tiếp tục hoặc chọn sai thông tin
- Sửa nhãn, vị trí nút, hướng dẫn, phản hồi lỗi, thao tác đặt ghim theo bằng chứng thu thập được
- Kiểm thử lại sau khi sửa

**Chu trình:** Thiết kế → Kiểm thử → Phát hiện vấn đề → Cải tiến → Kiểm thử lại

---

## Slide 29. Sequence Diagram — Điều gì xảy ra khi gửi phản ánh?

**Lifeline:** Người dân → Frontend → Backend/API → Database

**Luồng cơ bản**
Người dùng gửi → Kiểm tra dữ liệu → Lưu dữ liệu → Trả kết quả → Giao diện hiển thị phản hồi

**Nhánh:** dữ liệu không hợp lệ · lưu thất bại

**Phạm vi:** Backend chỉ minh họa luồng, không trình bày chi tiết triển khai.

---

## Slide 30. Demo 1 — Tìm chức năng và chọn danh mục

- Bắt đầu từ trang chủ, chỉ ra nút **"Gửi phản ánh"**
- Chọn tình huống mẫu: đèn đường không sáng
- Cho thấy nhãn, mô tả và trạng thái lựa chọn
- Thử tiếp tục khi chưa chọn danh mục để minh họa phản hồi lỗi

**Quan sát:** Người xem thấy được luồng và phản hồi của giao diện, không chỉ nghe mô tả.

---

## Slide 31. Demo 2 — Chọn vị trí và hoàn tất luồng

- Tìm địa điểm, đặt/điều chỉnh ghim và xác nhận vị trí
- Nếu có 3D: bật/tắt và giải thích đây là lựa chọn bổ sung
- Nhập mô tả, xem lại, quay lại sửa để chứng minh dữ liệu được giữ
- Minh họa kết quả gửi mô phỏng; ghi rõ phần chưa kết nối backend thật

---

## Slide 32. Demo 3 — Tình huống lỗi

- Chọn một tình huống phù hợp với prototype: thiếu dữ liệu · không cấp quyền vị trí · gửi thất bại mô phỏng
- Cho thấy thông báo rõ ràng và cách tiếp tục
- **Chốt lại:** Demo chứng minh hành vi của prototype, không chứng minh hệ thống chính thức đang vận hành.

---

## Slide 33. Tổng kết

- **Vấn đề → quyết định thiết kế → cách kiểm chứng**
- Giao diện cần hỗ trợ người dùng hoàn thành nhiệm vụ, không chỉ đẹp
- Quyết định dựa trên lý thuyết cần được kiểm tra bằng quan sát thực tế
- 3D chỉ nên giữ lại nếu chứng minh được giá trị hỗ trợ chọn vị trí

**Thông điệp:** Usability là thuộc tính của việc sử dụng, không phải của giao diện đứng riêng.

---

## Slide 34. Câu hỏi ôn tập và hỏi đáp

**20 câu hỏi Kahoot — trọng tâm**
- Phân biệt Activity Diagram và User Flow
- Ba tiêu chí usability: Effectiveness, Efficiency, Satisfaction
- Phân biệt Heuristic Evaluation và Usability Testing
- Vì sao cần thử nghiệm prototype với người dùng

**Tài liệu tham khảo:** ISO 9241-11 · ISO 9241-210 · Nielsen (1994) · Norman & Draper (1986) · W3C WCAG

**Hỏi & đáp**
