// "use client"
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';


// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//   };
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1
//          <div className="left-swiper">
          
//          </div>


//          <div className="right-swiper">
//           <img src="" alt="" />
//          </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }





"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  const caseStudies = [
    {
      tags: ["SHOPIFY", "GOOGLE ADS", "E-COMMERCE"],
      country: "AU AUSTRALIA",
      title: "PowerMowers Australia",
      subtitle: "Nov 2025 – May 2026 · Outdoor Equipment · 6 months",
      stats: [
        { value: "A$1.55M",label: "GROSS SALES" },
        { value: "9,957", label: "TOTAL ORDERS" },
        { value: "9,730",label: "ORDERS FULFILLED" },
        { value: "11.28%", label: "RETURN RATE" },
      ],
      description:
        "Rebuilt Google Ads from scratch — intent-based keyword splits, brand vs. category separation, and a tight negative keyword framework. Drove 39% order growth YoY in a high-AOV segment.",
      image: "/powermover-anls.jpeg",
    },
    {
      tags: ["META ADS","LEAD GENRATION", "BOOK PUBLISHING"],
      country: "IN INDIA",
      title: "HubHawks",
      subtitle: "Mar 2026 – May 2026 · Book Publishing Platform · 3 months",
      stats: [
        { value: "$6.2K",label: "TOTAL AD SPEND" },
        { value: "9,058",label: "TOTAL LEADS" },
        { value: "$0.69",label: "COST PER LEAD" },
        { value: "1.50%",label: "AVERAGE CTR" },
      ],
      description:
        "Ran multi-vertical Meta lead gen across 5 publishing divisions — NuVoice Press, Foster Reads, The Write Agency, Penguin Book Festival, and Book Fair activations. Built separate ABO ad sets per vertical with LAL, interest, and static audience stacks. Drove 9,000+ leads at under $0.70 CPL across a 3-month window.",
      image: "/hubhawks data.png",
    },
    // {
    //   tags: ["SHOPIFY", "SEO", "E-COMMERCE"],
    //   country: "UK UNITED KINGDOM",
    //   title: "Urban Home Decor",
    //   subtitle: "Feb 2026 – May 2026 · Home Decor · 4 months",
    //   stats: [
    //     { value: "£620K", growth: "↑24%", label: "GROSS SALES" },
    //     { value: "6,410", growth: "↑31%", label: "TOTAL ORDERS" },
    //     { value: "6,025", growth: "↑27%", label: "ORDERS FULFILLED" },
    //     { value: "6.45%", growth: "↓9%", label: "RETURN RATE" },
    //   ],
    //   description:
    //     "Optimized collection pages, improved product filtering, fixed layout issues, and created SEO-focused product page sections.",
    //   image: "/case-image-3.png",
    // },
    // {
    //   tags: ["SHOPIFY", "CRO", "BEAUTY"],
    //   country: "US UNITED STATES",
    //   title: "Glow Beauty Store",
    //   subtitle: "Mar 2026 – May 2026 · Beauty Products · 3 months",
    //   stats: [
    //     { value: "$890K", growth: "↑36%", label: "GROSS SALES" },
    //     { value: "8,920", growth: "↑44%", label: "TOTAL ORDERS" },
    //     { value: "8,510", growth: "↑40%", label: "ORDERS FULFILLED" },
    //     { value: "5.22%", growth: "↓14%", label: "RETURN RATE" },
    //   ],
    //   description:
    //     "Created high-converting PDP sections, added trust badges, improved mobile layout, and optimized product media loading.",
    //   image: "/case-image-4.png",
    // },
    // {
    //   tags: ["SHOPIFY", "GOOGLE ADS", "LUXURY"],
    //   country: "UAE DUBAI",
    //   title: "Royal Jewelry Dubai",
    //   subtitle: "Dec 2025 – May 2026 · Jewelry Store · 6 months",
    //   stats: [
    //     { value: "AED 2.1M", growth: "↑42%", label: "GROSS SALES" },
    //     { value: "3,870", growth: "↑26%", label: "TOTAL ORDERS" },
    //     { value: "3,620", growth: "↑29%", label: "ORDERS FULFILLED" },
    //     { value: "4.18%", growth: "↓11%", label: "RETURN RATE" },
    //   ],
    //   description:
    //     "Built premium product detail sections, improved variant selection UI, added custom jewelry blocks, and optimized checkout flow.",
    //   image: "/case-image-5.png",
    // },
  ];

  return (
    <section className="case-study-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination,]}
        className="mySwiper"
      >
        {caseStudies.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="case-card">
              {/* Left Content */}
              <div className="case-left">
                <div className="tag-row">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={tagIndex === 2 ? "tag green" : "tag"}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="country-tag">{item.country}</div>

                <h2>{item.title}</h2>

                <p className="sub-title">{item.subtitle}</p>

                <div className="divider"></div>

                <div className="stats-grid">
                  {item.stats.map((stat, statIndex) => (
                    <div className="stat-box" key={statIndex}>
                      <h3>
                        {stat.value} <span>{stat.growth}</span>
                      </h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="description">{item.description}</p>

                {/* <div className="bottom-row">
                  <a href="#" className="case-link">
                    View case study →
                  </a>

                  <span className="live-data">
                    <span></span> LIVE SHOPIFY DATA
                  </span>
                </div> */}
              </div>

              {/* Right Image Only */}
              <div className="case-right">
                <img
                  src={item.image}
                  alt={item.title}
                  className="case-image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}