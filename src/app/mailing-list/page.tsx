"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function MailingListPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
    }, 600);
  };

  return (
    <div className="w-full bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Sign Up For Our Newsletter
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Handpicked products and exclusive deals delivered to your inbox every week
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center justify-center gap-3 animate-fadeIn max-w-md mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#00c092] shrink-0" />
            <span className="font-bold text-base">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
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
                className="w-full sm:flex-1 px-4 py-3 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3 bg-[#0087ee] hover:bg-[#0077dd] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0 disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-xs font-semibold">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
