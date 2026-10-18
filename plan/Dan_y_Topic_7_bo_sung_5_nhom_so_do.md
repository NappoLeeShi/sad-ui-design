1.

# **DÀN Ý THUYẾT TRÌNH: THIẾT KẾ GIAO DIỆN VÀ KIỂM CHỨNG LUỒNG THAO TÁC NGƯỜI DÙNG**

**Case study:** Hệ thống tiếp nhận và xử lý phản ánh của người dân\
**Thời lượng dự kiến:** 45--50 phút (nếu trình bày đầy đủ các sơ đồ; có thể rút gọn bằng cách gộp phần demo)\
**Định hướng:** Phân tích các khó khăn khi người dân gửi phản ánh, thiết kế lại giao diện và luồng thao tác, sau đó kiểm chứng bằng các tình huống sử dụng thực tế.

1.

## **Mạch nội dung tổng thể**

**Nhận diện vấn đề → phân tích hệ thống và mô hình hóa bằng 5 nhóm sơ đồ → thiết kế** **giải pháp UI/UX → kiểm chứng khả năng sử dụng → trình diễn** **website/prototype → tổng kết và ôn tập.**

Ba vấn đề trọng tâm đã xác định cho Case Study:

1. Khó tìm chức năng gửi phản ánh trong ứng dụng có nhiều tính năng.
2. Các danh mục phản ánh khó phân biệt, sử dụng thuật ngữ chưa thân thiện với người dân.
3. Việc nhập địa chỉ cụ thể bằng tay có thể gây khó khăn, nhất là khi người dùng chưa quen với tên đơn vị hành chính sau sắp xếp.



2.

# **PHẦN 1 --- ĐẶT VẤN ĐỀ (Slide 1--8)**

1.

## **Slide 1 --- Trang bìa**

- **Tiêu đề:** Thiết kế giao diện và kiểm chứng luồng thao tác người dùng

## Slide 2 --- Tình huống mở đầu: Khi người dân muốn phản ánh một vấn đề

- **Tình huống:** Một người dân phát hiện đèn đường hỏng và muốn gửi phản ánh qua ứng dụng.
- Người dùng phải tìm đúng chức năng giữa nhiều tính năng.
- Sau đó, họ phải chọn một danh mục phù hợp và nhập địa chỉ xảy ra sự việc.
- **Câu hỏi dẫn nhập:** Nếu người dân không biết bắt đầu từ đâu hoặc không chắc nên chọn mục nào, liệu chức năng gửi phản ánh có thực sự dễ sử dụng?
- **Hình thức:** Minh họa tình huống bằng 3 bước hoặc một đoạn hội thoại ngắn.

## Slide 3 --- Vì sao trải nghiệm sử dụng quan trọng?

- Chức năng có tồn tại không đồng nghĩa người dùng có thể tìm và sử dụng nó thuận tiện.
- Giao diện khó hiểu có thể làm tăng thời gian thao tác, tạo nhầm lẫn hoặc khiến người dùng cần tìm hướng dẫn bên ngoài.
- Với dịch vụ công, người dùng có trình độ công nghệ và khả năng sử dụng thiết bị rất khác nhau.
- **Thông điệp:** Thiết kế tốt cần giúp người dùng hoàn thành nhiệm vụ, không chỉ làm giao diện đẹp.

## Slide 4 --- Ba vấn đề trọng tâm

- **Vấn đề 1:** Khó tìm chức năng gửi phản ánh trong ứng dụng có nhiều tính năng.
- **Vấn đề 2:** Danh mục phản ánh sử dụng thuật ngữ khó hiểu hoặc có vẻ trùng lặp.
- **Vấn đề 3:** Nhập vị trí bằng văn bản có thể gây khó khăn khi người dùng không nhớ hoặc không chắc tên địa chỉ hành chính.
- **Trực quan:** Ba thẻ vấn đề, mỗi thẻ gồm biểu tượng, mô tả ngắn và tác động tới người dùng.

## Slide 5 --- Vấn đề 1: Khó tìm chức năng gửi phản ánh

- Ứng dụng đa chức năng có nhiều mục và khu vực thông tin.
- Chức năng người dùng cần có thể nằm dưới danh sách công cụ hoặc các phần ít liên quan.
- Trong trải nghiệm đã ghi nhận, người dùng phải tìm hướng dẫn trực tuyến mới tìm được chức năng.
- **Liên hệ chủ đề:** Khả năng tìm thấy chức năng (*discoverability*), cấu trúc thông tin và điều hướng.
- **Hình ảnh:** Sơ đồ trang chủ nhiều mục, làm nổi bật việc chức năng cần tìm không ở vị trí dễ thấy.

## Slide 6 --- Vấn đề 2: Danh mục phản ánh khó phân biệt

- Các nhãn như "Kiến nghị, phản ánh về ANTT", "ANTT tại trạm cảnh sát", "Kiến nghị phản ánh về kiểm tra giám sát của Đảng" và "Phản ánh khó khăn vướng mắc" có thể khiến người dùng băn khoăn.
- Người dùng có thể không hiểu thuật ngữ "ANTT", khác biệt giữa các mục, hoặc nên chọn mục tổng quát nào.
- **Liên hệ chủ đề:** Ngôn ngữ giao diện, phân nhóm thông tin và hỗ trợ ra quyết định.
- **Hình ảnh:** Danh sách danh mục với các câu hỏi của người dùng đặt bên cạnh.
- **Lưu ý:** Không cần kết luận các danh mục sai về nghiệp vụ; vấn đề cần khảo sát là mức độ dễ hiểu đối với người dân.

## Slide 7 --- Vấn đề 3: Nhập địa chỉ cụ thể bằng tay

- Người dùng có thể phải tự nhớ và nhập địa chỉ.
- Khi tên hoặc ranh giới đơn vị hành chính thay đổi, người dùng có thể không chắc cần nhập tên nào.
- Địa chỉ nhập không rõ ràng có thể làm giảm độ chính xác của vị trí phản ánh.
- **Liên hệ chủ đề:** Thiết kế biểu mẫu, giảm thao tác nhập liệu và phản hồi trực quan.
- **Hình ảnh:** So sánh trường nhập địa chỉ bằng chữ với thao tác chọn vị trí trên bản đồ.

## Slide 8 --- Mục tiêu và phạm vi dự án

- **Mục tiêu 1:** Giúp người dân tìm chức năng gửi phản ánh nhanh hơn.
- **Mục tiêu 2:** Giúp người dân chọn đúng loại vấn đề bằng nhãn rõ ràng và hướng dẫn ngắn.
- **Mục tiêu 3:** Giảm khó khăn khi chọn vị trí bằng cách hỗ trợ bản đồ và giao diện khu dân cư 3D.
- **Phạm vi:** Thiết kế và kiểm chứng luồng từ trang chủ đến chọn loại vấn đề, chọn vị trí, mô tả và xem lại phản ánh.
- **Ngoài phạm vi kiểm chứng:** Không đánh giá thời gian xử lý thực tế của cơ quan chức năng. Việc theo dõi phản ánh không được xem là vấn đề trọng tâm đã xác nhận.
- **Chuyển ý:** Trước khi thiết kế giải pháp, cần xác định người dùng và mô tả luồng thao tác.



3.

# **PHẦN 2 --- CASE STUDY VÀ LUỒNG HIỆN TẠI (Slide 9--13)**

1.

## **Slide 9 --- Giới thiệu case study**

- **Tên sản phẩm:** Hệ thống tiếp nhận và xử lý phản ánh của người dân.
- **Mục đích:** Cho phép người dân báo cáo các vấn đề công cộng như đường hư hỏng, đèn đường không sáng, rác thải hoặc ngập úng.
- **Người dùng chính:** Người dân gửi phản ánh.
- **Người dùng liên quan:** Cán bộ/nhân viên tiếp nhận và xử lý phản ánh.
- **Trực quan:** Sơ đồ hai nhóm người dùng và mục tiêu của mỗi nhóm.

## Slide 10 --- Thiết kế cho nhiều nhóm người dùng

- Hệ thống hướng đến mọi công dân: người đi làm, người trẻ, người lớn tuổi, người ít quen công nghệ và cán bộ nhà nước.
- Không giả định rằng mọi người dùng đều hiểu thuật ngữ hành chính hoặc quen thao tác trên ứng dụng.
- Các nhu cầu chung: dễ tìm chức năng, dễ đọc, dễ hiểu, dễ sửa sai và không phải nhập lại thông tin.
- **Nguyên tắc:** Thiết kế theo khả năng và nhu cầu sử dụng, không gắn cứng mức độ thành thạo công nghệ với độ tuổi hay nghề nghiệp.
- **Trực quan:** Các chân dung người dùng đơn giản cùng nhu cầu chính.

## Slide 11 --- Nhiệm vụ người dùng cần hoàn thành

Người dân cần có khả năng:

1. Tìm chức năng gửi phản ánh.
2. Chọn loại vấn đề phù hợp.
3. Xác định vị trí xảy ra vấn đề.
4. Mô tả vấn đề và thêm hình ảnh nếu cần.
5. Kiểm tra lại thông tin trước khi gửi.

- **Trực quan:** Danh sách nhiệm vụ hoặc sơ đồ hành trình người dùng.
- **Thông điệp:** Đây là chuỗi nhiệm vụ mà giao diện phải hỗ trợ xuyên suốt.

## Slide 12 --- Luồng hiện tại và các điểm gây khó khăn

- Mô tả luồng quan sát được ở mức tổng quát: **Mở ứng dụng → tìm chức** **năng phản ánh → chọn danh mục → nhập thông tin vị trí → điền nội** **dung → tiếp tục quy trình gửi.**
- Đánh dấu ba điểm cần cải thiện:
  - Tìm chức năng không trực tiếp.
  - Chọn danh mục cần diễn giải.
  - Nhập vị trí đòi hỏi nhớ và gõ địa chỉ.
- **Trực quan:** Sơ đồ luồng hiện tại, dùng màu nhấn ở ba điểm vướng mắc.
- **Lưu ý:** Chỉ mô tả chính xác những bước nhóm đã quan sát; nếu chưa kiểm chứng một bước cụ thể, ghi rõ đây là luồng khái quát.

## Slide 13 --- Tổng hợp khoảng trống trải nghiệm

- **Khoảng trống 1:** Chức năng quan trọng chưa đủ nổi bật so với các công cụ khác.
- **Khoảng trống 2:** Tên danh mục chưa giúp người dùng dễ dàng xác định lựa chọn phù hợp.
- **Khoảng trống 3:** Luồng chọn vị trí phụ thuộc nhiều vào khả năng nhập địa chỉ.
- **Kết luận:** Giải pháp phải xử lý trực tiếp ba khoảng trống này.
- **Chuyển ý:** Từ các vấn đề đã xác định, nhóm đề xuất một luồng báo cáo ngắn, rõ ràng và có hướng dẫn.



4.


# PHẦN 3 --- PHÂN TÍCH HỆ THỐNG VÀ MÔ HÌNH HÓA (Slide 14--19)

## Slide 14 --- Use Case Diagram: Ai sử dụng hệ thống và làm gì?

- **Mục đích:** Xác định các tác nhân và chức năng chính trong hệ thống tiếp nhận, xử lý phản ánh.
- **Tác nhân chính:**
  - **Người dân:** gửi phản ánh, chọn danh mục, xác định vị trí, mô tả vấn đề, đính kèm ảnh và xem lại thông tin đã gửi nếu prototype có chức năng này.
  - **Cán bộ tiếp nhận/xử lý:** tiếp nhận và cập nhật trạng thái xử lý trong phạm vi hệ thống được mô hình hóa.
- **Use case gợi ý:** Gửi phản ánh; chọn danh mục; xác định vị trí; nhập mô tả; đính kèm ảnh; xem lại trước khi gửi; tiếp nhận phản ánh; cập nhật kết quả xử lý.
- Có thể biểu diễn các bước chọn danh mục, vị trí và nhập mô tả như các bước bao gồm trong use case “Gửi phản ánh” nếu phù hợp với cách nhóm mô hình hóa.
- **Lưu ý phạm vi:** Chỉ đưa các chức năng mà nhóm thực sự dự định mô hình hóa hoặc xây dựng. Nếu website chỉ là prototype giao diện, ghi rõ chức năng phía cán bộ là phạm vi hệ thống đề xuất, chưa chắc đã được triển khai.
- **Trực quan:** Một Use Case Diagram có ranh giới hệ thống, tác nhân và các use case; tránh đưa từng cú nhấp chuột thành một use case.

## Slide 15 --- Activity Diagram As-Is: Quy trình hiện tại

- **Mục đích:** Mô tả luồng hiện tại ở mức tổng quát và xác định các điểm có thể gây khó khăn.
- **Luồng khái quát:** Mở ứng dụng → tìm chức năng phản ánh → chọn danh mục → nhập địa chỉ/vị trí → mô tả vấn đề → tiếp tục quy trình gửi.
- Đánh dấu ba điểm cần khảo sát: khó tìm chức năng; danh mục khó phân biệt; nhập vị trí phụ thuộc vào việc nhớ và gõ địa chỉ.
- Dùng nút quyết định ở những chỗ có lựa chọn hoặc kiểm tra thực sự được quan sát; không tự thêm nhánh nghiệp vụ chưa xác minh.
- **Lưu ý:** Đây là mô hình As-Is khái quát dựa trên trải nghiệm đã ghi nhận, không khẳng định mọi người dùng đều gặp cùng một vấn đề hoặc mọi bước bên trong hệ thống chính thức đều đã được xác minh.
- **Trực quan:** Activity Diagram có điểm bắt đầu/kết thúc, hành động, mũi tên và các điểm vướng mắc được chú thích.

## Slide 16 --- Activity Diagram To-Be: Quy trình đề xuất

- **Mục đích:** Cho thấy quy trình được đề xuất nhằm giảm các khó khăn đã xác định.
- **Luồng gợi ý:** Trang chủ → chọn “Gửi phản ánh” → chọn danh mục có giải thích → tìm/chọn vị trí trên bản đồ 2D hoặc góc nhìn 3D → nhập mô tả và ảnh tùy chọn → xem lại → xác nhận gửi.
- Bổ sung nhánh xử lý: chưa chọn danh mục → hiển thị hướng dẫn; chưa xác nhận vị trí → yêu cầu kiểm tra; lỗi dữ liệu/gửi → giữ thông tin và cho phép sửa hoặc thử lại.
- Thể hiện điểm quay lại chỉnh sửa mà không mất dữ liệu đã nhập.
- **Lưu ý:** Nhánh gửi thành công/thất bại chỉ mô tả hành vi mong muốn của prototype nếu chưa kết nối backend thật.
- **Trực quan:** Activity Diagram To-Be, dùng màu hoặc chú thích để chỉ ra các thay đổi so với As-Is.

## Slide 17 --- User Flow + Wireframe: Người dùng đi qua các màn hình như thế nào?

- **User Flow** thể hiện đường đi giữa các màn hình và những lựa chọn/nhánh quan trọng; không thay thế Activity Diagram mà tập trung vào trải nghiệm điều hướng trên giao diện.
- **Luồng chính:** Trang chủ → Chọn loại vấn đề → Chọn vị trí → Mô tả/đính kèm ảnh → Xem lại và gửi → Kết quả mô phỏng.
- **Wireframe** thể hiện bố cục khung của từng màn hình, chưa cần màu sắc hoặc hình ảnh hoàn thiện:
  1. Trang chủ: “Công cụ yêu thích” và nút “Gửi phản ánh” nổi bật.
  2. Chọn loại vấn đề: thẻ danh mục, mô tả ngắn và trợ giúp chọn mục.
  3. Chọn vị trí: tìm kiếm, bản đồ 2D/3D, ghim và xác nhận địa chỉ.
  4. Mô tả: trường nội dung, ảnh tùy chọn, nhắc lỗi cạnh trường.
  5. Xem lại: tóm tắt thông tin, nút chỉnh sửa và gửi.
- **Trực quan:** Đặt User Flow ở bên trái và năm wireframe thu nhỏ ở bên phải hoặc chia thành hai slide nếu cần trình bày chi tiết.
- **Lưu ý:** User Flow và Wireframe là sản phẩm thiết kế UX, không phải hai loại sơ đồ UML chuẩn.

## Slide 18 --- Sequence Diagram: Điều gì xảy ra khi người dân gửi phản ánh?

- **Mục đích:** Mô tả thứ tự trao đổi giữa các thành phần trong một lần gửi phản ánh.
- **Lifeline gợi ý:** Người dân → Giao diện web (Frontend) → Backend/API → Cơ sở dữ liệu (Database); có thể thêm dịch vụ lưu ảnh nếu nhóm thật sự mô hình hóa chức năng đính kèm.
- **Luồng thành công:** Người dân bấm gửi → Frontend kiểm tra dữ liệu cơ bản → gửi yêu cầu lên Backend → Backend kiểm tra dữ liệu → lưu phản ánh và thông tin liên quan → trả kết quả → Frontend hiển thị phản hồi.
- **Luồng lỗi:** Dữ liệu không hợp lệ hoặc lưu thất bại → Backend trả lỗi phù hợp → Frontend hiển thị thông báo và giữ lại dữ liệu để người dùng sửa/thử lại.
- **Lưu ý:** Đây là kiến trúc đề xuất cho website. Nếu backend/database chưa được triển khai, trình bày như mô hình thiết kế, không nói rằng các tương tác này đang chạy thật.
- **Trực quan:** Sequence Diagram với lifeline, message theo thứ tự thời gian và khung `alt` cho nhánh thành công/lỗi.


## Slide 19 --- ERD: Hệ thống cần lưu những dữ liệu nào?

- **Mục đích:** Mô tả các thực thể dữ liệu chính và quan hệ giữa chúng; ERD là sơ đồ mô hình dữ liệu, không phải sơ đồ UML.
- **Thực thể gợi ý:**
  - **User** (`user_id`, `name` hoặc tên hiển thị, thông tin liên hệ nếu cần).
  - **Report** (`report_id`, `user_id`, `category_id`, `location_id`, `description`, `created_at`, `status` nếu có trong phạm vi).
  - **Category** (`category_id`, `name`, `description`).
  - **Location** (`location_id`, `address_text`, `latitude`, `longitude`; dữ liệu 3D chỉ thêm nếu hệ thống thực sự cần lưu).
  - **Attachment** (`attachment_id`, `report_id`, `file_url` hoặc đường dẫn lưu trữ, `file_type`) nếu có đính kèm ảnh.
- **Quan hệ gợi ý:** Một người dùng có thể tạo nhiều phản ánh; mỗi phản ánh thuộc một danh mục; mỗi phản ánh gắn với một vị trí; một phản ánh có thể có nhiều tệp đính kèm.
- Thể hiện khóa chính (PK), khóa ngoại (FK), lực lượng quan hệ (cardinality) và các trường cần thiết; tránh lưu dữ liệu cá nhân không cần thiết.
- **Lưu ý:** Đây là ERD đề xuất cho website/prototype. Cần điều chỉnh theo tính năng thực tế, yêu cầu bảo mật và dữ liệu mà nhóm thật sự lưu.
- **Trực quan:** ERD với các thực thể, khóa PK/FK và quan hệ 1-n rõ ràng.

# PHẦN 4 --- GIẢI PHÁP: THIẾT KẾ GIAO DIỆN VÀ LUỒNG THAO TÁC (Slide 20--28)

1.

## Slide 20 --- Nguyên tắc thiết kế giải pháp

- Mỗi trang có một nhiệm vụ chính và một hành động tiếp theo dễ nhận biết.
- Đưa chức năng gửi phản ánh lên vị trí dễ thấy.
- Dùng ngôn ngữ gần gũi, tránh thuật ngữ không được giải thích.
- Giảm nhập liệu thủ công bằng cách cho phép chọn vị trí trực quan.
- Cho phép quay lại và sửa thông tin mà không phải bắt đầu lại.
- **Thông điệp:** Mọi quyết định thiết kế đều phải gắn với ít nhất một vấn đề đã xác định.

## Slide 21 --- Luồng đề xuất tổng thể

**Trang chủ → Chọn loại vấn đề → Chọn vị trí (nếu có trong loại vấn đề) → Mô tả và đính kèm ảnh →** **Xem lại và gửi.**

- Hiển thị tiến trình để người dùng biết mình đang ở bước nào.
- Giữ nút Quay lại và Tiếp tục ở vị trí nhất quán.
- Lưu giữ dữ liệu đã nhập khi người dùng quay lại chỉnh sửa.
- **Trực quan:** Sơ đồ năm màn hình nối với nhau bằng mũi tên.

## Slide 22 --- Màn hình 1: Trang chủ và công cụ yêu thích

- Đưa khu vực **"Công cụ yêu thích"** lên đầu trang, ngay dưới phần chào mừng/tiêu đề.
- Đặt nút **"Gửi phản ánh"** ở vị trí nổi bật trong khu vực ở dưới nếu người dùng chưa thêm vào mục trên.
- Các công cụ khác và những phần ít được sử dụng được đặt thấp hơn, không chiếm vị trí ưu tiên.
- Nếu cần, cho phép người dùng tùy chỉnh công cụ yêu thích; trong prototype, có thể thiết lập sẵn "Gửi phản ánh" là công cụ nổi bật.
- Giữ các lối tắt "Tra cứu phản ánh" và "Hướng dẫn" ở vị trí dễ nhận ra nhưng ít nổi bật hơn hành động chính.
- **Vấn đề được giải quyết:** Khó tìm chức năng.
- **Trực quan:** Wireframe trang chủ, đánh dấu khu vực công cụ yêu thích ở trên cùng.

## Slide 23 --- Màn hình 2: Chọn loại vấn đề

- Tiêu đề: "Bạn muốn phản ánh điều gì?"
- Dùng các thẻ lớn có biểu tượng, tên đơn giản và ví dụ cụ thể.
- Danh mục minh họa:
  - Hạ tầng công cộng.
    - Đường sá, vỉa hè.
    - Đèn đường.
    - Rác thải, vệ sinh.
    - Thoát nước, ngập úng.
    - Khác.
  - Cá nhân, tổ chức.
  - Vấn đề khác.
- Dưới từng thẻ danh mục, có 1 đoạn chữ nhỏ giải thích mục đó đang báo cáo, khiếu nại điều gì, tránh gây khó hiểu, nhầm lẫn.
- Có phần "Chưa biết chọn mục nào?" để giải thích hoặc gợi ý lựa chọn.
- Hiển thị rõ thẻ đã chọn; không cho tiếp tục nếu chưa chọn loại vấn đề bắt buộc.
- **Vấn đề được giải quyết:** Danh mục khó hiểu và khó phân biệt.
- **Trực quan:** Wireframe các thẻ danh mục trước và sau khi chọn.

## Slide 24 --- Màn hình 3: Chọn vị trí bằng bản đồ/3D

- Tiêu đề: "Vấn đề xảy ra ở đâu?"
- Cho phép tìm kiếm địa điểm bằng chữ, dùng vị trí hiện tại nếu người dùng đồng ý, hoặc chọn trực tiếp trên bản đồ.
- Có thể chuyển giữa **Bản đồ 2D** và **Góc nhìn khu dân cư 3D**.
- Người dùng chạm vào vị trí xảy ra vấn đề để đặt ghim; hệ thống hiển thị địa chỉ hoặc địa điểm gần nhất có thể xác định.
- Người dùng xác nhận vị trí trước khi tiếp tục.
- Nếu vị trí không đủ chính xác, thông báo để người dùng điều chỉnh; không tự khẳng định địa chỉ khi chưa xác định được.
- **Vấn đề được giải quyết:** Khó nhớ và nhập địa chỉ.
- **Trực quan:** Wireframe có thanh tìm kiếm, công cụ chuyển chế độ, bản đồ/3D và thẻ vị trí đã chọn.

## Slide 25 --- Màn hình 4: Mô tả và đính kèm bằng chứng

- Hiển thị loại vấn đề và vị trí đã chọn để người dùng kiểm tra.
- Có trường mô tả với câu gợi ý ngắn.
- Cho phép chụp ảnh hoặc chọn ảnh từ thiết bị nếu phạm vi prototype hỗ trợ.
- Đánh dấu rõ trường bắt buộc và trường tùy chọn.
- Khi thiếu dữ liệu bắt buộc, thông báo ngay cạnh trường cần sửa và giữ lại nội dung đã nhập.
- **Mục tiêu:** Giữ biểu mẫu ngắn gọn, tránh yêu cầu người dùng nhập lại thông tin đã cung cấp.

## Slide 26 --- Màn hình 5: Xem lại và gửi phản ánh

- Hiển thị tóm tắt loại vấn đề, vị trí, mô tả và ảnh đính kèm.
- Mỗi phần có nút "Chỉnh sửa" để người dùng quay lại đúng bước.
- Nút "Gửi phản ánh" được đặt nổi bật ở cuối trang.
- Sau khi gửi trong prototype, hiển thị kết quả phù hợp với phản hồi của hệ thống mô phỏng.
- Nếu gửi thành công, có thể hiển thị mã tham chiếu mẫu; nếu thất bại, nêu nguyên nhân có thể xử lý và cung cấp nút thử lại.
- **Lưu ý:** Đây là hành vi đề xuất cho sản phẩm mẫu, không phải khẳng định về trạng thái gửi của VNeID.

## Slide 27 --- Các tình huống phụ và xử lý lỗi

- Người dùng chưa chọn loại vấn đề → yêu cầu chọn trước khi tiếp tục.
- Người dùng chưa xác định vị trí → giải thích vị trí cần được xác nhận.
- Người dùng không cấp quyền vị trí → vẫn cho phép tìm kiếm hoặc chọn thủ công.
- Người dùng muốn sửa dữ liệu → quay lại bước tương ứng và giữ dữ liệu đã nhập.
- Người dùng gặp lỗi gửi → hiển thị thông báo rõ ràng và hướng dẫn thử lại.
- **Trực quan:** Sơ đồ luồng chính có nhánh lỗi và đường quay lại.

## Slide 28 --- Đối chiếu giải pháp với ba vấn đề

| **Vấn đề**        | **Quyết định thiết kế**                                   | **Kết quả mong đợi**                                 |
| ----------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| Khó tìm chức năng | Đưa công cụ yêu thích và nút "Gửi phản ánh" lên đầu trang | Người dùng tìm thấy chức năng nhanh hơn              |
| Danh mục khó hiểu | Nhãn đơn giản, ví dụ minh họa và hướng dẫn chọn           | Người dùng chọn loại vấn đề phù hợp hơn              |
| Khó nhập địa chỉ  | Tìm kiếm kết hợp bản đồ 2D/3D và ghim vị trí              | Người dùng xác định vị trí thuận tiện, chính xác hơn |



- **Thông điệp:** Giải pháp được thiết kế từ vấn đề, không thêm tính năng chỉ để làm giao diện phức tạp hơn.
- **Chuyển ý:** Giao diện trông dễ hiểu chưa đủ; cần kiểm tra người dùng có thực sự hoàn thành nhiệm vụ hay không.



5.

# **PHẦN 5 --- KIỂM CHỨNG VÀ ĐÁNH GIÁ KHẢ NĂNG SỬ DỤNG (Slide 29--32)**

1.

## **Slide 29 --- Kiểm chứng luồng thao tác là gì?**

- Kiểm chứng khả năng sử dụng là quan sát người dùng thực hiện nhiệm vụ để xem họ có thể hoàn thành dễ dàng hay không.
- Không chỉ hỏi người dùng có thích giao diện hay không; cần quan sát họ bấm gì, dừng ở đâu, mắc lỗi nào và có cần trợ giúp không.
- Kiểm chứng tập trung vào ba vấn đề đã xác định.
- **Trực quan:** Người tham gia thực hiện nhiệm vụ trên prototype, người quan sát ghi lại kết quả.

## Slide 30 --- Kịch bản kiểm thử

**Kịch bản 1 --- Tìm chức năng:**\
"Bạn nhìn thấy một đèn đường bị hỏng. Hãy bắt đầu gửi phản ánh."

**Kịch bản 2 --- Chọn danh mục:**\
"Bạn phát hiện một ổ gà trên đường. Hãy chọn loại vấn đề phù hợp."

**Kịch bản 3 --- Chọn vị trí:**\
"Hãy đánh dấu vị trí của chiếc đèn đường hỏng gần một địa điểm dễ nhận biết."

- Cho người tham gia thực hiện mà không hướng dẫn từng thao tác.
- Có thể thử nghiệm với người có mức độ thành thạo công nghệ khác nhau.
- Không yêu cầu người tham gia gửi phản ánh thật tới hệ thống chính thức.

## Slide 31 --- Tiêu chí và cách ghi nhận kết quả

- **Tỷ lệ hoàn thành:** Người dùng hoàn thành được nhiệm vụ hay không.
- **Thời gian hoàn thành:** Mất bao lâu để tìm chức năng, chọn danh mục và vị trí.
- **Lỗi thao tác:** Chọn sai mục, đặt ghim sai hoặc phải quay lại nhiều lần.
- **Mức độ cần trợ giúp:** Người dùng có cần người quan sát giải thích không.
- **Phản hồi của người dùng:** Họ thấy bước nào khó hiểu hoặc mất tự tin nhất.
- **Cách ghi nhận:** Bảng gồm nhiệm vụ, kết quả, thời gian, lỗi và nhận xét.
- **Lưu ý:** Chưa đưa ra con số kết quả khi chưa thực hiện kiểm thử thực tế.

## Slide 32 --- Từ kết quả kiểm thử đến cải tiến

- Tổng hợp các lỗi và điểm gây nhầm lẫn quan sát được.
- Ưu tiên sửa những vấn đề ngăn người dùng hoàn thành nhiệm vụ.
- Ví dụ: nếu người dùng vẫn bỏ qua nút gửi phản ánh, điều chỉnh vị trí hoặc cách trình bày nút; nếu chọn sai danh mục, viết lại nhãn và ví dụ; nếu chọn sai vị trí, cải thiện thao tác đặt ghim và phần xác nhận địa chỉ.
- Kiểm thử lại sau khi sửa để xem thay đổi có cải thiện kết quả không.
- **Trực quan:** Chu trình "Thiết kế → Kiểm thử → Phát hiện vấn đề → Cải tiến → Kiểm thử lại".



6.

# **PHẦN 6 --- TRÌNH DIỄN SẢN PHẨM: TỪNG TRANG, TỪNG TÍNH NĂNG (Slide 33--36)**

1.

## **Slide 33 --- Tổng quan website/prototype**

- Giới thiệu trang chủ và mục tiêu của sản phẩm.
- Cho thấy khu vực công cụ yêu thích được đặt ở đầu trang.
- Tóm tắt năm bước gửi phản ánh.
- Nêu rõ phần nào đang hoạt động thực tế và phần nào được mô phỏng, đặc biệt là bản đồ/3D và xử lý gửi phản ánh.
- **Trình diễn:** Mở trang chủ, chỉ ra vị trí nút "Gửi phản ánh" và bắt đầu luồng.

## Slide 34 --- Trình diễn tìm chức năng và chọn danh mục

- Từ trang chủ, chọn "Gửi phản ánh".
- Chọn một tình huống mẫu, ví dụ "Đèn đường không sáng".
- Chỉ ra nhãn đơn giản, mô tả ngắn và trạng thái danh mục được chọn.
- Minh họa thông báo nếu người dùng bấm tiếp tục mà chưa chọn danh mục.
- **Điểm cần chứng minh:** Người dùng không cần tìm hướng dẫn riêng để bắt đầu và hiểu lựa chọn.

## Slide 35 --- Trình diễn chọn vị trí 2D/3D

- Mở màn hình vị trí.
- Tìm một địa điểm hoặc chuyển sang góc nhìn 3D.
- Chọn vị trí xảy ra vấn đề và điều chỉnh ghim nếu cần.
- Có nút bấm "Dùng vị trí hiện tại" (cần được cấp quyền).
- Xem địa chỉ/địa điểm được hệ thống xác định và xác nhận.
- So sánh ngắn với việc phải nhập toàn bộ địa chỉ bằng tay.
- **Điểm cần chứng minh:** 3D hỗ trợ nhận biết không gian và chọn vị trí; nó không thay thế các cách nhập vị trí khác.

## Slide 36 --- Trình diễn hoàn tất luồng và tình huống lỗi

- Nhập mô tả, thêm ảnh mẫu nếu có, rồi xem lại thông tin.
- Quay lại sửa một trường để chứng minh dữ liệu không bị mất.
- Thử một tình huống thiếu dữ liệu bắt buộc hoặc gửi thất bại trong môi trường mô phỏng.
- Minh họa thông báo lỗi và cách người dùng tiếp tục.
- Kết thúc bằng kết quả gửi mô phỏng, ghi rõ đây là kết quả của prototype.
- **Điểm cần chứng minh:** Luồng có thể hoàn thành, có phản hồi và hỗ trợ sửa sai.



7.

# **PHẦN 7 --- ÔN TẬP VÀ KẾT LUẬN (Slide 37--40)**

1.

## **Slide 37 --- Tổng kết các vấn đề và giải pháp**

- **Khó tìm chức năng** → Đưa công cụ yêu thích và nút gửi phản ánh lên vị trí nổi bật.
- **Danh mục khó hiểu** → Sử dụng ngôn ngữ gần gũi, ví dụ và hướng dẫn.
- **Khó nhập vị trí** → Hỗ trợ tìm kiếm địa chỉ và chọn vị trí trực quan qua bản đồ/3D.
- **Thông điệp:** Mỗi quyết định thiết kế cần giải quyết một nhu cầu hoặc khó khăn đã xác định.

## Slide 38 --- Bài học rút ra

- Thiết kế giao diện bắt đầu từ nhiệm vụ và khó khăn của người dùng.
- Luồng thao tác cần rõ ràng, nhất quán và có cách sửa lỗi.
- Tính năng 3D chỉ có giá trị khi giúp người dùng xác định vị trí tốt hơn.
- Không nên tuyên bố giao diện đã dễ sử dụng nếu chưa kiểm thử với người dùng.
- Kết quả kiểm thử nên dẫn đến các thay đổi cụ thể và có thể kiểm tra lại.

## Slide 39 --- Kết luận và hỏi đáp

- Nhắc lại mục tiêu: giúp người dân tìm chức năng, chọn đúng loại phản ánh và xác định vị trí thuận tiện hơn.
- Tóm tắt quy trình: **Xác định vấn đề → Thiết kế → Kiểm thử → Cải** **tiến.**
- Mời đặt câu hỏi.
- **Thông điệp kết thúc:** Một giao diện tốt không chỉ cung cấp chức năng; nó giúp người dùng biết phải làm gì, thực hiện được việc đó và sửa sai khi cần.

## Slide 40 --- Câu hỏi ôn tập nhanh

Thông báo dùng Kahoot để trả lời 20 câu hỏi trắc nghiệm liên quan đến chủ đề.



8.

# **Sản phẩm và tài liệu cần chuẩn bị**

- ☐ Use Case Diagram thể hiện tác nhân và chức năng chính.
- ☐ Activity Diagram As-Is và To-Be, có đánh dấu điểm vướng mắc và nhánh xử lý lỗi.
- ☐ User Flow và wireframe cho năm màn hình chính.
- ☐ Sequence Diagram mô tả luồng gửi phản ánh giữa Frontend, Backend và Database.
- ☐ ERD có thực thể, PK/FK và quan hệ dữ liệu.
- ☐ Sơ đồ luồng hiện tại và ba điểm gây khó khăn.
- ☐ Wireframe hoặc prototype cho năm màn hình chính (dùng để trình diễn và kiểm thử).
- ☐ Minh họa trang chủ với công cụ yêu thích ở đầu trang.
- ☐ Thiết kế các danh mục phản ánh bằng ngôn ngữ dễ hiểu.
- ☐ Bản đồ 2D/3D hoặc prototype thể hiện cách chọn vị trí.
- ☐ Sơ đồ luồng chính và các nhánh xử lý lỗi.
- ☐ Kịch bản kiểm thử, tiêu chí đánh giá và bảng ghi nhận kết quả.
- ☐ Bằng chứng cho các vấn đề đã xác nhận, chẳng hạn bài đăng công khai hoặc ghi chép trải nghiệm trực tiếp.
- ☐ Kịch bản demo theo đúng thứ tự các trang.
- ☐ Câu hỏi ôn tập và slide kết luận.

# Nguyên tắc trình bày

- Mỗi slide nên có một thông điệp chính; ưu tiên sơ đồ, wireframe và ảnh minh họa thay vì đoạn văn dài.
- Phân biệt rõ **vấn đề đã quan sát**, **giả thuyết cần kiểm chứng**, **giải pháp đề xuất** và **kết quả kiểm thử thực tế**.
- Không trình bày kết quả kiểm thử giả định như dữ liệu đã thu thập.
- Không đánh giá chất lượng xử lý phản ánh ngoài đời nếu dự án chỉ kiểm chứng giao diện và luồng thao tác.
- Trong phần demo, ưu tiên chứng minh người dùng hoàn thành nhiệm vụ hơn là chỉ giới thiệu giao diện đẹp.
