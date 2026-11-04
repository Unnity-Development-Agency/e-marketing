'use client';

const SERVICES = [
  {
    name: 'Performance Marketing', short: 'Performance',
    desc: 'We create and optimise data-driven ad campaigns that attract the right audience, generate quality leads and increase sales while maximising your ad spend.',
    tags: ['Meta Ads', 'Google Ads', 'Retargeting Campaigns', 'A/B Testing', 'Ad Creative Optimisation', 'Performance Reporting'],
    stat: '₹2 cr+', statLabel: 'monthly ad spend managed by our team',
    show: 'min-[901px]:group-has-[#svc-0:checked]/grid:flex',
  },
  {
    name: 'Website Development', short: 'Website',
    desc: 'We build fast, user-friendly and conversion-focused websites that turn visitors into customers and help your business grow.',
    tags: ['Shopify', 'WordPress', 'Landing pages', 'CRO', 'Speed Optimisation'],
    stat: '90+', statLabel: 'target PageSpeed score on every build',
    show: 'min-[901px]:group-has-[#svc-1:checked]/grid:flex',
  },
  {
    name: 'Social Media & Creative', short: 'Social',
    desc: 'We create engaging content and eye-catching creatives that capture attention, build brand awareness and turn audiences into customers.',
    tags: ['Instagram Reels', 'Content & Script Writing', 'Ad creatives', 'Social Media Management'],
    stat: 'In-house', statLabel: 'creative team, no outsourcing',
    show: 'min-[901px]:group-has-[#svc-2:checked]/grid:flex',
  },
  {
    name: 'SEO & AI Optimisation', short: 'SEO', isNew: true,
    desc: 'We improve your online visibility across Google and AI search platforms, helping customers discover your brand and choose your services.',
    tags: ['Technical SEO', 'SEO Content Optimisation', 'Website Indexing', '(GEO),(AEO),Local SEO '],
    stat: 'Google + AI', statLabel: 'visibility in both kinds of search',
    show: 'min-[901px]:group-has-[#svc-3:checked]/grid:flex',
  },
  {
    name: 'Google Business Profile Management', short: 'GBP',
    desc: 'We optimise your Google Business Profile to improve local visibility, attract nearby customers and generate more calls, visits and enquiries.',
    tags: ['Profile Setup & Optimisation', 'Business Photos & Posts', 'Review Management', 'Performance Tracking'],
    stat: 'Map pack', statLabel: 'where local buyers click first',
    show: 'min-[901px]:group-has-[#svc-4:checked]/grid:flex',
  },
];

const pad = (n) => String(n).padStart(2, '0');

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Tags = ({ tags, mobile }) => (
  <div className={`flex flex-wrap ${mobile ? 'mt-4 gap-2' : 'mt-[26px] gap-2.5'}`}>
    {tags.map((t) => (
      <span
        key={t}
        className={`inline-flex items-center gap-2 rounded-full bg-white font-semibold text-[#0b1140]
          before:size-[7px] before:rounded-full before:bg-[#2f5bff] before:content-['']
          ${mobile ? 'px-3 py-[7px] text-[13px]' : 'px-4 py-[9px] text-sm'}`}
      >
        {t}
      </span>
    ))}
  </div>
);

const Foot = ({ s, mobile }) => (
  <div className={`flex items-center justify-between gap-4 border-t border-white/[.22] ${mobile ? 'mt-5 pt-5' : 'mt-auto pt-[34px]'}`}>
    <div>
      <b className={`block font-extrabold ${mobile ? 'text-2xl tracking-[-.5px]' : 'text-[30px] tracking-[-.8px]'}`}>{s.stat}</b>
      <small className="text-[13px] text-[#c7d3ff]">{s.statLabel}</small>
    </div>
    <a
      href="#"
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0b1140] font-semibold text-white no-underline hover:bg-[#141c5c]
        ${mobile ? 'px-4 py-[11px] text-sm' : 'px-5 py-[13px] text-[15px]'}`}
    >
      Explore {s.short} <Arrow />
    </a>
  </div>
);

// panel entrance animation (needs @keyframes pIn in globals.css)
const IN = 'animate-[pIn_.5s_cubic-bezier(.2,.7,.2,1)_both]';

export default function Services() {
  return (
    <section id="services" className="bg-white px-4 pt-[104px] pb-[110px] font-['Outfit'] text-[#0b1140] max-[900px]:pt-[72px] max-[900px]:pb-20">
      <div className="mx-auto max-w-[1220px]">
        {/* top */}
        <div className="mb-14 grid grid-cols-[1.15fr_1fr] items-end gap-12 max-[900px]:mb-8 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          <div>
            <div
              className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-[#dfe5f7] bg-[#f7f9ff] px-3.5 py-1.5 text-[12.5px] font-semibold tracking-[1.6px] text-[#2f5bff]
                before:size-1.5 before:rounded-full before:bg-[#2f5bff] before:content-['']"
            >
              WHAT WE DO
            </div>
            <h2 className="text-[length:clamp(38px,5.4vw,72px)] font-extrabold leading-[1.02] tracking-[-2.4px]">
             Smart Solutions<br />
              For<span className="text-[#2f5bff]">Bigger Growth.</span>
            </h2>
          </div>
          <p className="max-w-[520px] pb-2 text-lg leading-[1.6] text-[#5b6385]">
            At Unnity, we bring performance marketing, SEO, website development, and creative solutions together to help your business attract customers, generate leads, and grow faster.
          </p>
        </div>

        {/* list + panels */}
        <div className="group/grid grid grid-cols-[1.15fr_1fr] items-stretch gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          <ul className="m-0 list-none border-t-[1.5px] border-[#0b1140] p-0">
            {SERVICES.map((s, i) => (
              <li
                key={s.name}
                onMouseEnter={(e) => {
                  // desktop + real hover devices only; touch devices use tap
                  if (window.matchMedia('(min-width:901px) and (hover:hover)').matches) {
                    e.currentTarget.querySelector('input').checked = true;
                  }
                }}
                className="group/item relative border-b border-[#dfe5f7]"
              >
                <input type="radio" name="svc" id={`svc-${i}`} defaultChecked={i === 0} className="peer sr-only" />

                <label
                  htmlFor={`svc-${i}`}
                  className="group/btn relative flex w-full cursor-pointer touch-manipulation select-none items-center gap-3 py-7 pr-2 pl-5 text-left [-webkit-tap-highlight-color:transparent]
                    before:absolute before:inset-0 before:z-0 before:origin-left before:scale-x-0 before:bg-[#0b1140] before:content-['']
                    before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(.7,0,.2,1)]
                    group-has-[:checked]/item:before:scale-x-100
                    motion-reduce:before:transition-none
                    peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#2f5bff]
                    max-[900px]:py-[22px] max-[900px]:pr-1.5 max-[900px]:pl-3.5"
                >
                  {/* num + name slide right a little when active (transform, not padding) */}
                  <span
                    className="relative z-[1] flex flex-1 items-center gap-[22px] transition-transform duration-300 ease-out
                      group-has-[:checked]/item:translate-x-2.5
                      max-[900px]:gap-3.5 max-[900px]:group-has-[:checked]/item:translate-x-1.5
                      motion-reduce:transition-none"
                  >
                    <span className="w-6 font-mono text-sm font-medium text-[#2f5bff] transition-colors duration-300 group-has-[:checked]/item:text-[#8aa4ff]">
                      {pad(i + 1)}
                    </span>

                    <span className="flex-1 text-[length:clamp(22px,2.4vw,30px)] font-bold tracking-[-.6px] transition-colors duration-300 group-has-[:checked]/item:text-white">
                      {s.name}
                      {s.isNew && (
                        <span className="ml-2.5 rounded-full bg-[#e8eeff] px-2 py-1 align-[5px] text-[10.5px] font-semibold tracking-[1px] text-[#2f5bff] group-has-[:checked]/item:bg-white/[.14] group-has-[:checked]/item:text-[#c7d3ff]">
                          NEW
                        </span>
                      )}
                    </span>
                  </span>

                  <span
                    className="relative z-[1] grid size-[42px] place-items-center rounded-full text-[#0b1140]
                      transition-[transform,background-color,color] duration-300 ease-out
                      group-hover/btn:translate-x-1
                      group-has-[:checked]/item:-rotate-45 group-has-[:checked]/item:bg-[#2f5bff] group-has-[:checked]/item:text-white
                      group-has-[:checked]/item:group-hover/btn:translate-x-0
                      max-[900px]:size-9 motion-reduce:transition-none"
                  >
                    <Arrow />
                  </span>
                </label>

                {/* mobile accordion: 300ms, height + fade */}
                <div
                  className="hidden grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                    group-has-[:checked]/item:grid-rows-[1fr] max-[900px]:grid motion-reduce:transition-none"
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="rounded-b-[8px] bg-[#2f5bff] px-5 pt-[22px] pb-6 text-white opacity-0 transition-opacity duration-300 group-has-[:checked]/item:opacity-100 motion-reduce:transition-none">
                      <p className="text-base leading-[1.55] text-[#e1e8ff]">{s.desc}</p>
                      <Tags tags={s.tags} mobile />
                      <Foot s={s} mobile />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* desktop panels: only the one matching the checked radio is shown */}
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              aria-live="polite"
              className={`relative hidden min-h-[520px] flex-col overflow-hidden rounded-[28px] bg-[#2f5bff] p-12 pb-11 text-white shadow-[0_30px_70px_rgba(47,91,255,.28)]
                before:absolute before:inset-0 before:content-['']
                before:bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
                before:bg-[length:40px_40px] before:[mask-image:linear-gradient(160deg,transparent_30%,#000_100%)]
                after:absolute after:-right-[140px] after:-bottom-40 after:size-[380px] after:rounded-full after:bg-[#7f9bff] after:opacity-[.55] after:blur-[70px] after:content-['']
                [&>*]:relative [&>*]:z-[1]
                ${s.show}`}
            >
              <div className={`text-[120px] font-extrabold leading-[.85] tracking-[-4px] text-white/[.28] ${IN}`}>{pad(i + 1)}</div>
              <div className={`mt-[22px] text-[length:clamp(30px,3vw,42px)] font-bold tracking-[-1px] ${IN} [animation-delay:.05s]`}>{s.name}</div>
              <p className={`mt-3.5 max-w-[440px] text-lg leading-[1.55] text-[#e1e8ff] ${IN} [animation-delay:.1s]`}>{s.desc}</p>
              <div className={`${IN} [animation-delay:.15s]`}><Tags tags={s.tags} /></div>
              <div className={`mt-auto ${IN} [animation-delay:.2s]`}><Foot s={s} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}