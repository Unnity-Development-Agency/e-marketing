"use client";

/**
 * Unnity Blog: poora page ek hi file mein (data + CSS + saare components).
 * Is file ko `src/app/blog/page.js` mein paste karo (JavaScript version).
 */

import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";
import BrandsHero from "@/components/reactBits/HeroSection";
import { createElement, useCallback, useEffect, useRef, useState } from "react";

/* ======================== CSS ======================== */

const css = `
/* ================= GLOBAL TOKENS ================= */
:root{
  --navy:#1E3A6E; --navy-hover:#142A52; --navy-deep:#0F1F3D; --navy-ink:#0A1630;
  --sky:#9DB8E8; --tint:#E8EEF8; --ink:#0F172A; --body:#4A5568; --muted:#5A6478;
  --line:#E2E7EF; --chip-line:#D3DAE6; --ground:#F5F7FA; --white:#FFFFFF;
  --amber:#B4541A; --amber-ink:#A04A15; --amber-tint:#FDF0E6;
  --ease:cubic-bezier(.22,.61,.36,1);
  --display:'Bricolage Grotesque',system-ui,sans-serif;
  --text:'DM Sans',system-ui,sans-serif;
  --dur:7s;
}
:where(.unnity-blog),:where(.unnity-blog) *{box-sizing:border-box}
.unnity-blog{font-family:var(--text);color:var(--ink);background:var(--white);-webkit-font-smoothing:antialiased}
:where(.unnity-blog) a{color:inherit;text-decoration:none}
:where(.unnity-blog) :focus-visible{outline:3px solid var(--sky);outline-offset:3px;border-radius:8px}


/* ================= SECTION 1 · FEATURED (rotator) ================= */
.featured{padding:72px 24px 88px}
.featured .wrap{max-width:1240px;margin:0 auto;display:flex;flex-direction:column;gap:28px}
.featured .head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px}
.featured .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--navy)}
.featured .eyebrow::before{content:"";width:28px;height:2px;background:var(--navy)}
.featured .head h2{margin:10px 0 0;font-family:var(--display);font-size:clamp(32px,4.5vw,46px);line-height:1.04;font-weight:700;letter-spacing:-.02em}
.featured .controls{display:flex;gap:8px;align-items:center}
.featured .ctrl{width:48px;height:48px;border-radius:50%;border:1.5px solid var(--ink);background:transparent;color:var(--ink);display:grid;place-items:center;cursor:pointer;transition:background-color .25s,color .25s,transform .2s}
.featured .ctrl:hover{background:var(--ink);color:var(--white)}
.featured .ctrl:active{transform:scale(.94)}
.featured .counter{font-family:var(--display);font-weight:600;font-size:15px;color:var(--muted);min-width:56px;text-align:center}
.featured .counter b{color:var(--ink)}
.featured .stage{position:relative;border-radius:32px;overflow:hidden;background:var(--navy-deep);color:var(--white);min-height:460px;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr)}
@media (max-width:820px){.featured .stage{grid-template-columns:1fr}}
.featured .stage::before{content:"";position:absolute;inset:0;
  background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px;pointer-events:none}
.featured .slide-text{position:relative;padding:48px;display:flex;flex-direction:column;justify-content:center;gap:18px;z-index:1}
@media (max-width:820px){.featured .slide-text{padding:32px 28px 8px}}
.featured .slide-tags{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.featured .pill{padding:6px 12px;border-radius:999px;background:var(--sky);color:var(--navy-deep);font-size:13px;font-weight:600}
.featured .cat{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#C3D3EE}
.featured .slide-text h3{margin:0;font-family:var(--display);font-size:clamp(30px,3.8vw,48px);line-height:1.04;font-weight:700;letter-spacing:-.02em}
.featured .slide-text p{margin:0;font-size:17px;line-height:1.6;color:#CFDAEC;max-width:520px}
.featured .slide-foot{display:flex;flex-wrap:wrap;gap:20px;align-items:center;margin-top:6px}
.featured .meta{font-size:14px;color:#B8C7E0}
.featured .btn{display:inline-flex;align-items:center;gap:8px;min-height:50px;padding:0 26px;border-radius:999px;background:var(--white);color:var(--navy-deep);font-weight:600;font-size:15px;transition:transform .25s var(--ease),box-shadow .25s var(--ease)}
.featured .btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(0,0,0,.55)}
.featured .btn svg{transition:transform .3s var(--ease)}
.featured .btn:hover svg{transform:translateX(5px)}
.featured .swap{transition:opacity .45s var(--ease),transform .45s var(--ease)}
.featured .leaving .swap{opacity:0;transform:translateY(-14px)}
.featured .entering .swap{opacity:0;transform:translateY(18px);transition:none}
.featured .swap:nth-child(2){transition-delay:.04s}
.featured .swap:nth-child(3){transition-delay:.08s}
.featured .swap:nth-child(4){transition-delay:.12s}
.featured .slide-visual{position:relative;display:grid;place-items:center;padding:40px;min-height:300px}
.featured .orb{position:absolute;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(157,184,232,.32),transparent 65%);transition:transform 1.2s var(--ease)}
.featured .art{position:relative;width:min(320px,80%);aspect-ratio:1;border-radius:28px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(8px);display:grid;place-items:center;transition:transform .7s var(--ease),opacity .45s}
.featured .leaving .art{opacity:0;transform:scale(.9) rotate(-4deg)}
.featured .entering .art{opacity:0;transform:scale(1.08) rotate(4deg);transition:none}
.featured .stage:hover .art{transform:rotate(-2deg) scale(1.02)}
.featured .art svg{width:62%;height:auto}
.featured .float{animation:float 5s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.featured .march{stroke-dasharray:4 8;animation:march 1.4s linear infinite}
@keyframes march{to{stroke-dashoffset:-24}}
.featured .spin{transform-box:fill-box;transform-origin:center;animation:spin 14s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.featured .tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
@media (max-width:820px){.featured .tabs{grid-template-columns:1fr}}
.featured .tab{position:relative;text-align:left;padding:22px 22px 26px;border-radius:20px;background:var(--white);border:1px solid var(--line);cursor:pointer;font:inherit;color:inherit;display:flex;flex-direction:column;gap:8px;overflow:hidden;transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s}
.featured .tab:hover{transform:translateY(-4px);box-shadow:0 18px 36px -22px rgba(15,31,61,.4)}
.featured .tab[aria-selected="true"]{border-color:var(--navy);box-shadow:0 0 0 1px var(--navy)}
.featured .tab-top{display:flex;justify-content:space-between;align-items:center}
.featured .tab-num{font-family:var(--display);font-weight:700;font-size:15px;color:var(--muted);transition:color .3s}
.featured .tab[aria-selected="true"] .tab-num{color:var(--navy)}
.featured .tab-cat{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--navy)}
.featured .tab-cat.amber{color:#A04A15}
.featured .tab-title{font-family:var(--display);font-size:18px;line-height:1.25;font-weight:600}
.featured .tab-meta{font-size:13px;color:var(--muted)}
.featured .bar{position:absolute;left:0;bottom:0;height:4px;width:100%;background:var(--line)}
.featured .bar i{display:block;height:100%;width:100%;background:var(--navy);transform:scaleX(0);transform-origin:left}
.featured .tab[aria-selected="true"] .bar i{animation:fill var(--dur) linear forwards}
.featured.paused .tab[aria-selected="true"] .bar i{animation-play-state:paused}
@keyframes fill{to{transform:scaleX(1)}}
.featured .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s var(--ease),transform .7s var(--ease);transition-delay:var(--d,0s)}
.featured .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.featured *,.featured *::before,.featured *::after{animation:none!important;transition:none!important}
.featured .reveal{opacity:1;transform:none}
.featured .tab[aria-selected="true"] .bar i{transform:scaleX(1)}}

/* featured sits on the same grey as the hero */
.featured{background:var(--ground)}
.featured.featured{padding-top:40px}

/* ================= SECTION 2 · LATEST ARTICLES ================= */
.latest{padding:80px 24px 96px}
.latest .wrap{max-width:1240px;margin:0 auto;display:flex;flex-direction:column;gap:28px}
.latest .head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px}
.latest .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--navy)}
.latest .eyebrow::before{content:"";width:28px;height:2px;background:var(--navy)}
.latest .head h2{margin:10px 0 0;font-family:var(--display);font-size:clamp(32px,4.5vw,44px);line-height:1.05;font-weight:700;letter-spacing:-.02em}
.latest .head-right{display:flex;align-items:center;gap:12px}
.latest .view-all{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 20px;border-radius:999px;border:1.5px solid var(--ink);font-weight:600;font-size:15px;position:relative;overflow:hidden;isolation:isolate;transition:color .3s}
.latest .view-all::before{content:"";position:absolute;inset:0;background:var(--ink);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease);z-index:-1}
.latest .view-all:hover{color:var(--white)}
.latest .view-all:hover::before{transform:scaleX(1)}
.latest .arrow{transition:transform .3s var(--ease)}
.latest .view-all:hover .arrow,.latest .card:hover .arrow{transform:translateX(5px)}
.latest .ctrl{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--chip-line);background:var(--white);color:var(--ink);display:none;place-items:center;cursor:pointer;transition:border-color .25s,background-color .25s,color .25s,opacity .25s}
.latest .ctrl:hover{border-color:var(--ink)}
.latest .ctrl:disabled{opacity:.35;cursor:default}
.latest .chips{display:flex;flex-wrap:wrap;gap:8px}
.latest .chip{min-height:40px;padding:0 16px;border-radius:999px;border:1px solid var(--chip-line);background:var(--white);color:#2D3748;font:500 14px var(--text);cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background-color .25s,color .25s,border-color .25s,transform .2s}
.latest .chip:hover{border-color:var(--navy);color:var(--navy);transform:translateY(-1px)}
.latest .chip[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:var(--white)}
.latest .chip .count{font-size:12px;font-weight:600;padding:2px 7px;border-radius:999px;background:var(--tint);color:var(--navy)}
.latest .chip[aria-pressed="true"] .count{background:rgba(255,255,255,.16);color:var(--white)}
.latest .track{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}
@media (max-width:1100px){.latest .track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:0 24px;gap:16px;margin:0 -24px;padding:6px 24px 18px;scrollbar-width:none}
.latest .track::-webkit-scrollbar{display:none}
.latest .track .card{flex:0 0 min(300px,78vw);scroll-snap-align:start}
.latest .ctrl{display:grid}}
.latest .card{position:relative;display:flex;flex-direction:column;background:var(--white);border:1px solid var(--line);border-radius:20px;overflow:hidden;cursor:pointer;
  transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s,opacity .35s var(--ease)}
.latest .card:hover{transform:translateY(-8px);box-shadow:0 26px 50px -26px rgba(15,31,61,.4);border-color:transparent}
.latest .card.hide{display:none}
.latest .card.pop{animation:pop .45s var(--ease) both;animation-delay:var(--pd,0s)}
@keyframes pop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}
.latest .thumb{position:relative;aspect-ratio:16/10;overflow:hidden;display:grid;place-items:center}
.latest .thumb svg{width:58%;height:auto;transition:transform .7s var(--ease)}
.latest .card:hover .thumb svg{transform:scale(1.1) rotate(-2deg)}
.latest .thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);
  transform:translateX(-120%);transition:transform .9s var(--ease)}
.latest .card:hover .thumb::after{transform:translateX(120%)}
.latest .t-navy{background:var(--tint)}
.latest .t-deep{background:var(--navy-deep)}
.latest .t-sky{background:#DCE6F5}
.latest .t-amber{background:var(--amber-tint)}
.latest .t-ground{background:#EEF2F9}
.latest .body{display:flex;flex-direction:column;gap:10px;padding:18px 18px 16px;flex:1}
.latest .tag{align-self:flex-start;margin-top:-32px;position:relative;z-index:1;padding:6px 11px;border-radius:999px;background:var(--white);border:1px solid var(--line);font-size:12px;font-weight:600;color:var(--navy);box-shadow:0 6px 14px -8px rgba(15,31,61,.35)}
.latest .tag.amber{color:var(--amber-ink)}
.latest .card h3{margin:2px 0 0;font-family:var(--display);font-size:18px;line-height:1.25;font-weight:600}
.latest .title-link{background-image:linear-gradient(currentColor,currentColor);background-size:0% 2px;background-repeat:no-repeat;background-position:0 100%;transition:background-size .45s var(--ease)}
.latest .card:hover .title-link,.latest .title-link:focus-visible{background-size:100% 2px}
.latest .card p{margin:0;font-size:14px;line-height:1.55;color:var(--body)}
.latest .foot{margin-top:auto;padding-top:14px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;row-gap:6px;justify-content:space-between;align-items:center;gap:8px;font-size:12.5px;color:var(--muted)}
.latest .foot .m{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.latest .read{display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:13px;color:var(--navy);white-space:nowrap}
.latest .dots{display:none;justify-content:center;gap:6px}
@media (max-width:1100px){.latest .dots{display:flex}}
.latest .dots span{width:8px;height:8px;border-radius:999px;background:var(--chip-line);transition:width .35s var(--ease),background-color .35s}
.latest .dots span.on{width:24px;background:var(--navy)}
.latest .empty{display:none;padding:40px;text-align:center;color:var(--muted);border:1px dashed var(--chip-line);border-radius:20px}
.latest .empty.show{display:block}
.latest .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s var(--ease),transform .7s var(--ease);transition-delay:var(--d,0s)}
.latest .reveal.in{opacity:1;transform:none}
.latest .march{stroke-dasharray:4 8;animation:march 1.4s linear infinite}
@keyframes march{to{stroke-dashoffset:-24}}
.latest .bob{animation:bob 4s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.latest .grow{transform-box:fill-box;transform-origin:bottom;transform:scaleY(0);transition:transform .9s var(--ease)}
.latest .in .grow{transform:scaleY(1)}
.latest .in .grow:nth-of-type(2){transition-delay:.12s}
.latest .in .grow:nth-of-type(3){transition-delay:.24s}
.latest .in .grow:nth-of-type(4){transition-delay:.36s}
@media (prefers-reduced-motion:reduce){.latest *,.latest *::before,.latest *::after{animation:none!important;transition:none!important}
.latest .reveal{opacity:1;transform:none}
.latest .grow{transform:none}}

/* ================= SECTION 3 · PERFORMANCE INSIGHTS ================= */
.perf{padding:40px 24px}
.perf .band{max-width:1240px;margin:0 auto;position:relative;overflow:hidden;border-radius:32px;
  background:linear-gradient(180deg,#EEF3FB 0%,#E6EDF8 100%);
  padding:56px;display:flex;flex-wrap:wrap;gap:48px;align-items:center}
@media (max-width:720px){.perf .band{padding:36px 24px;gap:32px;border-radius:24px}}
.perf .band::before{content:"";position:absolute;inset:0;pointer-events:none;
  background-image:radial-gradient(rgba(30,58,110,.09) 1px,transparent 1px);background-size:22px 22px;
  -webkit-mask-image:linear-gradient(90deg,#000 0%,transparent 55%);mask-image:linear-gradient(90deg,#000 0%,transparent 55%)}
.perf .glow{position:absolute;width:520px;height:520px;border-radius:50%;pointer-events:none;
  background:radial-gradient(circle,rgba(157,184,232,.45),transparent 65%);
  left:var(--gx,80%);top:var(--gy,50%);transform:translate(-50%,-50%);transition:left .6s var(--ease),top .6s var(--ease)}
.perf .intro{position:relative;flex:1 1 320px;max-width:420px;display:flex;flex-direction:column;gap:16px}
.perf .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--navy)}
.perf .eyebrow::before{content:"";width:28px;height:2px;background:var(--navy)}
.perf .intro h2{margin:0;font-family:var(--display);font-size:clamp(32px,4vw,44px);line-height:1.05;font-weight:700;letter-spacing:-.02em}
.perf .intro h2 em{font-style:normal;position:relative;white-space:nowrap}
.perf .intro h2 em::after{content:"";position:absolute;left:0;right:0;bottom:2px;height:10px;background:var(--sky);opacity:.55;z-index:-1;border-radius:4px;transform:scaleX(0);transform-origin:left;transition:transform .9s var(--ease) .5s}
.perf .in .intro h2 em::after,.perf .intro.in h2 em::after{transform:scaleX(1)}
.perf .intro h2{position:relative;z-index:0}
.perf .intro p{margin:0;font-size:16.5px;line-height:1.6;color:var(--body)}
.perf .stats{display:flex;gap:28px;margin:4px 0 6px}
.perf .stat b{display:block;font-family:var(--display);font-size:26px;font-weight:700;color:var(--navy);line-height:1.1}
.perf .stat span{font-size:13px;color:var(--muted)}
.perf .cta{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 26px;border-radius:999px;background:var(--navy-deep);color:var(--white);font-weight:600;font-size:15px;position:relative;overflow:hidden;isolation:isolate;transition:transform .25s var(--ease),box-shadow .25s var(--ease)}
.perf .cta::before{content:"";position:absolute;inset:0;background:var(--navy);transform:translateX(-101%);transition:transform .45s var(--ease);z-index:-1}
.perf .cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px -12px rgba(15,31,61,.6)}
.perf .cta:hover::before{transform:none}
.perf .cta .arrow{color:var(--sky)}
.perf .arrow{transition:transform .3s var(--ease)}
.perf .cta:hover .arrow,.perf .card:hover .arrow{transform:translateX(5px)}
.perf .cards{position:relative;flex:999 1 560px;min-width:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
@media (max-width:480px){.perf .cards{grid-template-columns:1fr}}
.perf .card{position:relative;display:flex;flex-direction:column;gap:12px;padding:24px 22px 22px;background:var(--white);border-radius:20px;border:1px solid rgba(30,58,110,.08);cursor:pointer;min-height:200px;
  box-shadow:0 1px 2px rgba(15,31,61,.04);
  transition:transform .45s var(--ease),box-shadow .45s var(--ease),background-color .45s,color .45s}
.perf .card:hover{transform:translateY(-8px);box-shadow:0 26px 50px -24px rgba(15,31,61,.45)}
.perf .card::after{content:"";position:absolute;inset:0;border-radius:inherit;background:var(--navy-deep);
  clip-path:circle(0% at 40px 44px);transition:clip-path .6s var(--ease);z-index:0}
.perf .card:hover::after{clip-path:circle(150% at 40px 44px)}
.perf .card > *{position:relative;z-index:1}
.perf .icon{width:56px;height:56px;border-radius:16px;display:grid;place-items:center;background:var(--tint);transition:background-color .45s,transform .5s var(--ease)}
.perf .card:hover .icon{background:rgba(255,255,255,.1);transform:rotate(-6deg) scale(1.05)}
.perf .icon svg{width:30px;height:30px}
.perf .icon .s{stroke:var(--navy);transition:stroke .45s}
.perf .icon .f{fill:var(--navy);transition:fill .45s}
.perf .card:hover .icon .s{stroke:var(--white)}
.perf .card:hover .icon .f{fill:var(--white)}
.perf .icon.amber{background:var(--amber-tint)}
.perf .icon.amber .s{stroke:var(--amber)}
.perf .icon.amber .f{fill:var(--amber)}
.perf .cat{font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--navy);transition:color .45s}
.perf .cat.amber{color:var(--amber-ink)}
.perf .card:hover .cat{color:var(--sky)}
.perf .card h3{margin:0;font-family:var(--display);font-size:18px;line-height:1.28;font-weight:600;transition:color .45s}
.perf .card:hover h3{color:var(--white)}
.perf .read{margin-top:auto;display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:14px;color:var(--navy);transition:color .45s}
.perf .card:hover .read{color:var(--sky)}
.perf .spin{transform-box:fill-box;transform-origin:center;animation:spin 10s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.perf .card:hover .grow{animation:grow .6s var(--ease) both}
.perf .grow{transform-box:fill-box;transform-origin:bottom}
.perf .grow:nth-of-type(2){animation-delay:.08s!important}
.perf .grow:nth-of-type(3){animation-delay:.16s!important}
@keyframes grow{from{transform:scaleY(.2)}to{transform:scaleY(1)}}
.perf .card:hover .dart{animation:dart .5s var(--ease) both}
@keyframes dart{from{transform:translate(6px,-6px);opacity:.3}to{transform:none;opacity:1}}
.perf .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s var(--ease),transform .7s var(--ease);transition-delay:var(--d,0s)}
.perf .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.perf *,.perf *::before,.perf *::after{animation:none!important;transition:none!important}
.perf .reveal{opacity:1;transform:none}
.perf .intro h2 em::after{transform:scaleX(1)}}
`;

/* ======================== DATA ======================== */

const featuredPosts = [
  {
    cat: "Google Ads",
    title: "How to Scale Google Ads Without Wasting Your Budget",
    desc: "Learn how to structure campaigns, choose the right targeting and optimize for better ROAS.",
    readTime: "8 min read",
    date: "Oct 12, 2024",
    href: "/blog/scale-google-ads",
    art: "chart",
  },
  {
    cat: "Google Ads",
    title: "How to Reduce Google Ads Cost and Improve ROI",
    desc: "Discover proven strategies to lower your ad spend and get better results from Google Ads.",
    readTime: "6 min read",
    date: "Oct 10, 2024",
    href: "/blog/reduce-google-ads-cost",
    art: "target",
  },
  {
    cat: "Web Development",
    amber: true,
    title: "Common Website Mistakes That Cost You Leads",
    desc: "Avoid these critical website mistakes and turn visitors into customers.",
    readTime: "7 min read",
    date: "Sep 28, 2024",
    href: "/blog/website-mistakes",
    art: "browser",
  },
];

/* ---------- Latest articles ---------- */

const latestPosts = [
  {
    cat: "google-ads",
    tag: "Google Ads",
    thumb: "googleAds",
    thumbClass: "t-navy",
    title: "5 Proven Ways to Improve Your Google Ads ROI",
    desc: "Optimize your campaigns, targeting and landing pages for better results.",
    minutes: 8,
    date: "Oct 5, 2024",
    href: "/blog/improve-google-ads-roi",
    delay: ".12s",
  },
  {
    cat: "seo",
    tag: "SEO",
    thumb: "seo",
    thumbClass: "t-deep",
    title: "SEO Strategies for Businesses in 2026",
    desc: "Stay ahead with the latest SEO trends and proven strategies.",
    minutes: 7,
    date: "Oct 2, 2024",
    href: "/blog/seo-strategies-2026",
    delay: ".2s",
  },
  {
    cat: "meta-ads",
    tag: "Meta Ads",
    thumb: "metaAds",
    thumbClass: "t-sky",
    title: "Meta Ads vs Google Ads: Which Is Better for Your Business?",
    desc: "Compare platforms, targeting options and results to make the right choice.",
    minutes: 6,
    date: "Sep 28, 2024",
    href: "/blog/meta-ads-vs-google-ads",
    delay: ".28s",
  },
  {
    cat: "performance",
    tag: "Performance Marketing",
    thumb: "performance",
    thumbClass: "t-ground",
    title: "The Ultimate Guide to Performance Marketing",
    desc: "Learn how performance marketing can drive measurable business growth.",
    minutes: 10,
    date: "Sep 25, 2024",
    href: "/blog/performance-marketing-guide",
    delay: ".36s",
  },
  {
    cat: "web-dev",
    tag: "Web Development",
    amber: true,
    thumb: "webDev",
    thumbClass: "t-amber",
    title: "7 Website Features That Increase Conversions",
    desc: "Build a website that turns visitors into customers.",
    minutes: 6,
    date: "Sep 20, 2024",
    href: "/blog/website-features-conversions",
    delay: ".44s",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "google-ads", label: "Google Ads" },
  { key: "seo", label: "SEO" },
  { key: "meta-ads", label: "Meta Ads" },
  { key: "performance", label: "Performance Marketing" },
  { key: "web-dev", label: "Web Development" },
];

/* ---------- Performance insights ---------- */

const insights = [
  {
    cat: "Google Ads",
    icon: "bars",
    title: "How to Structure Google Ads Campaigns for Better Results",
    href: "/blog/structure-google-ads-campaigns",
    delay: ".1s",
  },
  {
    cat: "Meta Ads",
    icon: "wave",
    title: "Meta Ads Strategy for E-commerce Brands",
    href: "/blog/meta-ads-ecommerce-strategy",
    delay: ".18s",
  },
  {
    cat: "PPC",
    amber: true,
    icon: "coin",
    title: "PPC Mistakes That Waste Your Ad Budget",
    href: "/blog/ppc-mistakes",
    delay: ".26s",
  },
  {
    cat: "Remarketing",
    icon: "target",
    title: "Remarketing Strategies to Bring Back Customers",
    href: "/blog/remarketing-strategies",
    delay: ".34s",
  },
];

/* ======================== HOOK ======================== */

/** True when the user prefers reduced motion. Starts false so SSR and first paint match. */
function useReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduce;
}

/* ======================== REVEAL (scroll animation) ======================== */

/**
 * Adds `.reveal` and, once scrolled into view, `.in`.
 * (Replaces the IntersectionObserver blocks from the original HTML.)
 */
function Reveal({
  as = "div",
  className = "",
  style,
  delay,
  threshold = 0.15,
  rootMargin,
  forceIn = false,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold, rootMargin]);

  const merged = delay ? { ...style, "--d": delay } : style;

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `${className} reveal${seen || forceIn ? " in" : ""}`.trim(),
      style: merged,
    },
    children
  );
}

/* ======================== ICONS ======================== */

function ArrowRight({ size = 16, className, strokeWidth = 2 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowLeft({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

function ArrowUp({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

function Clock({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Search({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#5A6478" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function Menu({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/* ======================== SVG ART ======================== */

function ArtChart() {
  return (
    <svg className="float" viewBox="0 0 240 170" fill="none">
      <rect x="20" y="110" width="30" height="40" rx="6" fill="#33508A" />
      <rect x="70" y="85" width="30" height="65" rx="6" fill="#4A6AA8" />
      <rect x="120" y="60" width="30" height="90" rx="6" fill="#6F92D0" />
      <rect x="170" y="25" width="30" height="125" rx="6" fill="#9DB8E8" />
      <path className="march" d="M28 96 L84 70 L134 48 L196 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="196" cy="12" r="6" fill="#fff" />
    </svg>
  );
}

function ArtTarget() {
  return (
    <svg className="float" viewBox="0 0 64 64" fill="none">
      <g className="spin">
        <circle cx="32" cy="32" r="26" stroke="#9DB8E8" strokeWidth="3" strokeDasharray="6 5" />
      </g>
      <circle cx="32" cy="32" r="16" stroke="#9DB8E8" strokeWidth="3" />
      <circle cx="32" cy="32" r="6" fill="#fff" />
      <path d="M32 32 L54 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 8 L56 8 L56 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArtBrowser() {
  return (
    <svg className="float" viewBox="0 0 64 64" fill="none">
      <rect x="6" y="12" width="52" height="40" rx="6" stroke="#E8A26B" strokeWidth="3" />
      <path d="M6 22h52" stroke="#E8A26B" strokeWidth="3" />
      <circle cx="13" cy="17" r="1.5" fill="#E8A26B" />
      <circle cx="19" cy="17" r="1.5" fill="#E8A26B" />
      <path d="M24 31 L40 43 M40 31 L24 43" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const artMap = { chart: ArtChart, target: ArtTarget, browser: ArtBrowser };

function FeaturedArt({ name }) {
  const Art = artMap[name];
  return <Art />;
}

function ThumbGoogleAds() {
  return (
    <svg viewBox="0 0 120 80" fill="none">
      <rect className="grow" x="14" y="50" width="16" height="20" rx="4" fill="#9DB8E8" />
      <rect className="grow" x="40" y="38" width="16" height="32" rx="4" fill="#5578B8" />
      <rect className="grow" x="66" y="26" width="16" height="44" rx="4" fill="#33508A" />
      <rect className="grow" x="92" y="10" width="16" height="60" rx="4" fill="#1E3A6E" />
      <path className="march" d="M22 44 L48 32 L74 20 L100 6" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ThumbSeo() {
  return (
    <svg viewBox="0 0 120 80" fill="none">
      <g className="bob">
        <circle cx="52" cy="36" r="22" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M68 52 L88 70" stroke="#9DB8E8" strokeWidth="7" strokeLinecap="round" />
        <text x="52" y="42" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontWeight="700" fontSize="15" fill="#FFFFFF">
          SEO
        </text>
      </g>
    </svg>
  );
}

function ThumbMetaAds() {
  return (
    <svg viewBox="0 0 120 80" fill="none">
      <rect x="8" y="18" width="42" height="42" rx="12" fill="#FFFFFF" />
      <path d="M18 46 C18 30 26 28 29 34 C32 40 34 46 40 46 C44 46 44 32 38 30" stroke="#1E3A6E" strokeWidth="4" strokeLinecap="round" fill="none" />
      <text x="60" y="45" textAnchor="middle" style={{ fontFamily: "var(--text)" }} fontWeight="600" fontSize="11" fill="#1E3A6E">
        vs
      </text>
      <rect x="70" y="18" width="42" height="42" rx="12" fill="#FFFFFF" />
      <path d="M101 39 H91 M101 39 A11 11 0 1 1 98 31" stroke="#B4541A" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ThumbPerformance() {
  return (
    <svg viewBox="0 0 120 80" fill="none">
      <path d="M10 70 H110" stroke="#C8D1E0" strokeWidth="2" />
      <path d="M12 62 L34 50 L52 56 L74 32 L92 36 L108 12" stroke="#1E3A6E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M98 10 L110 10 L110 22" stroke="#1E3A6E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path className="march" d="M12 62 L34 50 L52 56 L74 32 L92 36 L108 12" stroke="#9DB8E8" strokeWidth="2" strokeLinecap="round" transform="translate(0 8)" />
    </svg>
  );
}

function ThumbWebDev() {
  return (
    <svg viewBox="0 0 120 80" fill="none">
      <g className="bob">
        <rect x="18" y="10" width="84" height="58" rx="8" fill="#FFFFFF" stroke="#B4541A" strokeWidth="3" />
        <path d="M18 24 H102" stroke="#B4541A" strokeWidth="3" />
        <circle cx="27" cy="17" r="2" fill="#B4541A" />
        <circle cx="34" cy="17" r="2" fill="#B4541A" />
        <rect x="28" y="32" width="36" height="6" rx="3" fill="#0F172A" />
        <rect x="28" y="43" width="26" height="4" rx="2" fill="#C8D1E0" />
        <rect x="28" y="53" width="22" height="8" rx="4" fill="#1E3A6E" />
        <rect x="72" y="32" width="22" height="29" rx="4" fill="#FDF0E6" />
      </g>
    </svg>
  );
}

const thumbMap = {
  googleAds: ThumbGoogleAds,
  seo: ThumbSeo,
  metaAds: ThumbMetaAds,
  performance: ThumbPerformance,
  webDev: ThumbWebDev,
};

function Thumb({ name }) {
  const T = thumbMap[name];
  return <T />;
}

function IconBars() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <rect className="grow f" x="5" y="18" width="5" height="9" rx="1.5" />
      <rect className="grow f" x="13.5" y="12" width="5" height="15" rx="1.5" />
      <rect className="grow f" x="22" y="6" width="5" height="21" rx="1.5" />
    </svg>
  );
}

function IconWave() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <path className="s" d="M4 21c0-7 3-11 6-11s5 4 6 6 3 6 6 6 4-3 4-6-2-7-5-7-5 4-6 6" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCoin() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <circle className="s" cx="16" cy="16" r="11" strokeWidth="2.4" />
      <path className="s" d="M19.5 11.5c-.8-1-2-1.5-3.5-1.5-2 0-3.5 1-3.5 2.6 0 3.6 7 1.8 7 5.4 0 1.6-1.5 2.8-3.5 2.8-1.6 0-2.9-.6-3.7-1.7M16 8v2M16 21.8v2" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <circle className="s spin" cx="15" cy="17" r="11" strokeWidth="2.4" strokeDasharray="4 3" />
      <circle className="s" cx="15" cy="17" r="6" strokeWidth="2.4" />
      <circle className="f" cx="15" cy="17" r="2" />
      <g className="dart">
        <path className="s" d="M15 17 L27 5" strokeWidth="2.4" strokeLinecap="round" />
        <path className="s" d="M23 4 h5 v5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

const iconMap = { bars: IconBars, wave: IconWave, coin: IconCoin, target: IconTarget };

function InsightIconSvg({ name }) {
  const I = iconMap[name];
  return <I />;
}

/* ======================== FEATURED ======================== */

const pad = (n) => String(n).padStart(2, "0");
const total = featuredPosts.length;

function Featured() {
  const reduce = useReducedMotion();

  const [shown, setShown] = useState(0); // index currently painted
  const [phase, setPhase] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0); // bump to restart the autoplay timer + progress bar

  const shownRef = useRef(0);
  const busy = useRef(false);
  const durRef = useRef(7000);
  const timeouts = useRef([]);
  const orbRef = useRef(null);

  // Keep autoplay length in sync with --dur in the CSS
  useEffect(() => {
    const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--dur"));
    if (!Number.isNaN(v)) durRef.current = v * 1000;
    const pending = timeouts.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  const restart = useCallback(() => setRun((r) => r + 1), []);

  const go = useCallback(
    (i) => {
      const n = (i + total) % total;
      if (n === shownRef.current || busy.current) {
        restart();
        return;
      }
      if (reduce) {
        shownRef.current = n;
        setShown(n);
        restart();
        return;
      }
      busy.current = true;
      setPhase("leaving");
      const t = window.setTimeout(() => {
        shownRef.current = n;
        setShown(n);
        setPhase("entering");
        // let the "entering" start-state paint, then release it so it animates in
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setPhase("idle");
            busy.current = false;
            restart();
          })
        );
      }, 420);
      timeouts.current.push(t);
    },
    [reduce, restart]
  );

  // Autoplay
  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setTimeout(() => go(shownRef.current + 1), durRef.current);
    return () => window.clearTimeout(t);
  }, [run, paused, reduce, go]);

  const pause = () => setPaused(true);
  const resume = () => {
    setPaused(false);
    restart();
  };

  const onTabsKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (shownRef.current + (e.key === "ArrowRight" ? 1 : -1) + total) % total;
    go(n);
    e.currentTarget.querySelectorAll('[role="tab"]')[n]?.focus();
  };

  // Orb follows the cursor on the stage
  const onStageMove = (e) => {
    if (reduce || !orbRef.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.7) * 120;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 80;
    orbRef.current.style.transform = `translate(${x}px,${y}px)`;
  };
  const onStageLeave = () => {
    if (orbRef.current) orbRef.current.style.transform = "";
  };

  const p = featuredPosts[shown];

  return (
    <section
      className={`featured${paused ? " paused" : ""}`}
      aria-labelledby="ft-title"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) resume();
      }}
    >
      <div className="wrap">
        <Reveal className="head">
          <div>
            <div className="eyebrow">Featured on the blog</div>
            <h2 id="ft-title">Playbooks we use for our clients</h2>
          </div>
          <div className="controls">
            <button type="button" className="ctrl" id="f-prev" aria-label="Previous article" onClick={() => go(shownRef.current - 1)}>
              <ArrowLeft />
            </button>
            <span className="counter" aria-live="polite">
              <b>{pad(shown + 1)}</b> / {pad(total)}
            </span>
            <button type="button" className="ctrl" id="f-next" aria-label="Next article" onClick={() => go(shownRef.current + 1)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        {/* Big stage: content swaps when a tab is chosen */}
        <Reveal
          as="article"
          className={`stage${phase === "leaving" ? " leaving" : ""}${phase === "entering" ? " entering" : ""}`}
          delay=".1s"
          id="stage"
          aria-roledescription="carousel"
          onMouseMove={onStageMove}
          onMouseLeave={onStageLeave}
        >
          <div className="slide-text">
            <div className="slide-tags swap">
              <span className="pill">Featured</span>
              <span className="cat">{p.cat}</span>
            </div>
            <h3 className="swap">
              <Link href={p.href}>{p.title}</Link>
            </h3>
            <p className="swap">{p.desc}</p>
            <div className="slide-foot swap">
              <Link className="btn" href={p.href} aria-label={`Read article: ${p.title}`}>
                Read article
                <ArrowRight size={16} />
              </Link>
              <span className="meta">
                {p.readTime} · {p.date}
              </span>
            </div>
          </div>
          <div className="slide-visual" aria-hidden="true">
            <div className="orb" ref={orbRef} />
            {/* Swap the art for: <img src="cover.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:28}} /> */}
            <div className="art">
              <FeaturedArt key={shown} name={p.art} />
            </div>
          </div>
        </Reveal>

        {/* Article tabs */}
        <div className="tabs" role="tablist" aria-label="Featured articles" onKeyDown={onTabsKeyDown}>
          {featuredPosts.map((post, i) => (
            <Reveal
              key={post.href}
              as="button"
              type="button"
              className="tab"
              delay={`${(0.2 + i * 0.1).toFixed(1)}s`}
              role="tab"
              aria-selected={shown === i}
              onClick={() => go(i)}
            >
              <span className="tab-top">
                <span className="tab-num">{pad(i + 1)}</span>
                <span className={`tab-cat${post.amber ? " amber" : ""}`}>{post.cat}</span>
              </span>
              <span className="tab-title">{post.title}</span>
              <span className="tab-meta">{post.readTime}</span>
              <span className="bar">
                <i key={run} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== LATEST ARTICLES ======================== */

const countFor = (key) =>
  key === "all" ? latestPosts.length : latestPosts.filter((p) => p.cat === key).length;

function LatestArticles() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const trackRef = useRef(null);

  const [filter, setFilter] = useState("all");
  const [version, setVersion] = useState(0); // bumps on every chip click so cards re-run their "pop"
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const visible = filter === "all" ? latestPosts : latestPosts.filter((p) => p.cat === filter);
  const popped = version > 0;

  /* ---------- scroller state (arrows + dots) ---------- */
  const stepWidth = useCallback(() => {
    const first = trackRef.current?.querySelector(".card");
    return first ? first.getBoundingClientRect().width + 16 : 300;
  }, []);

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth - 2;
    let i = Math.round(t.scrollLeft / stepWidth());
    if (t.scrollLeft >= max) i = Math.max(visible.length - 1, 0);
    setAtStart(t.scrollLeft <= 2);
    setAtEnd(t.scrollLeft >= max);
    setActive(i);
  }, [stepWidth, visible.length]);

  useEffect(() => {
    update();
    const t = trackRef.current;
    if (!t) return;
    const onScroll = () => requestAnimationFrame(update);
    t.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      t.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [update, version]);

  /* ---------- drag-to-scroll with the mouse ---------- */
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let down = false;
    let moved = false;
    let startX = 0;
    let startL = 0;

    const onDown = (e) => {
      if (t.scrollWidth <= t.clientWidth) return;
      down = true;
      moved = false;
      startX = e.pageX;
      startL = t.scrollLeft;
      t.style.scrollSnapType = "none";
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) moved = true;
      t.scrollLeft = startL - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      t.style.scrollSnapType = "";
    };
    // swallow the click that ends a drag so cards don't navigate
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    t.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    t.addEventListener("click", onClickCapture, true);
    return () => {
      t.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      t.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  /* ---------- handlers ---------- */
  const behavior = reduce ? "auto" : "smooth";

  const pickFilter = (key) => {
    setFilter(key);
    setVersion((v) => v + 1);
    trackRef.current?.scrollTo({ left: 0, behavior });
  };

  const openCard = (e, href) => {
    if (e.target.closest("a") || window.getSelection()?.toString()) return;
    router.push(href);
  };

  return (
    <section className="latest" aria-labelledby="la-title">
      <div className="wrap">
        <Reveal className="head" threshold={0.12} rootMargin="0px 0px -40px 0px">
          <div>
            <div className="eyebrow">Latest insights</div>
            <h2 id="la-title">Latest Articles</h2>
          </div>
          <div className="head-right">
            <button
              type="button"
              className="ctrl"
              id="l-prev"
              aria-label="Scroll to previous articles"
              disabled={atStart}
              onClick={() => trackRef.current?.scrollBy({ left: -stepWidth(), behavior })}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              className="ctrl"
              id="l-next"
              aria-label="Scroll to next articles"
              disabled={atEnd}
              onClick={() => trackRef.current?.scrollBy({ left: stepWidth(), behavior })}
            >
              <ArrowRight size={18} />
            </button>
            <Link href="/blog" className="view-all">
              View all articles
              <ArrowRight className="arrow" size={16} />
            </Link>
          </div>
        </Reveal>

        <Reveal className="chips" delay=".08s" role="group" aria-label="Filter articles by topic" threshold={0.12} rootMargin="0px 0px -40px 0px">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className="chip"
              aria-pressed={filter === f.key}
              onClick={() => pickFilter(f.key)}
            >
              {f.label} <span className="count">{countFor(f.key)}</span>
            </button>
          ))}
        </Reveal>

        <div className="track" id="track" ref={trackRef}>
          {visible.map((p, idx) => (
            <Reveal
              key={`${p.href}-${version}`}
              as="article"
              className={`card${popped ? " pop" : ""}`}
              delay={p.delay}
              threshold={0.12}
              rootMargin="0px 0px -40px 0px"
              forceIn={popped}
              style={popped ? { "--pd": `${idx * 0.07}s` } : undefined}
              data-cat={p.cat}
              onClick={(e) => openCard(e, p.href)}
            >
              {/* Swap the thumb contents for: <img src="cover.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
              <div className={`thumb ${p.thumbClass}`} aria-hidden="true">
                <Thumb name={p.thumb} />
              </div>
              <div className="body">
                <span className={`tag${p.amber ? " amber" : ""}`}>{p.tag}</span>
                <h3>
                  <Link href={p.href} className="title-link">
                    {p.title}
                  </Link>
                </h3>
                <p>{p.desc}</p>
                <div className="foot">
                  <span className="m">
                    <Clock />
                    {p.minutes} min · {p.date}
                  </span>
                  <span className="read">
                    Read more <ArrowRight className="arrow" size={14} strokeWidth={2.2} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={`empty${visible.length === 0 ? " show" : ""}`} id="empty">
          No articles in this topic yet — check back soon.
        </div>

        <div className="dots" id="dots" aria-hidden="true">
          {visible.map((p, k) => (
            <span key={p.href} className={k === active ? "on" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== PERFORMANCE INSIGHTS ======================== */

function PerformanceInsights() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const bandRef = useRef(null);

  // glow drifts to the hovered card
  const driftGlow = (e) => {
    const band = bandRef.current;
    if (reduce || !band) return;
    const b = band.getBoundingClientRect();
    const r = e.currentTarget.getBoundingClientRect();
    band.style.setProperty("--gx", `${((r.left + r.width / 2 - b.left) / b.width) * 100}%`);
    band.style.setProperty("--gy", `${((r.top + r.height / 2 - b.top) / b.height) * 100}%`);
  };

  const resetGlow = () => {
    bandRef.current?.style.removeProperty("--gx");
    bandRef.current?.style.removeProperty("--gy");
  };

  const openCard = (e, href) => {
    if (e.target.closest("a") || window.getSelection()?.toString()) return;
    router.push(href);
  };

  return (
    <section className="perf" aria-labelledby="pf-title">
      <div className="band" id="band" ref={bandRef} onMouseLeave={resetGlow}>
        <div className="glow" aria-hidden="true" />

        <Reveal className="intro">
          <div className="eyebrow">Performance marketing insights</div>
          <h2 id="pf-title">
            Strategies built around <em>real results</em>
          </h2>
          <p>Explore our latest insights on Google Ads, Meta Ads, PPC, remarketing, lead generation and more.</p>
          <Link href="/blog/performance-marketing" className="cta">
            Explore Performance Marketing
            <ArrowRight className="arrow" size={16} strokeWidth={2.2} />
          </Link>
        </Reveal>

        <div className="cards">
          {insights.map((item) => (
            <Reveal
              key={item.href}
              as="article"
              className="card"
              delay={item.delay}
              onMouseEnter={driftGlow}
              onClick={(e) => openCard(e, item.href)}
            >
              <div className={`icon${item.amber ? " amber" : ""}`} aria-hidden="true">
                <InsightIconSvg name={item.icon} />
              </div>
              <span className={`cat${item.amber ? " amber" : ""}`}>{item.cat}</span>
              <h3>
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <span className="read">
                Read more <ArrowRight className="arrow" size={14} strokeWidth={2.2} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== PAGE ======================== */

export default function Page() {
  return (
    <>
      <title>Blog | Unnity – Performance Marketing & Web Development Insights</title>
      <meta
        name="description"
        content="Practical playbooks on Google Ads, Meta Ads, SEO, PPC, Shopify and web development from the Unnity team."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600..700&family=DM+Sans:wght@400;500;600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header/>
        <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
               <BrandsHero />
       
               <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
                 <p className=" text-sm ">
                   <Link href="/">Home</Link> / Blog
                 </p>
                 <h1 className="text-white text-2xl md:text-5xl font-semibold">
                 Blog That Convert
                 </h1>
                 <p className="text-sm sm:text-balance">
                   {" "}
                   We blend design aesthetics with performance strategy. The result?
                   Creatives that captivate and campaigns that convert
                 </p>
               </div>
             </div>
      <main id="main">
        {/* <BlogHero /> */}
        <Featured />
        <LatestArticles />
        <PerformanceInsights />
      </main>
      <Footer />
    </>
  );
}