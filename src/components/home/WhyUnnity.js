"use client";

import { useState } from "react";

import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";


function LinkedinIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const comparisons = [
  {
    other: {
      title: "Separate vendors for ads, site and content",
      description: "Nobody owns the full funnel",
    },
    unnity: {
      title: "One in-house team for ads, site and content",
      description: " One team owns your full funnel.",
    },
  },
  {
    other: {
      title: "A junior manager as your only contact",
      description: "Strategy gets lost in handoffs",
    },
    unnity: {
      title: "Direct access to the people running your account",
      description:
        "Strategy and execution stay in the same room.",
    },
  },
  {
    other: {
      title: "Testing on your budget",
      description: "You pay for their learning curve",
    },
    unnity: {
      title: "Playbooks from 100+ brands",
      description: "We scale what’s already proven, not guesswork.",
    },
  },
  {
    other: {
      title: "A monthly PDF of vanity metrics",
      description: "Reach, impressions, engagement.",
    },
    unnity: {
      title: "Weekly reports on what actually matters",
      description:
        "Sales, leads, ROAS and cost per result.",
    },
  },
  {
    other: {
      title: "Slow back-and-forth on every change",
      description: "Days to update one landing page",
    },
    unnity: {
      title: "Changes shipped in hours, not days",
      description:
        "Our developers and marketers sit together.",
    },
  },
];

// Add your approved photo and LinkedIn URL here.
const founder = {
  name: "Sayam Jain",
  initials: "SJ",
  image: "",
  linkedin: "",
  role: "Founder, Unnity · Ex performance marketer",
};

const founderStats = [
  {
    value: "8 yrs",
    label: "In the industry",
  },
  {
    value: "₹2.5Cr",
    label: "Monthly budgets run",
  },
  {
    value: "100+",
    label: "Brands",
  },
];

function ComparisonCard() {
  const [activeMode, setActiveMode] = useState("other");

  const isUnnity = activeMode === "unnity";

  return (
    <div className="rounded-[20px] border border-[#1B1855]/10 bg-white p-5 shadow-[0_12px_32px_-18px_rgba(27,24,85,0.22)] sm:p-7">
      <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[#14123A]">
        How it usually goes vs. how we work
      </h3>

      {/* Comparison controls */}
      <div
        role="group"
        aria-label="Compare agency approaches"
        className="mt-6 inline-flex max-w-full rounded-full border border-[#1B1855]/10 bg-[#F5F4FC] p-1"
      >
        {[
          { id: "other", label: "Other agencies" },
          { id: "unnity", label: "Unnity" },
        ].map((mode) => (
          <button
            type="button"
            key={mode.id}
            aria-pressed={activeMode === mode.id}
            aria-controls="agency-comparison-content"
            onClick={() => setActiveMode(mode.id)}
            className={[
              "rounded-full px-4 py-2.5",
              "text-xs font-semibold sm:px-5 sm:text-sm",
              "transition-colors duration-200",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-2",
              "focus-visible:outline-[#6D63F2]",
              activeMode === mode.id
                ? [
                    "bg-white shadow-sm",
                    mode.id === "unnity"
                      ? "text-[#0f032b]"
                      : "text-[#B42318]",
                  ].join(" ")
                : "text-[#5F5C80] hover:text-[#14123A]",
            ].join(" ")}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Comparison rows */}
      <ul
        id="agency-comparison-content"
        className="mt-5 list-none p-0"
      >
        {comparisons.map((comparison) => {
          const content = isUnnity
            ? comparison.unnity
            : comparison.other;

          return (
            <li
              key={comparison.unnity.title}
              className="flex items-start gap-3.5 border-b border-[#1B1855]/10 py-4"
            >
              <span
                aria-hidden="true"
                className={[
                  "mt-0.5 flex h-7 w-7 shrink-0",
                  "items-center justify-center rounded-full border",
                  "transition-colors duration-300",
                  isUnnity
                    ? "border-[#15803D]/20 bg-[#15803D]/10 text-[#15803D]"
                    : "border-[#DC2626]/15 bg-[#DC2626]/5 text-[#DC2626]",
                ].join(" ")}
              >
                {isUnnity ? (
                  <Check
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                ) : (
                  <X
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                )}
              </span>

              <div className="min-w-0">
                <h4 className="text-[13px] font-semibold leading-5 text-[#14123A] sm:text-sm">
                  {content.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#5F5C80]">
                  {content.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Illustrative comparison meter */}
      <div className="mt-6">
        <div className="mb-2.5 flex items-center justify-between gap-3">
          <span className="text-[11px] text-[#5F5C80] sm:text-xs">
            Confidence your spend is working
          </span>

          <span
            className={[
              "text-xs font-semibold",
              isUnnity
                ? "text-[#15803D]"
                : "text-[#B42318]",
            ].join(" ")}
          >
            {isUnnity ? "High" : "Low"}
          </span>
        </div>

        <div
          aria-hidden="true"
          className="h-2 overflow-hidden rounded-full bg-[#F1EFFB]"
        >
          <span
            className={[
              "block h-full rounded-full",
              "transition-[width,background-color] duration-700",
              "motion-reduce:transition-none",
              isUnnity
                ? "w-[94%] bg-gradient-to-r from-[#0f032b] to-[#6D63F2]"
                : "w-[24%] bg-[#DC2626]/60",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}

function FounderCard() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="flex min-w-0 flex-col rounded-[20px] border border-[#1B1855]/10 bg-gradient-to-br from-[#F1EFFB] via-white to-white p-5 shadow-[0_12px_32px_-18px_rgba(27,24,85,0.22)] sm:p-8">
      {/* Founder identity */}
      <div className="flex items-center gap-3.5">
        <div className="relative shrink-0">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B1855] to-[#0f032b] text-lg font-bold text-white">
            {founder.image && !imageFailed ? (
              <img
                src={founder.image}
                alt={founder.name}
                width={56}
                height={56}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              founder.initials
            )}
          </div>

          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-[#15803D]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-[#14123A] sm:text-xl">
            {founder.name}
          </h3>

          <p className="mt-1 text-[11px] leading-5 text-[#5F5C80] sm:text-xs">
            {founder.role}
          </p>
        </div>
      </div>

      {/* Founder statement */}
      <blockquote className="my-8 text-[23px] font-medium leading-[1.4] tracking-[-0.02em] text-[#14123A] sm:text-[28px]">
        “Most agencies sell you services. We sell you a growth
        system — and we only win when your numbers do.”
      </blockquote>

      {/* Founder statistics */}
      <dl className="grid grid-cols-3 gap-3 border-y border-[#1B1855]/10 py-5">
        {founderStats.map((stat) => (
          <div
            key={stat.label}
            className="flex min-w-0 flex-col"
          >
            <dt className="order-2 mt-1.5 text-[10px] leading-4 text-[#5F5C80] sm:text-[11px]">
              {stat.label}
            </dt>

            <dd className="m-0 text-[22px] font-bold leading-none tracking-tight text-[#0f032b] sm:text-[26px]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Signature and availability */}
      <div className="my-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-serif text-xl italic text-[#0f032b]">
          {founder.name}
        </span>

        <span className="inline-flex items-center gap-2 text-[10px] text-[#5F5C80]">
          <span
            aria-hidden="true"
            className="relative flex h-2 w-2 shrink-0"
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#15803D]/30 motion-safe:animate-ping" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#15803D]" />
          </span>

          Usually replies within 24 hours
        </span>
      </div>

      {/* Founder actions */}
      <div className="mt-auto flex flex-wrap items-center gap-3">
        <Button href="https://calendly.com/sayam-unnity/30min">
          Talk to Sayam
        </Button>

        {founder.linkedin && (
          <Button
            href={founder.linkedin}
            variant="secondary"
            showArrow={false}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Sayam Jain's LinkedIn profile"
          >
            <span className="inline-flex items-center gap-2">
            <LinkedinIcon className="h-4 w-4" />

              LinkedIn
            </span>
          </Button>
        )}
      </div>
    </article>
  );
}

export default function WhyUnnity() {
  return (
    <section
      id="why"
      aria-label="Why work with Unnity"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why Unnity"
            title="We've made the mistakes,"
            highlightedText="so your brand doesn't have to."
          />

          <p className="max-w-[450px] text-base leading-7 text-[#5F5C80]">
            100+ brands taught us what works — and what
            doesn&apos;t. Flip the switch to see the difference.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.2fr_1fr]">
          <ComparisonCard />
          <FounderCard />
        </div>
      </div>
    </section>
  );
}