import Footer from '@/components/footer/page'
import Header from '@/components/Header/page'
import BrandMarquee from '@/components/home/BrandMarquee'
import CaseStudies from '@/components/home/CaseStudies'
import ClientMarquee from '@/components/home/ClientMarquee'
import Contact from '@/components/home/Contact'
import FAQ from '@/components/home/FAQ'
import FounderVideo from '@/components/home/FounderVideo'
import Hero from '@/components/home/Hero'
import ResultsSection from '@/components/home/ResultsSection'
import Services from '@/components/home/Services'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
 import WhyUnnity from '@/components/home/WhyUnnity'
import React from 'react'




export const metadata = {
  title: 'Digital Marketing Agency for Business Growth | Unnity',
  description:
    "Grow your business with Unnity's digital marketing services, including Google Ads, Meta Ads, SEO, performance marketing and lead generation.",
};


const page = () => {
  return (
    <section>
        <Header/>
        <Hero/>
        <ClientMarquee/>
        <Stats/>
         
        <Services/>
        <ResultsSection/>
        <CaseStudies/>
      <WhyUnnity/>
        {/* <FounderVideo/> */}
          <Testimonials/>
        <Contact/>
       <FAQ/>
         <BrandMarquee/>
        


        <Footer/>
    </section>
  )
}

export default page