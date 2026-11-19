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

/* Dynamic UK Date Formatter */
function useCurrentDateFormatted() {
  const [currentDateFormatted, setCurrentDateFormatted] = useState("November 2026");

  useEffect(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString("en-GB", { month: "long" });
      const year = now.getFullYear();
      setCurrentDateFormatted(`${day} ${month} ${year}`);
    } catch {
      setCurrentDateFormatted("November 2026");
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
    <div className="inline-flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 bg-[#00b67a] flex items-center justify-center rounded-xs">
            <Star size={12} className="text-white fill-white" />
          </div>
        ))}
      </div>
      <span className="text-xs sm:text-sm font-bold text-neutral-800">
        {rating} <span className="text-neutral-500 font-normal">({reviews} UK Reviews)</span>
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
    <div className="min-h-screen bg-white text-[#181818] antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. TOP EMERALD GREEN BANNER */}
      <div className="bg-emerald-500 text-white py-2 px-3 sm:px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-emerald-600">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <svg className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-block" viewBox="0 0 640 480" aria-hidden="true">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L439 240l201 178v62h-78L319 299 75 480H0v-62l201-178L0 62V0h75z" />
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-208-82L0 40V0l271 199h-55zM640 0v3L451 199h55L640 40V0zM0 480v-3l189-199h-55L0 440v40z" />
            <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
            <path fill="#C8102E" d="M272 0h96v480h-96zM0 192h640v96H0z" />
          </svg>
          <span>UK 2026 Clinical Phototherapy Audit: Peer-Reviewed LED Education</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline text-emerald-100">Updated: {currentDateFormatted}</span>
        </div>
      </div>

      {/* 2. BREADCRUMBS & ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs font-openSans text-neutral-500">
            <li>
              <Link href="/" className="hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={13} className="text-neutral-400" />
            </li>
            <li>
              <Link href="/best-led-face-mask-uk-2026" className="hover:text-emerald-700 transition-colors">
                LED Phototherapy Guide
              </Link>
            </li>
            <li>
              <ChevronRight size={13} className="text-neutral-400" />
            </li>
            <li className="font-semibold text-emerald-700 truncate max-w-[240px] sm:max-w-sm">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Category Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-openSans font-bold text-emerald-800 mb-5 shadow-xs">
          <Sparkles size={14} className="text-emerald-600" />
          <span>Clinical Phototherapy Paper</span>
        </div>

        {/* Article Headline */}
        <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181818] mb-6 leading-[1.2]">
          {article.title}
        </h1>

        {/* Excerpt Lead */}
        {article.excerpt && (
          <p className="font-lora text-lg sm:text-xl text-neutral-700 leading-[1.7] mb-8 font-normal border-l-4 border-emerald-500 pl-4 sm:pl-5 bg-neutral-50 py-3 rounded-r-xl">
            {article.excerpt}
          </p>
        )}

        {/* Author & Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-[#e7e7e7] text-xs sm:text-sm font-openSans text-neutral-600">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100 border-2 border-emerald-500 shrink-0">
              <img
                src="/img/dr-shannon.png"
                alt={article.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://img.thesitebase.net/10677/10677322/themes/1770302958c850cb975e.png";
                }}
              />
            </div>
            <div>
              <div className="font-bold text-[#181818] text-sm sm:text-base leading-tight">
                {article.author}
              </div>
              <div className="text-xs text-neutral-500 font-medium">
                {article.authorRole}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-emerald-600" />
              {article.date}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-emerald-600" />
              {article.readTime}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300 font-bold">
              <ShieldCheck size={14} className="text-emerald-700" />
              Peer Reviewed
            </span>
          </div>
        </div>
      </header>

      {/* 3. HERO ARTICLE IMAGE */}
      {article.image && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-[#e7e7e7] shadow-sm bg-neutral-100 aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#181818]/90 text-white text-[11px] font-openSans font-bold px-3 py-1 rounded-full shadow-xs">
              Clinical Assessment Archive
            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN ARTICLE CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        {/* KEY TAKEAWAYS BOX */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/50 rounded-2xl p-6 sm:p-8 border-2 border-emerald-300 shadow-sm mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Sparkles size={18} />
              </span>
              <h2 className="font-lora text-xl sm:text-2xl font-extrabold text-[#181818]">
                Key Takeaways &amp; Executive Summary
              </h2>
            </div>
            <ul className="space-y-3 font-lora text-[16px] sm:text-[17px] text-[#181818] leading-[1.7]">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="text-emerald-600 shrink-0 mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FIRST HALF OF PARAGRAPHS */}
        <div className="font-lora text-[17px] sm:text-[18px] text-[#181818] leading-[1.85] space-y-6 mb-12">
          {firstHalfParas.map((paragraph, pIdx) => (
            <p
              key={pIdx}
              className={
                pIdx === 0
                  ? "first-letter:font-lora first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-[#181818] leading-[1.85]"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* MID-ARTICLE EDITOR'S CHOICE WINNER SPOTLIGHT CARD (Matches Reference Mask Page) */}
        <div className="bg-gradient-to-b from-white via-white to-neutral-50 rounded-3xl p-6 sm:p-9 border-2 border-emerald-500 shadow-2xl my-14 relative overflow-hidden">
          {/* Winner Ribbon Top Left / Right */}
          <div className="absolute top-0 right-0 bg-emerald-600 text-white font-openSans text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
            <Award size={14} className="text-amber-300" />
            #1 OVERALL CLINICAL PICK (2026)
          </div>

          <div className="max-w-2xl">
            <span className="font-openSans text-xs uppercase tracking-widest text-emerald-700 font-extrabold block mb-1">
              Top Rated by Consultant Dermatologist Panel
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl font-extrabold text-[#181818] mb-2">
              {winnerProduct.name}
            </h3>
            <p className="font-lora text-sm sm:text-base text-neutral-600 mb-6">
              Full-coverage facial and cervical neck phototherapy with 7 clinical wavelengths, medical-grade silicone, and
              exclusive Black Friday 3 free gifts suite (£128 value).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Product Image & Coupon */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-sm mb-3">
                <img
                  src={winnerProduct.image}
                  alt={winnerProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-emerald-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Gift size={12} />
                  £128 Free Gifts
                </div>
              </div>

              {/* Coupon Bar with Countdown */}
              <div className="w-full max-w-[280px] px-3 py-2 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-emerald-800">CODE: {winnerProduct.voucher.code}</span>
                <span className="bg-[#181818] text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                  <Timer size={11} className="text-amber-400" />
                  {timer.hours}h {timer.minutes}m {timer.seconds}s
                </span>
              </div>
            </div>

            {/* Right Highlights & CTA */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-lora text-3xl sm:text-4xl font-extrabold text-[#181818]">
                  {winnerProduct.price}
                </span>
                {winnerProduct.originalPrice && (
                  <span className="font-lora text-lg text-neutral-400 line-through">
                    {winnerProduct.originalPrice}
                  </span>
                )}
                {winnerProduct.discount && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-openSans font-extrabold px-2.5 py-1 rounded-full border border-emerald-300">
                    {winnerProduct.discount}
                  </span>
                )}
              </div>

              {/* Trustpilot Green Stars */}
              <TrustpilotStars rating="4.9" reviews="4,000+" />

              {/* 7 Wavelength Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded-md">630nm Red</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-md">415nm Blue</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded-md">525nm Green</span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-md">590nm Amber</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded-md">Purple</span>
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 text-[10px] font-bold rounded-md">Cyan</span>
                <span className="px-2 py-0.5 bg-neutral-200 text-neutral-800 text-[10px] font-bold rounded-md">830nm NIR</span>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 font-openSans text-xs sm:text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>Full Face &amp; Cervical Neck Coverage:</strong> Integrated dual-piece phototherapy.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>192 High-Density Diode Array:</strong> 30-32 mW/cm² zero dead-zone photon flux.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>Black Friday 3 Free Gifts Suite (£128 Value):</strong> Case (£39) + Torch (£70) + Guide (£19).</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>90-Day Money-Back Guarantee:</strong> 100% risk-free home testing.</span>
                </li>
              </ul>

              {/* Free Gifts Highlight Box */}
              <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
                  <Gift size={14} className="text-emerald-600" />
                  <span>3 FREE GIFTS INCLUDED WITH TODAY&apos;S ORDER:</span>
                </div>
                <div className="text-neutral-700 space-y-0.5 text-[11px]">
                  <div>🎁 <strong>Luxury Travel Case</strong> (Value: £39) — <span className="text-emerald-700 font-bold">FREE</span></div>
                  <div>🎁 <strong>Precision Red Light Torch</strong> (Value: £70) — <span className="text-emerald-700 font-bold">FREE</span></div>
                  <div>🎁 <strong>Clinical Phototherapy Skincare Guide</strong> (Value: £19) — <span className="text-emerald-700 font-bold">FREE</span></div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={BUUDY_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-openSans font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:scale-[0.985] transition-all duration-300 animate-ctaPulse cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ctaShimmer"
                  />
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    Claim 60% Off &amp; £128 Free Gifts
                  </span>
                  <ArrowRight size={18} className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-2 animate-bounceX" />
                </a>
                <div className="text-center text-[11px] text-neutral-500 font-openSans mt-2">
                  🔒 Official Buudy Store • Free UK Tracked Delivery • 90-Day Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND HALF OF PARAGRAPHS */}
        <div className="font-lora text-[17px] sm:text-[18px] text-[#181818] leading-[1.85] space-y-6 mb-16">
          {secondHalfParas.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* CLINICAL FAQ ACCORDION */}
        {article.faq && article.faq.length > 0 && (
          <section className="bg-neutral-50 rounded-3xl p-6 sm:p-9 border border-[#e7e7e7] shadow-sm mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-openSans text-xs uppercase tracking-widest text-emerald-700 font-bold">
                Clinical Inquiries
              </span>
              <h2 className="font-lora text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
                Frequently Asked Questions
              </h2>
              <p className="font-lora text-sm sm:text-base text-neutral-600 mt-2">
                Evidence-based answers reviewed by our Consultant Dermatologist Panel.
              </p>
            </div>

            <div className="space-y-3.5 max-w-3xl mx-auto">
              {article.faq.map((faqItem, fIdx) => {
                const isOpen = !!openFaqIndices[fIdx];
                return (
                  <div
                    key={fIdx}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-neutral-50/70 transition-colors select-none"
                    >
                      <span className="font-lora font-bold text-base sm:text-lg text-[#181818] flex items-start gap-2.5">
                        <HelpCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
                        <span>{faqItem.question}</span>
                      </span>
                      <span className="shrink-0 mt-1 text-neutral-400">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-neutral-700 font-lora text-sm sm:text-base leading-relaxed pl-11 border-t border-neutral-100">
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
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-neutral-700">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-openSans text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-2">
              Ready to Upgrade Your Skincare Routine?
            </span>
            <h3 className="font-lora text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Explore The 2026 UK LED Mask Benchmark
            </h3>
            <p className="font-lora text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Compare laboratory bench measurements, clinical irradiance tests, and 4,000+ verified British consumer
              reviews across 18 leading models.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/best-led-face-mask-uk-2026"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-openSans font-extrabold text-sm uppercase tracking-wider transition-colors"
              >
                View Full Top 10 Comparison
              </Link>
              <a
                href={BUUDY_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-white/30 text-white font-openSans font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Visit Buudy Official Site</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* EDITORIAL FOOTER & DISCLOSURES */}
        <footer className="mt-20 pt-12 border-t border-[#e7e7e7] text-center text-xs text-neutral-500 font-openSans">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/privacy-policy" className="hover:text-emerald-700 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/terms-and-conditions" className="hover:text-emerald-700 transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-300">•</span>
            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="hover:text-emerald-700 transition-colors underline cursor-pointer"
            >
              Advertiser Disclosure
            </button>
          </div>

          <p className="max-w-2xl mx-auto font-lora text-neutral-500 leading-relaxed text-xs mb-6">
            Disclaimer: The educational content on Best Product Verdict is provided for informational purposes only and does
            not constitute medical advice. Phototherapy devices should be used in strict adherence to manufacturer
            guidelines. If you are pregnant, take photosensitising medications, or suffer from photosensitive conditions,
            consult your GP or dermatologist before use.
          </p>

          <p className="text-neutral-400 text-[11px] font-openSans">
            &copy; {new Date().getFullYear()} Best Product Verdict UK. All rights reserved.
          </p>
        </footer>
      </main>

      {/* DISCLOSURE MODAL */}
      {isDisclosureOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setIsDisclosureOpen(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-lora text-xl font-bold text-[#181818] mb-3">
              Advertising &amp; Editorial Disclosure
            </h3>
            <p className="font-lora text-neutral-700 leading-relaxed text-sm mb-6">
              Best Product Verdict is an independent consumer testing and evaluation platform. We are reader-supported.
              When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
              Our evaluations, ratings, and doctor reviews are based on rigorous clinical benchmarks, optical testing, and
              genuine user feedback.
            </p>
            <button
              onClick={() => setIsDisclosureOpen(false)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-openSans font-bold text-sm py-3 px-6 rounded-xl transition-colors cursor-pointer"
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
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[9px] font-openSans font-extrabold uppercase tracking-wider shadow-xs">
            <Award size={10} className="text-amber-500" />
            #1 WINNER
          </span>
        </div>

        {/* Sticky Winner Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-50 border border-neutral-200">
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
          <h4 className="font-lora font-extrabold text-[#181818] text-[11px] leading-tight">
            {winnerProduct.name}
          </h4>
          <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">
            £179 + £128 Gifts
          </span>
        </div>

        {/* Desktop CTA Button */}
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-openSans font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all duration-200 shadow-md group"
        >
          <span>Claim Offer</span>
          <ArrowRight size={11} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </aside>

      {/* 2. MOBILE FLOATING STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-openSans font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
        >
          <span>Claim 60% Off &amp; £128 Free Gifts</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </>
  );
}
