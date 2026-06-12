import clsx from "clsx";
import svgPaths from "./svg-hofpk33vl6";
import imgScreenshot20260305At0905044 from "figma:asset/5b5694798bd50263fa59129ffcb5c4d31b50522f.png";
import imgMacbookPro16Mockup17726845705131 from "figma:asset/f51c957b353206f45b72265a0654cefc7895c571.png";
import imgFrame3 from "figma:asset/94801a0298bc57d3da9f21806c4810713a5e654f.png";
import imgBibit from "figma:asset/3aea4d0e3b5ceb0291581a7b65c2b3961fdb2797.png";
import imgImage1 from "figma:asset/2a813c07b6995aa37169b104776ac36465b7bcdf.png";

type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function LingkarBadge({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[2px] relative">{children}</div>
      </div>
    </div>
  );
}
type LingkarTestiomonialCarouselArrowProps = {
  additionalClassNames?: string;
};

function LingkarTestiomonialCarouselArrow({ additionalClassNames = "" }: LingkarTestiomonialCarouselArrowProps) {
  return (
    <div className={clsx("bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center relative rounded-[56px] size-[56px]", additionalClassNames)}>
      <Wrapper additionalClassNames="relative shrink-0">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </Wrapper>
    </div>
  );
}

function LingkarTagStrip() {
  return (
    <div className="absolute inset-0 content-stretch flex gap-[18px] items-center justify-center pointer-events-none">
      {["Cibubur", "Interior", "2025"].map((label) => (
        <LingkarBadge key={label}>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{label}</p>
        </LingkarBadge>
      ))}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <LingkarTestiomonialCarouselArrow additionalClassNames="shrink-0" />
        <div className="flex items-center justify-center relative shrink-0 rotate-180">
          <LingkarTestiomonialCarouselArrow />
        </div>
      </div>
    </div>
  );
}
type LingkarProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function Lingkar({ className, state = "1" }: LingkarProps) {
  const is2 = state === "2";
  const is2Or3 = ["2", "3"].includes(state);
  const is3 = state === "3";
  const is4Or5 = ["4", "5"].includes(state);
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905044} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : state === "4" ? "top-[-1503px]" : is3 ? "top-[-1002px]" : is2 ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[316px] left-1/2 top-[calc(50%+0.27px)] w-[480px]" data-name="macbook-pro-16-_-mockup-1772684570513 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacbookPro16Mockup17726845705131} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          {["1", "3", "4", "5"].includes(state) && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[11.511px] items-center justify-center left-1/2 top-[calc(50%+0.27px)]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[410px] overflow-clip relative w-[426.667px]">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame3} />
                      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
                    </div>
                    <div className="absolute bottom-[20px] flex items-center justify-center left-[225.67px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative" data-name="name">
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                            <LingkarBadge>
                              <p className={`font-["Inter:Medium",sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${is3 ? "text-white" : "text-[#414651]"}`}>{is3 ? "bekasi" : is4Or5 ? "Label" : "Label"}</p>
                            </LingkarBadge>
                            <LingkarBadge>
                              <p className={`font-["Inter:Medium",sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${is3 ? "text-white" : "text-[#414651]"}`}>{is3 ? "arsitek" : is4Or5 ? "Label" : "Label"}</p>
                            </LingkarBadge>
                          </div>
                          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[#fdfdfd] text-[48px] tracking-[-0.96px] whitespace-nowrap">projek a</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#111] content-stretch flex flex-col gap-[64px] items-start min-w-[280px] p-[24px] relative rounded-[4px] shrink-0 w-[322px]" data-name="_Contact text">
                <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <Wrapper additionalClassNames="absolute left-[12px] top-[12px]">
                      <g id="tabler:brand-linktree">
                        <path d={svgPaths.p2963f1e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </Wrapper>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#fdfdfd] text-[20px] w-full">Linktree</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {is2 && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[410px] left-1/2 top-[calc(50%+0.27px)] w-[760.5px]" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
          )}
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          {["1", "2", "4", "5"].includes(state) && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[15px] items-center justify-center left-1/2 top-[calc(50%+0.26px)] w-[480px]">
              <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[56px] shrink-0 size-[56px]" data-name="_Testiomonial carousel arrow">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    {["1", "4", "5"].includes(state) && (
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-left">
                        <div className="absolute inset-[20.83%]" data-name="Icon">
                          <div className="absolute inset-[-7.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d="M15 8H1M1 8L8 15M1 8L8 1" id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    {is2 && (
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x-close">
                        <div className="absolute inset-1/4" data-name="Icon">
                          <div className="absolute inset-[-8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                              <path d="M13 1L1 13M1 1L13 13" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <LingkarBadge>
                  <p className={`font-["Inter:Medium",sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${is2 ? "text-white" : "text-[#414651]"}`}>{is2 ? "Cibubur" : is4Or5 ? "Label" : "Label"}</p>
                </LingkarBadge>
                <LingkarBadge>
                  <p className={`font-["Inter:Medium",sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${is2 ? "text-white" : "text-[#414651]"}`}>{is2 ? "Interior" : is4Or5 ? "Label" : "Label"}</p>
                </LingkarBadge>
                <LingkarBadge>
                  <p className={`font-["Inter:Medium",sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${is2 ? "text-white" : "text-[#414651]"}`}>{is2 ? "2025" : is4Or5 ? "Label" : "Label"}</p>
                </LingkarBadge>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <LingkarTestiomonialCarouselArrow additionalClassNames="shrink-0" />
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <LingkarTestiomonialCarouselArrow />
                  </div>
                </div>
              </div>
            </div>
          )}
          {is3 && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-1/2 top-[calc(50%+0.26px)] w-[480px]" data-name="image 2">
              <LingkarTagStrip />
            </div>
          )}
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-1/2">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="overflow-clip relative size-[72px]" data-name="arrow-left">
                  <div className="absolute inset-[20.83%]" data-name="Icon">
                    <div className={`absolute ${is2Or3 ? "inset-[-3.57%]" : "inset-[-7.14%]"}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 45 45" : "0 0 16 16"}>
                        <path d={is2Or3 ? svgPaths.p338d6c00 : "M15 8H1M1 8L8 15M1 8L8 1"} id="Icon" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "2"} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="x-close">
              <div className="absolute inset-1/4" data-name="Icon">
                <div className={`absolute ${is2Or3 ? "inset-[-4.17%]" : "inset-[-8.33%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 39 39" : "0 0 14 14"}>
                    <path d={is2Or3 ? svgPaths.p3aa5fd00 : "M13 1L1 13M1 1L13 13"} id="Icon" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "2"} />
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="mail-02">
              <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                <div className={`absolute ${is2Or3 ? "inset-[-3.13%_-2.5%_-3.12%_-2.5%]" : "inset-[-6.25%_-5%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 63.0003 51" : "0 0 22.0002 18"}>
                    <path d={is2Or3 ? svgPaths.p2f1c8700 : svgPaths.p3533db80} id="Icon" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "2"} />
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

export default function Lingkar1() {
  return <Lingkar className="bg-white relative size-full" state="3" />;
}
