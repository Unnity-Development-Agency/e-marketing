"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

/* ── Mobile: simple stacked cards ── */
const MobileBlock = ({ items, title, subtitle, eyebrow }) => {
  return (
    <div className="px-5 py-12">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#23234d] bg-[#23234d]/8 px-3 py-1.5 rounded-full mb-3">
          {eyebrow}
        </span>
        <h2 className="text-[1.7rem] font-black tracking-tight leading-[1.1] text-[#111] mb-2">
          {title}
        </h2>
        <p className="text-sm text-[#888] leading-relaxed">{subtitle}</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#ede9e3] shadow-sm"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-[#111]">
                  Active Campaign
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 rounded-full px-2.5 py-1">
                <span className="text-[10px] font-bold text-white/80 tracking-wider">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#23234d] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#e8e4de]" />
              </div>
              <h3 className="text-[1.1rem] font-extrabold tracking-tight leading-[1.2] text-[#111] mb-3">
                {item.title}
              </h3>
              <div className="w-8 h-0.5 bg-[#23234d] mb-4 rounded-full" />
              <p className="text-[14px] text-[#555] leading-[1.85] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Desktop: sticky scroll block ── */
const DesktopBlock = ({ items, title, subtitle, eyebrow, reverse }) => {
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

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${items.length * 90}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#E2E8F0]">
        <div className="h-full max-w-7xl mx-auto px-6 xl:px-8 grid grid-cols-2 gap-0">
          {/* IMAGE SIDE */}
          <div
            className={`relative flex flex-col justify-center py-14
            ${reverse ? "order-2 pl-12 xl:pl-16" : "pr-12 xl:pr-16"}`}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#23234d] bg-[#23234d]/8 px-3 py-1.5 rounded-full mb-4">
                {eyebrow}
              </span>
              <h2 className="text-[clamp(1.5rem,2vw,2.1rem)] font-black tracking-tight leading-[1.1] text-[#111]">
                {title}
              </h2>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{ height: "clamp(260px, 44vh, 420px)" }}
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
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-[#111] tracking-wide">
                  Active Campaign
                </span>
              </div>
              <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-[11px] font-bold text-white/80 tracking-widest">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#888] leading-relaxed mt-4 max-w-sm">
              {subtitle}
            </p>

            <div className="flex items-center gap-2 mt-5">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-7 h-2 bg-[#23234d]"
                      : "w-2 h-2 bg-[#23234d]/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div
            className={`relative flex items-center py-14
            ${reverse ? "order-1 pr-12 xl:pr-16" : "pl-12 xl:pl-16"}`}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-px h-24 bg-linear-to-b from-transparent via-[#23234d]/20 to-transparent" />
            </div>

            <div className="w-full">
              <div className="flex gap-1.5 mb-10">
                {items.map((_, i) => (
                  <div
                    key={i}
                    className="h-px flex-1 rounded-full overflow-hidden bg-[#e8e4de]"
                  >
                    <motion.div
                      className="h-full bg-[#23234d] rounded-full"
                      animate={{ width: i <= activeIndex ? "100%" : "0%" }}
                      transition={{ duration: i === activeIndex ? 0.6 : 0.15 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (d) => ({ opacity: 0, y: d > 0 ? 44 : -44 }),
                    center: { opacity: 1, y: 0 },
                    exit: (d) => ({ opacity: 0, y: d > 0 ? -32 : 32 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-7 h-7 rounded-full bg-[#23234d] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-[#e8e4de]" />
                  </div>

                  <h3 className="text-[clamp(1.5rem,2.2vw,2.3rem)] font-extrabold tracking-tight leading-[1.1] text-[#111] mb-5">
                    {t.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-[#23234d] mb-6 rounded-full" />
                  <p className="text-[15px] text-[#555] leading-[1.95] whitespace-pre-line">
                    {t.description}
                  </p>

                  {activeIndex === items.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-2 mt-10 text-[#aaa]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                      </svg>
                      <span className="text-xs tracking-widest uppercase font-medium">
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

/* ── Wrapper: mobile vs desktop ── */
const StickyAccordionBlock = ({ items, title, subtitle, eyebrow, reverse }) => {
  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden">
        <MobileBlock
          items={items}
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
        />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopBlock
          items={items}
          title={title}
          subtitle={subtitle}
          eyebrow={eyebrow}
          reverse={reverse}
        />
      </div>
    </>
  );
};

const ImageAccordion = () => {
  return (
    <section className="bg-[#fafaf8]">
      <StickyAccordionBlock
        items={items}
        eyebrow="Our Methodology"
        title="Our Lead Generation"
        subtitle="A holistic methodology designed to deliver results at every stage."
        reverse={false}
      />
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#e0ddd8] to-transparent" />
      </div>
      <StickyAccordionBlock
        items={itemsTwo}
        eyebrow="Our Approach"
        title="Our eCommerce Approach"
        subtitle="Precision execution ensuring timely delivery and highest quality standards."
        reverse={true}
      />
    </section>
  );
};

export default ImageAccordion;
