"use client";

import React, { useRef } from "react";
// import Aurora from "../reactBits/Aurora";
import Link from "next/link";
import LightRays from "../reactBits/LightRays";
import FloatingLines from "../reactBits/FloatingLines";

const Hero = () => {
  const sectionRef = useRef(null);
  const handleMouseMove = (e) => {
    const section = sectionRef.current;

    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    section.style.setProperty("--mx", `${x}px`);
    section.style.setProperty("--my", `${y}px`);
  };
  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0c0322]"
    >
      {/* Aurora Background */}
      <div className="w-full h-full absolute -bottom-2 z-10 hidden md:block">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="md:hidden absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={11.5}
          bendStrength={-0.5}
          interactive
          parallax
          topDirection={-1.0}
          middleDirection={1.0}
          bottomDirection={-1.0}
        />
      </div>
      {/* ── GRID BACKGROUND ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none "
        style={{
          backgroundImage: `
                linear-gradient(rgba(167,139,250,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.07) 1px, transparent 1px)
              `,
          backgroundSize: "48px 48px",
          opacity: 0.2,
        }}
      />

      {/* ── CURSOR GLOW ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(
                600px circle at var(--mx) var(--my),
                rgba(124,58,237,0.13) 0%,
                rgba(79,31,191,0.07) 40%,
                transparent 70%
              )`,
        }}
      />

      {/* ── GRID CURSOR HIGHLIGHT */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(
                200px circle at var(--mx) var(--my),
                rgba(167,139,250,0.06) 0%,
                transparent 100%
              )`,
          backgroundImage: `
                linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)
              `,
          backgroundSize: "48px 48px",
          maskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
        }}
      />
      {/* Soft purple glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-[#6d28d9]/8 blur-[140px] z-[2] pointer-events-none" />
      {/* Soft purple glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-75 rounded-full bg-[#4c1d95]/5 blur-[110px] z-2 pointer-events-none" />
      <div className="absolute inset-0 z-2 bg-linear-to-b from-[#0F032B]/80 via-[#0F032B]/40 to-[#0F032B]/90 pointer-events-none" />

      {/* Top grid line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* LEFT floating card */}
      <div className="absolute left-[4%] top-[50%] max-xl:hidden flex flex-col gap-3">
        <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-2xl px-5 py-4 flex flex-col gap-1">
          <span className="text-white text-2xl font-bold tracking-tight">
            50+
          </span>
          <span className="text-white/35 text-[11px] tracking-widest uppercase">
            Brands Scaled
          </span>
        </div>
        <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-2xl px-5 py-4 flex flex-col gap-1">
          <span className="text-white text-2xl font-bold tracking-tight">
            3.6×
          </span>
          <span className="text-white/35 text-[11px] tracking-widest uppercase">
            Avg. ROI
          </span>
        </div>
      </div>

      {/* RIGHT floating card */}
      <div className="absolute right-[4%] top-[55%] max-xl:hidden flex flex-col gap-3">
        <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-2xl px-5 py-4 flex flex-col gap-1">
          <span className="text-white text-2xl font-bold tracking-tight">
            98%
          </span>
          <span className="text-white/35 text-[11px] tracking-widest uppercase">
            Client Retention
          </span>
        </div>
        <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-2xl px-5 py-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-white/40 text-[11px] tracking-widest uppercase">
            Campaigns Live
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/[0.12] rounded-full px-4 py-1.5 mb-8 bg-white/[0.04] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7B6EF6] shadow-[0_0_6px_#7B6EF6]" />
          <span className="text-white/50 text-[10px] font-semibold tracking-[0.25em] uppercase">
            Digital Growth Partners
          </span>
        </div>

        {/* Heading */}
        <h1
          className="max-w-[800px] w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 4.6vw, 4.2rem)",
            lineHeight: "1.08",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block text-white">Scroll Through the Work.</span>
          <span className="block mt-1 bg-linear-to-r from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
            Feel the Difference.
          </span>
        </h1>

        {/* Divider */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Subtext */}
        <p className="text-white/40 text-[0.92rem] leading-[1.85] max-w-md mb-10">
          We architect growth ecosystems for brands that refuse to settle. At{" "}
          <span className="text-[#9b8fff] font-medium">Unnity</span>, data
          defines our path, and creative fuels our journey.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="https://calendly.com/sayam-unnity/30min">
            <button className="group flex items-center gap-3 bg-white text-[#0a0a1a] hover:bg-[#0a0a1a] hover:text-white border border-transparent hover:border-white/20 px-7 py-3 rounded-full text-sm font-semibold overflow-hidden cursor-pointer transition-all duration-300]">
              Start Your Growth
              <span className="relative w-6 h-6 overflow-hidden rounded-full bg-[#0a0a1a] group-hover:bg-white text-white group-hover:text-[#0a0a1a] shrink-0 transition-colors duration-300">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-7">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-7 transition-transform duration-300 group-hover:translate-x-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>

          {/* Secondary trust line */}
          <span className="text-white/20 text-xs tracking-widest uppercase hidden sm:block">
            No commitment needed
          </span>
        </div>

        {/* Bottom trust badges */}
        <div className="flex items-center gap-6 mt-12 flex-wrap justify-center">
          {["Google Partner", "Meta Certified"].map((badge) => (
            <span
              key={badge}
              className="text-white/20 text-[10px] font-medium tracking-[0.18em] uppercase"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
