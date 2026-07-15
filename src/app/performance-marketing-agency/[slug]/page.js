"use client";
// import React, { useRef, useState } from "react";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header/page";
import FloatingLines from "@/components/reactBits/FloatingLines";
import LightRays from "@/components/reactBits/LightRays";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/page";
import { useParams } from "next/navigation";
import countryKeywords from "../../../data/countryKeywords.json";
import Swiper from "../../../components/swiper/Swiper";
import CityData from "@/components/CityData/page";

const page = () => {
    const [sending, setSending] = useState(false);
    const [faqOpen, setFaqOpen] = useState(false);
    const [activeDifferentCard, setActiveDifferentCard] = useState(null);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [formData, setFormData] = useState({
      companyName: "",
      budget: "",
      name: "",
      phone: "",
      email: "",
      service: "",
      designation: "",
    });

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

const formatName = (text) =>
  text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const country = formatName(slug);
  const [countryChild , setCountryChild] = useState("");
  const displayPlace = countryChild || country;
  // meta-title for website
  useEffect(() => {
  document.title = `${country}'s performance marketing agency for D2C brands - Meta Ads and Google Ads`;
}, [country]);


  // const keywords = countryKeywords?.find(
  //   (item) => item.country === country.toUpperCase(),
  // );

  const keywords = countryKeywords?.find((item) => {
  const isCountry = item.country.toLowerCase() === slug.toLowerCase();

  const isCity = Object.keys(item.cities || {}).some(
    (city) => city.toLowerCase().replaceAll(" ", "-") === slug.toLowerCase()
  );

  return isCountry || isCity;
});

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      alert("Thanks! Your enquiry has been sent.");
      setFormData({
        companyName: "",
        budget: "",
        name: "",
        phone: "",
        email: "",
        service: "",
        designation: "",
      });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const Separator = () => (
    <span className="mx-6 text-[#a78bfa]/40 text-xl select-none">✦</span>
  );
  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    section.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    section.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handlePhoneChange = (e) =>
    setFormData((s) => ({
      ...s,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));

  const stats = [
    {
      id: 1,
      label: "Average ROAS across all campaigns",
      value: "4.2x",
      shortLabel: "Avg ROAS",
    },
    {
      id: 2,
      label: "Ad Spend Managed",
      value: "₹50Cr+",
      shortLabel: "Ad Spend",
    },
    { id: 3, label: "Clients Served", value: "80+", shortLabel: "Clients" },
    { id: 4, label: "Years of Expertise", value: "6+", shortLabel: "Yrs Exp." },
    { id: 5, label: "Client Retention", value: "98%", shortLabel: "Retention" },
  ];

  const SEODECRIP = [
    {
      id: 1,
      title: "Meta Ads Management",
      description:
        "Full-funnel Facebook and Instagram ad campaigns - audience research, creative testing, and continuous optimisation across every stage, from first impression to purchase.",
    },
    {
      id: 2,
      title: "Google Ads Management",
      // description: `Search, Shopping, Display, and Performance Max campaigns built to maximise ROAS and eliminate wasted spend - structured Google Ads management for ${country} businesses.`,
     description: `Search, Shopping, Display, and Performance Max campaigns built to maximise ROAS and eliminate wasted spend - structured Google Ads management for ${displayPlace} businesses.`,
    },
    {
      id: 3,
      title: "Lead Generation Campaigns",
      description:
        "End-to-end lead generation through paid ads - targeting strategy, ad creative, landing page alignment, and CRM integration, built to deliver qualified leads at a sustainable cost.",
    },
    {
      id: 4,
      title: "E-commerce Advertising",
      description:
        "Catalogue ads, dynamic remarketing, and Google Shopping campaigns for D2C and Shopify brands - built to grow purchase volume, improve ROAS, and scale profitably.",
    },
    {
      id: 5,
      title: "Ad Creative & Copy",
      description:
        "Performance-led creatives and ad copy built inside a structured testing framework - designed to improve click-through rates, lower cost-per-result, and keep audiences from tuning out.",
    },
    {
      id: 6,
      title: "Campaign Reporting & Analytics",
      description:
        "Real-time analytics dashboards that show exactly where your budget is going and what it's returning - honest numbers, clear attribution, no vanity metrics.",
    },
  ];

  const WorkStrategy = [
    {
      id: 1,
      title: "Business & Goal Discovery",
      description:
        "We start by understanding your business model, margins, customer profile, and revenue targets - not just your ad budget. Every strategy we build comes from this foundation, not a template.",
    },
    {
      id: 2,
      title: "Audience Research & Targeting Strategy",
      description: `Detailed audience maps built for ${country} businesses - interest clusters, custom segments, lookalikes, and retargeting pools - grounded in real market data and competitor intelligence, not guesswork.`,
    },
    {
      id: 3,
      title: "Creative Direction & Messaging",
      description:
        "We develop creatives, copy angles, and video briefs built around what your audience actually responds to - hooks, formats, and messaging tested against real data, not gut feel.",
    },
    {
      id: 4,
      title: "Ad Creative & Copy Development",
      description:
        "Campaigns go live with a structured testing framework across creatives, audiences, and placements - data decides which combinations earn more budget, typically within the first two weeks.",
    },
    {
      id: 5,
      title: "Continuous Optimisation & Scaling",
      description:
        "Winning ad sets get scaled - budgets increased, audiences expanded, landing page optimisation flagged where needed - so performance holds as spend grows.",
    },
    {
      id: 6,
      title: "Reporting, Analytics & Strategy Reviews",
      description:
        "Weekly reports and monthly strategy reviews - real campaign numbers, honest analysis, and a clear picture of what we're doing next and why.",
    },
  ];

  const ChooseUs = [
    {
      id: 1,
      title: "ROI-First, Always",
      description:
        "Every decision is measured against one question: does this improve return on ad spend?",
    },
    {
      id: 2,
      title: "Full-Funnel Thinking",
      description:
        "We review your entire funnel and identify what limits conversion before scaling any campaign.",
    },
    {
      id: 3,
      title: "Dedicated Account Management",
      description:
        "One point of contact who understands your campaigns in depth - not a rotating team.",
    },
    {
      id: 4,
      title: "Radical Transparency",
      description:
        "No vanity metrics, no hidden fees. You see exactly what's working and what we're doing about it - every week.",
    },
    {
      id: 5,
      title: "Fast, Reliable Execution",
      description:
        "Campaigns live in days. Creative reviews in 24–48 hours. When you need speed, we deliver.",
    },
  ];

  const WeDifferently = [
    {
      id: 1,
      title: "Close Campaign Monitoring",
      description:
        "We track performance daily, catching drops in delivery, rising CPMs, or creative fatigue before they eat into your budget.",
    },
    {
      id: 2,
      title: "Metrics That Actually Mean Something",
      description:
        "We read what the numbers are telling us - CPM, CTR, hook rate, landing page drop-off - and translate that into a clear next move.",
    },
    {
      id: 3,
      title: "We Understand Your Business First",
      description:
        "Before we touch targeting or copy, we understand what you're actually dealing with - seasonality, margins, customer objections, sales team feedback.",
    },
    {
      id: 4,
      title: "The Real Picture, Always",
      description:
        "No spin, no vanity screenshots. We tell you honestly where campaigns are, where they're headed, and what's genuinely working vs. what we're still figuring out.",
    },
    {
      id: 5,
      title: "Broader Business Consultation",
      description:
        "If something outside the ad account is limiting results - your landing page, offer, or pricing - we'll tell you. We won't quietly optimise ads on top of a broken funnel.",
    },
    {
      id: 6,
      title: "Profitable, Sustainable Growth",
      description:
        "We optimise for margins, not just volume. Scaling fast means nothing if the unit economics don't hold. We build for growth that keeps working.",
    },
    {
      id: 7,
      title: "Creative Built on Data, Not Aesthetics",
      description:
        "Most agencies make ads that look good. We build creatives based on what the audience actually responds to - angles, hooks, formats backed by metrics.",
    },
    {
      id: 8,
      title: "We Don't Hide Behind the Algorithm",
      description:
        "A lot of agencies blame Meta or Google when results dip. We take ownership. If something isn't working, we diagnose it and fix it - not deflect it.",
    },
  ];

  const Brands = [
    "D2C & E-commerce",
    "Publishing & EdTech",
    "Hospitality & F&B",
    "Real Estate",
    "Healthcare & Wellness",
    "SaaS & Tech",
    "Education & Coaching",
    "Home Services",
    "B2B Services",
    "Fashion & Apparel",
  ];
  // Reviewss
  const reviews = [
    {
      id: 1,
      name: "Sneha R.",
      title: "Co-founder, D2C Clothing Brand",
      stars: 5,
      review:
        "Honestly we had tried running ads ourselves before coming to Unnity and it was just money going down the drain. These guys cleaned up our targeting, tightened the creatives and our ROAS went from 1.8x to 4.2x in about 2 months. Not what I expected honestly",
    },
    {
      id: 2,
      name: "Daksh M.",
      title: "Founder, B2B Services Company",
      stars: 4.9,
      review:
        "The leads were coming in but nobody was buying. Unnity looked at the full picture, not just the ads, and completely rebuilt our Google strategy. CPL is down and the quality of enquiries is so much better now. Wish we had made the switch sooner",
    },
    {
      id: 3,
      name: "Meera T.",
      title: "Founder, Skincare Brand",
      stars: 5,
      review:
        "What I appreciated most  is that they told us what wasn't working and why, not just what we wanted to hear. Rare quality in an agency.",
    },
  ];
  // FAQS
  const Faqs = [
    {
      id: 1,
      q: "What is performance marketing agency?",
      a: `A performance marketing agency is a results-focused marketing firm dedicated to achieving specific, measurable outcomes such as sales, leads, and clicks.Unlike traditional marketing agencies that emphasise brand awareness or overall market presence, performance marketing agencies concentrate on delivering tangible results that generate immediate impact, driving direct actions like lead generation and sales conversions.This laser focus on performance metrics ensures that every campaign is designed to maximise ROI and produce quantifiable success.`,
    },
    {
      id: 2,
      q: `Is a performance marketing agency right for my business? `,
      a: `If you aim to maximise ROI and get measurable results from every rupee spent, partnering with a performance marketing agency like Unnity is a smart choice. We have collaborated with D2C brands, eCommerce businesses, SaaS companies, and more - with a performance model that reduces risk and ensures accountability.`,
    },
    {
      id: 3,
      q: ` Does Unnity have a specialty?`,
      a: `Yes, we specialise in performance marketing and creative solutions for online businesses. From Meta Ads to Google Ads and beyond, we have extensive experience in paid media across various industries, including eCommerce, D2C Fashion, Hospitality, B2B, and more. Every campaign we run is tied to clear goals - whether that's revenue, leads, or growth `,
    },
    {
      id: 4,
      q: `What are the key metrics used to measure performance marketing success? `,
      a: ` In performance marketing, success isn't about how many people just saw your ad — it's about what meaningful actions they took. To measure that, we rely on clear, data-backed metrics that show actual performance.`,
    },
    {
      id: 5,
      q: `What makes Unnity different from other agencies?`,
      a: `Unnity delivers high-impact performance marketing services in Australia across a wide range of industries. Our expertise spans E-commerce, D2C Fashion, Hospitality, EdTech, Real Estate, SaaS, B2B, and several other sectors.
      What sets us apart is our ability to adapt strategies based on each industry's unique audience behavior and conversion goals. Whether it's driving product sales for a D2C brand, generating quality leads for a hospitality business, or scaling user acquisition for a SaaS platform — we tailor every campaign with precision.
      Our data-driven approach ensures measurable growth, regardless of the vertical. Every strategy we build is rooted in real numbers, clear KPIs, and a relentless focus on ROI.
      If you're in a competitive market and looking to scale smartly, Unnity is the performance marketing agency in India that delivers results across industries.`,
    },
    {
      id: 6,
      q: `What industries do you work with in ${displayPlace}?`,
      a: `D2C, e-commerce, publishing, SaaS, real estate, healthcare, hospitality, and B2B services. We tailor our approach to each industry's buying cycle and audience behaviour - what works for a fashion brand won't work for a B2B company, and we know the difference.`,
    },
  ];

  const inputCls =
    "w-full border border-[#e2e5f0] bg-[#fafbff] px-4 py-3 rounded-xl text-sm text-[#1a1a2e] placeholder:text-[#aab0c4] outline-none transition-all duration-200 focus:border-[#7c3aed] focus:bg-white focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]";

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative w-full bg-[#0c0322] min-h-screen text-white overflow-hidden flex flex-col pb-6"
        style={{ "--mx": "50%", "--my": "50%" }}
      >
        {/* Grid base */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.06) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Cursor glow */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx) var(--my),rgba(124,58,237,0.12) 0%,rgba(79,31,191,0.06) 40%,transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.11) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.11) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(280px circle at var(--mx) var(--my),black 0%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(280px circle at var(--mx) var(--my),black 0%,transparent 100%)",
          }}
        />
        <div className="absolute inset-0 z-2 bg-linear-to-b from-[#0F032B]/80 via-[#0F032B]/40 to-[#0F032B]/90 pointer-events-none" />

        {/* Light rays desktop */}
        <div className="w-full h-212.5 absolute -bottom-2 z-10 hidden md:block">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        {/* Floating lines mobile */}
        <div className="md:hidden absolute inset-0 z-0">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={11.5}
            bendStrength={-0.5}
            interactive
            parallax
            topDirection={-1.0}
            middleDirection={1.0}
            bottomDirection={-1.0}
          />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-112.5 rounded-full bg-[#6d28d9]/8 blur-[140px] z-2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full bg-[#4c1d95]/5 blur-[110px] z-2 pointer-events-none" />

        {/* Left rail */}
        <div className="absolute left-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Digital Agency
            </span>
          </div>
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,3.5vw,3.2rem)",
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(167,139,250,0.12)",
            }}
          >
            UNNITY
          </span>
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Est. 2024
            </span>
            <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/6 to-transparent" />
        </div>

        {/* Right rail */}
        <div className="absolute right-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              50+ Brands
            </span>
          </div>
          <span
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,3.5vw,3.2rem)",
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(167,139,250,0.12)",
            }}
          >
            UNNITY
          </span>
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Scroll Down
            </span>
            <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/6 to-transparent" />
        </div>

        {/* ── Hero body ── */}
        <div className="relative top-8 z-10 flex-1 flex flex-col items-center sm:justify-center text-center px-6 lg:px-20 pt-24 pb-8">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/4 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse shrink-0" />
            <span
              className="text-[11px] font-medium text-white/50 tracking-[0.18em] uppercase"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Performance Marketing Agency · {country}
            </span>
          </div>

          {/* H1 */}
          <div className="max-w-6xl w-full">
            <h1
              className="block text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,4.5vw,4rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
              }}
            >
              Performance Marketing Agency in 
            <span
              className="block mt-1 bg-linear-to-r from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem,5.1vw,4.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
              }}
            >
             {displayPlace} to Scale D2C Brands
            </span>
            </h1>
          </div>

          {/* Divider */}
          <div className="w-10 h-px bg-[#a78bfa]/40 my-6" />

          {/* Body copy */}
          <p
            className="leading-[1.9] text-white/45 max-w-xl text-[1rem]"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            <strong className="text-white/60">Unnity</strong> is a performance
            marketing agency running Meta Ads and Google Ads for D2C brands
            {/* across <strong className="text-white/60">{country}</strong> - */}
            across <strong className="text-white/60">{displayPlace}</strong>
           {" "}precision targeting, data-driven creative, and full transparency
            from day one.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap justify-center mt-8">
            {[
              {
                href: "https://calendly.com/sayam-unnity/30min",
                label: "Start Your Free Trial",
                primary: false,
              },
              { href: "/case-studies", label: "View Portfolio", primary: true },
            ].map(({ href, label, primary }) => (
              <Link key={label} href={href}>
                <button
                  className={`group flex items-center gap-3 px-6 py-2.5 rounded-full text-[0.9rem] font-semibold overflow-hidden cursor-pointer transition-all duration-200 ${primary ? "bg-[#0f032b] text-white border border-white/20 hover:bg-white hover:text-[#0f032b]" : "bg-white text-[#0f032b] hover:bg-[#0f032b] hover:text-white hover:border hover:border-white"} max-sm:w-full max-sm:justify-center`}
                >
                  {label}
                  <span className="relative w-7 h-7 overflow-hidden rounded-full bg-[#0f032b] text-white shrink-0">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#0f032b]">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </span>
                </button>
              </Link>
            ))}
          </div>

          {/* Stats bar */}
          <div className="relative z-10 w-full max-w-full mx-auto mt-14">
            {/* Desktop */}
            <div className="hidden md:flex items-stretch rounded-xl overflow-hidden border border-[#a78bfa]/12 bg-[#a78bfa]/3">
              {stats.map((stat, i) => (
                <div
                  key={stat.id}
                  className="flex-1 flex flex-col items-center justify-center text-center px-5 py-5 bg-[#0c0322] relative"
                >
                  {i !== 0 && (
                    <span className="absolute left-0 top-[20%] h-[60%] w-px bg-linear-to-b from-transparent via-[#a78bfa]/22 to-transparent" />
                  )}
                  <span className="block w-1 h-1 rounded-full bg-[#a78bfa]/50 mb-3" />
                  <span
                    className="text-[2.6rem] font-extrabold leading-none tracking-tight bg-linear-to-br from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[12px] font-normal text-white/35 leading-snug max-w-27.5 mt-2"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Mobile */}
            <div className="flex md:hidden items-stretch rounded-xl overflow-hidden border border-[#a78bfa]/12">
              {stats.map((stat, i) => (
                <div
                  key={stat.id}
                  className="flex-1 flex flex-col items-center justify-center text-center py-4 px-1 bg-[#0c0322] relative gap-1"
                >
                  {i !== 0 && (
                    <span className="absolute left-0 top-[15%] h-[70%] w-px bg-linear-to-b from-transparent via-[#a78bfa]/20 to-transparent" />
                  )}
                  <span
                    className="text-[1.1rem] font-extrabold leading-none tracking-tight bg-linear-to-br from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[9.5px] font-normal text-white/35 leading-tight"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {stat.shortLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── partners section ── */}
      <div className="flex flex-col items-center justify-center py-12 mx-auto bg-white">
        <h2 className="text-base font-bold mb-8 tracking-widest">
          OFFICIAL MARKETING PARTNERS
        </h2>
        <div className="flex justify-center items-center gap-10 px-5 max-sm:gap-6">
          {[
            {
              src: "/Meta-bg.png",
              label: "Business Partners",
              alt: "Meta Business Partner",
            },
            {
              src: "/Google-bg.png",
              label: "Google Partners",
              alt: "Google Partner",
            },
          ].map(({ src, label, alt }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <img src={src} alt={alt} className="w-28 h-16 object-contain" />
              <span className="text-lg font-medium text-[#5f6368] text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead form */}
      <section className="bg-[#f7f8fc] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative max-lg:max-w-sm max-lg:mx-auto">
            <div className="relative rounded-full bg-linear-to-br from-white via-[#f3f5fb] to-[#efeefe] border border-[#e8e4f8] aspect-square grid place-items-center overflow-hidden shadow-xl shadow-[#7c3aed]/5">
              <Image
                src="/sayyam2.png"
                width={0}
                height={0}
                sizes="(max-width:768px) 100vw, 520px"
                alt="Sayam Jain"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2
              className="text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight text-[#0c0322] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Your Growth Partner
              <br />
              in the Digital Era
            </h2>
            <p
              className="text-[0.95rem] text-[#6b7280] mb-7 leading-relaxed"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Let's create impact - fill in the form and we'll take it from
              there.
            </p>

            <form
              onSubmit={submitHandler}
              ref={formRef}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {[
                  {
                    id: "companyName",
                    label: "Company Name",
                    type: "text",
                    placeholder: "Acme Inc.",
                    required: true,
                  },
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "John Doe",
                    required: true,
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "10-digit mobile",
                  },
                  {
                    id: "designation",
                    label: "Designation",
                    type: "text",
                    placeholder: "Founder / CMO",
                  },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={id}
                      className="text-[13px] font-semibold text-[#374151]"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={formData[id]}
                      onChange={
                        id === "phone"
                          ? handlePhoneChange
                          : (e) =>
                              setFormData((s) => ({
                                ...s,
                                [id]: e.target.value,
                              }))
                      }
                      className={inputCls}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[13px] font-semibold text-[#374151]"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, email: e.target.value }))
                  }
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {[
                  {
                    id: "budget",
                    label: "Monthly Marketing Budget",
                    options: [
                      "Monthly Marketing Budget",
                      "Less Than A$3,000",
                      "A$3,000 to A$8,000",
                      "A$8,000 to A$40,000",
                      "More than A$80,000",
                      "Looking For Organic Services",
                    ],
                  },
                  {
                    id: "service",
                    label: "Choose a Service",
                    options: [
                      "Choose a Service",
                      "SEO",
                      "Paid Marketing (Google, Facebook & Amazon)",
                      // "UI/UX",
                      // "Website Development",
                      // "Shopify Migration",
                    ],
                  },
                ].map(({ id, label, options }) => (
                  <div key={id} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={id}
                      className="text-[13px] font-semibold text-[#374151]"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {label}
                    </label>
                    <div className="relative">
                      <select
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={(e) =>
                          setFormData((s) => ({ ...s, [id]: e.target.value }))
                        }
                        className={`${inputCls} appearance-none pr-10`}
                      >
                        {options.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#aab0c4]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded-xl text-sm ${status.type === "error" ? "bg-red-50 text-red-700 border border-red-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-1 w-full bg-[#0c0322] hover:bg-[#1a0550] text-white font-bold text-[0.95rem] py-3.5 px-5 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#0c0322]/20"
              >
                {sending ? "Sending…" : "Send Enquiry →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center px-4 mb-14">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Meta Ads & Google Ads Management
            <br className="hidden md:block" /> That Turns Ad Spend Into Revenue
          </h2>
          <p className=" max-w-3xl text-[0.95rem] leading-[1.8] text-[#6b7280]">
            {/* Full-funnel Meta Ads and Google Ads management for {country} brands */}
            Full-funnel Meta Ads and Google Ads management for {displayPlace} brands
            - every campaign built on data, every rupee accountable to a result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5">
          {SEODECRIP.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col p-7 rounded-md border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0F032B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-[3rem] font-black leading-none text-[#0c0322]/20 select-none tabular-nums"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {String(card.id).padStart(2, "0")}
                </span>
                <span className="mt-2 w-8 h-8  flex items-center justify-center shrink-0  transition-colors duration-200">
                  <span className="w-3 h-0.5 rounded-full bg-linear-to-r from-[#0F032B] to-[#a78bfa]" />
                </span>
              </div>

              <h3
                className="text-[1rem] font-bold text-[#0c0322] leading-snug mb-2.5"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="text-[0.875rem] leading-[1.75] text-[#6b7280] flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-[#0c0322] py-20 px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-325 mx-auto gap-10">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-10 self-start lg:pr-10">
            <h2
              className="text-[clamp(1.8rem,2.8vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Our Performance Marketing Process - From Strategy to Scale
            </h2>
            <p
              className="text-[0.9rem] leading-[1.8] text-white/38"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              A structured campaign management process for {country} businesses
              - from the first brief to fully optimised, profitably scaling ads.
            </p>
          </div>

          {/* Steps */}
          <div className="col-span-3 border-l border-white/[0.07]">
            {WorkStrategy.map((step, i) => (
              <div
                key={step.id}
                className={`flex gap-0 py-8 ${i !== WorkStrategy.length - 1 ? "border-b border-white/6" : ""}`}
              >
                <div className="w-20 shrink-0 flex justify-center pt-0.5">
                  <span
                    className="text-[12px] font-bold tracking-widest text-[#06d6a0]"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="pr-6">
                  <p
                    className="text-[1rem] font-bold text-white leading-snug mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[0.875rem] leading-[1.75] text-white/40"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            className={`text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3 ${countryChild ? "hidden" : "block"} `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Why {country} Businesses <br/> Choose Unnity
          </h2>
          <h2
            className={`text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3 ${country ? "block" : "hidden"} `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {/* Why {countryChild} Businesses Choose Unnity */}
          </h2>
          {/* <h2
            className={`text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3 ${country ? "block" : "hidden"} `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Why {countryChild} Businesses Choose Unnity
          </h2> */}
          <p className="text-[0.95rem] leading-[1.8] text-[#6b7280]">
            We specialise exclusively in Meta and Google Ads. That focused
            expertise is what consistently delivers stronger results for our
            clients.
          </p>
          <Link href="https://calendly.com/sayam-unnity/30min">
            <button className="group self-start flex items-center gap-3 bg-[#0c0322] text-white hover:bg-[#1a0550] px-6 py-2.5 rounded-full text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 mx-auto mt-5">
              Talk to our experts
              <span className="relative w-7 h-7 overflow-hidden rounded-full bg-white text-[#0c0322] shrink-0">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-[#0c0322] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>
        </div>

        {/* Clooums */}
        <div className="max-w-325 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ChooseUs.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col p-6 rounded-md border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0F032B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <span
                className="text-[2.8rem] font-black leading-none text-[#0c0322]/20 select-none tabular-nums mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {String(card.id).padStart(2, "0")}
              </span>

              <p
                className="text-[0.95rem] font-bold text-[#0c0322] leading-snug mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {card.title}
              </p>
              <p className="text-[0.85rem] leading-[1.75] text-[#6b7280] flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            What We Do Differently
            <br className="hidden md:block" /> in Performance Marketing
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-[#6b7280]">
            Most agencies set campaigns live and step back.{" "}
            <strong className="text-[#0c0322]">
              We stay in - every week, every metric, every decision.
            </strong>
            Here is exactly what that looks like in practice.
          </p>
        </div>

  <div className="max-w-325 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {WeDifferently.map((card) => {
    const isActive = activeDifferentCard === card.id;

    return (
      <div
        key={card.id}
        onClick={() => {
          if (window.innerWidth < 768) {
            setActiveDifferentCard(isActive ? null : card.id);
          }
        }}
        className="group relative min-h-[210px] flex flex-col p-6 rounded-md border border-[#16064f3f] bg-white transition-all duration-300 cursor-pointer md:cursor-default overflow-hidden"
      >
        {/* Bottom to top color slide */}
        <div
          className={`absolute inset-0 bg-[#0c0322] transition-transform duration-500 ease-in-out z-0
            ${isActive ? "translate-y-0" : "translate-y-full"}
            md:translate-y-full md:group-hover:translate-y-0
          `}
        />

        {/* Top line */}
        <div
          className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#6C5CE7] to-transparent transition-opacity duration-300 z-10
            ${isActive ? "opacity-100" : "opacity-0"}
            md:opacity-0 md:group-hover:opacity-100
          `}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Number */}
          <span
            className={`text-[2.8rem] font-black leading-none select-none tabular-nums mb-4 transition-colors duration-300
              ${isActive ? "text-white" : "text-[#6b7280]"}
              md:text-[#6b7280] md:group-hover:text-white
            `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {String(card.id).padStart(2, "0")}
          </span>

          {/* Title */}
          <p
            className={`text-[0.95rem] font-bold leading-snug mb-2 transition-all duration-300
              ${isActive ? "opacity-0 -translate-y-6 text-white" : "opacity-100 translate-y-0 text-[#0c0322]"}
              md:opacity-100 md:translate-y-0 md:text-[#0c0322]
              md:group-hover:opacity-0 md:group-hover:-translate-y-6
            `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {card.title}
          </p>

          {/* Description */}
          <p
            className={`absolute left-0 right-0 top-[78px] text-[0.85rem] leading-[1.75] text-white/80 transition-all duration-500 ease-in-out
              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              md:opacity-0 md:translate-y-10
              md:group-hover:opacity-100 md:group-hover:translate-y-0
            `}
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {card.description}
          </p>
        </div>
      </div>
    );
  })}
</div>
      </section>
      {/* Industry We work with */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-14 px-4">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Industries We Work With
          </h2>
          <p
            className="text-[0.95rem] leading-[1.8] text-[#6b7280]"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            From D2C brands to B2B services - we adapt our approach to the
            buying behaviour and competitive dynamics of each sector.
          </p>
        </div>

        {/*  left → right*/}
        <div className="relative w-full mb-4 group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...Brands, ...Brands].map((brand, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span
                  className="whitespace-nowrap px-5 py-2.5 rounded-full border border-[#ece9f8] bg-[#faf9ff] text-[#0c0322] text-[0.875rem] font-semibold hover:border-[#c4b5fd] hover:bg-[#f5f3ff] hover:text-[#0b0537] transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {brand}
                </span>
                <Separator />
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: right → left ── */}
        <div className="relative w-full group">
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...Brands, ...Brands].map((brand, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span
                  className="whitespace-nowrap px-5 py-2.5 rounded-full border border-[#ece9f8] bg-[#faf9ff] text-[#0c0322] text-[0.875rem] font-semibold hover:border-[#c4b5fd] hover:bg-[#f5f3ff] hover:text-[#0b0537] transition-all duration-200 cursor-default"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {brand}
                </span>
                <Separator />
              </div>
            ))}
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left  { animation: marquee-left  28s linear infinite; }
        .animate-marquee-right { animation: marquee-right 28s linear infinite; }
      `}</style>
      </section>
      {/* Real Results for Real Brands */}
      <section className="w-full bg-white py-12 px-5">
        <div className="max-w-3xl mx-auto text-center mb-14 px-4">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Real Results for Real Brands
          </h2>
          <p
            className="text-[0.95rem] leading-[1.8] text-[#6b7280]"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            We have worked with brands from all over the world. <br /> Here are
            some of the results we have delivered for them.
          </p>
        </div>
        <Swiper />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-325 mx-auto gap-5">
        
          <div className="rounded-md border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 cursor-default overflow-hidden0 flex flex-col">
            <div className="bg-[#0f032be2] px-6 pt-6 pb-7 rounded-t-md backdrop-blur-sm">
              <span
                className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-5"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                E-commerce · Meta Ads
              </span>
              <div className="flex gap-8">
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    4.8×
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    ROAS
                  </span>
                </div>
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    62%
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Lower CPA
                  </span>
                </div>
              </div>
            </div>


          
            <div className="bg-white px-6 py-5 flex flex-col gap-2 flex-1">
              <p
                className="text-[15px] font-bold text-[#0c0322] leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                D2C Fashion Brand
              </p>
              <p
                className="text-[12.5px] leading-[1.78] text-[#6b7280]"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Rebuilt the Meta funnel from scratch - restructured campaigns,
                refreshed creatives, tightened targeting. 4.8× ROAS in 60 days.
              </p>
            </div>
          </div>

        

          <div className="rounded-md border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 cursor-default overflow-hidden0 flex flex-col">
            <div className="bg-[#0f032be2] px-6 pt-6 pb-7 rounded-t-md backdrop-blur-sm">
              <span
                className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-5"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Lead Generation · Google Ads
              </span>
              <div className="flex gap-8">
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    3.2×
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    More Leads
                  </span>
                </div>
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    48%
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Lower CPL
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white px-6 py-5 flex flex-col gap-2 flex-1">
              <p
                className="text-[15px] font-bold text-[#0c0322] leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                B2B Services Business
              </p>
              <p
                className="text-[12.5px] leading-[1.78] text-[#6b7280]"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Overhauled Google Search structure - rewrote copy, rebuilt ad
                groups, implemented negative keyword frameworks. Leads tripled
                at half the cost.
              </p>
            </div>
          </div>

  

          <div className="rounded-md border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 cursor-default overflow-hidden0 flex flex-col">
            <div className="bg-[#0f032be2] px-6 pt-6 pb-7 rounded-t-md backdrop-blur-sm">
              <span
                className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-white/35 mb-5"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Publishing · Meta Ads
              </span>
              <div className="flex gap-8">
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    5.1×
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    ROAS
                  </span>
                </div>
                <div>
                  <span
                    className="block text-[2.2rem] font-extrabold leading-none tracking-tight text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    120%
                  </span>
                  <span
                    className="block text-[11px] text-white/38 mt-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    YoY Growth
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white px-6 py-5 flex flex-col gap-2 flex-1">
              <p
                className="text-[15px] font-bold text-[#0c0322] leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                Book Publishing Company
              </p>
              <p
                className="text-[12.5px] leading-[1.78] text-[#6b7280]"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Built a full-funnel book sales campaign. Precise interest
                targeting combined with strong creative drove 120% year-on-year
                revenue growth.
              </p>
            </div>
          </div>
        </div> */}
      </section>
      {/* Whtat our clients say */}
      <section className="w-full bg-white py-12 px-5">
        <div className="max-w-3xl mx-auto text-center mb-14 px-4">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-[0.95rem] leading-[1.8] text-[#6b7280]"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            We love working with the best in the industry.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-275 mx-auto">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="relative border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 rounded-md px-6 py-7 flex flex-col"
            >
              <span
                className="absolute top-4 right-5 text-[3rem] font-extrabold leading-none text-gray-200 select-none"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {r.id}
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#f59e0b] text-[13px]">
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-[13px] leading-[1.82] text-[#374151] mb-6 flex-1"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                {r.review}
              </p>
              <div className="w-full h-px bg-[#0F032B]/07 mb-4" />

              {/* Reviewer */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[13px] font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0F032B, #a78bfa)",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                  }}
                >
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p
                    className="text-[13.5px] font-bold text-[#0c0322] leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-[11px] text-[#9ca3af] mt-0.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    {r.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Faq Section */}
      <section className="w-full bg-white py-12 px-5">
        <div className="max-w-3xl mx-auto text-center mb-14 px-4">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-[0.95rem] leading-[1.8] text-[#6b7280]"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            {/* Common questions from {country} businesses exploring performance */}
            Common questions from {displayPlace} businesses exploring performance 
            marketing with Unnity.
          </p>
        </div>
        {/* Faqs */}
        <div className="max-w-4xl w-full mx-auto border border-[#16064f3f] bg-white hover:border-[#150a4062]  transition-all duration-300 ease-in-out rounded-md">
          {Faqs.map((f) => (
            <div
              key={f.id}
              onClick={() => setFaqOpen(faqOpen === f.id ? null : f.id)}
              className="cursor-pointer border border-[#16064f3f] hover:border-[#150a4062] overflow-hidden"
            >
              {/* Question row */}
              <div className="flex items-center justify-between px-5 py-4">
                <span
                  className="text-base font-medium text-[#0c0322] pr-4"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {f.q}
                </span>
                <span
                  className="text-[#a78bfa] text-xl font-bold shrink-0 transition-transform duration-300"
                  style={{
                    transform:
                      faqOpen === f.id ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </div>

              <div
                className=" bg-gray-50 transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: faqOpen === f.id ? "400px" : "0px",
                  opacity: faqOpen === f.id ? 1 : 0,
                }}
              >
                <p
                  className="px-5 pb-5 text-[13.5px] leading-[1.78] text-[#6b7280]"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    <section className="bg-[#0c0322] py-14 px-5">
  <div className="max-w-[1200px] mx-auto">
    <h2
      className="text-[clamp(1.3rem,2vw,1.7rem)] font-extrabold tracking-tight text-white mb-10"
      style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
    >
      Cities We Serve in {country}
    </h2>

    <div className="flex flex-col">
      {Object.entries(keywords?.cities || {}).map(([city, cityKeywords]) => {
        const citySlug = city.toLowerCase().replaceAll(" ", "-");

        return (
          <div
          onClick={() =>
                  router.push(`/performance-marketing-agency/${citySlug}`)
                }
            key={city}
            className="border-t border-white/10 py-5 last:border-b last:border-white/10 cursor-pointer"
          >
            {/* Mobile city label */}
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:hidden">
              <span className="w-[5px] h-[5px] rounded-full bg-[#06d6a0] cursor-pointer flex-shrink-0" />
              <p
                className="text-[12px] font-bold text-white cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {city}
              </p>
            </div>

            {/* Desktop: city + keywords */}
            <div className="hidden md:grid md:grid-cols-[200px_1fr] gap-0">
              <p
                onClick={() =>
                  router.push(`/performance-marketing-agency/${citySlug}`)
                }
                className="text-[13.5px] font-bold text-white pr-6 pt-px leading-snug flex items-start gap-2 cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                <span className="w-[5px] h-1.25 rounded-full bg-[#06d6a0] flex-shrink-0 mt-1.5" />
                {city}
              </p>

              <div className="grid grid-cols-4 gap-0">
                {[0, 1, 2, 3].map((ci) => (
                  <div
                    key={ci}
                    className="flex flex-col gap-2.5 px-4 border-l border-white/10"
                  >
                    {cityKeywords
                      .filter((_, i) => i % 4 === ci)
                      .map((kw, idx) => (
                        <span
                          key={idx}
                          className="text-[12.5px] text-white/45 leading-snug"
                          style={{ fontFamily: "'DM Sans',sans-serif" }}
                        >
                          {kw}
                        </span>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          
            {/* Mobile keywords */}
            <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-1.5">
              {cityKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-[11.5px] text-white/45 leading-[1.5] pl-2 border-l border-[#a78bfa]/20"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
        {/* <CityData activeCity={displayPlace}/> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default page;
