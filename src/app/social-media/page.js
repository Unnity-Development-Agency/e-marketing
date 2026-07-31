"use client";
import Marquee from "react-fast-marquee";
import React, { useState } from "react";
import Header from "@/components/Header/page";
import Link from "next/link";
import BrandsHero from "@/components/reactBits/HeroSection";
import socialData from "@/data/social-media.json";

const Social = () => {
  const [selectedBrand, setSelectedBrand] = useState(socialData[0]);
  const [playingReel, setPlayingReel] = useState(null);
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
            We blend design aesthetics with performance strategy.
            The result? Creatives that captivate and campaigns that convert.
          </p>
        </div>
      </div>

      {/* ================= BRAND SELECTOR ================= */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            Select Client Account
          </h2>

          <span className="text-sm text-gray-400">
            Managing {socialData.length} Brand Accounts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {socialData.map((brand) => (

            <div
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className={`cursor-pointer rounded-3xl p-5 transition duration-300 border

              ${
                selectedBrand.id === brand.id
                  ? "border-[#4F46E5] "
                  : " hover:border-gray-500"
              }`}

            >

              <div className="flex items-center gap-4">

                <img
                  src={brand.logo}
                  alt={brand.title}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-semibold text-lg">
                    {brand.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {brand.username}
                  </p>

                  <span className="text-xs text-gray-500">
                    {brand.industry}
                  </span>

                </div>

              </div>

            </div>

          ))}

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

<div className="max-w-7xl mx-auto px-6 py-20">

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

          {/* <div className="p-3">

            <div className="flex justify-between mb-5 text-sm">

              <span>❤️ {post.likes}</span>

              <span>💬 {post.comments}</span>

              <span>📤 {post.shares}</span>

            </div>

            <p className="text-gray-600 leading-7 line-clamp-3">
              {post.caption}
            </p>

          </div> */}

        </div>

      </div>

    ))}

  </Marquee>

</div>

{/* ================= EXPECTATIONS ================= */}
{/* ================= EXPECTATIONS ================= */}

<div className="max-w-7xl mx-auto px-6 py-20 bg-[#dbd6e4] rounded-3xl">

  <div className="text-center mb-14">

    <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b] leading-tight">
      What you can expect from{" "}
      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Social Media Marketing
      </span>
    </h2>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

    {[
      {
        icon: "📈",
        title: "Widespread Reach"
      },
      {
        icon: "✔️",
        title: "Higher Brand Visibility"
      },
      {
        icon: "💬",
        title: "Higher Engagement"
      },
      {
        icon: "👍",
        title: "Viral Potential"
      },
      {
        icon: "🕒",
        title: "Real-time Feedback"
      },
      {
        icon: "🌐",
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

        <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-6">
          {item.icon}
        </div>

        <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">
          {item.title}
        </h3>

        <p className="text-sm leading-6 text-[#1e1b4b] opacity-80">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>
{/* ===========================================
      NEXT PART

      TOP PERFORMING REELS

=========================================== */}


{/* ================= TOP PERFORMING REELS ================= */}
{/* ================= TOP PERFORMING REELS ================= */}

<div className="max-w-7xl mx-auto px-6 py-16">

  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">

    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b]">
        Top Performing Reels
      </h2>

      <p className="text-gray-400 mt-2">
        Watch our best-performing Instagram reels.
      </p>
    </div>

    <div className="px-5 py-2 rounded-full bg-indigo-600 text-white font-medium w-fit">
      {selectedBrand.reels.length} Reels
    </div>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

    {selectedBrand.reels.map((reel) => (

      <div
        key={reel.id}
        className="overflow-hidden rounded-3xl  hover:shadow-2xl transition-all duration-300"
      >

        <div
          className="relative cursor-pointer"
          onClick={() =>
            setPlayingReel(
              playingReel === reel.id ? null : reel.id
            )
          }
        >

          {playingReel === reel.id ? (

            <video
              src={reel.video}
              controls
              autoPlay
              playsInline
              className="w-full aspect-[9/16] object-cover"
            />

          ) : (

            <>
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full aspect-[9/16] object-cover transition duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">

                  <svg
                    width="30"
                    height="30"
                    fill="#4F46E5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>

                </div>

              </div>

            </>

          )}

        </div>

        <div className="p-5">

          <h3 className="font-semibold text-lg text-white line-clamp-1">
            {reel.title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Instagram Reel
          </p>

          <div className="flex justify-between mt-5 text-sm">

            <div className="flex items-center gap-2 text-pink-500">
              ❤️
              <span className="text-gray-300">
                {reel.likes}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sky-400">
              💬
              <span className="text-gray-300">
                {reel.comments}
              </span>
            </div>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

{/* ================= CTA ================= */}

<div className="max-w-7xl mx-auto px-6 py-20">

  <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 text-center">

    <h2 className="text-4xl font-bold mb-4">

      Ready to Grow Your Brand?

    </h2>

    <p className="text-lg text-gray-200 max-w-3xl mx-auto">

      We blend creativity, strategy and performance marketing to
      help brands dominate social media.

    </p>

    <button className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 duration-300">

      Let's Talk

    </button>

  </div>

</div>

</section>
  );
};

export default Social;