
"use client";

import React, { useRef, useState } from "react";

// ==========================================
// GOOGLE APPS SCRIPT URL
// NEW GOOGLE SCRIPT LINK YAHAN PASTE KARNA HAI
// ==========================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyHe9gOMEsjCZ1w-4LYiyPI3LPZeO6WyC36QfCQIKuONvE1wvJS0QrB-MbUaAFSQcsP/exec";

// ==========================================
// INITIAL FORM DATA
// ==========================================

const initialFormData = {
  companyName: "",
  budget: "",
  name: "",
  phone: "",
  email: "",
  service: "",
  designation: "",
};

export default function LeadForm() {
  const submittingRef = useRef(false);

  const [sending, setSending] = useState(false);

  // const [showThankYou, setShowThankYou] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  // ==========================================
  // HANDLE INPUT CHANGES
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const submitHandler = async (e) => {
    e.preventDefault();

    if (submittingRef.current) return;

    if (!GOOGLE_SCRIPT_URL.includes("/exec")) {
      setStatus({
        type: "error",
        message: "Google Apps Script URL is not configured.",
      });
      return;
    }

    if (formData.phone && formData.phone.length !== 10) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    submittingRef.current = true;

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Send lead details to Google Apps Script
      // no-cors prevents reading the server response

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // Request was sent, but Sheet save
      // cannot be confirmed in no-cors mode.

// Mark form submission for thank-you page
sessionStorage.setItem("unnityLeadRedirect", "true");
router.push("/thank-you");

// Redirect to Thank You page

window.location.href = "/thank-you";

    } catch (error) {
      console.error("Form submission error:", error);

      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });

    } finally {
      submittingRef.current = false;
      setSending(false);
    }
  };

  // ==========================================
  // CLOSE THANK YOU POPUP
  // ==========================================

 

  return (
    <>
      {/* =====================================
          CONTACT FORM POPUP
      ====================================== */}

      <section
        id="contact-form"
        className="hidden target:flex fixed inset-0 z-[9999] items-start justify-center overflow-y-auto px-4 pt-16 pb-6 max-sm:pt-20"
      >
        {/* Backdrop */}
        <a
          href="#"
          aria-label="Close"
          className="fixed inset-0 bg-black/60 cursor-default"
        />

        <div className="relative bg-[#fafbff] rounded-2xl pt-14 pb-8 px-4 w-full max-w-3xl">

          {/* Close Button */}
          <a
            href="#"
            aria-label="Close"
            className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-white text-[#070c1a] text-xl leading-none shadow-md"
          >
            ✕
          </a>

          <div className="max-w-2xl mx-auto grid grid-cols-1 gap-10 items-center max-lg:grid-cols-1">
            <div>

              <span className="text-[#070c1a] text-3xl font-bold">
                Your Growth Partner in the Digital Era
              </span>

              <p className="my-4 mb-6 text-[#5f6577] text-base">
                Let's create impact — fill in the form and we'll take it from
                there.
              </p>

              <form onSubmit={submitHandler}>

                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">

                  {/* Basic Fields */}
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
                  ].map(
                    ({
                      id,
                      label,
                      type,
                      placeholder,
                      required,
                    }) => (
                      <div
                        key={id}
                        className="flex flex-col gap-2"
                      >
                        <label
                          htmlFor={id}
                          className="text-base text-[#5f6577]"
                        >
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
                              : handleChange
                          }
                          maxLength={
                            id === "phone" ? 10 : undefined
                          }
                          inputMode={
                            id === "phone"
                              ? "numeric"
                              : undefined
                          }
                          className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                        />
                      </div>
                    )
                  )}

                  {/* Email */}
                  <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">

                    <label
                      htmlFor="email"
                      className="text-base text-[#5f6577]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                    />

                  </div>

                  {/* Dropdowns */}
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
                    <div
                      key={id}
                      className="flex flex-col gap-2"
                    >

                      <label
                        htmlFor={id}
                        className="text-base text-[#5f6577]"
                      >
                        {label}
                      </label>

                      <select
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] appearance-none"
                      >
                        {options.map((option, index) => (
                          <option
                            key={option}
                            value={index === 0 ? "" : option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>

                    </div>
                  ))}
                </div>

                {/* Error Message */}
                {status.message && (
                  <div
                    role="alert"
                    className="mt-3 p-3 rounded-lg text-base bg-[#fff1f1] text-[#a21d1d] border border-[#ffd6d6]"
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
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
        </div>
      </section>

      {/* =====================================
          THANK YOU POPUP
      ====================================== */}

    
    </>
  );
}
