"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
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

    if (!formData.name || !formData.email || !formData.product || !formData.country || !formData.message) {
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
    <div className="w-full bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Support
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium">
            Have questions? We’re ready to help!
          </p>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            *Please note that Consumer Picks is an independent comparison site — we do not sell any products. Contact the seller if you have questions about your purchase.
          </p>
        </div>

        {/* Contact Form Card */}
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
                We will get back to you soon, usually within 12 hours.
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
                  <label htmlFor="product" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Product<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Product Name"
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
