import clsx from "clsx";
import svgPaths from "./svg-943rg685fb";
import imgScreenshot20260305At0905042 from "figma:asset/7b872ff2c435495300035d55db7369c581870026.png";
import imgIphone17ProMaxMockup17725952114972 from "figma:asset/1b5c8f8a32b48dfa0f1bc0089b0e0478ca1e3539.png";
import imgBibit from "figma:asset/cfe4620fe8ecc3f59644c0d3a7e6ba2fa6d7ead2.png";
type BibitHelper5Props = {
  additionalClassNames?: string;
};

function BibitHelper5({ children, additionalClassNames = "" }: React.PropsWithChildren<BibitHelper5Props>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-[20%_14.09%_15%_15%]" data-name="Layer 3">
        {children}
      </div>
    </div>
  );
}

function Portofolio({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[21.76px]" data-name="Illustration / Portofolio / Saham">
        {children}
      </div>
      <BibitPortofolioName text="Bibit Saham" text1="Saham" />
    </div>
  );
}

function BibitHelper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8" className="absolute block size-full">
      <g id="Background">{children}</g>
    </svg>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
      <div className="bg-white content-stretch flex h-[31.52px] items-start relative shrink-0 w-full" data-name="Produk">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[7.68px] py-[5.12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[12.8px]">
      <div className="absolute inset-[15%]" data-name="clock 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96 8.96">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BibitLayer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-[25.01%] left-[30%] right-[30%] top-1/4">
      <div className="absolute inset-[-5%_-6.25%_-5.01%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.76014 7.04">
          <g id="Layer 3">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function BibitHelper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#edf4f9] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[2.56px] shrink-0">
      <Wrapper1>{children}</Wrapper1>
      <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">{`23:56:05 `}</p>
    </div>
  );
}
type BibitTextProps = {
  text: string;
};

function BibitText({ text, children }: React.PropsWithChildren<BibitTextProps>) {
  return (
    <div className="bg-[#ebf8f3] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[2.56px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[12.8px]">
        <div className="absolute inset-[15%_20%_18.14%_20%]" data-name="Layer 3">
          <div className="absolute inset-[-3.74%_-4.17%_-3.75%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.31982 9.19905">
              <g id="Layer 3">{children}</g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">{text}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative w-full">
        <div className="h-[17.92px] relative rounded-[4px] shrink-0 w-full" data-name="Button Master">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[12.8px] py-[6.4px] relative size-full">
              <div className="content-stretch flex gap-[2.56px] items-center justify-center relative shrink-0" data-name="Container">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BibitHelper2Props = {
  text: string;
  text1: string;
};

function BibitHelper2({ text, text1 }: BibitHelper2Props) {
  return (
    <Wrapper3>
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
      <div className="bg-[#9343c8] self-stretch shrink-0 w-[2.56px]" />
      <Wrapper2>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[1.28px] items-start leading-[1.35] min-h-px min-w-px not-italic relative text-[7.68px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#333]">{text}</p>
          <p className="relative shrink-0 text-[#2479b4]">{text1}</p>
        </div>
      </Wrapper2>
    </Wrapper3>
  );
}

function BibitButtonVariantButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#00ab6b] relative rounded-[4px] shrink-0 w-[103.36px]">
      <Wrapper>
        <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[7.68px] text-center text-white whitespace-nowrap">{children}</p>
      </Wrapper>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.28px] items-start leading-[1.35] min-h-px min-w-px not-italic relative text-[7.68px] whitespace-nowrap">
      <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696]">{text}</p>
      <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333]">{text1}</p>
    </div>
  );
}
type BibitHelper1Props = {
  text: string;
  text1: string;
};

function BibitHelper1({ text, text1, children }: React.PropsWithChildren<BibitHelper1Props>) {
  return (
    <div className="content-stretch flex gap-[7.68px] items-center justify-center relative shrink-0 w-full">
      <Helper text={text} text1={text1} />
      <div className="relative rounded-[4px] shrink-0 w-[103.36px]" data-name="Button Variant/Button">
        <Wrapper>{children}</Wrapper>
        <div aria-hidden="true" className="absolute border-[#00ab6b] border-[0.64px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}
type ItemProps = {
  text: string;
  text1: string;
};

function Item({ text, text1 }: ItemProps) {
  return (
    <Wrapper2>
      <div className="content-stretch flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[1.28px] items-start leading-[1.35] min-h-px min-w-px not-italic relative text-[7.68px]">
        <p className="relative shrink-0 text-[#333] w-full">{text}</p>
        <p className="relative shrink-0 text-[#2479b4] w-full">{text1}</p>
      </div>
    </Wrapper2>
  );
}
type ProdukProps = {
  text: string;
  text1: string;
};

function Produk({ text, text1 }: ProdukProps) {
  return (
    <div className="bg-white content-stretch flex h-[31.52px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
      <div className="bg-[#00ab6b] self-stretch shrink-0 w-[2.56px]" />
      <Item text={text} text1={text1} />
    </div>
  );
}
type BibitHelperProps = {
  text: string;
  text1: string;
};

function BibitHelper({ text, text1 }: BibitHelperProps) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
      <Produk text={text} text1={text1} />
    </div>
  );
}
type BibitPortofolioNameProps = {
  text: string;
  text1: string;
};

function BibitPortofolioName({ text, text1 }: BibitPortofolioNameProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.28px] items-start leading-[1.35] min-h-px min-w-px not-italic relative text-[7.68px] whitespace-nowrap">
      <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333]">{text}</p>
      <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696]">{text1}</p>
    </div>
  );
}
type BibitProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function Bibit({ className, state = "1" }: BibitProps) {
  const is2Or3Or5 = ["2", "3", "5"].includes(state);
  const is4 = state === "4";
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905042} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : is4 ? "top-[-1503px]" : state === "3" ? "top-[-1002px]" : state === "2" ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[408.163px] left-1/2 top-[calc(50%+0.27px)] w-[200px]" data-name="iphone-17-pro-max-mockup-1772595211497 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIphone17ProMaxMockup17725952114972} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[380.64px] left-1/2 top-[calc(50%+0.27px)] w-[760px]">
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-0 overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[199.8px] w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <div className="bg-[#fdeded] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[2.56px] shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12.8px]">
                    <div className="absolute inset-[15%_20%_18.12%_20%]" data-name="Layer 3">
                      <div className="absolute inset-[-3.74%_-4.17%_-3.73%_-4.17%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.31982 9.19906">
                          <g id="Layer 3">
                            <path d="M4.15974 6.31903V8.87906" id="Vector" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                            <path d={svgPaths.p1f2dfe80} id="Vector_2" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                            <path d={svgPaths.p25f9fc00} id="Vector_3" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                            <path d={svgPaths.p11d9e300} id="Vector_4" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                            <path d={svgPaths.p12c3be00} id="Vector_5" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">{`Jual Reksa Dana `}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <div className="overflow-clip relative shrink-0 size-[21.76px]" data-name="Illustration/Portofolio">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 52 52"}>
                    <g id="12">
                      <path d={is4 ? svgPaths.p3940c900 : svgPaths.pd18ca00} fill="var(--fill-0, #E5F7F0)" id="Ellipse 779" />
                      <g id="Layer x0020 1">
                        <path clipRule="evenodd" d={is4 ? svgPaths.p88fcd00 : svgPaths.p2a76b2c0} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4249" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <g id="Group 3445">
                          <path clipRule="evenodd" d={is4 ? svgPaths.p2b5f3c80 : svgPaths.p10f910f0} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4250" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        </g>
                        <path clipRule="evenodd" d={is4 ? svgPaths.pc0c6180 : svgPaths.p218f7980} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4251" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path clipRule="evenodd" d={is4 ? svgPaths.p3b6bf300 : svgPaths.p11be9200} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4252" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <g id="Group 3446">
                          <path clipRule="evenodd" d={is4 ? svgPaths.p4d4ca80 : svgPaths.p237c9700} fillRule="evenodd" id="Path 4253" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                          <path clipRule="evenodd" d={is4 ? svgPaths.p34af0600 : svgPaths.p22432d00} fillRule="evenodd" id="Path 4254" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                          <path clipRule="evenodd" d={is4 ? svgPaths.pe23cf80 : svgPaths.p1f4b9380} fillRule="evenodd" id="Path 4255" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                          <path clipRule="evenodd" d={is4 ? svgPaths.p290c0d00 : svgPaths.pf628100} fillRule="evenodd" id="Path 4256" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                          <path clipRule="evenodd" d={is4 ? svgPaths.p264ae40 : svgPaths.p31b0300} fillRule="evenodd" id="Path 4257" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <BibitPortofolioName text="Air Jordan Bukan Air Supply" text1="Pasar Uang" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper text="Manulife Dana Kas II Kelas A" text1="Order Jual Diterima" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="*Perkiraan Nilai Jual" text1="Rp2,100,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">{is4 ? "Lihat Detail" : is2Or3Or5 ? "Button" : "Button"}</p>
              </BibitHelper1>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-[260px] overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[168.8px] w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <BibitText text="Beli Reksa Dana">
                  <path d="M4.15974 6.31902V8.87905" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p9c6db80} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p583f000} id="Vector_3" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p11d9e300} id="Vector_4" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p917d880} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                </BibitText>
                <BibitHelper3>
                  <g clipPath="url(#clip0_57_175302)" id="clock 2">
                    <path d={svgPaths.pe3edf00} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p15696680} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_175302">
                      <rect fill="white" height="8.96" width="8.96" />
                    </clipPath>
                  </defs>
                </BibitHelper3>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <div className="overflow-clip relative shrink-0 size-[21.76px]" data-name="Illustration/Portofolio">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 52 52"}>
                    <g id="7">
                      <path d={is4 ? svgPaths.p3940c900 : svgPaths.pd18ca00} fill="var(--fill-0, #E5F7F0)" id="Ellipse 708" />
                      <g id="Group 3399">
                        <path d={is4 ? svgPaths.pb4e6980 : svgPaths.pa21b780} fill="var(--fill-0, #8CD9BC)" id="Path 2239" />
                        <path d={is4 ? svgPaths.p1b2a2380 : svgPaths.p1e88a900} fill="var(--fill-0, #8CD9BC)" id="Path 2241" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p381a5a80 : svgPaths.p22a3cd00} fill="var(--fill-0, #8CD9BC)" id="Rectangle 1442" />
                        <path d={is4 ? "M6.11498 15.9344V14.9422" : "M14.613 38.0785V35.7073"} id="Path 2244" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? "M15.8843 15.9745V14.9813" : "M37.9589 38.1742V35.801"} id="Path 2245" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p1e2860a0 : svgPaths.p5d20880} id="Path 2246" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p38821900 : svgPaths.p24683800} id="Path 2249" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p303dde40 : svgPaths.p27595800} id="Path 4066" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p25a13f00 : svgPaths.p2a3da070} id="Path 4067" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.pb4e6980 : svgPaths.pa21b780} id="Path 2239_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p1b2a2380 : svgPaths.p1e88a900} id="Path 2241_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p381a5a80 : svgPaths.p22a3cd00} id="Rectangle 1442_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                      </g>
                    </g>
                  </svg>
                </div>
                <BibitPortofolioName text="Staycation Bali PD" text1="3 Reksa Dana" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <Produk text="BNI - Am Dana Likuid" text1="Menunggu Pembayaran" />
                  <div className="bg-white content-stretch flex h-[31.52px] items-start relative shrink-0 w-full" data-name="Produk">
                    <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
                    <div className="bg-[#2479b4] self-stretch shrink-0 w-[2.56px]" />
                    <Item text="Schroder Dana Mantap Plus II" text1="Menunggu Pembayaran" />
                  </div>
                  <div className="bg-white content-stretch flex h-[31.52px] items-start relative shrink-0 w-full" data-name="Produk">
                    <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
                    <div className="bg-[#9343c8] self-stretch shrink-0 w-[2.56px]" />
                    <Item text="BNI-AM Indeks IDX30" text1="Menunggu Pembayaran" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
                <Helper text="Virtual Account BCA" text1="Rp8,000,000" />
                <BibitButtonVariantButton>{is4 ? "Bayar" : is2Or3Or5 ? "Button" : "Button"}</BibitButtonVariantButton>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-[260px] overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-0 w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <div className="bg-[#ebf8f3] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[2.56px] shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12.8px]" data-name="Frame">
                    <BibitHelper4>
                      <path d={svgPaths.p3dd75680} fill="var(--fill-0, #EBF8F3)" id="Vector" />
                    </BibitHelper4>
                    <BibitLayer>
                      <path d={svgPaths.p18358900} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d="M1.28007 1.17439V2.52479" id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d="M1.28007 5.22559V6.50559" id="Vector_3" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d={svgPaths.p3da1d480} id="Vector_4" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d="M4.48007 0.32V1.6" id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d="M4.48007 5.44V6.72" id="Vector_6" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    </BibitLayer>
                  </div>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">Beli Saham</p>
                </div>
              </div>
              <Portofolio>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 48 48"}>
                  <g id="9">
                    <path d={is4 ? svgPaths.p3940c900 : svgPaths.p1a1b900} fill="var(--fill-0, #E6F7F0)" id="Ellipse 714" />
                    <g id="Layer 1">
                      <path d={is4 ? "M8.60246 5.66853V14.6648" : "M18.976 12.5041V32.3487"} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? "M12.9276 8.10887V16.1942" : "M28.5167 17.8872V35.7225"} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p24fb7500 : svgPaths.pe4d7d00} fill="var(--fill-0, #8CD9BC)" id="Vector_3" stroke="var(--stroke-0, #8CD9BC)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p15fb78f2 : svgPaths.p2882bd00} fill="var(--fill-0, #8CD9BC)" id="Vector_4" stroke="var(--stroke-0, #8CD9BC)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p15fb78f2 : svgPaths.p2882bd00} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p24fb7500 : svgPaths.pe4d7d00} id="Vector_6" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p190aed00 : svgPaths.p11556500} id="Vector_7" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p4ea80e0 : svgPaths.p3c77420} id="Vector_8" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                    </g>
                  </g>
                </svg>
              </Portofolio>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper2 text="BBCA (Bank Central Asia Tbk PT)" text1="Open" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="RDN" text1="Rp21,200,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">{is4 ? "Lihat Detail" : is2Or3Or5 ? "Button" : "Button"}</p>
              </BibitHelper1>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-0 overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[31px] w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <BibitText text="Beli Reksa Dana">
                  <path d="M4.15974 6.31902V8.87905" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p1ce30900} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p583f000} id="Vector_3" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p11d9e300} id="Vector_4" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  <path d={svgPaths.p19116b00} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                </BibitText>
                <BibitHelper3>
                  <g clipPath="url(#clip0_57_168621)" id="clock 2">
                    <path d={svgPaths.p3488dd90} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.pf763a28} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_168621">
                      <rect fill="white" height="8.96" width="8.96" />
                    </clipPath>
                  </defs>
                </BibitHelper3>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <div className="overflow-clip relative shrink-0 size-[21.76px]" data-name="Illustration/Portofolio">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 52 52"}>
                    <g id="Group">
                      <path d={is4 ? svgPaths.p3940c900 : svgPaths.pd18ca00} fill="var(--fill-0, #E5F7F0)" id="Ellipse 710" />
                      <g id="Group 3395">
                        <path d={is4 ? svgPaths.p9c74800 : svgPaths.p2e79300} fill="var(--fill-0, #8CD9BC)" id="Path 2275" />
                        <path d={is4 ? svgPaths.p273cec00 : svgPaths.p37f02c00} fill="var(--fill-0, #8CD9BC)" id="Path 2277" />
                        <path d={is4 ? svgPaths.p3e2cf00 : svgPaths.p3af3e700} id="Path 2279" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p37e42500 : svgPaths.p18e13d80} id="Path 2281" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p2c7d7e00 : svgPaths.p1d651e00} id="Line 524" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p3a48cd00 : svgPaths.p29639f00} id="Line 525" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p8337d40 : svgPaths.p23100100} id="Line 526" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p623db00 : svgPaths.p1bfc6480} id="Line 527" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p9c74800 : svgPaths.p2e79300} id="Path 2275_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                        <path d={is4 ? svgPaths.p273cec00 : svgPaths.p37f02c00} id="Path 2277_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.64" : "1.5"} />
                      </g>
                    </g>
                  </svg>
                </div>
                <BibitPortofolioName text="Naikin Ortu Haji" text1="Pasar Uang" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper text="Sucorinvest Money Market Fund" text1="Upload Bukti Pembayaran" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
                <Helper text="Manual Transfer BCA" text1="Rp100,000,000" />
                <BibitButtonVariantButton>{is4 ? "Upload" : is2Or3Or5 ? "Button" : "Button"}</BibitButtonVariantButton>
              </div>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-[520px] overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[199.8px] w-[240px]" data-name="List">
              <div className="bg-[#fdeded] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[2.56px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[12.8px]" data-name="Frame">
                  <BibitHelper4>
                    <path d={svgPaths.p3dd75680} fill="var(--fill-0, #FDEDED)" id="Vector" />
                  </BibitHelper4>
                  <BibitLayer>
                    <path d={svgPaths.p18358900} id="Vector" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d="M1.28007 1.17439V2.52479" id="Vector_2" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d="M1.28007 5.22559V6.50559" id="Vector_3" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p3da1d480} id="Vector_4" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d="M4.48007 0.32V1.6" id="Vector_5" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d="M4.48007 5.44V6.72" id="Vector_6" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </BibitLayer>
                </div>
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">Jual Saham</p>
              </div>
              <Portofolio>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 48 48"}>
                  <g id="9">
                    <path d={is4 ? svgPaths.p3940c900 : svgPaths.p1a1b900} fill="var(--fill-0, #E6F7F0)" id="Ellipse 714" />
                    <g id="Layer 1">
                      <path d={is4 ? "M8.60246 5.66853V14.6648" : "M18.976 12.5041V32.3487"} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? "M12.9276 8.10887V16.1942" : "M28.5167 17.8872V35.7225"} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p24fb7500 : svgPaths.pe4d7d00} fill="var(--fill-0, #8CD9BC)" id="Vector_3" stroke="var(--stroke-0, #8CD9BC)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p15fb78f2 : svgPaths.p2882bd00} fill="var(--fill-0, #8CD9BC)" id="Vector_4" stroke="var(--stroke-0, #8CD9BC)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p15fb78f2 : svgPaths.p2882bd00} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p24fb7500 : svgPaths.pe4d7d00} id="Vector_6" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p190aed00 : svgPaths.p11556500} id="Vector_7" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                      <path d={is4 ? svgPaths.p4ea80e0 : svgPaths.p3c77420} id="Vector_8" stroke="var(--stroke-0, #00AB6B)" strokeWidth={is4 ? "0.68" : "1.5"} />
                    </g>
                  </g>
                </svg>
              </Portofolio>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper2 text="BBRI (Bank Rakyat Indonesia)" text1="Open" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="*Perkiraan Nilai Jual" text1="Rp21,200,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">{is4 ? "Lihat Detail" : is2Or3Or5 ? "Button" : "Button"}</p>
              </BibitHelper1>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-[520px] overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[31px] w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <div className="bg-[#ebf8f3] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[3.84px] shrink-0">
                  <BibitHelper5 additionalClassNames="size-[12.8px]">
                    <div className="absolute inset-[-3.85%_-3.53%_-3.84%_-3.53%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.71637 8.96001">
                        <g id="Layer 3">
                          <path d={svgPaths.p26bf8000} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p1d065dc0} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p1cc48a40} id="Vector_3" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p2e066400} id="Vector_4" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p248b3b80} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p11c743a0} id="Vector_6" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p1dd28000} id="Vector_7" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p1c355c90} id="Vector_8" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                          <path d={svgPaths.p33ef8d00} id="Vector_9" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                        </g>
                      </svg>
                    </div>
                  </BibitHelper5>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">Beli Surat Berharga Nasional</p>
                </div>
                <div className="bg-[#edf4f9] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[3.84px] shrink-0">
                  <Wrapper1>
                    <g clipPath="url(#clip0_57_177543)" id="clock 2">
                      <path d={svgPaths.p3488dd90} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d={svgPaths.pf763a28} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    </g>
                    <defs>
                      <clipPath id="clip0_57_177543">
                        <rect fill="white" height="8.96" width="8.96" />
                      </clipPath>
                    </defs>
                  </Wrapper1>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">00:19:05</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <div className="overflow-clip relative shrink-0 size-[21.76px]" data-name="Illustration/Portofolio">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 21.76 21.76" : "0 0 52 52"}>
                    <g id="Group">
                      <path d={is4 ? svgPaths.p3940c900 : svgPaths.pd18ca00} fill="var(--fill-0, #E5F7F0)" id="Ellipse" />
                      <g id="Group_2">
                        <g id="Path 3971" />
                        <g id="Path 3968" />
                        <g id="Path 3969" />
                        <g id="Path 2223" />
                        <g id="Path 3970" />
                        <g id="Ellipse 410" />
                        <g id="Rectangle 1441" />
                        <g id="Path 3972" />
                        <g id="Path 2229" />
                        <g id="Path 2230" />
                      </g>
                      <g id="Group_3">
                        <path d={is4 ? svgPaths.p36d81270 : svgPaths.p3b0f7880} fill="var(--fill-0, #8CD9BC)" id="Path 3971_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p125a3800 : svgPaths.p2adb7200} fill="var(--fill-0, #8CD9BC)" id="Path 3968_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.pf61b580 : svgPaths.p37f13000} fill="var(--fill-0, #8CD9BC)" id="Path 3969_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p1e4ba200 : svgPaths.pd87fa00} fill="var(--fill-0, #8CD9BC)" id="Path 2223_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.pbdd0240 : svgPaths.p2699d880} fill="var(--fill-0, #8CD9BC)" id="Path 3970_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p15f2b00 : svgPaths.p27bf7c00} id="Ellipse 410_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? "M9.47211 11.5715H11.3369" : "M22.6356 27.6525H27.092"} id="Rectangle 1441_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <path d={is4 ? svgPaths.p3784e700 : svgPaths.p2334e7f0} fill="var(--fill-0, #8CD9BC)" id="Path 3972_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        <g id="Path 2229_2">
                          <path d={is4 ? svgPaths.p555b880 : svgPaths.p351bb780} fill="var(--fill-0, #8CD9BC)" />
                          <path d={is4 ? svgPaths.p38634d80 : svgPaths.p2920ca40} stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        </g>
                        <g id="Path 2230_2">
                          <path d={is4 ? svgPaths.pd517100 : svgPaths.p35227f80} fill="var(--fill-0, #8CD9BC)" />
                          <path d={is4 ? svgPaths.pd5e6d00 : svgPaths.p10438240} stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "0.627692" : "1.5"} />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <BibitPortofolioName text="Bangun Jalan Tol Tarumajaya" text1="Surat Berharga Nasional" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <Wrapper3>
                  <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
                  <div className="bg-[#2479b4] self-stretch shrink-0 w-[2.56px]" />
                  <Item text="SBR011" text1="Menunggu Pembayaran" />
                </Wrapper3>
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
                <Helper text="Kode Biling" text1="Rp10,000,000" />
                <BibitButtonVariantButton>{is4 ? "Bayar" : is2Or3Or5 ? "Button" : "Button"}</BibitButtonVariantButton>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-start flex flex-wrap gap-[15px] items-start left-1/2 top-[calc(50%+0.27px)] w-[480px]">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#ebf8f3] content-stretch flex gap-[2.498px] items-center px-[9.99px] py-[4.995px] relative rounded-[4.995px] shadow-[-2.602px_10.407px_52.033px_0px_rgba(0,0,0,0.08)] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24.976px]">
                  <div className="absolute inset-[15%_20%_18.13%_19.99%]" data-name="Layer 3">
                    <div className="absolute inset-[-3.74%_-4.17%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2353 17.9494">
                        <g id="Layer 3">
                          <path d="M8.11735 12.3298V17.325" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                          <path d={svgPaths.p39ff6a00} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                          <path d={svgPaths.p3bf46700} id="Vector_3" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                          <path d={svgPaths.pf799d00} id="Vector_4" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                          <path d={svgPaths.p9edd680} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[14.985px] text-right whitespace-nowrap">Beli Reksa Dana</p>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#edf4f9] content-stretch flex gap-[2.498px] items-center px-[9.99px] py-[4.995px] relative rounded-[4.995px] shadow-[-2.602px_10.407px_52.033px_0px_rgba(0,0,0,0.08)] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24.976px]">
                  <div className="absolute inset-[15%]" data-name="clock 2">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4829 17.4829">
                      <g id="clock 2">
                        <path d={svgPaths.p3582c500} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p2f4bc580} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[14.985px] text-right whitespace-nowrap">{`23:56:05 `}</p>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-white content-stretch flex gap-[14.985px] items-center px-[9.99px] py-[4.995px] relative rounded-[4.995px] shadow-[-2.602px_10.407px_52.033px_0px_rgba(0,0,0,0.08)] shrink-0" data-name="Portofolio">
                <div className="overflow-clip relative shrink-0 size-[42.459px]" data-name="Illustration/Portofolio">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 42.4585 42.4585" : "0 0 52 52"}>
                    <g id="Group">
                      <path d={is4 ? svgPaths.p1fc1a600 : svgPaths.pd18ca00} fill="var(--fill-0, #E5F7F0)" id="Ellipse 710" />
                      <g id="Group 3395">
                        <path d={is4 ? svgPaths.p30679170 : svgPaths.p2e79300} fill="var(--fill-0, #8CD9BC)" id="Path 2275" />
                        <path d={is4 ? svgPaths.p281eac0 : svgPaths.p37f02c00} fill="var(--fill-0, #8CD9BC)" id="Path 2277" />
                        <path d={is4 ? svgPaths.p174ee400 : svgPaths.p3af3e700} id="Path 2279" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p3d72080 : svgPaths.p18e13d80} id="Path 2281" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p3aae3f00 : svgPaths.p1d651e00} id="Line 524" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p128487c0 : svgPaths.p29639f00} id="Line 525" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p182e1c00 : svgPaths.p23100100} id="Line 526" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p3e111d00 : svgPaths.p1bfc6480} id="Line 527" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p30679170 : svgPaths.p2e79300} id="Path 2275_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                        <path d={is4 ? svgPaths.p281eac0 : svgPaths.p37f02c00} id="Path 2277_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.24878" : "1.5"} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col gap-[2.498px] items-start leading-[1.35] not-italic relative shrink-0 text-[14.985px] whitespace-nowrap" data-name="Portofolio Name">
                  <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333]">Naikin Ortu Haji</p>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696]">Pasar Uang</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-white relative rounded-[4.995px] shrink-0" data-name="List Produk">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
                  <div className="bg-white content-stretch flex h-[62.478px] items-start relative shrink-0" data-name="Produk">
                    <div aria-hidden="true" className="absolute border-[#ededed] border-[1.249px] border-solid inset-[-1.249px] pointer-events-none" />
                    <div className="bg-[#00ab6b] self-stretch shrink-0 w-[4.995px]" />
                    <div className="relative self-stretch shrink-0" data-name="Item">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex h-full items-center px-[14.985px] py-[9.99px] relative">
                          <div className="content-stretch flex flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[2.498px] items-start leading-[1.35] not-italic relative shrink-0 text-[14.985px] whitespace-nowrap">
                            <p className="relative shrink-0 text-[#333]">Sucorinvest Money Market Fund</p>
                            <p className="relative shrink-0 text-[#2479b4]">Upload Bukti Pembayaran</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ededed] border-[1.249px] border-solid inset-[-0.625px] pointer-events-none rounded-[5.62px] shadow-[-2.602px_10.407px_52.033px_0px_rgba(0,0,0,0.08)]" />
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-white content-stretch flex flex-col gap-[2.498px] items-start leading-[1.35] not-italic px-[9.99px] py-[4.995px] relative rounded-[4.995px] shadow-[-2.602px_10.407px_52.033px_0px_rgba(0,0,0,0.08)] shrink-0 text-[14.985px] whitespace-nowrap">
                <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696]">Manual Transfer BCA</p>
                <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333]">Rp100,000,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[57.696px] items-center justify-center left-1/2 top-1/2 w-[360px]">
            <div className="overflow-clip relative shrink-0 size-[57.696px]">
              <div className="absolute inset-[15%_20%_18.13%_20%]" data-name="Layer 3">
                <div className={`absolute ${["2", "3", "4", "5"].includes(state) ? "inset-[-3.11%_-3.47%_-3.12%_-3.47%]" : "inset-[-3.12%_-3.47%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0212 40.9838">
                    <g id="Layer 3">
                      <path d="M18.5102 28.2424V39.7818" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d={svgPaths.p3b49c200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d={svgPaths.p7b08240} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d={svgPaths.p5eb8100} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d={svgPaths.p18a65580} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[57.696px]" data-name="Frame">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6962 57.6962">
                <g id="Background">
                  <g id="Vector" />
                </g>
              </svg>
              <div className="absolute bottom-1/4 left-[30%] right-[30%] top-1/4" data-name="Layer 3">
                <div className="absolute inset-[-4.17%_-5.21%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.483 31.2523">
                    <g id="Layer 3">
                      <path d={svgPaths.pe76a080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d="M5.53021 5.05334V11.1403" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d="M5.53021 23.3135V29.0831" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d={svgPaths.p88a3c00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d="M19.954 1.202V6.97162" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                      <path d="M19.954 24.2807V30.0503" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <BibitHelper5 additionalClassNames="size-[57.696px]">
              <div className="absolute inset-[-3.2%_-2.94%_-3.21%_-2.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3164 39.9065">
                  <g id="Layer 3">
                    <path d={svgPaths.p26897fc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p9e1db80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p7b524c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p2b687480} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p1cd68e00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p2fcf4100} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p2216de80} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p3df82500} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                    <path d={svgPaths.p1c2b9ad8} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.40401" />
                  </g>
                </svg>
              </div>
            </BibitHelper5>
          </div>
        </div>
        <div className="aspect-[650/650] relative shrink-0 w-full" data-name="bibit">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBibit} />
        </div>
      </div>
    </div>
  );
}

export default function Bibit1() {
  return <Bibit className="bg-white relative size-full" state="4" />;
}