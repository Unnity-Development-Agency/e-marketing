"use client";

import { MapPin, ArrowRight, Crosshair } from "lucide-react";

const cities = [
  {
    name: "Sydney",
    tagline: "Performance Marketing Agency in Sydney",
    image: "Sydney11.png",
    link: "/performance-marketing-agency-in-sydney",
  },
  {
    name: "Melbourne",
    tagline: "Performance Marketing Agency in Melbourne",
    image: "Melbourne11.png",
    link: "/performance-marketing-agency-in-melbourne",
  },
  {
    name: "Brisbane",
    tagline: "Performance Marketing Agency in Brisbane",
    image: "Brisbane11.png",
    link: "/performance-marketing-agency-in-brisbane",
  },
  {
    name: "Adelaide",
    tagline: "Performance Marketing Agency in Adelaide",
    image: "adelaide.png",
    link: "/performance-marketing-agency-in-adelaide",
  },
  {
    name: "Gold Coast",
    tagline: "Performance Marketing Agency in Gold Coast",
    image: "Gold-coast11.png",
    link: "/performance-marketing-agency-in-gold-coast",
  },
  {
    name: "Canberra",
    tagline: "Performance Marketing Agency in Canberra",
    image: "Canberraa.png",
    link: "/performance-marketing-agency-in-canberra",
  },
  {
    name: "Newcastle",
    tagline: "Performance Marketing Agency in Newcastle",
    image: "New-castlee.png",
    link: "/performance-marketing-agency-in-newcastle",
  },
  {
    name: "Sunshine Coast",
    tagline: "Performance Marketing Agency in Sunshine Coast",
    image: "sunshine-coast11.png",
    link: "/performance-marketing-agency-in-sunshine-coast",
  },
  {
    name: "Geelong",
    tagline: "Performance Marketing Agency in Geelong",
    image: "Geelonng.png",
    link: "/performance-marketing-agency-in-geelong",
  },
];

function CityCard({ name, tagline, image, link }) {
  return (
    <a
      href={link}
      className="group flex w-full flex-col overflow-hidden rounded-[14px] border border-[#1f3a5e] bg-[#070818] transition-colors duration-300 hover:border-[#00e4d3]/60 sm:w-[calc(50%-10px)] lg:w-[calc(20%-16px)]"
    >
      <div className="relative h-40 w-full overflow-hidden sm:h-[168px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 items-center justify-between gap-2 px-4 py-4">
        <div>
          <div className="flex items-center gap-1.5">
            <MapPin
              className="h-[15px] w-[15px] shrink-0 text-[#00e4d3]"
              strokeWidth={2.3}
            />

            <span className="text-[15px] font-semibold text-white">
              {name}
            </span>
          </div>

          <p className="mt-1.5 text-[13.5px] leading-[1.45] text-[#a3a7b7]">
            {tagline}
          </p>
        </div>

        <ArrowRight
          className="h-4 w-4 shrink-0 self-end text-[#00e4d3] transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </a>
  );
}

export default function AustraliaCoverageSection() {
  return (
    <section className="w-full bg-[#05040f] px-4 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-[0.3em] text-[#00e4d3]">
            WE ALSO OFFER SERVICES IN
          </p>

          <h2 className="mt-4 text-[40px] font-extrabold leading-[1.15] text-white sm:text-[46px]">
            Australia, Covered.
            <br />
            Results, Delivered.
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-[#00e4d3]" />

          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#a3a7b7]">
            While we&apos;re proud to be a leading performance marketing agency
            in Sydney, our impact extends across Australia. We help brands grow
            with tailored, data-driven marketing strategies in the following
            cities.
          </p>
        </div>

        {/* City Grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {cities.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-[16px] border border-[#1f3a5e] bg-[#05040f] px-6 py-5 sm:flex-row sm:px-7">

          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
              <Crosshair
                className="h-5 w-5 text-[#00e4d3]"
                strokeWidth={2}
              />
            </div>

            <p className="text-[15px] leading-snug text-[#a3a7b7]">
              <span className="font-semibold text-white">
                No matter where you are in Australia,
              </span>{" "}
              we bring strategy, creativity and performance together to grow
              your brand.
            </p>
          </div>

          <a
            href="https://calendly.com/sayam-unnity/30min"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-[#00e4d3] px-6 py-2.5 text-[14px] font-semibold text-[#00e4d3] transition-colors duration-300 hover:bg-[#00e4d3] hover:text-[#05040f]"
          >
            Let&apos;s Grow Together

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}