import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterBox } from "@/components/NewsletterBox";

export const metadata: Metadata = {
  title: "Our Mission - Best Product Verdict",
  description:
    "Making Online Shopping Better For All. Discover how Best Product Verdict evaluates thousands of products, finds exclusive deals, and saves you time and money.",
};

export default function MissionPage() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-[#00d6b6] via-[#00bfa5] to-[#0087ee] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-sm">
            Making Online Shopping Better For All
          </h1>
          <div>
            <a
              href="#scroll"
              className="inline-block bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Learn How
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

      {/* Section 1: Exclusive Deals */}
      <section id="scroll" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-teal-50 to-blue-50 p-8 rounded-3xl border border-teal-100/60 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-teal-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="160" fill="#00c092" fillOpacity="0.12" />
                <path d="M120 180C120 135.817 155.817 100 200 100C244.183 100 280 135.817 280 180V280H120V180Z" fill="#0087ee" fillOpacity="0.15" />
                <path d="M160 220L190 250L250 170" stroke="#00c092" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="280" cy="140" r="24" fill="#f59e0b" />
                <path d="M275 140H285M280 135V145" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <span className="text-[#00c092] border-b-4 border-[#00c092] pb-1">
                Exclusive Deals
              </span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed pt-2">
              We work hard to promote products that offer great value at unbeatable prices. Our in-house team is constantly watching for the latest deals and discounts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Thousands Of Products */}
      <section id="learn-more" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Thousands Of Products
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              New products are ranked and reviewed every day using dozens of data points to evaluate each unique item.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="70" y="90" width="110" height="90" rx="16" fill="#0087ee" fillOpacity="0.15" />
                <rect x="220" y="90" width="110" height="90" rx="16" fill="#00c092" fillOpacity="0.15" />
                <rect x="70" y="220" width="110" height="90" rx="16" fill="#f59e0b" fillOpacity="0.15" />
                <rect x="220" y="220" width="110" height="90" rx="16" fill="#8b5cf6" fillOpacity="0.15" />
                <circle cx="125" cy="135" r="20" fill="#0087ee" />
                <circle cx="275" cy="135" r="20" fill="#00c092" />
                <circle cx="125" cy="265" r="20" fill="#f59e0b" />
                <circle cx="275" cy="265" r="20" fill="#8b5cf6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Saves You Time */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-blue-50 to-teal-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="130" stroke="#0087ee" strokeWidth="16" />
                <path d="M200 120V200L250 230" stroke="#00c092" strokeWidth="16" strokeLinecap="round" />
                <circle cx="200" cy="200" r="16" fill="#0087ee" />
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Saves You Time
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Online shopping is difficult. We break down the essentials so that you can know which products meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Connecting You With The Products You Love */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Connecting You With The Products You Love
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Accessible deals are often hidden from consumers to maximize profits. Shop more for less with Consumer Picks.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <svg className="w-64 h-64 text-teal-600" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 280C100 200 200 120 300 120C300 200 200 280 100 280Z" fill="#00c092" fillOpacity="0.2" />
                <circle cx="200" cy="200" r="50" fill="#0087ee" />
                <path d="M185 200L195 210L215 190" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
}
