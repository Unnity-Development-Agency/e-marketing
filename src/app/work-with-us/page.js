import Footer from '@/components/footer/page'
import Header from '@/components/Header/page'
import LeadForm from '@/components/Lead-form/page'
import BrandsHero from "@/components/reactBits/HeroSection";
import Link from "next/link";

import React from 'react'

const page = () => {
  return (
    <section>
      <Header/>
      <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
          <BrandsHero />

          <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
            <p className=" text-sm ">
              <Link href="/">Home</Link> / Work with us
            </p>
            <h1 className="text-white text-2xl md:text-5xl font-semibold">
              Work with Unnity
            </h1>
            <p className="text-sm sm:text-balance">
              {" "}
              Join Our Team and Shape the Future of Digital Marketing
            </p>
          </div>
        </div>
      
      <LeadForm/>
      <Footer/>
    </section>
  )
}

export default page