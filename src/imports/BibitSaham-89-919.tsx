import svgPaths from "./svg-5ejfg81hvm";
import imgScreenshot20260305At0905043 from "figma:asset/5b5694798bd50263fa59129ffcb5c4d31b50522f.png";
import imgIphone17ProMaxMockup17726819327501 from "figma:asset/e0f9a4bcce6c5a88a98a6b9bfdf9b9ca002b1f0b.png";
import imgImage8 from "figma:asset/fc9696047d44adc3b50e251a63af1769951452c8.png";
import imgImage9 from "figma:asset/227d2bef339089e22acf4fceecc3f788f62562cf.png";
import imgBibit from "figma:asset/223c8651149e0d538455bceaf82715a17f20a777.png";

function BibitSahamHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        {children}
      </svg>
    </div>
  );
}
type BibitSahamProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function BibitSaham({ className, state = "1" }: BibitSahamProps) {
  const is2 = state === "2";
  const is2Or3 = ["2", "3"].includes(state);
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905043} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : state === "4" ? "top-[-1503px]" : state === "3" ? "top-[-1002px]" : is2 ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[408px] left-1/2 top-[calc(50%+0.27px)] w-[200px]" data-name="iphone-17-pro-max-mockup-1772681932750 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIphone17ProMaxMockup17726819327501} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute h-[509px] left-1/2 w-[640px] ${["3", "4", "5"].includes(state) ? "top-[calc(50%+0.27px)]" : is2 ? "top-[calc(50%+0.5px)]" : "top-[calc(50%+0.26px)]"}`} data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[259px] left-1/2 top-[calc(50%+0.26px)] w-[510px]" data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <BibitSahamHelper>
              <g id="Group 11705">
                <g id="Ellipse 1209" />
                <g id="Graph">
                  <path clipRule="evenodd" d={svgPaths.pfa65a80} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path clipRule="evenodd" d={svgPaths.p129b2800} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </g>
            </BibitSahamHelper>
            <BibitSahamHelper>
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
            </BibitSahamHelper>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[72px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Ellipse 1207" />
                </svg>
              </div>
              <div className="col-1 ml-[15.75px] mt-[15.75px] overflow-clip relative row-1 size-[42px]" data-name="Return">
                <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
                  <div className={`absolute ${is2Or3 ? "inset-[-7.14%_-3.9%]" : "inset-[-6.25%_-3.41%]"}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 41.5 24" : "0 0 23.5 13.5"}>
                      <path d={is2Or3 ? svgPaths.p2e0945c0 : svgPaths.p2d26d180} id="Vector" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #01F4A6)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/2 left-[70.83%] right-[4.17%] top-1/4" data-name="Vector">
                  <div className={`absolute ${is2Or3 ? "inset-[-14.29%]" : "inset-[-12.5%]"}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 13.5 13.5" : "0 0 7.5 7.5"}>
                      <path d={is2Or3 ? "M1.5 1.5H12V12" : "M0.75 0.75H6.75V6.75"} id="Vector" stroke={is2Or3 ? "var(--stroke-0, white)" : "var(--stroke-0, #01F4A6)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={is2Or3 ? "3" : "1.5"} />
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

export default function BibitSaham1() {
  return <BibitSaham className="bg-white relative size-full" state="2" />;
}