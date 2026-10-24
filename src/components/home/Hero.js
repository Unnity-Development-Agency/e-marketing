"use client";

import { useEffect, useId, useState } from "react";
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

const dashboardTabs = [
  { id: "roas", label: "ROAS" },
  { id: "revenue", label: "Revenue" },
  { id: "leads", label: "Leads" },
];

// Illustrative dashboard figures, not live campaign results.
const dashboardData = {
  roas: {
    value: "5.2x",
    change: "▲ 38%",
    label: "Blended return on ad spend · 90 days",
    path:
      "M0,130 C40,126 60,112 100,112 S160,92 200,82 S270,62 300,46 S370,26 400,15",
    endY: 15,
  },

  revenue: {
    value: "₹18.4L",
    change: "▲ 62%",
    label: "Attributed revenue · 90 days",
    path:
      "M0,140 C50,136 80,122 120,118 S180,100 220,86 S300,70 330,50 S380,30 400,22",
    endY: 22,
  },

  leads: {
    value: "1,240",
    change: "▲ 45%",
    label: "Qualified leads · 90 days",
    path:
      "M0,118 C40,128 70,100 110,104 S170,80 210,88 S280,56 320,50 S375,36 400,28",
    endY: 28,
  },
};

const notifications = [
  {
    icon: "🛍️",
    title: "New order · ₹2,499",
    description: "via Meta Ads · just now",
    background: "bg-[#15803D]/10",
  },
  {
    icon: "📩",
    title: "Lead captured",
    description: "Google Search · 2 min ago",
    background: "bg-[#0f032b]/10",
  },
  {
    icon: "⭐",
    title: "New 5★ review",
    description: "Google Business · 5 min ago",
    background: "bg-amber-100",
  },
  {
    icon: "📈",
    title: "Organic traffic +24%",
    description: "SEO · this week",
    background: "bg-[#6D63F2]/10",
  },
];

const barHeights = [
  "h-[40%]",
  "h-[65%]",
  "h-[50%]",
  "h-[80%]",
  "h-[70%]",
  "h-full",
];

const glassClasses = [
  "rounded-[10px]",
  "border border-[#1B1855]/15",
  "bg-white/90 backdrop-blur-xl",
  "shadow-[0_24px_50px_-24px_rgba(27,24,85,0.3)]",
].join(" ");

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 text-[#0f032b]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState("roas");
  const [activeWord, setActiveWord] = useState(0);
  const [activeNotification, setActiveNotification] = useState(0);

  const reduceMotion = useReducedMotion();

  const uniqueId = useId().replace(/:/g, "");
  const lineGradientId = `hero-line-${uniqueId}`;
  const areaGradientId = `hero-area-${uniqueId}`;

  const currentData = dashboardData[activeTab];
  const currentNotification = notifications[activeNotification];

  useEffect(() => {
    if (reduceMotion !== false) return;

    const wordTimer = window.setInterval(() => {
      setActiveWord((current) => {
        return (current + 1) % rotatingWords.length;
      });
    }, 2600);

    const notificationTimer = window.setInterval(() => {
      setActiveNotification((current) => {
        return (current + 1) % notifications.length;
      });
    }, 3200);

    return () => {
      window.clearInterval(wordTimer);
      window.clearInterval(notificationTimer);
    };
  }, [reduceMotion]);

  const floatingAnimation = (distance, duration, delay = 0) => {
    if (reduceMotion !== false) {
      return {
        animate: { y: 0 },
        transition: { duration: 0 },
      };
    }

    return {
      animate: { y: [0, -distance, 0] },
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    };
  };

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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-14">
          {/* Left content */}
          <div className="min-w-0 text-center lg:text-left">
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

            <p className="mx-auto max-w-[540px] text-base leading-7 text-[#5F5C80] sm:text-lg sm:leading-8 lg:mx-0">
              Performance marketing, websites, social, SEO and local
              listings — run by one in-house team that works together,
              not in silos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <Button href="#contact">
                Get a free growth audit
              </Button>

              <Button
                href="#work"
                variant="secondary"
                showArrow={false}
              >
                See our work
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
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

          {/* Right dashboard */}
          <div
            role="group"
            aria-label="Illustrative marketing dashboard. All figures are sample data."
            className="relative mx-auto h-[480px] w-full min-w-0 max-w-[560px] sm:h-[540px] lg:max-w-none"
          >
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#1B1855]/20 sm:h-[480px] sm:w-[480px] xl:h-[520px] xl:w-[520px]"
            >
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-[#0f032b] shadow-[0_0_18px_rgba(55,48,163,0.45)]" />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1B1855]/10 sm:h-[360px] sm:w-[360px]"
            />

            {/* Main dashboard */}
            <div className="absolute left-1/2 top-[105px] z-10 w-[92%] max-w-[420px] -translate-x-1/2 sm:top-[100px]">
              <motion.div
                {...floatingAnimation(9, 6)}
                className={`${glassClasses} p-4 sm:p-5`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#5F5C80]">
                    Sample data
                  </span>
                </div>

                <div
                  role="group"
                  aria-label="Choose sample dashboard metric"
                  className="mb-5 flex gap-1 rounded-[10px] bg-[#F5F4FC] p-1"
                >
                  {dashboardTabs.map((tab) => (
                    <button
                      type="button"
                      key={tab.id}
                      aria-pressed={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={[
                        "flex-1 rounded-[7px] px-2 py-2",
                        "text-xs font-semibold sm:text-sm",
                        "transition-colors duration-200",
                        "focus-visible:outline-2",
                        "focus-visible:outline-offset-2",
                        "focus-visible:outline-[#6D63F2]",
                        activeTab === tab.id
                          ? "bg-[#0f032b] text-white shadow-sm"
                          : "text-[#5F5C80] hover:bg-white hover:text-[#14123A]",
                      ].join(" ")}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-baseline gap-3">
                  <strong className="text-[32px] font-bold leading-none tracking-tight text-[#14123A] sm:text-[38px]">
                    {currentData.value}
                  </strong>

                  <span className="rounded-full bg-[#15803D]/10 px-2 py-1 text-[11px] font-semibold text-[#15803D] sm:text-xs">
                    {currentData.change}
                  </span>
                </div>

                <p className="mt-2 text-[10px] text-[#5F5C80] sm:text-xs">
                  {currentData.label}
                </p>

                <svg
                  viewBox="0 0 400 150"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="mt-4 h-[110px] w-full overflow-visible sm:h-[150px]"
                >
                  <defs>
                    <linearGradient
                      id={lineGradientId}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1B1855" />
                      <stop offset="50%" stopColor="#0f032b" />
                      <stop offset="100%" stopColor="#6D63F2" />
                    </linearGradient>

                    <linearGradient
                      id={areaGradientId}
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0f032b"
                        stopOpacity="0.3"
                      />

                      <stop
                        offset="100%"
                        stopColor="#0f032b"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  {[40, 80, 120].map((position) => (
                    <line
                      key={position}
                      x1="0"
                      x2="400"
                      y1={position}
                      y2={position}
                      stroke="rgba(27,24,85,0.1)"
                      strokeDasharray="3 5"
                    />
                  ))}

                  <motion.path
                    key={`${activeTab}-area`}
                    d={`${currentData.path} L400,150 L0,150 Z`}
                    fill={`url(#${areaGradientId})`}
                    initial={{ opacity: reduceMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.7 }}
                  />

                  <motion.path
                    key={`${activeTab}-line`}
                    d={currentData.path}
                    fill="none"
                    stroke={`url(#${lineGradientId})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: reduceMotion ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.2,
                      ease: "easeInOut",
                    }}
                  />

                  <circle
                    cx="400"
                    cy={currentData.endY}
                    r="5"
                    fill="white"
                    stroke="#0f032b"
                    strokeWidth="3"
                  />
                </svg>

                <div className="mt-2 flex justify-between text-[10px] text-[#5F5C80]">
                  {["Jul", "Aug", "Sep", "Oct"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Live campaign card */}
            <motion.div
              {...floatingAnimation(10, 7, 0.3)}
              aria-hidden="true"
              className={[
                glassClasses,
                "absolute right-0 top-1 z-20",
                "w-[170px] p-3 sm:right-0 sm:top-0",
                "sm:w-[190px] sm:p-4",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#15803D]/40 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#15803D]" />
                </span>

                <span className="whitespace-nowrap text-[10px] font-semibold text-[#14123A] sm:text-xs">
                  Meta campaign · Live
                </span>
              </div>

              <div className="mt-3 flex h-8 items-end gap-1.5 sm:h-11">
                {barHeights.map((height, index) => (
                  <motion.span
                    key={index}
                    initial={false}
                    animate={
                      reduceMotion === false
                        ? { scaleY: [1, 0.45, 1] }
                        : { scaleY: 1 }
                    }
                    transition={
                      reduceMotion === false
                        ? {
                            duration: 2.4,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut",
                          }
                        : { duration: 0 }
                    }
                    className={[
                      "flex-1 origin-bottom rounded-t",
                      "bg-gradient-to-t from-[#0f032b] to-[#6D63F2]",
                      height,
                    ].join(" ")}
                  />
                ))}
              </div>

              <p className="mt-2 hidden text-[10px] text-[#5F5C80] sm:block">
                Creatives testing · 6 variants
              </p>
            </motion.div>

            {/* Search card */}
            <motion.div
              {...floatingAnimation(8, 8, 0.6)}
              aria-hidden="true"
              className={[
                glassClasses,
                "absolute bottom-[68px] left-0 z-20",
                "flex w-[230px] max-w-[85%] items-center gap-2.5",
                "px-3 py-3 sm:bottom-12 sm:w-[280px] sm:px-4",
              ].join(" ")}
            >
              <SearchIcon />

              <span className="truncate text-[10px] text-[#3A3760] sm:text-xs">
                best skin clinic near me
              </span>

              <span className="absolute -right-2 -top-3 rounded-full bg-[#15803D] px-2 py-1 text-[9px] font-bold text-white sm:text-[10px]">
                #1 on Google
              </span>
            </motion.div>

            {/* Rotating notification */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 z-20 w-[235px] sm:bottom-0 sm:w-[260px]"
            >
              <motion.div
                key={activeNotification}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 12, scale: 0.97 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.4 }}
                className={`${glassClasses} flex items-center gap-3 p-3`}
              >
                <span
                  className={[
                    "flex h-[38px] w-[38px] shrink-0",
                    "items-center justify-center rounded-xl",
                    "text-lg",
                    currentNotification.background,
                  ].join(" ")}
                >
                  {currentNotification.icon}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#14123A] sm:text-[13px]">
                    {currentNotification.title}
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-[#5F5C80] sm:text-[11px]">
                    {currentNotification.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom advantages */}
        <ul className="mt-12 flex list-none flex-wrap justify-center gap-2.5 p-0 sm:mt-14 lg:mt-16">
          {advantages.map((advantage, index) => (
            <li
              key={advantage}
              className="flex items-center gap-2.5 rounded-full border border-[#1B1855]/10 bg-white/90 px-3.5 py-2.5 text-xs text-[#5F5C80] transition-colors hover:border-[#0f032b]/40 sm:px-[18px] sm:text-sm"
            >
              <span className="text-[11px] font-bold text-[#6D63F2]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {advantage}
            </li>
          ))}
        </ul>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#services"
            aria-label="Scroll to services"
            className="relative flex h-[46px] w-7 justify-center rounded-full border border-[#1B1855]/20 pt-2 transition-colors hover:border-[#6D63F2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6D63F2]"
          >
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={
                reduceMotion === false
                  ? {
                      y: [0, 14, 14],
                      opacity: [1, 0, 0],
                    }
                  : { y: 0, opacity: 1 }
              }
              transition={
                reduceMotion === false
                  ? {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : { duration: 0 }
              }
              className="h-2 w-1 rounded-full bg-[#6D63F2]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}