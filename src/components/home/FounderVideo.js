"use client";

import { useRef, useState } from "react";

import {
  Play,
  Target,
  Rocket,
  Video,
} from "lucide-react";

import Button from "./Button";

// Files public/home folder mein add karke paths yahan set karo.
const founder = {
  name: "Sayam Jain",
  initials: "SJ",
  photo: "",
  video: "",
  poster: "",

  // Example:
  // photo: "/home/founder.jpg",
  // video: "/home/founder-video.mp4",
  // poster: "/home/founder-poster.jpg",
};

// Actual video ke according timestamps edit karna.
const chapters = [
  {
    time: 0,
    label: "Why I started Unnity",
  },
  {
    time: 30,
    label: "How we think about your ad spend",
  },
  {
    time: 60,
    label: "What working with us looks like",
  },
  {
    time: 90,
    label: "Who we're the right fit for",
  },
];

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function FounderAvatar() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-[#0f032b] text-sm font-semibold text-white">
      {founder.photo && !imageFailed ? (
        <img
          src={founder.photo}
          alt={founder.name}
          width={44}
          height={44}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        founder.initials
      )}
    </span>
  );
}

function FloatingCard({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute z-10 hidden items-center gap-3",
        "rounded-2xl border border-white/15",
        "bg-[#1B1856]/90 px-4 py-3.5 backdrop-blur-xl",
        "shadow-[0_20px_45px_-20px_rgba(0,0,0,0.5)]",
        "sm:flex",
        className,
      ].join(" ")}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6D63F2]/15 text-[#B4AEFF]">
        <Icon
          className="h-5 w-5"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] text-[#ADA9D6]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FounderVideo() {
  const videoRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [playbackMessage, setPlaybackMessage] = useState("");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const hasVideo = Boolean(founder.video);
  const canUseChapters = hasVideo && isReady && !hasError;

  let activeChapter = -1;

  if (canUseChapters) {
    chapters.forEach((chapter, index) => {
      if (currentTime >= chapter.time) {
        activeChapter = index;
      }
    });
  }

  async function playChapter(time) {
    const video = videoRef.current;

    if (!video || !canUseChapters) return;
    if (time >= duration) return;

    setPlaybackMessage("");

    try {
      video.currentTime = time;
      await video.play();
    } catch {
      setPlaybackMessage(
        "Please use the video controls to start playback."
      );
    }
  }

  function handleMetadata() {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) return;

    setDuration(video.duration);
    setIsReady(true);
    setHasError(false);
  }

  function handleVideoError() {
    setHasError(true);
    setIsReady(false);
  }

  return (
    <section
      id="founder"
      aria-labelledby="founder-video-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#110E3B] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-[110px]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#6D63F2]/15 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Section content */}
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B4AEFF] sm:text-xs">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#B4AEFF]"
            />

            Meet the founder
          </span>

          <h2
            id="founder-video-heading"
            className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[50px]"
          >
            Hear it straight from{" "}
            <span className="bg-gradient-to-r from-white to-[#B4AEFF] bg-clip-text text-transparent">
              the person running your account.
            </span>
          </h2>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-[#ADA9D6]">
            Two minutes on why Unnity exists, how we think
            about your ad spend, and what working with us
            actually looks like.
          </p>

          {/* Video chapters */}
          <div
            aria-label="Founder video chapters"
            className="mt-7 grid gap-2.5"
          >
            {chapters.map((chapter, index) => {
              const disabled =
                !canUseChapters || chapter.time >= duration;

              const isActive =
                canUseChapters && activeChapter === index;

              return (
                <button
                  type="button"
                  key={chapter.time}
                  disabled={disabled}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Play ${chapter.label} at ${formatTime(
                    chapter.time
                  )}`}
                  onClick={() => playChapter(chapter.time)}
                  className={[
                    "group flex w-full items-center gap-3",
                    "rounded-xl border px-4 py-3.5 text-left",
                    "transition-colors duration-200",
                    "focus-visible:outline-2",
                    "focus-visible:outline-offset-4",
                    "focus-visible:outline-[#B4AEFF]",
                    "disabled:cursor-default disabled:opacity-50",
                    isActive
                      ? "border-[#B4AEFF]/40 bg-[#6D63F2]/15"
                      : "border-white/10 bg-white/[0.03] enabled:hover:border-[#B4AEFF]/30 enabled:hover:bg-white/[0.06]",
                  ].join(" ")}
                >
                  <span className="shrink-0 text-xs font-medium tabular-nums text-[#B4AEFF]">
                    {formatTime(chapter.time)}
                  </span>

                  <span className="flex-1 text-xs font-medium leading-5 text-white sm:text-sm">
                    {chapter.label}
                  </span>

                  <Play
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#B4AEFF]"
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}
          </div>

          <p
            role="status"
            aria-live="polite"
            className="mt-3 text-xs leading-5 text-[#ADA9D6]"
          >
            {playbackMessage}
          </p>

          {/* Founder details */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <FounderAvatar />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">
                {founder.name}
              </p>

              <p className="mt-1 text-[10px] leading-5 text-[#ADA9D6] sm:text-xs">
                Founder, Unnity · 8 yrs in performance marketing
              </p>
            </div>

            <Button
              href="#contact"
              dark
              className="mt-2 w-full sm:ml-auto sm:mt-0 sm:w-auto"
            >
              Book a call
            </Button>
          </div>
        </div>

        {/* Video */}
        <div className="relative order-first mx-auto w-full max-w-[480px] py-4 lg:order-none">
          <FloatingCard
            icon={Target}
            title="₹2.5Cr / month"
            description="Budgets managed"
            className="left-0 top-16"
          />

          <FloatingCard
            icon={Rocket}
            title="100+ brands"
            description="Scaled since 2018"
            className="bottom-16 right-0"
          />

          <div className="relative mx-auto aspect-[9/16] w-[min(280px,85%)] overflow-hidden rounded-[28px] border border-white/20 bg-[#161349] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.6)] sm:w-[300px]">
            {hasVideo && !hasError ? (
              <video
                ref={videoRef}
                src={founder.video}
                poster={founder.poster || undefined}
                controls
                playsInline
                preload="metadata"
                aria-label={`${founder.name}: the story behind Unnity`}
                onLoadedMetadata={handleMetadata}
                onTimeUpdate={(event) => {
                  setCurrentTime(event.currentTarget.currentTime);
                }}
                onError={handleVideoError}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_20%,#0f032b,transparent_70%)] px-6 text-center">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#B4AEFF]">
                  <Video
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />

                  Founder&apos;s note
                </span>

                <span
                  aria-hidden="true"
                  className="text-[88px] font-bold leading-none tracking-[-0.05em] text-[#B4AEFF]"
                >
                  {founder.initials}
                </span>

                <p className="mt-6 text-xl font-semibold text-white">
                  {founder.name}
                </p>

                <p className="mt-2 text-xs text-[#ADA9D6]">
                  Founder, Unnity
                </p>

                <p className="mt-6 max-w-[210px] text-xs leading-6 text-[#ADA9D6]">
                  {hasError
                    ? "The video is currently unavailable. Contact us to learn more."
                    : "Founder video coming soon."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}