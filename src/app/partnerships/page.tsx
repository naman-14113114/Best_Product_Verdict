"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronDown, ArrowDown } from "lucide-react";

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.company || !formData.country || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <div id="partnerships" className="relative w-full bg-slate-900 text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          <div className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="text-white">Others Imitate.</span>{" "}
              <span className="text-[#00d6b6]">We Innovate.</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
              We&apos;re revolutionizing online shopping for consumers, one step at a time.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/partnerships"
                className="px-6 py-3 bg-[#0087ee] hover:bg-[#0077dd] text-white font-bold text-sm rounded-lg shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Partnerships</span>
                <span>&raquo;</span>
              </Link>
              <a
                href="#partners"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-lg border border-slate-700 transition-all inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowDown className="w-4 h-4 text-[#00d6b6]" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-slate-800/80 p-8 rounded-3xl border border-slate-700 shadow-2xl flex items-center justify-center">
              <svg className="w-64 h-64 text-teal-400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="150" fill="#0087ee" fillOpacity="0.15" />
                <path d="M120 280V180L200 120L280 180V280H120Z" stroke="#00d6b6" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="200" cy="210" r="30" fill="#0087ee" />
                <path d="M160 280H240" stroke="#00d6b6" strokeWidth="12" strokeLinecap="round" />
                <circle cx="200" cy="80" r="16" fill="#00d6b6" />
                <circle cx="80" cy="180" r="12" fill="#38bdf8" />
                <circle cx="320" cy="180" r="12" fill="#38bdf8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sharp Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10 sm:h-14 text-white fill-current"
          >
            <path d="M1200 0L0 120H1200V0Z" />
          </svg>
        </div>
      </div>

      {/* Form Section */}
      <div id="partners" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 scroll-mt-20">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Seamless Partnerships
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            If you have a product (or products) that you want to share with the world, we&apos;d love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#00c092] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold">
                Thank you!
              </h3>
              <p className="text-sm text-teal-800 leading-relaxed max-w-md mx-auto">
                We will get back to you soon if we&apos;re interested, usually within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Company<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    required
                    className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Country<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your Country"
                    required
                    className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Message<span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs font-semibold">
                  {errorMessage}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-3.5 bg-[#0087ee] hover:bg-[#0077dd] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
