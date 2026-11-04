const assetPathPrefix = "https://www.figma.com/api/mcp/asset/33d000e6-3372-4b94-949a-7a912287f998";
const imgBg = `${assetPathPrefix}/b223a.svg`;

export default function ReportIndividualOrOrganizationHistory() {
  return (
    <div className="bg-white relative size-full" data-node-id="54:845" data-name="Report_IndividualOrOrganization_History">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-node-id="54:846" data-name="BG">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
      </div>
      <div className="absolute contents left-0 top-0" data-node-id="54:847">
        <div className="absolute bg-[#dfdfdf] h-[60px] left-0 top-0 w-[402px]" data-node-id="54:848" data-name="BG" />
        <div className="absolute flex h-[58px] items-center justify-center left-[44px] top-[15px] w-[342.361px]" data-node-id="54:849">
          <div className="flex-none rotate-[0.22deg]">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular'] h-[56.692px] leading-[normal] not-italic relative text-[16px] text-black w-[342.147px]">Báo cáo cá nhân, tổ chức</p>
          </div>
        </div>
        <CodeConnectSnippet data-node-id="54:850" data-name="arrow_back">
          {/* Material 3 Design Kit component */}
          <ArrowBack />
        </CodeConnectSnippet>
      </div>
      <div className="absolute contents left-[28px] top-[771px]" data-node-id="54:864" data-name="HotlineButton">
        <div className="absolute bg-[#737373] h-[64px] left-[28px] rounded-[8px] top-[771px] w-[336px]" data-node-id="54:865" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[197.5px] not-italic text-[28px] text-center text-white top-[786px] whitespace-nowrap" data-node-id="54:866">
          Đường dây nóng
        </p>
      </div>
      <div className="absolute contents left-[33px] top-[155px]" data-node-id="54:885" data-name="ReportHistoryButton">
        <div className="absolute bg-white border border-black border-solid h-[64px] left-[33px] rounded-[90px] top-[155px] w-[336px]" data-node-id="54:886" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[195.5px] not-italic text-[28px] text-black text-center top-[170px] whitespace-nowrap" data-node-id="54:887">
          Lịch sử yêu cầu
        </p>
      </div>
      <a className="absolute contents cursor-pointer left-[33px] top-[73px]" data-node-id="54:888" data-name="NewReportButton">
        <div className="absolute bg-[#737373] h-[64px] left-[33px] rounded-[90px] top-[73px] w-[336px]" data-node-id="54:889" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[202px] not-italic text-[28px] text-center text-white top-[88px] whitespace-nowrap" data-node-id="54:890">
          Tạo yêu cầu mới
        </p>
      </a>
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