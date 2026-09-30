import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterBox } from "@/components/NewsletterBox";

export const metadata: Metadata = {
  title: "About - Best Product Verdict",
  description:
    "Learn how Best Product Verdict helps shoppers save time and money with comparison shopping, unbiased rankings, and curated product deals.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <div id="lz" className="relative w-full bg-gradient-to-r from-[#00d6b6] via-[#00bfa5] to-[#0087ee] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-sm">
            Save Time And Money With Comparison Shopping
          </h1>
          <div>
            <a
              href="#scroll"
              className="inline-block bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Read More
            </a>
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

      {/* Section 1: Since Our Launch In 2020... */}
      <section id="scroll" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-teal-50 to-blue-50 p-8 rounded-3xl border border-teal-100/60 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-teal-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="160" fill="#00c092" fillOpacity="0.1" />
                <rect x="110" y="110" width="180" height="180" rx="24" fill="#0087ee" fillOpacity="0.15" />
                <path d="M140 200L180 240L265 155" stroke="#00c092" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="200" cy="80" r="16" fill="#0087ee" />
                <circle cx="320" cy="200" r="12" fill="#00c092" />
                <circle cx="80" cy="220" r="14" fill="#f59e0b" />
                <circle cx="280" cy="300" r="10" fill="#8b5cf6" />
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <span className="text-[#00c092] border-b-4 border-[#00c092] pb-1">
                Since Our Launch In 2020...
              </span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed pt-2">
              We helped over 8 million shoppers with their online shopping. And that&apos;s just the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Connecting You With The Products You Love */}
      <section id="learn-more" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Connecting You With The Products You Love
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our specialists create innovative product lists and rankings. Compare choices and find the perfect fit.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="80" width="240" height="240" rx="32" fill="#0087ee" fillOpacity="0.08" />
                <path d="M120 160H280" stroke="#0087ee" strokeWidth="12" strokeLinecap="round" />
                <path d="M120 200H240" stroke="#0087ee" strokeWidth="12" strokeLinecap="round" />
                <path d="M120 240H200" stroke="#00c092" strokeWidth="12" strokeLinecap="round" />
                <circle cx="280" cy="240" r="28" fill="#00c092" />
                <path d="M270 240L278 248L292 234" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Transforming The Online Marketplace */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-amber-50 to-teal-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-teal-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="140" fill="#00c092" fillOpacity="0.12" />
                <path d="M140 260L200 140L260 260H140Z" fill="#0087ee" fillOpacity="0.2" stroke="#0087ee" strokeWidth="8" strokeLinejoin="round" />
                <circle cx="200" cy="220" r="20" fill="#00c092" />
                <path d="M160 140L200 80L240 140" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Transforming The Online Marketplace
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Accessible deals are often hidden from consumers to maximize profits. Shop more for less with Consumer Picks.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
}
