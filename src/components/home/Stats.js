"use client";

import { useEffect, useRef } from "react";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

import {
  Clock3,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

// Original HTML ke figures.
// Approved numbers ke according yahan edit kar sakte ho.
const statistics = [
  {
    id: "experience",
    icon: Clock3,
    value: 8,
    suffix: "+",
    label: "Years in performance marketing",
  },
  {
    id: "brands",
    icon: Store,
    value: 100,
    suffix: "+",
    label: "E-commerce & lead-gen brands worked with",
  },
  {
    id: "spend",
    icon: TrendingUp,
    value: 2.5,
    decimals: 1,
    prefix: "₹",
    suffix: "Cr",
    label: "Monthly ad budgets managed by our founder",
  },
  {
    id: "team",
    icon: Users,
    value: 20,
    suffix: "",
    label: "In-house specialists, one office in Delhi",
  },
];

const teamSegments = [
  {
    label: "Performance",
    width: "w-[41%]",
    color: "bg-[#0f032b]",
  },
  {
    label: "Creative",
    width: "w-[23%]",
    color: "bg-[#6D63F2]",
  },
  {
    label: "Web dev",
    width: "w-[18%]",
    color: "bg-[#8A82EE]",
  },
  {
    label: "SEO",
    width: "w-[18%]",
    color: "bg-[#2E2A80]",
  },
];

function AnimatedNumber({ value, decimals = 0 }) {
  const numberRef = useRef(null);

  const isInView = useInView(numberRef, {
    once: true,
    amount: 0.5,
  });

  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(value);

  const formattedNumber = useTransform(
    motionValue,
    (current) => current.toFixed(decimals)
  );

  useEffect(() => {
    if (!isInView || reduceMotion !== false) return;

    motionValue.set(0);

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, motionValue, value]);

  return (
    <motion.span ref={numberRef}>
      {formattedNumber}
    </motion.span>
  );
}

function TimelineVisual() {
  return (
    <div className="pt-2">
      <div className="relative flex h-2.5 items-center justify-between">
        <span className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-[#1B1855] via-[#0f032b] to-[#6D63F2]" />

        {[0, 1, 2, 3].map((point) => (
          <span
            key={point}
            className={[
              "relative z-10 h-2.5 w-2.5 rounded-full",
              "border-2 border-[#0f032b]",
              point === 3
                ? "bg-[#0f032b]"
                : "bg-white",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="mt-2 flex justify-between text-[9px] text-[#5F5C80] sm:text-[10px]">
        <span>2018</span>
        <span>Agency</span>
        <span>2026</span>
      </div>
    </div>
  );
}

function BrandsVisual() {
  return (
    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1 pt-1.5 xl:grid-cols-[repeat(30,minmax(0,1fr))]">
      {Array.from({ length: 60 }, (_, index) => (
        <span
          key={index}
          className={[
            "aspect-square rounded-full",
            index % 7 === 0
              ? "bg-[#6D63F2]"
              : "bg-[#0f032b]",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function SpendVisual() {
  return (
    <svg
      viewBox="0 0 200 50"
      preserveAspectRatio="none"
      className="h-10 w-full overflow-visible"
    >
      <path
        d="M0,44 C20,43 30,36 50,37 S80,29 100,24 S140,21 160,13 S190,7 200,5"
        fill="none"
        stroke="#0f032b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle
        cx="200"
        cy="5"
        r="3"
        fill="#6D63F2"
      />
    </svg>
  );
}

function TeamVisual() {
  return (
    <div className="pt-2">
      <div className="flex h-2.5 gap-[3px] overflow-hidden rounded">
        {teamSegments.map((segment) => (
          <span
            key={segment.label}
            className={`${segment.width} ${segment.color}`}
          />
        ))}
      </div>

      <div className="mt-2 hidden flex-wrap gap-x-2 gap-y-1 xl:flex">
        {teamSegments.map((segment) => (
          <span
            key={segment.label}
            className="inline-flex items-center gap-1 text-[8px] text-[#5F5C80]"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${segment.color}`}
            />

            {segment.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatVisual({ type }) {
  switch (type) {
    case "experience":
      return <TimelineVisual />;

    case "brands":
      return <BrandsVisual />;

    case "spend":
      return <SpendVisual />;

    case "team":
      return <TeamVisual />;

    default:
      return null;
  }
}

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <article
      className={[
        "group relative min-w-0 rounded-[20px]",
        "border border-[#1B1855]/10 bg-white",
        "p-3.5 sm:p-5",
        "shadow-[0_1px_2px_rgba(27,24,85,0.04),0_12px_32px_-18px_rgba(27,24,85,0.22)]",
        "transition-all duration-300",
        "hover:border-[#0f032b]/25",
        "hover:shadow-[0_20px_40px_-24px_rgba(27,24,85,0.3)]",
        "motion-safe:hover:-translate-y-1",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Top highlight */}
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#6D63F2]/40 to-transparent"
      />

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-3.5">
        <span
          aria-hidden="true"
          className={[
            "flex h-[34px] w-[34px] shrink-0",
            "items-center justify-center rounded-xl",
            "bg-gradient-to-br from-[#1B1855] to-[#0f032b]",
            "text-white sm:mt-1 sm:h-10 sm:w-10",
            "transition-transform duration-300",
            "motion-safe:group-hover:-rotate-6",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          <Icon
            strokeWidth={1.8}
            className="h-[18px] w-[18px] sm:h-[21px] sm:w-[21px]"
          />
        </span>

        <div className="min-w-0">
          {/* Accessible static value */}
          <span className="sr-only">
            {stat.prefix}
            {stat.value}
            {stat.suffix}
          </span>

          <div
            aria-hidden="true"
            className="whitespace-nowrap text-[30px] font-bold leading-none tracking-[-0.03em] text-[#14123A] sm:text-[36px]"
          >
            {stat.prefix}

            <AnimatedNumber
              value={stat.value}
              decimals={stat.decimals || 0}
            />

            {stat.suffix && (
              <span className="text-[#0f032b]">
                {stat.suffix}
              </span>
            )}
          </div>

          <p className="mt-2 text-[11px] leading-[1.5] text-[#5F5C80] sm:text-xs">
            {stat.label}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-4 h-12"
      >
        <StatVisual type={stat.id} />
      </div>
    </article>
  );
}

export default function Stats() {
  return (
    <section
      aria-label="Unnity in numbers"
      className="bg-white px-4 pb-3 pt-9 sm:px-6 sm:pt-11 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
        {statistics.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}