"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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

/* Warm Gold Rating Stars */
function GoldStars({ rating = 5, size = 18 }: { rating?: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className="fill-[#f59e0b] text-[#f59e0b]"
        />
      ))}
    </div>
  );
}

export function LuxuryLedMaskArticlePage({ article }: { article: LedMaskArticle }) {
  const [openFaqIndices, setOpenFaqIndices] = useState<Record<number, boolean>>({ 0: true });
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const timer = useUkMidnightTimer();

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
    <div className="min-h-screen bg-white text-[#181818] antialiased selection:bg-[#d1a3ff] selection:text-[#181818]">
      {/* 1. TOP EDITORIAL STRIP */}
      <div className="bg-[#fafafa] border-b border-[#e7e7e7] py-2.5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs font-openSans text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#181818]">Clinical Dermatology Bulletin</span>
            <span className="text-neutral-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-neutral-500">Peer-Reviewed Phototherapy Education</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[#7e22ce]">
            <Award size={14} />
            <span>2026 UK Audit</span>
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMBS & ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs font-openSans text-neutral-500">
            <li>
              <Link href="/" className="hover:text-[#181818] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={13} className="text-neutral-400" />
            </li>
            <li>
              <Link href="/best-led-face-mask-uk-2026" className="hover:text-[#181818] transition-colors">
                LED Phototherapy Guide
              </Link>
            </li>
            <li>
              <ChevronRight size={13} className="text-neutral-400" />
            </li>
            <li className="font-semibold text-[#7e22ce] truncate max-w-[240px] sm:max-w-sm">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Category Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d1a3ff] bg-[#f5f3ff] text-[11px] sm:text-xs uppercase tracking-[0.15em] font-openSans font-bold text-[#7e22ce] mb-5 shadow-xs">
          <Sparkles size={14} className="text-[#9333ea]" />
          <span>Clinical Phototherapy Paper</span>
        </div>

        {/* Article Headline */}
        <h1 className="font-lato text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#181818] mb-6 leading-[1.2]">
          {article.title}
        </h1>

        {/* Excerpt Lead */}
        {article.excerpt && (
          <p className="font-lora text-lg sm:text-xl text-neutral-700 leading-[1.7] mb-8 font-normal border-l-4 border-[#7e22ce] pl-4 sm:pl-5 bg-[#fafafa] py-3 rounded-r-xl">
            {article.excerpt}
          </p>
        )}

        {/* Author & Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-[#e7e7e7] text-xs sm:text-sm font-openSans text-neutral-600">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100 border-2 border-[#181818] shrink-0">
              <img
                src="/img/dr-shannon.png"
                alt={article.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback doctor avatar if local fails
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
              <Clock size={14} className="text-[#9333ea]" />
              {article.date}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-[#9333ea]" />
              {article.readTime}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <ShieldCheck size={13} />
              Peer Reviewed
            </span>
          </div>
        </div>
      </header>

      {/* 3. HERO ARTICLE IMAGE */}
      {article.image && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-[#e7e7e7] shadow-sm bg-[#fafafa] aspect-[16/9] sm:aspect-[21/9]">
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
          <div className="bg-gradient-to-br from-[#fdf4ff] to-[#f5f3ff] rounded-2xl p-6 sm:p-8 border-2 border-[#d1a3ff] shadow-sm mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#7e22ce] text-white">
                <Sparkles size={18} />
              </span>
              <h2 className="font-lato text-xl sm:text-2xl font-extrabold text-[#181818]">
                Key Takeaways &amp; Executive Summary
              </h2>
            </div>
            <ul className="space-y-3 font-lora text-[16px] sm:text-[17px] text-[#181818] leading-[1.7]">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="text-[#7e22ce] shrink-0 mt-1" />
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
                  ? "first-letter:font-lato first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-[#181818] leading-[1.85]"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* MID-ARTICLE EDITOR'S CHOICE WINNER SPOTLIGHT CARD */}
        <div className="bg-gradient-to-br from-[#fafafa] via-white to-[#fdf4ff] rounded-3xl p-6 sm:p-9 border-2 border-[#181818] shadow-xl my-14 relative overflow-hidden">
          {/* Winner Ribbon Top Left */}
          <div className="absolute top-0 right-0 bg-[#181818] text-white font-openSans text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
            <Award size={14} className="text-[#f59e0b]" />
            #1 OVERALL CLINICAL PICK
          </div>

          <div className="max-w-2xl">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-extrabold block mb-1">
              Top Rated by Dermatologist Panel
            </span>
            <h3 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mb-2">
              {winnerProduct.name}
            </h3>
            <p className="font-lora text-sm sm:text-base text-neutral-600 mb-6">
              Full-coverage facial and neck phototherapy with 7 clinical wavelengths, medical-grade silicone, and
              complimentary 3-piece gift suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Product Image & Coupon */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden bg-white border border-[#e7e7e7] shadow-sm mb-3">
                <img
                  src={winnerProduct.image}
                  alt={winnerProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Coupon Bar */}
              <div className="w-full max-w-[260px] px-3 py-2 rounded-xl bg-[#fdf4ff] border-2 border-[#d1a3ff] flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#7e22ce]">CODE: BUUDY10</span>
                <span className="bg-[#181818] text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                  <Timer size={11} className="text-[#b265ff]" />
                  {timer.hours}h {timer.minutes}m
                </span>
              </div>
            </div>

            {/* Right Highlights & CTA */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-lato text-3xl sm:text-4xl font-extrabold text-[#181818]">
                  {winnerProduct.price}
                </span>
                {winnerProduct.originalPrice && (
                  <span className="font-lato text-lg text-neutral-400 line-through">
                    {winnerProduct.originalPrice}
                  </span>
                )}
                {winnerProduct.discount && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-openSans font-extrabold px-2.5 py-1 rounded-full border border-emerald-300">
                    {winnerProduct.discount}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <GoldStars rating={winnerProduct.rating} size={17} />
                <span className="font-openSans text-xs font-bold text-neutral-700">
                  {winnerProduct.ratingDisplay} ({winnerProduct.reviewCount} Verified Reviews)
                </span>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 font-openSans text-xs sm:text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>Full Face &amp; Neck Coverage:</strong> Integrated chest bib treats aging neck skin.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>7 Colours + 830nm NIR:</strong> Targets wrinkles, blemishes, rosacea, and dark spots.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>Complimentary £128 Gift Suite:</strong> Travel box, LED torch, &amp; clinical guide.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>90-Day Money-Back Guarantee:</strong> 100% risk-free home testing.</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={BUUDY_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-[#181818] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <span>Claim 60% Off &amp; £128 Free Gifts</span>
                  <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
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
          <section className="bg-[#fafafa] rounded-3xl p-6 sm:p-9 border border-[#e7e7e7] shadow-sm mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
                Clinical Inquiries
              </span>
              <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
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
                    className="bg-white rounded-2xl border border-[#e7e7e7] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-neutral-50/70 transition-colors select-none"
                    >
                      <span className="font-lato font-bold text-base sm:text-lg text-[#181818] flex items-start gap-2.5">
                        <HelpCircle size={18} className="text-[#7e22ce] mt-1 shrink-0" />
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
        <div className="bg-[#181818] text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#d1a3ff] font-bold block mb-2">
              Ready to Upgrade Your Skincare Routine?
            </span>
            <h3 className="font-lato text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Explore The 2026 UK LED Mask Benchmark
            </h3>
            <p className="font-lora text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Compare laboratory bench measurements, clinical irradiance tests, and 4,000+ verified British consumer
              reviews across 18 leading models.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/best-led-face-mask-uk-2026"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-white text-[#181818] font-openSans font-extrabold text-sm uppercase tracking-wider hover:bg-[#b265ff] hover:text-white transition-colors"
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

        {/* 10. EDITORIAL FOOTER & DISCLOSURES */}
        <footer className="mt-20 pt-12 border-t border-[#e7e7e7] text-center text-xs text-neutral-500 font-openSans">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/privacy-policy" className="hover:text-[#181818] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#181818] transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-300">•</span>
            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="hover:text-[#181818] transition-colors underline cursor-pointer"
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
        <div className="cp-overlay" onClick={() => setIsDisclosureOpen(false)}>
          <div className="disclosure-card-inner" onClick={(e) => e.stopPropagation()}>
            <h3 className="disclosure-card-title font-lato text-xl font-bold text-[#181818]">
              Advertising &amp; Editorial Disclosure
            </h3>
            <p className="disclosure-card-text font-lora text-neutral-700 leading-relaxed text-sm mb-4">
              Best Product Verdict is an independent consumer testing and evaluation platform. We are reader-supported.
              When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
              Our evaluations, ratings, and doctor reviews are based on rigorous clinical benchmarks, optical testing, and
              genuine user feedback.
            </p>
            <button
              onClick={() => setIsDisclosureOpen(false)}
              className="bg-[#181818] hover:bg-[#b265ff] text-white font-openSans font-bold text-sm py-2.5 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Understood &amp; Close
            </button>
          </div>
        </div>
      )}

      {/* STICKY WINNER BOX (DESKTOP) & MOBILE FLOATING CTA */}
      <StickyWinnerBox winnerProduct={winnerProduct} />
    </div>
  );
}

function StickyWinnerBox({ winnerProduct }: { winnerProduct: LedMaskProduct }) {
  return (
    <>
      {/* 1. DESKTOP STICKY BOX (Compact, Right-Gutter, Never Overlaps Content) */}
      <aside
        aria-label="Winner recommendation sticky card"
        className="hidden md:flex flex-col items-center fixed bottom-6 right-3 xl:right-6 z-50 w-[136px] bg-[#181818] border border-[#2e2e2e] rounded-xl p-2 shadow-2xl transition-all duration-300 hover:border-[#3e3e3e]"
      >
        {/* Top Badge: #1 WINNER */}
        <div className="mb-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f5f3ff] text-[#7e22ce] border border-[#d1a3ff] text-[9px] font-openSans font-extrabold uppercase tracking-wider shadow-xs">
            #1 WINNER
          </span>
        </div>

        {/* Video: autoplay looping demonstration */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-black border border-[#2e2e2e]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Buudy 7 Colour LED Mask UK Demonstration"
            title="Buudy 7 Colour LED Mask UK Demonstration"
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/assets/buudy-7-colour-led-mask-uk-demonstration.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Title: #1 Product Name in Bold Uppercase */}
        <div className="mt-1.5 mb-1.5 text-center px-0.5">
          <h4 className="font-lato font-extrabold text-white text-[11px] tracking-wider uppercase leading-tight">
            {winnerProduct.name}
          </h4>
        </div>

        {/* Desktop CTA Button */}
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1.5 px-2 rounded-lg bg-white hover:bg-[#b265ff] text-[#181818] hover:text-white font-openSans font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all duration-200 shadow-md group"
        >
          <span>VISIT WINNING SITE</span>
          <ExternalLink size={11} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </aside>

      {/* 2. MOBILE FLOATING STICKY BUTTON */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-none">
        <a
          href={winnerProduct.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto block w-full py-3 px-4 rounded-xl bg-[#181818] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-sm uppercase tracking-wider text-center shadow-2xl transition-colors cursor-pointer border border-neutral-800 active:scale-[0.99]"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <span>Visit Winning Site</span>
            <ExternalLink size={15} className="shrink-0" />
          </span>
        </a>
      </div>
    </>
  );
}
