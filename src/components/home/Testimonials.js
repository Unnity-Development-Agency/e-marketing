"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Original HTML mein testimonials placeholders hain.
// Publish karne se pehle actual client details add karna.
const testimonials = [
  {
    id: "client-1",
    quote:
      "[Client testimonial — what changed after working with Unnity, ideally with a number.]",
    name: "Client name",
    role: "Founder, Brand",
    initials: "A",
    image: "",
    rating: 5,
  },
  {
    id: "client-2",
    quote:
      "[Client testimonial — what changed after working with Unnity, ideally with a number.]",
    name: "Client name",
    role: "Marketing Head, Brand",
    initials: "B",
    image: "",
    rating: 5,
  },
  {
    id: "client-3",
    quote:
      "[Client testimonial — what changed after working with Unnity, ideally with a number.]",
    name: "Client name",
    role: "Co-founder, Brand",
    initials: "C",
    image: "",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure
      className={[
        "group relative m-0 flex min-w-0 flex-col",
        "rounded-[20px] border border-[#1B1855]/10",
        "bg-white p-6 sm:p-7",
        "shadow-[0_1px_2px_rgba(27,24,85,0.04),0_12px_32px_-18px_rgba(27,24,85,0.22)]",
        "transition-all duration-300",
        "hover:border-[#0f032b]/25",
        "hover:shadow-[0_25px_50px_-25px_rgba(27,24,85,0.3)]",
        "motion-safe:hover:-translate-y-1",
        "motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Rating and quote icon */}
      <div className="flex items-center justify-between gap-4">
        <div
          role="img"
          aria-label={`${testimonial.rating} out of 5 stars`}
          className="flex items-center gap-1 text-[#CA8A04]"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              strokeWidth={1.5}
              className={[
                "h-4 w-4",
                index < testimonial.rating
                  ? "fill-current"
                  : "fill-transparent text-[#1B1855]/15",
              ].join(" ")}
            />
          ))}
        </div>

        <Quote
          aria-hidden="true"
          strokeWidth={1.5}
          className="h-7 w-7 text-[#6D63F2]/30"
        />
      </div>

      {/* Client quote */}
      <blockquote className="m-0 mb-7 mt-5 flex-1">
        <p className="text-[15px] leading-7 text-[#3A3760]">
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Client identity */}
      <figcaption className="flex items-center gap-3 border-t border-[#1B1855]/10 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1B1855] to-[#6D63F2] text-sm font-semibold text-white">
          {testimonial.image && !imageFailed ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={44}
              height={44}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <span aria-hidden="true">
              {testimonial.initials}
            </span>
          )}
        </span>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#14123A]">
            {testimonial.name}
          </p>

          <p className="mt-1 text-xs leading-5 text-[#5F5C80]">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-9 max-w-[720px] sm:mb-12">
          <SectionHeading
            eyebrow="Client love"
            title="95% of our work comes from"
            highlightedText="referrals."
            description="Here's why clients keep sending their friends our way."
          />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}