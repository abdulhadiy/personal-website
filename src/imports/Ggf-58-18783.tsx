import clsx from "clsx";
import svgPaths from "./svg-oxujy1ejoj";
import imgScreenshot20260305At0905044 from "figma:asset/df9eb12b9944f6e59351ad4111e7b7ba30a2533c.png";
import imgMacbookPro16Mockup17726836604871 from "figma:asset/d26540e82b98326b17965f527ef0ffbd8ac6f393.png";
import imgBibit from "figma:asset/4a03c22dbb9551d5638818b32de59fedff8eea80.png";

function Legend({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start pt-[8px] relative w-full">{children}</div>
    </div>
  );
}

function YAxis({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-[360px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Color({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        {children}
      </svg>
    </div>
  );
}
type GgfLegendSeriesText1Props = {
  text: string;
};

function GgfLegendSeriesText1({ text, children }: React.PropsWithChildren<GgfLegendSeriesText1Props>) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Color>{children}</Color>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function GgfXAxis({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[48px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[36px] relative rounded-[6px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[12px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type GgfLegendSeriesTextProps = {
  text: string;
};

function GgfLegendSeriesText({ text, children }: React.PropsWithChildren<GgfLegendSeriesTextProps>) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-[14px] relative shrink-0 w-[8px]" data-name="Dot">
        <div className="absolute inset-[0_-25%_-14.29%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
            <g id="Dot">{children}</g>
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#535862] text-[10px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type GgfTooltipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function GgfTooltipText({ text, children, additionalClassNames = "" }: React.PropsWithChildren<GgfTooltipTextProps>) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start justify-center shadow-[0px_12px_16px_0px_rgba(10,13,18,0.08),0px_4px_6px_0px_rgba(10,13,18,0.03),0px_2px_2px_0px_rgba(10,13,18,0.04)] w-[74px]", additionalClassNames)}>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Content">
        <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="drone">
              <div className="absolute inset-[12.5%_8.33%]" data-name="elements">
                {children}
              </div>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#414651] text-[12px] text-center whitespace-nowrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type GgfYAxisLineTextProps = {
  text: string;
  additionalClassNames?: string;
};

function GgfYAxisLineText({ text, children, additionalClassNames = "" }: React.PropsWithChildren<GgfYAxisLineTextProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] w-[40px]">{text}</p>
          <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type GgfTabButtonBaseTextProps = {
  text: string;
};

function GgfTabButtonBaseText({ text }: GgfTabButtonBaseTextProps) {
  return (
    <Wrapper>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type GgfProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function Ggf({ className, state = "1" }: GgfProps) {
  const is1Or2Or3Or5 = ["1", "2", "3", "5"].includes(state);
  const is2Or3Or5 = ["2", "3", "5"].includes(state);
  const is4 = state === "4";
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905044} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : is4 ? "top-[-1503px]" : state === "3" ? "top-[-1002px]" : state === "2" ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[316px] left-1/2 top-[calc(50%+0.27px)] w-[480px]" data-name="macbook-pro-16-_-mockup-1772683660487 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacbookPro16Mockup17726836604871} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[11.511px] items-center justify-center left-1/2 top-[calc(50%+0.27px)]">
            <Wrapper1>
              <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="Text and supporting text">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Pineapple Yield</p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#414651] text-[0px] text-[12px] w-full">
                  <span className="leading-[18px]">{is4 ? "Overall yield " : is2Or3Or5 ? "Overall achievement " : "Overall achievement "}</span>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] text-[#007a2d]">82.5%</span>
                </p>
              </div>
              <Wrapper2 additionalClassNames="shrink-0 w-full">
                <YAxis>
                  <GgfYAxisLineText text="1,000" additionalClassNames="h-[22px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke={is4 ? "var(--stroke-0, #EFF1F5)" : "var(--stroke-0, #F5F5F5)"} strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="600" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke={is4 ? "var(--stroke-0, #EFF1F5)" : "var(--stroke-0, #F5F5F5)"} strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="200" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke={is4 ? "var(--stroke-0, #EFF1F5)" : "var(--stroke-0, #F5F5F5)"} strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="0" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke={is4 ? "var(--stroke-0, #EFF1F5)" : "var(--stroke-0, #F5F5F5)"} strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                </YAxis>
                <GgfXAxis>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Jan</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Feb</p>
                  <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#4da26c] border-b border-solid inset-0 pointer-events-none rounded-[1px]" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#007a2d] text-[12px] text-center whitespace-nowrap">Mar</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Apr</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">May</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Jun</p>
                </GgfXAxis>
                <div className="absolute h-[81px] left-[64px] top-[52px] w-[248px]" data-name="_Chart mini">
                  <div className="absolute inset-0" data-name="Background">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 81" : "0 0 112 56"}>
                      <g id="Background">
                        <mask height={is4 ? "81" : "56"} id={is4 ? "mask0_58_41204" : "mask0_58_21847"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width={is4 ? "248" : "112"} x="0" y="0">
                          <g id="Mask">
                            <rect fill={is4 ? "url(#paint0_linear_58_41204)" : "url(#paint0_linear_58_21847)"} height={is4 ? "81" : "56"} width={is4 ? "248" : "112"} />
                          </g>
                        </mask>
                        <g mask={is4 ? "url(#mask0_58_41204)" : "url(#mask0_58_21847)"}>
                          <path d={is4 ? svgPaths.p6cf1700 : svgPaths.p1947f00} fill="var(--fill-0, #17B26A)" id="Color" opacity="0.1" />
                        </g>
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id={is4 ? "paint0_linear_58_41204" : "paint0_linear_58_21847"} x1={is4 ? "124" : "56"} x2={is4 ? "124" : "56"} y1="0" y2={is4 ? "81" : "56"}>
                          <stop />
                          <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[3px_0_9px_0]" data-name="Line">
                    <div className={`absolute ${is4 ? "inset-[-1.32%_-0.4%_-1.45%_-0.4%]" : "inset-[-1.88%_-0.89%_-2.27%_-0.89%]"}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 250 70.9106" : "0 0 114 45.8293"}>
                        <path d={is4 ? svgPaths.p2adb27e0 : svgPaths.p14b75c00} id="Line" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[8.93%_26.79%_56.7%_56.03%]" data-name="Marker">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#17b26a] border-solid left-1/2 opacity-20 rounded-[200px] size-[19.25px] top-1/2" data-name="Ring" />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-2 border-[#17b26a] border-solid left-1/2 rounded-[200px] size-[10.5px] top-1/2" data-name="Dot" />
                  </div>
                </div>
                <div className="absolute h-[106px] left-[64px] top-[27px] w-[248px]" data-name="_Chart mini">
                  <div className="absolute inset-0" data-name="Background">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 106" : "0 0 112 56"}>
                      <g id="Background">
                        <mask height={is4 ? "106" : "56"} id={is4 ? "mask0_58_41191" : "mask0_58_21847"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width={is4 ? "248" : "112"} x="0" y="0">
                          <g id="Mask">
                            <rect fill={is4 ? "url(#paint0_linear_58_41191)" : "url(#paint0_linear_58_21847)"} height={is4 ? "106" : "56"} width={is4 ? "248" : "112"} />
                          </g>
                        </mask>
                        <g mask={is4 ? "url(#mask0_58_41191)" : "url(#mask0_58_21847)"}>
                          <path d={is4 ? svgPaths.p2077d040 : svgPaths.p1947f00} fill={is4 ? "var(--fill-0, #2970FF)" : "var(--fill-0, #17B26A)"} id="Color" opacity="0.1" />
                        </g>
                      </g>
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id={is4 ? "paint0_linear_58_41191" : "paint0_linear_58_21847"} x1={is4 ? "124" : "56"} x2={is4 ? "124" : "56"} y1="0" y2={is4 ? "106" : "56"}>
                          <stop />
                          <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[3px_0_9px_0]" data-name="Line">
                    <div className={`absolute ${is4 ? "inset-[-0.89%_-0.4%_-1.06%_-0.4%]" : "inset-[-1.88%_-0.89%_-2.27%_-0.89%]"}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 250 95.8402" : "0 0 114 45.8293"}>
                        <path d={is4 ? svgPaths.p3aadc5e0 : svgPaths.p14b75c00} id="Line" stroke={is4 ? "var(--stroke-0, #2970FF)" : "var(--stroke-0, #17B26A)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[8.93%_26.79%_56.7%_56.03%]" data-name="Marker">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#2970ff] border-solid left-1/2 opacity-20 rounded-[200px] size-[19.25px] top-1/2" data-name="Ring" />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border-2 border-[#2970ff] border-solid left-1/2 rounded-[200px] size-[10.5px] top-1/2" data-name="Dot" />
                  </div>
                </div>
                <Legend>
                  <GgfLegendSeriesText1 text="Forecast">
                    <circle cx="4" cy="4" fill={is4 ? "var(--fill-0, #2970FF)" : "var(--fill-0, #004E1D)"} id="Color" r="4" />
                  </GgfLegendSeriesText1>
                  <GgfLegendSeriesText1 text="Actual">
                    <circle cx="4" cy="4" fill={is4 ? "var(--fill-0, #007A2D)" : "var(--fill-0, #268E4D)"} id="Color" r="4" />
                  </GgfLegendSeriesText1>
                </Legend>
              </Wrapper2>
            </Wrapper1>
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[328px]" data-name="Chart">
              <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
              <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
                    <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" x1="0.5" x2="295.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px relative text-[#181d27] text-[16px]">Achieved Data</p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[10px] whitespace-nowrap">10 Days Left</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="_Legend">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend series">
                  <Color>
                    <circle cx="4" cy="4" fill="var(--fill-0, #007A2D)" id="Color" r="4" />
                  </Color>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#535862] text-[10px] whitespace-nowrap">Achieved: 50 ha</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend series">
                  <Color>
                    <circle cx="4" cy="4" fill="var(--fill-0, #D5D7DA)" id="Color" r="4" />
                  </Color>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#535862] text-[10px] whitespace-nowrap">{`Remaining: 50 ha `}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[50px] items-start justify-end relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Progress bar">
                  <div className="h-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Progress bar">
                    <div className="absolute bg-[#e9eaeb] h-[8px] left-0 right-0 rounded-[4px] top-0" data-name="Background" />
                    <div className="absolute h-[8px] left-0 right-[40%] top-0" data-name="Progress">
                      <div className="absolute bg-[#007a2d] h-[8px] left-0 right-[29.6px] rounded-[4px] top-0" data-name="Progress" />
                      <GgfTooltipText text="50%" additionalClassNames="absolute right-[-7.4px] top-[-42px]">
                        <div className={`absolute ${is4 ? "inset-[-5%_-4.5%_-4.99%_-4.5%]" : "inset-[-4.17%_-3.75%]"}`}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 14.5333 13.2" : "0 0 21.5 19.5"}>
                            <g>
                              <path d={is4 ? svgPaths.p1ed17900 : svgPaths.p168ae580} id="Vector" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                              <path d={is4 ? "M7.26654 6.6H7.27253" : "M10.7498 9.75H10.7588"} id="Vector_2" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.6" : "2"} />
                              <path d={is4 ? svgPaths.p5a63480 : svgPaths.pecd7f40} id="Vector 5043" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                              <path d={is4 ? svgPaths.p322a5080 : svgPaths.p3cfbac00} id="Vector 5044" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                              <path d={is4 ? svgPaths.p2dd8c00 : svgPaths.p7224780} id="Vector 5045" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                            </g>
                          </svg>
                        </div>
                      </GgfTooltipText>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[18px] not-italic relative shrink-0 text-[#535862] text-[10px] w-full whitespace-nowrap">
                <p className="relative shrink-0">{`0 ha `}</p>
                <p className="relative shrink-0">{`100 ha `}</p>
              </div>
            </div>
            <Wrapper1>
              <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="Text and supporting text">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Drone Performance</p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#414651] text-[0px] text-[12px] w-full">
                  <span className="leading-[18px]">{`Overall performance `}</span>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] text-[#007a2d]">72.5%</span>
                </p>
              </div>
              <Wrapper2 additionalClassNames="shrink-0 w-full">
                <YAxis>
                  <GgfYAxisLineText text="1,000" additionalClassNames="h-[22px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="600" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="200" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                  <GgfYAxisLineText text="0" additionalClassNames="h-[17px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 248 1" : "0 0 1168 1"}>
                      <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" x1="0.5" x2={is4 ? "247.5" : "1167.5"} y1="0.5" y2="0.5" />
                    </svg>
                  </GgfYAxisLineText>
                </YAxis>
                <div className="absolute inset-[16px_0_84px_59px] overflow-clip" data-name="_Chart data">
                  <div className="absolute h-[113px] left-[7px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 65">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_36225)">
                            <path d="M0 0H16V65H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 18.9583H16V65H0V18.9583Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_36225">
                            <path d={svgPaths.p13950bf0} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[113px] left-[52px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[16px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 97">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_33742)">
                            <path d="M0 0H16V97H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 28.2917H16V97H0V28.2917Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_33742">
                            <path d={svgPaths.p27127070} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[113px] left-[98px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[46px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 67">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_20829)">
                            <path d="M0 0H16V67H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 19.5417H16V67H0V19.5417Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_20829">
                            <path d={svgPaths.p1641e900} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[113px] left-[143px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[40px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 73">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_40192)">
                            <path d="M0 0H16V73H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 21.2917H16V73H0V21.2917Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_40192">
                            <path d={svgPaths.p4f20000} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[113px] left-[188px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[80px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 33">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_38706)">
                            <path d="M0 0H16V33H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 9.625H16V33H0V9.625Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_38706">
                            <path d={svgPaths.pcef7e80} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[113px] left-[235px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[24px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 89">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_36728)">
                            <path d="M0 0H16V89H0V0Z" fill="var(--fill-0, #BFDECB)" id="Series 1" />
                            <path d="M0 25.9583H16V89H0V25.9583Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_36728">
                            <path d={svgPaths.p2393c100} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[179px] left-[324px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 131">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_22345)">
                            <path d="M0 0H16V131H0V0Z" fill="var(--fill-0, #E9EAEB)" id="Series 1" />
                            <path d="M0 38.2083H16V131H0V38.2083Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                            <path d="M0 81.875H16V131H0V81.875Z" fill="var(--fill-0, #006425)" id="Series 3" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_22345">
                            <path d={svgPaths.p15418f80} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[179px] left-[363px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[32px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 147">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_25326)">
                            <path d="M0 0H16V147H0V0Z" fill="var(--fill-0, #E9EAEB)" id="Series 1" />
                            <path d="M0 42.875H16V147H0V42.875Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                            <path d="M0 91.875H16V147H0V91.875Z" fill="var(--fill-0, #006425)" id="Series 3" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_25326">
                            <path d={svgPaths.p1b8aeec0} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[179px] left-[402px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[16px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 163">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_29780)">
                            <path d="M0 0H16V163H0V0Z" fill="var(--fill-0, #E9EAEB)" id="Series 1" />
                            <path d="M0 47.5417H16V163H0V47.5417Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                            <path d="M0 101.875H16V163H0V101.875Z" fill="var(--fill-0, #006425)" id="Series 3" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_29780">
                            <path d={svgPaths.p2c51b8c0} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute h-[179px] left-[441px] top-0 w-[16px]" data-name="Bar">
                    <div className="absolute inset-[56px_0_0_0]" data-name="Chart bar">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 123">
                        <g id="Chart bar">
                          <g clipPath="url(#clip0_58_31266)">
                            <path d="M0 0H16V123H0V0Z" fill="var(--fill-0, #E9EAEB)" id="Series 1" />
                            <path d="M0 35.875H16V123H0V35.875Z" fill="var(--fill-0, #268E4D)" id="Series 2" />
                            <path d="M0 76.875H16V123H0V76.875Z" fill="var(--fill-0, #006425)" id="Series 3" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_58_31266">
                            <path d={svgPaths.p26310300} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <GgfXAxis>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Jan</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Feb</p>
                  <div className="content-stretch flex items-center justify-center relative rounded-[1px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#268e4d] border-b border-solid inset-0 pointer-events-none rounded-[1px]" />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#007a2d] text-[12px] text-center whitespace-nowrap">Mar</p>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Apr</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">May</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#414651] text-[10px] text-center whitespace-nowrap">Jun</p>
                </GgfXAxis>
                <Legend>
                  <GgfLegendSeriesText1 text="Target">
                    <circle cx="4" cy="4" fill={is4 ? "var(--fill-0, #BFDECB)" : "var(--fill-0, #004E1D)"} id="Color" r="4" />
                  </GgfLegendSeriesText1>
                  <GgfLegendSeriesText1 text="Completed">
                    <circle cx="4" cy="4" fill={is4 ? "var(--fill-0, #007A2D)" : "var(--fill-0, #268E4D)"} id="Color" r="4" />
                  </GgfLegendSeriesText1>
                </Legend>
              </Wrapper2>
            </Wrapper1>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-start flex flex-wrap gap-[15px] items-start left-1/2 top-[calc(50%+0.26px)] w-[480px]">
            <Wrapper2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Legend series">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#fafafa] content-stretch flex items-center p-[4px] relative rounded-[16px] shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="plane">
                      <div className="absolute inset-[8.57%_8.29%_8.56%_9.4%]" data-name="Icon">
                        <div className="absolute inset-[-5.03%_-5.06%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 10.8778 10.9449" : "0 0 21.7556 21.8898"}>
                            <path d={is4 ? svgPaths.p28039400 : svgPaths.p135a9f00} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is1Or2Or3Or5 ? "2" : undefined} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252b37] text-[12px] whitespace-nowrap">Flight Date</p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap">17 Sep 2025</p>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Legend series">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#fafafa] content-stretch flex items-center p-[4px] relative rounded-[16px] shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="clock-fast-forward">
                      <div className="absolute inset-[12.5%_5.42%_12.5%_12.5%]" data-name="Icon">
                        <div className="absolute inset-[-5.56%_-5.08%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 10.85 10" : "0 0 21.7 20"}>
                            <path d={is4 ? svgPaths.p1764af80 : svgPaths.p1619a780} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={is1Or2Or3Or5 ? "2" : undefined} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#252b37] text-[12px] whitespace-nowrap">Plant Age</p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d27] text-[12px] whitespace-nowrap">-6</p>
              </div>
            </Wrapper2>
            <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col gap-[4px] items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="_Legend">
              <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.04)]" />
              <GgfLegendSeriesText text="Above">
                <circle cx="6" cy="10" fill="var(--fill-0, #FAC515)" id="Color" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </GgfLegendSeriesText>
              <GgfLegendSeriesText text="Standard">
                <circle cx="6" cy="10" fill="var(--fill-0, #17B26A)" id="Color" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </GgfLegendSeriesText>
              <GgfLegendSeriesText text="Below">
                <circle cx="6" cy="10" fill="var(--fill-0, #F79009)" id="Color" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </GgfLegendSeriesText>
            </div>
            <GgfTooltipText text="50%" additionalClassNames="relative shrink-0">
              <div className={`absolute ${is4 ? "inset-[-5%_-4.5%]" : "inset-[-4.17%_-3.75%]"}`}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 14.5333 13.2" : "0 0 21.5 19.5"}>
                  <g>
                    <path d={is4 ? svgPaths.p1ed17900 : svgPaths.p168ae580} id="Vector" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                    <path d={is4 ? "M7.26654 6.6H7.27253" : "M10.7498 9.75H10.7588"} id="Vector_2" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.6" : "2"} />
                    <path d={is4 ? svgPaths.p5a63480 : svgPaths.pecd7f40} id="Vector 5043" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                    <path d={is4 ? svgPaths.p322a5080 : svgPaths.p3cfbac00} id="Vector 5044" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                    <path d={is4 ? svgPaths.p2dd8c00 : svgPaths.p7224780} id="Vector 5045" stroke={is4 ? "var(--stroke-0, #414651)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.2" : "1.5"} />
                  </g>
                </svg>
              </div>
            </GgfTooltipText>
            <div className="bg-[#e9eaeb] relative rounded-[10px] shrink-0 w-[327px]" data-name="Horizontal tabs">
              <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
                  <div className={`bg-white h-[36px] relative rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)] ${is4 ? "flex-[1_0_0] min-h-px min-w-px" : "shrink-0"}`} data-name="_Tab button base">
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className={`content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative ${is4 ? "size-full" : "h-full"}`}>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#252b37] text-[14px] whitespace-nowrap">Counting</p>
                      </div>
                    </div>
                  </div>
                  <div className={`h-[36px] relative rounded-[6px] ${is4 ? "flex-[1_0_0] min-h-px min-w-px" : "shrink-0"}`} data-name="_Tab button base">
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className={`content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative ${is4 ? "size-full" : "h-full"}`}>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">{is4 ? "Quality" : is2Or3Or5 ? "Profile" : "Profile"}</p>
                      </div>
                    </div>
                  </div>
                  {is1Or2Or3Or5 && (
                    <>
                      <GgfTabButtonBaseText text="Password" />
                      <GgfTabButtonBaseText text="Team" />
                      <GgfTabButtonBaseText text="Plan" />
                      <GgfTabButtonBaseText text="Billing" />
                      <GgfTabButtonBaseText text="Email" />
                      <Wrapper>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Notifications</p>
                        <div className="bg-[#fafafa] relative rounded-[16px] shrink-0" data-name="Badge">
                          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[8px] py-[2px] relative">
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#414651] text-[12px] text-center whitespace-nowrap">2</p>
                            </div>
                          </div>
                        </div>
                      </Wrapper>
                      <GgfTabButtonBaseText text="Integrations" />
                      <GgfTabButtonBaseText text="API" />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
              <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar">
                    <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                      <div className="absolute inset-[-5%_-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 16.6667 18.3333" : "0 0 20 22"}>
                          <path d={is4 ? svgPaths.p16594900 : svgPaths.p36499d00} id="Icon" stroke={is4 ? "var(--stroke-0, #717680)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "1.66667" : "2"} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] whitespace-nowrap">March 2025</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="drone">
              <div className="absolute inset-[12.5%_8.33%]" data-name="elements">
                <div className={`absolute ${is4 ? "inset-[-2.78%_-2.5%]" : "inset-[-4.17%_-3.75%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 63 57" : "0 0 21.5 19.5"}>
                    <g>
                      <path d={is4 ? svgPaths.p8d85e70 : svgPaths.p168ae580} id="Vector" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinejoin="round" strokeWidth={is4 ? "3" : "1.5"} />
                      <path d={is4 ? "M31.4994 28.5H31.5264" : "M10.7498 9.75H10.7588"} id="Vector_2" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "3" : "2"} />
                      <path d={is4 ? svgPaths.p37a0f000 : svgPaths.pecd7f40} id="Vector 5043" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "3" : "1.5"} />
                      <path d={is4 ? svgPaths.p3bec5b80 : svgPaths.p3cfbac00} id="Vector 5044" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "3" : "1.5"} />
                      <path d={is4 ? svgPaths.p1e59fea0 : svgPaths.p7224780} id="Vector 5045" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "3" : "1.5"} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="Pineapple">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[72px] top-1/2" data-name="Layer_1">
                <div className="absolute inset-[2.93%_23.05%]" data-name="Group">
                  <div className={`absolute ${is4 ? "inset-[-2.21%_-3.86%]" : "inset-[-3.98%_-6.96%]"}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 41.8125 70.7812" : "0 0 12.2813 20.3281"}>
                      <g id="Group">
                        <path d={is4 ? svgPaths.p6958e00 : svgPaths.p3e942f00} id="Vector" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p2973df40 : svgPaths.p38133080} id="Vector_2" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path clipRule="evenodd" d={is4 ? svgPaths.p30bf400 : svgPaths.p1ede480} fillRule="evenodd" id="Vector_3" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p2a86c580 : svgPaths.p11879b00} id="Vector_4" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p2f949380 : svgPaths.pb3d900} id="Vector_5" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p2c9fc400 : svgPaths.p17ef6b80} id="Vector_6" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p1c08ead0 : svgPaths.p3add2800} id="Vector_7" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                        <path d={is4 ? svgPaths.p9506700 : svgPaths.p1b7d91c0} id="Vector_8" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is4 ? "3" : "1.5"} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="scale-01">
              <div className="absolute inset-[8.33%]" data-name="Icon">
                <div className={`absolute ${is4 ? "inset-[-2.5%]" : "inset-[-5%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 63.0001 63.0001" : "0 0 22.0002 22.0002"}>
                    <path d={is4 ? svgPaths.p3bd85c80 : svgPaths.p23d8f600} id="Icon" stroke={is4 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is4 ? "3" : "2"} />
                  </svg>
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

export default function Ggf1() {
  return <Ggf className="bg-white relative size-full" state="4" />;
}