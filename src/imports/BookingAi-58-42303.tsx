import clsx from "clsx";
import svgPaths from "./svg-1bn6dgmr86";
import imgScreenshot20260305At0905043 from "figma:asset/c07279a825651bb783cb36941b504a3bcbd7963a.png";
import imgMacbookPro16Mockup17726844294851 from "figma:asset/ef4a68ee9f46413dc83fda941340655b3a3e072d.png";
import imgBibit from "figma:asset/5d37ec53ca3a834170970c6c3c26fb5814ba3fc0.png";

function BookingAiBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[15px] py-[6px] relative size-full">{children}</div>
    </div>
  );
}

function FieldBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[401.25px]">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative w-full">{children}</div>
    </div>
  );
}

function AiBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-[8px] relative">{children}</div>
    </div>
  );
}

function FilterBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f2f7] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[15px] py-[9px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-[44.25px]">
      <BackgroundImage />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="flex h-[16.5px] items-center justify-center relative shrink-0 w-0">
      <div className="-rotate-90 flex-none">
        <div className="h-0 relative w-[16.5px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 0.5">
              <line id="Line 2" stroke="var(--stroke-0, #E5E5EA)" strokeWidth="0.5" x2="22" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <div className={clsx("overflow-clip relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-[34.26%_23.48%_33.33%_23.48%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7279 7.77822">
          <path d={svgPaths.p36ba0d00} fill="var(--fill-0, #AEAEB2)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type BookingAiBackgroundImageAndTextProps = {
  text: string;
};

function BookingAiBackgroundImageAndText({ text }: BookingAiBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <IconBackgroundImage additionalClassNames="size-[18px]" />
      <BackgroundImage />
    </div>
  );
}
type TabComponentBackgroundImageAndTextProps = {
  text: string;
};

function TabComponentBackgroundImageAndText({ text }: TabComponentBackgroundImageAndTextProps) {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <BackgroundImage1>
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </BackgroundImage1>
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
              <AiBackgroundImage>
                <path d={svgPaths.p2d48c280} fill="var(--fill-0, #AEAEB2)" id="Star 2" />
              </AiBackgroundImage>
              <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`AI `}</p>
            </div>
          )}
          <div className={`relative rounded-[8px] shrink-0 ${isActive ? "content-stretch flex items-center px-[20px] py-[8px]" : ""}`} data-name="Component 5">
            {isNotActive && (
              <BackgroundImage1>
                <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] opacity-0 relative shrink-0 text-[#aeaeb2] text-[17px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  AI
                </p>
              </BackgroundImage1>
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
              <AiBackgroundImage>
                <path d={svgPaths.p2d48c280} fill="var(--fill-0, #B04E9A)" id="Star 2" />
              </AiBackgroundImage>
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
  const is1Or2Or3Or5 = ["1", "2", "3", "5"].includes(state);
  const is2Or3Or5 = ["2", "3", "5"].includes(state);
  const is4 = state === "4";
  return (
    <div className={className || "bg-white relative size-[510px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[533px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[537px]" data-name="Screenshot 2026-03-05 at 09.05.04 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.52%] left-[-2.38%] max-w-none top-[-2.88%] w-[104.05%]" src={imgScreenshot20260305At0905043} />
        </div>
      </div>
      <div className={`absolute content-stretch flex flex-col items-start left-0 w-[510px] ${state === "5" ? "bottom-0" : is4 ? "top-[-1503px]" : state === "3" ? "top-[-1002px]" : state === "2" ? "top-[-501px]" : "top-0"}`}>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[316px] left-1/2 top-[calc(50%+0.27px)] w-[480px]" data-name="macbook-pro-16-_-mockup-1772684429485 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacbookPro16Mockup17726844294851} />
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8.633px] items-center justify-center left-1/2 top-[calc(50%+0.27px)]">
            <div className="relative rounded-[15px] shrink-0 w-[431.25px]" data-name="details" style={{ backgroundImage: "linear-gradient(215.731deg, rgb(255, 250, 254) 0%, rgb(255, 255, 255) 100%)" }}>
              <div className="content-stretch flex flex-col items-center overflow-clip p-[15px] relative rounded-[inherit] w-full">
                <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                  <FieldBackgroundImage>
                    <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[16.5px] relative shrink-0 text-[12.75px] text-black tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {is4 ? "Pertanyaan" : is2Or3Or5 ? "Tittle" : "Tittle"}
                    </p>
                    <FilterBackgroundImage>
                      {is1Or2Or3Or5 && <BookingAiBackgroundImageAndText text="Prefix" />}
                      <p className={`flex-[1_0_0] min-h-px min-w-px relative text-black ${is4 ? 'font-["SF_Pro:Semibold",sans-serif] font-[590] leading-[16.5px] text-[12.75px] tracking-[-0.3225px]' : 'font-["SF_Pro:Regular",sans-serif] font-normal leading-[22px] text-[17px] tracking-[-0.43px]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {is4 ? "Berapa harga potong rambut?" : is2Or3Or5 ? "Placeholders" : "Placeholders"}
                      </p>
                      {is1Or2Or3Or5 && (
                        <>
                          <BackgroundImageAndText text="Sufix" />
                          <IconBackgroundImage additionalClassNames="size-[18px]" />
                        </>
                      )}
                    </FilterBackgroundImage>
                    {is1Or2Or3Or5 && (
                      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[15.75px] relative shrink-0 text-[#aeaeb2] text-[12px] tracking-[-0.31px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Hint here
                      </p>
                    )}
                  </FieldBackgroundImage>
                  <FieldBackgroundImage>
                    <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[16.5px] relative shrink-0 text-[12.75px] text-black tracking-[-0.43px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {is4 ? "Jawaban" : is2Or3Or5 ? "Tittle" : "Tittle"}
                    </p>
                    <FilterBackgroundImage>
                      {is1Or2Or3Or5 && <BookingAiBackgroundImageAndText text="Prefix" />}
                      <p className={`flex-[1_0_0] min-h-px min-w-px relative text-black ${is4 ? 'font-["SF_Pro:Semibold",sans-serif] font-[590] leading-[16.5px] text-[12.75px] tracking-[-0.3225px]' : 'font-["SF_Pro:Regular",sans-serif] font-normal leading-[22px] text-[17px] tracking-[-0.43px]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {is4 ? "100 rb" : is2Or3Or5 ? "Placeholders" : "Placeholders"}
                      </p>
                      {is1Or2Or3Or5 && (
                        <>
                          <BackgroundImageAndText text="Sufix" />
                          <IconBackgroundImage additionalClassNames="size-[18px]" />
                        </>
                      )}
                    </FilterBackgroundImage>
                    {is1Or2Or3Or5 && (
                      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[15.75px] relative shrink-0 text-[#aeaeb2] text-[12px] tracking-[-0.31px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Hint here
                      </p>
                    )}
                  </FieldBackgroundImage>
                  <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
                    <div className="h-[42px] relative rounded-[8px] shrink-0 w-[193.125px]" data-name="Component 1">
                      <div aria-hidden="true" className="absolute border-[#e5e5ea] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <BookingAiBackgroundImage>
                        <p className={`font-["SF_Pro:Semibold",sans-serif] font-[590] leading-[16.5px] relative shrink-0 text-[12.75px] tracking-[-0.43px] whitespace-nowrap ${is4 ? "text-[#ff3b30]" : "text-[#b04e9a]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                          {is4 ? "Batal" : is2Or3Or5 ? "CTA" : "CTA"}
                        </p>
                      </BookingAiBackgroundImage>
                    </div>
                    <div className="bg-[#b04e9a] h-[42px] relative rounded-[8px] shrink-0 w-[193.125px]" data-name="Component 3">
                      <BookingAiBackgroundImage>
                        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[16.5px] relative shrink-0 text-[12.75px] text-white tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {is4 ? "Tambah" : is2Or3Or5 ? "CTA" : "CTA"}
                        </p>
                      </BookingAiBackgroundImage>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e5e5ea] border-[0.375px] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.12)]" />
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[15px] items-end p-[15px] relative rounded-[9px] shrink-0 w-[341.25px]">
              <div aria-hidden="true" className="absolute border-[#e5e5ea] border-dashed border-t-[0.75px] inset-0 pointer-events-none rounded-[9px]" />
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-h-px min-w-px relative">
                  <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
                    <div className="absolute inset-[0_0_8.33%_4.17%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 17.25 16.5" : "0 0 23 22"}>
                        <path d={is4 ? svgPaths.p23f12e80 : svgPaths.p132feb00} fill={is4 ? "var(--fill-0, #B04E9A)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9px] items-start min-h-px min-w-px relative text-[12.75px] tracking-[-0.3225px]">
                    <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[0] relative shrink-0 text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <span className="leading-[16.5px]">{`Kepribadian `}</span>
                      <span className="leading-[16.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Agen AI
                      </span>
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] min-w-full relative shrink-0 text-[#8e8e93] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Instruksi gaya bicara dan identitas agen AI
                    </p>
                  </div>
                </div>
                <div className="relative rounded-[8px] shrink-0" data-name="Component 3">
                  <div aria-hidden="true" className="absolute border-[#b04e9a] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[6px] relative">
                      <div className={`relative shrink-0 size-[18px] ${is4 ? "overflow-clip" : ""}`} data-name="icon">
                        {is1Or2Or3Or5 && <div className="absolute bg-[#aeaeb2] inset-0 rounded-[4px]" />}
                        {is4 && (
                          <div className="absolute inset-[12.16%_12.5%_12.96%_12.5%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.4779">
                              <path d={svgPaths.p739d8c0} fill="var(--fill-0, #B04E9A)" id="Vector" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[16.5px] relative shrink-0 text-[#b04e9a] text-[12.75px] tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {is4 ? "Ubah" : is2Or3Or5 ? "CTA" : "CTA"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="bg-white relative rounded-[15px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#e5e5ea] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[15px]" />
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative w-full">
                      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[12.75px] text-black tracking-[-0.3225px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Kamu adalah Customer Service untuk bisnis bernama Test. Tugas-mu memberi informasi yang jelas, singkat, dan membantu. Gaya bicara-mu ramah, semi-formal, dan pakai emoji untuk berekspresi. Kamu tidak boleh menjawab pertanyaan yang tidak berkaitan dengan Test.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[15px] items-center justify-center left-1/2 top-[calc(50%+0.26px)] w-[480px]">
            <div className="bg-[#f2f2f7] relative rounded-[12px] shrink-0" data-name="Tab">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center relative">
                  <div className="bg-white relative rounded-[8px] shrink-0" data-name="Component 2">
                    <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <BackgroundImage1>
                      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Waktu
                      </p>
                    </BackgroundImage1>
                  </div>
                  <TabComponentBackgroundImageAndText text="Pekerja" />
                  <TabComponentBackgroundImageAndText text="Layanan" />
                </div>
              </div>
            </div>
            <Status className="bg-white relative rounded-[8px] shrink-0" />
            <Ai active={false} className="bg-[#f2f2f7] relative rounded-[12px] shrink-0" />
            <div className="bg-white relative rounded-[8px] shrink-0" data-name="filter">
              <div aria-hidden="true" className="absolute border border-[#f2f2f7] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[8px] relative">
                  <p className={`leading-[22px] relative shrink-0 text-[17px] tracking-[-0.43px] whitespace-nowrap ${is4 ? 'font-["SF_Pro:Regular",sans-serif] font-normal text-[#8e8e93]' : 'font-["SF_Pro:Semibold",sans-serif] font-[590] text-black'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    {is4 ? "10:00" : is2Or3Or5 ? "Bulanan" : "Bulanan"}
                  </p>
                  {is1Or2Or3Or5 && <IconBackgroundImage additionalClassNames="size-[24px]" />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[650/650] overflow-clip relative shrink-0 w-full" data-name="bibit">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-center flex flex-wrap gap-[72px] items-center justify-center left-1/2 top-[calc(50%-0.13px)]">
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[5.03%_5.03%_5.04%_1.39%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 67.3749 64.75" : "0 0 22.4583 21.5833"}>
                  <path d={is4 ? svgPaths.p2e01d100 : svgPaths.p338f580} fill={is4 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[4.17%_0_6.25%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 66 64.5" : "0 0 22 21.5"}>
                  <path d={is4 ? svgPaths.p16047600 : svgPaths.p14799800} fill={is4 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
                </svg>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[72px]" data-name="icon">
              <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={is4 ? "0 0 60 60" : "0 0 20 20"}>
                  <path d={is4 ? svgPaths.p15534280 : svgPaths.p26107b00} fill={is4 ? "var(--fill-0, white)" : "var(--fill-0, #AEAEB2)"} id="Vector" />
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
  return <BookingAi className="bg-white relative size-full" state="4" />;
}