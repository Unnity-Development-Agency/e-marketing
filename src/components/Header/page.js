"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneFlip, FaPhone } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeTimer = useRef(null);

  /* -------- CHECK MOBILE -------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!menuOpen) setDropOpen(false);
  }, [menuOpen]);

  /* ===== DESKTOP HOVER ===== */
  const openDropdownSafe = () => {
    if (isMobile) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };

  const closeDropdownSafe = () => {
    if (isMobile) return;
    closeTimer.current = setTimeout(() => {
      setDropOpen(false);
    }, 180);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
  fixed top-0 md:top-5 left-1/2 -translate-x-1/2
  w-full md:w-[calc(100%-40px)] max-w-7xl
  bg-[#0f032b] text-white
  md:rounded-full
  px-5 py-3 md:py-2
  flex items-center justify-between
  z-[9999]
  border border-white/40
"
      >
        {/* LEFT — LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="filter brightness-0 invert cursor-pointer"
            />
          </Link>
        </div>

        {/* CENTER — NAV */}
        <nav className="hidden text-lg md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="cursor-pointer">
            Home
          </Link>

          <Link href="/case-studies" className="cursor-pointer">
            Case Studies
          </Link>

          {/* SEE OUR WORK */}
          <div
            className="relative"
            onMouseEnter={openDropdownSafe}
            onMouseLeave={closeDropdownSafe}
          >
            <button className="flex cursor-pointer items-center gap-2">
              See Our Work
              <span className={`transition ${dropOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            <ul
              onMouseEnter={openDropdownSafe}
              onMouseLeave={closeDropdownSafe}
              className={`
        absolute left-1/2 -translate-x-1/2 top-full
        bg-[#0f032b] text-white rounded-lg mt-4
        shadow-xl min-w-55
        transform transition-all duration-300 origin-top
        ${
          dropOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
            >
              <Link
                href="/creative"
                className="bg-[#0f032b] block px-6 py-3 hover:bg-white/10 cursor-pointer"
              >
                Creative
              </Link>

              <li className="px-6 py-3 hover:bg-white/10 cursor-pointer">
                <Link href="/snapshot-project">Our Projects</Link>
              </li>
              <li className="px-6 py-3 hover:bg-white/10 cursor-pointer">
                <Link href="/showcase">Marketing</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* RIGHT — CALL + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="tel:+919315003754">
            <div className="flex items-center gap-2 font-medium cursor-pointer">
              <FaPhone className="text-sm" />
              +91 931 500 3754
            </div>
          </Link>

          <Link href="https://calendly.com/sayam-unnity/30min">
            <button className="group flex items-center gap-3 bg-white text-[#0f032b] hover:bg-[#0f032b] hover:text-white hover:border hover:border-white px-6 py-2.5 rounded-full text-base font-medium overflow-hidden cursor-pointer transition-all duration-200 max-sm:w-full max-sm:justify-center">
              Start Now
              <span className="relative w-7 h-7 overflow-hidden rounded-full bg-[#0f032b] text-white shrink-0">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#0f032b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden relative w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute left-0 top-2 w-full h-[2.5px] bg-white transition ${menuOpen ? "rotate-45 top-4" : ""}`}
          />
          <span
            className={`absolute left-0 top-4 w-full h-[2.5px] bg-white transition ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 top-6 w-full h-[2.5px] bg-white transition ${menuOpen ? "-rotate-45 top-4" : ""}`}
          />
        </button>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`
        fixed top-20 right-0 h-[calc(100vh-5rem)] w-[80%] max-w-85
        bg-white text-black
        transform transition-transform duration-300 ease-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        z-[9998] md:hidden
      `}
      >
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link
              className="cursor-pointer"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer"
              href="/case-studies"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>

            <div>
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropOpen(!dropOpen)}
              >
                See Our Work
                <span className={`transition ${dropOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${dropOpen ? "max-h-40 mt-4" : "max-h-0"}`}
              >
                <Link
                  href="/creative"
                  className="block py-2 pl-3 cursor-pointer"
                >
                  Creative
                </Link>
                <Link
                  href="/snapshot-project"
                  className="block py-2 pl-3 cursor-pointer"
                >
                  Our Projects
                </Link>
                <li className="px-6 py-3 hover:bg-white/10 cursor-pointer">
                  <Link href="/showcase">Marketing</Link>
                </li>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          <div className="border-t pt-6 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <FaPhoneFlip className="rotate-110" />
              <Link href="tel:+919315003754">+91 931 500 3754</Link>
            </div>

            <Link href="tel:+919315003754">
              <button className="w-full bg-[#0f032b] text-white py-3 rounded-full font-medium">
                Start Call →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9997] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
