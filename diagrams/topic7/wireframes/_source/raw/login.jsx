const assetPathPrefix = "https://www.figma.com/api/mcp/asset/db062ae8-5c97-47f9-a7e2-390342ffebcc";
const imgAppIcon = `${assetPathPrefix}/f7282.svg`;
const imgLanguageSelection = `${assetPathPrefix}/6eea0.svg`;

export default function Login() {
  return (
    <a className="bg-white block cursor-pointer relative size-full" data-node-id="43:87" data-name="Login">
      <div className="absolute bg-white h-[874px] left-0 top-0 w-[402px]" data-node-id="43:88" data-name="BG" />
      <div className="absolute contents left-[21px] top-[344px]" data-node-id="43:262" data-name="Extras">
        <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[198px] not-italic text-[14px] text-black text-center top-[826px] underline w-[246px]" data-node-id="43:248">
          Chính sách quyền riêng tư
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[199px] not-italic text-[14px] text-black text-center top-[850px] w-[246px]" data-node-id="43:249">
          Phiên bản x.x.xx
        </p>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Bold'] leading-[normal] left-[21px] not-italic text-[16px] text-black text-left top-[344px] whitespace-nowrap" data-node-id="43:218">
          Quên mật khẩu
        </p>
        <div className="absolute contents left-[255px] top-[344px]" data-node-id="43:263" data-name="ChangeAccount">
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[255px] not-italic text-[16px] text-black text-left top-[344px] whitespace-nowrap" data-node-id="43:219">
            Đổi tài khoản
          </p>
          <CodeConnectSnippet data-node-id="43:226" data-name="Refresh cw">
            {/* Simple Design System component */}
            <RefreshCw />
          </CodeConnectSnippet>
        </div>
      </div>
      <div className="[word-break:break-word] absolute contents leading-[normal] left-[48px] text-left top-[46px] whitespace-nowrap" data-node-id="43:253" data-name="Title">
        <p className="absolute font-['Be_Vietnam_Pro:Italic'] italic left-[48px] text-[#434343] text-[14px] top-[81px]" data-node-id="43:168">
          Vui lòng nhập thông tin đăng nhập để tiếp tục
        </p>
        <p className="absolute font-['Be_Vietnam_Pro:Bold'] left-[126px] not-italic text-[24px] text-black top-[46px]" data-node-id="43:177">
          ĐĂNG NHẬP
        </p>
      </div>
      <div className="absolute contents left-[19px] top-[118px]" data-node-id="43:191" data-name="SelectedAccount">
        <div className="absolute bg-white border border-black border-solid h-[76px] left-[19px] rounded-[8px] top-[118px] w-[365px]" data-node-id="43:185" data-name="BG" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Be_Vietnam_Pro:Bold'] justify-center leading-[0] left-[110px] not-italic text-[20px] text-black text-center top-[142px] tracking-[0.5px] whitespace-nowrap" data-node-id="43:186">
          <p className="leading-[var(--static\/label-small\/line-height,16px)]">NGUYỄN VĂN A</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[29px] not-italic text-[#434343] text-[14px] text-left top-[163px] whitespace-nowrap" data-node-id="43:188">
          03********67
        </p>
        <div className="absolute left-[316px] size-[60px] top-[126px]" data-node-id="43:190" data-name="AppIcon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAppIcon} />
        </div>
      </div>
      <div className="absolute contents left-[19px] top-[213px]" data-node-id="43:261" data-name="Password">
        <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[19px] not-italic text-[16px] text-black text-left top-[213px] whitespace-nowrap" data-node-id="43:192">
          Mật khẩu
        </p>
        <div className="absolute contents left-[19px] top-[242px]" data-node-id="43:193" data-name="SelectedAccount">
          <div className="absolute bg-white border border-black border-solid h-[76px] left-[19px] rounded-[8px] top-[242px] w-[365px]" data-node-id="43:194" data-name="BG" />
          <p className="[word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[55px] not-italic text-[#797979] text-[20px] text-left top-[268px] whitespace-nowrap" data-node-id="43:196">
            Nhập mật khẩu
          </p>
        </div>
        <CodeConnectSnippet data-node-id="43:216" data-name="HidePassword">
          {/* Simple Design System component */}
          <EyeOff />
        </CodeConnectSnippet>
        <CodeConnectSnippet data-node-id="43:209" data-name="LockIcon">
          {/* Simple Design System component */}
          <Lock />
        </CodeConnectSnippet>
      </div>
      <div className="absolute contents left-[23px] top-[721px]" data-node-id="43:250" data-name="Redirect_Tutorial">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[76px] not-italic text-[14px] text-black text-center top-[769px] w-[106px]" data-node-id="43:245">
          Hướng dẫn sử dụng
        </p>
        <CodeConnectSnippet data-node-id="43:235" data-name="Book open">
          {/* Simple Design System component */}
          <BookOpen />
        </CodeConnectSnippet>
      </div>
      <div className="absolute contents left-[145px] top-[721px]" data-node-id="43:251" data-name="Redirect_FAQ">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[198px] not-italic text-[14px] text-black text-center top-[769px] w-[106px]" data-node-id="43:246">
          Câu hỏi thường gặp
        </p>
        <CodeConnectSnippet data-node-id="43:239" data-name="comment">
          {/* Material 3 Design Kit component */}
          <Comment />
        </CodeConnectSnippet>
      </div>
      <div className="absolute contents left-[269px] top-[721px]" data-node-id="43:252" data-name="Redirect_SupportHotline">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Be_Vietnam_Pro:Regular'] leading-[normal] left-[322px] not-italic text-[14px] text-black text-center top-[769px] w-[106px]" data-node-id="43:247">
          Hotline hỗ trợ
        </p>
        <CodeConnectSnippet data-node-id="43:243" data-name="call_end">
          {/* Material 3 Design Kit component */}
          <CallEnd />
        </CodeConnectSnippet>
      </div>
      <div className="absolute contents left-[24px] top-[17px]" data-node-id="43:260">
        <div className="absolute h-[34px] left-[331px] top-[17px] w-[58px]" data-node-id="43:183" data-name="LanguageSelection">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLanguageSelection} />
        </div>
        <CodeConnectSnippet data-node-id="43:175" data-name="BackButton">
          {/* Material 3 Design Kit component */}
          <ArrowBack />
        </CodeConnectSnippet>
      </div>
    </a>
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