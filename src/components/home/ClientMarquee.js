"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Smart Saver", src: "/smart_saver.png" },
  { name: "Nuvoice", src: "/NUVOICE.png" },
  { name: "HubHawks", src: "/hub1.png" },
  { name: "Nira", src: "/nira.png" },
  { name: "Clove", src: "/clove.png" },
  { name: "Cozy Cabz", src: "/COZYCABS1.jpg" },
  { name: "E-Travel", src: "/e-travel.avif" },
  { name: "ISU", src: "/isu1.png" },
  { name: "Kapur", src: "/kapur1.png" },
  { name: "Hardoll", src: "/hardoll.png" },
  { name: "Madverse", src: "/madverse.png" },
  { name: "Uberlyfe", src: "/uberlyfe1.png" },
  { name: "Cupid", src: "/cupid.webp" },
  { name: "The Binge Town", src: "/the_binge_town.png" },
  { name: "Dronacharya", src: "/DRONACHARYA1.png" },
  { name: "Woolen House", src: "/woolen_house1.png" },
  { name: "Opine Stores", src: "/opine_stores1.png" },
  { name: "Empire", src: "/empire1.png" },
  { name: "The Core", src: "/the_core1.png" },
  { name: "Don Miller", src: "/donmiller1.png" },
  { name: "Polki", src: "/polki1.png" },
  { name: "DianApps", src: "/dianapps1.png" },
  { name: "Woila Silver", src: "/Woila-silver.jpeg" },
];

export default function ClientMarquee() {
  return (
    <section
      aria-label="Brands we work with"
      className="relative overflow-hidden  py-8 sm:py-9"
    >
      <p className="mb-6 px-4 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-[#ADA9D6] sm:text-xs">
        Trusted by brands across India & Australia
      </p>

      <ul className="sr-only">
        {LOGOS.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex w-max will-change-transform"
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
            >
              {LOGOS.map((logo) => (
                <img
                  key={`${copy}-${logo.name}`}
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="h-8 w-auto shrink-0 object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-10"
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}