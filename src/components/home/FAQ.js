"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "What services does Unnity offer?",
    answer:
      "Performance marketing (Meta & Google), website development, social media and creative, SEO, and Google Business Profile optimisation. You can take one service or the full stack.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "Most clients work with us on a monthly retainer based on the services, channels and ad spend involved. One-time projects like websites and Google Business Profile setup are priced separately.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Paid campaigns usually show clear signals in the first 2–4 weeks. SEO is a longer game — early movement in about 3 months and stronger growth over 6–12 months.",
  },
  {
    question: "Do you work with brands outside India?",
    answer:
      "Yes. Most of our clients are in India, and we also run accounts for international brands, including in Australia.",
  },
  {
    question: "How do you report on performance?",
    answer:
      "Weekly updates covering spend, ROAS or cost per lead, what's working, and what we're changing next — plus a deeper monthly review.",
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