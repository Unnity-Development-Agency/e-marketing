const GAPS = [2, 5, 8, 11];
const r = (n) => Math.round(n * 100) / 100; // hydration-safe rounding

const deckY = (x) => 205 + 18 * Math.sin((Math.PI * (x - 200)) / 600);
const ropeY = (x) => {
  const t = (x - 207) / 586;
  return 96 * (1 - t) * (1 - t) + 2 * 282 * t * (1 - t) + 96 * t * t;
};

const PLANKS = Array.from({ length: 13 }, (_, i) => {
  const x = 206 + i * 46;
  const w = 38;
  const cx = x + w / 2;
  const y = deckY(cx);
  return {
    i, x, w, cx,
    y: r(y),
    gap: GAPS.indexOf(i), // -1 = solid plank
    rot: (((i * 37) % 40) / 10 - 2).toFixed(1),
    hanger: i % 2 === 0 && i > 0 && i < 12,
    hy1: r(ropeY(x)),
    hy2: r(deckY(x) - 1),
  };
});

const wave = (k) => {
  const y = [395, 412][k];
  let d = `M${190 + k * 10} ${y}`;
  for (let x = 190 + k * 10; x < 805; x += 40) d += ' q10 -6 20 0 t20 0';
  return d;
};

const NOTES = [
  { n: 1, x: 238, y: 36, lines: ['Boosted posts got likes,', 'not enquiries'], arrow: 'M296 86 Q280 150 310 204' },
  { n: 3, x: 618, y: 36, lines: ['Reports full of reach,', 'silent on revenue'], arrow: 'M660 86 Q656 160 602 210' },
  { n: 2, x: 300, y: 454, lines: ['Leads go cold before', 'anyone calls back'], arrow: 'M400 434 Q372 330 442 240' },
  { n: 4, x: 624, y: 454, lines: ['No idea which ad', 'brought the customer'], arrow: 'M690 434 Q664 330 718 240' },
];

// SVG text styles
const HAND = "font-['Caveat'] text-[27px] font-semibold fill-[#0b1140]";
const NUM = "font-['Outfit'] text-[13px] font-bold fill-[#2f5bff]";
const CAP = "font-['Outfit'] text-[11px] font-semibold tracking-[2px] fill-[#5b6385]";
const SIGN_T = "font-['Caveat'] text-[32px] font-bold fill-white";
const SIGN_S = "font-['Outfit'] text-[9.5px] font-semibold tracking-[2px] fill-[#c7d3ff]";

export default function ProblemBridge() {
  return (
    <section
      className="relative overflow-hidden border-t border-[#dfe5f7] bg-[#f4f7ff] px-4 pt-24 pb-[88px] text-center font-['Outfit'] text-[#0b1140]
        max-[720px]:pt-[72px] max-[720px]:pb-16
        before:pointer-events-none before:absolute before:inset-0 before:opacity-60 before:content-['']
        before:bg-[radial-gradient(#d5def8_1.2px,transparent_1.2px)] before:bg-[length:22px_22px]
        [&>*]:relative"
    >
      <h2 className="mx-auto max-w-[820px] text-[length:clamp(30px,4.4vw,52px)] font-extrabold leading-[1.12] tracking-[-1.4px]">
        Ad spend going out, but customers{' '}
        <span className="relative whitespace-nowrap text-[#2f5bff]">
          not coming in?
          <svg className="absolute left-0 -bottom-2 h-[14px] w-full" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
            <path d="M3 9 C 60 3, 120 12, 180 6 S 260 4, 297 8" stroke="#2f5bff" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-[520px] text-[17.5px] leading-[1.55] text-[#5b6385]">
        Usually it&apos;s not your product. It&apos;s the gaps between the click and the sale.
      </p>

      {/* mobile: crop the drawing with CSS instead of switching viewBox in JS */}
      <div className="mx-auto mt-10 max-w-[1060px] max-[720px]:aspect-[1000/355] max-[720px]:overflow-hidden">
        <svg
          className="block h-auto w-full overflow-visible max-[720px]:-mt-[8.5%]"
          viewBox="0 0 1000 500"
          role="img"
          aria-label="A broken bridge between ad spend and revenue, with money falling through four missing planks"
        >
          <defs>
            <filter id="bridge-rough">
              <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="4" />
              <feDisplacementMap in="SourceGraphic" scale="2.6" />
            </filter>
            <pattern id="bridge-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="9" stroke="#a9bcff" strokeWidth="1.6" />
            </pattern>
            <marker id="bridge-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
              <path d="M1 1 L9 5 L1 9" fill="none" stroke="#0b1140" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* scenery */}
          <g filter="url(#bridge-rough)" stroke="#0b1140" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 205 L208 205 L192 252 L201 304 L182 372 L196 430 L0 430" fill="url(#bridge-hatch)" />
            <path d="M1000 205 L792 205 L809 256 L799 312 L821 368 L806 430 L1000 430" fill="url(#bridge-hatch)" />
            <path d="M200 205 V92 M214 205 V92 M194 92 H220 M200 140 L214 160 M214 140 L200 160" />
            <path d="M786 205 V92 M800 205 V92 M780 92 H806 M786 140 L800 160 M800 140 L786 160" />
            <path d="M207 96 Q500 282 793 96" />
            <ellipse cx="96" cy="196" rx="22" ry="7" fill="#dbe4ff" />
            <ellipse cx="96" cy="185" rx="22" ry="7" fill="#dbe4ff" />
            <ellipse cx="96" cy="174" rx="22" ry="7" fill="#dbe4ff" />
            <text x="96" y="179" textAnchor="middle" className="font-['Outfit'] text-[10px] font-bold fill-[#0b1140] stroke-none">₹</text>
            <path d="M904 205 V140" />
            <path d="M904 142 L944 154 L904 166 Z" fill="#2f5bff" />
          </g>

          {/* cliff labels */}
          <rect x="40" y="226" width="112" height="24" rx="6" fill="#f4f7ff" />
          <text className={CAP} x="96" y="242" textAnchor="middle">YOUR AD SPEND</text>
          <rect x="862" y="226" width="84" height="24" rx="6" fill="#f4f7ff" />
          <text className={CAP} x="904" y="242" textAnchor="middle">REVENUE</text>

          {/* river */}
          <g stroke="#2f5bff" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".55" filter="url(#bridge-rough)">
            <path d={wave(0)} />
            <path d={wave(1)} />
          </g>

          {/* deck */}
          <g>
            {PLANKS.map((p) => (
              <g key={p.i}>
                {p.gap === -1 ? (
                  <rect
                    x={p.x} y={p.y - 1} width={p.w} height="10" rx="2"
                    fill="#fff" stroke="#0b1140" strokeWidth="1.8"
                    transform={`rotate(${p.rot} ${p.cx} ${r(p.y + 4)})`}
                    filter="url(#bridge-rough)"
                  />
                ) : (
                  <rect
                    x={p.x} y={p.y - 1} width={p.w} height="10" rx="2"
                    fill="none" stroke="#8fa6ff" strokeWidth="1.4" strokeDasharray="3 4"
                  />
                )}
                {p.hanger && (
                  <line
                    x1={p.x} y1={p.hy1} x2={p.x} y2={p.hy2}
                    stroke="#0b1140" strokeWidth="1.3" opacity=".7" filter="url(#bridge-rough)"
                  />
                )}
              </g>
            ))}
          </g>

          {/* falling coins */}
          <g>
            {PLANKS.filter((p) => p.gap !== -1).map((p) => {
              const begin = `${p.gap * 0.6}s`;
              return (
                <g key={p.i}>
                  <circle cx={p.x} cy={r(p.y + 6)} r="8" fill="#dbe4ff" stroke="#0b1140" strokeWidth="1.6" />
                  <circle cx={p.x} cy={r(p.y + 6)} r="3.5" fill="none" stroke="#2f5bff" strokeWidth="1.4" />
                  <animateTransform
                    attributeName="transform" type="translate"
                    values={`0 0; 0 ${r(388 - p.y)}`} keyTimes="0;1" dur="2.4s"
                    begin={begin} repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 1 1"
                  />
                  <animate
                    attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                    dur="2.4s" begin={begin} repeatCount="indefinite"
                  />
                </g>
              );
            })}
          </g>

          {/* hanging sign */}
          <g filter="url(#bridge-rough)" stroke="#0b1140" strokeWidth="1.8">
            <line x1="430" y1="167" x2="430" y2="122" />
            <line x1="570" y1="167" x2="570" y2="122" />
          </g>
          <rect x="390" y="102" width="220" height="64" rx="10" fill="#0b1140" transform="rotate(-2 500 135)" />
          <g transform="rotate(-2 500 135)">
            <text className={SIGN_T} x="500" y="135" textAnchor="middle" textLength="180" lengthAdjust="spacingAndGlyphs">A broken bridge</text>
            <text className={SIGN_S} x="500" y="155" textAnchor="middle" textLength="140" lengthAdjust="spacing">NOT A BAD PRODUCT</text>
          </g>

          {/* notes + arrows (hidden on mobile, list shown instead) */}
          <g className="max-[720px]:hidden">
            {NOTES.map((n) => (
              <g key={n.n}>
                <circle cx={n.x} cy={n.y} r="13" fill="#fff" stroke="#2f5bff" strokeWidth="1.5" />
                <text className={NUM} x={n.x} y={n.y + 5} textAnchor="middle">{n.n}</text>
                <text className={HAND} x={n.x + 22} y={n.y + 8}>{n.lines[0]}</text>
                <text className={HAND} x={n.x + 22} y={n.y + 36}>{n.lines[1]}</text>
                <path d={n.arrow} stroke="#0b1140" strokeWidth="1.8" fill="none" markerEnd="url(#bridge-arr)" filter="url(#bridge-rough)" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* mobile list */}
      <ol className="mx-auto mt-7 hidden max-w-[420px] list-none p-0 text-left max-[720px]:block">
        {[...NOTES].sort((a, b) => a.n - b.n).map((n) => (
          <li
            key={n.n}
            className="flex items-start gap-3 border-b border-dashed border-[#dfe5f7] py-2.5 font-['Caveat'] text-[23px] font-semibold leading-[1.2]"
          >
            <span className="mt-0.5 grid size-[26px] flex-none place-items-center rounded-full border-[1.5px] border-[#2f5bff] font-['Outfit'] text-xs font-bold text-[#2f5bff]">
              {n.n}
            </span>
            {n.lines.join(' ')}
          </li>
        ))}
      </ol>

      <p className="mt-9 text-lg font-semibold">
        Every gap is fixable. <b className="text-[#2f5bff]">That&apos;s the bridge we build.</b>
      </p>
    </section>
  );
}