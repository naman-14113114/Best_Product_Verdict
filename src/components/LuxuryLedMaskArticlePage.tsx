"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  ExternalLink,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  Gift,
  ShieldCheck,
  Check,
  Star,
  Timer,
  BookOpen,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  LED_MASK_PRODUCTS,
  type LedMaskProduct,
} from "@/data/ledMaskData";
import { type LedMaskArticle } from "@/data/ledMaskArticlesData";
import "@/features/led-mask-reference/reference.css";
import "@/features/led-mask-reference/theme.css";

/* Dynamic UK Date Formatter matching Best Mask Reference Page */
function useCurrentDateFormatted() {
  const [currentDateFormatted, setCurrentDateFormatted] = useState("19 November 2026");

  useEffect(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString("en-GB", { month: "long" });
      const year = now.getFullYear();
      setCurrentDateFormatted(`${day} ${month} ${year}`);
    } catch {
      setCurrentDateFormatted("19 November 2026");
    }
  }, []);

  return currentDateFormatted;
}

/* Dynamic UK Midnight Countdown Timer Hook */
function useUkMidnightTimer() {
  const [timeLeft, setTimeLeft] = useState<{ hours: string; minutes: string; seconds: string }>({
    hours: "07",
    minutes: "42",
    seconds: "18",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const now = new Date();
        const ukTimeString = now.toLocaleString("en-US", { timeZone: "Europe/London" });
        const ukDate = new Date(ukTimeString);

        const nextMidnight = new Date(ukDate);
        nextMidnight.setHours(24, 0, 0, 0);

        const diffMs = nextMidnight.getTime() - ukDate.getTime();
        const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        setTimeLeft({
          hours: h.toString().padStart(2, "0"),
          minutes: m.toString().padStart(2, "0"),
          seconds: s.toString().padStart(2, "0"),
        });
      } catch {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
        setTimeLeft({
          hours: Math.floor(diff / 3600).toString().padStart(2, "0"),
          minutes: Math.floor((diff % 3600) / 60).toString().padStart(2, "0"),
          seconds: (diff % 60).toString().padStart(2, "0"),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

/* Trustpilot 5 Green Stars Component */
function TrustpilotStars({ rating = "4.9", reviews = "4,000+" }: { rating?: string; reviews?: string }) {
  return (
    <div className="inline-flex items-center gap-2 flex-wrap font-sans">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 bg-[#00b67a] flex items-center justify-center rounded-xs">
            <Star size={12} className="text-white fill-white" />
          </div>
        ))}
      </div>
      <span className="text-xs sm:text-sm font-bold text-slate-800">
        {rating} <span className="text-slate-500 font-normal">({reviews} UK Reviews)</span>
      </span>
    </div>
  );
}

export function LuxuryLedMaskArticlePage({ article }: { article: LedMaskArticle }) {
  const [openFaqIndices, setOpenFaqIndices] = useState<Record<number, boolean>>({ 0: true });
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const timer = useUkMidnightTimer();
  const currentDateFormatted = useCurrentDateFormatted();

  const winnerProduct = LED_MASK_PRODUCTS.find((p) => p.isWinner) || LED_MASK_PRODUCTS[0];

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Split paragraphs to insert winner card mid-way
  const totalParas = article.content.length;
  const midPoint = totalParas > 3 ? Math.min(3, Math.floor(totalParas / 2)) : 2;
  const firstHalfParas = article.content.slice(0, midPoint);
  const secondHalfParas = article.content.slice(midPoint);

  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 pb-24 md:pb-0 font-sans">
        {/* 1. TOP HEADER BANNER (Exact Reference Match: Blue Theme Banner with UK Flag & Dynamic Date) */}
        <div className="bg-emerald-500 text-white py-3 sm:py-3.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-emerald-600 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-2.5 flex-wrap">
            <svg aria-label="United Kingdom flag" className="h-4 w-6 overflow-hidden rounded-[2px] border border-white/40 shadow-xs shrink-0 inline-block" role="img" viewBox="0 0 38 24">
              <rect fill="#012169" height="24" width="38" />
              <path d="M0 0 38 24M38 0 0 24" stroke="#fff" strokeWidth="5" />
              <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" strokeWidth="2" />
              <path d="M19 0v24M0 12h38" stroke="#fff" strokeWidth="8" />
              <path d="M19 0v24M0 12h38" stroke="#c8102e" strokeWidth="4" />
            </svg>
            <span className="font-bold">UK 2026 Clinical Phototherapy Audit: Peer-Reviewed LED Education</span>
            <span className="hidden md:inline text-white/60">•</span>
            <span className="hidden md:inline text-white/90 font-medium">Last Updated: {currentDateFormatted}</span>
          </div>
        </div>

        {/* 2. BREADCRUMBS & ARTICLE HEADER */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-8">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1.5 text-xs font-sans text-slate-500">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={13} className="text-slate-400" />
              </li>
              <li>
                <Link href="/best-led-face-mask-uk-2026" className="hover:text-blue-700 transition-colors">
                  LED Phototherapy Guide
                </Link>
              </li>
              <li>
                <ChevronRight size={13} className="text-slate-400" />
              </li>
              <li className="font-semibold text-slate-900 truncate max-w-[240px] sm:max-w-sm">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Category Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-sans font-bold text-blue-900 mb-5 shadow-xs">
            <Sparkles size={14} className="text-blue-600" />
            <span>Clinical Phototherapy Paper</span>
          </div>

          {/* Article Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.2]">
            {article.title}
          </h1>

          {/* Excerpt Lead */}
          {article.excerpt && (
            <p className="font-sans text-lg sm:text-xl text-slate-700 leading-[1.7] mb-8 font-normal border-l-4 border-blue-500 pl-4 sm:pl-5 bg-white py-3.5 rounded-r-xl shadow-xs border border-slate-100">
              {article.excerpt}
            </p>
          )}

          {/* Author & Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm font-sans text-slate-600 bg-white px-4 rounded-xl shadow-xs mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border-2 border-blue-500 shrink-0 shadow-sm">
                <img
                  src="/img/dr-shannon.png"
                  alt={article.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm sm:text-base leading-tight font-serif">
                  {article.author}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {article.authorRole}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-600" />
                {article.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-600" />
                {article.readTime}
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-blue-900 bg-blue-100/80 px-2.5 py-1 rounded-md border border-blue-200 font-bold">
                <ShieldCheck size={14} className="text-blue-700" />
                Peer Reviewed
              </span>
            </div>
          </div>
        </header>

        {/* 3. HERO ARTICLE IMAGE */}
        {article.image && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-[11px] font-sans font-bold px-3 py-1 rounded-full shadow-xs">
                Clinical Assessment Archive
              </div>
            </div>
          </section>
        )}

        {/* 4. MAIN ARTICLE CONTENT */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          {/* KEY TAKEAWAYS BOX */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 rounded-2xl p-6 sm:p-8 border-2 border-blue-200 shadow-sm mb-12">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                  <Sparkles size={18} />
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900">
                  Key Takeaways &amp; Executive Summary
                </h2>
              </div>
              <ul className="space-y-3 font-sans text-[16px] sm:text-[17px] text-slate-800 leading-[1.7]">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="text-blue-600 shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FIRST HALF OF PARAGRAPHS */}
          <div className="font-sans text-[17px] sm:text-[18px] text-slate-800 leading-[1.85] space-y-6 mb-12">
            {firstHalfParas.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className={
                  pIdx === 0
                    ? "first-letter:font-serif first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-slate-900 leading-[1.85]"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* MID-ARTICLE EDITOR'S CHOICE WINNER SPOTLIGHT CARD (Matches Reference Mask Page) */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 border-2 border-emerald-500 shadow-2xl my-14 relative overflow-hidden">
            {/* Winner Ribbon Top Left / Right */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-white font-sans text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
              <Award size={14} className="text-amber-300" />
              #1 OVERALL CLINICAL PICK (2026)
            </div>

            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest text-blue-700 font-extrabold block mb-1">
                Top Rated by Consultant Dermatologist Panel
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                {winnerProduct.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 mb-6">
                Full-coverage facial and cervical neck phototherapy with 7 clinical wavelengths, medical-grade silicone, and
                exclusive Black Friday 3 free gifts suite (£128 value).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Product Image & Coupon */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm mb-3">
                  <img
                    src={winnerProduct.image}
                    alt={winnerProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Gift size={12} />
                    £128 Free Gifts
                  </div>
                </div>

                {/* Coupon Bar with Countdown */}
                <div className="w-full max-w-[280px] px-3 py-2 rounded-xl bg-slate-100 border-2 border-slate-300 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-800">CODE: {winnerProduct.voucher.code}</span>
                  <span className="bg-slate-900 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                    <Timer size={11} className="text-amber-400" />
                    {timer.hours}h {timer.minutes}m {timer.seconds}s
                  </span>
                </div>
              </div>

              {/* Right Highlights & CTA */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {winnerProduct.price}
                  </span>
                  {winnerProduct.originalPrice && (
                    <span className="font-sans text-lg text-slate-400 line-through">
                      {winnerProduct.originalPrice}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-none bg-slate-900 text-[#f9ad26] border border-[#f9ad26]/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                    BLACK FRIDAY EARLY ACCESS
                  </span>
                </div>

                {/* Trustpilot Stars */}
                <TrustpilotStars rating="4.9" reviews="4,000+" />

                {/* 7 Wavelength Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded-md">630nm Red</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-md">415nm Blue</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md">525nm Green</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-md">590nm Amber</span>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded-md">Purple</span>
                  <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 text-[10px] font-bold rounded-md">Cyan</span>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-800 text-[10px] font-bold rounded-md">830nm NIR</span>
                </div>

                {/* Bullet Features */}
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span><strong>Full Face &amp; Cervical Neck Coverage:</strong> Integrated dual-piece phototherapy.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span><strong>192 High-Density Diode Array:</strong> 30-32 mW/cm² zero dead-zone photon flux.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span><strong>Black Friday 3 Free Gifts Suite (£128 Value):</strong> Case (£39) + Torch (£70) + Guide (£19).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-blue-600 shrink-0" />
                    <span><strong>90-Day Money-Back Guarantee:</strong> 100% risk-free home testing.</span>
                  </li>
                </ul>

                {/* Free Gifts Highlight Box */}
                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-xl p-3.5 border border-blue-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1.5">
                    <Gift size={14} className="text-blue-600" />
                    <span>3 FREE GIFTS INCLUDED WITH TODAY&apos;S ORDER:</span>
                  </div>
                  <div className="text-slate-700 space-y-1 text-[11px]">
                    <div>🎁 <strong>Luxury Travel Case</strong> (Value: £39) — <span className="text-blue-700 font-bold">FREE</span></div>
                    <div>🎁 <strong>Precision Red Light Torch</strong> (Value: £70) — <span className="text-blue-700 font-bold">FREE</span></div>
                    <div>🎁 <strong>Clinical Phototherapy Skincare Guide</strong> (Value: £19) — <span className="text-blue-700 font-bold">FREE</span></div>
                  </div>
                </div>

                {/* CTA Button (Warm Golden Amber via data-outbound-button) */}
                <div className="pt-2">
                  <a
                    href={BUUDY_PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-outbound-button="true"
                    data-track-cta="true"
                    className="group relative overflow-hidden w-full py-4 px-6 rounded-xl font-sans font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-[0.985] transition-all duration-300"
                  >
                    <span data-outbound-content="true" className="relative z-10 flex items-center justify-center gap-2 font-bold">
                      <span>Claim 60% Off &amp; £128 Free Gifts</span>
                      <ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                  <div className="text-center text-[11px] text-slate-500 font-sans mt-2">
                    🔒 Official Buudy Store • Free UK Tracked Delivery • 90-Day Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND HALF OF PARAGRAPHS */}
          <div className="font-sans text-[17px] sm:text-[18px] text-slate-800 leading-[1.85] space-y-6 mb-16">
            {secondHalfParas.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* CLINICAL FAQ ACCORDION */}
          {article.faq && article.faq.length > 0 && (
            <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm mb-16">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="font-sans text-xs uppercase tracking-widest text-blue-700 font-bold">
                  Clinical Inquiries
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Frequently Asked Questions
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 mt-2">
                  Evidence-based answers reviewed by our Consultant Dermatologist Panel.
                </p>
              </div>

              <div className="space-y-3.5 max-w-3xl mx-auto">
                {article.faq.map((faqItem, fIdx) => {
                  const isOpen = !!openFaqIndices[fIdx];
                  return (
                    <div
                      key={fIdx}
                      className="bg-slate-50/70 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors select-none"
                      >
                        <span className="font-serif font-bold text-base sm:text-lg text-slate-900 flex items-start gap-2.5">
                          <HelpCircle size={18} className="text-blue-600 mt-1 shrink-0" />
                          <span>{faqItem.question}</span>
                        </span>
                        <span className="shrink-0 mt-1 text-slate-400">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-700 font-sans text-sm sm:text-base leading-relaxed pl-11 border-t border-slate-200">
                          {faqItem.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ARTICLE BOTTOM NAVIGATION / ACTION CALL */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-slate-800">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-widest text-[#f9ad26] font-bold block mb-2">
                Ready to Upgrade Your Skincare Routine?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                Explore The 2026 UK LED Mask Benchmark
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Compare laboratory bench measurements, clinical irradiance tests, and 4,000+ verified British consumer
                reviews across 18 leading models.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/best-led-face-mask-uk-2026"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans font-extrabold text-sm uppercase tracking-wider transition-colors"
                >
                  View Full Top 10 Comparison
                </Link>
                <a
                  href={BUUDY_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-outbound-button="true"
                  data-track-cta="true"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-sans font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span data-outbound-content="true" className="flex items-center gap-1.5 font-bold">
                    <span>Visit Buudy Official Site</span>
                    <ExternalLink size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* EDITORIAL FOOTER & DISCLOSURES */}
          <footer className="mt-20 pt-12 border-t border-slate-200 text-center text-xs text-slate-500 font-sans">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <Link href="/privacy-policy" className="hover:text-blue-700 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/terms-and-conditions" className="hover:text-blue-700 transition-colors">
                Terms of Service
              </Link>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setIsDisclosureOpen(true)}
                className="hover:text-blue-700 transition-colors underline cursor-pointer"
              >
                Advertiser Disclosure
              </button>
            </div>

            <p className="max-w-2xl mx-auto font-sans text-slate-500 leading-relaxed text-xs mb-6">
              Disclaimer: The educational content on Best Product Verdict is provided for informational purposes only and does
              not constitute medical advice. Phototherapy devices should be used in strict adherence to manufacturer
              guidelines. If you are pregnant, take photosensitising medications, or suffer from photosensitive conditions,
              consult your GP or dermatologist before use.
            </p>

            <p className="text-slate-400 text-[11px] font-sans">
              &copy; {new Date().getFullYear()} Best Product Verdict UK. All rights reserved.
            </p>
          </footer>
        </main>

        {/* DISCLOSURE MODAL */}
        {isDisclosureOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setIsDisclosureOpen(false)}>
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                Advertising &amp; Editorial Disclosure
              </h3>
              <p className="font-sans text-slate-700 leading-relaxed text-sm mb-6">
                Best Product Verdict is an independent consumer testing and evaluation platform. We are reader-supported.
                When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
                Our evaluations, ratings, and doctor reviews are based on rigorous clinical benchmarks, optical testing, and
                genuine user feedback.
              </p>
              <button
                onClick={() => setIsDisclosureOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm py-3 px-6 rounded-xl transition-colors cursor-pointer"
              >
                Understood &amp; Close
              </button>
            </div>
          </div>
        )}

        {/* STICKY WINNER BOX (DESKTOP) & MOBILE FLOATING CTA */}
        <StickyWinnerBox winnerProduct={winnerProduct} />

        {/* Dynamic Buudy Exit Popup Script */}
        <Script
          src="/buudy-exit-popup-20261104.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}

function StickyWinnerBox({ winnerProduct }: { winnerProduct: LedMaskProduct }) {
  return (
    <>
      {/* 1. DESKTOP STICKY BOX (Compact, Right-Gutter, Never Overlaps Content) */}
      <aside
        aria-label="Winner recommendation sticky card"
        className="hidden md:flex flex-col items-center fixed bottom-6 right-3 xl:right-6 z-40 w-[140px] bg-white border-2 border-emerald-500 rounded-2xl p-2.5 shadow-2xl transition-all duration-300 hover:shadow-emerald-500/20"
      >
        {/* Top Badge: #1 WINNER */}
        <div className="mb-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[9px] font-sans font-extrabold uppercase tracking-wider shadow-xs">
            <Award size={10} className="text-amber-500" />
            #1 WINNER
          </span>
        </div>

        {/* Sticky Winner Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
          <img
            src="/img/buudy-7-colour-led-mask-uk-winner.webp"
            alt="Buudy 7 Colour LED Face and Neck Mask - UK Rated #1 Light Therapy Mask Winner 2026"
            title="Buudy 7 Colour LED Face and Neck Mask UK Winner"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title: #1 Product Name */}
        <div className="mt-1.5 mb-2 text-center px-0.5">
          <h4 className="font-serif font-extrabold text-slate-900 text-[11px] leading-tight">
            {winnerProduct.name}
          </h4>
          <span className="text-[10px] text-blue-700 font-bold block mt-0.5">
            £179 + £128 Gifts
          </span>
        </div>

        {/* Desktop CTA Button (Warm Golden Amber via data-outbound-button) */}
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          data-outbound-button="true"
          data-track-cta="true"
          className="w-full py-2 px-2 rounded-xl text-center font-sans font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all duration-200 shadow-md group"
        >
          <span data-outbound-content="true" className="flex items-center gap-1">
            <span>Claim Offer</span>
            <ArrowRight size={11} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </aside>

      {/* 2. MOBILE FLOATING STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          data-outbound-button="true"
          data-track-cta="true"
          className="w-full py-3.5 px-4 rounded-xl text-center font-sans font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
        >
          <span data-outbound-content="true" className="flex items-center gap-2 font-bold">
            <span>Claim 60% Off &amp; £128 Free Gifts</span>
            <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </>
  );
}
