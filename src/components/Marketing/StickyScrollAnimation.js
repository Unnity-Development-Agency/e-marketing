"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "Lawn Mower",
    desc: "We've managed monthly ad spends exceeding $500,000 for one of Australia's largest lawn mower brands. This category is highly season-driven and requires deep market understanding.",
    points: [
      "Mapping geo-specific demand patterns before scaling campaigns",
      "Aligning ad intensity with seasonality and regional weather cycles",
      "Leveraging Google Shopping feeds as the primary growth lever for search-driven demand",
      "Structuring campaigns to scale during peak demand without hurting efficiency",
    ],
    image: "/brand-img3.png",
    color: "#2d5b88",
    accent: "#5b9bd5",
  },
  {
    id: "02",
    name: "Apparel",
    desc: "Apparel advertising isn't about short-term sales spikes. It's about building a profitable, repeat-purchase brand.",
    points: [
      "Building long-term, sustainable growth—not just ROAS chasing",
      "Strong emphasis on retention and repeat customers",
      "Adjusting ad strategy based on market demand shifts and seasonality",
      "Real-time inventory availability on landing pages",
    ],
    image: "/brand-img1.png",
    color: "#191a3a",
    accent: "#6c6cff",
  },
  {
    id: "03",
    name: "Drone Category",
    desc: "With hands-on experience working with an Israel-based drone brand, we understand the complexity and learning curve involved in tech-heavy products.",
    points: [
      "ROAS close to 10 at an ad spend of ₹1,00,000",
      "High-quality leads generated at a ₹100–₹120 CPL",
      "Lead quality improved by focusing on feature-led communication",
      "Drone marketing requires experimentation backed by understanding—not guesswork.",
    ],
    image: "/brand-img2.png",
    color: "#23234d",
    accent: "#8b8bff",
  },
  {
    id: "04",
    name: "Book Publishing House",
    desc: "We've worked with a 360° book publishing house in India, partnered with Penguin Books, supporting both lead generation and operational scalability.",
    points: [
      "Helping scale their business, enabling team growth from 30 to 60 members",
      "Running aggressive creative testing across six different publishing services",
      "Building a structured lead qualification and distribution system",
      "Reduced lead cost from ₹250 to ₹50 while maintaining quality",
    ],
    image: "/brand-img4.png",
    color: "#111827",
    accent: "#6b7280",
  },
];

const Card = ({ project, index, total, range, targetScale, progress }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-dvh flex items-center justify-center sticky top-0"
      style={{ backgroundColor: project.color }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        className="w-full max-w-[1300px] mx-6 overflow-hidden origin-top max-lg:h-auto"
        style={{
          scale: index === total - 1 ? 1 : scale,
          top: `calc(10vh + ${index * 25}px)`,
        }}
      >
        <div
          className="flex w-full h-[520px] max-lg:flex-col max-lg:h-auto rounded-2xl overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          {/* ── Image side ── */}
          <div className="w-[42%] h-full p-5 max-lg:w-full max-lg:h-64 max-lg:p-4 shrink-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* ID pill */}
              <div className="absolute top-4 left-4">
                <span className="text-[10.5px] font-black tracking-[0.25em] uppercase text-white/60 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                  {project.id}
                </span>
              </div>

              {/* Name */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-[1.75rem] max-lg:text-[1.35rem] font-black leading-[1.05] text-white tracking-[-0.025em]">
                  {project.name}
                </h3>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="flex-1 flex flex-col justify-between px-10 py-10 max-lg:px-5 max-lg:py-5 relative overflow-hidden">
            {/* Watermark */}
            <span className="absolute -right-4 -top-6 text-[10rem] font-black leading-none select-none pointer-events-none text-white/[0.04]">
              {project.id}
            </span>

            {/* Description block */}
            <div>
              <div
                className="w-9 h-[2px] rounded-full mb-5 opacity-50"
                style={{ backgroundColor: project.accent }}
              />
              <p className="text-[1.05rem] leading-[1.88] text-white/70 max-w-md tracking-[-0.01em] font-normal">
                {project.desc}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/8 my-5" />

            {/* Points */}
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-3.5 block">
                Key Highlights
              </span>

              <ul className="space-y-2.5">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                      style={{ backgroundColor: project.accent, opacity: 0.65 }}
                    />
                    <span className="text-[0.875rem] leading-[1.7] text-white/60 tracking-[-0.005em]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/8">
              <div className="flex gap-1.5 items-center">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className="h-[2px] rounded-full transition-all duration-500"
                    style={{
                      width: i === index ? "22px" : "7px",
                      backgroundColor:
                        i === index ? project.accent : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
              <span className="text-[10.5px] font-bold tracking-widest text-white/25">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StickyScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="pt-20 bg-[#e2e8f0] relative">
      {/* Header */}
      <div className="px-4 text-center max-w-3xl mx-auto pb-10">
        <h2 className="text-[3rem] font-bold mb-6 text-[#1d1d1f] leading-[1.1] max-md:text-[2rem] tracking-[-0.03em]">
          Industry-Agnostic Performance Marketing Experience
        </h2>
        <p className="text-[1.05rem] text-[#86868b] leading-[1.75] tracking-[-0.01em]">
          We don't believe in one-size-fits-all advertising. Every industry
          behaves differently—buyer intent, seasonality, sales cycles, and
          platforms all change. Our strength lies in understanding these nuances
          and building strategies that scale sustainably.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col w-full relative">
        {projects.map((project, index) => (
          <Card
            key={index}
            project={project}
            index={index}
            total={projects.length}
            range={[index * 0.25, 1]}
            targetScale={1 - (projects.length - index) * 0.05}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default StickyScrollAnimation;
