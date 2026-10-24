"use client";

import { motion, useReducedMotion } from "framer-motion";

function BrandPhrase() {
  return (
    <div className="flex shrink-0 items-center gap-6 sm:gap-10">
      <span className="whitespace-nowrap text-[40px] font-bold leading-[1.15] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(180,174,255,0.5)] sm:text-[60px] lg:text-[80px]">
        Become the go-to brand
      </span>

      <span className="text-[36px] leading-none text-[#6D63F2] sm:text-[52px] lg:text-[68px]">
        ✦
      </span>

      <span className="whitespace-nowrap text-[40px] font-bold leading-[1.15] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(180,174,255,0.5)] sm:text-[60px] lg:text-[80px]">
        in your industry
      </span>

      <span className="text-[36px] leading-none text-[#6D63F2] sm:text-[52px] lg:text-[68px]">
        ✦
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Become the go-to brand in your industry"
      className="overflow-hidden bg-[#110E3B] py-9 sm:py-12 lg:py-14"
    >
      {/* Accessible text */}
      <p className="sr-only">
        Become the go-to brand in your industry.
      </p>

      {/* Decorative scrolling text */}
      <div aria-hidden="true">
        <motion.div
          initial={false}
          animate={{
            x:
              reduceMotion === false
                ? ["0%", "-50%"]
                : "0%",
          }}
          transition={
            reduceMotion === false
              ? {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }
              : { duration: 0 }
          }
          className="flex w-max"
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
            >
              <BrandPhrase />
              <BrandPhrase />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}