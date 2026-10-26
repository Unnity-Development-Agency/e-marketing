"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const filters = [
  { id: "all", label: "All" },
  { id: "ecom", label: "E-commerce" },
  { id: "lead", label: "Lead-gen" },
  { id: "web", label: "Web & SEO" },
];

// Replace XX figures with approved results.
// Add logo paths and case-study URLs when available.
const caseStudies = [
  {
    id: "lawnmower",
    brand: "Power Movers",
    logo: "",
    category: "ecom",
    industry: "E-commerce",
    location: "Australia",
    title: "26x ROAS on 12,000+ SKUs",
    description:
      "Profitable scale for a highly seasonal catalogue on Google Shopping and Meta.",
    metrics: [
     
      { value: "$386K+", label: "Sales" },
      { value: "$14,865", label: "Spend" },
       { value: "25.96", label: "ROAS" },
    ],
    channels: "Google Shopping · Meta",
    href: "",
  },
  {
    id: "Cupid Clothing",
    brand: "Cupid Clothing",
    logo: "/cupid.webp",
    category: "ecom",
    industry: "Fashion",
    location: "India",
    title: "₹15K to ₹1.5L in daily sales",
    description:
      "Full-stack growth for a plus-size fashion brand, with 40% repeat customers.",
    metrics: [
      { value: "₹22L", label: "Sales" },
      { value: "₹6.7L", label: "Spend" },
       { value: "3.44", label: "ROAS" },
    ],
    channels: "Shopify · Meta",
    href: "",
  },
  {
    id: "Kisan Say",
    brand: "Kisan Say",
    logo: "",
    category: "lead",
    industry: "Agritech",
    location: "Delhi NCR",
    title: "₹1.29 Cr in monthly sales",
    description:
      "Scaled a ₹34 Cr-funded brand on Meta and Google, cutting ₹6L in wasted spend.",
    metrics: [
       { value: "₹1.29Cr", label: "Sales" },
      { value: "₹46L", label: "Spend" },
       { value: "2.7", label: "ROAS" },
    ],
    channels: "Meta lead ads",
    href: "",
  },
  {
    id: "Hubhawks",
    brand: "Hubhawks",
    logo: "/hub1.png",
    category: "lead",
    industry: "Real estate",
    location: "Dehradun",
    title: "₹52L in sales at 16.5x ROAS",
    description:
      "Premium author packages, starting at ₹1.8L, sold through branding and Meta and Google ads.",
    metrics: [
       { value: "₹52L", label: "Sales" },
      { value: "₹3L", label: "Spend" },
       { value: "16.5", label: "ROAS" },
    ],
    channels: "Branding · Meta · Google",
    href: "",
  },
  {
      id: "E-Travelsim",
    brand: "E-Travelsim",
    logo: "/e-travel.avif",
    category: "web",
    industry: "Fitness",
    location: "India",
    title: "$2K to $100K in monthly sales",
    description:
      "Global Google Ads for an eSIM brand, converting at nearly 10% with sharp targeting",
    metrics: [
      { value: "₹2.82Cr", label: "Sales" },
      { value: "₹1.02Cr", label: "Spend" },
       { value: "2.76", label: "ROAS" },
    ],
    channels: "Web dev · Social",
    href: "",
  },
  {
    id: "Donmiller",
    brand: "Donmiller",
    logo: "/donmiller1.png",
    category: "web",
    industry: "Travel",
    location: "Delhi",
    title: "₹7.42L in sales in 3 months",
    description:
      "Scaled a men’s leather goods brand through aggressive creative and AI video testing.",
    metrics: [
       { value: "₹7.42L", label: "Sales" },
      { value: "₹3.08L", label: "Spend" },
       { value: "2.4", label: "ROAS" },
    ],
    channels: "Technical SEO",
    href: "",
  },
  {
    id: "Core",
    brand: "Core",
    logo: "/the_core1.png",
    category: "web",
    industry: "Travel",
    location: "Delhi",
    title: "₹2.09L in sales in the first month",
    description:
      "Launched a postnatal fitness brand from scratch, then lifted landing-page conversion by 50%",
    metrics: [
       { value: "₹7.42L", label: "Sales" },
      { value: "₹3.08L", label: "Spend" },
       { value: "2.4", label: "Converstion rate" },
    ],
    channels: "Technical SEO",
    href: "",
  },
  {
    id: "Uberlyfe",
    brand: "Uberlyfe",
    logo: "/uberlyfe1.png",
    category: "web",
    industry: "Travel",
    location: "Delhi",
    title: "183% sales growth in 2 months",
    description:
      "Creatives built around next-day delivery scaled a sofa-bed brand to ₹53L. ",
    metrics: [
       { value: "₹53L", label: "Sales" },
      { value: "₹3.78L", label: "Spend" },
       { value: "14", label: "ROAS" },
    ],
    channels: "Technical SEO",
    href: "",
  },

];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
    </svg>
  );
}

function CaseStudyCard({ item }) {
  const [logoFailed, setLogoFailed] = useState(false);

  const destination = item.href || "#contact";

  return (
    <article
      className={[
        "group relative flex min-w-0 flex-col",
        "rounded-[20px] border border-[#1B1855]/10",
        "bg-white p-5 sm:p-6",
        "shadow-[0_1px_2px_rgba(27,24,85,0.04),0_12px_32px_-18px_rgba(27,24,85,0.22)]",
        "transition-all duration-300",
        "hover:border-[#0f032b]/25",
        "hover:shadow-[0_25px_50px_-25px_rgba(27,24,85,0.3)]",
        "motion-safe:hover:-translate-y-1",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Brand */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex min-h-14 min-w-0 items-center">
          {item.logo && !logoFailed ? (
            <img
              src={item.logo}
              alt={item.brand}
              loading="lazy"
              width={140}
              height={56}
              onError={() => setLogoFailed(true)}
              className="max-h-14 w-auto max-w-[140px] object-contain"
            />
          ) : (
            <span className="text-lg font-bold tracking-tight text-[#14123A]">
              {item.brand}
            </span>
          )}
        </div>

        {/* <a
          href={destination}
          aria-label={`Learn about ${item.brand}`}
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center",
            "rounded-full border border-[#1B1855]/15",
            "text-[#0f032b] transition-colors",
            "hover:border-[#0f032b] hover:bg-[#0f032b] hover:text-white",
            "focus-visible:outline-2 focus-visible:outline-offset-4",
            "focus-visible:outline-[#6D63F2]",
          ].join(" ")}
        >
          <ArrowIcon diagonal />
        </a> */}
      </div>

      {/* Category and location */}
      <div className="mb-4 flex flex-wrap gap-2">
        {[item.industry, item.location].map((label) => (
          <span
            key={label}
            className="rounded-full border border-[#1B1855]/10 px-2.5 py-1 text-[10px] text-[#5F5C80]"
          >
            {label}
          </span>
        ))}
      </div>

      <h3 className="mb-3 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#14123A]">
        {item.title}
      </h3>

      <p className="mb-6 text-sm leading-6 text-[#5F5C80]">
        {item.description}
      </p>

      {/* Results */}
      <dl className="mt-auto grid grid-cols-3 gap-2 rounded-xl bg-[#F5F4FC] px-2.5 py-4">
        {item.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-w-0 flex-col items-center text-center"
          >
            <dt className="order-2 mt-1 text-[10px] leading-4 text-[#5F5C80]">
              {metric.label}
            </dt>

            <dd
              className={[
                "m-0 text-2xl font-bold leading-tight",
                "tracking-tight text-[#0f032b]",
                metric.value.includes("X")
                  ? "opacity-45"
                  : "",
              ].join(" ")}
            >
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Card footer */}
      {/* <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="text-[10px] leading-4 text-[#5F5C80]">
          {item.channels}
        </span>

        <a
          href={destination}
          className={[
            "inline-flex items-center gap-1.5 rounded",
            "text-[11px] font-semibold text-[#0f032b]",
            "transition-colors hover:text-[#6D63F2]",
            "focus-visible:outline-2 focus-visible:outline-offset-4",
            "focus-visible:outline-[#6D63F2]",
          ].join(" ")}
        >
          {item.href ? "Read story" : "Discuss this project"}

          <ArrowIcon />
        </a>
      </div> */}
    </article>
  );
}

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleCaseStudies = caseStudies.filter((item) => {
    return (
      activeFilter === "all" ||
      item.category === activeFilter
    );
  });

  return (
    <section
      id="work"
      aria-label="Client case studies"
      className="scroll-mt-24 bg-[#F6F5FC] px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-[680px]">
            <SectionHeading
              eyebrow="Proven growth"
              title="Real brands."
              highlightedText="Real numbers."
              description="A look at how we've helped businesses scale with data-driven strategy."
            />
          </div>

          {/* Category filters */}
          <div
            role="group"
            aria-label="Filter case studies"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.id}
                aria-pressed={activeFilter === filter.id}
                aria-controls="case-studies-grid"
                onClick={() => setActiveFilter(filter.id)}
                className={[
                  "rounded-full border px-3.5 py-2",
                  "text-xs font-medium",
                  "transition-colors duration-200",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-4",
                  "focus-visible:outline-[#6D63F2]",
                  activeFilter === filter.id
                    ? "border-[#0f032b] bg-[#0f032b] text-white"
                    : "border-[#1B1855]/15 bg-transparent text-[#5F5C80] hover:border-[#0f032b]/40 hover:text-[#0f032b]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <p
          role="status"
          aria-live="polite"
          className="sr-only"
        >
          Showing {visibleCaseStudies.length} case studies.
        </p>

        <div
          id="case-studies-grid"
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCaseStudies.map((item) => (
            <CaseStudyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}