import svgPaths from "./svg-kutlwi8zd2";
import { useState } from "react";
import imgScreenshot20260305At905043 from "figma:asset/7b872ff2c435495300035d55db7369c581870026.png";
import imgIphone17ProMaxMockup17725952114972 from "figma:asset/1b5c8f8a32b48dfa0f1bc0089b0e0478ca1e3539.png";
import imgTransactionDropoffFlow from "./transaction-dropoff-flow.svg";
import videoSolution from "./solution.mov";
import imgProcessAudit from "./detail-assets/process-audit.png";
import imgProcessInterview from "./detail-assets/process-interview.png";
import imgProcessInsight from "./detail-assets/process-insight.png";
import imgProcessTracker from "./detail-assets/process-tracker.png";
import imgProcessAuditHeader from "./detail-assets/process-headers/audit.png";
import imgProcessInterviewHeader from "./detail-assets/process-headers/interview.png";
import imgProcessInsightHeader from "./detail-assets/process-headers/insight.png";
import imgProcessTrackerHeader from "./detail-assets/process-headers/tracker.png";
import imgProblemFlowCrop from "./detail-crops/problem-flow.png";
import imgProblemFlowMobile from "./detail-crops/problem-flow-mobile.png";
import imgSolutionCta from "./detail-assets/solution-cta.png";
import imgSolutionIdentifier from "./detail-assets/solution-identifier.png";
import imgSolutionImprove from "./detail-assets/solution-improve.png";
import imgSolutionAdjustment from "./detail-assets/solution-adjustment.png";
import imgImpactRate from "./detail-crops/impact-rate.png";
import imgImpactRevenue from "./detail-crops/impact-revenue.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_22617_88)" id="Frame">
          <g id="Vector" />
          <path d="M3.75 9H14.25" id="Vector_2" stroke="var(--stroke-0, #6E6F73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 9L8.25 13.5" id="Vector_3" stroke="var(--stroke-0, #6E6F73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 9L8.25 4.5" id="Vector_4" stroke="var(--stroke-0, #6E6F73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_22617_88">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

type PersonalWebsiteDetailProps = {
  onBack?: () => void;
};

function Sheet({ onBack }: PersonalWebsiteDetailProps) {
  return (
    <button
      className="bg-transparent border-0 content-stretch flex gap-[8px] items-center p-0 relative shrink-0 text-left"
      data-name="sheet"
      onClick={onBack}
      type="button"
    >
      <Frame />
      <p className="decoration-[12%] decoration-dotted font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase relative shrink-0 text-[#6e6f73] text-[14px] underline whitespace-nowrap">back</p>
    </button>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative self-stretch shrink-0 w-[18px]" data-name="Frame 17">
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[-0.59%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 172">
            <path d="M1 1V171" id="Vector 1" stroke="var(--stroke-0, #E0E0E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-black h-[18px] left-1/2 rounded-[4px] top-0 w-[2px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[20px] items-start leading-[normal] lowercase relative shrink-0 text-[14px] whitespace-nowrap" data-name="Frame 15">
      <p className="relative shrink-0 text-black">cover</p>
      <p className="relative shrink-0 text-[#6e6f73]">process</p>
      <p className="relative shrink-0 text-[#6e6f73]">problem</p>
      <p className="relative shrink-0 text-[#6e6f73]">solutions</p>
      <p className="relative shrink-0 text-[#6e6f73]">impact</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame17 />
      <Frame15 />
    </div>
  );
}

function Frame3({ onBack }: PersonalWebsiteDetailProps) {
  return (
    <div className="h-full shrink-0 sticky top-0 w-[245px] max-lg:hidden">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <Sheet onBack={onBack} />
          <div className="mt-[38px] relative shrink-0">
            <Frame16 />
          </div>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase mt-[43px] relative shrink-0 text-[#6e6f73] text-[14px] whitespace-nowrap">* 3 minutes read</p>
        </div>
      </div>
    </div>
  );
}

function Bibit() {
  return (
    <div className="bg-white h-[510px] overflow-clip relative shrink-0 w-full" data-name="bibit">
      <img
        alt=""
        className="-translate-x-1/2 -translate-y-1/2 absolute h-[112%] left-1/2 max-w-none object-cover pointer-events-none top-1/2 w-[112%]"
        src={imgScreenshot20260305At905043}
      />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute aspect-[1470/3000] h-[82%] left-1/2 top-1/2">
        <img
          alt=""
          className="block h-full max-w-none object-contain pointer-events-none w-full"
          src={imgIphone17ProMaxMockup17725952114972}
        />
      </div>
    </div>
  );
}

function GreenCardBackground() {
  return (
    <img
      alt=""
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[112%] left-1/2 max-w-none object-cover pointer-events-none top-1/2 w-[112%]"
      src={imgScreenshot20260305At905043}
    />
  );
}

type ProcessStepButtonProps = {
  label: string;
  detail: string;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

function ProcessStepButton({ label, detail, isActive, onActivate, onDeactivate }: ProcessStepButtonProps) {
  const detailId = `${label.replace(/\s+/g, "-")}-detail`;

  return (
    <div
      className="relative"
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          onDeactivate();
        }
      }}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      <button
        aria-describedby={detailId}
        className={`bg-transparent border-2 border-dashed content-stretch flex h-[44px] items-center justify-center px-[13px] relative rounded-[7px] text-left transition-[background-color,border-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/65 ${
          isActive
            ? "bg-white/10 border-white/90 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            : "border-white/55"
        }`}
        onFocus={onActivate}
        type="button"
      >
        <span className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase relative shrink-0 text-[14px] text-white whitespace-nowrap">
          {label}
        </span>
      </button>
      <div
        className={`-translate-x-1/2 absolute left-1/2 pointer-events-none top-[62px] transition-all duration-200 ease-out w-[216px] ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[8px]"
        }`}
        id={detailId}
      >
        <div className="bg-white/12 border border-white/30 px-[14px] py-[10px] rounded-[6px] shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-[2px]">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] lowercase text-[12px] text-white/85 text-center">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessInteraction() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const steps = [
    {
      label: "in-depth interview",
      detail: "understand user context, hesitation, and decision points",
    },
    {
      label: "gathering insight",
      detail: "cluster recurring patterns into actionable findings",
    },
    {
      label: "gathering data",
      detail: "validate findings with transaction and behavior data",
    },
  ];

  return (
    <div className="absolute inset-0">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[38px] items-center justify-center left-1/2 top-1/2">
        {steps.map((step, index) => (
          <ProcessStepButton
            key={step.label}
            {...step}
            isActive={activeStep === index}
            onActivate={() => setActiveStep(index)}
            onDeactivate={() => setActiveStep(null)}
          />
        ))}
      </div>
      <p className="absolute bottom-[28px] font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[28px] lowercase text-[16px] text-white/55">
        *hover to explore
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.327px] left-1/2 top-[calc(50%-0.34px)] w-[80px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 17.329">
        <g id="Frame 18376076">
          <path d={svgPaths.p1e939400} fill="var(--fill-0, #6E6F73)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p51f6300} fill="var(--fill-0, #6E6F73)" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p8d5f380} fill="var(--fill-0, #6E6F73)" fillRule="evenodd" id="Subtract_2" />
          <path d={svgPaths.p9451800} fill="var(--fill-0, #6E6F73)" id="Vector_2" />
          <path d={svgPaths.p35375c00} fill="var(--fill-0, #6E6F73)" id="Vector_3" />
          <path d={svgPaths.p86b5f00} fill="var(--fill-0, #6E6F73)" id="Vector_4" />
          <path d={svgPaths.p2f7a9870} fill="var(--fill-0, #6E6F73)" id="Vector_5" />
          <path d={svgPaths.p3eb4b200} fill="var(--fill-0, #6E6F73)" id="Vector_6" />
          <path d={svgPaths.p269da400} fill="var(--fill-0, #6E6F73)" id="Vector_7" />
          <path d={svgPaths.p19da4000} fill="var(--fill-0, #6E6F73)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140px]">
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase min-w-px relative text-[14px]">
      <p className="relative shrink-0 text-black whitespace-nowrap">revamp transaction page</p>
      <p className="min-w-full relative shrink-0 text-[#6e6f73] w-[min-content]">Increased transaction completion by improving clarity on the transaction page, addressing a 59% user drop-off</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[20px] relative size-full">
          <Frame14 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <Bibit />
      <Frame2 />
    </div>
  );
}

function Bibit1() {
  return (
    <div className="bg-white h-[510px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bibit">
      <GreenCardBackground />
      <ProcessInteraction />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase relative shrink-0 text-[14px] w-full">
      <p className="relative shrink-0 text-black whitespace-nowrap">process</p>
      <p className="min-w-full relative shrink-0 text-[#6e6f73] w-[min-content]">To find the true problems felt by users</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[775px]">
      <Bibit1 />
      <Frame4 />
    </div>
  );
}

function Bibit2() {
  return (
    <div className="bg-white h-[510px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bibit">
      <GreenCardBackground />
      <TransactionDropoffFlow />
    </div>
  );
}

function TransactionDropoffFlow() {
  return (
    <div className="absolute inset-0">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 w-[602px] max-w-[78%]">
        <img
          alt=""
          className="block h-auto pointer-events-none w-full"
          src={imgTransactionDropoffFlow}
        />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase relative shrink-0 text-[14px] w-full">
      <p className="relative shrink-0 text-black whitespace-nowrap">problem</p>
      <p className="min-w-full relative shrink-0 text-[#6e6f73] w-[min-content]">59% of users drop off at the transaction page</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[775px]">
      <Bibit2 />
      <Frame5 />
    </div>
  );
}

function Bibit3() {
  return (
    <div className="bg-white aspect-[1546/1224] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bibit">
      <video
        aria-label="solution prototype animation"
        autoPlay
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        src={videoSolution}
      />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase relative shrink-0 text-[14px] w-full">
      <p className="relative shrink-0 text-black whitespace-nowrap">solutions</p>
      <p className="min-w-full relative shrink-0 text-[#6e6f73] w-[min-content]">idea to solve user problem</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[775px]">
      <Bibit3 />
      <Frame6 />
    </div>
  );
}

function Bibit4() {
  return (
    <div className="bg-white h-[510px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="bibit">
      <GreenCardBackground />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase relative shrink-0 text-[14px] w-full whitespace-nowrap">
      <p className="relative shrink-0 text-black">impact</p>
      <p className="relative shrink-0 text-[#6e6f73]">Improving conversion to directly impact revenue</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-[775px]">
      <Bibit4 />
      <Frame7 />
    </div>
  );
}

function DetailPhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[1470/3000] ${className}`}>
      <img
        alt=""
        className="block h-full max-w-none object-contain pointer-events-none w-full"
        src={imgIphone17ProMaxMockup17725952114972}
      />
    </div>
  );
}

function DetailBibitLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140px]">
      <Frame1 />
    </div>
  );
}

function DetailCaption({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full sm:flex-row sm:items-center sm:gap-[20px] sm:p-[20px]">
        <DetailBibitLogo />
        <div className="content-stretch flex flex-1 flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start lowercase min-w-0 relative text-[14px]">
          <p className="relative shrink-0 text-black">{title}</p>
          <p className="leading-[19px] relative shrink-0 text-[#6e6f73] w-full">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MobileHomeCardCaption() {
  return (
    <div className="bg-white relative shrink-0 w-full sm:hidden">
      <div className="content-stretch flex gap-[20px] items-center p-[20px] relative w-full">
        <DetailBibitLogo />
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] lowercase min-h-px min-w-px relative text-[14px]">
          <p className="relative shrink-0 text-black whitespace-nowrap">revamp transaction page</p>
          <p className="min-w-full relative shrink-0 text-[#6e6f73] w-[min-content]">Increased transaction completion by improving clarity on the transaction page, addressing a 59% user drop-off</p>
        </div>
      </div>
    </div>
  );
}

function CoverSection() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="bg-white h-[360px] overflow-clip relative shrink-0 w-full sm:h-[510px]">
        <GreenCardBackground />
        <DetailPhoneMockup className="-translate-x-1/2 -translate-y-1/2 absolute h-[82%] left-1/2 top-1/2" />
      </div>
      <MobileHomeCardCaption />
      <div className="hidden sm:block sm:w-full">
        <DetailCaption
          title="revamp transaction page"
          description="increased transaction completion by improving clarity on the transaction page, addressing a 59% user drop-off"
        />
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start lowercase relative w-full">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-black">{title}</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] text-[#6e6f73] text-[14px]">{subtitle}</p>
    </div>
  );
}

function MiniIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white border border-[#ededed] content-stretch flex items-center justify-center rounded-full size-[22px]">
      {children}
    </div>
  );
}

function HoverAsset({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`group/detail-asset overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 origin-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/detail-asset:scale-[1.025] group-focus-within/detail-asset:scale-[1.025]">
        {children}
      </div>
    </div>
  );
}

function DetailImageAsset({ alt, className = "", src }: { alt: string; className?: string; src: string }) {
  return (
    <HoverAsset className={`bg-[#f7f7f7] rounded-[4px] w-full ${className}`}>
      <img
        alt={alt}
        className="absolute inset-0 object-contain object-center pointer-events-none size-full"
        src={src}
      />
    </HoverAsset>
  );
}

function ProcessImagePanel({ alt, headerSrc, src }: { alt: string; headerSrc: string; src: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <img alt="" className="block h-auto max-h-[68px] object-contain object-left pointer-events-none w-full" src={headerSrc} />
      <DetailImageAsset alt={alt} className="aspect-square" src={src} />
    </div>
  );
}

function SolutionImageCard({ alt, index, src, title }: { alt: string; index: string; src: string; title: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <div className="content-stretch flex gap-[12px] items-center lowercase">
        <div className="bg-[#f5f5f5] rounded-full size-[28px] flex items-center justify-center">
          <p className="font-['Outfit:Regular',sans-serif] text-[13px] text-[#6e6f73]">{index}</p>
        </div>
        <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-black">{title}</p>
      </div>
      <DetailImageAsset alt={alt} className="aspect-square" src={src} />
    </div>
  );
}

function ProcessPanel({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <div className="content-stretch flex gap-[10px] items-center lowercase">
        <MiniIcon>
          <span className="font-['Outfit:Regular',sans-serif] text-[12px] text-black">⌕</span>
        </MiniIcon>
        <p className="font-['Outfit:Regular',sans-serif] font-normal text-[14px] text-black">{title}</p>
      </div>
      <HoverAsset className="bg-[#f7f7f7] h-[310px] rounded-[2px] w-full">{children}</HoverAsset>
    </div>
  );
}

function ProcessAudit() {
  return (
    <ProcessPanel title="transaction page design audit">
      <div className="-translate-x-1/2 absolute bottom-[-96px] left-1/2 h-[390px]">
        <DetailPhoneMockup className="h-full" />
      </div>
    </ProcessPanel>
  );
}

function StickyNotes() {
  const notes = [
    "Transaction experience at Bibit?",
    "What do you usually do after completing a transaction?",
    "What information should be on the transaction page?",
    "Priority information for the transaction page",
  ];

  return (
    <ProcessPanel title="in-depth interview with user">
      <div className="absolute content-stretch grid grid-cols-2 gap-[12px] inset-[42px_42px]">
        {notes.map((note) => (
          <div className="bg-[#d9f1e8] flex items-start p-[18px] relative rounded-[2px] shadow-[0_8px_14px_rgba(0,0,0,0.08)]" key={note}>
            <p className="font-['Outfit:Regular',sans-serif] leading-[18px] lowercase text-[#34413d] text-[13px]">{note}</p>
          </div>
        ))}
      </div>
    </ProcessPanel>
  );
}

function ChatInsights() {
  return (
    <ProcessPanel title="gathering insight from cs">
      <div className="absolute inset-[44px_54px]">
        {[
          ["SBN nya tidak jelas", "25 Jan", "Beli Reksadana tidak muncul setelah transaksi selesai."],
          ["bad", "Mon", "tolong untuk pencairan dana diberikan kejelasan dan estimasi waktu."],
          ["Dana tidak ada masuk", "21 Nov", "Halo admin, saya mau nanya kenapa tanggal 30/10/2021 keterangan di transaksi gagal tapi saldo masih terpotong."],
        ].map((chat, index) => (
          <div
            className={`absolute bg-[#202020] p-[12px] rounded-[4px] shadow-[0_10px_22px_rgba(0,0,0,0.18)] w-[205px] ${index === 0 ? "left-0 top-0" : index === 1 ? "left-[55px] top-[58px]" : "left-[112px] top-[140px]"}`}
            key={chat[0]}
          >
            <div className="content-stretch flex items-start justify-between">
              <p className="font-['Outfit:Regular',sans-serif] text-[#f2c94c] text-[12px]">{chat[0]}</p>
              <p className="font-['Outfit:Regular',sans-serif] text-[#888] text-[10px]">{chat[1]}</p>
            </div>
            <p className="font-['Outfit:Regular',sans-serif] leading-[15px] mt-[6px] text-[#d9d9d9] text-[11px]">{chat[2]}</p>
          </div>
        ))}
      </div>
    </ProcessPanel>
  );
}

function TrackerChart() {
  return (
    <ProcessPanel title="gathering data from tracker">
      <div className="absolute bg-white inset-[42px_44px] p-[20px]">
        <p className="font-['Outfit:Regular',sans-serif] mb-[18px] text-[12px] text-black">Funnel From Transaction</p>
        <div className="content-stretch flex gap-[18px] h-[110px] items-end">
          {[150, 96, 12].map((height, index) => (
            <div className="flex-1 relative" key={height}>
              <div className="bg-[#4d98a0] w-full" style={{ height }} />
              <p className="font-['Outfit:Regular',sans-serif] mt-[6px] text-[#777] text-[9px] text-center">{["start", "payment", "settled"][index]}</p>
            </div>
          ))}
        </div>
        <div className="content-stretch flex gap-[18px] h-[90px] items-end mt-[26px]">
          {[90, 74, 48].map((height, index) => (
            <div className="flex-1 relative" key={height}>
              <div className="bg-[#34495a] w-full" style={{ height }} />
              <p className="font-['Outfit:Regular',sans-serif] mt-[6px] text-[#777] text-[9px] text-center">{["input", "review", "done"][index]}</p>
            </div>
          ))}
        </div>
      </div>
    </ProcessPanel>
  );
}

function ProcessSection() {
  return (
    <div className="bg-white p-[16px] relative rounded-[4px] shrink-0 w-full sm:p-[20px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <SectionTitle title="process" subtitle="to find the true problems felt by users" />
        <div className="grid grid-cols-1 gap-[20px] relative w-full sm:grid-cols-2">
          <ProcessImagePanel alt="transaction page design audit visual" headerSrc={imgProcessAuditHeader} src={imgProcessAudit} />
          <ProcessImagePanel alt="in-depth interview with user visual" headerSrc={imgProcessInterviewHeader} src={imgProcessInterview} />
          <ProcessImagePanel alt="gathering insight from customer service visual" headerSrc={imgProcessInsightHeader} src={imgProcessInsight} />
          <ProcessImagePanel alt="gathering data from tracker visual" headerSrc={imgProcessTrackerHeader} src={imgProcessTracker} />
        </div>
      </div>
    </div>
  );
}

function FlowIcon({ label }: { label: string }) {
  const iconPath = {
    search: "M10.5 18a7.5 7.5 0 1 1 5.303-12.803A7.5 7.5 0 0 1 10.5 18Zm5.2-2.3 4.3 4.3",
    edit: "m6 16.5-.5 3.5 3.5-.5L18 10.5 15.5 8 6 16.5Zm10.5-9L18 6a2.12 2.12 0 0 0-3-3l-1.5 1.5",
    payment: "M4 7h16v10H4V7Zm3 4h3m7 0h.01M16 16l4 4m0-4-4 4",
    close: "M6 6l12 12M18 6 6 18",
  }[label];

  return (
    <div className="bg-white content-stretch flex items-center justify-center rounded-full size-[52px]">
      <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
        <path d={iconPath} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ProblemFlowStep({ icon, title, isMuted = false }: { icon: string; title: string; isMuted?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[18px] items-center lowercase ${isMuted ? "text-[#6e6f73]" : "text-black"}`}>
      <FlowIcon label={icon} />
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] text-[20px] whitespace-nowrap">{title}</p>
    </div>
  );
}

function FlowArrow({ dashed = false }: { dashed?: boolean }) {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-center w-[96px]">
      <div className={`relative w-full ${dashed ? "border-[#e0e0e0] border-dashed border-t-2 h-0" : "bg-[#e0e0e0] h-[2px]"}`}>
        {!dashed && <div className="absolute border-[#e0e0e0] border-r-2 border-t-2 h-[18px] right-0 top-1/2 translate-x-[-1px] translate-y-[-50%] rotate-45 w-[18px]" />}
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="bg-white p-[16px] relative rounded-[4px] shrink-0 w-full sm:p-[20px]">
      <div className="content-stretch flex flex-col gap-[28px] items-start relative w-full">
        <SectionTitle title="problem" subtitle="59% of users drop off during payment on the transaction page" />
        <DetailImageAsset alt="transaction drop-off flow panel" className="aspect-square lg:hidden" src={imgProblemFlowMobile} />
        <DetailImageAsset alt="transaction drop-off flow panel" className="hidden aspect-[2940/1400] lg:block" src={imgProblemFlowCrop} />
      </div>
    </div>
  );
}

function SolutionVisual({ variant }: { variant: 1 | 2 | 3 | 4 }) {
  return (
    <HoverAsset className="bg-[#f7f7f7] h-[310px] rounded-[2px] w-full">
      <div className="-translate-x-1/2 absolute bottom-[-88px] left-1/2 h-[390px] opacity-70">
        <DetailPhoneMockup className="h-full" />
      </div>
      {variant === 1 && (
        <div className="-translate-x-1/2 absolute bg-[#00ab6b] h-[28px] left-1/2 rounded-[4px] top-[132px] w-[130px]">
          <p className="font-['Outfit:Regular',sans-serif] leading-[28px] text-[12px] text-center text-white">Upload</p>
        </div>
      )}
      {variant === 2 && (
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 top-[78px]">
          <div className="bg-white px-[12px] py-[7px] rounded-[4px] shadow-[0_8px_18px_rgba(0,0,0,0.08)] text-[#6e6f73] text-[12px]">Beli Reksa Dana</div>
          <div className="bg-white px-[12px] py-[7px] rounded-[4px] shadow-[0_8px_18px_rgba(0,0,0,0.08)] text-[#6e6f73] text-[12px]">23:56:05</div>
        </div>
      )}
      {variant === 3 && (
        <div className="-translate-x-1/2 absolute bg-white left-1/2 p-[16px] rounded-[4px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] top-[116px] w-[260px]">
          <p className="font-['Outfit:Regular',sans-serif] text-[12px] text-black">Naikin Ontu Haji</p>
          <p className="font-['Outfit:Regular',sans-serif] mt-[4px] text-[#6e6f73] text-[11px]">Sucorinvest Money Market Fund</p>
          <div className="bg-white border border-[#e7e7e7] h-[38px] mt-[10px] rounded-[3px]" />
        </div>
      )}
      {variant === 4 && (
        <div className="-translate-x-1/2 absolute bg-white left-1/2 p-[16px] rounded-[4px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] top-[74px] w-[300px]">
          <div className="content-stretch flex gap-[8px] items-center">
            <div className="bg-[#eaf8f3] px-[10px] py-[6px] rounded-[3px] text-[#00ab6b] text-[11px]">Beli Reksa Dana</div>
            <div className="bg-[#edf4f9] px-[10px] py-[6px] rounded-[3px] text-[#6e6f73] text-[11px]">23:56:05</div>
          </div>
          <p className="font-['Outfit:Regular',sans-serif] mt-[14px] text-[12px] text-black">Naikin Ontu Haji</p>
          <div className="bg-white border border-[#e7e7e7] h-[44px] mt-[10px] rounded-[3px]" />
          <div className="bg-[#00ab6b] h-[28px] ml-auto mt-[10px] rounded-[4px] w-[110px]" />
        </div>
      )}
    </HoverAsset>
  );
}

function SolutionCard({ index, title, variant }: { index: string; title: string; variant: 1 | 2 | 3 | 4 }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <div className="content-stretch flex gap-[12px] items-center lowercase">
        <div className="bg-[#f5f5f5] rounded-full size-[28px] flex items-center justify-center">
          <p className="font-['Outfit:Regular',sans-serif] text-[13px] text-[#6e6f73]">{index}</p>
        </div>
        <p className="font-['Outfit:Regular',sans-serif] text-[14px] text-black">{title}</p>
      </div>
      <SolutionVisual variant={variant} />
    </div>
  );
}

function SolutionsSection() {
  return (
    <div className="bg-white p-[16px] relative rounded-[4px] shrink-0 w-full sm:p-[20px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <SectionTitle title="solutions" subtitle="key interface decisions" />
        <div className="grid grid-cols-1 gap-x-[20px] gap-y-[28px] relative w-full sm:grid-cols-2">
          <SolutionImageCard alt="prominent cta interface decision visual" index="01" src={imgSolutionCta} title="prominent cta to stimulate user" />
          <SolutionImageCard alt="identifier interface decision visual" index="02" src={imgSolutionIdentifier} title="add identifier to adjust new products" />
          <SolutionImageCard alt="improve not change interface decision visual" index="03" src={imgSolutionImprove} title="improve not change" />
          <SolutionImageCard alt="new design system adjustment visual" index="04" src={imgSolutionAdjustment} title="adjustment new ds" />
        </div>
      </div>
    </div>
  );
}

function ImpactMetric({ icon, title }: { icon: "bag" | "user"; title: string }) {
  return (
    <HoverAsset className="bg-[#f7f7f7] h-[360px] rounded-[4px] w-full">
      <div className="absolute content-stretch flex flex-col gap-[26px] inset-0 items-center justify-center">
        <div className="bg-white content-stretch flex items-center justify-center rounded-full size-[52px]">
          {icon === "bag" ? (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M8 8V6a4 4 0 0 1 8 0v2M5 8h14l-1 12H6L5 8Zm6 7 2 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 11.5-5.34M19 16v6m-3-3h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          )}
        </div>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase text-[20px] text-black text-center">{title}</p>
      </div>
    </HoverAsset>
  );
}

function ImpactSection() {
  return (
    <div className="bg-white p-[16px] relative rounded-[4px] shrink-0 w-full sm:p-[20px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <SectionTitle title="impact" subtitle="improving conversion to directly impact business" />
        <div className="grid grid-cols-1 gap-[20px] relative w-full sm:grid-cols-2">
          <DetailImageAsset alt="increase transaction done rate impact panel" className="aspect-[1435/1420]" src={imgImpactRate} />
          <DetailImageAsset alt="boosted revenue streams impact panel" className="aspect-[1435/1420]" src={imgImpactRevenue} />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex-[1_0_0] min-w-px relative overflow-y-auto overflow-x-hidden h-full" data-name="navbar">
      <div className="content-stretch flex flex-col gap-[12px] items-start py-[12px] relative rounded-[inherit] w-full sm:gap-[20px] sm:py-[20px]">
        <CoverSection />
        <ProcessSection />
        <ProblemSection />
        <SolutionsSection />
        <ImpactSection />
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-dashed border-l-2 border-r-2 inset-[0_-1px] pointer-events-none max-lg:hidden" />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-1 min-h-0 items-start relative shrink-0 w-full lg:h-full lg:w-[775px]">
      <Navbar />
    </div>
  );
}

function MobileTopBar({ onBack }: PersonalWebsiteDetailProps) {
  return (
    <div className="bg-[#fafafa]/95 border-[#e0e0e0] border-b border-dashed flex items-center justify-between px-[16px] py-[14px] sticky top-0 z-20 lg:hidden">
      <Sheet onBack={onBack} />
      <p className="font-['Outfit:Regular',sans-serif] font-normal lowercase text-[#6e6f73] text-[13px] whitespace-nowrap">3 min read</p>
    </div>
  );
}

export default function PersonalWebsiteDetail({ onBack }: PersonalWebsiteDetailProps) {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-0 items-stretch justify-start px-[12px] relative size-full sm:px-[20px] lg:flex-row lg:gap-[20px] lg:items-start lg:justify-center lg:px-[200px]" data-name="personal website detail">
      <MobileTopBar onBack={onBack} />
      <Frame3 onBack={onBack} />
      <Frame22 />
    </div>
  );
}
