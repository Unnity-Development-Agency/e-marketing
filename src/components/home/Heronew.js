const OPTIONS = [
  { bold: "Find the Leaks.", rest: "Recover Your Growth Potential." },
  { bold: "Scale Your Ads", rest: "Without Sacrificing Returns." },
  { bold: "Scale Spending", rest: "Without Losing Performance." },
  { bold: "Turn Great Products", rest: "Into Winning Campaigns." },
  { bold: "Build a Growth Engine", rest: "That Scales." },
];

export default function AdsHero() {
  return (
  <section
  className="min-h-screen px-4 pb-16 pt-24 text-center font-outfit text-[#0B1240] sm:pb-24 sm:pt-32
    bg-[#F7F8FD]
    bg-[radial-gradient(900px_420px_at_50%_0,#E9EDFF_0,transparent_70%),linear-gradient(#E3E7F5_1px,transparent_1px),linear-gradient(90deg,#E3E7F5_1px,transparent_1px)]
    bg-[length:100%_100%,48px_48px,48px_48px]"
>
      <div className="mx-auto max-w-[1100px]">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E3E7F5] bg-white px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[1px] text-[#3355FF]">
          <span className="h-2 w-2 rounded-full bg-[#3355FF] shadow-[0_0_0_3px_#EEF1FF]" />
          For brands spending ₹10L+ a month on ads
        </span>

        <h1 className="mb-[30px] mt-[22px] text-[clamp(36px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-1.5px]">
          We Help Ambitious Brands{" "}
          <span className="relative whitespace-nowrap text-[#3355FF] after:absolute after:inset-x-[2%] after:-bottom-2 after:h-1.5 after:-rotate-1 after:rounded-md after:bg-[#3355FF] after:content-['']">
            Break Through.
          </span>
        </h1>

        <p className="mx-auto max-w-[560px] text-base leading-[1.6] text-[#5B6280] sm:text-lg">
          Tell us where, and we&apos;ll show you what&apos;s usually behind it and how we fix it.
        </p>

        <p className="mb-5 mt-11 flex items-center justify-center gap-3.5 text-[13px] font-semibold uppercase tracking-[1.5px] text-[#5B6280] before:h-px before:w-11 before:bg-[#E3E7F5] before:content-[''] after:h-px after:w-11 after:bg-[#E3E7F5] after:content-['']">
          Which one sounds like you?
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          {OPTIONS.map((o, i) => (
            <div
              key={o.bold}
              className="flex w-full items-center gap-4 rounded-[18px] border border-[#E3E7F5] bg-white px-[18px] py-4 text-left shadow-[0_6px_20px_rgba(11,18,64,0.05)] sm:min-w-[260px] sm:w-auto sm:flex-[0_1_calc(33.333%-10px)]"
            >
              <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[9px] bg-[#EEF1FF] font-jetbrains text-xs font-medium text-[#3355FF]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base leading-[1.4]">
                <b className="font-semibold">{o.bold}</b> {o.rest}
              </span>
              <span className="h-5 w-5 flex-none rounded-full border-[1.5px] border-[#C9CFE6]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}