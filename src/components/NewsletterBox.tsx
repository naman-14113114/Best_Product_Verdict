"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const NewsletterBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 500);
  };

  return (
    <section id="subscribe-form" className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-b border-slate-200">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Sign Up For Our Newsletter
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Handpicked products and exclusive deals delivered to your inbox every week
        </p>

        {status === "success" ? (
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-sm flex items-center justify-center gap-2 animate-fadeIn max-w-md mx-auto mt-4">
            <CheckCircle2 className="w-5 h-5 text-[#00c092] shrink-0" />
            <span className="font-semibold">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="w-full sm:flex-1 px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#00c092] focus:ring-2 focus:ring-[#00c092]/30 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#00c092] hover:bg-[#00ad83] text-white font-bold text-sm rounded-lg shadow-2xs hover:shadow-xs transition-all cursor-pointer shrink-0 disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-xs font-semibold mt-2">
                {errorMessage}
              </p>
            )}

            <p className="text-[11px] text-slate-400 mt-2">
              *Emails submitted are subject to our{" "}
              <Link href="/privacy-policy" className="underline hover:text-slate-600">
                Privacy Notice
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterBox;
