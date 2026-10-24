"use client";

import { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import Button from "./Button";

const contactDetails = {
  phone: "+91 93150 03754",
  phoneLink: "tel:+919315003754",
  email: "hello@unnity.in",
  location: "New Delhi, India",
};

const fields = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
  },
  {
    name: "phone",
    label: "WhatsApp number",
    type: "tel",
    placeholder: "+91",
    autoComplete: "tel",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@brand.com",
    autoComplete: "email",
  },
  {
    name: "site",
    label: "Website / Instagram",
    type: "text",
    placeholder: "brand.com",
  },
];

const serviceOptions = [
  { value: "Ads", label: "Performance ads" },
  { value: "Web", label: "Website" },
  { value: "Social", label: "Social & creative" },
  { value: "SEO", label: "SEO" },
  { value: "GMB", label: "Google Business" },
];

const selectFields = [
  {
    name: "revenue",
    label: "Monthly revenue",
    options: [
      "Under ₹5L",
      "₹5L – ₹15L",
      "₹15L – ₹50L",
      "₹50L+",
    ],
  },
  {
    name: "budget",
    label: "Monthly ad budget",
    options: [
      "Under ₹1L",
      "₹1L – ₹3L",
      "₹3L – ₹10L",
      "₹10L+",
    ],
  },
];

const inputClasses = [
  "w-full min-w-0 rounded-[10px]",
  "border border-white/20 bg-black/20",
  "px-3.5 py-3 text-sm text-white",
  "placeholder:text-[#ADA9D6]/70",
  "transition-colors",
  "hover:border-white/30",
  "focus:border-[#B4AEFF]",
  "focus:outline-none focus:ring-2 focus:ring-[#6D63F2]/30",
  "disabled:cursor-wait disabled:opacity-60",
].join(" ");

function ContactDetails() {
  return (
    <div className="relative z-10 min-w-0">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B4AEFF] sm:text-xs">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[#B4AEFF]"
        />

        Let&apos;s talk
      </span>

      <h2
        id="contact-heading"
        className="mt-6 text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]"
      >
        Get a growth plan,{" "}
        <span className="bg-gradient-to-r from-white to-[#B4AEFF] bg-clip-text text-transparent">
          not a sales pitch.
        </span>
      </h2>

      <p className="mt-5 max-w-[450px] text-sm leading-7 text-[#ADA9D6] sm:text-base">
        Tell us where you are and where you want to be.
        We&apos;ll come back within 24 hours with a free
        audit and a clear next step.
      </p>

      <address className="mt-8 grid gap-5 not-italic">
        <a
          href={contactDetails.phoneLink}
          className="inline-flex w-fit items-center gap-3 rounded text-sm text-white transition-colors hover:text-[#B4AEFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4AEFF]"
        >
          <Phone
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[#B4AEFF]"
            strokeWidth={1.8}
          />

          {contactDetails.phone}
        </a>

        <a
          href={`mailto:${contactDetails.email}`}
          className="inline-flex w-fit items-center gap-3 rounded text-sm text-white transition-colors hover:text-[#B4AEFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B4AEFF]"
        >
          <Mail
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[#B4AEFF]"
            strokeWidth={1.8}
          />

          {contactDetails.email}
        </a>

        <p className="flex items-center gap-3 text-sm text-white">
          <MapPin
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[#B4AEFF]"
            strokeWidth={1.8}
          />

          {contactDetails.location}
        </p>
      </address>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const isSubmitting = status === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (isSubmitting || !form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      site: String(formData.get("site") || "").trim(),
      services: formData.getAll("services"),
      revenue: String(formData.get("revenue") || ""),
      budget: String(formData.get("budget") || ""),
      msg: String(formData.get("msg") || "").trim(),
    };

    setStatus("sending");

    const controller = new AbortController();

    const timeout = window.setTimeout(() => {
      controller.abort();
    }, 15000);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Request a free growth audit"
      aria-busy={isSubmitting}
      className="relative z-10 min-w-0"
    >
      <fieldset
        disabled={isSubmitting}
        className="m-0 grid min-w-0 grid-cols-1 gap-5 border-0 p-0 sm:grid-cols-2"
      >
        <legend className="sr-only">
          Your brand and contact details
        </legend>

        {/* Contact fields */}
        {fields.map((field) => (
          <div
            key={field.name}
            className="grid min-w-0 content-start gap-2"
          >
            <label
              htmlFor={`contact-${field.name}`}
              className="text-xs font-medium text-[#D8D6F2]"
            >
              {field.label}
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              maxLength={500}
              required
              className={inputClasses}
            />
          </div>
        ))}

        {/* Service selection */}
        <fieldset className="m-0 min-w-0 border-0 p-0 sm:col-span-2">
          <legend className="mb-3 p-0 text-xs font-medium text-[#D8D6F2]">
            What do you need?
          </legend>

          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <label
                key={service.value}
                className="relative cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service.value}
                  className="peer sr-only"
                />

                <span
                  className={[
                    "block rounded-full border border-white/20",
                    "px-3 py-2 text-[11px] text-[#ADA9D6]",
                    "transition-colors",
                    "hover:border-[#B4AEFF]/50",
                    "peer-checked:border-[#6D63F2]",
                    "peer-checked:bg-[#6D63F2]",
                    "peer-checked:text-white",
                    "peer-focus-visible:outline-2",
                    "peer-focus-visible:outline-offset-4",
                    "peer-focus-visible:outline-[#B4AEFF]",
                    "peer-disabled:cursor-wait",
                    "peer-disabled:opacity-60",
                  ].join(" ")}
                >
                  {service.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Revenue and budget */}
        {selectFields.map((field) => (
          <div
            key={field.name}
            className="grid min-w-0 content-start gap-2"
          >
            <label
              htmlFor={`contact-${field.name}`}
              className="text-xs font-medium text-[#D8D6F2]"
            >
              {field.label}
            </label>

            <select
              id={`contact-${field.name}`}
              name={field.name}
              defaultValue=""
              className={`${inputClasses} cursor-pointer [color-scheme:dark]`}
            >
              <option
                value=""
                className="bg-[#1B1855] text-white"
              >
                Select
              </option>

              {field.options.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-[#1B1855] text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Message */}
        <div className="grid min-w-0 gap-2 sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="text-xs font-medium text-[#D8D6F2]"
          >
            Biggest challenge right now
          </label>

          <textarea
            id="contact-message"
            name="msg"
            rows={3}
            maxLength={4000}
            placeholder="e.g. ROAS dropped after scaling, leads are low quality…"
            className={`${inputClasses} min-h-[105px] resize-y`}
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
          <Button
            type="submit"
            dark
            disabled={isSubmitting}
            showArrow={!isSubmitting}
            className="w-full shrink-0 sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              {isSubmitting && (
                <LoaderCircle
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin motion-reduce:animate-none"
                />
              )}

              {isSubmitting
                ? "Sending…"
                : "Get my free audit"}
            </span>
          </Button>

          <p className="text-center text-[10px] leading-5 text-[#ADA9D6] sm:text-left">
            We reply within 24 hours.
            <br />
            No spam, ever.
          </p>
        </div>
      </fieldset>

      {/* Submission feedback */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-4"
      >
        {status === "success" && (
          <div className="flex items-start gap-2.5 rounded-xl border border-green-400/20 bg-green-400/10 p-3.5">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-green-300"
            />

            <p className="text-xs leading-6 text-green-100">
              Thank you! Your request has been sent.
              We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-start gap-2.5 rounded-xl border border-red-300/20 bg-red-300/10 p-3.5">
            <AlertCircle
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-red-200"
            />

            <p className="text-xs leading-6 text-red-100">
              We couldn&apos;t send your request. Please
              try again, call{" "}
              <a
                href={contactDetails.phoneLink}
                className="underline underline-offset-2"
              >
                {contactDetails.phone}
              </a>
              , or email{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="underline underline-offset-2"
              >
                {contactDetails.email}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-[110px]"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-[#221E66] via-[#161349] to-[#110E3B] p-5 sm:p-8 lg:p-14">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#6D63F2]/25 blur-[90px]"
          />

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}