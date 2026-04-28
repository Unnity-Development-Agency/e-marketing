"use client";

let hasLoaded = false;
import React from "react";
import Image from "next/image";
import Header from "@/components/Header/page";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";
import { FaFire } from "react-icons/fa";
import { LuZap } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import Loading from "./loading";
import CountUp from "@/components/reactBits/CountUp";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(
  () => import("@/components/reactBits/FloatingLines"),
  { ssr: false },
);
const LightRays = dynamic(() => import("@/components/reactBits/LightRays"), {
  ssr: false,
});

const LOGO_IMAGES = [
  "/empire1.png",
  "/aqua1.png",
  "/comforto.png",
  "/da1.png",
  "/adpl2.png",
  "/edoofa.png",
  "/hardoll.png",
  "/hub1.png",
  "/nira.png",
  "/orchid-blue.png",
  "/wow-heads.png",
  "/sain.png",
  "/sky.png",
  "/aurave1.png",
  "/uk.png",
  "/cupid1.png",
  "/e-travel.avif",
  "/isu1.png",
  "/kapur1.png",
  "/madve.png",
  "/mireads.avif",
  "/power-mower.webp",
  "/uberlyfe1.png",
  "/hub1.png",
];

const features = [
  {
    title: "Development Solutions",
    description:
      "We build custom solutions using Shopify, Next.js, and robust backend technologies. From eCommerce to web apps, we handle everything from databases to clean, scalable code.",
    image: "/Dev_sol.jpeg",
    alt: "Dev Solutions",
  },
  {
    title: "Meta Ads",
    description:
      "We run high-converting Meta Ads that drive traffic, leads, and sales. From strategy to creatives and optimization, we manage it all for measurable growth.",
    image: "/meta_ads.jpeg",
    alt: "Meta Ads",
  },
  {
    title: "Google Ads",
    description:
      "We create and manage data-driven Google Ads campaigns to boost visibility and conversions. From search to display, we optimize every click for maximum ROI.",
    image: "/google-ads.jpeg",
    alt: "Google Ads",
  },
  {
    title: "Linkedin Ads",
    description:
      "We craft targeted LinkedIn Ads to connect you with decision-makers and drive B2B growth. From audience building to ad optimization, we deliver results that matter.",
    image: "/linkdin-ads.jpeg",
    alt: "LinkedIn Ads",
  },
  {
    title: "Brand Identity",
    description:
      "We build strong brand identities that reflect your vision and resonate with your audience. From logos to visual systems, we create cohesive designs that leave a lasting impression.",
    image: "/brand_id.jpeg",
    alt: "Brand Identity",
  },
];

const steps = [
  {
    number: "01",
    title: "Case Study of Dentist",
    description:
      "Welcome to a comprehensive overview of transforming a large dentistry chain's digital marketing strategy....",
    image: "/step-1.avif",
    href: "/case-study-internals/dentist",
  },
  {
    number: "02",
    title: "Case Study of Home Appliances",
    description:
      "Mission to dominate the digital advertising space through Google Ads. The journey began with scaling efforts....",
    image: "/step-2.avif",
    href: "/case-study-internals/home-appliance",
  },
  {
    number: "03",
    title: "Case Study of E-Sim",
    description:
      "Brand E-Travelsim's journey with Google Ads is a testament to strategic scaling and optimization...",
    image: "/step-3.avif",
    href: "/case-study-internals/travel",
  },
];

const testimonials = [
  {
    name: "— Rishab B. | Founder of BabLouie",
    role: "BabLouie",
    feedback:
      "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that’s in it to win.",
  },
  {
    name: "— Tarun J. | Founder of Tashe and Sain Milks",
    role: "Website Development & Performance Marketing",
    feedback:
      "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it’s user-friendly, aesthetically pleasing, and professionally built. I was so impressed that I entrusted them with another website for my other business, Tashe, and they are doing an excellent job on that as well. Wishing Unnity even greater success in the future — highly recommended!",
  },
  {
    name: "— Vandita, Founder-Iyurved",
    role: "Dentistry",
    feedback:
      "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes. Based on his proven track record and deep domain knowledge, I wholeheartedly endorse Sayam for any role requiring digital marketing expertise. He's a valuable asset to any team.",
  },
  {
    name: "— Cupidclothings - Tanya",
    role: "Apparel",
    feedback:
      "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. They handle both performance marketing and social media for us. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. Reason for continuity have been their deep involvement with data—they regularly share detailed Excel reports, conduct weekly review meetings, and ensure clear communication at every stage.Compared to other agencies we’ve worked with, the personal touch and",
  },
  {
    name: "— Alex Johnson",
    role: "Sales Director",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. Its been a game-changer for our business and we're grateful to Unnity for their invaluable support. We highly recommend their services to anyone looking to optimize their digital marketing strategy and drive growth.",
  },
];

const members = [
  { name: "Sayam Jain", role: "Founder & CEO", photo: "/sayyam2.png" },
  { name: "Muskan", role: "Social Media", photo: "/muskan-2.jpg" },
  { name: "Diksha", role: "Marketing", photo: "/Diksha.jpg" },
  { name: "Naveen", role: "Web Developer", photo: "/naveen-01.jpeg" },
  { name: "Shubham", role: "Web Developer", photo: "/shubham.jpeg" },
  { name: "Manisha", role: "Creatives", photo: "/manisha-03.jpeg" },
  { name: "Rohit", role: "Head of Marketing", photo: "/rohit2.jpeg" },
  { name: "Muskan", role: "Project Coordinator", photo: "/muskanT.jpg" },
  { name: "Sarthak", role: "Marketing Executive", photo: "/sarthak.jpeg" },
  { name: "Yalka", role: "Video Editor Intern", photo: "/yalka.jpg" },
  { name: "Himanshu", role: "Social Media Intern", photo: "/himanshu.jpg" },
  { name: "Punjal", role: "Human Resources", photo: "/punjal.jpeg" },
];

const gallery = [
  {
    src: "/arch-m.png",
    alt: "Adplusa",
    href: "https://architect-sigma.vercel.app/",
  },
  {
    src: "/cupid-m.png",
    alt: "Cupid Clothings",
    href: "https://cupidclothings.com/",
  },
  { src: "/uber2-m.png", alt: "Uberlyfe", href: "https://uberlyfe.com/" },
  {
    src: "/dev-m.png",
    alt: "Devkinandan Steel",
    href: "https://www.devkinandansteel.com/",
  },
  {
    src: "/kryss-m.png",
    alt: "Kryys Global",
    href: "https://www.kryysglobal.com/",
  },
  {
    src: "/aiva-m.png",
    alt: "Aiva Jewellery",
    href: "https://aivajewellery.com/",
  },
  { src: "/da2-m.png", alt: "Da Urban", href: "https://daurban.com/" },
  { src: "/aurave-m.png", alt: "Aurave", href: "https://www.auravedecor.in/" },
  {
    src: "/hub2-m.png",
    alt: "HubHawks",
    href: "https://sniper-ruddy.vercel.app/",
  },
  { src: "/isu2-m.png", alt: "ISU Fashion", href: "https://isufashion.com/" },
  { src: "/mi-m.png", alt: "MiReads", href: "https://mireads.com/" },
  { src: "/mad-m.png", alt: "Madverse", href: "https://www.madverse.co/" },
];

const columns = [0, 1, 2].map((col) => gallery.filter((_, i) => i % 3 === col));

// --------------------------------------------
// Smooth Testimonial Slider
// --------------------------------------------
function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const total = testimonials.length;

  const goTo = (idx) => {
    if (isAnimating) return;
    setPrev(current);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((idx + total) % total);
      setPrev(null);
      setIsAnimating(false);
    }, 500);
  };

  const next = () => goTo(current + 1);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [current]);

  const t = testimonials[current];
  const nextIdx = (current + 1) % total;

  return (
    <section className="bg-[#f9f5ec] py-16 px-5">
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-18px);
          }
        }
        .slide-in {
          animation: fadeSlideIn 0.5s ease forwards;
        }
        .slide-out {
          animation: fadeSlideOut 0.5s ease forwards;
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] leading-tight tracking-tight">
            What our customers are saying
          </h2>
        </div>

        {/* Card */}
        <div className="relative">
          {/* Outgoing */}
          {isAnimating && prev !== null && (
            <div className="slide-out absolute inset-0 pointer-events-none">
              <TestimonialCard t={testimonials[prev]} />
            </div>
          )}

          {/* Incoming */}
          <div className={isAnimating ? "slide-in" : ""}>
            <TestimonialCard t={t} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                startTimer();
                goTo(i);
              }}
              disabled={isAnimating}
              aria-label={`Go to ${i + 1}`}
              className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed
                ${
                  i === current
                    ? "w-7 h-2 bg-[#111]"
                    : "w-2 h-2 bg-[#ccc] hover:bg-[#999]"
                }`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-[#bbb] mt-3 tracking-widest">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-white border border-[#e8e0d0] rounded-2xl p-10 shadow-[0_8px_48px_rgba(17,24,39,0.07)] max-sm:p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#f5a623"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[1.08rem] leading-[1.8] text-[#2b2b2b] mb-8 max-sm:text-base">
        "{t.feedback}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-[#ede8de] pt-6">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-[#e8e0d0]"
          />
        ) : (
          <div
            className="w-11 h-11 rounded-full bg-[#f0ebe0] ring-2 ring-[#e8e0d0]
            flex items-center justify-center text-[#a0855b] font-bold text-base"
          >
            {t.name?.[0]}
          </div>
        )}
        <div>
          <strong className="text-sm font-bold text-[#111] block">
            {t.name}
          </strong>
          <span className="text-xs text-[#888] mt-0.5 block">{t.role}</span>
        </div>
      </div>
    </div>
  );
}
// --------------------------------------------
// Main Page
// --------------------------------------------
export default function Home() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(!hasLoaded);
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
  const [sending, setSending] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState(0);
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

  const roles = useMemo(
    () => ["All", ...Array.from(new Set(members.map((m) => m.role)))],
    [],
  );
  const shown = useMemo(
    () =>
      members.filter((m) => {
        const matchesRole = role === "All" || m.role === role;
        const matchesQ =
          !q ||
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.role.toLowerCase().includes(q.toLowerCase());
        return matchesRole && matchesQ;
      }),
    [q, role],
  );

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      hasLoaded = true;
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  const handlePhoneChange = (e) => {
    setFormData((s) => ({
      ...s,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));
  };

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
  const handleMouseMove = (e) => {
    const section = sectionRef.current;

    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    section.style.setProperty("--mx", `${x}px`);
    section.style.setProperty("--my", `${y}px`);
  };

  return (
    <>
      <main>
        <Header />
        <section
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          className="relative w-full min-h-screen bg-[#0c0322] text-white overflow-hidden flex flex-col"
          style={{ "--mx": "50%", "--my": "50%" }}
        >
          {/* ── GRID BACKGROUND ── */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(167,139,250,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* ── CURSOR GLOW ── */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(
                600px circle at var(--mx) var(--my),
                rgba(124,58,237,0.13) 0%,
                rgba(79,31,191,0.07) 40%,
                transparent 70%
              )`,
            }}
          />

          {/* ── GRID CURSOR HIGHLIGHT — cells light up near cursor ── */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: `radial-gradient(
                200px circle at var(--mx) var(--my),
                rgba(167,139,250,0.06) 0%,
                transparent 100%
              )`,
              backgroundImage: `
                linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
            }}
          />

          {/* ── Dark gradient overlay on top of grid ── */}
          <div className="absolute inset-0 z-2 bg-linear-to-b from-[#0F032B]/80 via-[#0F032B]/40 to-[#0F032B]/90 pointer-events-none" />
          <div className="w-full h-[650px] absolute -bottom-2 z-10 hidden md:block">
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
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>
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

          {/* Soft purple glow top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-[#6d28d9]/8 blur-[140px] z-[2] pointer-events-none" />
          {/* Soft purple glow bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-75 rounded-full bg-[#4c1d95]/5 blur-[110px] z-2 pointer-events-none" />

          {/* ════════════════════════════════════
              LEFT SIDE PANEL
          ════════════════════════════════════ */}
          <div className="absolute left-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
            <div
              className="flex flex-col items-center gap-3"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
              <span
                className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Digital Agency
              </span>
            </div>
            <span
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                letterSpacing: "0.3em",
                color: "transparent",
                WebkitTextStroke: "1px rgba(167,139,250,0.12)",
              }}
            >
              UNNITY
            </span>
            <div
              className="flex flex-col items-center gap-3"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span
                className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Est. 2024
              </span>
              <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/[0.06] to-transparent" />
          </div>

          {/* ════════════════════════════════════
              RIGHT SIDE PANEL
          ════════════════════════════════════ */}
          <div className="absolute right-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
            <div
              className="flex flex-col items-center gap-3"
              style={{ writingMode: "vertical-rl" }}
            >
              <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
              <span
                className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                50+ Brands
              </span>
            </div>
            <span
              style={{
                writingMode: "vertical-rl",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
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
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Scroll Down
              </span>
              <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/[0.06] to-transparent" />
          </div>

          <div className="relative top-8 z-10 flex-1 flex flex-col items-center justify-center text-center px-6 lg:px-20 pt-20 pb-8">
            {/* Pill label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse shrink-0" />
              <span
                className="text-[11px] font-medium text-white/50 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Elevate your business to the next level
              </span>
            </div>

            {/* Headline */}
            <h1
              className="max-w-200 w-full"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block text-white">Crafting Digital Brands</span>
              <span className="block mt-1 bg-linear-to-r from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                That Stand Out.
              </span>
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-[#a78bfa]/40 my-5" />

            {/* Body */}
            <p
              className="text-balance leading-[1.85] text-white/45 max-w-[600px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              At <span className="text-white/70 font-medium">Unnity</span>, we
              help brands grow in the digital world. Our tailored marketing
              solutions boost your online presence, engage your audience, and
              drive real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap justify-center mt-8">
              {[
                {
                  href: "https://calendly.com/sayam-unnity/30min",
                  label: "Start Your Free Trial",
                  primary: false,
                },
                {
                  href: "/case-studies",
                  label: "View Portfolio",
                  primary: true,
                },
              ].map(({ href, label, primary }) => (
                <Link key={label} href={href}>
                  <button
                    className={`group flex items-center gap-3 text-[#0f032b] ${primary ? "bg-[#0f032b] text-white border border-white/20" : "bg-white"} hover:bg-[#0f032b] hover:text-white hover:border hover:border-white px-6 py-2.5 rounded-full text-base font-medium overflow-hidden cursor-pointer transition-all duration-200 max-sm:w-full max-sm:justify-center`}
                  >
                    {label}
                    <span className="relative w-7 h-7 overflow-hidden rounded-full bg-[#0f032b] text-white flex-shrink-0">
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#0f032b]">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </span>
                  </button>
                </Link>
              ))}
            </div>

            {/* Trust row */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 py-6">
              <div className="flex -space-x-2.5">
                {[
                  "/cupid1.png",
                  "/hub1.png",
                  "/empire1.png",
                  "/wow-heads.png",
                  // "/plusss.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border border-[#4e3f8be6] flex items-center justify-center text-[9px] font-bold overflow-hidden cursor-zoom-in hover:scale-150 transition-all duration-200"
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="hidden md:block h-4 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-2.5 h-2.5 text-[#a78bfa]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span
                  className="text-[11px] text-white/30"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Trusted by 50+ brands
                </span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════
              BOTTOM — SERVICE BADGES
          ══════════════════════════════════ */}
          <div className="relative z-10 w-full px-6 lg:px-20 pb-8">
            <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-5" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  icon: <LuZap className="w-4 h-4 text-[#a78bfa]" />,
                  tag: "Creative",
                  title: "Graphic Design",
                  desc: "Designs that demand attention",
                  sub: "Design That Converts",
                  tagColor:
                    "text-[#a78bfa] border-[#a78bfa]/25 bg-[#a78bfa]/10",
                  featured: false,
                },
                {
                  icon: <FaFire className="w-4 h-4 text-[#c4b5fd]" />,
                  tag: "ROI",
                  title: "Performance Marketing",
                  desc: "Clicks to customers",
                  sub: "ROAS Optimization",
                  tagColor:
                    "text-[#c4b5fd] border-[#c4b5fd]/25 bg-[#c4b5fd]/10",
                  featured: true,
                },
                {
                  icon: <IoDiamondOutline className="w-4 h-4 text-[#a78bfa]" />,
                  tag: "UI/UX",
                  title: "Website Design",
                  desc: "Built to impress and perform",
                  sub: "Pixel Perfect",
                  tagColor:
                    "text-[#a78bfa] border-[#a78bfa]/20 bg-[#a78bfa]/10",
                  featured: false,
                },
              ].map(({ icon, tag, title, desc, sub, tagColor, featured }) => (
                <div
                  key={title}
                  className={`group relative flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden cursor-default
                    ${
                      featured
                        ? "border-[#a78bfa]/30 bg-[#0e0b28]/90 hover:shadow-[0_8px_28px_rgba(167,139,250,0.15)]"
                        : "border-white/[0.07] bg-[#0b0920]/80 hover:border-white/12"
                    }`}
                >
                  <div
                    className={`absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent ${featured ? "via-[#a78bfa]/45" : "via-white/8"} to-transparent`}
                  />
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[2.5px] rounded-full bg-linear-to-b ${featured ? "from-[#c4b5fd] to-[#8b5cf6]" : "from-[#a78bfa]/45 to-[#7c3aed]/15"}`}
                  />

                  <div
                    className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border ${featured ? "bg-[#a78bfa]/12 border-[#a78bfa]/25" : "bg-white/[0.04] border-white/[0.07]"}`}
                  >
                    {icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[13px] font-semibold text-white leading-none"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {title}
                      </span>
                      <span
                        className={`text-[9px] px-1.5 py-0.75 rounded-md font-semibold uppercase tracking-wider border ${tagColor}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {tag}
                      </span>
                    </div>
                    <p
                      className="text-[11.5px] text-white/38"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {desc} · <span className="text-white/20">{sub}</span>
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 text-white/12 group-hover:text-[#a78bfa]/50 shrink-0 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* HERO END */}

        {/* ===========================
            PARTNERS
      =================================== */}
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

        {/* ═══════════════════════════════
            FEATURES CAROUSEL
        ═══════════════════════════════ */}
        <div className="px-5 text-center py-12 overflow-hidden bg-white">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center mb-10">
            Elevate Your Brand with Our Marketing Expertise
          </h1>
          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white/10 to-transparent pointer-events-none z-10" />
            <div
              className="flex justify-center gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory max-sm:flex-col max-sm:items-center max-sm:overflow-x-visible"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0,0,0,0.2) rgba(0,0,0,0.05)",
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative snap-start rounded-[18px] overflow-hidden shrink-0 w-60 h-96 transition-all duration-500 cursor-pointer hover:w-80 group max-sm:w-full max-sm:max-w-sm max-sm:h-36 max-sm:hover:h-96 max-sm:hover:w-full"
                >
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[rgba(14,14,24,0.75)] transition-opacity duration-400 group-hover:opacity-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/70 to-transparent text-white transition-all duration-700 group-hover:p-8">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-2xl transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-28 transition-all duration-700 delay-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
            LOGO SLIDER
        ═══════════════════════════════ */}
        <div className="overflow-hidden bg-white py-12 border-t border-black/5">
          <h1 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight">
            Trusted by Leading Brands
          </h1>
          <div className="flex w-max gap-16 items-center animate-[scroll_40s_linear_infinite]">
            {[...LOGO_IMAGES, ...LOGO_IMAGES].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={0}
                height={0}
                sizes="200px"
                alt="Brand Logo"
                className="h-14 w-auto object-contain py-1.5 transition-all duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/*----------------------------
            LEAD FORM
        ------------------------------- */}
        <section className="bg-[#fafbff] py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
            <div className="relative">
              <div className="relative rounded-full bg-[radial-linear(120%_120%_at_30%_20%,#fff_0%,#f3f5fb_45%,#efeefe_100%)] border-2 border-[#ececf6] aspect-square grid place-items-center overflow-hidden max-lg:max-w-lg max-lg:mx-auto">
                <Image
                  src="/sayyam2.png"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 520px"
                  alt="Sayam Jain"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div>
              <span className="text-[#070c1a] text-3xl font-bold">
                Your Growth Partner in the Digital Era
              </span>
              <p className="my-4 mb-6 text-[#5f6577] text-base">
                Let's create impact — fill in the form and we'll take it from
                there.
              </p>

              <form onSubmit={submitHandler} ref={formRef}>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {[
                    {
                      id: "companyName",
                      label: "Company Name",
                      type: "text",
                      placeholder: "Company Name",
                      required: true,
                    },
                    {
                      id: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Name",
                      required: true,
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "Phone Number",
                    },
                    {
                      id: "designation",
                      label: "Designation",
                      type: "text",
                      placeholder: "Designation",
                    },
                  ].map(({ id, label, type, placeholder, required }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label htmlFor={id} className="text-base text-[#5f6577]">
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
                        className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                    <label htmlFor="email" className="text-base text-[#5f6577]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, email: e.target.value }))
                      }
                      className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                    />
                  </div>

                  {[
                    {
                      id: "budget",
                      label: "Monthly Marketing Budget",
                      options: [
                        "Monthly Marketing Budget",
                        "Less Than Rs 2L Budget",
                        "Rs 2L to Rs 5L",
                        "Rs 5L to Rs 25L",
                        "More Than 50L",
                        "I am Looking For Organic Services",
                      ],
                    },
                    {
                      id: "service",
                      label: "Choose A Service",
                      options: [
                        "Choose A Service",
                        "SEO",
                        "Paid Marketing (Google, Facebook & Amazon ads)",
                        "UI/UX",
                        "Website Development",
                        "Website Maintenance",
                        "Shopify Migration",
                      ],
                    },
                  ].map(({ id, label, options }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label htmlFor={id} className="text-base text-[#5f6577]">
                        {label}
                      </label>
                      <select
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={(e) =>
                          setFormData((s) => ({ ...s, [id]: e.target.value }))
                        }
                        className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] appearance-none"
                      >
                        {options.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                {status.message && (
                  <div
                    className={`mt-2 p-3 rounded-lg text-base ${status.type === "error" ? "bg-[#fff1f1] text-[#a21d1d] border border-[#ffd6d6]" : "bg-[#e9f9ef] text-[#176a3a] border border-[#c6efcf]"}`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-4 w-full bg-[#130435] hover:bg-[#0d0325] text-white font-bold py-3.5 px-5 border-0 rounded-xl cursor-pointer transition-all active:translate-y-px disabled:opacity-65 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ----------------------------
            TOP CHOICE
        ---------------------------- */}
        <section className="py-12 px-5 bg-[#0f032b] text-white text-center max-md:px-8 max-sm:px-5">
          <div className="max-w-3xl mx-auto mb-16 max-md:mb-10">
            <h1 className="text-5xl font-bold leading-tight mb-5 max-md:text-4xl max-sm:text-3xl">
              Why brands choose Unnity
            </h1>
            <p className="md:text-lg leading-normal text-white/45 max-w-2xl mx-auto">
              Unnity helps thousands of brands grow through smart data, proven
              strategies, and tools designed to simplify marketing while driving
              real conversions.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-10 max-w-5xl mx-auto max-md:grid-cols-2 max-md:gap-8 max-sm:gap-5 max-[400px]:grid-cols-1">
            {[
              {
                prefix: "$",
                to: 600,
                suffix: "+",
                label: "Monthly Ad Revenue",
              },
              {
                prefix: "$",
                to: 300,
                suffix: "+",
                label: "Max Monthly Budget",
              },
              {
                prefix: "",
                to: 70,
                suffix: "+",
                label: "Global Brands Scaled",
              },
              { prefix: "", to: 15, suffix: "+", label: "Specialist Team" },
            ].map(({ prefix, to, suffix, label }, i) => (
              <div
                key={i}
                className="py-10 px-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="text-4xl md:text-5xl font-semibold md:font-bold text-white mb-4 flex items-center justify-center gap-1">
                  {prefix}
                  <CountUp
                    from={0}
                    to={to}
                    separator=""
                    direction="up"
                    duration={2}
                    startCounting
                  />
                  {suffix}
                </div>
                <p className="text-white/70 font-medium tracking-wide text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------
            CASE STUDIES
        ----------------------------*/}
        <section className="bg-[#f9fafb] py-12 md:py-20">
          <h1 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight px-4">
            Client Success Through Smart Digital Strategy
          </h1>
          <div className="px-5 pb-10">
            <div className="hidden max-w-5xl mx-auto md:grid grid-cols-3 gap-7 mb-7 max-[1100px]:grid-cols-2 max-[680px]:grid-cols-1">
              {steps.map((step, i) => (
                <Link
                  key={i}
                  href={step.href || "#"}
                  className="block no-underline text-inherit"
                >
                  <article className="bg-white rounded-2xl p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] flex flex-col gap-3 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(0,0,0,0.1)] hover:border hover:border-[#0f032b] max-md:gap-1">
                    <div className="w-14 h-14 rounded-full bg-[#0f032b] text-white font-bold text-lg flex items-center justify-center max-md:w-12 max-md:h-12">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0f172a] mt-1">
                      {step.title}
                    </h3>
                    <p className="text-[#4b5563] text-base leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-1.5 rounded-2xl overflow-hidden shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={0}
                        height={0}
                        sizes="(max-width: 680px) 100vw, 50vw"
                        className="w-full h-auto block object-cover transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            {/* for sm or mobile screen slider*/}
            {/* Mobile Slider */}
            <div className="md:hidden w-full mb-8 overflow-x-auto">
              <div className="flex gap-5 px-5 snap-x snap-mandatory scroll-smooth">
                {steps.map((step, i) => (
                  <Link
                    key={i}
                    href={step.href || "#"}
                    className="snap-center shrink-0 max-w-sm w-full"
                  >
                    <article className="bg-white rounded-2xl p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] flex flex-col gap-3 h-full transition-all duration-200 hover:border hover:border-[#0f032b]">
                      <div className="w-14 h-14 rounded-full bg-[#0f032b] text-white font-bold text-lg flex items-center justify-center">
                        {step.number}
                      </div>

                      <h3 className="text-xl font-extrabold text-[#0f172a]">
                        {step.title}
                      </h3>

                      <p className="text-[#4b5563] text-base leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-2 rounded-2xl overflow-hidden shadow">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/case-studies">
                <button className="bg-[#0f032b] hover:bg-[#0b021f] text-white px-9 py-3.5 text-base font-semibold border-0 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------
            INTEGRATION / PORTFOLIO
        ---------------------------- */}
        <section className="flex justify-center pb-12 md:pb-20 bg-white">
          <div className="w-[95%] flex justify-center gap-10 px-16 py-16 bg-[#0f032b] overflow-hidden rounded-[21px] max-md:px-5 max-md:rounded-2xl">
            {/* Marquee columns */}
            <div className="relative flex max-md:hidden">
              <div className="absolute left-0 top-0 w-full h-10 bg-linear-to-b from-[#070c1a] to-transparent z-20 pointer-events-none" />
              <div className="absolute left-0 bottom-0 w-full h-10 bg-linear-to-t from-[#070c1a] to-transparent z-20 pointer-events-none" />
              {["up", "down", "up"].map((direction, colIdx) => (
                <div
                  key={colIdx}
                  className="w-56 h-[500px] overflow-hidden relative"
                >
                  <div
                    className={`w-[185px] flex flex-col gap-12 ${direction === "up" ? "animate-[scroll-up_20s_linear_infinite]" : "animate-[scroll-down_20s_linear_infinite]"}`}
                  >
                    {[...columns[colIdx], ...columns[colIdx]].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center pb-2.5"
                        >
                          <Link
                            href={item.href}
                            target="_blank"
                            className="flex flex-col items-center no-underline text-inherit"
                          >
                            <div className="relative w-46.25 h-60 overflow-hidden rounded-t-2xl">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                width={185}
                                height={240}
                                className="object-cover w-46.25 h-60 block"
                                sizes="185px"
                              />
                            </div>
                            <h3 className="text-base font-semibold text-[#333] text-center px-2.5 pt-2">
                              {item.alt}
                            </h3>
                          </Link>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right text */}
            <div className="max-w-md flex flex-col justify-center">
              <h1 className="text-5xl text-white leading-tight mb-5 max-md:text-3xl">
                Real projects shipped, measurable results
              </h1>
              <p className="md:text-lg leading-normal text-white/45 mb-8">
                A snapshot of the work we've delivered — websites, funnels, and
                performance campaigns that moved the needle for our clients.
              </p>
              <Link href="/snapshot-project">
                <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 w-fit">
                  Explore our work
                  <span className="relative w-7 h-7 overflow-hidden shrink-0">
                    <span className="absolute inset-0 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0f032b"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center transition-all duration-300 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            TESTIMONIALS SLIDER
        ═══════════════════════════════ */}
        <TestimonialSlider testimonials={testimonials} />

        {/* ═══════════════════════════════
            TEAM
        ═══════════════════════════════ */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <header className="flex justify-between items-end gap-5 mb-7 flex-wrap">
              <div>
                <h2 className="text-[clamp(28px,3.2vw,42px)] leading-tight text-[#111] font-bold mb-2">
                  Meet The Team
                </h2>
                <p className="text-[#555] text-base">
                  The people behind your performance wins.
                </p>
              </div>
              <div className="flex gap-3 items-center overflow-hidden max-w-sm w-full">
                <input
                  type="text"
                  placeholder="Search by name or role"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="h-10 min-w-52 px-3 rounded-xl border border-[#b9b9b9] bg-white text-[#111] outline-none transition-all focus:border-blue-700 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.12)]"
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-10 border border-[#b9b9b9] rounded-xl min-w-20 bg-white text-[#111] px-3 outline-none cursor-pointer"
                >
                  {roles.map((r) => (
                    <option key={r} value={r} className="-ml-10">
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </header>

            <div className="grid grid-cols-6 gap-5 max-[1100px]:grid-cols-4 max-[820px]:grid-cols-3 max-[520px]:grid-cols-2">
              {shown.map((m, i) => (
                <article
                  key={i}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="relative aspect-3/4 w-full overflow-hidden">
                    <Image
                      src={m.photo}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-transform duration-300 translate-y-1 group-hover:-translate-y-2 max-sm:p-4">
                      <h3 className="text-xl text-white font-extrabold tracking-wide mb-1.5 max-sm:text-base">
                        {m.name}
                      </h3>
                      <div className="text-white/90 font-semibold text-sm tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100 max-sm:text-xs">
                        {m.role}
                      </div>
                    </div>
                    <div className="absolute inset-0 z-0 bg-black/0 group-hover:bg-black/40">
                      {" "}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        h1,
        h2 {
          font-family: "Urbanist", sans-serif;
        }
      `}</style>
    </>
  );
}
