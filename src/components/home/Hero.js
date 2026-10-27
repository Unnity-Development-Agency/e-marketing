"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "./Button";

const rotatingWords = [
  "order count.",
  "lead sheet.",
  " monthly revenue.",
  "bank account.",
];

const platforms = [
  "Meta Ads",
  "Google Ads",
  "Shopify",
  "WordPress",
  "Instagram",
  "Google Business",
];

const advantages = [
  "In-house Delhi team",
  "Performance-first",
  "Full ownership",
  "Weekly reporting",
  "No silos",
];

const avatars = [
  { text: "TC", color: "bg-[#0f032b]" },
  { text: "PS", color: "bg-[#1B1855]" },
  { text: "OL", color: "bg-[#8A82EE]" },
  { text: "SP", color: "bg-[#2E2A80]" },
  { text: "+", color: "bg-[#6D63F2]" },
];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion !== false) return;

    const wordTimer = window.setInterval(() => {
      setActiveWord((current) => {
        return (current + 1) % rotatingWords.length;
      });
    }, 2600);

    return () => {
      window.clearInterval(wordTimer);
    };
  }, [reduceMotion]);

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate overflow-hidden bg-white px-4 pb-14 pt-14 text-[#14123A] sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(27,24,85,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(27,24,85,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#0f032b]/15 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 -z-10 h-[380px] w-[380px] rounded-full bg-[#6D63F2]/15 blur-[90px]"
      />

      <div className="mx-auto w-full max-w-[1200px]">
        {/* Centered content */}
        <div className="mx-auto min-w-0 max-w-[900px] text-center max-lg:mt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1B1855]/15 bg-[#0f032b]/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0f032b] sm:text-xs">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f032b] shadow-[0_0_12px_rgba(55,48,163,0.45)]"
            />

            Full-stack growth agency · Delhi
          </span>

          <h1
            id="home-hero-heading"
            className="mb-6 mt-6 text-[clamp(2rem,4.5vw,4.4rem)] font-bold leading-[1.1] tracking-[-0.035em]"
          >
            Marketing that{" "}
            <span className="relative inline-block whitespace-nowrap">
              shows up

              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 -left-[2%] h-4 w-[104%] overflow-visible sm:h-5"
              >
                <motion.path
                  d="M3 14 C50 4,120 4,197 10"
                  fill="none"
                  stroke="#0f032b"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ pathLength: 1 }}
                />
              </svg>
            </span>{" "}
            in your
            <br />

            <span className="sr-only">
              order count., lead sheet., monthly revenue. and bank account.
            </span>

            <span
              aria-hidden="true"
              className="relative mt-1 inline-grid max-w-full overflow-hidden align-bottom"
            >
              {rotatingWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={false}
                  animate={{
                    y: index === activeWord ? "0%" : "110%",
                    opacity: index === activeWord ? 1 : 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="col-start-1 row-start-1 block whitespace-nowrap pb-1 italic bg-gradient-to-r from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mx-auto max-w-[540px] text-base leading-7 text-[#5F5C80] sm:text-lg sm:leading-8">
            Performance marketing, websites, social, SEO and local
            listings — run by one in-house team that works together,
            not in silos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="#contact-form">
              Get a free growth audit
            </Button>

            {/* <Button
              href="explore-project"
              variant="secondary"
              showArrow={false}
            >
              See our work
            </Button> */}
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div
              aria-hidden="true"
              className="flex items-center -space-x-2.5"
            >
              {avatars.map((avatar) => (
                <span
                  key={avatar.text}
                  className={[
                    "flex h-[38px] w-[38px] items-center justify-center",
                    "rounded-full border-2 border-white",
                    "text-xs font-bold text-white",
                    avatar.color,
                  ].join(" ")}
                >
                  {avatar.text}
                </span>
              ))}
            </div>

            <p className="text-left text-sm leading-5 text-[#5F5C80]">
              <strong className="font-semibold text-[#14123A]">
                100+ brands
              </strong>{" "}
              scaled across
              <br />
              India & Australia
            </p>
          </div>

          {/* Platforms */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-lg border border-[#1B1855]/10 bg-[#6D63F2]/5 px-3 py-1.5 text-xs text-[#5F5C80] transition-colors hover:border-[#0f032b]/40 hover:text-[#0f032b]"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}