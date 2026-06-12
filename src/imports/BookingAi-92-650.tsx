import svgPaths from "./svg-yx581npfnj";
import imgScreenshot20260305At0905043 from "figma:asset/c07279a825651bb783cb36941b504a3bcbd7963a.png";
import imgMacbookPro16Mockup17726844294851 from "figma:asset/ef4a68ee9f46413dc83fda941340655b3a3e072d.png";
import imgImage3 from "figma:asset/684bd852a3d922676113508ab49903ccd4c61f99.png";
import imgBibit from "figma:asset/5d37ec53ca3a834170970c6c3c26fb5814ba3fc0.png";

function BookingAiStatusStrip() {
  return (
    <div className="absolute inset-0 content-stretch flex flex-wrap gap-[12px] items-center justify-center pointer-events-none">
      <div className="bg-[#f2f2f7] content-stretch flex items-center relative rounded-[12px] shrink-0">
        <div className="bg-white px-[20px] py-[8px] relative rounded-[8px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-0 rounded-[8px]" />
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative text-[17px] text-black whitespace-nowrap">Waktu</p>
        </div>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] px-[20px] py-[8px] relative text-[#aeaeb2] text-[17px] whitespace-nowrap">Pekerja</p>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] px-[20px] py-[8px] relative text-[#aeaeb2] text-[17px] whitespace-nowrap">Layanan</p>
      </div>
      <div className="bg-white px-[20px] py-[8px] relative rounded-[8px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#f2f2f7] border-solid inset-0 rounded-[8px]" />
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative text-[17px] text-black whitespace-nowrap">Bulanan</p>
      </div>
    </div>
  );
}

function AiHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-[8px] relative">{children}</div>
    </div>
  );
}
type TabComponentTextProps = {
  text: string;
};

function TabComponentText({ text }: TabComponentTextProps) {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <Wrapper>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </Wrapper>
    </div>
  );
}
type AiProps = {
  className?: string;
  active?: boolean;
};

function Ai({ className, active = true }: AiProps) {
  const isActive = active;
  const isNotActive = !active;
  return (
    <div className={className || `relative rounded-[12px] ${isActive ? "bg-[rgba(176,78,154,0.08)]" : "bg-[#f2f2f7]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative">
          {isNotActive && (
            <div className="bg-white content-stretch flex gap-[12px] items-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 2">
              <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <AiHelper>
                <path d={svgPaths.p2d48c280} fill="var(--fill-0, #AEAEB2)" id="Star 2" />
              </AiHelper>
              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`AI `}</p>
            </div>
          )}
          <div className={`relative rounded-[8px] shrink-0 ${isActive ? "content-stretch flex items-center px-[20px] py-[8px]" : ""}`} data-name="Component 5">
            {isNotActive && (
              <Wrapper>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] opacity-0 relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  AI
                </p>
              </Wrapper>
            )}
            {isActive && (
              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] opacity-0 relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                AI
              </p>
            )}
          </div>
          {isActive && (
            <div className="bg-white content-stretch flex gap-[12px] items-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Component 2">
              <div aria-hidden="true" className="absolute border border-[#b04e9a] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <AiHelper>
                <path d={svgPaths.p2d48c280} fill="var(--fill-0, #B04E9A)" id="Star 2" />
              </AiHelper>
              <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#b04e9a] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`AI `}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type StatusProps = {
  className?: string;
  property1?: "AI Aktif" | "AI Tidak Aktif" | "Butuh Bantuan" | "Selesai";
};

function Status({ className, property1 = "AI Aktif" }: StatusProps) {
  const isAiTidakAktif = property1 === "AI Tidak Aktif";
  const isButuhBantuan = property1 === "Butuh Bantuan";
  const isSelesai = property1 === "Selesai";
  return (
    <div className={className || "bg-white relative rounded-[8px]"}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isSelesai ? "border-[#34c759]" : isButuhBantuan ? "border-[#ff9500]" : isAiTidakAktif ? "border-[#aeaeb2]" : "border-[#b04e9a]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative">
          {["AI Aktif", "AI Tidak Aktif", "Butuh Bantuan"].includes(property1) && (
            <div className="relative shrink-0 size-[12px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p90c85c0} fill={isButuhBantuan ? "var(--fill-0, #FF9500)" : isAiTidakAktif ? "var(--fill-0, #AEAEB2)" : "var(--fill-0, #B04E9A)"} id={isButuhBantuan ? "Star 3" : "Star 2"} />
              </svg>
            </div>
          )}
          <p className={`font-["SF_Pro:Bold",sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isSelesai ? "text-[#34c759]" : isButuhBantuan ? "text-[#ff9500]" : isAiTidakAktif ? "text-[#aeaeb2]" : "text-[#b04e9a]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            {isSelesai ? "Selesai" : isButuhBantuan ? "Butuh Bantuan" : isAiTidakAktif ? "AI Tidak Aktif" : "AI Aktif"}
          </p>
        </div>
      </div>
    </div>
  );
}
type BookingAiProps = {
  className?: string;
  state?: "1" | "2" | "3" | "4" | "5";
};

function BookingAi({ className, state = "1" }: BookingAiProps) {
  const is2 = state === "2";
  const is2Or3 = ["2", "3"].includes(state);
  const is3 = state === "3";
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905043} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : state === "4" ? "top-[-1503px]" : is3 ? "top-[-1002px]" : is2 ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[316px] left-1/2 top-[calc(50%+0.27px)] w-[480px]" data-name="macbook-pro-16-_-mockup-1772684429485 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacbookPro16Mockup17726844294851} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[248px] left-1/2 top-[calc(50%+0.27px)] w-[796.5px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          {["1", "2", "4", "5"].includes(state) && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[15px] items-center justify-center left-1/2 top-[calc(50%+0.26px)] w-[480px]">
              <div className="bg-[#f2f2f7] relative rounded-[12px] shrink-0" data-name="Tab">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center relative">
                    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component 2">
                      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <Wrapper>
                        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Waktu
                        </p>
                      </Wrapper>
                    </div>
                    <TabComponentText text="Pekerja" />
                    <TabComponentText text="Layanan" />
                  </div>
                </div>
              </div>
              <Status className="bg-white relative rounded-[8px] shrink-0" />
              <Ai active={false} className="bg-[#f2f2f7] relative rounded-[12px] shrink-0" />
              <div className="bg-white relative rounded-[8px] shrink-0" data-name="filter">
                <div aria-hidden="true" className="absolute border border-[#f2f2f7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[8px] relative">
                    <p className={`leading-[22px] relative shrink-0 text-[17px] tracking-[-0.43px] whitespace-nowrap ${is2 ? 'font-["SF_Pro:Regular",sans-serif] font-normal text-[#8e8e93]' : 'font-["SF_Pro:Semibold",sans-serif] font-[590] text-black'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {is2 ? "10:00" : ["4", "5"].includes(state) ? "Bulanan" : "Bulanan"}
                    </p>
                    {["1", "4", "5"].includes(state) && (
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
                        <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7279 7.77822">
                            <path d={svgPaths.p36ba0d00} fill="var(--fill-0, #AEAEB2)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {is3 && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[91px] left-1/2 top-[calc(50%+0.26px)] w-[480px]" data-name="image 4">
              <BookingAiStatusStrip />
            </div>
          )}
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[5.03%_5.03%_5.04%_1.39%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 67.3749 64.75" : "0 0 22.4583 21.5833"}>
                  <path d={is2Or3 ? svgPaths.p2e01d100 : svgPaths.p338f580} fill={is2Or3 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[4.17%_0_6.25%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 66 64.5" : "0 0 22 21.5"}>
                  <path d={is2Or3 ? svgPaths.p16047600 : svgPaths.p14799800} fill={is2Or3 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is2Or3 ? "0 0 60 60" : "0 0 20 20"}>
                  <path d={is2Or3 ? svgPaths.p15534280 : svgPaths.p26107b00} fill={is2Or3 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                </svg>
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

export default function BookingAi1() {
  return <BookingAi className="bg-white relative size-full" state="3" />;
}
