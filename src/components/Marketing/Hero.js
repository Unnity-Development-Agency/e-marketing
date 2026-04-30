"use client";

import React from "react";
import Link from "next/link";
import BrandsHero from "../reactBits/HeroSection";

const Hero = () => {
  return (
    <>
      <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
        <BrandsHero />

        <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
          <p className=" text-sm ">
            <Link href="/">Home</Link> / Marketing Services
          </p>
          <h1 className="text-white text-2xl md:text-5xl font-semibold">
            Marketing Services.
          </h1>
          <p className="text-sm sm:text-balance">
            {" "}
            From strategy to execution, our marketing services are designed to
            elevate your brand, engage your audience, and drive measurable
            results.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
