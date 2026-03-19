"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageAccordion.module.css";

const items = [
  {
    id: 1,
    title: "Understanding Your Real Need",
    description:
      "Before launching anything, we analyze whether your brand needs lead volume or lead quality. This clarity ensures your campaigns attract the right audience instead of wasting budget.",
    image: "/images/marketing_team_banner.png",
  },
  {
    id: 2,
    title: "Smart Form Strategy",
    description:
      "Based on your requirement, we design conversion forms:\n• Short forms for scale and faster conversions\n• Long forms for high-intent, filtered leads\nThis improves efficiency and ensures better qualification.",
    image: "/industry_furnishing_1764314743864.png",
  },
  {
    id: 3,
    title: "Lead Generation Goes Beyond Ads",
    description:
      "Running campaigns is just a fraction of lead generation. The biggest difference lies in how fast you follow up. A strong follow-up process drives more conversions than ad spend.",
    image: "/industry_pharmacy_1764314726665.png",
  },
];

const itemsTwo = [
  {
    id: 1,
    title: "Lead Tracking and Categorization",
    description:
      "We help brands maintain a structured lead sheet where every lead is tagged as: Cold, Warm, Hot, Did Not Pick, Call Back, or Follow-Up Required. This organization improves clarity and sales efficiency.",
    image: "/images/marketing_team_banner.png",
  },
  {
    id: 2,
    title: "Aggressive Lead Follow-Up Support",
    description:
      "We push teams to respond faster because shorter response times result in higher conversion rates. Quicker replies make ad budgets more effective.",
    image: "/industry_furnishing_1764314743864.png",
  },
  {
    id: 3,
    title: "Continuous Lead Quality Monitoring",
    description:
      "We do not disappear after campaign setup. We continuously review lead quality with you, adjust targeting, improve landing forms, and refine audiences — making performance stronger week after week.",
    image: "/industry_pharmacy_1764314726665.png",
  },
];

const AccordionBlock = ({
  items,
  activeId,
  setActiveId,
  title,
  subtitle,
  image,
  reverse,
}) => {
  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
      {/* Image Side */}
      <div className={styles.imageSide}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.imageOverlay} />
        </div>
        {/* Floating badge */}
        <div className={styles.floatingBadge}>
          <span className={styles.badgeDot} />
          Active Campaign
        </div>
      </div>

      {/* Accordion Side */}
      <div className={styles.accordionSide}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Methodology</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ""}`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => setActiveId(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(item.id)}
                aria-expanded={activeId === item.id}
              >
                <div className={styles.headerLeft}>
                  <span className={styles.itemNumber}>0{index + 1}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
                <span
                  className={`${styles.icon} ${activeId === item.id ? styles.iconOpen : ""}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>

              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    className={styles.accordionContent}
                  >
                    <p className={styles.description}>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageAccordion = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeId2, setActiveId2] = useState(1);

  return (
    <section className={styles.section}>
      <AccordionBlock
        items={items}
        activeId={activeId}
        setActiveId={setActiveId}
        title="Our Lead Generation"
        subtitle="A holistic methodology designed to deliver exceptional results at every stage of the digital journey."
        image="/images/marketing_team_banner.png"
        reverse={false}
      />

      <div className={styles.sectionDivider}>
        <span />
      </div>

      <AccordionBlock
        items={itemsTwo}
        activeId={activeId2}
        setActiveId={setActiveId2}
        title="Our eCommerce Approach"
        subtitle="Precision execution ensuring timely delivery and highest quality standards."
        image="/industry_furnishing_1764314743864.png"
        reverse={true}
      />
    </section>
  );
};

export default ImageAccordion;
