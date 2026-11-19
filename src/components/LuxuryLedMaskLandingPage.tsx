"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Check,
  Star,
  Timer,
  Info,
  Gift,
  Play,
  X,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  LED_MASK_PRODUCTS,
  type LedMaskProduct,
} from "@/data/ledMaskData";
import {
  type LedMaskGuide,
  type LedMaskComparisonRow,
  type LedMaskBuyerBlock,
  type LedMaskFAQ,
} from "@/data/ledMaskGuidesData";
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

/* Reference Trustpilot 5 Stars using exact SVG polygons from reference content */
function ReferenceStars({ rating = "4.9", reviews = "4,000+" }: { rating?: string; reviews?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-label="5 displayed stars; overall rating 4.9 out of 5"
        className="flex items-center justify-center mb-1"
        role="img"
        style={{ gap: "4px" }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} aria-hidden="true" className="relative inline-block shrink-0" style={{ width: "24px", height: "24px" }}>
            <svg className="absolute inset-0 text-[#d7e5df]" height="24" viewBox="0 0 24 24" width="24">
              <polygon fill="currentColor" points="12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25" />
            </svg>
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: "100%" }}>
              <svg className="max-w-none text-[#00b67a]" height="24" viewBox="0 0 24 24" width="24">
                <polygon fill="currentColor" points="12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25" />
              </svg>
            </span>
          </span>
        ))}
      </div>
      <p className="text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600 font-sans">
        Overall rating {rating} / 5 ({reviews} Reviews)
      </p>
    </div>
  );
}

export function LuxuryLedMaskLandingPage({ guide }: { guide: LedMaskGuide }) {
  const [openFaqIndices, setOpenFaqIndices] = useState<Record<number, boolean>>({ 0: true });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const timer = useUkMidnightTimer();
  const currentDateFormatted = useCurrentDateFormatted();

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const buudyProduct = LED_MASK_PRODUCTS.find((p) => p.isWinner) || LED_MASK_PRODUCTS[0];
  const displayedProducts = showAllProducts ? LED_MASK_PRODUCTS : LED_MASK_PRODUCTS.slice(0, 5);

  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
        {/* 1. TOP HEADER BANNER (Exact Reference Match: Blue Theme Banner with UK Flag & Dynamic Date) */}
        <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Category / Comparison Pill */}
            {guide.cardCode && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-extrabold uppercase tracking-widest mb-3 backdrop-blur-xs">
                <span>{guide.cardCode}</span>
              </div>
            )}

            <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
              <span className="block">{guide.headline}</span>
              <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
                <svg aria-label="United Kingdom flag" className="h-5 w-8 overflow-hidden rounded-[3px] border border-white/40 shadow-sm md:h-6 md:w-9 shrink-0 inline-block" role="img" viewBox="0 0 38 24">
                  <rect fill="#012169" height="24" width="38" />
                  <path d="M0 0 38 24M38 0 0 24" stroke="#fff" stroke-width="5" />
                  <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" stroke-width="2" />
                  <path d="M19 0v24M0 12h38" stroke="#fff" stroke-width="8" />
                  <path d="M19 0v24M0 12h38" stroke="#c8102e" stroke-width="4" />
                </svg>
                <span>United Kingdom - 2026</span>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
              <CheckCircle2 size={20} className="text-white shrink-0" />
              <span>Last updated – <span data-led-updated-date="">{currentDateFormatted}</span></span>
            </div>
          </div>
        </div>

        {/* 2. HEADER: HERO IMAGE & DR. SHANNON CREDENTIALS CARD */}
        <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Guide Hero Image */}
            {guide.heroImage && (
              <img
                alt={guide.headline}
                className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
                decoding="async"
                fetchPriority="high"
                loading="eager"
                src={guide.heroImage}
              />
            )}

            {/* Dr. Shannon Certified Dermatologist Box */}
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
              <div className="flex flex-col md:block items-center text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                  <img
                    alt="Dr. Shannon"
                    className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                    src="/img/dr-shannon.png"
                  />
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl underline text-slate-900 font-serif">Dr. Shannon</h3>
                    <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                      Certified Dermatologist
                    </p>
                  </div>
                </div>

                <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 font-sans">
                  {guide.drShannonVerdict ? (
                    <>
                      <p className="italic mb-3 text-slate-800 font-medium">
                        &ldquo;{guide.drShannonVerdict.quote}&rdquo;
                      </p>
                      <p>{guide.drShannonVerdict.clinicalRationale}</p>
                      {guide.drShannonVerdict.recommendation && (
                        <p className="mt-3 font-semibold text-slate-900">
                          {guide.drShannonVerdict.recommendation}
                        </p>
                      )}
                    </>
                  ) : (
                    <p>
                      With 10+ years of experience in skincare and beauty technology, <strong className="text-slate-900">Dr. Shannon</strong> is a certified dermatologist and beauty technology expert. She reviewed 18 popular United Kingdom LED face mask options over 200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and guarantees. Her biggest finding was simple: the most expensive mask was not always the best choice. The strongest options used the right wavelengths, gave even face-and-neck coverage, and were easy enough to use consistently at home.
                    </p>
                  )}
                </div>

                <hr className="border-slate-200 w-full mb-4" />
                <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                  * Recommended by over 1,000 UK buyers skincare users.
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3. MAIN CONTENT CONTAINER */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Quick Take / Editorial Intro */}
          <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
            {guide.subheadline && (
              <p className="text-xl md:text-2xl font-serif font-bold text-slate-900 leading-snug">
                {guide.subheadline}
              </p>
            )}

            {guide.quickTake && (
              <div className="p-5 md:p-6 rounded-2xl bg-slate-100 border-l-4 border-emerald-500 text-slate-800 text-base md:text-lg leading-relaxed shadow-xs">
                <strong>Executive Takeaway:</strong> {guide.quickTake}
              </div>
            )}

            {guide.intro && guide.intro.map((p, idx) => (
              <p key={idx} className="text-base md:text-lg text-slate-700 leading-relaxed font-sans">
                {p}
              </p>
            ))}
          </div>

          {/* 4. 10 EVALUATION CRITERIA (Exact Reference Styling) */}
          <section className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
            <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif">
              We evaluated LED face masks based on 10 criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-sans">
              {[
                { num: "1", title: "Light Spectrum & Clinically Proven Wavelengths", desc: "We prioritised masks offering targeted wavelengths (630nm red, 415nm blue, 830nm near-infrared) with proven cellular benefits rather than arbitrary cosmetic light." },
                { num: "2", title: "Targeted Multi-Zone Therapy (Face & Neck)", desc: "Evaluation of anatomical coverage. Masks addressing both facial skin and cervical neck tissue ranked significantly higher than face-only masks." },
                { num: "3", title: "Optical Irradiance & Diode Density", desc: "Energy density measured in mW/cm². We penalised sparse arrays with wide gaps in light coverage that leave treatment dead zones." },
                { num: "4", title: "Eye Safety & Ocular Protection", desc: "Deep phototherapy can fatigue the retina. We checked for built-in medical-grade opaque silicone eye shields." },
                { num: "5", title: "Material Biocompatibility & Comfort", desc: "Direct skin contact requires food/medical grade silicone free of BPA, phthalates, and off-gassing chemical plasticisers." },
                { num: "6", title: "Cordless Mobility & Hands-Free Operation", desc: "Tethered cord systems drastically lower patient compliance. Integrated rechargeable lightweight controllers were heavily favoured." },
                { num: "7", title: "Daily Ease of Use & Ergonomics", desc: "Adjustable multi-strap stabilisation systems ensuring secure facial adhesion without pinching the bridge of the nose." },
                { num: "8", title: "Verified British Customer Satisfaction", desc: "Independent sentiment analysis of verified Trustpilot, Google, and dermatological clinic reviews across the UK." },
                { num: "9", title: "Price-to-Performance Ratio", desc: "Testing whether exorbitant £400-£600 price tags reflect optical performance or simply inflated brand marketing margins." },
                { num: "10", title: "Consumer Guarantees & Risk-Free Trial", desc: "Long risk-free trial periods (e.g. 90-day money-back warranties) allowing genuine skin renewal cycles before commitment." },
              ].map((c) => (
                <div key={c.num} className="flex items-start gap-3.5 p-4 md:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-sm">
                    {c.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1">{c.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. HEAD-TO-HEAD SPECIFICATION MATRIX (Specific to this Guide) */}
          {guide.comparisonRows && guide.comparisonRows.length > 0 && (
            <section className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-slate-200 mb-10 md:mb-16">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                  Head-to-Head Specification Matrix
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
                  {guide.headline}
                </h3>
              </div>
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-left border-collapse border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden min-w-[600px] font-sans">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs sm:text-sm uppercase tracking-wider">
                      <th className="py-3.5 px-4">Feature / Metric</th>
                      <th className="py-3.5 px-4 bg-emerald-500 text-white font-extrabold text-center">Buudy 7 Colour</th>
                      <th className="py-3.5 px-4 text-center">Benchmark / Competitor</th>
                      <th className="py-3.5 px-4">Clinical Relevance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {guide.comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-3.5 px-4 text-center font-bold text-emerald-800 bg-emerald-50/30 border-x border-slate-100">
                          {row.buudy}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-700">{row.competitor}</td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{row.whyItMatters}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* 6. BUYER GUIDANCE BLOCKS */}
          {guide.buyerBlocks && guide.buyerBlocks.length > 0 && (
            <section className="mb-14 space-y-6">
              {guide.buyerBlocks.map((block, bIdx) => (
                <div key={bIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      {bIdx + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        {block.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-sans">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* 7. PRODUCT REVIEWS & CARDS (#1 BUUDY CARD MATCHING EXACT REFERENCE DESIGN) */}
          <div className="space-y-12 mb-16">
            {displayedProducts.map((product) => {
              const isWinner = product.isWinner;
              return (
                <article
                  key={product.rank}
                  className={`bg-white rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-sm border ${
                    isWinner ? "border-2 border-emerald-500 shadow-xl" : "border-slate-200"
                  } w-full relative overflow-hidden`}
                >
                  {/* Top Badge: #1 Winner / Ranked */}
                  {isWinner ? (
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider mb-6 shadow-sm">
                      <Award size={14} />
                      <span>#1 Editor&apos;s Choice Winner (2026)</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-6">
                      <span>#{product.rank} Ranked Mask</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                    {/* Left Sticky Sidebar on Desktop */}
                    <div className="lg:col-span-4 flex flex-col items-center">
                      <div className="lg:sticky lg:top-4 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center lg:hidden font-serif">
                          #{product.rank} {product.name}
                        </h2>

                        {/* Product Image */}
                        <div className="relative w-full mb-3 max-w-[280px]">
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full group"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                            />
                          </a>
                        </div>

                        {/* Price & Black Friday Badge */}
                        <div className="text-center mb-4 w-full">
                          <div className="flex items-center justify-center gap-2 mb-1.5">
                            <span className="text-3xl font-extrabold text-slate-900 font-sans">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-lg text-slate-400 line-through font-medium font-sans">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>

                          {isWinner && (
                            <div className="flex justify-center mb-2">
                              <span className="inline-flex items-center gap-1 rounded-none bg-slate-900 text-[#f9ad26] border border-[#f9ad26]/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                                BLACK FRIDAY EARLY ACCESS
                              </span>
                            </div>
                          )}

                          {/* Star Ratings */}
                          <ReferenceStars rating={product.ratingDisplay} reviews={product.reviewCount} />
                        </div>

                        {/* CTA Outbound Button for Desktop (Transforms to Amber/Gold via theme.css) */}
                        <div className="w-full hidden lg:block">
                          <a
                            aria-label={isWinner ? "Official Website" : `Check ${product.name} Listing`}
                            className="relative inline-flex justify-center items-center px-8 py-4 text-lg md:text-xl font-bold text-white bg-emerald-500 rounded-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-emerald-500/30 w-full"
                            data-loading="false"
                            data-outbound-button="true"
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span data-outbound-content="true">
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                <span>{isWinner ? "Official Website" : "Check Listing"}</span>
                                <ChevronRight size={20} />
                              </span>
                              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Details Column */}
                    <div className="lg:col-span-8">
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-700 transition-colors"
                        >
                          #{product.rank} {product.name}
                        </a>
                      </h2>

                      {/* Editorial Paragraphs */}
                      <div className="prose prose-slate max-w-none text-base md:text-lg text-slate-700 leading-relaxed space-y-4 mb-8 font-sans">
                        {(product.description || []).map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Performance Metrics Bars */}
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8 font-sans">
                        <h4 className="font-bold text-slate-900 text-base mb-4 uppercase tracking-wider text-xs">
                          Performance Metrics
                        </h4>
                        <div className="space-y-3">
                          {product.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                                <span>{m.label}</span>
                                <span>{m.value}%</span>
                              </div>
                              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-emerald-500 rounded-full"
                                  style={{ width: `${m.value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pros & Cons Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-sans">
                        {/* Pros */}
                        <div className="bg-emerald-50/50 rounded-2xl px-4 py-5 md:p-6 border border-emerald-100">
                          <h4 className="bg-emerald-500 text-white font-bold text-center text-xl md:text-2xl py-2.5 px-4 -mt-5 -mx-4 md:-mt-6 md:-mx-6 mb-5 rounded-t-2xl">
                            Pros
                          </h4>
                          <ul className="space-y-3">
                            {product.pros.map((pro, proIdx) => (
                              <li key={proIdx} className="text-sm md:text-base text-slate-700 flex items-start gap-2.5">
                                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-red-50/50 rounded-2xl px-4 py-5 md:p-6 border border-red-100">
                          <h4 className="bg-red-500 text-white font-bold text-center text-xl md:text-2xl py-2.5 px-4 -mt-5 -mx-4 md:-mt-6 md:-mx-6 mb-5 rounded-t-2xl">
                            Cons
                          </h4>
                          <ul className="space-y-3">
                            {product.cons.map((con, conIdx) => (
                              <li key={conIdx} className="text-sm md:text-base text-slate-700 flex items-start gap-2.5">
                                <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Free Gifts Box (Included for #1 Buudy) */}
                      {isWinner && (
                        <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50 mb-8 font-sans">
                          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
                            <span>💡 Editor&apos;s Tip</span>
                          </div>
                          <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-2 leading-tight">
                            Active Offer Found: £128 in{" "}
                            <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block">
                              FREE GIFTS
                            </span>
                          </h4>
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            While doing our clinical research, we confirmed that Buudy is currently running a{" "}
                            <span className="bg-[#fef3c7] text-slate-900 font-extrabold px-1.5 py-0.5 rounded">
                              Black Friday Early Access Sale
                            </span>{" "}
                            where you can get these 3 premium accessories bundled for free with every mask purchase:
                          </p>

                          <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                            {/* Gift 1 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                              <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 rounded-full shadow-lg z-20 animate-bounce">
                                FREE
                              </div>
                              <span className="text-gray-900 font-bold line-through text-[9px] sm:text-xs bg-slate-100 px-2 py-0.5 rounded-full block mb-1">
                                Normally £39
                              </span>
                              <img
                                alt="Premium Travel Box"
                                className="w-full aspect-square object-cover rounded-lg mb-2"
                                src="/assets/led-mask-reference-20261027/93-w.webp"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/img/93-w.webp";
                                }}
                              />
                              <p className="font-extrabold text-gray-900 text-[10px] sm:text-sm leading-tight">
                                Premium Travel Box
                              </p>
                            </div>

                            {/* Gift 2 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                              <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 rounded-full shadow-lg z-20 animate-bounce">
                                FREE
                              </div>
                              <span className="text-gray-900 font-bold line-through text-[9px] sm:text-xs bg-slate-100 px-2 py-0.5 rounded-full block mb-1">
                                Normally £70
                              </span>
                              <img
                                alt="Buudy LED Torch"
                                className="w-full aspect-square object-cover rounded-lg mb-2"
                                src="/assets/led-mask-reference-20261027/35-w.webp"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/img/35-w.webp";
                                }}
                              />
                              <p className="font-extrabold text-gray-900 text-[10px] sm:text-sm leading-tight">
                                Buudy LED Torch
                              </p>
                            </div>

                            {/* Gift 3 */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                              <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[9px] sm:text-xs px-2 sm:px-3 py-0.5 rounded-full shadow-lg z-20 animate-bounce">
                                FREE
                              </div>
                              <span className="text-gray-900 font-bold line-through text-[9px] sm:text-xs bg-slate-100 px-2 py-0.5 rounded-full block mb-1">
                                Normally £19
                              </span>
                              <img
                                alt="Expert Skincare Guide"
                                className="w-full aspect-square object-cover rounded-lg mb-2"
                                src="/assets/led-mask-reference-20261027/94-w.webp"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/img/94-w.webp";
                                }}
                              />
                              <p className="font-extrabold text-gray-900 text-[10px] sm:text-sm leading-tight">
                                Skincare Guide
                              </p>
                            </div>
                          </div>

                          {/* Secondary Check Availability Outbound CTA (Transforms to Amber via theme.css) */}
                          <a
                            href={BUUDY_PRODUCT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-outbound-button="true"
                            className="relative block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] overflow-hidden group border-2 border-blue-500"
                          >
                            <span data-outbound-content="true">
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                <span>Check Availability &amp; Claim £128 Free Gifts</span>
                                <ChevronRight size={20} />
                              </span>
                            </span>
                          </a>
                        </div>
                      )}

                      {/* Mobile Outbound CTA Button */}
                      <div className="w-full lg:hidden pt-2">
                        <a
                          aria-label={isWinner ? "Official Website" : `Check ${product.name} Listing`}
                          className="relative inline-flex justify-center items-center px-6 py-3.5 text-base font-bold text-white bg-emerald-500 rounded-full overflow-hidden w-full shadow-lg shadow-emerald-500/30"
                          data-loading="false"
                          data-outbound-button="true"
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span data-outbound-content="true">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <span>{isWinner ? "Official Website" : "Check Listing"}</span>
                              <ChevronRight size={18} />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Show All 10 Models Toggle Button */}
          {!showAllProducts && (
            <div className="led-mask-reveal flex justify-center mb-16">
              <button
                type="button"
                onClick={() => setShowAllProducts(true)}
                className="border border-emerald-500 bg-white text-emerald-700 rounded-full px-8 py-3.5 text-base font-bold cursor-pointer hover:bg-emerald-50 transition-colors shadow-sm"
              >
                Load More (Show All 10 Models)
              </button>
            </div>
          )}

          {/* 8. DR. SHANNON WALKTHROUGH VIDEO SECTION (Exact Reference Match) */}
          <section className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-serif">
              Watch Dr. Shannon&apos;s Clinical Verdict
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base font-sans">
              Watch Consultant Dermatologist Dr. Shannon explain why high diode density, multi-wavelength therapy, and cervical neck integration matter for clinical results.
            </p>

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-2xl aspect-[9/16]">
              <video
                aria-label="Dr. Shannon walkthrough of the Buudy 7 Colour LED Mask"
                className="block w-full h-full object-cover"
                controls={isVideoPlaying}
                playsInline
                poster="/assets/buudy-dr-shannon-poster.jpg?v=3"
                preload="metadata"
                onPlay={() => setIsVideoPlaying(true)}
              >
                <source src="/assets/buudy-dr-shannon-verdict.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isVideoPlaying && (
                <button
                  type="button"
                  aria-label="Play Dr. Shannon walkthrough video"
                  onClick={() => setIsVideoPlaying(true)}
                  data-led-video-play=""
                  className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl ring-8 ring-white/60 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Play size={28} className="ml-1 fill-white" />
                </button>
              )}
            </div>
          </section>

          {/* 9. 5-MASK SIDE-BY-SIDE COMPARISON TABLE (Exact Reference Match) */}
          <section className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-slate-200 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center font-serif">
              Complete Side-by-Side Comparison
            </h3>
            <div className="text-xs text-slate-500 text-center mb-3 sm:hidden font-sans">
              ← Swipe horizontally to compare all 5 masks →
            </div>
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans" id="led-mask-comparison-table">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm md:text-base w-[18%] bg-slate-50/50 rounded-tl-xl align-bottom font-sans">
                      Feature / Metric
                    </th>
                    <th className="py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200 bg-emerald-50/40">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans text-emerald-700">
                          #1 Winner
                        </span>
                        <div className="w-full max-w-[95px] sm:max-w-[110px] aspect-square mb-2 rounded-2xl overflow-hidden bg-white border-2 border-emerald-500/50 shadow-md">
                          <img src="/img/57-w.webp" alt="Buudy 7 Colour" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-extrabold text-slate-900 text-xs sm:text-sm block leading-tight">Buudy 7 Colour</span>
                        <span className="text-xs text-emerald-700 font-bold mt-1">£179 (was £449)</span>
                      </div>
                    </th>
                    <th className="py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans text-slate-500">#2 Ranked</span>
                        <div className="w-full max-w-[95px] aspect-square mb-2 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                          <img src="/img/Untitled design.png" alt="CurrentBody" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-tight">CurrentBody</span>
                        <span className="text-xs text-slate-500 mt-1">£399.99</span>
                      </div>
                    </th>
                    <th className="py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans text-slate-500">#3 Ranked</span>
                        <div className="w-full max-w-[95px] aspect-square mb-2 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                          <img src="/img/omnilux.png" alt="Omnilux" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-tight">Omnilux</span>
                        <span className="text-xs text-slate-500 mt-1">£348.00</span>
                      </div>
                    </th>
                    <th className="py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans text-slate-500">#4 Ranked</span>
                        <div className="w-full max-w-[95px] aspect-square mb-2 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                          <img src="/img/shark.png" alt="Shark CryoGlow" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-tight">Shark CryoGlow</span>
                        <span className="text-xs text-slate-500 mt-1">£299.99</span>
                      </div>
                    </th>
                    <th className="py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans text-slate-500">#5 Ranked</span>
                        <div className="w-full max-w-[95px] aspect-square mb-2 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                          <img src="/img/Dr Dennis Gross.png" alt="Dr. Dennis Gross" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-tight">Dr. Dennis Gross</span>
                        <span className="text-xs text-slate-500 mt-1">£455.00</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans">
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">Wavelengths / Spectrum</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">7 Colours + 830nm NIR</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Red + NIR (2 Wavelengths)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Red + NIR (2 Wavelengths)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Red + Blue (2 Wavelengths)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Red + Blue (2 Wavelengths)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">Integrated Neck Coverage</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">Included Dual-Bib</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None (£280 extra)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None (£290 extra)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None (Face only)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None (Face only)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">Diode Count / Density</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">192 High-Density LEDs</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">132 LEDs</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">132 LEDs</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">110 LEDs</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">162 LEDs</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">Cordless Mobility</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">Yes (Rechargeable)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Tethered Controller</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Tethered Controller</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Rechargeable</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">Tethered USB</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">Risk-Free Trial</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">90-Day Money-Back</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">60-Day (10% Fee)</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">30-Day Guarantee</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">30-Day Guarantee</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-600">30-Day Guarantee</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 bg-slate-50/50">£128 Free Gift Bundle</td>
                    <td className="py-3 px-2 text-center font-bold text-emerald-800 bg-emerald-50/20 border-l border-slate-100">3 Gifts Included</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None</td>
                    <td className="py-3 px-2 text-center border-l border-slate-100 text-slate-400">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10. CLINICAL FAQ ACCORDION (Exact Reference Match) */}
          {guide.faqs && guide.faqs.length > 0 && (
            <section className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-16 max-w-4xl mx-auto font-sans">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center font-serif">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {guide.faqs.map((faq, fIdx) => {
                  const isOpen = !!openFaqIndices[fIdx];
                  return (
                    <div key={fIdx} className="border border-slate-200 rounded-xl overflow-hidden transition-all">
                      <button
                        type="button"
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                          <HelpCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        <span className="shrink-0 mt-1 text-slate-400">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed pl-11 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>

        {/* 11. FOOTER (Exact Reference Match) */}
        <footer className="mt-0 border-t border-slate-200 bg-white px-4 py-8 shadow-inner">
          <div className="mx-auto max-w-6xl text-center text-sm text-slate-500 font-sans">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-800 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/terms-and-conditions" className="text-slate-500 hover:text-slate-800 transition-colors">
                Terms of Service
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/advertiser-disclosure" className="text-slate-500 hover:text-slate-800 transition-colors">
                Advertising Disclosure
              </Link>
              <span className="text-slate-300">•</span>
              <Link href="/contact" className="text-slate-500 hover:text-slate-800 transition-colors">
                Contact Us
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Disclaimer: The educational content on Best Product Verdict is provided for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </footer>

        {/* 12. MOBILE BOTTOM STICKY BAR (Transforms to Amber CTA via theme.css data-outbound-button) */}
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center font-sans">
          <a
            aria-busy="false"
            aria-label="Take me to the winning LED Mask"
            className="relative w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap overflow-hidden group"
            data-loading="false"
            data-outbound-button="true"
            href={BUUDY_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-outbound-content="true">
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <span>Take me to the winning LED Mask</span>
                <ChevronRight size={18} />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </span>
          </a>
        </div>

        {/* Dynamic Exit Popup Script */}
        <Script
          id="buudy-exit-popup"
          src="/assets/buudy-exit-popup-20261104.js"
          data-popup-site="bestproductverdict"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
