const assetPathPrefix = "https://www.figma.com/api/mcp/asset/22cc0eff-49c6-4545-8836-0420cb5a169a";
const imgBg = `${assetPathPrefix}/4a956.svg`;
const imgRectangle4 = `${assetPathPrefix}/82697.svg`;

export default function FeedbackSelection() {
  return (
    <div className="bg-white relative size-full" data-node-id="43:6" data-name="FeedbackSelection">
      <div className="absolute bg-white h-[874px] left-0 top-0 w-[402px]" data-node-id="43:7" data-name="BG" />
      <div className="absolute contents left-[17px] top-[73px]" data-node-id="45:283" data-name="Report_Infastructure">
        <div className="absolute h-[96px] left-[17px] top-[73px] w-[368px]" data-node-id="45:284" data-name="BG">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
        </div>
        <div className="absolute left-[33px] size-[64px] top-[89px]" data-node-id="45:285">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[54px] leading-[normal] left-[109px] not-italic text-[16px] text-black top-[94px] w-[237px]" data-node-id="45:286">
          Phản ánh về cơ sở hạ tầng
        </p>
      </div>
      <div className="absolute contents left-[16px] top-[189px]" data-node-id="45:299" data-name="Report_IndividualOrOrganization">
        <div className="absolute h-[96px] left-[16px] top-[189px] w-[368px]" data-node-id="45:300" data-name="BG">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
        </div>
        <div className="absolute left-[32px] size-[64px] top-[205px]" data-node-id="45:301">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[54px] leading-[normal] left-[108px] not-italic text-[16px] text-black top-[210px] w-[237px]" data-node-id="45:302">
          Báo cáo cá nhân, tổ chức
        </p>
      </div>
      <div className="absolute contents left-[17px] top-[305px]" data-node-id="45:303" data-name="Report_PartyInspectionAndOversight">
        <div className="absolute h-[96px] left-[17px] top-[305px] w-[368px]" data-node-id="45:304" data-name="BG">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
        </div>
        <div className="absolute left-[33px] size-[64px] top-[321px]" data-node-id="45:305">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[54px] leading-[normal] left-[109px] not-italic text-[16px] text-black top-[326px] w-[237px]" data-node-id="45:306">
          Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng
        </p>
      </div>
      <div className="absolute contents left-[17px] top-[426px]" data-node-id="45:307" data-name="Report_PublicServices">
        <div className="absolute h-[96px] left-[17px] top-[426px] w-[368px]" data-node-id="45:308" data-name="BG">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBg} />
        </div>
        <div className="absolute left-[33px] size-[64px] top-[442px]" data-node-id="45:309">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] h-[54px] leading-[normal] left-[109px] not-italic text-[16px] text-black top-[447px] w-[237px]" data-node-id="45:310">
          Phản ánh kiến nghị về dịch vụ công
        </p>
      </div>
      <div className="absolute contents left-0 top-0" data-node-id="44:86">
        <div className="absolute bg-[#dfdfdf] h-[60px] left-0 top-0 w-[402px]" data-node-id="44:58" data-name="BG" />
        <div className="absolute flex h-[58px] items-center justify-center left-[44px] top-[15px] w-[342.361px]" data-node-id="44:18">
          <div className="flex-none rotate-[0.22deg]">
            <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular'] h-[56.692px] leading-[normal] not-italic relative text-[17px] text-black w-[342.147px]">{`Tiếp nhận góp ý, phản ánh & vướng mắc`}</p>
          </div>
        </div>
        <CodeConnectSnippet data-node-id="44:31" data-name="arrow_back">
          {/* Material 3 Design Kit component */}
          <ArrowBack />
        </CodeConnectSnippet>
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