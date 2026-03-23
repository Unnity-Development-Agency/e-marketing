"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Antigravity from "../reactBits/Antigravity";
import FloatingLines from "../reactBits/FloatingLines";

const Hero = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    section.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    section.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1C0A41" }}
    >
      {/* Antigravity — desktop */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
        <Antigravity
          count={320}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.35}
          waveAmplitude={1}
          particleSize={1.1}
          lerpSpeed={0.05}
          color="#8B5CF6"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* FloatingLines — mobile */}
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

      {/* Grid bg */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Grid cursor highlight */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.14) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          maskImage: `radial-gradient(260px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(260px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
        }}
      />

      {/* Cursor glow */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(500px circle at var(--mx) var(--my), rgba(109,40,217,0.14) 0%, rgba(76,29,149,0.07) 45%, transparent 70%)`,
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[380px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(76,29,149,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 85% 75% at 50% 50%, transparent 30%, rgba(28,10,65,0.75) 100%)`,
        }}
      />

      {/* Edge lines */}
      <div
        className="absolute top-0 inset-x-0 h-px z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(139,92,246,0.15), transparent)",
        }}
      />

      {/* LEFT glass cards */}
      <div className="absolute left-[3%] top-[50%] -translate-y-1/2 max-xl:hidden flex flex-col gap-3 z-[6]">
        {[
          { num: "50+", label: "Brands Scaled" },
          { num: "3.6×", label: "Avg. ROI" },
        ].map((c, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 px-5 py-4 rounded-2xl backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <span className="text-white text-2xl font-bold tracking-tight">
              {c.num}
            </span>
            <span
              className="text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              {c.label}
            </span>
          </div>
        ))}
      </div>

      {/* RIGHT glass cards */}
      <div className="absolute right-[3%] top-[50%] -translate-y-1/2 max-xl:hidden flex flex-col gap-3 z-[6]">
        <div
          className="flex flex-col gap-1 px-5 py-4 rounded-2xl backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <span className="text-white text-2xl font-bold tracking-tight">
            98%
          </span>
          <span
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            Client Retention
          </span>
        </div>
        <div
          className="flex items-center gap-3 px-5 py-4 rounded-2xl backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
          <span
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Campaigns Live
          </span>
        </div>
      </div>

      {/* Main Content — pt-20 navbar ke liye space */}
      <div className="relative z-[7] flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full pt-20 pb-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#8B5CF6", boxShadow: "0 0 6px #8B5CF6" }}
          />
          <span
            className="text-[10px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Digital Growth Partners
          </span>
        </div>

        {/* Heading — same as original clamp */}
        <h1
          className="mb-2 max-w-[800px] w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.2rem, 4.6vw, 4.2rem)",
            lineHeight: "1.08",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="block text-white">Scroll Through the Work.</span>
          <span
            className="block mt-1"
            style={{
              background:
                "linear-gradient(135deg, #e0d7ff 0%, #a78bfa 45%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Feel the Difference.
          </span>
        </h1>

        {/* Divider */}
        <div
          className="w-12 h-px my-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
          }}
        />

        {/* Subtext — same as original */}
        <p
          className="text-balance leading-[1.85] max-w-[600px] mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
            color: "rgba(255,255,255,0.40)",
          }}
        >
          We architect growth ecosystems for brands that refuse to settle. At{" "}
          <span style={{ color: "#a78bfa", fontWeight: 500 }}>Unnity</span>,
          data defines our path, and creative fuels our journey.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="https://calendly.com/sayam-unnity/30min">
            <button className="group flex items-center gap-3 bg-white text-[#0f032b] hover:bg-[#0f032b] hover:text-white hover:border hover:border-white px-6 py-2.5 rounded-full text-sm font-semibold overflow-hidden cursor-pointer transition-all duration-200">
              Start Your Growth
              <span className="relative w-7 h-7 overflow-hidden rounded-full bg-[#0f032b] text-white shrink-0">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#0f032b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>

          <span
            className="text-xs tracking-widest uppercase hidden sm:block"
            style={{ color: "rgba(255,255,255,0.20)" }}
          >
            No commitment needed
          </span>
        </div>

        {/* Trust badges */}
        <div className="flex items-center gap-6 mt-10 flex-wrap justify-center">
          {["Google Partner", "Meta Certified"].map((badge) => (
            <span
              key={badge}
              className="text-[10px] font-medium tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.18)" }}
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
