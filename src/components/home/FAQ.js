"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Does Unnity Specialise in Performance Marketing?",
    answer:
      "Yes! We specialise in performance marketing and creative solutions, including Google Ads and Meta Ads, helping businesses generate leads, increase sales and grow online.",
  },
  {
    question: "Which Metrics Measure Performance Marketing Success?",
    answer:
      "We track ROAS, ROI, CPL, CPA, CTR and conversion rates to measure campaign performance and business growth.",
  },
  {
    question: "What Makes Unnity Different from Other Agencies?",
    answer:
      "We focus on measurable results, creative strategies, transparent reporting and continuous campaign optimisation.",
  },
  {
    question: "Is Performance Marketing Right for My Business?",
    answer:
      "Yes! Whether you're a startup or an established brand, we create strategies based on your goals, audience and budget.",
  },
  {
    question: " Does Unnity Work with International Brands?",
    answer:
      "Yes! We work with brands in India and international markets to help them reach the right audience and grow their business.",
  },
  {
    question: "Does Unnity Use A/B Testing in Performance Marketing?",
    answer:
      "Yes! We use A/B testing to compare ad creatives, headlines, audiences and landing pages to improve campaign performance and conversions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const uniqueId = useId();

  function toggleQuestion(index) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-9 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
        {/* Section introduction */}
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Your questions,"
            highlightedText="answered."
          />

          <p className="mt-5 max-w-[400px] text-base leading-7 text-[#5F5C80]">
            Still curious? Call or WhatsApp us on{" "}
            <a
              href="https://wa.me/919315003754"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-medium text-[#0f032b] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6D63F2]"
            >
              +91 93150 03754
            </a>
            .
          </p>
        </div>

        {/* Questions */}
        <div className="min-w-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            const questionId =
              `${uniqueId}-question-${index}`;

            const answerId =
              `${uniqueId}-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="border-b border-[#1B1855]/15"
              >
                <h3 className="m-0">
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleQuestion(index)}
                    className={[
                      "flex w-full items-center justify-between",
                      "gap-5 rounded-sm py-6 text-left",
                      "text-sm font-semibold leading-6 sm:text-base",
                      "transition-colors duration-200",
                      "hover:text-[#0f032b]",
                      "focus-visible:outline-2",
                      "focus-visible:outline-offset-4",
                      "focus-visible:outline-[#6D63F2]",
                      isOpen
                        ? "text-[#0f032b]"
                        : "text-[#14123A]",
                    ].join(" ")}
                  >
                    <span>{faq.question}</span>

                    <span
                      aria-hidden="true"
                      className={[
                        "flex h-8 w-8 shrink-0",
                        "items-center justify-center rounded-full",
                        "transition-colors duration-200",
                        isOpen
                          ? "bg-[#0f032b]/10 text-[#0f032b]"
                          : "bg-[#F6F5FC] text-[#6D63F2]",
                      ].join(" ")}
                    >
                      {isOpen ? (
                        <Minus
                          className="h-[18px] w-[18px]"
                          strokeWidth={1.8}
                        />
                      ) : (
                        <Plus
                          className="h-[18px] w-[18px]"
                          strokeWidth={1.8}
                        />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="pb-6 pr-4 sm:pr-12"
                >
                  <p className="text-sm leading-7 text-[#5F5C80]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}