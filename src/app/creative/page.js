"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header/page";
import creativeData from "../../data/creativeData.json";
import spotlightData from "../../data/spotlightData.json";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/footer/page";
import Link from "next/link";
import BrandsHero from "@/components/reactBits/HeroSection";

const font = Playfair_Display({ subsets: ["latin"], style: "italic" });

const items = Array.from(
  { length: 28 },
  (_, i) => `/creative/img${i + 1}.webp`,
);
const itemsOnSmscreen = Array.from(
  { length: 14 },
  (_, i) => `/creative/img${i + 1}.webp`,
);

export default function Creative() {
  const [activeTab, setActiveTab] = useState("CUPID CLOTHING");
  const [isPaused, setIsPaused] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  const tabs = [
    "CUPID CLOTHING",
    "UBERLYFE",
    "EDUWORLD",
    "HUBHAWAKS",
    "DRONACHARYA",
  ];

  const tabRefs = useRef({});
  const tabsContainerRef = useRef(null);

  // Measure exact button position → pixel-perfect underline
  useEffect(() => {
    const activeBtn = tabRefs.current[activeTab];
    const container = tabsContainerRef.current;
    if (!activeBtn || !container) return;

    const updateUnderline = () => {
      const btnRect = activeBtn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderline({
        left: btnRect.left - containerRect.left + container.scrollLeft,
        width: btnRect.width,
      });
    };

    updateUnderline();

    const ro = new ResizeObserver(updateUnderline);
    ro.observe(container);
    return () => ro.disconnect();
  }, [activeTab]);

  const filtredData = creativeData.filter((item) => item.title === activeTab);
  const scrollRef = useRef(null);
  const loopData = [...filtredData, ...filtredData];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 1;
    let firstSetWidth = 0;

    const measure = () => {
      const firstCard = container.firstElementChild;
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const marginRight = parseFloat(
        getComputedStyle(firstCard).marginRight || "0",
      );
      firstSetWidth = (cardWidth + marginRight) * filtredData.length;
    };

    const rafId = requestAnimationFrame(() => {
      measure();
      container.scrollLeft = 0;
      animationId = requestAnimationFrame(autoScroll);
    });

    const autoScroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (firstSetWidth > 0 && container.scrollLeft >= firstSetWidth) {
          container.scrollLeft -= firstSetWidth;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(animationId);
    };
  }, [activeTab, isPaused, filtredData.length]);

  return (
    <section>
      <Header />
      <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
        <BrandsHero />

        <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
          <p className=" text-sm ">
            <Link href="/">Home</Link> / Creative
          </p>
          <h1 className="text-white text-2xl md:text-5xl font-semibold">
            Creative Works.
          </h1>
          <p className="text-sm sm:text-balance">
            {" "}
            From scroll-stopping ads to thumb-stopping content, our creatives
            are designed to captivate, engage, and convert.{" "}
          </p>
        </div>
      </div>

      {/* TABS */}
      <section className="px-4 pt-6 sm:pt-16 pb-10 max-w-[1350px] w-full mx-auto">
        <h2 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight">
          Meet the Brands We've Scaled
        </h2>

        {/* Tabs Wrapper */}
        <div className="relative overflow-x-auto no-scrollbar">
          <div
            ref={tabsContainerRef}
            className="relative flex w-max md:w-full md:justify-center border-b border-neutral-200"
          >
            {/* Underline */}
            <span
              className="absolute bottom-0 h-[3px] rounded-full bg-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                left: underline.left,
                width: underline.width,
              }}
            />

            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative pb-4 px-5 text-[11px] md:text-[13px] font-black whitespace-nowrap tracking-[0.15em] uppercase cursor-pointer
                  transition-colors duration-300
                  ${
                    activeTab === tab
                      ? "text-black"
                      : "text-neutral-400 hover:text-neutral-600"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE STRIP */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden px-6 py-10"
          // onTouchStart={() => setIsPaused(true)}
          // onTouchEnd={() => setIsPaused(false)}
        >
          {loopData.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group flex-shrink-0 w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="py-16 bg-neutral-50">
        <h2 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight">
          In the Spotlight
        </h2>

        <div className="grid w-[90%] max-w-[1400px] mx-auto gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {spotlightData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#0f032b]/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center text-white p-6">
                <h4 className="text-xl font-black tracking-tight mb-5">
                  {item.title}
                </h4>

                <div className="grid grid-cols-2 gap-3 w-full text-sm">
                  <div className="bg-white/10 rounded-xl px-3 py-2.5">
                    <p className="font-bold">{item.purchase}</p>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase">
                      Purchase
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-2.5">
                    <p className="font-bold">{item.CAC}</p>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase">
                      CAC
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-2.5">
                    <p className="font-bold">{item.sale}</p>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase">
                      Sale
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl px-3 py-2.5">
                    <p className="font-bold">{item.ROAS}</p>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase">
                      ROAS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}
