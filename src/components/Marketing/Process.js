"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const steps = [
  {
    id: 1,
    heading: "Discovery & Understanding",
    paragraph:
      "We begin by understanding your business goals, audience, positioning, and challenges to align expectations and create a strategic direction.",
  },
  {
    id: 2,
    heading: "Market & Competitive Intelligence",
    paragraph:
      "We research your industry, study competitors, and analyse customer behaviour to uncover opportunities and guide positioning.",
  },
  {
    id: 3,
    heading: "Strategy & Offer Development",
    paragraph:
      "We build a conversion-focused strategy, refine your offer, define messaging pillars, and map customer journeys for maximum impact.",
  },
  {
    id: 4,
    heading: "Creative & Content Production",
    paragraph:
      "Our team crafts compelling creatives, ads, videos, landing page content, and brand messaging aligned with growth objectives.",
  },
  {
    id: 5,
    heading: "Technical Setup & Campaign Foundation",
    paragraph:
      "We implement analytics, tracking, CRM flows, landing pages, automation, and attribution systems for seamless performance measurement.",
  },
  {
    id: 6,
    heading: "Launch & Activation",
    paragraph:
      "We execute campaigns across chosen platforms, allocate budgets strategically, and initiate testing to gather performance insights.",
  },
  {
    id: 7,
    heading: "Optimization, Testing & Scaling",
    paragraph:
      "We continuously monitor data, run A/B tests, improve funnels and targeting, and scale campaigns once profitability and efficiency are validated.",
  },
  {
    id: 8,
    heading: "Reporting, Innovation & Long-Term Growth",
    paragraph:
      "We provide clear reporting, share insights, and evolve strategy, creatives, and automation to drive compounding growth over time.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-12 `bg-(--background)` min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-[1300px] mx-auto px-5 w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[42px] font-extrabold text-[#1e293b] mb-4 tracking-[-0.5px]">
            Our Proven Growth Lifecycle
          </h2>
        </div>
        {/* mobile or sm screen below md stepper */}
        <div className="md:hidden mb-6">
          {/* Big step counter */}
          <div className="flex justify-center mb-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStep}
                initial={{ opacity: 0, y: -8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="text-[90px] font-black leading-none select-none text-[#e2e8f0]"
              >
                {activeStep}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Content — clean no card */}
          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="px-5 mb-5 text-center"
              >
                {/* Step label */}
                <span className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase text-[#23234d]/40 mb-2">
                  Step {String(activeStep).padStart(2, "0")}
                </span>

                <h3 className="text-[1.15rem] font-extrabold text-[#1e293b] leading-[1.25] mb-2 tracking-tight">
                  {steps.find((s) => s.id === activeStep)?.heading}
                </h3>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-[#23234d] rounded-full mx-auto mb-3" />

                <p className="text-[13.5px] text-[#64748b] leading-[1.7]">
                  {steps.find((s) => s.id === activeStep)?.paragraph}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav + Progress */}
          <div className="px-5 flex items-center gap-3">
            {/* Prev */}
            <button
              onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
              disabled={activeStep === 1}
              className="w-9 h-9 rounded-full text-[#23234d] border border-[#23234d]/15 flex items-center justify-center
         disabled:opacity-20 active:scale-95 transition-all duration-200 shrink-0
        hover:border-[#23234d]/40 hover:text-[#23234d]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>

            {/* Segmented bar */}
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex gap-1">
                {steps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(s.id)}
                    className="flex-1 h-[3px] rounded-full overflow-hidden bg-[#e2e8f0] text-[#23234d]/50 "
                  >
                    <motion.div
                      className="h-full bg-[#23234d] rounded-full"
                      animate={{ width: s.id <= activeStep ? "100%" : "0%" }}
                      transition={{
                        duration: s.id === activeStep ? 0.35 : 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Counter row */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-semibold text-[#23234d]/30 tracking-widest uppercase">
                  {String(activeStep).padStart(2, "0")} /{" "}
                  {String(steps.length).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-semibold text-[#23234d]/30">
                  {Math.round((activeStep / steps.length) * 100)}%
                </span>
              </div>
            </div>

            {/* Next */}
            <button
              onClick={() =>
                setActiveStep((p) => Math.min(steps.length, p + 1))
              }
              disabled={activeStep === steps.length}
              className="w-9 h-9 rounded-full bg-[#23234d] flex items-center justify-center
            text-white disabled:opacity-25 active:scale-95 transition-all duration-200 shrink-0"
            >
              <svg
                width="15"
                height="15"
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
        {/*==================After md:screen Steps */}
        <div className=" hidden md:flex justify-between items-center mb-15 relative max-md:flex-col max-md:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() =>
                setActiveStep(activeStep === step.id ? null : step.id)
              }
              className="relative cursor-pointer transition-all duration-300 flex-1 flex justify-center"
            >
              <div className="relative flex justify-center items-center">
                {/* Big number */}
                <span
                  className={`text-[180px] max-md:text-[120px] font-black leading-none select-none transition-colors duration-300
                    ${activeStep === step.id ? "text-[#23234d]" : "text-[#e2e8f0]"}`}
                >
                  {step.id}
                </span>

                {/* Dot */}
                <div className="absolute bottom-[30px] max-md:bottom-5 left-1/2 -translate-x-1/2 flex justify-center items-center">
                  <motion.div
                    className="w-4 h-4 bg-[#23234d] rounded-full relative z-[2]"
                    animate={
                      activeStep === step.id
                        ? {}
                        : {
                            boxShadow: [
                              "0 0 0 0px rgba(35, 35, 77, 0.7)",
                              "0 0 0 10px rgba(35, 35, 77, 0)",
                            ],
                          }
                    }
                    transition={
                      activeStep === step.id
                        ? {}
                        : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className=" hidden min-h-37.5 md:flex justify-center text-center">
          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-[600px] w-full"
              >
                <h3 className="text-2xl font-bold text-[#1e293b] mb-3">
                  {steps.find((s) => s.id === activeStep)?.heading}
                </h3>
                <p className="text-[18px] text-[#64748b] leading-[1.6]">
                  {steps.find((s) => s.id === activeStep)?.paragraph}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
