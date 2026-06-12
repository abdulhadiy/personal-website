export default function Cta() {
  return (
    <button className="bg-black cursor-pointer relative rounded-[2px] size-full" data-name="cta">
      <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
        <div className="bg-[#ff6700] content-stretch flex items-start justify-center px-[20px] py-[4px] relative rounded-[4px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.2)] shrink-0">
          <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] lowercase relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" role="link" tabIndex={0}>
            <p className="cursor-pointer leading-[32px]">connect</p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-4px_-4px_2px_0px_rgba(255,255,255,0.1),inset_4px_4px_2px_0px_rgba(255,255,255,0.2)]" />
        </div>
      </div>
    </button>
  );
}