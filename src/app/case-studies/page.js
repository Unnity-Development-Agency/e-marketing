"use client";
import React from "react";
import Link from "next/link";
import "./case-studies.css";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";
import Image from "next/image";
import BrandsHero from "@/components/reactBits/HeroSection";

const caseStudies = [
  {
    id: "dentist",
    number: "01",
    title: "Case Study of Dentist",
    excerpt:
      "Welcome to a comprehensive overview of transforming a large dentistry chain's digital marketing strategy....",
    image: "/step-1.avif",
    href: "/case-study-internals/dentist",
  },
  {
    id: "home-appliances",
    number: "02",
    title: "Case Study of Home Appliances",
    excerpt:
      "Mission to dominate the digital advertising space through Google Ads. The journey began with scaling efforts....",
    image: "/step-2.avif",
    href: "/case-study-internals/home-appliance",
  },
  {
    id: "e-sim",
    number: "03",
    title: "Case Study of E-Sim",
    excerpt:
      "Brand E-Travelsim's journey with Google Ads is a testament to strategic scaling and optimization...",
    image: "/step-3.avif",
    href: "/case-study-internals/travel",
  },
  // ➜ Add more items here as needed
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <section className="cs-page">
        <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
          <BrandsHero />

          <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
            <p className=" text-sm ">
              <Link href="/">Home</Link> / Case Studies
            </p>
            <h1 className="text-white text-2xl md:text-5xl font-semibold">
              Case Studies of Brands.
            </h1>
            <p className="text-sm sm:text-balance">
              {" "}
              Deep dives across industries - growth stories, channel mixes, and
              learnings.
            </p>
          </div>
        </div>
        <div className="cs-container">
          <header className="cs-header">
            <h1>All Case Studies</h1>
            <p className="cs-sub">
              Deep dives across industries growth stories, channel mixes, and
              learnings.
            </p>
          </header>

          <div className="cs-grid">
            {caseStudies.map((item) => (
              <article className="cs-card" key={item.id}>
                <div className="cs-badge">{item.number}</div>

                <h3 className="cs-title">{item.title}</h3>
                <p className="cs-excerpt">{item.excerpt}</p>

                <div className="cs-media">
                  {/* <img src={item.image} alt={item.title} loading="lazy" /> */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="cs-actions">
                  <Link href={item.href} className="cs-link">
                    Read Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
