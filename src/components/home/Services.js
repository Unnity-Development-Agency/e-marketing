import SectionHeading from "./SectionHeading";
import ServiceVisual from "./ServiceVisual";

const services = [
  {
    id: "ads",
    number: "01",
    title: "Performance Marketing",
    description:
      "Our core. Paid campaigns built around ROAS and cost per lead — not vanity metrics.",
    tags: [
      "Meta Ads",
      "Google Search",
      // "Shopping & PMax",
      "Retargeting",
      "Creative testing",
      "Weekly reporting",
    ],
    cta: "Scale my ads",
    gridClass: "lg:col-span-7",
  },
  {
    id: "web",
    number: "02",
    title: "Website Development",
    description:
      "Fast, conversion-focused Shopify and WordPress builds your ads deserve to land on.",
    tags: [
      "Shopify",
      "WordPress",
      "Landing pages",
      "CRO",
      "Speed fixes",
    ],
    cta: "Build my site",
    gridClass: "lg:col-span-5",
  },
  {
    id: "social",
    number: "03",
    title: "Social & Creative",
    description:
      "Content and ad creatives that stop the scroll and sell.",
    tags: [
      "Reels",
      "Scripts",
      "Ad creatives",
      "Page management",
    ],
    cta: "Level up content",
    gridClass: "lg:col-span-4",
  },
  {
    id: "seo",
    number: "04",
    title: "SEO & AI Search",
    description:
      "Rank on Google and show up when buyers ask ChatGPT.",
    tags: [
      "Technical SEO",
      "Content",
      "Indexing",
      "GEO",
    ],
    cta: "Get found",
    gridClass: "lg:col-span-4",
  },
  {
    id: "local",
    number: "05",
    title: "Google Business Profile",
    description:
      "Own the map pack in your area with a fully optimised listing.",
    tags: [
      "Setup",
      "Photos & posts",
      "Reviews",
    ],
    cta: "Get started with Google Business Profile",
    price: "₹6,000",
    priceLabel: "3 months from",
    isNew: true,
    gridClass: "md:col-span-2 lg:col-span-4",
  },
];

const serviceSummary = [
  { value: "5", label: "Core services" },
  { value: "1", label: "In-house team" },
  { value: "0", label: "Silos" },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ServiceCard({ service }) {
  return (
    <article
      className={[
        "group relative flex min-w-0 flex-col",
        "overflow-hidden rounded-[20px]",
        "border border-[#1B1855]/10 bg-white",
        "shadow-[0_1px_2px_rgba(27,24,85,0.04),0_12px_32px_-18px_rgba(27,24,85,0.22)]",
        "transition-all duration-300",
        "hover:border-[#0f032b]/25",
        "hover:shadow-[0_25px_50px_-25px_rgba(27,24,85,0.3)]",
        "motion-safe:hover:-translate-y-1",
        "motion-reduce:transition-none",
        service.gridClass,
      ].join(" ")}
    >
      {service.isNew && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-[#0f032b] px-2.5 py-1 text-[10px] font-semibold text-white">
          New
        </span>
      )}

      <ServiceVisual type={service.id} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3.5 flex items-start gap-3">
          <span className="mt-0.5 shrink-0 rounded-lg border border-[#1B1855]/15 px-2 py-1 text-[11px] font-semibold text-[#6D63F2]">
            {service.number}
          </span>

          <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[#14123A] sm:text-[22px]">
            {service.title}
          </h3>
        </div>

        <p className="text-sm leading-6 text-[#5F5C80]">
          {service.description}
        </p>

        <ul
          aria-label={`${service.title} capabilities`}
          className="mb-6 mt-5 flex list-none flex-wrap gap-2 p-0"
        >
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-[#1B1855]/10 bg-[#F6F5FC] px-2.5 py-1.5 text-[11px] leading-4 text-[#5F5C80]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* <div className="mt-auto border-t border-[#1B1855]/10 pt-4">
          <a
            href="#contact"
            aria-label={service.cta}
            className={[
              "flex items-center justify-between gap-3",
              "rounded-md text-sm font-semibold text-[#14123A]",
              "transition-colors hover:text-[#0f032b]",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-4",
              "focus-visible:outline-[#6D63F2]",
            ].join(" ")}
          >
            {service.price ? (
              <span className="text-xs font-normal text-[#5F5C80] sm:text-sm">
                {service.priceLabel}{" "}
                <strong className="font-semibold text-[#14123A]">
                  {service.price}
                </strong>
              </span>
            ) : (
              <span>{service.cta}</span>
            )}

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1B1855]/15 text-[#0f032b] transition-colors group-hover:border-[#0f032b] group-hover:bg-[#0f032b] group-hover:text-white"
            >
              <ArrowIcon />
            </span>
          </a>
        </div> */}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section introduction */}
        <div className="mb-10 grid items-center gap-7 lg:mb-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div id="services-heading">
            <SectionHeading
              eyebrow="What we do"
              title="Everything your brand needs to"
              highlightedText="grow, under one roof."
            />
          </div>

          {/* <div>
            <p className="max-w-[500px] text-base leading-7 text-[#5F5C80]">
              Your ads, website, content and search all pull
              in the same direction — because the people
              running them sit at the same table.
            </p>

            <div className="mt-6 flex flex-wrap gap-7 sm:gap-10">
              {serviceSummary.map((item) => (
                <div key={item.label}>
                  <strong className="block text-[32px] font-bold leading-none tracking-tight text-[#0f032b]">
                    {item.value}
                  </strong>

                  <span className="mt-2 block text-xs text-[#5F5C80]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}