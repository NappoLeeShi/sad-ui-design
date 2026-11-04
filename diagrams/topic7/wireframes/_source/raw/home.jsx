const assetPathPrefix = "https://www.figma.com/api/mcp/asset/65448059-d2f5-41e2-996f-9e194c996963";
const imgPfp = `${assetPathPrefix}/25d86.svg`;
const imgSearchButton = `${assetPathPrefix}/9a981.svg`;
const imgIcon = `${assetPathPrefix}/5d04c.svg`;
const imgIcon1 = `${assetPathPrefix}/86145.svg`;

export default function HomePage() {
  return (
    <div className="bg-white relative size-full" data-node-id="34:126" data-name="HomePage">
      <div className="absolute bg-white h-[874px] left-0 top-0 w-[402px]" data-node-id="34:5" data-name="BG" />
      <div className="absolute contents left-0 top-0" data-node-id="34:60" data-name="Top">
        <div className="absolute bg-[#737373] h-[180px] left-0 top-0 w-[402px]" data-node-id="34:6" data-name="BG" />
        <div className="absolute left-[16px] size-[69px] top-[35px]" data-node-id="34:7" data-name="PFP">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPfp} />
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[128px] not-italic text-[24px] text-white top-[51px] whitespace-nowrap" data-node-id="34:36">
          NGUYỄN VĂN A
        </p>
        <div className="absolute contents left-[128px] top-[7px]" data-node-id="34:61" data-name="IDLevel">
          <div className="absolute bg-white h-[28px] left-[128px] rounded-[90px] top-[7px] w-[146px]" data-node-id="34:9" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[normal] left-[142px] not-italic text-[12px] text-black top-[14px] whitespace-nowrap" data-node-id="34:8">
            Định danh mức 2
          </p>
          <CodeConnectSnippet data-node-id="34:32" data-name="IllutrativeIcon">
            {/* Material 3 Design Kit component
Docs:
  https://m3.material.io/components/badges/overview  */}
            <Badges textBadgeLabel="i" badgeLabel="i" variantSize="Large" size="Large" />
          </CodeConnectSnippet>
        </div>
        <div className="absolute contents left-[10px] top-[114px]" data-node-id="34:41" data-name="QR_CCCD">
          <div className="absolute bg-white h-[56px] left-[10px] rounded-[8px] top-[114px] w-[186px]" data-node-id="34:37" data-name="Background" />
          <div className="absolute bg-[#a9a9a9] left-[16px] rounded-[8px] size-[45px] top-[120px]" data-node-id="34:40" data-name="Icon" />
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Bold'] leading-[normal] left-[68px] not-italic text-[14px] text-black top-[120px] whitespace-nowrap" data-node-id="34:42">
            Mã QR
          </p>
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[67px] not-italic text-[14px] text-black top-[142px] whitespace-nowrap" data-node-id="34:43">
            Thẻ CCCD
          </p>
        </div>
        <div className="absolute contents left-[205px] top-[114px]" data-node-id="34:45" data-name="QR_DinhDanhDienTu">
          <div className="absolute bg-white h-[56px] left-[205px] rounded-[8px] top-[114px] w-[186px]" data-node-id="34:46" data-name="Background" />
          <div className="absolute bg-[#a9a9a9] left-[211px] rounded-[8px] size-[45px] top-[120px]" data-node-id="34:47" data-name="Icon" />
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Bold'] leading-[normal] left-[263px] not-italic text-[14px] text-black top-[120px] whitespace-nowrap" data-node-id="34:48">
            Mã QR
          </p>
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[262px] not-italic text-[14px] text-black top-[142px] whitespace-nowrap" data-node-id="34:49">
            Định danh điện tử
          </p>
        </div>
        <div className="absolute left-[361px] size-[30px] top-[7px]" data-node-id="34:58" data-name="SearchButton">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchButton} />
        </div>
      </div>
      <div className="absolute contents left-[10px] top-[196px]" data-node-id="34:85" data-name="FavouriteUtilities">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Be_Vietnam_Pro:Bold'] justify-center leading-[0] left-[84.5px] not-italic text-[16px] text-black text-center top-[204px] tracking-[0.5px] whitespace-nowrap" data-node-id="34:59">
          <p className="leading-[var(--static\/label-small\/line-height,16px)]">Tiện ích yêu thích</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Be_Vietnam_Pro:Regular'] justify-center leading-[0] left-[333.5px] not-italic text-[14px] text-black text-center top-[205px] tracking-[0.5px] whitespace-nowrap" data-node-id="34:67">
          <p className="leading-[var(--static\/label-small\/line-height,16px)]">Chỉnh sửa</p>
        </div>
        <CodeConnectSnippet data-node-id="34:64" data-name="edit">
          {/* Material 3 Design Kit component */}
          <Edit />
        </CodeConnectSnippet>
        <div className="absolute contents left-[89px] top-[228px]" data-node-id="34:72" data-name="Utility">
          <div className="absolute left-[91px] size-[64px] top-[228px]" data-node-id="34:69" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[123.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:71">
            Thẻ căn cước, CCCD
          </p>
        </div>
        <div className="absolute contents left-[245px] top-[228px]" data-node-id="34:79" data-name="Utility">
          <div className="absolute left-[247px] size-[64px] top-[228px]" data-node-id="34:80" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[279.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:81">
            Thẻ BHYT
          </p>
        </div>
        <div className="absolute contents left-[323px] top-[228px]" data-node-id="34:82" data-name="Utility">
          <div className="absolute left-[325px] size-[64px] top-[228px]" data-node-id="34:83" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[357.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:84">
            etc.
          </p>
        </div>
        <div className="absolute contents left-[167px] top-[228px]" data-node-id="34:76" data-name="Utility">
          <div className="absolute left-[169px] size-[64px] top-[228px]" data-node-id="34:77" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[201.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:78">
            Giấy phép lái xe
          </p>
        </div>
        <div className="absolute contents left-[10px] top-[228px]" data-node-id="34:73" data-name="Utility">
          <div className="absolute left-[12px] size-[64px] top-[228px]" data-node-id="34:74" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[44.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:75">{`Tiếp nhận góp ý, phản ánh & vướng mắc`}</p>
        </div>
      </div>
      <div className="absolute contents left-[10px] top-[196px]" data-node-id="34:86" data-name="FavouriteUtilities">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Be_Vietnam_Pro:Bold'] justify-center leading-[0] left-[84.5px] not-italic text-[16px] text-black text-center top-[204px] tracking-[0.5px] whitespace-nowrap" data-node-id="34:87">
          <p className="leading-[var(--static\/label-small\/line-height,16px)]">Tiện ích yêu thích</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Be_Vietnam_Pro:Regular'] justify-center leading-[0] left-[333.5px] not-italic text-[14px] text-black text-center top-[205px] tracking-[0.5px] whitespace-nowrap" data-node-id="34:88">
          <p className="leading-[var(--static\/label-small\/line-height,16px)]">Chỉnh sửa</p>
        </div>
        <CodeConnectSnippet data-node-id="34:89" data-name="edit">
          {/* Material 3 Design Kit component */}
          <Edit />
        </CodeConnectSnippet>
        <div className="absolute contents left-[89px] top-[228px]" data-node-id="34:90" data-name="Utility">
          <div className="absolute left-[91px] size-[64px] top-[228px]" data-node-id="34:91" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[123.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:92">
            Thẻ căn cước, CCCD
          </p>
        </div>
        <div className="absolute contents left-[245px] top-[228px]" data-node-id="34:93" data-name="Utility">
          <div className="absolute left-[247px] size-[64px] top-[228px]" data-node-id="34:94" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[279.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:95">
            Thẻ BHYT
          </p>
        </div>
        <div className="absolute contents left-[323px] top-[228px]" data-node-id="34:96" data-name="Utility">
          <div className="absolute left-[325px] size-[64px] top-[228px]" data-node-id="34:97" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[357.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:98">
            etc.
          </p>
        </div>
        <div className="absolute contents left-[167px] top-[228px]" data-node-id="34:99" data-name="Utility">
          <div className="absolute left-[169px] size-[64px] top-[228px]" data-node-id="34:100" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[201.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:101">
            Giấy phép lái xe
          </p>
        </div>
        <a className="absolute contents cursor-pointer left-[10px] top-[228px]" data-node-id="34:102" data-name="Utility">
          <div className="absolute left-[12px] size-[64px] top-[228px]" data-node-id="34:103" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[88px] leading-[16px] left-[44.5px] not-italic text-[10px] text-black text-center top-[295px] tracking-[0.5px] w-[69px]" data-node-id="34:104">{`Tiếp nhận góp ý, phản ánh & vướng mắc`}</p>
        </a>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[10px] items-start leading-[0] left-[10px] overflow-x-auto overflow-y-clip p-[10px] top-[408px] w-[379px]" data-node-id="34:107" data-name="Utilities">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="34:109" data-name="Utility">
          <div className="col-1 ml-[2px] mt-0 relative row-1 size-[64px]" data-node-id="34:110" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] col-1 font-['Be_Vietnam_Pro:Regular'] h-[40px] leading-[16px] ml-0 mt-[67px] not-italic relative row-1 text-[10px] text-black text-center tracking-[0.5px] w-[69px]" data-node-id="34:111">
            Thủ tục hành chính
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="34:113" data-name="Utility">
          <div className="col-1 ml-[2px] mt-0 relative row-1 size-[64px]" data-node-id="34:114" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] col-1 font-['Be_Vietnam_Pro:Regular'] h-[40px] leading-[16px] ml-0 mt-[67px] not-italic relative row-1 text-[10px] text-black text-center tracking-[0.5px] w-[69px]" data-node-id="34:115">
            An sinh xã hội
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="34:116" data-name="Utility">
          <div className="col-1 ml-[2px] mt-0 relative row-1 size-[64px]" data-node-id="34:117" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] col-1 font-['Be_Vietnam_Pro:Regular'] h-[40px] leading-[16px] ml-0 mt-[67px] not-italic relative row-1 text-[10px] text-black text-center tracking-[0.5px] w-[69px]" data-node-id="34:118">
            Hồ sơ sức khỏe
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="34:119" data-name="Utility">
          <div className="col-1 ml-[2px] mt-0 relative row-1 size-[64px]" data-node-id="34:120" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] col-1 font-['Be_Vietnam_Pro:Regular'] h-[40px] leading-[16px] ml-0 mt-[67px] not-italic relative row-1 text-[10px] text-black text-center tracking-[0.5px] w-[69px]" data-node-id="34:121">
            An ninh trật tự/dịch vụ công
          </p>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="34:122" data-name="Utility">
          <div className="col-1 ml-[2px] mt-0 relative row-1 size-[64px]" data-node-id="34:123" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
          </div>
          <p className="[word-break:break-word] col-1 font-['Be_Vietnam_Pro:Regular'] h-[40px] leading-[16px] ml-0 mt-[67px] not-italic relative row-1 text-[10px] text-black text-center tracking-[0.5px] w-[69px]" data-node-id="34:124">
            Dịch vụ khác
          </p>
        </div>
      </div>
      <div className="absolute left-[254px] size-[100px] top-[690px]" data-node-id="54:18" />
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
These styles are contained in the design: M3/sys/light/on-error: #FFFFFF, M3/label/small: Font(family: "Static/Label Small/Font", style: Static/Label Small/Weight, size: Static/Label Small/Size, weight: 500, lineHeight: Static/Label Small/Line Height, letterSpacing: Static/Label Small/Tracking), M3/sys/light/on-surface: #1D1B20.
If the node is connected to a code component in the users codebase via Code Connect, the connected component will be included in the final markup wrapped in a CodeConnectSnippet element, with relevant imports at the top of the file. There are two formats: 1. Single snippet: <CodeConnectSnippet data-snippet-language="React"><TitleComponent>Hello World</TitleComponent></CodeConnectSnippet> 2. Multiple options: <CodeConnectSnippet data-snippet-language="React" options={[<Button variant="primary" />, <Button variant="secondary" />]} /> IMPORTANT: the CodeConnectSnippet wrapper element should not be part of the final code. For the options format, choose the single most appropriate option to use in your implementation. The source of the code component will be in the import path, e.g. import {ComponentName } from 'path/to/component'; IMPORTANT: the import path may not be relative/may point to a URL, so you should search for the component in the codebase and MUST use it if possible.
Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Badges
**Node ID:** 34:27

Badges are used to indicate a notification, item count, or other information relating to a navigation destination. They are placed on the ending edge of icons, typically within other components.

**Documentation:**
- [https://m3.material.io/components/badges/overview ](https://m3.material.io/components/badges/overview )
The generated code contains image and SVG URL constants, e.g. const image = `${assetPathPrefix}/<asset file name>`, where assetPathPrefix is declared once at the top of the code and every asset URL interpolates it. These URLs are temporary download sources and expire after 7 days. Download each asset into the project with curl -L, then replace its URL in the generated code with a reference to the downloaded asset. Never use the temporary URLs as runtime image sources.