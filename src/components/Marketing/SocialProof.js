"use client";
import { useState, useEffect } from "react";
import styles from "./SocialProof.module.css";
import Image from "next/image";

const SocialProof = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const reviews = [
    {
      text: "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that's in it to win",
      author: "Rishab B.",
      role: "Founder of BabLouie",
      image: "/avatar_ceo_1764326367308.png",
    },
    {
      text: "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it's user-friendly, aesthetically pleasing, and professionally built.",
      author: "Tarun J.",
      role: "Founder of Tashe and Sain Milks",
      image: null,
    },
    {
      text: "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes.",
      author: "Vandita",
      role: "Founder, Iyurved",
      image: null,
    },
    {
      text: "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. The personal touch and strong understanding of our brand make a real difference.",
      author: "Tanya",
      role: "Cupid Clothings",
      image: null,
    },
    {
      text: "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. It's been a game-changer for our business!",
      author: "Alex Johnson",
      role: "Sales Director",
      image: null,
    },
  ];

  const logos = [
    "/empire1.png",
    "/aqua1.png",
    "/comforto.png",
    "/da1.png",
    "/adpl2.png",
    "/edoofa.png",
    "/hardoll.png",
    "/hub1.png",
    "/nira.png",
    "/orchid-blue.png",
    "/poco.png",
    "/sain.png",
    "/sky.png",
    "/aurave1.png",
    "/uk.png",
    "/cupid1.png",
  ];

  const changeReview = (dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      if (dir === "next") {
        setActiveReview((prev) => (prev + 1) % reviews.length);
      } else {
        setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
      setIsAnimating(false);
    }, 350);
  };

  const initials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section className={styles.socialProof}>
      {/* ── Logo Belt ── */}
      <div className={styles.logoSection}>
        <p className={styles.eyebrow}>Trusted by Leading Brands</p>
        <h2 className={styles.heading}>Brands that chose us</h2>

        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.leftToRight}`}>
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={`r1-${i}`}
                src={logo}
                width={0}
                height={0}
                alt=""
                unoptimized
              />
            ))}
          </div>
        </div>

        {/* <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.rightToLeft}`}>
            {[...logos, ...logos].map((logo, i) => (
              <Image
                key={`r2-${i}`}
                src={logo}
                width={0}
                height={0}
                alt=""
                unoptimized
              />
            ))}
          </div>
        </div> */}
      </div>

      {/* ── Testimonials ── */}
      <div className={styles.container}>
        <div className={styles.testimonialSection}>
          {/* Left: meta */}
          <div className={styles.controls}>
            <p className={styles.eyebrow}>What clients say</p>
            <h3 className={styles.controlsHeading}>Success Stories</h3>
            <p className={styles.controlsSub}>
              See what our partners have to say about our collaboration.
            </p>

            <div className={styles.arrows}>
              <button
                onClick={() => changeReview("prev")}
                className={styles.arrowBtn}
                aria-label="Previous"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => changeReview("next")}
                className={styles.arrowBtn}
                aria-label="Next"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeReview ? styles.dotActive : ""}`}
                  onClick={() => {
                    setDirection(i > activeReview ? "next" : "prev");
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveReview(i);
                      setIsAnimating(false);
                    }, 350);
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: card */}
          <div className={styles.reviewDisplay}>
            <div
              className={`${styles.reviewCard} ${isAnimating ? (direction === "next" ? styles.exitLeft : styles.exitRight) : styles.enter}`}
            >
              {/* Quote mark */}
              <span className={styles.quoteIcon}>"</span>

              <p className={styles.reviewText}>{reviews[activeReview].text}</p>

              <div className={styles.divider} />

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {reviews[activeReview].image ? (
                    <img
                      src={reviews[activeReview].image}
                      alt={reviews[activeReview].author}
                    />
                  ) : (
                    <span>{initials(reviews[activeReview].author)}</span>
                  )}
                </div>
                <div className={styles.authorMeta}>
                  <h4>{reviews[activeReview].author}</h4>
                  <span>{reviews[activeReview].role}</span>
                </div>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
