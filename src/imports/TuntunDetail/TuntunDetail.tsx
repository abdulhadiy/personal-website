import type { ReactNode } from "react";
import imgCover from "./detail-assets/tuntun-cover.png";
import imgImpactAcquisition from "./detail-assets/tuntun-impact-acquisition.png";
import imgImpactDownload from "./detail-assets/tuntun-impact-download.png";
import imgImpactDropoff from "./detail-assets/tuntun-impact-dropoff.png";
import imgImpactTransaction from "./detail-assets/tuntun-impact-transaction.png";
import imgOpportunityFlow from "./detail-assets/tuntun-opportunity-flow.png";
import imgOutputAi from "./detail-assets/tuntun-output-ai.png";
import imgOutputExploration from "./detail-assets/tuntun-output-exploration.png";
import imgOutputRegistration from "./detail-assets/tuntun-output-registration.png";
import imgOutputTransaction from "./detail-assets/tuntun-output-transaction.png";
import imgProcessExploration from "./detail-assets/tuntun-process-exploration.png";
import imgProcessExplorationHeader from "./detail-assets/tuntun-process-header-exploration.png";
import imgProcessPositioningHeader from "./detail-assets/tuntun-process-header-positioning.png";
import imgProcessStakeholdersHeader from "./detail-assets/tuntun-process-header-stakeholders.png";
import imgProcessSynthesisHeader from "./detail-assets/tuntun-process-header-synthesis.png";
import imgProcessPositioning from "./detail-assets/tuntun-process-positioning.png";
import imgProcessStakeholders from "./detail-assets/tuntun-process-stakeholders.png";
import imgProcessSynthesis from "./detail-assets/tuntun-process-synthesis.png";

type TuntunDetailProps = {
  onBack?: () => void;
};

function BackIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d="M3.75 9H14.25" stroke="#6E6F73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M3.75 9L8.25 13.5" stroke="#6E6F73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M3.75 9L8.25 4.5" stroke="#6E6F73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Sheet({ onBack }: TuntunDetailProps) {
  return (
    <button
      className="bg-transparent border-0 content-stretch flex gap-[8px] items-center p-0 relative shrink-0 text-left"
      data-name="sheet"
      onClick={onBack}
      type="button"
    >
      <BackIcon />
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
            <path d="M1 1V171" stroke="#E0E0E0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <p className="relative shrink-0 text-[#6e6f73]">opportunity</p>
      <p className="relative shrink-0 text-[#6e6f73]">output</p>
      <p className="relative shrink-0 text-[#6e6f73]">impact</p>
    </div>
  );
}

function Sidebar({ onBack }: TuntunDetailProps) {
  return (
    <div className="h-full shrink-0 sticky top-0 w-[245px]">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <Sheet onBack={onBack} />
          <div className="mt-[38px] relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <Frame17 />
              <Frame15 />
            </div>
          </div>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase mt-[43px] relative shrink-0 text-[#6e6f73] text-[14px] whitespace-nowrap">* 3 minutes read</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start lowercase relative w-full">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-black">{title}</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[20px] text-[#6e6f73] text-[14px]">{subtitle}</p>
    </div>
  );
}

function HoverAsset({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`group/detail-asset overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 origin-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/detail-asset:scale-[1.025] group-focus-within/detail-asset:scale-[1.025]">
        {children}
      </div>
    </div>
  );
}

function AssetImage({ alt, className = "", src }: { alt: string; className?: string; src: string }) {
  return (
    <HoverAsset className={`bg-[#f7f7f7] rounded-[4px] w-full ${className}`}>
      <img
        alt={alt}
        className="absolute inset-0 object-cover object-center pointer-events-none size-full"
        src={src}
      />
    </HoverAsset>
  );
}

function CoverSection() {
  return (
    <div className="bg-white overflow-hidden relative rounded-[4px] shrink-0 w-full">
      <div className="aspect-[3100/2040] bg-white overflow-hidden relative w-full">
        <img alt="tuntun onboarding cover visual" className="absolute inset-0 object-cover object-center pointer-events-none size-full" src={imgCover} />
      </div>
      <div className="content-stretch flex gap-[70px] items-center p-[28px] relative w-full">
        <div className="basis-[210px] grow-0 shrink-0">
          <p className="font-['Outfit:Regular',sans-serif] font-semibold leading-[26px] text-[#6e6f73] text-[28px]">Tuntun</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[18px] text-[#6e6f73] text-[18px]">Sekuritas Indonesia</p>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start min-w-0">
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] lowercase text-[16px] text-black">good spirit from the east</p>
          <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[28px] lowercase text-[#6e6f73] text-[22px]">
            launched a guided investment experience for novice users by simplifying the complex investment journey
          </p>
        </div>
      </div>
    </div>
  );
}

function ProcessAssetHeader({ alt, src }: { alt: string; src: string }) {
  return (
    <img alt={alt} className="block h-auto object-contain object-left pointer-events-none w-full" src={src} />
  );
}

function ProcessAsset({ alt, headerAlt, headerSrc, src }: { alt: string; headerAlt: string; headerSrc: string; src: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <ProcessAssetHeader alt={headerAlt} src={headerSrc} />
      <AssetImage alt={alt} className="aspect-square" src={src} />
    </div>
  );
}

function ProcessSection() {
  return (
    <div className="bg-white p-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <SectionTitle title="process" subtitle="to find the true problems felt by users" />
        <div className="grid grid-cols-2 gap-[20px] relative w-full">
          <ProcessAsset alt="stakeholder insight comparison" headerAlt="gathering insight from stakeholders" headerSrc={imgProcessStakeholdersHeader} src={imgProcessStakeholders} />
          <ProcessAsset alt="market positioning map" headerAlt="product positioning in market" headerSrc={imgProcessPositioningHeader} src={imgProcessPositioning} />
          <ProcessAsset alt="synthesis findings sticky notes" headerAlt="syntesis all findings" headerSrc={imgProcessSynthesisHeader} src={imgProcessSynthesis} />
          <ProcessAsset alt="exploration and iteration file view" headerAlt="exploration and iteration" headerSrc={imgProcessExplorationHeader} src={imgProcessExploration} />
        </div>
      </div>
    </div>
  );
}

function OpportunitySection() {
  return (
    <div className="bg-white p-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[28px] items-start relative w-full">
        <SectionTitle title="opportunity" subtitle="what if the journey could begin here?" />
        <AssetImage alt="tuntun opportunity journey flow" className="aspect-[2945/1400]" src={imgOpportunityFlow} />
      </div>
    </div>
  );
}

function NumberedAsset({ alt, index, src, title }: { alt: string; index: string; src: string; title: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative w-full">
      <div className="content-stretch flex gap-[12px] items-center lowercase">
        <div className="bg-[#f7f7f7] content-stretch flex items-center justify-center rounded-full size-[32px]">
          <p className="font-['Outfit:Regular',sans-serif] font-normal text-[14px] text-black">{index}</p>
        </div>
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] text-[14px] text-black">{title}</p>
      </div>
      <AssetImage alt={alt} className="aspect-square" src={src} />
    </div>
  );
}

function OutputSection() {
  return (
    <div className="bg-white p-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
        <SectionTitle title="output" subtitle="idea to solve user problem" />
        <div className="grid grid-cols-2 gap-[20px] relative w-full">
          <NumberedAsset alt="seamless registration KTP capture" index="01" src={imgOutputRegistration} title="seamless registration for user acquisition" />
          <NumberedAsset alt="tuntun AI guidance screen" index="02" src={imgOutputAi} title="ai guidance for help user learn" />
          <NumberedAsset alt="market exploration screen" index="03" src={imgOutputExploration} title="engaging exploration to find opportunities" />
          <NumberedAsset alt="order transaction screen" index="04" src={imgOutputTransaction} title="seamless transaction to place order" />
        </div>
      </div>
    </div>
  );
}

function ImpactSection() {
  return (
    <div className="bg-white p-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[28px] items-start relative w-full">
        <SectionTitle title="impact" subtitle="successful conversion of 126,606 users after release" />
        <div className="grid grid-cols-2 gap-[20px] relative w-full">
          <AssetImage alt="app store and play store download metric" className="aspect-square" src={imgImpactDownload} />
          <AssetImage alt="account opening drop-off metric" className="aspect-square" src={imgImpactDropoff} />
          <AssetImage alt="converted transaction metric" className="aspect-square" src={imgImpactTransaction} />
          <AssetImage alt="user acquisition metric" className="aspect-square" src={imgImpactAcquisition} />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex-[1_0_0] min-w-px relative overflow-y-auto overflow-x-hidden h-full" data-name="navbar">
      <div className="content-stretch flex flex-col gap-[20px] items-start py-[20px] relative rounded-[inherit] w-full">
        <CoverSection />
        <ProcessSection />
        <OpportunitySection />
        <OutputSection />
        <ImpactSection />
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-dashed border-l-2 border-r-2 inset-[0_-1px] pointer-events-none" />
      </div>
    </div>
  );
}

export default function TuntunDetail({ onBack }: TuntunDetailProps) {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[20px] items-start justify-center px-[200px] relative size-full" data-name="personal website detail">
      <Sidebar onBack={onBack} />
      <div className="content-stretch flex h-full items-start relative shrink-0 w-[775px]">
        <Navbar />
      </div>
    </div>
  );
}
