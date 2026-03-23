"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "powermowers",
    label: "POWERMOWERS",
    color: "#0b194b",
    content: {
      title: "eCommerce Growth",
      description: "Scaled from $50k to $160k monthly sales with 30x ROAS",
      groups: [
        {
          title: "THE CHALLENGE",
          items: [
            "Stuck at $50,000/month sales",
            "Needed strategic scaling",
            "ROAS optimization required",
          ],
        },
        {
          title: "THE RESULTS",
          items: [
            "$160k Monthly Sales",
            "30x ROAS on Google Ads",
            "40% Revenue Growth MoM",
          ],
        },
      ],
    },
  },
  {
    id: "dronacharya",
    label: "DRONACHARYA",
    color: "#0b194b",
    content: {
      title: "High-Ticket Lead Gen",
      description: "Generated Rs. 6 Lakhs from Rs. 2 Lakhs spend with 3x ROAS",
      groups: [
        {
          title: "THE CHALLENGE",
          items: [
            "High-ticket items (₹15k-50k)",
            "Trust building required",
            "Qualified lead generation",
          ],
        },
        {
          title: "THE RESULTS",
          items: [
            "3x ROAS Achieved",
            "High-Intent Leads",
            "Premium Brand Positioning",
          ],
        },
      ],
    },
  },
  {
    id: "hubhawks",
    label: "HUBHAWKS",
    color: "#0b194b",
    content: {
      title: "Service Aggregator",
      description: "Reduced CPL by 90% from Rs. 250 to Rs. 30–50",
      groups: [
        {
          title: "THE CHALLENGE",
          items: [
            "High Cost Per Lead",
            "Irrelevant inquiries",
            "Budget inefficiency",
          ],
        },
        {
          title: "THE RESULTS",
          items: [
            "90% CPL Reduction",
            "₹30-50 Average CPL",
            "Zero Quality Drop",
          ],
        },
      ],
    },
  },
  {
    id: "cupid",
    label: "CUPID",
    color: "#0b194b",
    content: {
      title: "Fashion & Apparel",
      description: "₹1.72 Cr sales in 12 months, scaled from ₹15k/month",
      groups: [
        {
          title: "THE CHALLENGE",
          items: [
            "₹15k-20k monthly sales",
            "Saturated market",
            "Needed differentiation",
          ],
        },
        {
          title: "THE RESULTS",
          items: ["₹1.72 Cr Annual Sales", "55% Returning Rate", "3.5x ROAS"],
        },
      ],
    },
  },
  {
    id: "uberlyfe",
    label: "UBERLYFE",
    color: "#0b194b",
    content: {
      title: "Home Furnishing",
      description: "₹2.17 Cr revenue in 6 months with 11.27 ROAS",
      groups: [
        {
          title: "THE CHALLENGE",
          items: [
            "High-ticket furniture",
            "Ad fatigue issues",
            "Seasonal challenges",
          ],
        },
        {
          title: "THE RESULTS",
          items: ["₹2.17 Cr in 6 Months", "11.27 ROAS", "71% Sales Growth"],
        },
      ],
    },
  },
];

const CARD_POSITIONS = {
  powermowers: {
    powermowers: "center",
    dronacharya: "tr",
    hubhawks: "bl",
    cupid: "br",
    uberlyfe: "tl",
  },
  dronacharya: {
    powermowers: "tl",
    dronacharya: "center",
    hubhawks: "tr",
    cupid: "bl",
    uberlyfe: "br",
  },
  hubhawks: {
    powermowers: "br",
    dronacharya: "bl",
    hubhawks: "center",
    cupid: "tr",
    uberlyfe: "tl",
  },
  cupid: {
    powermowers: "tr",
    dronacharya: "tl",
    hubhawks: "br",
    cupid: "center",
    uberlyfe: "bl",
  },
  uberlyfe: {
    powermowers: "bl",
    dronacharya: "br",
    hubhawks: "tl",
    cupid: "tr",
    uberlyfe: "center",
  },
};

const ROTATIONS = { tl: -8, tr: 8, bl: -10, br: 12, center: 0 };
const COORDS = {
  center: { x: 100, y: 100 },
  tl: { x: -10, y: -10 },
  tr: { x: 215, y: -10 },
  bl: { x: -10, y: 215 },
  br: { x: 215, y: 215 },
};

const ShapeCard = ({ service, position, isActive, onClick }) => {
  const coords = COORDS[position] ?? COORDS.tl;
  const rotate = ROTATIONS[position] ?? 0;
  const scale = position === "center" ? 1 : 0.72;

  return (
    <motion.div
      className="absolute w-[180px] h-[180px] cursor-pointer origin-center"
      onClick={onClick}
      animate={{
        x: coords.x,
        y: coords.y,
        scale,
        rotate,
        zIndex: isActive ? 20 : 1,
      }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: scale * 1.06 }}
    >
      <div
        className={`relative w-full h-full transition-all duration-300 ${isActive ? "[filter:drop-shadow(0_20px_40px_rgba(11,25,75,0.22))]" : "[filter:drop-shadow(0_4px_10px_rgba(0,0,0,0.08))]"}`}
      >
        <svg
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient
              id={`g-${service.id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0b194b" />
              <stop offset="100%" stopColor="#728def" />
            </linearGradient>
          </defs>
          <path
            d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
            fill={isActive ? `url(#g-${service.id})` : "#ffffff"}
            stroke={isActive ? "none" : "#e0e0e0"}
            strokeWidth="2"
          />
        </svg>
        <span
          className={`absolute bottom-[38px] left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap font-bold tracking-[1.5px] transition-all duration-300
          ${isActive ? "text-white text-[13px]" : "text-[#aaa] text-[11px]"}`}
        >
          {service.label}
        </span>
      </div>
    </motion.div>
  );
};

const ProportionalServiceGrid = () => {
  const [activeId, setActiveId] = useState("powermowers");
  const activeService = services.find((s) => s.id === activeId);
  const positions = CARD_POSITIONS[activeId];

  return (
    <section className="py-24 pb-20 bg-gradient-to-br from-white to-[#f4f6ff] overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-[600px] mx-auto mb-16 px-6 max-[860px]:mb-8 max-sm:mb-7 max-sm:px-4">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#0b194b] bg-[#0b194b]/8 px-[14px] py-1.5 rounded-full mb-4">
          Case Studies
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#111] mb-3">
          Results That Speak
        </h2>
        <p className="text-base text-[#777] leading-[1.65]">
          Real campaigns, real numbers. Click any brand to explore the story.
        </p>
      </div>

      {/* Mobile tab bar — hidden on desktop */}
      <div className="hidden max-[860px]:flex overflow-x-auto gap-2 px-4 pb-6 scrollbar-none [-webkit-overflow-scrolling:touch]">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`shrink-0 px-4 py-2 rounded-full border text-[10px] font-bold tracking-[0.1em] uppercase transition-all duration-250 cursor-pointer
              ${
                activeId === s.id
                  ? "bg-gradient-to-br from-[#0b194b] to-[#728def] border-transparent text-white"
                  : "bg-white border-[#e0e0e0] text-[#888] hover:border-[#0b194b] hover:text-[#0b194b]"
              }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div
        className="max-w-[1100px] mx-auto px-10 grid grid-cols-2 gap-16 items-center
        max-[1100px]:grid-cols-[380px_1fr] max-[1100px]:gap-10 max-[1100px]:px-7
        max-[860px]:grid-cols-1 max-[860px]:gap-0 max-[860px]:px-6 max-[860px]:pb-10
        max-sm:px-4"
      >
        {/* Stage — hidden on mobile */}
        <div className="flex items-center justify-center max-[860px]:hidden">
          <div className="relative w-[400px] h-[400px] shrink-0 max-[1100px]:w-[340px] max-[1100px]:h-[340px]">
            {services.map((service) => (
              <ShapeCard
                key={service.id}
                service={service}
                position={positions[service.id]}
                isActive={activeId === service.id}
                onClick={() => setActiveId(service.id)}
              />
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="flex items-center min-h-[400px] max-[860px]:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="w-full max-w-[520px] max-[860px]:max-w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.08 }}
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-br from-[#0b194b] to-[#728def]
                  text-white text-[11px] font-bold tracking-[1.5px] uppercase mb-6
                  max-sm:bg-none max-sm:bg-[#0b194b]/8 max-sm:text-[#0b194b] max-sm:text-center max-sm:block max-sm:text-[10px] max-sm:px-3.5 max-sm:py-1.5 max-sm:mb-4"
              >
                {activeService.label}
              </motion.div>

              {/* Title */}
              <h2
                className="text-[clamp(1.8rem,3vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3
                bg-gradient-to-br from-[#0b194b] to-[#728def] bg-clip-text text-transparent
                max-[860px]:text-[2rem] max-sm:text-[1.7rem]"
              >
                {activeService.content.title}
              </h2>

              {/* Description */}
              <p
                className="text-[17px] text-[#666] leading-[1.7] mb-11 font-normal
                max-[860px]:text-base max-[860px]:mb-8 max-sm:text-[15px] max-sm:mb-6"
              >
                {activeService.content.description}
              </p>

              {/* Groups */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-[860px]:gap-x-7 max-[860px]:gap-y-6 max-sm:gap-x-4 max-sm:gap-y-5 max-[380px]:grid-cols-1">
                {activeService.content.groups.map((group, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.1 }}
                  >
                    <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#aaa] mb-3.5">
                      {group.title}
                    </h4>
                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-[15px] text-[#333] leading-[1.5] font-[450] max-sm:text-[14px]"
                        >
                          <span className="shrink-0 w-[5px] h-[5px] rounded-full mt-2 bg-gradient-to-br from-[#0b194b] to-[#728def]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProportionalServiceGrid;
