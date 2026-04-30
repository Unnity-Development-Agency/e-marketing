"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Continent bounding boxes [latMin, latMax, lonMin, lonMax]
const LAND_MASKS = [
  [-35, 37, -18, 52], // Africa
  [36, 71, -10, 40], // Europe
  [5, 75, 25, 145], // Asia
  [15, 72, -170, -52], // North America
  [-55, 12, -82, -34], // South America
  [-44, -10, 113, 154], // Australia
  [60, 84, -56, -17], // Greenland
];

function isLand(lat, lon) {
  return LAND_MASKS.some(
    ([la, lb, lo, lp]) => lat >= la && lat <= lb && lon >= lo && lon <= lp,
  );
}

export default function BrandsHero() {
  const starsRef = useRef(null);
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const pinRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // --- Stars ---
    if (starsRef.current) {
      for (let i = 0; i < 75; i++) {
        const s = document.createElement("div");
        const sz = Math.random() * 1.8 + 0.4;
        Object.assign(s.style, {
          position: "absolute",
          width: `${sz}px`,
          height: `${sz}px`,
          background: "#fff",
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: String(0.25 + Math.random() * 0.65),
          animation: `twinkle ${2 + Math.random() * 4}s ease-in-out ${
            Math.random() * 5
          }s infinite alternate`,
        });
        starsRef.current.appendChild(s);
      }
    }

    // --- Dotted Earth on Canvas ---
    const DOT_R = 1.4;
    const GRID = 5.5;

    function drawEarth() {
      const canvas = canvasRef.current;
      const wrap = wrapRef.current;
      const pin = pinRef.current;
      if (!canvas || !wrap || !pin) return;

      const size = wrap.offsetWidth;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const cx = size / 2;
      const cy = size / 2;
      const R = size / 2 - 2;

      // Ocean background
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = "#081428";
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      // Ocean dots
      for (let y = DOT_R; y < size - DOT_R; y += GRID) {
        for (let x = DOT_R; x < size - DOT_R; x += GRID) {
          const dx = x - cx;
          const dy = y - cy;
          if (dx * dx + dy * dy <= R * R) {
            ctx.beginPath();
            ctx.arc(x, y, DOT_R * 0.75, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(30,100,200,0.26)";
            ctx.fill();
          }
        }
      }

      // Slow rotation offset
      const offset = Date.now() / 50000;

      // Land dots — spherical projection
      for (let lat = -90; lat <= 90; lat += 3.5) {
        for (let lon = -180; lon <= 180; lon += 4) {
          if (!isLand(lat, lon)) continue;
          const phi = ((90 - lat) * Math.PI) / 180;
          const theta = ((lon + offset * 30) * Math.PI) / 180;
          const sinP = Math.sin(phi);
          if (Math.cos(theta) * sinP < 0) continue; // back hemisphere
          const sx = cx + R * sinP * Math.sin(theta);
          const sy = cy - R * Math.cos(phi);
          const brightness = 0.4 + 0.6 * (Math.cos(theta) * sinP);
          ctx.beginPath();
          ctx.arc(sx, sy, DOT_R, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52,${128 + Math.round(brightness * 42)},55,${
            0.7 + brightness * 0.22
          })`;
          ctx.fill();
        }
      }

      // Atmosphere rim gradient
      const grad = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(1, "rgba(50,130,255,0.2)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Specular shine
      const sh = ctx.createRadialGradient(
        cx - R * 0.28,
        cy - R * 0.28,
        0,
        cx - R * 0.1,
        cy - R * 0.1,
        R * 0.55,
      );
      sh.addColorStop(0, "rgba(255,255,255,0.1)");
      sh.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sh;
      ctx.fill();
      ctx.restore();

      // Delhi pin
      const phi = ((90 - 28.6) * Math.PI) / 180;
      const theta = ((77.2 + offset * 30) * Math.PI) / 180;
      const sinP = Math.sin(phi);
      const inFront = Math.cos(theta) * sinP > 0;
      if (inFront) {
        const px = cx + R * sinP * Math.sin(theta);
        const py = cy - R * Math.cos(phi);
        pin.style.display = "block";
        pin.style.left = `${px}px`;
        pin.style.top = `${py}px`;
        pin.style.transform = "translate(-50%,-50%)";
      } else {
        pin.style.display = "none";
      }
    }

    function loop() {
      drawEarth();
      rafRef.current = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(rafRef.current);
      drawEarth();
      loop();
    }

    start();
    window.addEventListener("resize", start);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", start);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%   { opacity: .7; }
          100% { opacity: .06; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin {
          from { transform: rotateX(68deg) rotateZ(0deg); }
          to   { transform: rotateX(68deg) rotateZ(360deg); }
        }
        @keyframes pulsering {
          0%   { transform: translate(-50%,-50%) scale(.5);  opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
        }
        @keyframes glowBlink {
          0%,100% { opacity: .4; }
          50%     { opacity: .85; }
        }
        .bh-t1 { animation: fadeUp .7s cubic-bezier(.2,.8,.3,1) .15s both; }
        .bh-t2 { animation: fadeUp .7s cubic-bezier(.2,.8,.3,1) .3s both; }
        .bh-t3 { animation: fadeUp .7s cubic-bezier(.2,.8,.3,1) .45s both; }
        .bh-orbit { animation: orbitSpin 18s linear infinite; }
        .bh-glow  { animation: glowBlink 3.5s ease-in-out infinite; }
        .bh-p1    { animation: pulsering 1.8s ease-out infinite; }
        .bh-p2    { animation: pulsering 1.8s ease-out .6s infinite; }
      `}</style>

      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{
          minHeight: "clamp(200px, 32vw, 380px)",
          background:
            "linear-gradient(135deg,#080d1a 0%,#0b1530 45%,#091e38 75%,#050f1a 100%)",
        }}
      >
        {/* Stars */}
        <div ref={starsRef} className="absolute inset-0 pointer-events-none" />
        {/* Earth — half of previous size: clamp(160px, 22vw, 240px) */}
        <div
          ref={wrapRef}
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            right: "clamp(-40px,-4vw,-10px)",
            width: "clamp(160px,22vw,240px)",
            height: "clamp(160px,22vw,240px)",
          }}
        >
          {/* Orbit ring */}
          <div
            className="bh-orbit absolute rounded-full pointer-events-none"
            style={{
              inset: "-22%",
              width: "144%",
              height: "144%",
              border: "1px dashed rgba(100,180,255,.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                marginLeft: -3,
                width: 6,
                height: 6,
                background: "#5af",
                borderRadius: "50%",
                boxShadow: "0 0 6px #5af",
              }}
            />
          </div>

          {/* Dotted canvas globe */}
          <canvas
            ref={canvasRef}
            style={{ borderRadius: "50%", display: "block" }}
          />

          {/* Glow ring */}
          <div
            className="bh-glow absolute rounded-full pointer-events-none"
            style={{
              inset: "-7%",
              width: "114%",
              height: "114%",
              border: "1px solid rgba(80,160,255,.15)",
            }}
          />

          {/* Delhi Pin */}
          <div
            ref={pinRef}
            style={{ position: "absolute", display: "none", zIndex: 10 }}
          >
            <div
              className="bh-p1"
              style={{
                position: "absolute",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "1.5px solid rgba(255,80,80,.55)",
              }}
            />
            <div
              className="bh-p2"
              style={{
                position: "absolute",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "1px solid rgba(255,80,80,.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 8,
                height: 8,
                background: "#ff3f3f",
                borderRadius: "50%",
                border: "1.5px solid #fff",
                boxShadow: "0 0 8px rgba(255,60,60,.9)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(8,16,40,.88)",
                border: "1px solid rgba(90,160,255,.32)",
                padding: "2px 7px",
                borderRadius: 5,
                color: "#9eceff",
                fontSize: 9,
                fontFamily: "sans-serif",
                whiteSpace: "nowrap",
                letterSpacing: ".06em",
                fontWeight: 600,
              }}
            >
              New Delhi
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
