"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProportionalServiceGrid.module.css";

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

// Pixel positions for a 400×400 stage
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
      className={styles.shapeCard}
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
        className={`${styles.shapeInner} ${isActive ? styles.shapeActive : ""}`}
      >
        <svg
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.shapeSvg}
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
          className={`${styles.shapeLabel} ${isActive ? styles.shapeLabelActive : ""}`}
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
    <section className={styles.section}>
      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Case Studies</p>
        <h2 className={styles.sectionTitle}>Results That Speak</h2>
        <p className={styles.sectionSub}>
          Real campaigns, real numbers. Click any brand to explore the story.
        </p>
      </div>

      {/* ── Mobile tab bar (above content on mobile, hidden on desktop) ── */}
      <div className={styles.tabBar}>
        {services.map((s) => (
          <button
            key={s.id}
            className={`${styles.tab} ${activeId === s.id ? styles.tabActive : ""}`}
            onClick={() => setActiveId(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className={styles.layout}>
        {/* ── Left: Tumbling grid ── */}
        <div className={styles.stageWrap}>
          <div className={styles.stage}>
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

        {/* ── Right: Content panel ── */}
        <div className={styles.contentWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className={styles.contentPanel}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className={styles.badge}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.08 }}
              >
                {activeService.label}
              </motion.div>

              <h2 className={styles.contentTitle}>
                {activeService.content.title}
              </h2>
              <p className={styles.contentDesc}>
                {activeService.content.description}
              </p>

              <div className={styles.groups}>
                {activeService.content.groups.map((group, i) => (
                  <motion.div
                    key={i}
                    className={styles.group}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.1 }}
                  >
                    <h4 className={styles.groupTitle}>{group.title}</h4>
                    <ul className={styles.groupList}>
                      {group.items.map((item, j) => (
                        <li key={j} className={styles.groupItem}>
                          <span className={styles.bullet} />
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
