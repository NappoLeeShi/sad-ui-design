# DÀN Ý THUYẾT TRÌNH
## Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

**Case study:** Hệ thống tiếp nhận và xử lý phản ánh của người dân  
**Thời lượng gợi ý:** 45–50 phút, bao gồm demo ngắn  
**Định hướng:** Xác định khó khăn của người dùng -> vận dụng cơ sở lý thuyết phù hợp -> phân tích và mô hình hóa luồng -> thiết kế prototype -> kiểm thử và đề xuất cải tiến.

## Mạch nội dung tổng thể

**Đặt vấn đề -> cơ sở lý thuyết -> phân tích người dùng và luồng hiện tại -> mô hình hóa -> thiết kế giao diện/luồng đề xuất -> kiểm thử -> demo -> kết luận.**

---

# PHẦN 1. ĐẶT VẤN ĐỀ (Slide 1–6)

## Slide 1. Trang bìa
- Tiêu đề: **Thiết kế giao diện và kiểm chứng luồng thao tác người dùng**
- Case study: Hệ thống tiếp nhận và xử lý phản ánh của người dân.

## Slide 2. Tình huống mở đầu
- Một người dân phát hiện đèn đường hỏng và muốn gửi phản ánh.
- Họ cần tìm chức năng, chọn đúng loại vấn đề và xác định vị trí.
- Câu hỏi dẫn nhập: **Làm sao biết giao diện giúp người dân hoàn thành nhiệm vụ dễ dàng, thay vì chỉ trông đẹp mắt?**

## Slide 3. Vì sao chủ đề này quan trọng?
- Có chức năng không đồng nghĩa người dùng dễ tìm và sử dụng được chức năng đó.
- Điều hướng khó hiểu, thuật ngữ không quen thuộc hoặc biểu mẫu khó điền có thể làm tăng nhầm lẫn và nhu cầu trợ giúp.
- Hệ thống dịch vụ công cần phục vụ người dùng có năng lực và kinh nghiệm công nghệ khác nhau.

## Slide 4. Ba vấn đề cần giải quyết
1. Khó tìm chức năng gửi phản ánh trong ứng dụng có nhiều tính năng.
2. Một số danh mục dùng thuật ngữ khó hiểu hoặc có vẻ trùng lặp với người dùng.
3. **Giả thuyết cần kiểm chứng:** Nhập địa chỉ bằng tay có thể gây khó khăn nếu người dùng không nhớ hoặc không chắc tên địa danh.
- Trực quan: Ba thẻ vấn đề, đánh dấu rõ vấn đề đã quan sát và giả thuyết cần kiểm thử.

## Slide 5. Mục tiêu và phạm vi
- Giúp người dùng tìm chức năng gửi phản ánh dễ hơn.
- Hỗ trợ chọn loại vấn đề và vị trí với ít nhầm lẫn hơn.
- Thiết kế luồng từ trang chủ đến xem lại thông tin trước khi gửi.
- Ngoài phạm vi: đánh giá hiệu quả xử lý thực tế của cơ quan chức năng.
- Nếu sản phẩm là prototype, không đánh giá như thể đã tích hợp với hệ thống chính thức.

## Slide 6. Cách tiếp cận của nhóm
- Tìm hiểu người dùng và nhiệm vụ.
- Phân tích luồng hiện tại, chỉ ra điểm gây khó khăn.
- Vận dụng nguyên tắc thiết kế để tạo luồng mới.
- Kiểm thử với nhiệm vụ cụ thể và cải tiến dựa trên quan sát.

---

# PHẦN 2. CƠ SỞ LÝ THUYẾT GẮN VỚI CHỦ ĐỀ (Slide 7–11)

## Slide 7. User-Centered Design (UCD): Thiết kế lấy người dùng làm trung tâm
- Thiết kế bắt đầu từ người dùng, mục tiêu, bối cảnh và khó khăn thực tế của họ.
- Quy trình khái quát: **Tìm hiểu nhu cầu -> đưa ra giải pháp -> tạo mẫu -> đánh giá -> cải tiến**.
- Áp dụng: không giả định mọi người dân đều hiểu thuật ngữ hành chính hoặc quen với bản đồ số.
- Kết nối với case study: dùng các vấn đề đã quan sát và kết quả kiểm thử để quyết định thiết kế.

## Slide 8. Usability: Khả năng sử dụng và tiêu chí đánh giá
- Theo cách tiếp cận của ISO 9241-11, usability được xem xét trong bối cảnh sử dụng cụ thể thông qua:
  - **Effectiveness - Hiệu quả:** Người dùng có hoàn thành đúng nhiệm vụ không?
  - **Efficiency - Hiệu suất:** Họ mất bao lâu hoặc cần bao nhiêu thao tác?
  - **Satisfaction - Mức độ hài lòng:** Trải nghiệm có dễ hiểu và dễ chịu không?
- Áp dụng: đo tỷ lệ hoàn thành nhiệm vụ, thời gian, lỗi thao tác, nhu cầu trợ giúp và phản hồi của người tham gia.
- Lưu ý: không tự đặt số liệu, chỉ báo cáo kết quả sau khi đã thử nghiệm.

## Slide 9. Nguyên tắc thiết kế giao diện: Usability Heuristics
Chọn 4–5 nguyên tắc của Jakob Nielsen có liên quan trực tiếp:
- **Visibility of system status:** Cho biết người dùng đang ở bước nào.
- **Match between system and the real world:** Dùng ngôn ngữ gần gũi, giải thích thuật ngữ.
- **Recognition rather than recall:** Hiển thị lựa chọn và ví dụ để người dùng không phải tự nhớ.
- **Error prevention:** Kiểm tra trường bắt buộc và xác nhận vị trí trước khi tiếp tục.
- **User control and freedom:** Cho phép quay lại, chỉnh sửa mà không mất dữ liệu.
- Áp dụng: chỉ ra mỗi nguyên tắc dẫn đến một quyết định thiết kế cụ thể.

## Slide 10. Task Analysis và User Flow: Phân tích nhiệm vụ, luồng thao tác
- **Task Analysis:** Phân rã mục tiêu của người dùng thành các nhiệm vụ và bước nhỏ.
- **User Flow:** Mô tả đường đi giữa màn hình, lựa chọn và các nhánh chính.
- Luồng mục tiêu: Trang chủ -> Chọn loại vấn đề -> Chọn vị trí -> Mô tả -> Xem lại -> Gửi.
- Cần tính cả nhánh ngoại lệ: chưa chọn danh mục, vị trí chưa rõ, dữ liệu thiếu, cần quay lại sửa hoặc gửi lỗi.
- Phân biệt: Activity Diagram mô tả hoạt động/điều kiện của quy trình; User Flow tập trung vào điều hướng giữa các màn hình.

## Slide 11. Prototype và Usability Testing
- **Wireframe:** Phác thảo bố cục, ưu tiên cấu trúc và vị trí thành phần.
- **Prototype:** Mẫu có thể tương tác để mô phỏng luồng trước khi hoàn thiện hệ thống.
- **Usability Testing:** Cho người dùng thực hiện nhiệm vụ, quan sát hành vi và ghi nhận khó khăn.
- Phân biệt với **Heuristic Evaluation:** chuyên gia/nhóm đánh giá giao diện theo các nguyên tắc; usability testing quan sát người dùng thực hiện nhiệm vụ.
- Áp dụng: thử prototype với các tình huống gửi phản ánh; dùng kết quả để sửa thiết kế.

---

# PHẦN 3. CASE STUDY VÀ PHÂN TÍCH HIỆN TRẠNG (Slide 12–16)

## Slide 12. Giới thiệu hệ thống
- Mục đích: giúp người dân báo cáo vấn đề công cộng như đường hư hỏng, đèn đường không sáng, rác thải hoặc ngập úng.
- Người dùng chính: người dân gửi phản ánh.
- Người dùng liên quan nếu nằm trong phạm vi hệ thống: cán bộ tiếp nhận/xử lý.
- Phân biệt chức năng của website đề xuất với chức năng đã được triển khai thật.

## Slide 13. Người dùng và nhiệm vụ chính
- Thiết kế cho người dân có mức độ thành thạo công nghệ khác nhau; không mặc định khả năng theo tuổi hoặc nghề nghiệp.
- Nhiệm vụ: tìm chức năng -> chọn loại vấn đề -> xác định vị trí -> mô tả/đính kèm ảnh -> xem lại thông tin.
- Trực quan: sơ đồ nhiệm vụ hoặc hành trình người dùng ngắn.

## Slide 14. Luồng hiện tại (As-Is)
- Mô tả ở mức đã quan sát: mở ứng dụng -> tìm chức năng phản ánh -> chọn danh mục -> nhập/chọn vị trí -> nhập nội dung -> tiếp tục quy trình gửi.
- Đánh dấu điểm gây khó khăn đã ghi nhận và giả thuyết cần kiểm thử.
- Chỉ thể hiện các bước và nhánh nhóm thực sự quan sát được; không tự thêm chi tiết nghiệp vụ chưa xác minh.

## Slide 15. Use Case Diagram
- Mục đích: thể hiện tác nhân và các chức năng chính trong phạm vi hệ thống.
- Tác nhân chính: Người dân.
- Tác nhân cán bộ tiếp nhận/xử lý chỉ đưa vào nếu nhóm có mô hình hóa phần nghiệp vụ đó.
- Use case chính: Gửi phản ánh; có thể bao gồm chọn danh mục, xác định vị trí, nhập mô tả, đính kèm ảnh và xem lại thông tin.
- Tránh biến từng cú nhấp chuột thành một use case.
- Nếu chỉ làm prototype giao diện, ghi rõ chức năng backend là phần đề xuất.

## Slide 16. Activity Diagram As-Is và To-Be
- Có thể dùng hai sơ đồ đặt cạnh nhau hoặc hai slide nếu sơ đồ quá dày.
- **As-Is:** luồng hiện tại và các điểm vướng mắc.
- **To-Be:** trang chủ -> chọn danh mục có giải thích -> chọn vị trí qua tìm kiếm/bản đồ -> mô tả -> xem lại -> gửi.
- Thể hiện các nhánh quan trọng: dữ liệu thiếu, cần chỉnh sửa, vị trí chưa xác nhận, gửi thất bại.
- Không đưa nhánh nghiệp vụ chưa xác minh vào sơ đồ As-Is; nhánh mô phỏng phải được ghi rõ.

---

# PHẦN 4. THIẾT KẾ GIẢI PHÁP UI VÀ LUỒNG THAO TÁC (Slide 17–25)

## Slide 17. Từ nguyên tắc lý thuyết đến quyết định thiết kế
- Khó tìm chức năng -> tăng khả năng nhận biết và cải thiện điều hướng.
- Danh mục khó hiểu -> dùng ngôn ngữ đời thường, ví dụ và trợ giúp chọn mục.
- Nhập vị trí có thể khó -> hỗ trợ tìm kiếm, bản đồ 2D và chế độ xem 3D tùy chọn.
- Dữ liệu có thể nhập sai -> xác nhận, kiểm tra trường và cho phép sửa.
- Thông điệp: mỗi quyết định phải gắn với một vấn đề và một nguyên tắc thiết kế.

## Slide 18. User Flow và wireframe tổng thể
- User Flow: Trang chủ -> Chọn loại vấn đề -> Chọn vị trí -> Mô tả/ảnh -> Xem lại và gửi.
- Wireframe thể hiện bố cục năm màn hình chính.
- Chú thích: User Flow và wireframe là công cụ thiết kế UX; không phải sơ đồ UML chuẩn.
- Trực quan: một luồng tổng thể cùng các wireframe thu nhỏ.

## Slide 19. Màn hình 1: Trang chủ
- Đặt **“Công cụ yêu thích”** ở khu vực đầu trang.
- Làm nổi bật hành động **“Gửi phản ánh”**; có thể thiết lập sẵn trong prototype.
- Các chức năng phụ như tra cứu và hướng dẫn vẫn dễ tìm nhưng ít nổi bật hơn hành động chính.
- Liên hệ lý thuyết: khả năng tìm thấy chức năng, cấu trúc thông tin và recognition rather than recall.

## Slide 20. Màn hình 2: Chọn loại vấn đề
- Tiêu đề dễ hiểu: “Bạn muốn phản ánh điều gì?”
- Thẻ danh mục có tên rõ ràng, mô tả ngắn và ví dụ.
- Ví dụ minh họa: đường sá/vỉa hè; đèn đường; rác thải/vệ sinh; thoát nước/ngập úng; vấn đề khác.
- Danh mục cuối cùng phải phù hợp với phạm vi nghiệp vụ được nhóm xác định; không tự thay thế danh mục chính thức nếu chưa phân tích yêu cầu.
- Có trợ giúp “Chưa biết chọn mục nào?” và hiển thị rõ lựa chọn đang chọn.

## Slide 21. Màn hình 3: Chọn vị trí
- Cho phép tìm địa chỉ bằng chữ, chọn vị trí trên bản đồ hoặc dùng vị trí hiện tại nếu người dùng đồng ý.
- Bản đồ 2D là lựa chọn cơ bản; góc nhìn khu dân cư 3D là lựa chọn bổ sung nếu thực sự giúp nhận biết vị trí.
- Cho đặt/điều chỉnh ghim và xem địa chỉ/địa điểm được xác định trước khi xác nhận.
- Nếu không dùng quyền vị trí hoặc bản đồ không xác định được địa chỉ, vẫn cần cách nhập/chọn thủ công.
- Không khẳng định 3D luôn chính xác hơn 2D; cần kiểm thử xem nó có giúp người dùng xác định vị trí tốt hơn hay không.

## Slide 22. Màn hình 4: Mô tả và đính kèm
- Hiển thị loại vấn đề và vị trí đã chọn để người dùng đối chiếu.
- Trường mô tả có gợi ý ngắn; phân biệt trường bắt buộc và tùy chọn.
- Ảnh là tùy chọn nếu nghiệp vụ cho phép.
- Báo lỗi gần trường cần sửa và giữ lại nội dung đã nhập.
- Liên hệ lý thuyết: ngăn ngừa lỗi, phản hồi rõ ràng và giảm gánh nặng ghi nhớ/nhập liệu.

## Slide 23. Màn hình 5: Xem lại và gửi
- Tóm tắt danh mục, vị trí, mô tả và tệp đính kèm.
- Có nút chỉnh sửa từng phần, quay lại đúng bước và giữ dữ liệu.
- Sau khi gửi, hiển thị trạng thái mô phỏng phù hợp với prototype.
- Mã tham chiếu, thành công/thất bại chỉ là dữ liệu demo nếu chưa kết nối backend thật.

## Slide 24. Nhánh phụ và xử lý lỗi
- Chưa chọn danh mục -> nhắc chọn trước khi tiếp tục.
- Chưa xác nhận vị trí -> hướng dẫn điều chỉnh/xác nhận.
- Không cấp quyền vị trí -> vẫn cho tìm kiếm hoặc chọn thủ công.
- Quay lại chỉnh sửa -> giữ dữ liệu đã nhập.
- Gửi lỗi -> giải thích dễ hiểu và cho thử lại.
- Trực quan: nhánh chính và các nhánh lỗi trên một sơ đồ gọn.

## Slide 25. Đối chiếu vấn đề, lý thuyết và giải pháp
| Vấn đề | Cơ sở lý thuyết | Quyết định thiết kế |
|---|---|---|
| Khó tìm chức năng | Discoverability, Information Architecture, Recognition rather than Recall | Đưa “Gửi phản ánh” lên khu vực dễ thấy |
| Danh mục khó hiểu | Match between System and the Real World | Tên rõ ràng, ví dụ và hướng dẫn |
| Có thể khó nhập vị trí | User-Centered Design, Error Prevention | Tìm kiếm kết hợp bản đồ 2D/3D tùy chọn, xác nhận vị trí |
| Dễ mất dữ liệu khi sửa | User Control and Freedom | Quay lại chỉnh sửa mà không mất nội dung |
- Kết quả mong đợi là giả thuyết thiết kế; cần kiểm thử để xác nhận.

---

# PHẦN 5. KIỂM CHỨNG KHẢ NĂNG SỬ DỤNG (Slide 26–29)

## Slide 26. Kế hoạch usability testing
- Mục tiêu: xem người dùng có hoàn thành các nhiệm vụ chính trên prototype không.
- Người tham gia: một số người có mức độ thành thạo công nghệ khác nhau; nêu rõ số lượng thực tế khi đã tuyển được.
- Cách làm: giao nhiệm vụ, để người dùng tự thao tác, quan sát và ghi nhận; tránh hướng dẫn từng bước.
- Không yêu cầu người tham gia gửi phản ánh thật lên hệ thống chính thức.

## Slide 27. Kịch bản kiểm thử
1. **Tìm chức năng:** “Bạn nhìn thấy một đèn đường bị hỏng. Hãy bắt đầu gửi phản ánh.”
2. **Chọn danh mục:** “Chọn mục phù hợp để báo cáo.”
3. **Chọn vị trí:** “Hãy đánh dấu vị trí của chiếc đèn đường hỏng gần một địa điểm dễ nhận biết.”
4. **Sửa thông tin:** “Hãy quay lại chỉnh sửa mô tả trước khi gửi.”
- Các kịch bản cần khớp với tính năng thực sự có trong prototype.

## Slide 28. Chỉ số và ghi nhận kết quả
- Tỷ lệ hoàn thành nhiệm vụ.
- Thời gian hoàn thành.
- Số lỗi hoặc lần quay lại không cần thiết.
- Mức độ cần trợ giúp.
- Phản hồi ngắn của người tham gia về bước khó hiểu nhất.
- Trực quan: bảng ghi nhiệm vụ, kết quả, thời gian, lỗi và nhận xét.
- Chỉ trình bày số liệu sau khi thử nghiệm thật; nếu chưa kiểm thử, trình bày kế hoạch thay vì kết quả.

## Slide 29. Từ kết quả đến cải tiến
- Nhóm lỗi theo mức độ ảnh hưởng tới việc hoàn thành nhiệm vụ.
- Ưu tiên lỗi khiến người dùng không thể tiếp tục hoặc chọn sai thông tin.
- Sửa nhãn, vị trí nút, hướng dẫn, phản hồi lỗi hoặc thao tác đặt ghim theo bằng chứng thu thập được.
- Kiểm thử lại sau khi sửa.
- Trực quan: **Thiết kế -> Kiểm thử -> Phát hiện vấn đề -> Cải tiến -> Kiểm thử lại**.

---

# PHẦN 6. MÔ HÌNH KỸ THUẬT VÀ DEMO (Slide 30–34)

> Phần này demo nhanh, lý thuyết đã nói trước đó.

## Slide 30. Sequence Diagram: Điều gì xảy ra khi gửi phản ánh?
- Lifeline gợi ý: Người dân -> Frontend -> Backend/API -> Database.
- Luồng cơ bản: người dùng gửi -> kiểm tra dữ liệu -> lưu dữ liệu -> trả kết quả -> giao diện hiển thị phản hồi.
- Có thể thể hiện nhánh dữ liệu không hợp lệ hoặc lưu thất bại.
- Backend không thuyết trình do không hợp topic. Nếu có làm backend cho môn khác thì cũng không cần show.

## Slide 31. Demo: Tìm chức năng và chọn danh mục
- Bắt đầu từ trang chủ và chỉ ra nút “Gửi phản ánh”.
- Chọn tình huống mẫu như đèn đường không sáng.
- Cho thấy nhãn, mô tả và trạng thái lựa chọn.
- Thử tiếp tục khi chưa chọn danh mục để minh họa phản hồi lỗi.

## Slide 32. Demo: Chọn vị trí và hoàn tất luồng
- Tìm địa điểm, đặt/điều chỉnh ghim và xác nhận vị trí.
- Nếu có 3D, cho thấy cách bật/tắt và giải thích đây là lựa chọn bổ sung.
- Nhập mô tả, xem lại và quay lại sửa để chứng minh dữ liệu được giữ.
- Minh họa kết quả gửi mô phỏng; ghi rõ phần nào chưa kết nối backend thật.

## Slide 33. Demo tình huống lỗi
- Chọn một tình huống phù hợp với chức năng prototype: thiếu dữ liệu, không cấp quyền vị trí hoặc gửi thất bại mô phỏng.
- Cho thấy thông báo rõ ràng và cách tiếp tục.
- Chốt lại: demo chứng minh hành vi của prototype, không chứng minh hệ thống chính thức đang vận hành.

---

# PHẦN 7. KẾT LUẬN VÀ ÔN TẬP (Slide 35–36)

## Slide 34. Tổng kết
- Vấn đề -> quyết định thiết kế -> cách kiểm chứng.
- Giao diện cần hỗ trợ người dùng hoàn thành nhiệm vụ, không chỉ đẹp.
- Các quyết định thiết kế dựa trên lý thuyết cần được kiểm tra bằng quan sát thực tế.
- 3D chỉ nên giữ lại nếu chứng minh được giá trị hỗ trợ chọn vị trí.

## Slide 35. Câu hỏi ôn tập và hỏi đáp
- Dùng 20 câu hỏi Kahoot ngắn, tập trung vào:
  - Phân biệt Activity Diagram và User Flow.
  - Ba tiêu chí usability.
  - Phân biệt Heuristic Evaluation và Usability Testing.
  - Vì sao cần thử nghiệm prototype với người dùng.

---

# Danh sách sản phẩm cần chuẩn bị

- [ ] Bằng chứng/ghi chép về các vấn đề đã quan sát và giả thuyết cần kiểm thử.
- [ ] Use Case Diagram.
- [ ] Activity Diagram As-Is và To-Be.
- [ ] User Flow và wireframe/prototype của năm màn hình chính.
- [ ] Kịch bản usability testing và bảng ghi kết quả.
- [ ] Demo luồng chính và ít nhất một trường hợp lỗi.
- [ ] Slide đối chiếu vấn đề -> lý thuyết -> quyết định thiết kế -> cách kiểm chứng.

---

# Nguyên tắc biên soạn slide

- Mỗi slide chỉ nên có một thông điệp chính; ưu tiên sơ đồ, wireframe và minh họa.
- Phân biệt **vấn đề đã quan sát**, **giả thuyết**, **giải pháp đề xuất** và **kết quả kiểm thử thực tế**.
- Không đưa kết quả kiểm thử giả định thành số liệu thật.
- Không đánh giá chất lượng xử lý phản ánh ngoài đời nếu dự án chỉ kiểm chứng giao diện và luồng thao tác.
- Cơ sở lý thuyết phải được dùng lại trong phần thiết kế và đánh giá; không thêm lý thuyết chỉ để làm dày bài.