import React from "react";
import Process from "../../components/Marketing/Process";
import ProportionalServiceGrid from "@/components/Marketing/ProportionalServiceGrid";
import SocialProof from "../../components/Marketing/SocialProof";
import LeadForm from "../../components/Marketing/LeadForm";
import ImageAccordion from "@/components/Marketing/ImageAccordion";
import Header from "@/components/Header/page";
import StickyScrollAnimation from "@/components/Marketing/StickyScrollAnimation";
import Footer from "@/components/footer/page";
import Aurora from "@/components/reactBits/Aurora";
import Hero from "@/components/Marketing/Hero";

export default function Showcase() {
  return (
    <main style={{ minHeight: "100dvh" }}>
      {/* <Navbar /> */}
      <Header />
      <Hero />
      {/* <DirectionAwareBanner /> */}
      <Process />
      {/* <FeaturedWork /> */}
      {/* <TrustIcons /> */}
      <ImageAccordion />
      <ProportionalServiceGrid />
      {/* <ClientLogoGrid /> */}
      {/* <Industries /> */}
      <StickyScrollAnimation />
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  );
}
