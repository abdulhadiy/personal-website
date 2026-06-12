import clsx from "clsx";
import svgPaths from "./svg-rv5jhh3xp9";
import imgScreenshot20260305At0905043 from "figma:asset/5b5694798bd50263fa59129ffcb5c4d31b50522f.png";
import imgIphone17ProMaxMockup17726819327501 from "figma:asset/e0f9a4bcce6c5a88a98a6b9bfdf9b9ca002b1f0b.png";
import imgShutterstock17164940262 from "figma:asset/9f2cb679bad3b82745ce1d6db799dfececcf3608.png";
import imgShutterstock5335790021 from "figma:asset/b84eeb12675829a14adb55ba8ec9073c80f3eb27.png";
import imgShutterstock1779839805 from "figma:asset/64d163f97cad1707585350f0c17cb2b8fe9b0c0d.png";
import imgEllipse1147 from "figma:asset/bb2cdea7ac6518982f2b35b8620e8e730fc27604.png";
import imgBibit from "figma:asset/223c8651149e0d538455bceaf82715a17f20a777.png";
import { imgShutterstock17164940261, imgShutterstock1779839804 } from "./svg-pksk9";

function BibitSahamHelper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[34.388px] items-center relative shrink-0 w-[217.075px]">
      <Text text="Jumlah Lot" />
      <div className="content-stretch flex flex-[1_0_0] gap-[4.299px] items-center justify-end min-h-px min-w-px relative">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shadow-[4px_4px_24px_20px_rgba(170,170,170,0.04)] shrink-0">
      <div className="bg-white content-stretch flex flex-col items-center relative rounded-[2.866px] shrink-0 w-[240px]" data-name="Content">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text + Logo">
        {children}
      </div>
    </div>
  );
}
type BibitSahamUsedProps = {
  additionalClassNames?: string;
};

function BibitSahamUsed({ children, additionalClassNames = "" }: React.PropsWithChildren<BibitSahamUsedProps>) {
  return (
    <div className={clsx("col-1 mt-0 relative row-1 size-[17.194px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.194 17.194">
        <g id="Used">{children}</g>
      </svg>
    </div>
  );
}

function BibitSahamSlider({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[240px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[11.463px] py-[8.597px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start p-[5.731px] relative rounded-[4.299px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.716px] border-solid inset-0 pointer-events-none rounded-[4.299px]" />
      <div className="relative shrink-0 size-[12.896px]" data-name="Icon / Button / Add">
        <div className="absolute contents inset-[16.67%]" data-name="Group">
          {children}
        </div>
      </div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66667 7.66667">
          {children}
        </svg>
      </div>
    </div>
  );
}
type AtomsIconPLHelperProps = {
  additionalClassNames?: string;
};

function AtomsIconPLHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<AtomsIconPLHelperProps>) {
  return (
    <div className={clsx("flex-none size-[6.667px]", additionalClassNames)}>
      <Vector additionalClassNames="relative size-full">{children}</Vector>
    </div>
  );
}

function BibitSahamIconProfit() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[12px]">
      <div className="relative shrink-0 size-[10px]" data-name="arrow-up-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="arrow-up-right">
            <path d={svgPaths.pde71580} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p21aab600} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type BibitSahamFrameProps = {
  text: string;
  text1: string;
  text2: string;
};

function BibitSahamFrame({ text, text1, text2 }: BibitSahamFrameProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.164px] items-start min-h-px min-w-px relative">
      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[11.463px] w-full">{text}</p>
      <div className="content-stretch flex gap-[2.866px] items-center relative shrink-0 w-full">
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#969696] text-[8.597px] whitespace-nowrap">{text1}</p>
        <div className="relative shrink-0 size-[1.433px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43284 1.43284">
            <circle cx="0.716418" cy="0.716418" fill="var(--fill-0, #969696)" id="Ellipse 1205" r="0.716418" />
          </svg>
        </div>
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#969696] text-[8.597px] whitespace-nowrap">{text2}</p>
      </div>
    </div>
  );
}

function BibitSahamCtaMinus() {
  return (
    <Wrapper>
      <div className="absolute flex inset-[45%_16.67%] items-center justify-center">
        <div className="flex-none h-[8.597px] rotate-90 w-[1.29px]">
          <div className="bg-[#b5b5b5] rounded-[10px] size-full" />
        </div>
      </div>
    </Wrapper>
  );
}

function CtaAdd() {
  return (
    <Wrapper>
      <div className="absolute bg-[#00ab6b] inset-[16.67%_45%] rounded-[10px]" />
      <Helper />
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-end relative rounded-[2.866px] shrink-0 w-[71.642px]">
        <div aria-hidden="true" className="absolute border-[#b5b5b5] border-[0.716px] border-solid inset-0 pointer-events-none rounded-[2.866px]" />
        <div className="content-stretch flex items-center justify-end pl-[5.731px] pr-[7.164px] py-[2.866px] relative shrink-0 w-[50.149px]">
          <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[10.03px] text-right whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute flex inset-[45%_16.67%] items-center justify-center">
      <div className="flex-none h-[8.597px] rotate-90 w-[1.29px]">
        <div className="bg-[#00ab6b] rounded-[10px] size-full" />
      </div>
    </div>
  );
}
type BibitSahamTextProps = {
  text: string;
};

function BibitSahamText({ text }: BibitSahamTextProps) {
  return (
    <div className="content-stretch flex gap-[4.299px] items-center justify-end relative shrink-0 w-[136.836px]">
      <Wrapper>
        <Helper />
      </Wrapper>
      <Text1 text={text} />
      <CtaAdd />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[10.03px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BibitSahamHelper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BibitSahamHelper1({ text, text1, additionalClassNames = "" }: BibitSahamHelper1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-center justify-center relative w-full", additionalClassNames)}>
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <Text text={text} />
        <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[10.03px] text-right whitespace-nowrap">{text1}</p>
      </div>
    </div>
  );
}
type BibitSahamHelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function BibitSahamHelper({ text, text1, text2, text3, children }: React.PropsWithChildren<BibitSahamHelperProps>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start justify-between px-[11.463px] py-[14.328px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[11.463px] items-center min-h-px min-w-px relative">
          <Wrapper1 additionalClassNames="w-[147.582px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.433px] items-start leading-[1.35] min-h-px min-w-px not-italic relative" data-name="Text">
              <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333] text-[11.463px] w-full">{text}</p>
              <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696] text-[8.597px] w-full">{text1}</p>
            </div>
          </Wrapper1>
          <div className="content-stretch flex flex-col gap-[1.433px] items-end justify-center relative shrink-0 w-[58.03px]">
            <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[11.463px] whitespace-nowrap">{text2}</p>
            <div className="content-stretch flex gap-[1.433px] items-center relative shrink-0">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[71.642px] shrink-0 size-[8.597px]" data-name="Icon Profit">
                <div className="relative shrink-0 size-[7.164px]" data-name="arrow-up-right">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16418 7.16418">
                    {children}
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[8.597px] whitespace-nowrap">{text3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type AtomsIconPLProps = {
  className?: string;
  state?: "Profit" | "Loss";
};

function AtomsIconPL({ className, state = "Profit" }: AtomsIconPLProps) {
  const isLoss = state === "Loss";
  const isProfit = state === "Profit";
  return (
    <div className={className || "relative"}>
      {isProfit && (
        <>
          <Vector additionalClassNames="absolute inset-[29.17%_29.16%_29.17%_29.17%]">
            <path d="M0.5 7.16667L7.16667 0.5" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" />
          </Vector>
          <Vector additionalClassNames="absolute inset-[29.17%_29.16%_29.17%_29.17%]">
            <path d="M0.5 0.5H7.16667V7.16667" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" />
          </Vector>
        </>
      )}
      {isLoss && (
        <>
          <div className="absolute flex inset-[29.17%_29.16%_29.16%_29.17%] items-center justify-center">
            <AtomsIconPLHelper additionalClassNames="-rotate-90">
              <path d="M0.5 7.16667L7.16667 0.5" id="Vector" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" />
            </AtomsIconPLHelper>
          </div>
          <div className="absolute flex inset-[29.17%_29.16%_29.17%_29.17%] items-center justify-center">
            <AtomsIconPLHelper additionalClassNames="rotate-90">
              <path d="M0.5 0.5H7.16667V7.16667" id="Vector" stroke="var(--stroke-0, #EE4A49)" strokeLinecap="round" strokeLinejoin="round" />
            </AtomsIconPLHelper>
          </div>
        </>
      )}
    </div>
  );
}

export default function BibitSaham() {
  return (
    <div className="bg-white relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905043} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${"1" === "5" ? "bottom-0" : "1" === "4" ? "top-[-1503px]" : "1" === "3" ? "top-[-1002px]" : "1" === "2" ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[408px] left-1/2 top-[calc(50%+0.27px)] w-[200px]" data-name="iphone-17-pro-max-mockup-1772681932750 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIphone17ProMaxMockup17726819327501} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[15px] items-center justify-center left-1/2 top-[calc(50%+0.27px)]">
            <Wrapper2>
              <div aria-hidden="true" className="absolute border-[#ededed] border-[0.716px] border-solid inset-0 pointer-events-none rounded-[2.866px]" />
              <BibitSahamHelper text="UNVR" text1="Unilever Indonesia Tbk" text2="7,825.00" text3="Rp2,230.00 (0.49%)">
                <g id="arrow-up-right">
                  <path d={svgPaths.p1152e0b0} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.716418" />
                  <path d={svgPaths.p2f872080} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.716418" />
                </g>
              </BibitSahamHelper>
              <div className="h-[0.716px] relative shrink-0 w-[240px]" data-name="Divider/Bibit/Solid">
                <div className="absolute bg-[#f1f1f1] inset-0" data-name="Divider Solid" />
              </div>
              <div className="relative shrink-0 w-full" data-name="Details 02">
                <div className="flex flex-col items-center justify-center size-full">
                  <BibitSahamHelper1 text="Lot Dimiliki" text1="10 Lot" additionalClassNames="p-[11.463px]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[17.194px] items-start p-[11.463px] relative rounded-[2.866px] shrink-0">
                <div className="content-stretch flex gap-[34.388px] items-center relative shrink-0 w-[217.075px]">
                  <Text text="Harga Jual" />
                  <BibitSahamText text="7,900" />
                </div>
                <Wrapper3>
                  <BibitSahamCtaMinus />
                  <Text1 text="|" />
                  <CtaAdd />
                </Wrapper3>
              </div>
              <BibitSahamSlider>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Slider">
                  <div className="bg-[#ededed] col-1 h-[1.433px] ml-0 mt-[7.16px] rounded-[8px] row-1 w-[189.851px]" data-name="Available" />
                  <BibitSahamUsed additionalClassNames="ml-0">
                    <circle cx="8.59702" cy="8.59702" fill="var(--fill-0, white)" id="Ellipse 771" r="7.8806" stroke="var(--stroke-0, #B5B5B5)" strokeWidth="1.43284" />
                  </BibitSahamUsed>
                </div>
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#969696] text-[8.6px] text-right w-[22.925px]">0%</p>
              </BibitSahamSlider>
              <div className="relative shrink-0 w-full" data-name="Details 3">
                <div className="flex flex-col items-center justify-center size-full">
                  <BibitSahamHelper1 text="Net Fee" text1="Rp 7,900,000" additionalClassNames="pb-[14.328px] pt-[5.731px] px-[11.463px]" />
                </div>
              </div>
            </Wrapper2>
            <Wrapper2>
              <div aria-hidden="true" className="absolute border-[#ededed] border-[0.716px] border-solid inset-0 pointer-events-none rounded-[2.866px]" />
              <div className="content-stretch flex gap-[10.03px] items-start px-[11.463px] py-[10.03px] relative shrink-0 w-[240px]" data-name="Portfolio">
                <div className="content-stretch flex flex-[1_0_0] gap-[7.164px] items-center min-h-px min-w-px relative">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Layer 2">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[12.896px]" data-name="Layer 1">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8955 12.8955">
                        <g id="Layer 1">
                          <path d={svgPaths.p4095e00} fill="var(--fill-0, #00AB6B)" id="Vector" />
                          <g id="Group 51365">
                            <g id="Vector_2">
                              <path d="M4.97747 2.86558V8.99216Z" fill="var(--fill-0, white)" />
                              <path d="M4.97747 2.86558V8.99216" stroke="var(--stroke-0, white)" strokeWidth="0.537313" />
                            </g>
                            <g id="Vector_3">
                              <path d="M7.9229 4.5272V10.0334Z" fill="var(--fill-0, white)" />
                              <path d="M7.9229 4.5272V10.0334" stroke="var(--stroke-0, white)" strokeWidth="0.537313" />
                            </g>
                            <path d={svgPaths.p12d96c00} fill="var(--fill-0, white)" id="Vector_4" />
                            <path d={svgPaths.p2253100} fill="var(--fill-0, white)" id="Vector_5" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[10.03px] w-[141.851px]">Bibit Saham</p>
                </div>
                <div className="bg-[#e6f7f0] content-stretch flex items-center justify-center px-[5.731px] py-[1.433px] relative rounded-[14.328px] shrink-0">
                  <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[8.597px] text-center whitespace-nowrap">Ubah</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[240px]">
                <div className="absolute inset-[-0.72px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 0.716418">
                    <line id="Line 628" stroke="var(--stroke-0, #EDEDED)" strokeWidth="0.716418" x2="240" y1="0.358209" y2="0.358209" />
                  </svg>
                </div>
              </div>
              <BibitSahamHelper text="UNVR" text1="Unilever Indonesia Tbk" text2="4,120.00" text3="20.00 (+0.49%)">
                <g id="arrow-up-right">
                  <path d={svgPaths.p2c704b00} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.716418" />
                  <path d={svgPaths.p18d4300} id="Vector_2" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.716418" />
                </g>
              </BibitSahamHelper>
              <div className="h-[0.716px] relative shrink-0 w-[240px]" data-name="Divider/Bibit/Solid">
                <div className="absolute bg-[#f1f1f1] inset-0" data-name="Divider Solid" />
              </div>
              <div className="content-stretch flex flex-col gap-[17.194px] items-start p-[11.463px] relative rounded-[2.866px] shrink-0">
                <div className="content-stretch flex gap-[34.388px] items-center relative shrink-0 w-[217.075px]">
                  <Text text="Harga Beli" />
                  <BibitSahamText text="4,120" />
                </div>
                <Wrapper3>
                  <BibitSahamCtaMinus />
                  <Text1 text="10" />
                  <CtaAdd />
                </Wrapper3>
              </div>
              <BibitSahamSlider>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Slider">
                  <div className="bg-[#00ab6b] col-1 h-[1.433px] ml-0 mt-[7.16px] rounded-[8px] row-1 w-[189.851px]" data-name="Available" />
                  <BibitSahamUsed additionalClassNames="ml-[172.66px]">
                    <circle cx="8.59702" cy="8.59702" fill="var(--fill-0, white)" id="Ellipse 771" r="7.8806" stroke="var(--stroke-0, #00AB6B)" strokeWidth="1.43284" />
                  </BibitSahamUsed>
                </div>
                <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#969696] text-[8.6px] text-right w-[22.925px]">100%</p>
              </BibitSahamSlider>
              <div className="relative shrink-0 w-full" data-name="Details 4">
                <div className="flex flex-col items-center justify-center size-full">
                  <BibitSahamHelper1 text="Total Investasi (Plus Fee)" text1="Rp4,120,858" additionalClassNames="pb-[14.328px] pt-[5.731px] px-[11.463px]" />
                </div>
              </div>
            </Wrapper2>
            <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shadow-[4px_4px_24px_20px_rgba(170,170,170,0.04)] shrink-0 w-[240px]" data-name="Modal">
              <div className="bg-white h-[21.76px] relative shrink-0 w-[240px]" data-name="Home Indicator">
                <div className="-translate-x-1/2 absolute bg-[#333] bottom-[5.12px] h-[3.2px] left-[calc(50%+0.32px)] rounded-[64px] w-[85.76px]" data-name="Home Indicator" />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[15.36px] items-center justify-center pb-[12.8px] pt-[25.6px] px-[12.8px] relative w-full">
                    <div className="h-[76.8px] relative shrink-0 w-[115.2px]" data-name="Bibit Saham">
                      <div className="absolute inset-[5.7%_-0.01%_12.36%_0.1%]" data-name="Illustration">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.096 62.9248">
                          <g id="Illustration">
                            <path d={svgPaths.p11e96180} fill="var(--fill-0, #D9F3E9)" id="Vector" />
                            <path d={svgPaths.p16160300} fill="var(--fill-0, #9FD7C2)" id="Vector_2" />
                            <path d={svgPaths.p19473e00} fill="var(--fill-0, #9FD7C2)" id="Vector_3" />
                            <path d={svgPaths.p390dbf00} fill="var(--fill-0, white)" id="Vector_4" />
                            <path d={svgPaths.p380a3300} fill="var(--fill-0, #007D43)" id="Vector_5" />
                            <path d={svgPaths.p26f098f0} fill="var(--fill-0, #9FD7C2)" id="Vector_6" />
                            <path d={svgPaths.p3173dec0} fill="var(--fill-0, #007D43)" id="Vector_7" />
                            <path d={svgPaths.p17c57000} fill="var(--fill-0, #D9F3E9)" id="Vector_8" />
                            <path d={svgPaths.p3b918dc0} fill="var(--fill-0, white)" id="Vector_9" />
                            <path d={svgPaths.p3b918dc0} fill="var(--fill-0, white)" id="Vector_10" />
                            <path d={svgPaths.p245a980} fill="var(--fill-0, #007D43)" id="Vector_11" />
                            <path d={svgPaths.p2b29400} fill="var(--fill-0, #007D43)" id="Vector_12" />
                            <path d={svgPaths.p223c4c00} fill="var(--fill-0, #00AB6B)" id="Vector_13" />
                            <path d={svgPaths.p1717e200} fill="var(--fill-0, #007D43)" id="Vector_14" />
                            <path d={svgPaths.pc7e3800} fill="var(--fill-0, #D9F3E9)" id="Vector_15" />
                            <path d={svgPaths.p18adc200} fill="var(--fill-0, #D9F3E9)" id="Vector_16" />
                            <path d={svgPaths.p10c2e000} fill="var(--fill-0, white)" id="Vector_17" />
                            <path d={svgPaths.p10c2e000} fill="var(--fill-0, white)" id="Vector_18" />
                            <path d={svgPaths.p147d2d00} fill="var(--fill-0, #007D43)" id="Vector_19" />
                            <path d={svgPaths.p3b67b100} fill="var(--fill-0, white)" id="Vector_20" />
                            <path d={svgPaths.p35f8b700} fill="var(--fill-0, #007D43)" id="Vector_21" />
                            <path d={svgPaths.p339f0c00} fill="var(--fill-0, #90DEC0)" id="Vector_22" />
                            <path d={svgPaths.p349e0b80} fill="var(--fill-0, #007D43)" id="Vector_23" />
                            <path d={svgPaths.p3846f800} fill="var(--fill-0, #00AB6B)" id="Vector_24" />
                            <path d={svgPaths.p2f764980} fill="var(--fill-0, #00AB6B)" id="Vector_25" />
                            <path d={svgPaths.p19835b80} fill="var(--fill-0, #00AB6B)" id="Vector_26" />
                            <path d={svgPaths.p35b0ea80} fill="var(--fill-0, #00AB6B)" id="Vector_27" />
                            <path d={svgPaths.p1afe2f0} fill="var(--fill-0, #00AB6B)" id="Vector_28" />
                            <path d={svgPaths.p20befb00} fill="var(--fill-0, #00AB6B)" id="Vector_29" />
                            <path d={svgPaths.p22f2f00} fill="var(--fill-0, #90DEC0)" id="Vector_30" />
                            <path d={svgPaths.p15cc0af0} fill="var(--fill-0, white)" id="Vector_31" />
                            <path d={svgPaths.p21c13400} fill="var(--fill-0, #90DEC0)" id="Vector_32" />
                            <path d={svgPaths.p1e6bb80} fill="var(--fill-0, #00AB6B)" id="Vector_33" />
                            <path d={svgPaths.p3204f400} fill="var(--fill-0, #00AB6B)" id="Vector_34" />
                            <path d={svgPaths.p26261400} fill="var(--fill-0, #00AB6B)" id="Vector_35" />
                            <path d={svgPaths.p39a2800} fill="var(--fill-0, #00AB6B)" id="Vector_36" />
                            <path d={svgPaths.p30ce56f0} fill="var(--fill-0, #90DEC0)" id="Vector_37" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[7.68px] items-center justify-center leading-[1.35] not-italic relative shrink-0 text-center">
                      <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333] text-[10.24px] whitespace-nowrap">Order Jual Diterima</p>
                      <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696] text-[8.96px] w-[184.32px]">Transaksi kamu akan segera diproses.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white relative shrink-0 w-full" data-name="Bottom Action / With Content">
                <div className="content-stretch flex flex-col items-start pb-[12.8px] pt-[10.24px] px-[12.8px] relative w-full">
                  <div className="bg-[#00ab6b] relative rounded-[4px] shrink-0 w-[214.4px]" data-name="Button Variant/Button">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                        <div className="h-[28.16px] relative rounded-[4px] shrink-0 w-full" data-name="Button Master">
                          <div className="flex flex-col items-center justify-center size-full">
                            <div className="content-stretch flex flex-col items-center justify-center px-[12.8px] py-[7.68px] relative size-full">
                              <div className="content-stretch flex gap-[2.56px] items-center justify-center relative shrink-0" data-name="Container">
                                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[8.96px] text-center text-white whitespace-nowrap">Oke</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[8px] shrink-0" data-name="News">
              <div className="content-stretch flex flex-col gap-[11.463px] items-start overflow-clip p-[11.463px] relative rounded-[inherit]">
                <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[11.463px] w-[217.075px]">News</p>
                <div className="content-stretch flex flex-col gap-[17.194px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[11.463px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[51.582px]" data-name="Images / Example 2">
                      <div className="absolute inset-[-2.78%_-52.78%_-4.17%_-15.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11px_2px] mask-size-[72px_72px]" data-name="shutterstock_1716494026 1" style={{ maskImage: `url('${imgShutterstock17164940261}')` }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShutterstock17164940262} />
                      </div>
                    </div>
                    <BibitSahamFrame text="Tetap Tenang di tengah Pasar yang Bergejolak karena Cor..." text1="CNBC News" text2="5j" />
                  </div>
                  <div className="content-stretch flex gap-[11.463px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[51.582px]" data-name="Images / Example 1">
                      <div className="absolute inset-[-1.39%_-43.06%_-2.78%_-12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9px_1px] mask-size-[72px_72px]" data-name="shutterstock_533579002 1" style={{ maskImage: `url('${imgShutterstock17164940261}')` }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShutterstock5335790021} />
                      </div>
                    </div>
                    <BibitSahamFrame text="Tetap Tenang di tengah Pasar yang Bergejolak karena Cor..." text1="CNBC News" text2="5j" />
                  </div>
                  <div className="content-stretch flex gap-[11.463px] items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-[51.582px]" data-name="Images / Example 4">
                      <div className="absolute inset-[-0.72%_-2.5%_-5.07%_-2.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.8px_0.522px] mask-size-[72px_72px]" data-name="shutterstock_1779839804" style={{ maskImage: `url('${imgShutterstock1779839804}')` }}>
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShutterstock1779839805} />
                      </div>
                    </div>
                    <BibitSahamFrame text="Tetap Tenang di tengah Pasar yang Bergejolak karena Cor..." text1="CNBC News" text2="5j" />
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-0.72px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217.075 0.716418">
                      <line id="Line 470" stroke="var(--stroke-0, #F7F7F7)" strokeWidth="0.716418" x2="217.075" y1="0.358209" y2="0.358209" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex gap-[2.866px] items-center relative rounded-[5.731px] shrink-0 w-full">
                  <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[9.313px] text-center whitespace-nowrap">Lihat Semua</p>
                  <div className="flex items-center justify-center relative shrink-0 size-[14.328px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
                    <div className="-rotate-90 flex-none">
                      <div className="relative size-[14.328px]" data-name="Frame">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3284 14.3284">
                          <g id="Frame">
                            <path d={svgPaths.p14a6c100} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.07463" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#ededed] border-[0.716px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[4px_4px_24px_20px_rgba(170,170,170,0.04)]" />
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[15px] items-center justify-center left-1/2 top-[calc(50%+0.26px)] w-[480px]">
            <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0 w-[335px]">
              <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[4px_4px_24px_0px_rgba(170,170,170,0.04)]" />
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
                <Wrapper1 additionalClassNames="w-[206px]">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.35] min-h-px min-w-px not-italic relative" data-name="Text">
                    <p className="font-['Proxima_Nova:Bold',sans-serif] relative shrink-0 text-[#333] text-[16px] w-full">UNVR</p>
                    <p className="font-['Proxima_Nova:Regular',sans-serif] relative shrink-0 text-[#969696] text-[12px] w-full">Unilever Indonesia Tbk</p>
                  </div>
                </Wrapper1>
                <div className="content-stretch flex flex-col gap-[2px] items-end justify-center relative shrink-0 w-[81px]">
                  <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#333] text-[16px] whitespace-nowrap">7,825.00</p>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <BibitSahamIconProfit />
                    <div className="content-stretch flex items-center relative shrink-0">
                      <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[12px] whitespace-nowrap">Rp2,230.00 (0.49%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-center p-[8px] relative rounded-[8px] shadow-[4px_4px_24px_0px_rgba(170,170,170,0.04)] shrink-0 w-[70px]">
              <div className="relative shrink-0 size-[48px]">
                <img alt="" className="absolute block max-w-none size-full" height="48" src={imgEllipse1147} width="48" />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
                <div className="flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[1.35]">MYOR</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Profit">
                  <BibitSahamIconProfit />
                  <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[12px] text-right whitespace-nowrap">0,99%</p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shadow-[4px_4px_24px_0px_rgba(170,170,170,0.04)] shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" fill="var(--fill-0, #E5F7F0)" id="Ellipse 1207" r="12" />
                      </svg>
                    </div>
                    <div className="col-1 ml-[5.25px] mt-[5.25px] overflow-clip relative row-1 size-[14px]" data-name="Return">
                      <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                        <div className="absolute inset-[-8.04%_-4.38%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9583 8.125">
                            <path d={svgPaths.p3a334058} id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[70.83%] right-[4.17%] top-1/4" data-name="Vector">
                        <div className="absolute inset-[-16.07%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.625 4.625">
                            <path d="M0.5625 0.5625H4.0625V4.0625" id="Vector" stroke="var(--stroke-0, #00AB6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                    <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#969696] text-[12px] whitespace-nowrap">Return</p>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <AtomsIconPL className="overflow-clip relative shrink-0 size-[16px]" />
                      <p className="font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#00ab6b] text-[12px] whitespace-nowrap">8.39%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 w-[335px]">
              <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[4px_4px_24px_0px_rgba(170,170,170,0.04)]" />
              <p className="flex-[1_0_0] font-['Proxima_Nova:Bold',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#333] text-[14px]">Order Book</p>
              <div className="relative shrink-0 size-[24px]" data-name="Icon / Top Bar / Chevron Down">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-15%_-7.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                      <path d={svgPaths.p3d2c9380} id="Vector" stroke="var(--stroke-0, #B5B5B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <BibitSahamHelper2>
              <g id="Group 11705">
                <g id="Ellipse 1209" />
                <g id="Graph">
                  <path clipRule="evenodd" d={svgPaths.pfa65a80} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path clipRule="evenodd" d={svgPaths.p129b2800} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </g>
            </BibitSahamHelper2>
            <BibitSahamHelper2>
              <g id="Group 11708">
                <g id="Ellipse 1208" />
                <g clipPath="url(#clip0_1_29477)" id="dollar-sign">
                  <path d="M36.7503 17.5005V56.0005" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPaths.pb347560} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_29477">
                  <rect fill="white" height="42" transform="translate(15.7501 15.75)" width="42" />
                </clipPath>
              </defs>
            </BibitSahamHelper2>
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