export default function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
  centered = false,
  dark = false,
}) {
  return (
    <div
      className={[
        "w-full max-w-[720px]",
        centered ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <span
          className={[
            "inline-flex items-center gap-2 rounded-full",
            "border px-3.5 py-1.5",
            "text-[11px] font-semibold uppercase",
            "tracking-[0.14em] sm:text-xs",
            dark
              ? "border-white/20 bg-white/5 text-[#B4AEFF]"
              : "border-[#1B1855]/15 bg-[#0f032b]/5 text-[#6D63F2]",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className={[
              "h-1.5 w-1.5 shrink-0 rounded-full",
              dark ? "bg-[#B4AEFF]" : "bg-[#0f032b]",
            ].join(" ")}
          />

          {eyebrow}
        </span>
      )}

      <h2
        className={[
          "mt-[18px] text-[32px] font-bold",
          "leading-[1.1] tracking-[-0.02em]",
          "sm:text-[40px] lg:text-[54px]",
          dark ? "text-white" : "text-[#14123A]",
        ].join(" ")}
      >
        {title}

        {highlightedText && (
          <>
            {" "}
            <span
              className={[
                "bg-gradient-to-r bg-clip-text text-transparent",
                dark
                  ? "from-white to-[#B4AEFF]"
                  : "from-[#0f032b] to-[#6D63F2]",
              ].join(" ")}
            >
              {highlightedText}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={[
            "mt-4 text-base leading-7 sm:text-lg",
            dark ? "text-[#ADA9D6]" : "text-[#5F5C80]",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}