import svgPaths from "./svg-y8l8z38lh2";
import imgScreenshot20260305At0905042 from "figma:asset/7b872ff2c435495300035d55db7369c581870026.png";
import imgIphone17ProMaxMockup17725952114972 from "figma:asset/1b5c8f8a32b48dfa0f1bc0089b0e0478ca1e3539.png";
import imgBibit from "figma:asset/cfe4620fe8ecc3f59644c0d3a7e6ba2fa6d7ead2.png";

function BibitHelper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        {children}
      </svg>
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

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
      <div className="bg-white content-stretch flex h-[31.52px] items-start relative shrink-0 w-full" data-name="Produk">
        {children}
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[21.76px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.76 21.76">
        {children}
      </svg>
    </div>
  );
}

function BibitIllustrationPortofolio({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <g id="Group">{children}</g>
    </Wrapper3>
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
    <Wrapper4>
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
      <div className="bg-[#9343c8] self-stretch shrink-0 w-[2.56px]" />
      <Wrapper2>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[1.28px] items-start leading-[1.35] min-h-px min-w-px not-italic relative text-[7.68px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#333]">{text}</p>
          <p className="relative shrink-0 text-[#2479b4]">{text1}</p>
        </div>
      </Wrapper2>
    </Wrapper4>
  );
}

function Portofolio() {
  return (
    <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
      <Wrapper3>
        <g id="9">
          <path d={svgPaths.p3940c900} fill="var(--fill-0, #E6F7F0)" id="Ellipse 714" />
          <g id="Layer 1">
            <path d="M8.60246 5.66853V14.6648" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
            <path d="M12.9276 8.10887V16.1942" id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
            <path d={svgPaths.p24fb7500} fill="var(--fill-0, #8CD9BC)" id="Vector_3" stroke="var(--stroke-0, #8CD9BC)" strokeWidth="0.68" />
            <path d={svgPaths.p15fb78f2} fill="var(--fill-0, #8CD9BC)" id="Vector_4" stroke="var(--stroke-0, #8CD9BC)" strokeWidth="0.68" />
            <path d={svgPaths.p15fb78f2} id="Vector_5" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
            <path d={svgPaths.p24fb7500} id="Vector_6" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
            <path d={svgPaths.p190aed00} id="Vector_7" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
            <path d={svgPaths.p4ea80e0} id="Vector_8" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.68" />
          </g>
        </g>
      </Wrapper3>
      <BibitPortofolioName text="Bibit Saham" text1="Saham" />
    </div>
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

export default function Bibit() {
  return (
    <div className="bg-white relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905042} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${"1" === "5" ? "bottom-0" : "1" === "4" ? "top-[-1503px]" : "1" === "3" ? "top-[-1002px]" : "1" === "2" ? "top-[-501px]" : "top-0"}`}>
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
                <Wrapper3>
                  <g id="12">
                    <path d={svgPaths.p3940c900} fill="var(--fill-0, #E5F7F0)" id="Ellipse 779" />
                    <g id="Layer x0020 1">
                      <path clipRule="evenodd" d={svgPaths.p88fcd00} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4249" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                      <g id="Group 3445">
                        <path clipRule="evenodd" d={svgPaths.p2b5f3c80} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4250" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeWidth="0.627692" />
                      </g>
                      <path clipRule="evenodd" d={svgPaths.pc0c6180} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4251" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                      <path clipRule="evenodd" d={svgPaths.p3b6bf300} fill="var(--fill-0, #8CD9BC)" fillRule="evenodd" id="Path 4252" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                      <g id="Group 3446">
                        <path clipRule="evenodd" d={svgPaths.p4d4ca80} fillRule="evenodd" id="Path 4253" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                        <path clipRule="evenodd" d={svgPaths.p34af0600} fillRule="evenodd" id="Path 4254" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                        <path clipRule="evenodd" d={svgPaths.pe23cf80} fillRule="evenodd" id="Path 4255" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                        <path clipRule="evenodd" d={svgPaths.p290c0d00} fillRule="evenodd" id="Path 4256" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                        <path clipRule="evenodd" d={svgPaths.p264ae40} fillRule="evenodd" id="Path 4257" stroke="var(--stroke-0, #00AB6B)" strokeWidth="0.627692" />
                      </g>
                    </g>
                  </g>
                </Wrapper3>
                <BibitPortofolioName text="Air Jordan Bukan Air Supply" text1="Pasar Uang" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper text="Manulife Dana Kas II Kelas A" text1="Order Jual Diterima" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="*Perkiraan Nilai Jual" text1="Rp2,100,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">Lihat Detail</p>
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
                  <g clipPath="url(#clip0_54_19132)" id="clock 2">
                    <path d={svgPaths.pe3edf00} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p15696680} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </g>
                  <defs>
                    <clipPath id="clip0_54_19132">
                      <rect fill="white" height="8.96" width="8.96" />
                    </clipPath>
                  </defs>
                </BibitHelper3>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <Wrapper3>
                  <g id="7">
                    <path d={svgPaths.p3940c900} fill="var(--fill-0, #E5F7F0)" id="Ellipse 708" />
                    <g id="Group 3399">
                      <path d={svgPaths.pb4e6980} fill="var(--fill-0, #8CD9BC)" id="Path 2239" />
                      <path d={svgPaths.p1b2a2380} fill="var(--fill-0, #8CD9BC)" id="Path 2241" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p381a5a80} fill="var(--fill-0, #8CD9BC)" id="Rectangle 1442" />
                      <path d="M6.11498 15.9344V14.9422" id="Path 2244" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d="M15.8843 15.9745V14.9813" id="Path 2245" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p1e2860a0} id="Path 2246" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p38821900} id="Path 2249" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p303dde40} id="Path 4066" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p25a13f00} id="Path 4067" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.pb4e6980} id="Path 2239_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p1b2a2380} id="Path 2241_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                      <path d={svgPaths.p381a5a80} id="Rectangle 1442_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    </g>
                  </g>
                </Wrapper3>
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
                <BibitButtonVariantButton>Bayar</BibitButtonVariantButton>
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
              <Portofolio />
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper2 text="BBCA (Bank Central Asia Tbk PT)" text1="Open" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="RDN" text1="Rp21,200,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">Lihat Detail</p>
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
                  <g clipPath="url(#clip0_54_20581)" id="clock 2">
                    <path d={svgPaths.p3488dd90} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.pf763a28} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </g>
                  <defs>
                    <clipPath id="clip0_54_20581">
                      <rect fill="white" height="8.96" width="8.96" />
                    </clipPath>
                  </defs>
                </BibitHelper3>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <BibitIllustrationPortofolio>
                  <path d={svgPaths.p3940c900} fill="var(--fill-0, #E5F7F0)" id="Ellipse 710" />
                  <g id="Group 3395">
                    <path d={svgPaths.p9c74800} fill="var(--fill-0, #8CD9BC)" id="Path 2275" />
                    <path d={svgPaths.p273cec00} fill="var(--fill-0, #8CD9BC)" id="Path 2277" />
                    <path d={svgPaths.p3e2cf00} id="Path 2279" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p37e42500} id="Path 2281" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p2c7d7e00} id="Line 524" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p3a48cd00} id="Line 525" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p8337d40} id="Line 526" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p623db00} id="Line 527" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p9c74800} id="Path 2275_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    <path d={svgPaths.p273cec00} id="Path 2277_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                  </g>
                </BibitIllustrationPortofolio>
                <BibitPortofolioName text="Naikin Ortu Haji" text1="Pasar Uang" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper text="Sucorinvest Money Market Fund" text1="Upload Bukti Pembayaran" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
                <Helper text="Manual Transfer BCA" text1="Rp100,000,000" />
                <BibitButtonVariantButton>Upload</BibitButtonVariantButton>
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
              <Portofolio />
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <BibitHelper2 text="BBRI (Bank Rakyat Indonesia)" text1="Open" />
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <BibitHelper1 text="*Perkiraan Nilai Jual" text1="Rp21,200,000">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[7.68px] text-center whitespace-nowrap">Lihat Detail</p>
              </BibitHelper1>
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[10.24px] items-start left-[520px] overflow-clip p-[12.8px] rounded-[8px] shadow-[-2px_8px_40px_0px_rgba(0,0,0,0.08)] top-[31px] w-[240px]" data-name="List">
              <div className="content-stretch flex gap-[5.12px] items-start relative shrink-0">
                <div className="bg-[#ebf8f3] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[3.84px] shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12.8px]">
                    <div className="absolute inset-[20%_14.09%_15%_15%]" data-name="Layer 3">
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
                    </div>
                  </div>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">Beli Surat Berharga Nasional</p>
                </div>
                <div className="bg-[#edf4f9] content-stretch flex gap-[1.28px] items-center px-[5.12px] py-[2.56px] relative rounded-[3.84px] shrink-0">
                  <Wrapper1>
                    <g clipPath="url(#clip0_54_16209)" id="clock 2">
                      <path d={svgPaths.p3488dd90} id="Vector" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                      <path d={svgPaths.pf763a28} id="Vector_2" stroke="var(--stroke-0, #2479B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" />
                    </g>
                    <defs>
                      <clipPath id="clip0_54_16209">
                        <rect fill="white" height="8.96" width="8.96" />
                      </clipPath>
                    </defs>
                  </Wrapper1>
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[7.68px] text-right whitespace-nowrap">00:19:05</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full" data-name="Portofolio">
                <BibitIllustrationPortofolio>
                  <path d={svgPaths.p3940c900} fill="var(--fill-0, #E5F7F0)" id="Ellipse" />
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
                    <path d={svgPaths.p36d81270} fill="var(--fill-0, #8CD9BC)" id="Path 3971_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.p125a3800} fill="var(--fill-0, #8CD9BC)" id="Path 3968_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.pf61b580} fill="var(--fill-0, #8CD9BC)" id="Path 3969_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.p1e4ba200} fill="var(--fill-0, #8CD9BC)" id="Path 2223_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.pbdd0240} fill="var(--fill-0, #8CD9BC)" id="Path 3970_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.p15f2b00} id="Ellipse 410_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d="M9.47211 11.5715H11.3369" id="Rectangle 1441_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <path d={svgPaths.p3784e700} fill="var(--fill-0, #8CD9BC)" id="Path 3972_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    <g id="Path 2229_2">
                      <path d={svgPaths.p555b880} fill="var(--fill-0, #8CD9BC)" />
                      <path d={svgPaths.p38634d80} stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    </g>
                    <g id="Path 2230_2">
                      <path d={svgPaths.pd517100} fill="var(--fill-0, #8CD9BC)" />
                      <path d={svgPaths.pd5e6d00} stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627692" />
                    </g>
                  </g>
                </BibitIllustrationPortofolio>
                <BibitPortofolioName text="Bangun Jalan Tol Tarumajaya" text1="Surat Berharga Nasional" />
              </div>
              <div className="relative rounded-[2.56px] shrink-0 w-full" data-name="List Produk">
                <Wrapper4>
                  <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.64px] pointer-events-none" />
                  <div className="bg-[#2479b4] self-stretch shrink-0 w-[2.56px]" />
                  <Item text="SBR011" text1="Menunggu Pembayaran" />
                </Wrapper4>
                <div aria-hidden="true" className="absolute border-[#ededed] border-[0.64px] border-solid inset-[-0.32px] pointer-events-none rounded-[2.88px]" />
              </div>
              <div className="content-stretch flex gap-[7.68px] items-center relative shrink-0 w-full">
                <Helper text="Kode Biling" text1="Rp10,000,000" />
                <BibitButtonVariantButton>Bayar</BibitButtonVariantButton>
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
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.4585 42.4585">
                    <g id="Group">
                      <path d={svgPaths.p1fc1a600} fill="var(--fill-0, #E5F7F0)" id="Ellipse 710" />
                      <g id="Group 3395">
                        <path d={svgPaths.p30679170} fill="var(--fill-0, #8CD9BC)" id="Path 2275" />
                        <path d={svgPaths.p281eac0} fill="var(--fill-0, #8CD9BC)" id="Path 2277" />
                        <path d={svgPaths.p174ee400} id="Path 2279" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p3d72080} id="Path 2281" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p3aae3f00} id="Line 524" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p128487c0} id="Line 525" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p182e1c00} id="Line 526" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p3e111d00} id="Line 527" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p30679170} id="Path 2275_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
                        <path d={svgPaths.p281eac0} id="Path 2277_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24878" />
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
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-1/2">
            <BibitHelper5>
              <g id="Group 11705">
                <g id="Ellipse 1209" />
                <g id="Graph">
                  <path clipRule="evenodd" d={svgPaths.pfa65a80} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path clipRule="evenodd" d={svgPaths.p129b2800} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </g>
            </BibitHelper5>
            <BibitHelper5>
              <g id="Group 11708">
                <g id="Ellipse 1208" />
                <g clipPath="url(#clip0_1_30122)" id="dollar-sign">
                  <path d="M36.7503 17.5005V56.0005" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPaths.p274d08e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_30122">
                  <rect fill="white" height="42" transform="translate(15.7501 15.75)" width="42" />
                </clipPath>
              </defs>
            </BibitHelper5>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[72px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Ellipse 1207" />
                </svg>
              </div>
              <div className="col-1 ml-[15.75px] mt-[15.75px] overflow-clip relative row-1 size-[42px]" data-name="Return">
                <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-7.14%_-3.9%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5 24">
                      <path d={svgPaths.p2e0945c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/2 left-[70.83%] right-[4.17%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-14.29%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                      <path d="M1.5 1.5H12V12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] relative shrink-0 w-full" data-name="bibit">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBibit} />
        </div>
      </div>
    </div>
  );
}