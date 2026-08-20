"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function LeadForm() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    companyName: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    designation: "",
  });

  const handlePhoneChange = (e) => {
    setFormData((s) => ({
      ...s,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzGvjdcGxwSeaz_2jJErGaeM2qrgBoLmZ6b9S69geyKqC5obyaXAC5UoS7SvAsngdr-/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "Enquiry sent successfully!" });
        setFormData({
          companyName: "",
          budget: "",
          name: "",
          phone: "",
          email: "",
          service: "",
          designation: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-[#fafbff] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
        <div className="relative">
          <div className="relative rounded-full bg-[radial-linear(120%_120%_at_30%_20%,#fff_0%,#f3f5fb_45%,#efeefe_100%)] border-2 border-[#ececf6] aspect-square grid place-items-center overflow-hidden max-lg:max-w-lg max-lg:mx-auto">
            <Image
              src="/sayyam2.png"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 520px"
              alt="Sayam Jain"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div>
          <span className="text-[#070c1a] text-3xl font-bold">
            Your Growth Partner in the Digital Era
          </span>
          <p className="my-4 mb-6 text-[#5f6577] text-base">
            Let's create impact — fill in the form and we'll take it from
            there.
          </p>

          <form onSubmit={submitHandler} ref={formRef}>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {[
                {
                  id: "companyName",
                  label: "Company Name",
                  type: "text",
                  placeholder: "Company Name",
                  required: true,
                },
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Name",
                  required: true,
                },
                {
                  id: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "Phone Number",
                },
                {
                  id: "designation",
                  label: "Designation",
                  type: "text",
                  placeholder: "Designation",
                },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label htmlFor={id} className="text-base text-[#5f6577]">
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={formData[id]}
                    onChange={
                      id === "phone"
                        ? handlePhoneChange
                        : (e) =>
                            setFormData((s) => ({
                              ...s,
                              [id]: e.target.value,
                            }))
                    }
                    className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                <label htmlFor="email" className="text-base text-[#5f6577]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((s) => ({ ...s, email: e.target.value }))
                  }
                  className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                />
              </div>

              {[
                {
                  id: "budget",
                  label: "Monthly Marketing Budget",
                  options: [
                    "Monthly Marketing Budget",
                    "Less Than Rs 2L Budget",
                    "Rs 2L to Rs 5L",
                    "Rs 5L to Rs 25L",
                    "More Than 50L",
                    "I am Looking For Organic Services",
                  ],
                },
                {
                  id: "service",
                  label: "Choose A Service",
                  options: [
                    "Choose A Service",
                    "SEO",
                    "Paid Marketing (Google, Facebook & Amazon ads)",
                    "UI/UX",
                    "Website Development",
                    "Website Maintenance",
                    "Shopify Migration",
                  ],
                },
              ].map(({ id, label, options }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label htmlFor={id} className="text-base text-[#5f6577]">
                    {label}
                  </label>
                  <select
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, [id]: e.target.value }))
                    }
                    className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] appearance-none"
                  >
                    {options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {status.message && (
              <div
                className={`mt-2 p-3 rounded-lg text-base ${status.type === "error" ? "bg-[#fff1f1] text-[#a21d1d] border border-[#ffd6d6]" : "bg-[#e9f9ef] text-[#176a3a] border border-[#c6efcf]"}`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full bg-[#130435] hover:bg-[#0d0325] text-white font-bold py-3.5 px-5 border-0 rounded-xl cursor-pointer transition-all active:translate-y-px disabled:opacity-65 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}