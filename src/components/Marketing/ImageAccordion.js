"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Understanding Your Real Need",
    description:
      "Before launching anything, we analyze whether your brand needs lead volume or lead quality. This clarity ensures your campaigns attract the right audience instead of wasting budget.",
    image: "/images/Lead-2.png",
  },
  {
    id: 2,
    title: "Smart Form Strategy",
    description:
      "Based on your requirement, we design conversion forms:\n• Short forms for scale and faster conversions\n• Long forms for high-intent, filtered leads\nThis improves efficiency and ensures better qualification.",
    image: "/images/Lead-1.png",
  },
  {
    id: 3,
    title: "Lead Generation Goes Beyond Ads",
    description:
      "Running campaigns is just a fraction of lead generation. The biggest difference lies in how fast you follow up. A strong follow-up process drives more conversions than ad spend.",
    image: "/images/Lead-3.png",
  },
];

const itemsTwo = [
  {
    id: 1,
    title: "Lead Tracking and Categorization",
    description:
      "We help brands maintain a structured lead sheet where every lead is tagged as: Cold, Warm, Hot, Did Not Pick, Call Back, or Follow-Up Required. This organization improves clarity and sales efficiency.",
    image: "/images/Lead-5.png",
  },
  {
    id: 2,
    title: "Aggressive Lead Follow-Up Support",
    description:
      "We push teams to respond faster because shorter response times result in higher conversion rates. Quicker replies make ad budgets more effective.",
    image: "/images/Lead-6.png",
  },
  {
    id: 3,
    title: "Continuous Lead Quality Monitoring",
    description:
      "We do not disappear after campaign setup. We continuously review lead quality with you, adjust targeting, improve landing forms, and refine audiences — making performance stronger week after week.",
    image: "/images/Lead-4.png",
  },
];

/* ─── Mobile Slider ─── */
const MobileBlock = ({ items, title, subtitle, eyebrow }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
  };
  const prev = () => {
    if (current > 0) goTo(current - 1, -1);
  };
  const next = () => {
    if (current < items.length - 1) goTo(current + 1, 1);
  };
  const item = items[current];

  return (
    <div className="px-4 pt-8 pb-10 relative z-10">
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#23234d] bg-[#23234d]/8 px-3 py-1.5 rounded-full mb-2.5">
          {eyebrow}
        </span>
        <h2 className="text-[1.45rem] font-black tracking-tight leading-[1.12] text-[#111] mb-1.5">
          {title}
        </h2>
        <p className="text-[12.5px] text-[#999] leading-relaxed">{subtitle}</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl mb-3.5">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d) => ({ opacity: 0, x: d > 0 ? 55 : -55 }),
              center: { opacity: 1, x: 0 },
              exit: (d) => ({ opacity: 0, x: d > 0 ? -55 : 55 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.36, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white border border-[#ede9e3] rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="relative w-full h-44 overflow-hidden">
              <motion.img
                key={`img-${current}`}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="text-[9.5px] font-bold text-white/75 tracking-widest">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10.5px] font-semibold text-[#111]">
                  Active Campaign
                </span>
              </div>
            </div>
            <div className="px-4 pt-4 pb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#23234d] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#ede9e3]" />
              </div>
              <h3 className="text-[0.975rem] font-extrabold tracking-tight leading-[1.25] text-[#111] mb-2">
                {item.title}
              </h3>
              <div className="w-6 h-0.5 bg-[#23234d] mb-3 rounded-full" />
              <p className="text-[13px] text-[#666] leading-[1.8] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-[7px] bg-[#23234d]"
                  : "w-[7px] h-[7px] bg-[#23234d]/20"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-8 h-8 rounded-full border border-[#23234d]/20 flex items-center justify-center text-[#23234d]/50 disabled:opacity-20 active:scale-95 transition-all duration-200 hover:border-[#23234d]/40 hover:text-[#23234d]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current === items.length - 1}
            className="w-8 h-8 rounded-full bg-[#23234d] flex items-center justify-center text-white disabled:opacity-25 active:scale-95 transition-all duration-200 shadow-[0_3px_10px_rgba(35,35,77,0.22)]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Desktop sticky block ─── */
const DesktopBlock = ({
  items,
  title,
  subtitle,
  eyebrow,
  reverse,
  orbDirection,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalHeight));
      const newIndex = Math.min(
        items.length - 1,
        Math.floor(progress * items.length),
      );
      if (newIndex !== activeIndex) {
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, items.length]);

  const t = items[activeIndex];

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // orbDirection: "ltr" = left→right, "rtl" = right→left
  const isLTR = orbDirection !== "rtl";

  // Main orb: moves horizontally across screen
  const orbX = useTransform(
    scrollYProgress,
    [0, 1],
    isLTR ? ["-60vw", "60vw"] : ["60vw", "-60vw"],
  );
  const orbY = useTransform(scrollYProgress, [0, 1], ["10%", "70%"]);

  // Second orb: opposite horizontal, slower
  const orb2X = useTransform(
    scrollYProgress,
    [0, 1],
    isLTR ? ["40vw", "-20vw"] : ["-40vw", "20vw"],
  );
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["60%", "20%"]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${items.length * 90}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#E2E8F0]">
        {/* ── ORB 1 — main large orb, moves L→R or R→L ── */}
        <motion.div
          style={{
            x: orbX,
            y: orbY,
            position: "absolute",
            top: 0,
            left: "50%",
            translateX: "-50%",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: isLTR
              ? "radial-gradient(circle, rgba(35,35,77,0.38) 0%, rgba(35,35,77,0.14) 45%, transparent 72%)"
              : "radial-gradient(circle, rgba(238,217,196,0.70) 0%, rgba(238,217,196,0.25) 45%, transparent 72%)",
            filter: "blur(70px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── ORB 2 — secondary, opposite direction ── */}
        <motion.div
          style={{
            x: orb2X,
            y: orb2Y,
            position: "absolute",
            top: 0,
            left: "50%",
            translateX: "-50%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: isLTR
              ? "radial-gradient(circle, rgba(114,141,239,0.32) 0%, rgba(114,141,239,0.10) 50%, transparent 75%)"
              : "radial-gradient(circle, rgba(35,35,77,0.28) 0%, rgba(35,35,77,0.08) 55%, transparent 75%)",
            filter: "blur(56px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 xl:px-10 grid grid-cols-2 gap-0">
          {/* IMAGE SIDE */}
          <div
            className={`relative flex flex-col justify-center py-10 ${reverse ? "order-2 pl-10 xl:pl-14" : "pr-10 xl:pr-14"}`}
          >
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#23234d] bg-[#23234d]/8 px-3 py-1.5 rounded-full mb-3">
                {eyebrow}
              </span>
              <h2 className="text-[clamp(1.35rem,1.8vw,2rem)] font-black tracking-[-0.025em] leading-[1.1] text-[#111]">
                {title}
              </h2>
            </div>

            <div
              className="relative rounded-xl overflow-hidden w-full"
              style={{ height: "clamp(240px, 42vh, 400px)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-2 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-[#111] tracking-wide">
                  Active Campaign
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/55 backdrop-blur-sm rounded-full px-2.5 py-1.5">
                <span className="text-[10.5px] font-bold text-white/75 tracking-widest">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <p className="text-[12.5px] text-[#999] leading-relaxed mt-3.5 max-w-xs">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 mt-4">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-7 h-[7px] bg-[#23234d]"
                      : "w-[7px] h-[7px] bg-[#23234d]/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div
            className={`relative flex items-center py-10 ${reverse ? "order-1 pr-10 xl:pr-14" : "pl-10 xl:pl-14"}`}
          >
            <div className="w-full">
              <div className="flex gap-1.5 mb-9">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className="h-px flex-1 rounded-full overflow-hidden bg-[#c8c4be]"
                  >
                    <motion.div
                      className="h-full bg-[#23234d] rounded-full"
                      animate={{ width: i <= activeIndex ? "100%" : "0%" }}
                      transition={{ duration: i === activeIndex ? 0.55 : 0.12 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
                    center: { opacity: 1, y: 0 },
                    exit: (d) => ({ opacity: 0, y: d > 0 ? -28 : 28 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-7 h-7 rounded-full bg-[#23234d] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-[#ddd9d3]" />
                  </div>

                  <h3 className="text-[clamp(1.4rem,2vw,2.15rem)] font-extrabold tracking-[-0.025em] leading-[1.12] text-[#111] mb-4">
                    {t.title}
                  </h3>
                  <div className="w-9 h-[2px] bg-[#23234d] mb-5 rounded-full opacity-70" />
                  <p className="text-[1.05rem] text-[#4a4a4a] leading-[1.88] whitespace-pre-line tracking-[-0.01em] font-normal">
                    {t.description}
                  </p>

                  {activeIndex === items.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45 }}
                      className="flex items-center gap-2 mt-9 text-[#bbb]"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                      <span className="text-[10.5px] tracking-[0.18em] uppercase font-semibold">
                        Scroll to continue
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StickyAccordionBlock = ({
  items,
  title,
  subtitle,
  eyebrow,
  reverse,
  orbDirection,
}) => (
  <>
    <div className="lg:hidden">
      <MobileBlock
        items={items}
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
      />
    </div>
    <div className="hidden lg:block">
      <DesktopBlock
        items={items}
        title={title}
        subtitle={subtitle}
        eyebrow={eyebrow}
        reverse={reverse}
        orbDirection={orbDirection}
      />
    </div>
  </>
);

const ImageAccordion = () => (
  <section className="bg-[#fafaf8]">
    {/* Section 1 — orb left → right */}
    <StickyAccordionBlock
      items={items}
      eyebrow="Our Methodology"
      title="Our Lead Generation"
      subtitle="A holistic methodology designed to deliver results at every stage."
      reverse={false}
      orbDirection="ltr"
    />
    <div className="lg:hidden max-w-7xl mx-auto px-5">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e0ddd8] to-transparent" />
    </div>
    {/* Section 2 — orb right → left */}
    <StickyAccordionBlock
      items={itemsTwo}
      eyebrow="Our Approach"
      title="Our eCommerce Approach"
      subtitle="Precision execution ensuring timely delivery and highest quality standards."
      reverse={true}
      orbDirection="rtl"
    />
  </section>
);

export default ImageAccordion;
