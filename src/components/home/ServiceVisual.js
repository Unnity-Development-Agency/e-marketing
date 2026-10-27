"use client";

import {
  MapPin,
  ShoppingCart,
  Heart,
  Star,
} from "lucide-react";

const funnelSteps = [
  { label: "Impressions", width: "w-full" },
  { label: "Clicks", width: "w-[78%]" },
  { label: "Leads / ATC", width: "w-[56%]" },
  { label: "Sales", width: "w-[34%]" },
];

const socialPosts = [
  {
    likes: "1.2k",
    rotation: "-rotate-[10deg] translate-y-2",
    gradient: "from-[#1B1855] to-[#0f032b]",
  },
  {
    likes: "3.4k",
    rotation: "",
    gradient: "from-[#0f032b] to-[#6D63F2]",
  },
  {
    likes: "860",
    rotation: "rotate-[10deg] translate-y-2",
    gradient: "from-[#2E2A80] to-[#8A82EE]",
  },
];

function PerformanceVisual() {
  return (
    <>
      <span className="absolute left-5 top-4 text-[10px] font-medium uppercase tracking-[0.12em] text-[#5F5C80]">
        Full-funnel view
      </span>

      <div className="absolute left-4 right-[140px] top-[58px] grid gap-3.5 sm:left-5 sm:right-[180px]">
        {funnelSteps.map((step) => (
          <div
            key={step.label}
            className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[88px_minmax(0,1fr)]"
          >
            <span className="text-[9px] text-[#5F5C80] sm:text-[11px]">
              {step.label}
            </span>

            <div className="h-3 overflow-hidden rounded bg-[#6D63F2]/10">
              <span
                className={[
                  "sv-grow block h-full origin-left rounded",
                  "bg-gradient-to-r from-[#8A82EE] to-[#0f032b]",
                  step.width,
                ].join(" ")}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-11 text-center sm:right-6 sm:top-9">
        <div className="flex h-[105px] w-[105px] items-center justify-center rounded-full bg-[conic-gradient(#0f032b_0%_60%,#6D63F2_60%_88%,#2E2A80_88%_100%)] sm:h-[125px] sm:w-[125px]">
          <div className="flex h-[73px] w-[73px] flex-col items-center justify-center rounded-full bg-white sm:h-[89px] sm:w-[89px]">
            <strong className="text-xs font-semibold text-[#14123A] sm:text-sm">
              Budget
            </strong>

            <span className="text-[10px] text-[#5F5C80]">
              split
            </span>
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-2 text-[8px] text-[#5F5C80] sm:text-[9px]">
          {[
            { label: "Meta", color: "bg-[#0f032b]" },
            { label: "Google", color: "bg-[#6D63F2]" },
            { label: "Other", color: "bg-[#2E2A80]" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1"
            >
              <i
                className={`h-1.5 w-1.5 rounded-full ${item.color}`}
              />

              {item.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function WebsiteVisual() {
  return (
    <>
      {/* Browser illustration */}
      <div className="absolute left-5 top-6 h-[170px] w-[76%] -rotate-3 overflow-hidden rounded-xl border border-[#1B1855]/15 bg-white shadow-[0_12px_30px_-18px_rgba(27,24,85,0.35)]">
        <div className="flex h-7 items-center gap-4 border-b border-[#1B1855]/10 bg-[#F6F5FC] px-3">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
          </div>

          <span className="text-[9px] text-[#5F5C80]">
            yourbrand.com
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-3.5">
          <div className="col-span-2 h-5 rounded bg-gradient-to-r from-[#F1EFFB] to-[#D9D5F7]" />

          <div className="space-y-2 pt-1">
            <div className="h-1.5 w-full rounded bg-[#E7E3FA]" />
            <div className="h-1.5 w-4/5 rounded bg-[#E7E3FA]" />
            <div className="h-1.5 w-3/5 rounded bg-[#E7E3FA]" />
            <div className="mt-3 h-4 w-14 rounded-full bg-[#0f032b]" />
          </div>

          <div className="h-16 rounded bg-gradient-to-br from-[#F1EFFB] to-[#CFC9F7]" />
        </div>
      </div>

      {/* Cart notification */}
      <div className="absolute bottom-4 left-3 flex items-center gap-2 rounded-lg border border-[#1B1855]/10 bg-white px-3 py-2 shadow-sm">
        <ShoppingCart
          className="h-3.5 w-3.5 text-[#0f032b]"
          strokeWidth={1.8}
        />

        <span className="text-[10px] font-medium text-[#3A3760]">
          Added to cart
        </span>
      </div>

      {/* Speed indicator */}
      <div className="absolute bottom-6 right-5 flex h-20 w-20 flex-col items-center justify-center rounded-full border-[6px] border-[#15803D] border-l-[#15803D]/15 bg-white shadow-sm">
        <strong className="text-2xl font-bold leading-none text-[#15803D]">
          98
        </strong>

        <span className="mt-1 text-[8px] uppercase tracking-wider text-[#5F5C80]">
          Speed
        </span>
      </div>
    </>
  );
}

function SocialVisual() {
  return (
    <>
      <div className="flex justify-center gap-2 pt-8">
        {socialPosts.map((post) => (
          <div
            key={post.likes}
            className={[
              "relative h-[153px] w-[80px] shrink-0",
              "rounded-xl border border-[#1B1855]/10 bg-white p-2",
              "shadow-[0_10px_25px_-15px_rgba(27,24,85,0.3)]",
              "sm:w-[85px]",
              post.rotation,
            ].join(" ")}
          >
            <div
              className={`h-[85px] rounded-md bg-gradient-to-br ${post.gradient}`}
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-3xl text-white/35">
                  ✦
                </span>
              </div>
            </div>

            <div className="mt-2 h-1 w-full rounded bg-[#F1EFFB]" />
            <div className="mt-1.5 h-1 w-3/5 rounded bg-[#F1EFFB]" />

            <div className="mt-2 flex items-center justify-end gap-1 text-[#C7436A]">
              <Heart className="h-2.5 w-2.5 fill-current" />

              <span className="text-[8px]">
                {post.likes}
              </span>
            </div>
          </div>
        ))}
      </div>

      {["💙", "❤️", "💙"].map((h, i) => (
        <span
          key={i}
          className={`sv-heart sv-heart-${i} pointer-events-none absolute bottom-5 left-1/2 z-10 text-sm opacity-0`}
        >
          {h}
        </span>
      ))}
    </>
  );
}

function SEOVisual() {
  const base =
    "absolute inset-x-0 flex h-[34px] items-center gap-3 rounded-lg border pl-9 pr-3";

  return (
    <>
      <span className="absolute left-5 top-4 text-[10px] font-medium uppercase tracking-[0.12em] text-[#5F5C80]">
        Search results
      </span>

      <div className="absolute inset-x-4 top-11 h-[154px]">
        {["sv-rank-a", "sv-rank-b", "sv-rank-c"].map((cls, i) => (
          <div
            key={cls}
            style={{ top: i * 40 }}
            className={`${base} border-[#1B1855]/10 bg-[#F4F2FD] ${cls}`}
          >
            <div className="flex-1 space-y-1.5">
              <div className="h-1 w-full rounded bg-[#6D63F2]/15" />
              <div className="h-1 w-3/5 rounded bg-[#6D63F2]/10" />
            </div>
          </div>
        ))}

        <div
          style={{ top: 120 }}
          className={`${base} sv-rank-you z-10 border-[#0f032b] bg-[#E6E2F3]`}
        >
          <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-[#14123A]">
            yourbrand.com
          </span>

          <span className="whitespace-nowrap rounded-full bg-[#15803D]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#15803D]">
            + AI cited
          </span>
        </div>

        {/* numbers fixed rehte hain, rows upar-neeche hoti hain */}
        {[1, 2, 3, 4].map((n, i) => (
          <span
            key={n}
            style={{ top: i * 40 }}
            className="absolute left-3 z-20 flex h-[34px] w-3 items-center text-[10px] text-[#5F5C80]"
          >
            {n}
          </span>
        ))}
      </div>
    </>
  );
}

function LocalBusinessVisual() {
  return (
    <>
      {/* Map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E9E6FC] to-[#F6F5FC]">
        <svg
          viewBox="0 0 300 210"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M-10 70 C80 60 160 90 310 50"
            fill="none"
            stroke="white"
            strokeWidth="12"
          />

          <path
            d="M120 -10 C130 80 100 150 140 220"
            fill="none"
            stroke="white"
            strokeWidth="12"
          />

          <path
            d="M-10 150 C90 130 200 170 310 140"
            fill="none"
            stroke="white"
            strokeWidth="7"
          />

          <path
            d="M220 -10 C210 70 240 130 230 220"
            fill="none"
            stroke="white"
            strokeWidth="7"
          />
        </svg>

        <span className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#6D63F2]/25" />
        <span className="absolute right-[20%] top-[18%] h-2 w-2 rounded-full bg-[#6D63F2]/25" />
        <span className="absolute left-[22%] top-[56%] h-2 w-2 rounded-full bg-[#6D63F2]/25" />
        <span className="absolute right-[28%] top-[52%] h-2 w-2 rounded-full bg-[#6D63F2]/25" />

        {/* pulse ring */}
        <span className="sv-ring absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#6D63F2]" />

        <div className="absolute left-1/2 top-[36%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f032b] text-white shadow-[0_0_0_12px_rgba(55,48,163,0.1)]">
          <MapPin
            className="sv-bob h-6 w-6"
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* Business listing */}
      <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-xl border border-[#1B1855]/10 bg-white p-2.5 shadow-sm">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1EFFB] text-lg text-[#0f032b]">
          ✦
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-[#14123A]">
            Your Business
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="flex gap-0.5 text-[#CA8A04]">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="h-2 w-2 fill-current"
                />
              ))}
            </span>

            <span className="text-[8px] text-[#15803D]">
              Open now
            </span>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-[#0f032b]/5 px-2 py-1 text-[8px] font-semibold text-[#0f032b]">
          Map pack
        </span>
      </div>
    </>
  );
}

export default function ServiceVisual({ type }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-[210px] overflow-hidden border-b border-[#1B1855]/10 bg-gradient-to-br from-[#F1EFFB] to-[#F6F5FC]"
    >
      {type === "ads" && <PerformanceVisual />}
      {type === "web" && <WebsiteVisual />}
      {type === "social" && <SocialVisual />}
      {type === "seo" && <SEOVisual />}
      {type === "local" && <LocalBusinessVisual />}
    </div>
  );
}