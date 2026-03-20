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
    textColor: "#ffffff",
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
    textColor: "#ffffff",
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
    textColor: "#ffffff",
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
    textColor: "#ffffff",
  },
];

const Card = ({ project, index, total, range, targetScale, progress }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-dvh flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="w-full max-w-[1300px] h-[600px] rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden origin-top
          max-lg:h-auto max-lg:min-h-[600px]"
        style={{
          backgroundColor: project.color,
          color: project.textColor,
          scale: index === total - 1 ? 1 : scale,
          top: `calc(10vh + ${index * 25}px)`,
        }}
      >
        <div className="flex w-full h-full max-lg:flex-col">
          {/* Image side */}
          <div className="w-[45%] h-full p-8 max-lg:w-full max-lg:h-[300px] max-lg:pb-0 max-lg:px-6 max-lg:pt-6">
            <div className="w-full h-full rounded-[2rem] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="w-[55%] px-16 py-16 flex flex-col justify-center max-lg:w-full max-lg:px-8 max-lg:py-8">
            {/* ID badge */}
            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mb-3">
              {project.id}
            </span>

            <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-6 max-lg:text-[2rem]">
              {project.name}
            </h3>

            <p className="text-[1.05rem] leading-[1.65] opacity-90 mb-8">
              {project.desc}
            </p>

            <ul className="space-y-3 p-0 list-none">
              {project.points.map((point, i) => (
                <li
                  key={i}
                  className="text-[0.95rem] leading-[1.55] opacity-80 flex items-start gap-2"
                >
                  <span className="mt-[3px] shrink-0 opacity-60">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
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
    <section ref={containerRef} className="py-20 bg-[#e2e8f0] relative">
      {/* Header */}
      <div className="px-4 text-center max-w-3xl mx-auto mb-4">
        <h2 className="text-[3rem] font-bold mb-6 text-[#1d1d1f] leading-[1.1] max-md:text-[2rem]">
          Industry-Agnostic Performance Marketing Experience
        </h2>
        <p className="text-[1.2rem] text-[#86868b] leading-[1.6]">
          We don't believe in one-size-fits-all advertising. Every industry
          behaves differently—buyer intent, seasonality, sales cycles, and
          platforms all change. Our strength lies in understanding these nuances
          and building strategies that scale sustainably.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col w-full relative pb-[10vh]">
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
