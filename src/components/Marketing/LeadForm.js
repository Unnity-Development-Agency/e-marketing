"use client";
import { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoCallOutline, IoLockClosed } from "react-icons/io5";

/* ── Field ko component ke BAHAR define karo ── */
const Field = ({ label, children, full }) => (
  <div className={full ? "sm:col-span-2" : ""}>
    <label className="block text-[10.5px] font-bold tracking-[0.08em] uppercase text-[#777] mb-1.5">
      {label}
    </label>
    {children}
  </div>
);

const LeadForm = () => {
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
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((s) => ({ ...s, phone: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus({
        type: "success",
        message: "Thanks! We'll be in touch soon.",
      });
      setFormData({
        companyName: "",
        budget: "",
        name: "",
        phone: "",
        email: "",
        service: "",
        designation: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full h-11 px-4 rounded-lg border border-[#e8e8e8] bg-[#fafafa] text-[#111] text-[13.5px] outline-none transition-all duration-200 placeholder:text-[#c0c0c0] focus:border-[#23234d] focus:bg-white focus:ring-2 focus:ring-[#23234d]/10";
  const selectCls =
    "w-full h-11 px-4 pr-10 rounded-lg border border-[#e8e8e8] bg-[#fafafa] text-[13.5px] text-[#aaa] outline-none transition-all duration-200 cursor-pointer appearance-none focus:border-[#23234d] focus:bg-white focus:ring-2 focus:ring-[#23234d]/10";

  const perks = [
    {
      icon: <IoCallOutline />,
      title: "+91 931 500 3754",
      sub: "Call us directly",
    },
    {
      icon: <FaClock />,
      title: "Reply in 24 hrs",
      sub: "Mon–Sat, 9am–7pm IST",
    },
    {
      icon: <IoLockClosed />,
      title: "100% Confidential",
      sub: "Your data stays private",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 bg-[#191A3A] text-white overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute -left-48 top-1/4 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(35,35,77,0.45) 0%, transparent 68%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute -right-48 bottom-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(238,217,196,0.22) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.22em] uppercase text-white/40 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2
            className="text-[clamp(1.9rem,4vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em] mb-3"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #aaa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to Scale?
          </h2>
          <p className="text-[14px] text-white/40 max-w-sm mx-auto leading-[1.75]">
            Book a free strategy call. We'll analyze your setup and propose a
            custom growth plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {perks.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-base shrink-0">
                  {p.icon}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/85 leading-tight">
                    {p.title}
                  </div>
                  <div className="text-[11.5px] text-white/35 mt-0.5">
                    {p.sub}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-1 px-5 py-5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#f5a623"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-white/50 leading-[1.8] italic">
                  "Unnity scaled our revenue from ₹15k to ₹1.72 Cr in 12 months.
                  Truly remarkable."
                </p>
              </div>
              <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-white/[0.06]">
                <div className="w-7 h-7 rounded-full bg-[#23234d] flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  R
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-white/60 leading-tight">
                    Rahul M.
                  </div>
                  <div className="text-[11px] text-white/30">
                    Founder, Cupid Apparel
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <form
            onSubmit={submitHandler}
            className="bg-white rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)] flex flex-col font-sans"
          >
            <div className="px-6 pt-6 pb-4 border-b border-[#f0f0f0]">
              <h3 className="text-[1.2rem] font-bold text-[#111] tracking-tight">
                Send an Enquiry
              </h3>
              <p className="text-[11.5px] text-[#bbb] mt-0.5">
                We typically respond within a few hours.
              </p>
            </div>

            <div className="px-6 py-5 flex flex-col flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3.5">
                <Field label="Company Name">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className={inputCls}
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData((s) => ({
                        ...s,
                        companyName: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>

                <Field label="Monthly Budget">
                  <div className="relative">
                    <select
                      className={selectCls}
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, budget: e.target.value }))
                      }
                    >
                      <option value="">Select range</option>
                      <option value="Less Than Rs 2L Budget">
                        Less Than Rs 2L
                      </option>
                      <option value="Rs 2L to Rs 5L">Rs 2L – Rs 5L</option>
                      <option value="Rs 5L to Rs 25L">Rs 5L – Rs 25L</option>
                      <option value="More Than 50L">More Than Rs 50L</option>
                      <option value="I am Looking For Organic Services">
                        Organic Services
                      </option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#bbb"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </Field>

                <Field label="Your Name">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={inputCls}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, name: e.target.value }))
                    }
                    required
                  />
                </Field>

                <Field label="Phone Number">
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className={inputCls}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </Field>

                <Field label="Email Address" full>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className={inputCls}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, email: e.target.value }))
                    }
                    required
                  />
                </Field>

                <Field label="Service Required">
                  <div className="relative">
                    <select
                      className={selectCls}
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, service: e.target.value }))
                      }
                    >
                      <option value="">Choose service</option>
                      <option value="SEO">SEO</option>
                      <option value="Paid Marketing (Google, Facebook & Amazon ads)">
                        Paid Marketing
                      </option>
                      <option value="UI/UX">UI/UX Design</option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Website Maintenance">
                        Website Maintenance
                      </option>
                      <option value="Shopify Migration">
                        Shopify Migration
                      </option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#bbb"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </Field>

                <Field label="Designation">
                  <input
                    type="text"
                    placeholder="Marketing Manager"
                    className={inputCls}
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData((s) => ({
                        ...s,
                        designation: e.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              {status.message && (
                <div
                  className={`mt-3 px-4 py-2.5 rounded-xl text-[12px] font-medium flex items-center gap-2 ${
                    status.type === "error"
                      ? "bg-red-50 text-red-600 border border-red-100"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  }`}
                >
                  <span>{status.type === "error" ? "⚠️" : "✅"}</span>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group w-full mt-4 h-11 rounded-lg bg-[#23234d] hover:bg-[#1e1e42] text-white text-[13.5px] font-semibold
                  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                  hover:shadow-[0_8px_24px_rgba(35,35,77,0.35)]"
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeOpacity="0.25"
                      />
                      <path
                        d="M12 2a10 10 0 0 1 10 10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-[10.5px] text-[#c0c0c0] mt-3 flex items-center justify-center gap-1.5">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Your data is safe and never shared
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
