"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  X,
  Play,
  ArrowRight,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Award,
  Clock,
  HeartHandshake,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  EVALUATION_CRITERIA,
  LED_MASK_PRODUCTS,
  LED_FAQS,
  type LedMaskProduct,
} from "@/data/ledMaskData";

/* Luxury Monochrome Rating Stars */
function LuxuryStars({ rating, size = 18 }: { rating: number; size?: number }) {
  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((index) => {
        const fillPercentage = index < fullStars ? 100 : index === fullStars ? remainder * 100 : 0;
        return (
          <div key={index} className="relative inline-block text-neutral-300" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {fillPercentage > 0 && (
              <div
                className="absolute inset-y-0 left-0 overflow-hidden text-neutral-950"
                style={{ width: `${fillPercentage}%` }}
              >
                <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* Luxury Metric Bar */
function LuxuryMetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between items-center text-xs md:text-sm font-medium mb-1.5 text-neutral-700">
        <span className="tracking-wide">{label}</span>
        <span className="font-semibold text-neutral-950">{value}%</span>
      </div>
      <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
        <div
          className="h-full bg-neutral-950 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* FAQ Accordion Item */
function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white transition-colors duration-200 hover:border-neutral-400">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl font-semibold text-neutral-950 tracking-tight leading-snug">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-neutral-950 text-white" : "bg-neutral-50"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-sm md:text-base leading-relaxed text-neutral-600 border-t border-neutral-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export function LuxuryLedMaskLandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => setIsVideoPlaying(false));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 antialiased font-sans selection:bg-neutral-950 selection:text-white">
      {/* 1. ULTRA-LUXURY TOP MASTHEAD */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-950 text-white font-serif text-xs font-bold tracking-tighter">
              BV
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-[0.22em] font-extrabold uppercase text-neutral-950 group-hover:text-neutral-700 transition-colors">
                Best Product Verdict
              </span>
              <span className="text-[9px] tracking-[0.16em] uppercase text-neutral-400 font-medium">
                Luxury Skincare &amp; Beauty Tech Edit
              </span>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5 text-neutral-950 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 animate-pulse" />
              2026 UK Market Report
            </span>
            <span className="text-neutral-300">/</span>
            <span>Independent Audit</span>
          </div>
        </div>
      </header>

      {/* 2. EDITORIAL HERO BANNER */}
      <section className="bg-neutral-950 text-white pt-10 pb-12 md:pt-14 md:pb-16 px-4 sm:px-6 border-b border-neutral-800 relative overflow-hidden">
        {/* Subtle Luxury Pattern Accents */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 text-[11px] uppercase tracking-[0.22em] font-semibold text-neutral-300 mb-6">
            <Award size={14} className="text-white" />
            <span>UK Dermatological Devices • 2026 Comparative Edit</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.08]">
            Best LED Face Mask
            <span className="block mt-2 font-sans font-light text-2xl sm:text-3xl md:text-4xl text-neutral-300">
              United Kingdom — 2026 Review
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            An extensive multi-wavelength audit comparing light density, full face &amp; neck coverage,
            safety certifications, and actual clinical results across 18 leading models.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-200">
              <Clock size={14} />
              Last updated – <span>4 October 2026</span>
            </span>
            <span className="text-neutral-700">•</span>
            <span className="text-neutral-400">By Certified Dermatologist Panel</span>
          </div>
        </div>
      </section>

      {/* 3. HERO COMPARISON IMAGE & EXPERT PROFILE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-black/5 border border-neutral-200">
          {/* Main Comparison Hero Image */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-100 mb-8 aspect-[1536/461]">
            <img
              src="/img/TOP 5 LED Mask uk.png"
              alt="Top 5 LED Face Masks UK Comparison 2026"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dr. Megan Vincze Editorial Profile */}
          <div className="bg-neutral-50/90 rounded-2xl p-6 md:p-8 border border-neutral-200/80">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="/img/dr-megan-vincze.png"
                alt="Dr. Megan Vincze"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-md shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-neutral-950">
                      Dr. Megan Vincze
                    </h3>
                    <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 font-semibold mt-0.5">
                      Certified Dermatologist &amp; Beauty Technology Expert
                    </p>
                  </div>
                  <span className="inline-flex self-center sm:self-auto items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-medium text-neutral-700 shadow-sm">
                    <Check size={12} className="text-neutral-950 stroke-[3]" />
                    Verified Clinical Review
                  </span>
                </div>

                <div className="text-sm md:text-base text-neutral-700 leading-relaxed space-y-3 mb-4">
                  <p>
                    With <strong>10+ years of clinical skincare and phototherapy experience</strong>,{" "}
                    Dr. Megan Vincze evaluated <strong>18 popular UK LED face masks</strong> over{" "}
                    <strong>200+ hours</strong>, scrutinising spectral wavelengths, joule power output,
                    facial ergonomics, eye protection, integrated neck treatment, long-term durability, and actual patient outcomes.
                  </p>
                  <p className="italic text-neutral-600 border-l-2 border-neutral-300 pl-4 py-1">
                    &ldquo;My single most critical finding was that price and celebrity endorsement do not guarantee clinical efficacy. The superior device is the one providing verified therapeutic wavelengths with complete face and neck coverage in a routine effortless enough to sustain at home.&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                  <span>* Recommended by over 1,000 UK skincare users</span>
                  <span className="font-medium text-neutral-900">Independent Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE SUMMARY & INTRO NARRATIVE */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-neutral-700 text-base md:text-lg leading-relaxed space-y-6 mb-16">
          <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-neutral-950">
            LED face masks have surged in popularity across the United Kingdom, yet navigating the market
            remains remarkably difficult. Devices range in price from <strong>£100 to over £600</strong>, with
            manufacturers making near-identical promises regarding collagen synthesis, acne elimination, and anti-ageing transformation.
          </p>
          <p>
            To separate legitimate phototherapy science from marketing hype, we conducted rigorous hands-on evaluations
            of <strong>18 leading UK LED masks over 200+ hours</strong>. We tested wavelength precision, light density,
            neck coverage, ergonomic weight, eye safety, battery longevity, and verified user feedback.
          </p>
          <p>
            Our core conclusion was clear: <em>a higher price does not always deliver better results</em>. The premier masks
            utilised medical-grade wavelengths, ensured uniform face-and-neck coverage, and were comfortable enough for
            consistent, effortless home routines.
          </p>
          <p>
            Below, we present the ranked top 5 LED face masks that distinguished themselves in our 2026 benchmark testing,
            highlighting the undisputed top choice for UK buyers.
          </p>
        </div>

        {/* 5. 10 EVALUATION CRITERIA (LUXURY GRID) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold">
              Evaluation Methodology
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
              We evaluated LED face masks based on 10 criteria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {EVALUATION_CRITERIA.map((criterion, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white text-xs font-semibold">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  {criterion}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900 text-neutral-300 text-xs sm:text-sm text-center leading-relaxed">
            Over the past three months, we systematically assessed <strong>18 LED face masks</strong>. Synthesising{" "}
            <strong>hands-on laboratory testing</strong>, <strong>dermatological guidance</strong>, and{" "}
            <strong>thousands of verified UK consumer reviews</strong>, the following five devices earned top honors
            for safety, comfort, light output, and value.
          </div>
        </section>

        {/* 6. RANKED PRODUCTS LIST */}
        <div className="space-y-16">
          {LED_MASK_PRODUCTS.map((product) => (
            <article
              key={product.id}
              id={`product-${product.id}`}
              className={`relative bg-white rounded-3xl p-6 sm:p-10 transition-all ${
                product.isWinner
                  ? "border-2 border-neutral-950 shadow-2xl shadow-black/10 ring-1 ring-black/5"
                  : "border border-neutral-200 shadow-sm"
              }`}
            >
              {/* Winner Header Pill */}
              {product.isWinner && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-neutral-950 text-white px-5 sm:px-7 py-1.5 sm:py-2 rounded-full font-serif text-xs sm:text-sm tracking-[0.16em] uppercase flex items-center gap-2 shadow-xl z-10 whitespace-nowrap">
                  <Award size={16} />
                  <span>#1 Editor&apos;s Choice Winner</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Image, Price & Actions */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full">
                    {/* Mobile Title */}
                    <div className="text-center lg:hidden mb-4">
                      <div className="inline-block text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-500 mb-1">
                        {product.rankBadge}
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-neutral-950">
                        {product.rank} {product.name}
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">{product.tag}</p>
                    </div>

                    {/* Product Image Frame */}
                    <a
                      href={product.link}
                      className="block relative w-full aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 mb-6 group"
                      aria-label={`View ${product.name}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading={product.isWinner ? "eager" : "lazy"}
                      />
                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-neutral-950 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          {product.discount}
                        </span>
                      )}
                    </a>

                    {/* Pricing & Stars */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-950">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-neutral-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <LuxuryStars rating={product.rating} size={20} />
                        <span className="text-xs font-semibold text-neutral-600 tracking-wide">
                          Overall Rating {product.ratingDisplay} ({product.reviewCount} Reviews)
                        </span>
                      </div>
                    </div>

                    {/* Primary Action Button (Desktop) */}
                    <div className="hidden lg:block w-full">
                      <a
                        href={product.link}
                        className={`w-full py-4 px-6 rounded-full font-bold text-sm uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                          product.isWinner
                            ? "bg-neutral-950 hover:bg-neutral-800 text-white hover:scale-[1.02] shadow-black/20"
                            : "bg-white hover:bg-neutral-50 text-neutral-950 border-2 border-neutral-950 hover:scale-[1.01]"
                        }`}
                      >
                        <span>{product.ctaText}</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Editorial & Specs */}
                <div className="lg:col-span-7">
                  {/* Desktop Title */}
                  <div className="hidden lg:block mb-6">
                    <div className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-500 mb-1">
                      {product.rankBadge}
                    </div>
                    <h2 className="font-serif text-3xl xl:text-4xl font-bold text-neutral-950 leading-tight">
                      {product.rank} {product.name}
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1 font-medium">{product.tag}</p>
                  </div>

                  {/* Editorial Text */}
                  <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
                    {product.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-neutral-50/80 rounded-2xl p-5 sm:p-6 border border-neutral-200/80 mb-8">
                    <h4 className="font-serif text-base font-bold text-neutral-950 uppercase tracking-wider mb-4">
                      Performance Evaluation
                    </h4>
                    <div className="space-y-1">
                      {product.metrics.map((metric, mIdx) => (
                        <LuxuryMetricBar key={mIdx} label={metric.label} value={metric.value} />
                      ))}
                    </div>
                  </div>

                  {/* Specifications Snapshot */}
                  <div className="mb-8 rounded-2xl border border-neutral-200 overflow-hidden bg-white">
                    <div className="bg-neutral-100 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-700 border-b border-neutral-200">
                      Key Technical Specifications
                    </div>
                    <div className="divide-y divide-neutral-100 text-xs sm:text-sm">
                      <div className="flex justify-between p-3">
                        <span className="text-neutral-500">LED Configuration:</span>
                        <span className="font-medium text-neutral-900">{product.specSheet.ledCount}</span>
                      </div>
                      <div className="flex justify-between p-3">
                        <span className="text-neutral-500">Wavelength Coverage:</span>
                        <span className="font-medium text-neutral-900">{product.specSheet.wavelengths}</span>
                      </div>
                      <div className="flex justify-between p-3">
                        <span className="text-neutral-500">Neck &amp; Décolletage:</span>
                        <span className="font-medium text-neutral-900">{product.specSheet.neckIncluded}</span>
                      </div>
                      <div className="flex justify-between p-3">
                        <span className="text-neutral-500">Mobility &amp; Controls:</span>
                        <span className="font-medium text-neutral-900">{product.specSheet.cordless}</span>
                      </div>
                      <div className="flex justify-between p-3">
                        <span className="text-neutral-500">Money-Back Trial:</span>
                        <span className="font-medium text-neutral-900">{product.specSheet.trial}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 gap-6 mb-8">
                    {/* Pros Card */}
                    <div className="rounded-2xl p-5 sm:p-6 border border-neutral-200 bg-white">
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-950">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>Clinical Strengths &amp; Advantages</span>
                      </div>
                      <ul className="space-y-3">
                        {product.pros.map((pro, proIdx) => {
                          const colonIdx = pro.indexOf(":");
                          const title = colonIdx > -1 ? pro.slice(0, colonIdx) : "";
                          const detail = colonIdx > -1 ? pro.slice(colonIdx + 1) : pro;

                          return (
                            <li key={proIdx} className="text-xs sm:text-sm leading-relaxed text-neutral-700 flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 mt-2 shrink-0" />
                              <span>
                                {title && <strong className="text-neutral-950">{title}: </strong>}
                                {detail}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Cons Card */}
                    <div className="rounded-2xl p-5 sm:p-6 border border-neutral-200 bg-neutral-50/60">
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-300 text-neutral-800">
                          <X size={12} strokeWidth={2.5} />
                        </span>
                        <span>Considerations &amp; Trade-Offs</span>
                      </div>
                      <ul className="space-y-3">
                        {product.cons.map((con, conIdx) => {
                          const colonIdx = con.indexOf(":");
                          const title = colonIdx > -1 ? con.slice(0, colonIdx) : "";
                          const detail = colonIdx > -1 ? con.slice(colonIdx + 1) : con;

                          return (
                            <li key={conIdx} className="text-xs sm:text-sm leading-relaxed text-neutral-600 flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                              <span>
                                {title && <strong className="text-neutral-900">{title}: </strong>}
                                {detail}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* 7. VIP COMPLIMENTARY GIFT SUITE (BUUDY EXCLUSIVE) */}
                  {product.isWinner && product.gifts && (
                    <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-white text-neutral-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                          <Sparkles size={12} />
                          VIP Offer Confirmed
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                        Complimentary Accessory Suite: {product.gifts.totalValue} Value
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                        During our clinical evaluation, we confirmed Buudy is bundling their three signature skincare accessories
                        complimentary with every mask purchase for a limited period.
                      </p>

                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                        {product.gifts.items.map((gift, gIdx) => (
                          <div
                            key={gIdx}
                            className="bg-neutral-900 rounded-2xl p-2 sm:p-3 border border-neutral-800 text-center relative group"
                          >
                            <span className="absolute top-2 right-2 bg-white text-neutral-950 font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                              FREE
                            </span>
                            <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 mb-2 border border-neutral-700/50">
                              <img
                                src={gift.image}
                                alt={gift.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <span className="block text-[10px] sm:text-xs text-neutral-400 line-through">
                              Normally {gift.regularPrice}
                            </span>
                            <h5 className="font-serif text-xs sm:text-sm font-semibold text-white leading-tight mt-0.5">
                              {gift.name}
                            </h5>
                          </div>
                        ))}
                      </div>

                      <a
                        href={product.link}
                        className="w-full py-4 px-6 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs sm:text-sm uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-300 shadow-xl"
                      >
                        <span>Check Availability &amp; Claim Free Gifts</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  )}

                  {/* Mobile Action Button */}
                  <div className="lg:hidden w-full mt-6">
                    <a
                      href={product.link}
                      className={`w-full py-4 px-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all shadow-md ${
                        product.isWinner
                          ? "bg-neutral-950 text-white"
                          : "bg-white text-neutral-950 border-2 border-neutral-950"
                      }`}
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 8. COMPARISON MATRIX TABLE (LUXURY TABLE) */}
        <section className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold">
              Side-by-Side Analysis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
              Top 5 LED Face Masks At A Glance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-400 text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3 font-semibold">Mask Device</th>
                  <th className="py-3 px-3 font-semibold">LED Density</th>
                  <th className="py-3 px-3 font-semibold">Colour Modes</th>
                  <th className="py-3 px-3 font-semibold">Neck Included</th>
                  <th className="py-3 px-3 font-semibold">Controls</th>
                  <th className="py-3 px-3 font-semibold">Price</th>
                  <th className="py-3 px-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {LED_MASK_PRODUCTS.map((p) => (
                  <tr key={p.id} className={p.isWinner ? "bg-neutral-50/80 font-medium" : "hover:bg-neutral-50/40"}>
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-2.5">
                        <img src={p.image} alt={p.name} className="h-10 w-10 rounded-lg object-cover border border-neutral-200" />
                        <div>
                          <div className="font-serif font-bold text-neutral-950 text-sm">
                            {p.rank} {p.name}
                          </div>
                          {p.isWinner && (
                            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                              #1 Editor&apos;s Pick
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-neutral-700">{p.specSheet.ledCount}</td>
                    <td className="py-4 px-3 text-neutral-700">{p.specSheet.wavelengths}</td>
                    <td className="py-4 px-3">
                      {p.isWinner ? (
                        <span className="inline-flex items-center gap-1 text-neutral-950 font-bold text-xs">
                          <Check size={14} strokeWidth={3} /> Included
                        </span>
                      ) : (
                        <span className="text-neutral-400 text-xs">{p.specSheet.neckIncluded}</span>
                      )}
                    </td>
                    <td className="py-4 px-3 text-neutral-700">{p.specSheet.cordless}</td>
                    <td className="py-4 px-3 font-serif font-bold text-neutral-950 text-base">{p.price}</td>
                    <td className="py-4 px-3 text-right">
                      <a
                        href={p.link}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                          p.isWinner
                            ? "bg-neutral-950 text-white hover:bg-neutral-800"
                            : "border border-neutral-300 text-neutral-800 hover:border-neutral-950"
                        }`}
                      >
                        <span>{p.isWinner ? "Official Site" : "View"}</span>
                        <ExternalLink size={12} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. DERMATOLOGIST'S VERDICT & VIDEO WALKTHROUGH */}
        <section className="mt-20 bg-white rounded-3xl p-6 sm:p-12 border-2 border-neutral-950 shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold">
              Clinical Assessment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 mt-1">
              Dermatologist&apos;s Verdict
            </h2>
            <div className="w-16 h-0.5 bg-neutral-950 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Player Box */}
            <div className="relative">
              <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-neutral-300 bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full block"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/buudy-dermatologist-verdict-poster.jpg"
                  aria-label="Dermatologist walkthrough of the Buudy 7 Colour LED Mask"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/assets/buudy-dermatologist-verdict.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isVideoPlaying && (
                  <button
                    type="button"
                    onClick={handlePlayVideo}
                    aria-label="Play dermatologist walkthrough video"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer focus:outline-none"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-950 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </span>
                  </button>
                )}

                <div className="pointer-events-none absolute top-3 left-3 bg-neutral-950/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  2 Min Walkthrough
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-neutral-500 leading-snug max-w-xs mx-auto">
                Watch the light modes, facial fit, eye protection, and full-neck treatment in action.
              </p>
            </div>

            {/* Verdict Commentary */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-neutral-500 mb-2">
                #1 Recommended System
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mb-3">
                Buudy 7 Colour LED Mask
              </h3>

              <div className="font-serif text-3xl font-extrabold text-neutral-950 mb-4">
                Now at 60% Off — £179
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                &ldquo;Buudy outclasses alternatives in its class by delivering 7 therapeutic wavelengths plus
                830nm near-infrared with standard built-in neck coverage. At £179, it represents the most sound
                clinical investment for UK home light therapy in 2026.&rdquo;
              </p>

              {/* Verified Trust Badge */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 mb-6 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif font-bold text-base text-neutral-950">Rated 4.9 / 5</span>
                  <LuxuryStars rating={5} size={18} />
                </div>
                <span className="text-xs text-neutral-500">
                  Backed by 16,000+ UK customers &amp; a 90-Day Money-Back Guarantee
                </span>
              </div>

              <a
                href={BUUDY_PRODUCT_URL}
                className="w-full py-4 px-8 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:scale-[1.01] transition-all"
              >
                <span>Check Official Availability</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 font-semibold">
              Buyer Queries &amp; Science
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {LED_FAQS.map((faq, idx) => (
              <FaqAccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === idx}
                onToggle={() => toggleFaq(idx)}
              />
            ))}
          </div>
        </section>

        {/* 11. EDITORIAL DISCLOSURES & FOOTER */}
        <footer className="mt-20 pt-12 border-t border-neutral-200 text-center text-xs text-neutral-500">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link href="/privacy-policy" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/terms-and-conditions" className="hover:text-neutral-950 transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/advertiser-disclosure" className="hover:text-neutral-950 transition-colors">
              Advertiser Disclosure
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/contact" className="hover:text-neutral-950 transition-colors">
              Contact Editorial Desk
            </Link>
          </div>

          <div className="font-serif text-base font-bold text-neutral-950 mb-1 tracking-wider">
            BEST PRODUCT VERDICT
          </div>
          <p className="mb-8 text-neutral-400">
            &copy; 2026 Best Product Verdict UK. All rights reserved. Published for UK consumers.
          </p>

          <div className="max-w-3xl mx-auto bg-neutral-100 rounded-2xl p-6 text-left space-y-3 border border-neutral-200/80 leading-relaxed text-neutral-600">
            <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-950 flex items-center gap-1.5">
              <HeartHandshake size={14} />
              <span>Commercial &amp; Editorial Disclosure</span>
            </div>
            <p>
              <strong>Affiliate Transparency:</strong> Best Product Verdict participates in affiliate marketing programmes.
              When you click on links and complete purchases, we may receive a commission at no additional cost to you.
              Editorial recommendations remain independent and based on technical specifications and evaluation criteria.
            </p>
            <p>
              <strong>Individual Variability:</strong> Phototherapy responses vary according to skin type, routine consistency,
              and individual conditions. Always consult a healthcare professional before initiating new treatments.
            </p>
          </div>
        </footer>
      </main>

      {/* 12. STICKY MOBILE BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-2xl z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col pl-2">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">#1 Pick: Buudy Mask</span>
          <span className="font-serif text-base font-bold text-neutral-950 leading-none">£179 <span className="text-xs text-neutral-400 line-through">£449</span></span>
        </div>
        <a
          href={BUUDY_PRODUCT_URL}
          className="flex-1 py-3 px-4 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Claim #1 Pick</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
