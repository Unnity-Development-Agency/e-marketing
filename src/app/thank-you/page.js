
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {

useEffect(() => {
  let retryTimer;
  let attempts = 0;
  let cancelled = false;

  const trackEvents = () => {
    if (cancelled) return;

    if (
      typeof window.fbq !== "function" ||
      window.__unnityPixelReady !== true
    ) {
      attempts += 1;

      if (attempts < 60) {
        retryTimer = window.setTimeout(trackEvents, 250);
      }

      return;
    }

    const pixelId = "1781082229613832";
    const currentUrl = window.location.href;

    // Thank-you PageView: client navigation par bhi bhejo
    if (window.__unnityLastPageViewUrl !== currentUrl) {
      window.fbq("trackSingle", pixelId, "PageView");
      window.__unnityLastPageViewUrl = currentUrl;
    }

    // Lead: successful form submission ke baad hi
    if (
      sessionStorage.getItem("unnityLeadRedirect") === "true"
    ) {
      window.fbq("trackSingle", pixelId, "Lead");
      sessionStorage.removeItem("unnityLeadRedirect");
    }
  };

  trackEvents();

  return () => {
    cancelled = true;
    window.clearTimeout(retryTimer);
  };
}, []);

  return (
    <main className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-12">

      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl px-8 py-14 text-center border border-[#e6e8f0]">

        {/* Success Icon */}
        <div className="mx-auto mb-7 w-20 h-20 bg-[#e9f9ef] rounded-full flex items-center justify-center">

          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#176a3a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>

        </div>

        <h1 className="text-4xl font-bold text-[#070c1a] mb-5">
          Thank You!
        </h1>

        <p className="text-lg text-[#5f6577] leading-8">
          Thank you for reaching out to Unnity.
          We've received your enquiry request
          and look forward to connecting with you.
        </p>

        <p className="mt-5 text-base text-[#5f6577]">
          Let's build something great together!
        </p>

        <Link
          href="/"
          className="inline-flex mt-9 items-center justify-center bg-[#130435] hover:bg-[#0d0325] text-white font-semibold px-10 py-4 rounded-xl transition-all"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}


