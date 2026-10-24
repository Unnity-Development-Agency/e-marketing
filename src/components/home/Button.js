export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  dark = false,
  showArrow = true,
  className = "",
  disabled = false,
  ...props
}) {
  const baseClasses = [
    "group relative inline-flex items-center justify-center",
    "gap-2.5 overflow-hidden rounded-full",
    "border px-6 py-3.5",
    "text-sm font-semibold leading-6 sm:text-base",
    "transition-all duration-300",
    "motion-safe:hover:-translate-y-0.5",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    "focus-visible:outline-[#6D63F2]",
    "motion-reduce:transition-none",
  ].join(" ");

  const variants = {
    primary: dark
      ? [
          "border-transparent bg-[#6D63F2] text-white",
          "shadow-[0_10px_30px_-10px_rgba(109,99,242,0.45)]",
          "hover:bg-[#5D53E2]",
          "hover:shadow-[0_16px_36px_-10px_rgba(109,99,242,0.6)]",
        ].join(" ")
      : [
          "border-transparent bg-[#0f032b] text-white",
          "shadow-[0_10px_30px_-10px_rgba(55,48,163,0.45)]",
          "hover:bg-[#2E288C]",
          "hover:shadow-[0_16px_36px_-10px_rgba(55,48,163,0.6)]",
        ].join(" "),

    secondary: dark
      ? [
          "border-white/20 bg-transparent text-white",
          "hover:border-[#B4AEFF] hover:bg-white/5",
        ].join(" ")
      : [
          "border-[#1B1855]/20 bg-white text-[#14123A]",
          "hover:border-[#6D63F2] hover:bg-[#F6F5FC]",
        ].join(" "),
  };

  const classes = [
    baseClasses,
    variants[variant] || variants.primary,
    disabled
      ? "pointer-events-none cursor-not-allowed opacity-50"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={[
            "h-[18px] w-[18px] shrink-0",
            "transition-transform duration-300",
            "motion-safe:group-hover:translate-x-1",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (href) {
    if (disabled) {
      return (
        <span
          role="link"
          aria-disabled="true"
          className={classes}
        >
          {content}
        </span>
      );
    }

    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}