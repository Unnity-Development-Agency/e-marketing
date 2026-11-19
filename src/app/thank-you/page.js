"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    if (sessionStorage.getItem("unnityLeadRedirect") !== "true") return;

    sessionStorage.removeItem("unnityLeadRedirect");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "unnity_lead_success" });
  }, []);

  return (
    <main className="min-h-screen bg-[#fafbff] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl px-8 py-14 text-center border border-[#e6e8f0]">
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
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-[#070c1a] mb-5">
          Thank You!
        </h1>

        <p className="text-lg text-[#5f6577] leading-8">
          Thank you for reaching out to Unnity. We&apos;ve received your enquiry
          request and look forward to connecting with you.
        </p>

        <p className="mt-5 text-base text-[#5f6577]">
          Let&apos;s build something great together!
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