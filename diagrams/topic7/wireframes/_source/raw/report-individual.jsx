const assetPathPrefix = "https://www.figma.com/api/mcp/asset/7f49c9f3-06e9-4f8a-9fa1-be68bb1a81d7";
const imgBg = `${assetPathPrefix}/f59cc.svg`;
const imgCheck = `${assetPathPrefix}/f6f5a.svg`;
const imgChevronDown = `${assetPathPrefix}/1eb57.svg`;
const imgCalendar = `${assetPathPrefix}/8bbdf.svg`;
const imgUpload = `${assetPathPrefix}/50834.svg`;
const imgTrash = `${assetPathPrefix}/bb916.svg`;

export default function ReportIndividualOrOrganization() {
  return (
    <div className="bg-white relative size-full" data-node-id="54:917" data-name="Report_IndividualOrOrganization">
      <div className="absolute h-[874px] left-[-1px] top-0 w-[402px]" data-node-id="54:918" data-name="BG">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
      </div>
      <div className="absolute contents left-0 top-0" data-node-id="54:920" data-name="Top">
        <div className="absolute bg-[#dfdfdf] h-[60px] left-0 top-0 w-[402px]" data-node-id="54:921" data-name="BG" />
        <div className="absolute flex h-[58px] items-center justify-center left-[44px] top-[15px] w-[342.361px]" data-node-id="54:922">
          <div className="flex-none rotate-[0.22deg]">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular'] h-[56.692px] leading-[normal] not-italic relative text-[16px] text-black w-[342.147px]">Báo cáo cá nhân, tổ chức</p>
          </div>
        </div>
        <CodeConnectSnippet data-node-id="54:923" data-name="arrow_back">
          {/* Material 3 Design Kit component */}
          <ArrowBack />
        </CodeConnectSnippet>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[814px] items-start left-0 overflow-x-clip overflow-y-auto p-[16px] top-[60px] w-[402px]" data-node-id="67:22" data-name="Form Content">
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:164">
          Dấu *: trường đề xuất bắt buộc. Các trường khác có thể bỏ trống.
        </p>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:23" data-name="Section — Người báo cáo">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:24">
            1. Thông tin người báo cáo
          </p>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:25" data-name="Field — Họ và tên">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:26">
              Họ và tên *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:27" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:28">
                Nhập họ và tên
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:232" data-name="Field — Số định danh cá nhân">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:233">
              Số định danh cá nhân *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:234" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:235">
                Nhập số định danh cá nhân
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:29" data-name="Field — Số điện thoại">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:30">
              Số điện thoại *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:31" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:32">
                Nhập số điện thoại
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:37" data-name="Field — Địa chỉ thường trú">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:38">
              Địa chỉ thường trú *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:39" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:40">
                Nhập địa chỉ thường trú
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:41" data-name="Checkbox — Tổ chức">
            <div className="bg-[#111827] border border-[#111827] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-node-id="67:42" data-name="Frame">
              <div className="relative shrink-0 size-[12px]" data-node-id="67:221" data-name="check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:43">
              Tôi là người đại diện tổ chức
            </p>
          </div>
          <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="67:44" data-name="Conditional — Tổ chức">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:165">
              Khi chọn “Tôi là người đại diện tổ chức”, các trường bên dưới sẽ được hiển thị để nhập thông tin tổ chức.
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:194">
              Khi chưa chọn, các trường này sẽ bị ẩn.
            </p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:45" data-name="Field — Tên tổ chức">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:46">
                Tên tổ chức *
              </p>
              <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:47" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:48">
                  Nhập tên tổ chức
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:49" data-name="Field — Vai trò đại diện">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:50">
                Vai trò đại diện *
              </p>
              <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:51" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:52">
                  Nhập vai trò
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:53" data-name="Section — Đối tượng bị báo cáo">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:54">
            2. Thông tin đối tượng bị báo cáo
          </p>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:55" data-name="Field — Loại đối tượng">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:56">
              Loại đối tượng bị báo cáo *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:57" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="67:58">
                Cá nhân
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="67:147" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#57616e] text-[12px] w-[min-content]" data-node-id="67:166">
            Ba trạng thái minh họa độc lập bên dưới; mỗi trạng thái chỉ có các trường tương ứng.
          </p>
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="67:195" data-name="State — Cá nhân">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="67:196" data-name="Frame">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#111827] text-[13px]" data-node-id="67:199">
                Minh họa — Cá nhân
              </p>
            </div>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:236" data-name="Dropdown — Cá nhân">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="67:237">
                Cá nhân
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="67:238" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:200">
              Nhập thông tin biết được về đối tượng; không yêu cầu số định danh cá nhân.
            </p>
            <div className="border-[#e5e7eb] border-solid border-t content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="67:60" data-name="Conditional — Cá nhân">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:61" data-name="Field — Họ và tên đối tượng">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:62">
                  Họ và tên đối tượng
                </p>
                <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:63" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:64">
                    Nhập họ và tên
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:65" data-name="Field — Số điện thoại đối tượng">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:66">
                  Số điện thoại đối tượng
                </p>
                <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:67" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:68">
                    Nhập số điện thoại
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="67:201" data-name="State — Tổ chức">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="67:202" data-name="Frame">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#111827] text-[13px]" data-node-id="67:204">
                Minh họa — Tổ chức
              </p>
            </div>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:240" data-name="Dropdown — Tổ chức">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="67:241">
                Tổ chức
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="67:242" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:205">
              Nhập tên tổ chức và địa chỉ nếu biết.
            </p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:169" data-name="Điều kiện — Tên tổ chức bị báo cáo">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:170">
                Tên tổ chức bị báo cáo
              </p>
              <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:171" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:172">
                  Nhập tên tổ chức (nếu biết)
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:173" data-name="Điều kiện — Địa chỉ tổ chức">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:174">
                Địa chỉ tổ chức
              </p>
              <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:175" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:176">
                  Nhập địa chỉ (nếu biết)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="67:206" data-name="State — Không rõ">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="67:207" data-name="Frame">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold'] font-semibold leading-[normal] min-w-px not-italic relative text-[#111827] text-[13px]" data-node-id="67:209">
                Minh họa — Không rõ
              </p>
            </div>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:244" data-name="Dropdown — Không rõ">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="67:245">
                Không rõ
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="67:246" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:210">
              Ẩn thông tin định danh; nhập dấu hiệu nhận biết nếu có.
            </p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:211" data-name="Field — Mô tả dấu hiệu nhận biết">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:212">
                Mô tả dấu hiệu nhận biết
              </p>
              <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex flex-col h-[80px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:213" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] w-full" data-node-id="67:214">
                  Mô tả dấu hiệu nhận biết (ví dụ: biển hiệu, trang phục, phương tiện, đặc điểm nhận dạng)...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:69" data-name="Section — Vụ việc">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:70">
            3. Thông tin vụ việc
          </p>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:71" data-name="Field — Hành vi">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:72">
              Hành vi cần báo cáo *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:73" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="67:74">
                Khác
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="67:150" data-name="chevron-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#57616e] text-[12px] w-[min-content]" data-node-id="67:178">
            Lựa chọn: Lừa đảo / Đe dọa, quấy rối / Xâm phạm tài sản / Khác.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#57616e] text-[12px] w-[min-content]" data-node-id="67:179">
            Khi chọn Khác, nhập hành vi cụ thể:
          </p>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:180" data-name="Điều kiện — Hành vi khác *">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:181">
              Hành vi khác *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:182" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:183">
                Mô tả ngắn hành vi cần báo cáo
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="67:215" data-name="State — Không rõ thời gian">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:81" data-name="Checkbox — Không rõ thời gian">
              <div className="bg-[#111827] border border-[#111827] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-node-id="67:82" data-name="Frame">
                <div className="relative shrink-0 size-[12px]" data-node-id="67:227" data-name="check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:83">
                Không rõ thời gian
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:184">
              Chọn “Không rõ thời gian” để bỏ qua ngày, giờ. Địa điểm xảy ra được nhập tại mục 4.
            </p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:76" data-name="Field — Thời gian">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap" data-node-id="67:77">
                Thời gian xảy ra
              </p>
              <div className="bg-[#f3f4f6] border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:78" data-name="Frame">
                <div className="relative shrink-0 size-[16px]" data-node-id="67:156" data-name="calendar">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:80">
                  DD/MM/YYYY HH:mm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:84" data-name="Section — Địa điểm">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:85">
            4. Địa điểm
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#57616e] text-[12px] w-[min-content]" data-node-id="67:185">
            Địa điểm xảy ra vụ việc. Bỏ yêu cầu địa chỉ khi chọn “Không rõ địa điểm”.
          </p>
          <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="67:217" data-name="State — Không rõ địa điểm">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:95" data-name="Checkbox — Không rõ địa điểm">
              <div className="bg-[#111827] border border-[#111827] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[18px]" data-node-id="67:96" data-name="Frame">
                <div className="relative shrink-0 size-[12px]" data-node-id="67:230" data-name="check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:97">
                Không rõ địa điểm
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#57616e] text-[12px] w-full" data-node-id="67:219">
              Địa chỉ, bản đồ và vị trí hiện tại không khả dụng khi chưa rõ địa điểm.
            </p>
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:86" data-name="Field — Địa chỉ chi tiết">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap" data-node-id="67:87">
                Địa chỉ chi tiết
              </p>
              <div className="bg-[#f3f4f6] border border-[#e5e7eb] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:88" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:89">
                  Nhập địa chỉ cụ thể
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="67:90" data-name="Map Actions">
              <div className="bg-[#f3f4f6] border border-[#e5e7eb] border-solid content-stretch flex flex-[1_0_0] h-[36px] items-center justify-center min-w-px relative rounded-[8px]" data-node-id="67:91" data-name="Frame">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap" data-node-id="67:92">
                  Chọn trên bản đồ
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:186" data-name="Checkbox — Dùng vị trí hiện tại">
              <div className="bg-[#f3f4f6] border border-[#e5e7eb] border-solid relative rounded-[4px] shrink-0 size-[18px]" data-node-id="67:187" data-name="Frame" />
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap" data-node-id="67:188">
                Dùng vị trí hiện tại
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:98" data-name="Section — Bằng chứng">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:99">
            5. Bằng chứng (Tối đa 3 ảnh)
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#57616e] text-[12px] w-[min-content]" data-node-id="67:189">
            Không bắt buộc. Nếu đính kèm, tải 1–3 ảnh; có thể xem trước và xóa từng ảnh.
          </p>
          <div className="bg-[#f3f4f6] border border-[#9ca3af] border-dashed content-stretch flex flex-col gap-[4px] h-[80px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-node-id="67:100" data-name="Upload Zone">
            <div className="relative shrink-0 size-[20px]" data-node-id="67:153" data-name="upload">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUpload} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" data-node-id="67:102">
              Chọn ảnh từ thiết bị
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:103" data-name="Preview 1">
            <div className="bg-[#e5e7eb] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-node-id="67:104" data-name="Frame">
              <div className="bg-[#e5ebf0] flex-[1_0_0] min-h-px relative w-full" data-node-id="67:105" data-name="Rectangle" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="67:106" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:107">
                Ảnh xem trước 1 (minh họa)
              </p>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="67:108" data-name="Frame">
                <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px relative rounded-[6px]" data-node-id="67:109" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[11px] whitespace-nowrap" data-node-id="67:110">
                    Thay thế
                  </p>
                </div>
                <div className="bg-[#fee2e2] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-node-id="67:111" data-name="Frame">
                  <div className="relative shrink-0 size-[14px]" data-node-id="67:159" data-name="trash">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="67:113" data-name="Preview 2">
            <div className="bg-[#e5e7eb] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 size-[64px]" data-node-id="67:114" data-name="Frame">
              <div className="bg-[#e5ebf0] flex-[1_0_0] min-h-px relative w-full" data-node-id="67:115" data-name="Rectangle" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="67:116" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:117">
                Ảnh xem trước 2 (minh họa)
              </p>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="67:118" data-name="Frame">
                <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-w-px relative rounded-[6px]" data-node-id="67:119" data-name="Frame">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[11px] whitespace-nowrap" data-node-id="67:120">
                    Thay thế
                  </p>
                </div>
                <div className="bg-[#fee2e2] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-node-id="67:121" data-name="Frame">
                  <div className="relative shrink-0 size-[14px]" data-node-id="67:162" data-name="trash">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrash} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:123" data-name="Section — Nội dung báo cáo">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:124">
            6. Nội dung báo cáo
          </p>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:125" data-name="Field — Tóm tắt">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:126">
              Tóm tắt vụ việc *
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:127" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:128">
                Nhập tóm tắt ngắn gọn
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="67:129" data-name="Field — Chi tiết">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" data-node-id="67:130">
              Chi tiết mô tả
            </p>
            <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex flex-col h-[80px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="67:131" data-name="Frame">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap" data-node-id="67:132">
                Nhập chi tiết vụ việc...
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="67:133" data-name="Section — Xác nhận">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="67:134">
            7. Xác nhận
          </p>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="67:135" data-name="Checkbox — Xác nhận">
            <div className="bg-white border border-[#d1d5db] border-solid relative rounded-[4px] shrink-0 size-[18px]" data-node-id="67:136" data-name="Frame" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[1.5] min-w-px not-italic relative text-[#374151] text-[12px]" data-node-id="67:137">
              Tôi xác nhận thông tin đã cung cấp là chính xác và chịu trách nhiệm về nội dung báo cáo. *
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[11px] w-full whitespace-nowrap" data-node-id="67:138" data-name="Legend">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#ef4444]" data-node-id="67:139">
              *
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#6b7280]" data-node-id="67:140">
              Trường đề xuất bắt buộc
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="67:141" data-name="Footer Actions">
          <div className="bg-white border border-[#d1d5db] border-solid content-stretch flex flex-[1_0_0] h-[44px] items-center justify-center min-w-px relative rounded-[8px]" data-node-id="67:142" data-name="Btn — Quay lại">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap" data-node-id="67:143">
              Quay lại
            </p>
          </div>
          <div className="bg-[#111827] content-stretch flex flex-[1_0_0] h-[44px] items-center justify-center min-w-px relative rounded-[8px]" data-node-id="67:144" data-name="Btn — Gửi báo cáo">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="67:145">
              Gửi báo cáo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.
These styles are contained in the design: M3/sys/light/on-surface: #1D1B20.
If the node is connected to a code component in the users codebase via Code Connect, the connected component will be included in the final markup wrapped in a CodeConnectSnippet element, with relevant imports at the top of the file. There are two formats: 1. Single snippet: <CodeConnectSnippet data-snippet-language="React"><TitleComponent>Hello World</TitleComponent></CodeConnectSnippet> 2. Multiple options: <CodeConnectSnippet data-snippet-language="React" options={[<Button variant="primary" />, <Button variant="secondary" />]} /> IMPORTANT: the CodeConnectSnippet wrapper element should not be part of the final code. For the options format, choose the single most appropriate option to use in your implementation. The source of the code component will be in the import path, e.g. import {ComponentName } from 'path/to/component'; IMPORTANT: the import path may not be relative/may point to a URL, so you should search for the component in the codebase and MUST use it if possible.
The generated code contains image and SVG URL constants, e.g. const image = `${assetPathPrefix}/<asset file name>`, where assetPathPrefix is declared once at the top of the code and every asset URL interpolates it. These URLs are temporary download sources and expire after 7 days. Download each asset into the project with curl -L, then replace its URL in the generated code with a reference to the downloaded asset. Never use the temporary URLs as runtime image sources.