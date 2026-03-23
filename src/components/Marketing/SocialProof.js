"use client";
import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    text: "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that's in it to win.",
    author: "Rishab B.",
    role: "Founder of BabLouie",
    image: "/avatar_ceo_1764326367308.png",
  },
  {
    text: "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it's user-friendly, aesthetically pleasing, and professionally built.",
    author: "Tarun J.",
    role: "Founder of Tashe and Sain Milks",
    image: null,
  },
  {
    text: "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes.",
    author: "Vandita",
    role: "Founder, Iyurved",
    image: null,
  },
  {
    text: "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. The personal touch and strong understanding of our brand make a real difference.",
    author: "Tanya",
    role: "Cupid Clothings",
    image: null,
  },
  {
    text: "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. It's been a game-changer for our business!",
    author: "Alex Johnson",
    role: "Sales Director",
    image: null,
  },
];

const logos = [
  "/empire1.png",
  "/aqua1.png",
  "/comforto.png",
  "/da1.png",
  "/adpl2.png",
  "/edoofa.png",
  "/hardoll.png",
  "/hub1.png",
  "/nira.png",
  "/orchid-blue.png",
  "/poco.png",
  "/sain.png",
  "/sky.png",
  "/aurave1.png",
  "/uk.png",
  "/cupid1.png",
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

/* ── Marquee row ── */
const MarqueeRow = ({ reverse }) => (
  <div
    className="w-full overflow-hidden"
    style={{
      maskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}
  >
    <div
      className="flex items-center gap-16 w-max"
      style={{
        animation: `${reverse ? "marqueeRTL" : "marqueeLTR"} 45s linear infinite`,
      }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <Image
          key={i}
          src={logo}
          width={0}
          height={0}
          alt=""
          unoptimized
          className="h-10 w-auto object-contain opacity-70 hover:opacity-90 grayscale-50 hover:grayscale-0 transition-all duration-300"
        />
      ))}
    </div>
    <style jsx>{`
      @keyframes marqueeLTR {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0%);
        }
      }
      @keyframes marqueeRTL {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </div>
);

const SocialProof = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const changeReview = (dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveReview((prev) =>
        dir === "next"
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length,
      );
      setIsAnimating(false);
    }, 320);
  };

  const goTo = (i) => {
    if (isAnimating || i === activeReview) return;
    setDirection(i > activeReview ? "next" : "prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveReview(i);
      setIsAnimating(false);
    }, 320);
  };

  const r = reviews[activeReview];

  return (
    <section className="pb-32 bg-[var(--background,#fff)] overflow-hidden">
      {/* ══ LOGO BELT ══ */}
      <div className="max-w-[1200px] mx-auto px-10 pt-24 pb-20 text-center max-md:px-6 max-sm:px-4 max-sm:pt-14 max-sm:pb-12">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#23234d] bg-[#23234d]/7 px-[14px] py-1.5 rounded-full mb-5">
          Trusted by Leading Brands
        </span>
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#111] tracking-[-0.03em] leading-[1.1] mb-14 max-sm:mb-9">
          Brands that chose us
        </h2>
        <div className="flex flex-col gap-0">
          <MarqueeRow reverse={false} />
        </div>
      </div>

      {/* ══ TESTIMONIALS ══ */}
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-6 max-sm:px-4">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 max-sm:mb-8">
          <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#23234d] bg-[#23234d]/7 px-[14px] py-1.5 rounded-full">
            What clients say
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#23234d]/15 to-transparent" />
        </div>

        <div className="grid grid-cols-[300px_1fr] gap-16 items-start max-[860px]:grid-cols-1 max-[860px]:gap-10 max-[1024px]:grid-cols-[260px_1fr] max-[1024px]:gap-10">
          {/* ── LEFT: controls ── */}
          <div className="sticky top-20 flex flex-col max-[860px]:static">
            <h3 className="text-[clamp(2rem,3vw,2.8rem)] font-extrabold text-[#111] tracking-[-0.03em] leading-[1.1] mb-4">
              Success
              <br />
              Stories
            </h3>
            <p className="text-[15px] text-[#666] leading-[1.65] mb-8 max-w-[270px] max-[860px]:max-w-full">
              See what our partners have to say about working with us.
            </p>

            {/* Review counter */}
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-[2.8rem] font-black text-[#23234d] leading-none tabular-nums">
                {String(activeReview + 1).padStart(2, "0")}
              </span>
              <span className="text-[#bbb] text-lg font-medium">/</span>
              <span className="text-[#bbb] text-base font-medium">
                {String(reviews.length).padStart(2, "0")}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-0.5 bg-[#e8e8e8] rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-[#23234d] rounded-full transition-all duration-500"
                style={{
                  width: `${((activeReview + 1) / reviews.length) * 100}%`,
                }}
              />
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3 mb-7">
              <button
                onClick={() => changeReview("prev")}
                className="w-12 h-12 rounded-full border-[1.5px] border-[#23234d] bg-[#23234d] text-white flex items-center justify-center hover:bg-white hover:text-[#23234d] transition-all duration-250 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(35,35,77,0.18)] cursor-pointer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => changeReview("next")}
                className="w-12 h-12 rounded-full border-[1.5px] border-[#23234d] bg-[#23234d] text-white flex items-center justify-center hover:bg-white hover:text-[#23234d] transition-all duration-250 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(35,35,77,0.18)] cursor-pointer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                    i === activeReview
                      ? "w-6 bg-[#23234d]"
                      : "w-2 bg-[#ddd] hover:bg-[#bbb]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: review card ── */}
          <div className="relative min-h-[440px] max-[860px]:min-h-0">
            <div
              className={`rounded-xl p-14 relative overflow-hidden transition-all duration-[320ms]
                max-[1024px]:p-11 max-[860px]:p-10 max-sm:p-8 max-[360px]:p-7
                ${
                  isAnimating
                    ? direction === "next"
                      ? "opacity-0 -translate-x-6 scale-[0.98]"
                      : "opacity-0 translate-x-6 scale-[0.98]"
                    : "opacity-100 translate-x-0 scale-100"
                }`}
              style={{
                background: "#eed9c4",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), 0 32px 64px rgba(0,0,0,0.04)",
              }}
            >
              {/* Radial highlight */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[inherit]"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.38) 0%, transparent 60%)",
                }}
              />

              {/* Quote mark */}
              <span
                className="absolute top-7 right-11 text-[120px] leading-none select-none pointer-events-none font-serif max-sm:text-[64px] max-sm:top-3 max-sm:right-5"
                style={{
                  color: "rgba(35,35,77,0.10)",
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-[18px] text-[#1a1a2e] leading-[1.75] font-[450] mb-9 relative z-[1] max-sm:text-[15px] max-[360px]:text-[14.5px]"
                style={{ fontWeight: 450 }}
              >
                {r.text}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-7"
                style={{ background: "rgba(35,35,77,0.15)" }}
              />

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#23234d] overflow-hidden flex items-center justify-center shrink-0 text-[#eed9c4] text-[14px] font-bold tracking-[0.04em] shadow-[0_2px_8px_rgba(35,35,77,0.22)] max-sm:w-10 max-sm:h-10 max-sm:text-[12px]">
                  {r.image ? (
                    <img
                      src={r.image}
                      alt={r.author}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{initials(r.author)}</span>
                  )}
                </div>

                {/* Name + role */}
                <div className="flex-1">
                  <div className="text-[15px] font-bold text-[#111] leading-tight tracking-[-0.01em] mb-0.5">
                    {r.author}
                  </div>
                  <div className="text-[13px] text-[#666] tracking-[0.01em]">
                    {r.role}
                  </div>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 bg-[#23234d]/8 px-3 py-1.5 rounded-full max-sm:hidden">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#23234d"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] font-semibold text-[#23234d] tracking-[0.06em]">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
