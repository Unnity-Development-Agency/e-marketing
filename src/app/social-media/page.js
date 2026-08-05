"use client";
import Marquee from "react-fast-marquee";
import React, { useState } from "react";
import Header from "@/components/Header/page";
import Link from "next/link";
import BrandsHero from "@/components/reactBits/HeroSection";
import socialData from "@/data/social-media.json";
import { image } from "framer-motion/client";
import Footer from "@/components/footer/page";

const Social = () => {
  const [selectedBrand, setSelectedBrand] = useState(socialData[0]);
    const [mutedReels, setMutedReels] = useState({});

  const toggleMute = (id) => {
    setMutedReels((prev) => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id],
    }));
  };

  // const [playingReel, setPlayingReel] = useState(null);
  return (
    <section className="min-h-screen text-white">
      <Header />

      {/* ================= HERO ================= */}
      <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60 flex items-center">
        <BrandsHero />

        <div className="absolute flex flex-col gap-2 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
          <p className="text-sm">
            <Link href="/">Home</Link> / Creative
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold">
            Social Media
          </h1>

          <p className="text-sm md:text-base max-w-2xl">
            Everything your social media needs, under one roof - creative posts, high-performing reels, grid planning, content creation, script writing, and influencer marketing designed to elevate your brand.
          </p>
        </div>
      </div>

      {/* ================= BRAND SELECTOR ================= */}

     <div className="max-w-[1350px] mx-auto px-6 pt-6">

  {/* Top Right Text */}
  <div className="flex justify-end mb-10">
    <span className="text-sm text-gray-400">
      Managing {socialData.length} Brand Accounts
    </span>
  </div>

  {/* Brand Tabs */}
 <div className="border-b border-gray-200 relative">

  <div
    className="
      flex items-center
      gap-6 md:gap-9
      overflow-x-auto
      scroll-smooth
      snap-x snap-mandatory
      px-4 md:px-0
      md:justify-center
      scrollbar-hide
      overflow-y-hidden
    "
  >
    {socialData.map((brand) => {
      const isSelected = selectedBrand.id === brand.id;

      return (
        <button
          key={brand.id}
          onClick={() => setSelectedBrand(brand)}
          className={`
            relative
            flex-shrink-0
            snap-start
            px-3 md:px-5
            pb-3 md:pb-4
            text-xs md:text-sm
            font-bold
            uppercase
            tracking-[0.1em] md:tracking-[0.15em]
            transition-all
            duration-300
            whitespace-nowrap

            ${
              isSelected
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }
          `}
        >

          {brand.username}

          {/* Active Underline */}
          {isSelected && (
            <span
              className="
                absolute
                left-0
                right-0
                -bottom-[1px]
                h-[2px] md:h-[3px]
                bg-black
                rounded-full
              "
            />
          )}

        </button>
      );
    })}
  </div>

</div>

</div>

      {/* ==============================================
          NEXT PART STARTS HERE

          Selected Brand ka data niche use hoga

          selectedBrand.posts

          selectedBrand.reels

      ============================================== */}

      {/* ================= SOCIAL FEED ================= */}

{/* ================= SOCIAL POSTS ================= */}

<div className="max-w-[1350px] mx-auto px-6 py-20">

  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">

    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b]">
        Social Feed
      </h2>

      <p className="text-gray-500 mt-3">
        Explore our latest social media creatives and campaigns.
      </p>
    </div>

    <div className="flex items-center gap-4">

      <img
        src={selectedBrand.logo}
        alt={selectedBrand.title}
        className="w-14 h-14 rounded-full object-cover border"
      />

      <div>
        <h3 className="font-semibold text-lg text-[#1e1b4b]">
          {selectedBrand.title}
        </h3>

        <p className="text-gray-500">
          {selectedBrand.username}
        </p>
      </div>

    </div>

  </div>

  <Marquee
    speed={45}
    gradient={false}
    pauseOnHover={true}
    pauseOnClick={false}
    autoFill={true}
  >

    {selectedBrand.posts.map((post) => (

      <div
        key={post.id}
        className="w-[340px] md:w-[380px] mx-4"
      >

        <div className="overflow-hidden rounded-[8px] bg-white shadow-lg hover:shadow-2xl transition-all duration-300">

          <div className="overflow-hidden">

            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-[520px] object-contain hover:scale-105 duration-500"
            />

          </div>
        </div>

      </div>

    ))}

  </Marquee>

</div>

{/* ================= EXPECTATIONS ================= */}
{/* ================= EXPECTATIONS ================= */}

{/* <div className="max-w-7xl mx-auto px-6 py-20 bg-[#1e1b4b] rounded-3xl">

  <div className="text-center mb-14">

    <h2 className="text-3xl md:text-5xl font-bold text-[#FFF] leading-tight">
      What you can expect from{" "}
      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Social Media Marketing
      </span>
    </h2>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

    {[
      {
        image:"/247 Availability.png",
        title: "Widespread Reach"
      },
      {
        image:"/Higher Brand Visibility.png",
        title: "Higher Brand Visibility"
      },
      {
        image:"/Higher engagement .png",
        title: "Higher Engagement"
      },
      {
        image:"/Viral Potential.png",
        title: "Viral Potential"
      },
      {
         image:"Real-time Feedback.png",
        title: "Real-time Feedback"
      },
      {
         image:"/5.png",
        title: "Vernacular Content"
      },
    ].map((item, index) => (

      <div
        key={index}
        className={`rounded-3xl bg-white p-8 text-center transition-all duration-300 border ${
          index === 3
            // ? "border-orange-500 shadow-[0_0_35px_rgba(249,115,22,.25)]"
            // : "border-transparent hover:border-orange-300"
        }`}
      >

        <img src={item.image} className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-6">
        </img>

        <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">
          {item.title}
        </h3>

        <p className="text-sm leading-6 text-[#1e1b4b] opacity-80">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div> */}


<div className="max-w-[1350px] mx-auto px-4 md:px-6 py-12 md:py-20 bg-[#1e1b4b] rounded-[8px]">

  <div className="text-center mb-10 md:mb-14">

    <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight px-2">
      What you can expect from{" "}
      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Social Media Marketing
      </span>
    </h2>

  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">

    {[
      {
        image: "/247 Availability.png",
        title: "Widespread Reach",
        desc: "Reach audiences across every major platform, all day, every day.",
      },
      {
        image: "/Higher Brand Visibility.png",
        title: "Higher Brand Visibility",
        desc: "Stay top of mind with consistent, recognizable presence.",
      },
      {
        image: "/Higher engagement .png",
        title: "Higher Engagement",
        desc: "Spark conversations that turn viewers into loyal followers.",
      },
      {
        image: "/Viral Potential.png",
        title: "Viral Potential",
        desc: "Content built to be shared, again and again.",
      },
      {
        image: "/Real-time Feedback.png",
        title: "Real-time Feedback",
        desc: "Know instantly what's working and what's not.",
      },
      // {
      //   image: "/5.png",
      //   title: "Vernacular Content",
      //   desc: "Speak your audience's language, literally.",
      // },
    ].map((item, index) => (

      <div
        key={index}
        className={`rounded-2xl md:rounded-3xl bg-white p-4 md:p-8 text-center transition-all duration-300 border`}
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-orange-100 object-contain p-2 mb-4 md:mb-6"
        />

        <h3 className="text-sm md:text-lg font-semibold text-[#1e1b4b] mb-1.5 md:mb-3">
          {item.title}
        </h3>

        <p className="hidden sm:block text-sm leading-6 text-[#1e1b4b] opacity-80">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>


{selectedBrand.reels?.length > 0 && (
  <div className="max-w-[1350px] mx-auto px-6 py-16">

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">

      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b]">
          Top Performing Reels
        </h2>

        <p className="text-gray-400 mt-2">
          Watch our best-performing Instagram reels.
        </p>
      </div>

      <div className="px-5 py-2 rounded-[10px] bg-indigo-600 text-white font-medium w-fit">
        {selectedBrand.reels.length} Reels
      </div>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

      {selectedBrand.reels.map((reel) => {

        const isMuted = mutedReels[reel.id] !== false;

        return (
          <div
            key={reel.id}
            className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">

              <video
                src={reel.video}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full aspect-[9/16] object-cover"
              />

              <button
                type="button"
                onClick={() => toggleMute(reel.id)}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition flex items-center justify-center"
              >
                {isMuted ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>

            </div>
          </div>
        );

      })}

    </div>

  </div>
)}

{/* ================= CTA ================= */}

<div className="max-w-[1350px] mx-auto px-6 py-4">

  <div className="rounded-3xl bg-[#07032B] p-10 text-center">

    <h2 className="text-4xl font-bold mb-4">

      Ready to Grow Your Brand?

    </h2>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto">

      We blend creativity, strategy and performance marketing to
      help brands dominate social media.

    </p>

    <Link href="https://calendly.com/sayam-unnity/30min">
    <button className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 duration-300" link>

      Let's Talk

    </button>
     </Link>
  </div>

</div>
 <Footer/>
</section>

  );
};

export default Social;