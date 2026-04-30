"use client";
import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import BrandsHero from "@/components/reactBits/HeroSection";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload resume");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const base64File = reader.result.split(",")[1];

      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        position: formData.position,
        message: formData.message,
        file: base64File,
        fileName: formData.resume.name,
        fileType: formData.resume.type,
      };

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwN5ODtPvIJCCFnaLM8bnTDGAsDYlPMI2_YnGLHOZo0F9xw3NOxf91OPKs5oT7fyy2R/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
      );

      const result = await res.json();

      console.log(result);

      if (result.status === "success") {
        alert("Application Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          resume: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    };

    reader.readAsDataURL(formData.resume);
    // console.log(formData);
  };

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="w-full">
      <Header />

      {/* HERO SECTION */}
      <div className="">
        <div className="relative sm:mb-10 md:mb-16 w-full h-70 md:h-60  flex items-center">
          <BrandsHero />

          <div className="absolute flex flex-col gap-1 sm:gap-4 justify-center pt-10 md:pt-24 md:left-24 max-w-7xl mx-auto w-full px-6 text-white">
            <p className=" text-sm ">
              <Link href="/">Home</Link> / Career
            </p>
            <h1 className="text-white text-2xl md:text-5xl font-semibold">
              Career at Unnity
            </h1>
            <p className="text-sm sm:text-balance">
              {" "}
              Join Our Team and Shape the Future of Digital Marketing
            </p>
          </div>
        </div>
        {/* CONTENT SECTION */}
        <div className="bg-gray-100 py-16 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
              Become a Part of Unnity Family
            </h2>

            <p className="text-gray-600 leading-7 text-lg">
              At Unnity, we are constantly on the hunt for talents who are
              motivated and enthusiastic about leaving their footprints in the
              digital space. By becoming a part of our global team, you get to
              enhance your career trajectory and learn from global experts to
              grow professionally.
            </p>

            <p className="text-gray-600 mt-4 text-lg">
              Looking for an opportunity with us? Then mail your updated CV at{" "}
              <a
                href="mailto:Punjal@unnity.in"
                className="text-indigo-600 font-medium"
              >
                punjal@unnity.in
              </a>
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-black mb-8 text-center">
              Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  placeholder="Enter your full name"
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#23234D] outline-none"
                />
              </div>

              {/* Mobile + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleOnChange}
                    placeholder="Enter mobile number"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#23234D] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="Enter email"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#23234D] outline-none"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Inquire Position
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleOnChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#23234D] outline-none"
                >
                  <option>Select position</option>
                  <option>Web Developer</option>
                  <option>App Developer</option>
                  <option>Shopify Developer</option>
                  <option>Social Media Marketing</option>
                  <option>Performance Marketing</option>
                  <option>Video Editor</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleOnChange}
                  placeholder="Write your message..."
                  className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#23234D] outline-none"
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  value={formData.resume}
                  name="resume"
                  onChange={handleOnChange}
                  className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-[#23234D] file:text-white hover:file:bg-[#23234D] cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#23234D] text-white py-3 rounded-md font-medium hover:bg-[#1c1c3e] transition cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
