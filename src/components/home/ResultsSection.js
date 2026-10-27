import Image from "next/image";

const results = [
  {
    image: "/result-1.png",
    description:
      "We managed a ₹90.6 lakh monthly ad budget for a global eSIM brand. By refining targeting and bidding, we drove 6,700+ conversions in a month at ₹1,350 per conversion and a 12% conversion rate, reaching ~$15,000 in daily sales.",
  },
  {
    image: "/result-2.png",
    description:
      "A saree brand came to us in July with strong content but stalled growth. By restructuring their campaigns to make the most of that content, we grew revenue by 87% in a single month, crossing ₹20 lakh in sales.",
  },
  {
    image: "/result-3.png",
    description:
      "By managing Google and Meta ads for a lawn mower brand, we delivered its highest-ever monthly revenue of A$384K. That was a 20% jump in a single month, with orders up 36%.",
  },
  {
    image: "/result-4.png",
    description:
      "Over nine months, our Google and Meta campaigns for a lawn mower brand drove A$2.34M in gross sales, up 25% on the previous nine months, with orders up 35%.",
  },
  {
    image: "/result-5.png",
    description:
      "Over nine months, we drove ₹11 Cr in sales for an FMCG brand, nearly 40% more than the previous nine months, by cutting budget leakage and sharpening the focus of their ads.",
  },
  {
    image: "/result-6.png",
    description:
      "An apparel brand was stuck at ₹15L a month, with about 55% of sales coming from returning customers. We rebuilt their campaign funnel around new customer acquisition and grew sales 42% in a single month, to ₹22L+.",
  },
  {
    image: "/result-7.png",
    description:
      "Running Meta ads for an apparel brand, we turned ₹6.1L in monthly spend into ₹21.9L in revenue at a 3.58x ROAS. We got there through consistent creative testing and a focus on new customer acquisition, with 1,835 purchases in a month.",
  },
  {
    image: "/result-8.png",
    description:
      "For an Australian brand, we turned $4,490 in monthly Meta ad spend into $118K+ in revenue, a 26.44x ROAS, with 367 purchases in 30 days.",
  },
  {
    image: "/result-9.png",
    description:
      "For a dental chain with 500+ clinics across India, we managed ₹1.8 Cr in monthly Google Ads spend and generated nearly 48,000 conversions, at about ₹385 per conversion.",
  },
];

function ResultCard({ item }) {
  return (
    <article className="mr-6 flex w-[300px] shrink-0 flex-col rounded-3xl bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:w-[360px] md:w-[420px]">
      {/* Graph / Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="420px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-3 pt-5">
        <p className="leading-relaxed text-gray-500">{item.description}</p>
      </div>
    </article>
  );
}

export default function ResultsSection() {
  return (
    <section className="w-full overflow-hidden py-12 md:py-16">
      {/* Marquee keyframe */}
      <style>{`
        @keyframes results-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <h2 className="mb-10 px-4 text-center text-3xl font-bold text-[#0f032b] md:text-5xl">
        Rely On Us For Such Results
      </h2>

      {/* group = hover pe pause karne ke liye */}
      <div className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-[results-marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {/* Set 1 */}
          {results.map((item) => (
            <ResultCard key={item.description} item={item} />
          ))}

          {/* Set 2 (duplicate, seamless loop ke liye) */}
          {results.map((item) => (
            <div key={`dup-${item.description}`} aria-hidden="true">
              <ResultCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}