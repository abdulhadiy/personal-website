import svgPaths from "./svg-rn01fl6247";
import imgScreenshot20260305At0905044 from "figma:asset/df9eb12b9944f6e59351ad4111e7b7ba30a2533c.png";
import imgMacbookPro16Mockup17726836604871 from "figma:asset/d26540e82b98326b17965f527ef0ffbd8ac6f393.png";
import imgImage5 from "figma:asset/79f3fdf076fb42e617457197d8682d3920aaacf0.png";
import imgImage6 from "figma:asset/6345be1492c521b0434740798cc5a4c86083bcd7.png";
import imgBibit from "figma:asset/4a03c22dbb9551d5638818b32de59fedff8eea80.png";
type GgfProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function Ggf({ className, state = "1" }: GgfProps) {
  const is2Or3 = ["2", "3"].includes(state);
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905044} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : state === "4" ? "top-[-1503px]" : state === "3" ? "top-[-1002px]" : state === "2" ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[316px] left-1/2 top-[calc(50%+0.27px)] w-[480px]" data-name="macbook-pro-16-_-mockup-1772683660487 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacbookPro16Mockup17726836604871} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute h-[289px] left-1/2 w-[510px] ${["3", "4", "5"].includes(state) ? "top-[calc(50%+0.27px)]" : "top-[calc(50%+0.26px)]"}`} data-name="image 5">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[151px] left-1/2 top-[calc(50%+0.26px)] w-[493px]" data-name="image 6">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="drone">
              <div className="absolute inset-[12.5%_8.33%]" data-name="elements">
                <div className={`absolute ${is2Or3 ? "inset-[-2.78%_-2.5%]" : "inset-[-4.17%_-3.75%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 63 57" : "0 0 21.5 19.5"}>
                    <g>
                      <path d={is2Or3 ? svgPaths.p8d85e70 : svgPaths.p168ae580} id="Vector" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
                      <path d={is2Or3 ? "M31.4994 28.5H31.5264" : "M10.7498 9.75H10.7588"} id="Vector_2" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "2"} />
                      <path d={is2Or3 ? svgPaths.p37a0f000 : svgPaths.pecd7f40} id="Vector 5043" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
                      <path d={is2Or3 ? svgPaths.p3bec5b80 : svgPaths.p3cfbac00} id="Vector 5044" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
                      <path d={is2Or3 ? svgPaths.p1e59fea0 : svgPaths.p7224780} id="Vector 5045" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #141B34)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="Pineapple">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[72px] top-1/2" data-name="Layer_1">
                <div className="absolute inset-[2.93%_23.05%]" data-name="Group">
                  <div className={`absolute ${is2Or3 ? "inset-[-2.21%_-3.86%]" : "inset-[-3.98%_-6.96%]"}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 41.8125 70.7812" : "0 0 12.2813 20.3281"}>
                      <g id="Group">
                        <path d={is2Or3 ? svgPaths.p6958e00 : svgPaths.p3e942f00} id="Vector" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p2973df40 : svgPaths.p38133080} id="Vector_2" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path clipRule="evenodd" d={is2Or3 ? svgPaths.p30bf400 : svgPaths.p1ede480} fillRule="evenodd" id="Vector_3" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p2a86c580 : svgPaths.p11879b00} id="Vector_4" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p2f949380 : svgPaths.pb3d900} id="Vector_5" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p2c9fc400 : svgPaths.p17ef6b80} id="Vector_6" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p1c08ead0 : svgPaths.p3add2800} id="Vector_7" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                        <path d={is2Or3 ? svgPaths.p9506700 : svgPaths.p1b7d91c0} id="Vector_8" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" strokeWidth={is2Or3 ? "3" : "1.5"} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="scale-01">
              <div className="absolute inset-[8.33%]" data-name="Icon">
                <div className={`absolute ${is2Or3 ? "inset-[-2.5%]" : "inset-[-5%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 63.0001 63.0001" : "0 0 22.0002 22.0002"}>
                    <path d={is2Or3 ? svgPaths.p3bd85c80 : svgPaths.p23d8f600} id="Icon" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #535862)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "2"} />
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
  return <Ggf className="bg-white relative size-full" state="2" />;
}