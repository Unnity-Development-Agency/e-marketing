"use client";
import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import BrandsHero from "@/components/reactBits/HeroSection";
import Link from "next/link";
// import React from "react";
import React, { useEffect } from "react";

const Brands = () => {
  useEffect(() => {
    document.title = "Brands That Trust Unnity";
  }, []);
  const B2BPartners = [
    {
      id: 1,
      name: "ADPLEY",
      logo: "/brands/ADPL.png",
    },
    {
      id: 2,
      name: "CLOVE.png",
      logo: "/brands/clove.png",
    },
    {
      id: 3,
      name: "Daurban",
      logo: "/brands/daurban.png",
    },
    {
      id: 4,
      name: "DRONACHARYA",
      logo: "/brands/DRONACHARYA.png",
    },
    {
      id: 5,
      name: "Evara",
      logo: "/brands/evara.png",
    },
    {
      id: 6,
      name: "LAWOCTPOUS",
      logo: "/brands/LAWOCTPOUS.png",
    },
    // {
    //   id: 7,
    //   name: "Mystara",
    //   logo: "/brands/mystara_hotels.png",
    // },
    {
      id: 8,
      name: "The Binge Town",
      logo: "/brands/the_binge_town.png",
    },
  ];

  const AllPartners = [
    {
      id: 1,
      name: "AQUA_ESASY",
      logo: "/brands/AQUA_ESASY.png",
    },
    {
      id: 2,
      name: "AURAVE",
      logo: "/brands/AURAVE.png",
    },
    {
      id: 3,
      name: "BLINKLE",
      logo: "/brands/BLINKLE_.png",
    },
    {
      id: 4,
      name: "BSEDU WORLD",
      logo: "/brands/BSEDU_WORLD.png",
    },
    {
      id: 5,
      name: "COMFORTO",
      logo: "/brands/COMFORTO.png",
    },
    {
      id: 6,
      name: "IYURVEDA",
      logo: "/brands/IYURVEDA.png",
    },
    {
      id: 7,
      name: "JAGTE REHO",
      logo: "/brands/JAGTE_REHO.png",
    },
    {
      id: 8,
      name: "KEEP HEALTHY",
      logo: "/brands/KEEP_HEALTHY.png",
    },
    {
      id: 9,
      name: "KURJA LAW",
      logo: "/brands/KURJA_LAW.png",
    },
    {
      id: 10,
      name: "Maclap Itcare",
      logo: "/maclap.png",
    },
    {
      id: 11,
      name: "Mireads",
      logo: "/brands/mireads.png",
    },
    {
      id: 12,
      name: "Mowglis",
      logo: "/brands/mowglis.png",
    },
    {
      id: 13,
      name: "OrChid Bloom",
      logo: "/brands/orchid_bloom.png",
    },
    {
      id: 14,
      name: "Sein",
      logo: "/brands/sein.png",
    },
    {
      id: 15,
      name: "Sky Packers",
      logo: "/brands/sky_packers.png",
    },
    {
      id: 16,
      name: "UK Derm",
      logo: "/brands/uk_derm.png",
    },
    {
      id: 17,
      name: "WowHeads",
      logo: "/brands/wowheads.png",
    },
    {
      id: 18,
      name: "SMART SAVER",
      logo: "/smart_saver.png",
    },
    {
      id: 19,
      name: "NUVOICE",
      logo: "/NUVOICE.png",
    },
    {
      id: 20,
      name: "HUBHAWAKS",
      logo: "/hub1.png",
    },
    {
      id: 21,
      name: "NIRA",
      logo: "/nira.png",
    },
    {
      id: 22,
      name: "CLOVE",
      logo: "/brands/clove.png",
    },
    {
      id: 23,
      name: "COZYCABS",
      logo: "/COZYCABS1.jpg",
    },
    {
      id: 24,
      name: "E-TRAVEL",
      logo: "/e-travel.avif",
    },
    {
      id: 25,
      name: "KAPURTHALA",
      logo: "/kapur1.png",
    },
    {
      id: 26,
      name: "IS.U",
      logo: "/isu1.png",
    },
    {
      id: 27,
      name: "HARDOLL",
      logo: "/hardoll.png",
    },
    {
      id: 28,
      name: "MADVERSE",
      logo: "/madverse.png",
    },
    {
      id: 29,
      name: "UBERLYFE",
      logo: "/uberlyfe1.png",
    },
    {
      id: 30,
      name: "CUPID",
      logo: "/cupid1.png",
    },
    {
      id: 31,
      name: "THE BINGE TOWN",
      logo: "/the_binge_town.png",
    },
    {
      id: 32,
      name: "DRONACHARYA",
      logo: "/DRONACHARYA1.png",
    },
    {
      id: 33,
      name: "WOOLEN HOUSE",
      logo: "/woolen_house1.png",
    },
    {
      id: 34,
      name: "OPINE STORES",
      logo: "/opine_stores1.png",
    },
    {
      id: 35,
      name: "EMPIRE",
      logo: "/empire1.png",
    },
    {
      id: 36,
      name: "EVARA",
      logo: "/the_core1.png",
    },
    {
      id: 37,
      name: "DON MILLER",
      logo: "/donmiller1.png",
    },
    {
      id: 38,
      name: "POLKI",
      logo: "/polki1.png",
    },
    {
      id: 39,
      name: "DIAN APPS",
      logo: "/dianapps1.png",
    },
    {
      id: 40,
      name: "WOILA SILVER",
      logo: "/Woila-silver.jpeg",
    },
    {
      id: 41,
      name: "POWER MOWER",
      logo: "/Powermowers.png",
    },
  ];

  return (
    <>
      <Header />
      <section>
        <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
          <BrandsHero />

          <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
            <p className=" text-sm ">
              <Link href="/">Home</Link> / Brands
            </p>
            <h1 className="text-white text-2xl md:text-5xl font-semibold">
              Results in Every Build.
            </h1>
            <p className="text-sm sm:text-balance">
              {" "}
              Websites, campaigns, and conversion machines built to turn traffic
              into revenue. Meet our best work.
            </p>
          </div>
        </div>
        {/* B2B Partners section */}
        <div className="px-5 pt-12 text-center pb-6 overflow-hidden bg-white">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center">
            B2B Business Partners
          </h1>
          <span>
            Strategic partnerships with leading SaaS and enterprise platforms
          </span>
        </div>
        {/* B2B Partners section */}
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-10 px-5 py-6 ">
            {B2BPartners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center bg-gray-100 border border-[#e8e0d0] rounded-2xl p-2 sm:p-5 md:p-10 shadow-[0_8px_48px_rgba(17,24,39,0.07)]  hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
        {/* sec 50+ brands */}
        <div className="max-w-7xl w-full mx-auto">
          <div className="px-5 text-center pt-12 pb-6 overflow-hidden bg-white">
            <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center">
              50+ Brands We've Helped Scale
            </h1>
            <span>
              E-commerce, SaaS, publishing, and consumer brands trusting us with
              their growth
            </span>
          </div>
          {/* all partners */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-10 px-5 py-6">
            {AllPartners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center bg-gray-100 border border-[#e8e0d0] rounded-2xl p-2 sm:p-5 md:p-10 shadow-[0_8px_48px_rgba(17,24,39,0.07)]  hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Brands;
