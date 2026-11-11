
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {

useEffect(() => {
  let retryTimer;
  let attempts = 0;

  const fireLead = () => {
    // Sirf successful form submission ke baad event chalega
    const leadRedirect = sessionStorage.getItem(
      "unnityLeadRedirect"
    );

    if (leadRedirect !== "true") return;

    // Pixel ready hai toh Lead event queue karo
    if (typeof window.fbq === "function") {
      window.fbq(
        "trackSingle",
        "1660292408308023",
        "Lead"
      );

      // Refresh par dobara event fire hone se roko
      sessionStorage.removeItem("unnityLeadRedirect");

      console.log("Meta Pixel Lead event queued");
      return;
    }

    // Pixel ready hone ke liye 15 seconds tak retry
    attempts += 1;

    if (attempts < 60) {
      retryTimer = window.setTimeout(fireLead, 250);
    } else {
      console.warn("Meta Pixel initialize nahi hua");
    }
  };

  fireLead();

  return () => {
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
