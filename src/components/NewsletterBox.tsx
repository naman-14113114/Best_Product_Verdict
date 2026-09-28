"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

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

    // Simulate subscription processing
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7f9fb] to-[#e8f1f8]">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0c1926] via-[#102438] to-[#14324f] rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700/50 text-white relative overflow-hidden">
        {/* Background glow & accents */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#00d6b6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-[#0087ee]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#00d6b6] text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Shopping Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-rubik leading-tight">
            Never Overpay for Tech & Home Products Again
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Join 45,000+ informed shoppers. Receive our weekly breakdown of genuine top-rated verdicts, price drop alerts, and test lab insights directly to your inbox.
          </p>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-[#00d6b6]/15 border border-[#00d6b6]/40 text-left flex items-start gap-4 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-[#00d6b6] flex items-center justify-center text-slate-950 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">You are officially subscribed!</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Thank you for joining Best Product Verdict. Look out for our upcoming curated product breakdowns and insider deals.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-2 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email address..."
                    required
                    disabled={status === "loading"}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder:text-slate-400 text-sm font-medium rounded-xl border border-slate-600 focus:border-[#00d6b6] focus:ring-2 focus:ring-[#00d6b6]/30 focus:outline-none transition-all disabled:opacity-50"
                  />
                  <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto shrink-0 px-6 py-3.5 bg-gradient-to-r from-[#00d6b6] to-[#00b89d] hover:from-[#00ecd0] hover:to-[#00c9aa] text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(0,214,182,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Get Free Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs font-semibold text-left mt-2 pl-2">
                  {errorMessage}
                </p>
              )}

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                <ShieldCheck className="w-4 h-4 text-[#00d6b6]" />
                <span>Zero spam. 100% privacy guaranteed. Unsubscribe at any time.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterBox;
