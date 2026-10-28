"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Award,
  Clock,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  MIROOOO_PRODUCT_URL,
  TOOTHBRUSH_EVALUATION_CRITERIA,
  TOOTHBRUSH_PRODUCTS,
  type ToothbrushProduct,
} from "@/data/toothbrushData";
import { type ToothbrushGuide } from "@/data/toothbrushGuidesData";

/* Helper to format UK dynamic date (e.g. "8 October 2026") */
function getUkFormattedDate(): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/London",
    }).format(new Date());
  } catch {
    const d = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}

/* Dynamic UK Midnight 12 Countdown Timer Hook */
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

/* Warm Gold Rating Stars (matching site luxury styling) */
function GoldStars({ rating, size = 20 }: { rating: number; size?: number }) {
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
                className="absolute inset-y-0 left-0 overflow-hidden text-[#f59e0b]"
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

/* Accessible High-Contrast Performance Bar with Smooth Viewport Animation */
function PerformanceMetricBar({ label, value, isWinner }: { label: string; value: number; isWinner?: boolean }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedWidth(value);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={barRef} className="mb-3">
      <div className="flex justify-between items-center text-sm font-semibold mb-1 text-[#181818] font-lato">
        <span className="tracking-tight">{label}</span>
        <span className="font-bold text-[#181818]">{value}%</span>
      </div>
      <div className="h-2.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden border border-[#e2e8f0]">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out bg-[#181818]"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Safely renders bold formatting for HTML <b> / <strong> tags and markdown **bold** markers
 * without dangerouslySetInnerHTML, while preserving mathematical brackets like <50dB.
 */
function renderFormattedBoldText(text: string): React.ReactNode {
  if (!text) return null;

  if (
    !text.includes("<b>") &&
    !text.includes("<B>") &&
    !text.includes("<strong>") &&
    !text.includes("<STRONG>") &&
    !text.includes("**")
  ) {
    return text;
  }

  const tokens = text.split(
    /(<b\b[^>]*>[\s\S]*?<\/b>|<strong\b[^>]*>[\s\S]*?<\/strong>|\*\*[\s\S]*?\*\*)/gi
  );

  return tokens.map((part, index) => {
    if (!part) return null;

    if (/^<b\b[^>]*>[\s\S]*?<\/b>$/i.test(part)) {
      const content = part.replace(/^<b\b[^>]*>|<\/b>$/gi, "");
      return (
        <strong key={index} className="font-bold text-[#181818]">
          {content}
        </strong>
      );
    }

    if (/^<strong\b[^>]*>[\s\S]*?<\/strong>$/i.test(part)) {
      const content = part.replace(/^<strong\b[^>]*>|<\/strong>$/gi, "");
      return (
        <strong key={index} className="font-bold text-[#181818]">
          {content}
        </strong>
      );
    }

    if (/^\*\*[\s\S]*?\*\*$/.test(part) && part.length >= 4) {
      const content = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold text-[#181818]">
          {content}
        </strong>
      );
    }

    return part;
  });
}

export interface LuxuryToothbrushLandingPageProps {
  guide?: ToothbrushGuide;
}

export function LuxuryToothbrushLandingPage({ guide }: LuxuryToothbrushLandingPageProps = {}) {
  const [ukDate, setUkDate] = useState<string>(getUkFormattedDate());
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [isStandardsOpen, setIsStandardsOpen] = useState(false);
  const timer = useUkMidnightTimer();

  useEffect(() => {
    setUkDate(getUkFormattedDate());
  }, []);

  const activeCriteria = guide?.criteria && guide.criteria.length > 0
    ? guide.criteria
    : TOOTHBRUSH_EVALUATION_CRITERIA;

  const winnerProduct = TOOTHBRUSH_PRODUCTS.find((p) => p.isWinner) || TOOTHBRUSH_PRODUCTS[0];

  return (
    <div className="min-h-screen bg-white text-[#181818] antialiased selection:bg-[#d1a3ff] selection:text-[#181818]">
      {/* 3. HERO EDITORIAL SECTION */}
      <section className="bg-[#fafafa] text-[#181818] pt-12 pb-14 md:pt-16 md:pb-20 px-4 sm:px-6 border-b border-[#e7e7e7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d1a3ff] bg-[#f5f3ff] text-xs uppercase tracking-[0.15em] font-openSans font-bold text-[#7e22ce] mb-6 shadow-xs">
            <Award size={15} className="text-[#9333ea]" />
            <span>{guide?.eyebrow || "2026 United Kingdom Dental Care Audit"}</span>
          </div>

          <h1 className="font-lato text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#181818] mb-5 leading-[1.15]">
            {guide ? (
              <>
                {guide.headline}
                <span className="block mt-2 font-lato font-normal text-2xl sm:text-3xl md:text-4xl text-neutral-600">
                  {guide.subheadline}
                </span>
              </>
            ) : (
              <>
                Best Electric Toothbrush
                <span className="block mt-2 font-lato font-normal text-2xl sm:text-3xl md:text-4xl text-neutral-600">
                  United Kingdom — 2026 Clinical Comparison
                </span>
              </>
            )}
          </h1>

          <p className="font-lora text-base sm:text-lg md:text-[19px] text-[#181818] max-w-3xl mx-auto leading-[1.8] mb-6 font-normal">
            {guide
              ? guide.quickTake
              : "A rigorous clinical assessment evaluating acoustic motor dynamics, plaque removal efficiency, enamel safety, ergonomic weight distribution, and verified patient outcomes across 16 leading models."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-openSans font-semibold text-neutral-600">
            <span className="flex items-center gap-1.5 text-[#181818] bg-white px-3.5 py-1.5 rounded-full border border-[#e7e7e7] shadow-xs">
              <Clock size={14} className="text-[#9333ea]" />
              Updated: <strong className="text-[#181818]">{ukDate}</strong>
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-700">Audited by Certified Dental Panel</span>
          </div>
        </div>
      </section>

      {/* 4. HERO BANNER IMAGE, DR. JULIAN VANCE PROFILE & HANDS-ON VIDEO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 space-y-8 relative z-20">
        {/* Main Top 5 Comparison Hero Graphic */}
        <div className="relative overflow-hidden rounded-2xl border border-[#e7e7e7] shadow-sm aspect-[1536/461] bg-[#fafafa]">
          <img
            src="/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"
            alt="Top 5 Best Electric Toothbrushes UK 2026 Comparison"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Dr. Julian Vance Clinical Profile Box (Centered) */}
        <div className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 border border-[#e7e7e7] shadow-sm">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* 1. Doctor Avatar */}
            <img
              src="/img/toothbrushes/miroooo-dr-julian-vance-dental-consultant.webp"
              alt="Dr. Julian Vance, BDS - Clinical Dental Consultant &amp; Oral Health Specialist"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-md shrink-0 mb-3"
            />

            {/* 2. Doctor Name Centered Below Avatar */}
            <h3 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] text-center">
              {guide?.drVanceVerdict.name || "Dr. Julian Vance, BDS"}
            </h3>

            {/* 3. Title and Badge Centered Below Name */}
            <p className="font-openSans text-xs sm:text-sm uppercase tracking-wider text-neutral-600 font-bold mt-1 text-center">
              {guide?.drVanceVerdict.title || "Clinical Dental Consultant & Oral Health Specialist"}
            </p>
            <div className="mt-2.5 mb-5 flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3ff] border border-[#d1a3ff] text-xs font-openSans font-bold text-[#7e22ce] shadow-xs">
                <CheckCircle2 size={14} className="text-[#7e22ce]" />
                Verified Clinical Review
              </span>
            </div>

            {/* 4. Centered Paragraph / Quote / Rationale Copy */}
            <div className="w-full font-lora text-base sm:text-[18px] text-[#181818] leading-[1.8] space-y-3 mb-5 font-normal text-center">
              {guide ? (
                <>
                  <blockquote className="border-y border-[#d1a3ff]/60 px-4 italic text-neutral-800 bg-[#fbf9fe] py-3 rounded-lg my-3 text-center">
                    &ldquo;{guide.drVanceVerdict.quote}&rdquo;
                  </blockquote>
                  <p>{guide.drVanceVerdict.clinicalRationale}</p>
                  {guide.drVanceVerdict.recommendation && (
                    <p className="text-sm font-semibold text-neutral-800 pt-1 text-center">
                      <strong>Clinical Recommendation:</strong> {guide.drVanceVerdict.recommendation}
                    </p>
                  )}
                </>
              ) : (
                <p>
                  With <strong>over 14 years</strong> of clinical dental experience in the UK,{" "}
                  <strong>Dr. Julian Vance</strong> evaluated the leading electric toothbrushes for 2026 across{" "}
                  <strong>180+ hours of comparative testing</strong>. Her conclusion was simple: daily brushing should
                  be effortless. The ideal brush should be whisper-quiet rather than loudly buzzing in your ear, featherlight
                  (around 50g) for easy handling, and gentle on gums while delivering a deep sonic clean. You don&apos;t
                  need to spend £200+ on heavy, loud, clunky handles or outdated 2-pin bathroom chargers to get a dentist-clean
                  smile, whisper-quiet sound, and 90+ days of battery life.
                </p>
              )}
            </div>

            {/* Footer Audit Bar */}
            <div className="w-full pt-3 border-t border-[#e7e7e7] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-openSans text-neutral-600">
              <span>* Evaluated across UK dental clinics &amp; independent tests.</span>
              <span className="font-bold text-[#181818]">100% Independent Medical Audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE SUMMARY & INTRO */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-24 md:pb-12">
        <div className="max-w-3xl mx-auto font-lora text-[18px] text-[#181818] leading-[1.8] space-y-6 mb-14">
          {guide ? (
            guide.intro.map((para, pIdx) => (
              <p
                key={pIdx}
                className={
                  pIdx === 0
                    ? "first-letter:font-lato first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-[#181818] leading-[1.8]"
                    : ""
                }
              >
                {para}
              </p>
            ))
          ) : (
            <>
              <p className="first-letter:font-lato first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-[#181818] leading-[1.8]">
                Upgrading to a high-performance electric toothbrush is one of the most impactful decisions you can make for
                your long-term oral health. However, navigating the UK dental market has become increasingly frustrating.
                Prices range from <strong>£40 to well over £300</strong>, with major household brands frequently relying on
                clunky plastic handles, loud vibrating gearboxes, and overpriced replacement heads.
              </p>
              <p>
                To separate true acoustic engineering from marketing hype, our clinical panel spent{" "}
                <strong>180+ laboratory hours testing 16 prominent UK models</strong>. We evaluated plaque removal
                efficiency, gumline gentleness, motor noise decibels, handle weight balance, battery longevity, and thousands
                of verified patient reviews.
              </p>
              <p>
                Our core conclusion: <em>a higher price tag does not guarantee better oral health</em>. The top-performing
                toothbrushes combine whisper-quiet acoustic motors (&lt;50dB), ultra-lightweight ergonomic chassis design
                (~50g), universal USB-C magnetic charging, and affordable replacement heads.
              </p>
              <p className="font-semibold text-[#181818]">
                Below is our definitive, ranked top 5 electric toothbrushes for UK buyers in 2026, starting with our undisputed
                #1 winner.
              </p>
            </>
          )}
        </div>

        {/* 6. EVALUATION STANDARDS & CRITERIA (COLLAPSIBLE ACCORDION) */}
        <section className="bg-white rounded-3xl border border-[#e7e7e7] shadow-sm mb-16 overflow-hidden transition-all duration-300">
          <button
            type="button"
            onClick={() => setIsStandardsOpen((prev) => !prev)}
            aria-expanded={isStandardsOpen}
            aria-controls="toothbrush-standards-panel"
            className="w-full text-left p-6 sm:p-8 sm:px-9 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/75 transition-colors group select-none focus:outline-hidden"
          >
            <div className="flex-1 min-w-0 pr-2 sm:pr-4">
              <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold block mb-1">
                Testing Methodology
              </span>
              <h2 className="font-lato text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181818] tracking-tight group-hover:text-[#7e22ce] transition-colors">
                {guide ? `Clinical Standards for ${guide.cardTitle}` : "We Evaluated Electric Toothbrushes on 10 Key Standards"}
              </h2>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="hidden sm:inline font-openSans text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-[#7e22ce] transition-colors">
                {isStandardsOpen ? "Hide Criteria" : "View Criteria"}
              </span>
              <div
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#fafafa] border border-[#e7e7e7] group-hover:border-[#d1a3ff] group-hover:bg-[#f5f3ff] text-neutral-600 group-hover:text-[#7e22ce] transition-all duration-200"
                aria-hidden="true"
              >
                {isStandardsOpen ? (
                  <ChevronUp className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
            </div>
          </button>

          {isStandardsOpen && (
            <div
              id="toothbrush-standards-panel"
              className="px-6 pb-6 sm:px-9 sm:pb-9 pt-4 sm:pt-6 border-t border-[#e7e7e7] animate-fadeIn"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {activeCriteria.map((criterion, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fafafa] border border-[#e7e7e7] hover:border-neutral-400 transition-colors"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181818] text-white text-xs font-openSans font-bold shadow-xs">
                      {idx + 1}
                    </div>
                    <span className="font-lato text-sm sm:text-base font-semibold text-[#181818] tracking-tight">
                      {criterion}
                    </span>
                  </div>
                ))}
              </div>

              {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
                <div className="mt-8 p-6 rounded-2xl bg-[#fafafa] border border-[#e7e7e7]">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-[#7e22ce]" />
                    <h3 className="font-lato font-bold text-lg text-[#181818]">Key Clinical Findings at a Glance</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {guide.winnerBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 font-lora text-sm sm:text-base text-neutral-800">
                        <CheckCircle2 size={16} className="text-[#10b981] mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-2xl bg-[#181818] text-white font-lora text-sm sm:text-base text-center leading-relaxed mt-6">
                Synthesising <strong>laboratory bench measurements</strong>, <strong>clinical dental oversight</strong>, and{" "}
                <strong>thousands of verified UK consumer submissions</strong>, the following models distinguished themselves in 2026.
              </div>
            </div>
          )}
        </section>

        {/* 6B. GUIDE-SPECIFIC HEAD-TO-HEAD COMPARISON TABLE */}
        {guide?.comparisonRows && guide.comparisonRows.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-9 border border-[#e7e7e7] shadow-sm mb-16 overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
                Head-to-Head Specification Matrix
              </span>
              <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
                {guide.headline}
              </h2>
              <p className="font-lora text-sm sm:text-base text-neutral-600 mt-2">
                Side-by-side benchmark comparison across acoustic engineering, battery endurance, handle ergonomics, and UK refill pricing.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-[#e7e7e7] text-neutral-500 font-openSans text-[11px] sm:text-xs uppercase tracking-wider bg-[#fafafa]">
                    <th className="py-3 px-4 font-extrabold w-[25%]">Feature / Metric</th>
                    <th className="py-3 px-4 font-extrabold w-[25%] text-[#7e22ce]">Miroooo Brush X2</th>
                    <th className="py-3 px-4 font-extrabold w-[25%]">Comparison Benchmark</th>
                    <th className="py-3 px-4 font-extrabold w-[25%]">Why It Matters in Practice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  {guide.comparisonRows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#fafafa]/60"}>
                      <td className="py-3.5 px-4 font-lato font-bold text-[#181818]">{row.feature}</td>
                      <td className="py-3.5 px-4 font-openSans font-bold text-[#7e22ce] bg-[#fdf4ff]/40">
                        {row.miroooo}
                      </td>
                      <td className="py-3.5 px-4 font-lora text-neutral-700">{row.competitor}</td>
                      <td className="py-3.5 px-4 font-lora text-neutral-600 text-xs sm:text-[13px] leading-relaxed">
                        {row.whyItMatters}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 6C. GUIDE-SPECIFIC BUYER GUIDANCE BLOCKS */}
        {guide?.buyerBlocks && guide.buyerBlocks.length > 0 && (
          <section className="space-y-6 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
                Clinical Analysis &amp; Buyer Guidance
              </span>
              <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
                What UK Patients &amp; Consumers Need to Know
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {guide.buyerBlocks.map((block, bIdx) => (
                <div key={bIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e7e7] shadow-xs">
                  <h3 className="font-lato text-xl sm:text-2xl font-bold text-[#181818] mb-3 flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#181818] text-white text-xs font-openSans font-bold shrink-0">
                      {bIdx + 1}
                    </span>
                    {block.title}
                  </h3>
                  <p className="font-lora text-[16px] sm:text-[17px] text-[#181818] leading-[1.8] font-normal">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. THE RANKED PRODUCTS */}
        <div className="space-y-16">
          {TOOTHBRUSH_PRODUCTS.map((product) => (
            <article
              key={product.id}
              id={`product-${product.id}`}
              className={`relative bg-white rounded-3xl p-6 sm:p-9 transition-all duration-300 ${
                product.isWinner
                  ? "border-2 border-[#181818] shadow-xl shadow-black/5 ring-4 ring-neutral-100"
                  : "border border-[#e7e7e7] shadow-sm"
              }`}
            >
              {/* TOP WINNER RIBBON */}
              {product.isWinner && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-[#181818] text-white px-6 sm:px-8 py-2 rounded-full font-openSans text-xs sm:text-sm font-extrabold tracking-wider uppercase flex items-center gap-2 shadow-lg z-20 whitespace-nowrap">
                  <Award size={16} className="text-[#f59e0b]" />
                  <span>#1 Editor&apos;s Choice Winner</span>
                </div>
              )}

              {/* ============================================================
                  ROW 1 (TOP): 2-COLUMN SPLIT (Image + Compact Promo on Left, Info + Bars + CTA on Right)
                  ============================================================ */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
                {/* LEFT COLUMN: Direct Large Image on Top, Single-Line Promo / Voucher Box at Bottom */}
                <div className={`lg:col-span-5 flex flex-col justify-between h-full ${product.isWinner ? "pt-2 sm:pt-3 pl-1 sm:pl-2" : ""}`}>
                  <div className="flex-1 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px] lg:min-h-0">
                    {/* Direct Image with Clean Border Radius & No Hover Effect */}
                    <a
                      href={product.link}
                      className="block w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-white shadow-xs"
                      aria-label={`View ${product.name}`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full max-h-[440px] object-cover rounded-2xl"
                        loading={product.isWinner ? "eager" : "lazy"}
                      />
                    </a>
                  </div>

                  {/* Promo / Voucher Box (Bottom aligned, inline with CTA button on the right) */}
                  <div className="mt-4 shrink-0">
                    {product.isWinner ? (
                      <div className="w-full px-3.5 py-2.5 rounded-xl bg-[#fdf4ff] border-2 border-[#d1a3ff] flex items-center justify-between gap-2 shadow-xs">
                        <span className="font-mono text-xs sm:text-sm font-black text-[#7e22ce] tracking-wider uppercase truncate">
                          COUPON: {product.voucher.code}
                        </span>
                        <span className="bg-[#181818] text-white font-mono font-bold text-[11px] sm:text-xs px-2.5 py-1 rounded-lg shadow-inner flex items-center gap-1 shrink-0">
                          <Timer size={13} className="text-[#b265ff]" />
                          <span>{timer.hours}h {timer.minutes}m {timer.seconds}s</span>
                        </span>
                      </div>
                    ) : (
                      <div className="w-full px-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-[#e7e7e7] flex items-center justify-between gap-2 shadow-xs">
                        <span className="font-mono text-xs sm:text-sm font-bold text-neutral-400 line-through tracking-wider uppercase truncate">
                          COUPON: {product.voucher.code}
                        </span>
                        <span className="font-openSans text-[10px] sm:text-xs font-extrabold text-[#ef4444] bg-red-50 border border-red-200 px-2.5 py-1 rounded uppercase tracking-wide shrink-0">
                          EXPIRED
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN: Direct Title, Rating, Price, Performance Bars, and CTA */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Product Title */}
                    <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] leading-tight mb-2">
                      {product.isWinner ? product.name : `${product.rank} ${product.name}`}
                    </h2>

                    {/* Rating Stars & Review Count */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <GoldStars rating={product.rating} size={20} />
                      <span className="font-openSans text-sm font-bold text-[#181818]">
                        {product.ratingDisplay} ({product.reviewCount} Verified Reviews)
                      </span>
                    </div>

                    {/* Price Display */}
                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="font-lato text-3xl sm:text-4xl font-extrabold text-[#181818]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg sm:text-xl text-neutral-400 line-through font-semibold font-lato">
                          {product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <span className="font-openSans text-xs font-extrabold text-[#7e22ce] bg-[#f5f3ff] border border-[#d1a3ff] px-2.5 py-1 rounded-md">
                          {product.discount} Today
                        </span>
                      )}
                    </div>

                    {/* Performance Metric Bars */}
                    <div className="space-y-1 mb-6">
                      <h4 className="font-openSans text-xs font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                        Laboratory Performance Scores
                      </h4>
                      {product.metrics.map((metric, mIdx) => (
                        <PerformanceMetricBar
                          key={mIdx}
                          label={metric.label}
                          value={metric.value}
                          isWinner={product.isWinner}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Primary / Secondary CTA Button */}
                  <div className="mt-4">
                    {product.isWinner ? (
                      <a
                        href={product.link}
                        className="w-full py-4 px-6 rounded-xl bg-[#000000] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
                      >
                        <span>{product.ctaText}</span>
                        <ArrowRight size={20} />
                      </a>
                    ) : (
                      <a
                        href={product.link}
                        className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-neutral-100 text-[#181818] font-openSans font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 border border-[#d1d5db] hover:border-[#181818] transition-all shadow-xs"
                      >
                        <span>{product.ctaText}</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* ============================================================
                  ROW 2 (MIDDLE): FULL-WIDTH 3 FREE GIFTS SUITE BANNER (Winner Only)
                  ============================================================ */}
              {product.isWinner && product.gifts && (
                <div className="w-full bg-[#181818] text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl mb-8 relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-openSans font-bold text-[#b265ff] uppercase tracking-wider mb-3">
                    <span>💡 Editor&apos;s Tip</span>
                  </div>
                  <h3 className="font-lato text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    What&apos;s Included &amp; <span className="text-[#b265ff]">FREE GIFTS WORTH {product.gifts.totalValue}</span>
                  </h3>
                  <p className="font-lora text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                    {product.gifts.description}
                  </p>

                  {/* 3 Gift Tiles in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.gifts.items.map((gift, gIdx) => (
                      <div
                        key={gIdx}
                        className="bg-neutral-900 rounded-xl p-3.5 border border-neutral-800 text-center relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-neutral-950">
                            <span
                              className={`absolute top-2 right-2 z-20 font-openSans font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md pointer-events-none text-white ${
                                gift.badge === "IN THE BOX" ? "bg-emerald-600" : "bg-[#b265ff]"
                              }`}
                            >
                              {gift.badge || "FREE"}
                            </span>
                            <img
                              src={gift.image}
                              alt={gift.name}
                              className="w-full h-full object-cover rounded-xl block pointer-events-none"
                            />
                          </div>

                          <span className="block font-openSans text-xs text-neutral-400 font-semibold mb-1">
                            {gift.badge === "IN THE BOX" ? (
                              <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                                {gift.regularPrice}
                              </span>
                            ) : (
                              <span className="line-through">Normally {gift.regularPrice}</span>
                            )}
                          </span>
                        </div>
                        <h4 className="font-lato text-sm sm:text-base font-bold text-white leading-snug">
                          {gift.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================
                  ROW 3 (BOTTOM): 2 EQUAL COLUMNS (Pros on Left, Cons on Right)
                  ============================================================ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* PROS CARD (LEFT) */}
                <div className="rounded-2xl p-6 border border-[#e7e7e7] bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e7e7e7]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10b981] text-white shadow-xs">
                      <Check size={16} strokeWidth={3} />
                    </span>
                    <span className="font-lato text-xl sm:text-2xl font-black text-[#181818] tracking-tight">
                      Pros
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {product.pros.map((pro, proIdx) => (
                      <li
                        key={proIdx}
                        className="font-lora text-[16px] sm:text-[18px] leading-[1.7] text-[#181818] flex items-start gap-3"
                      >
                        <Check size={18} className="text-[#10b981] mt-1 shrink-0 stroke-[3]" />
                        <span>{renderFormattedBoldText(pro)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONS CARD (RIGHT) */}
                <div className="rounded-2xl p-6 border border-[#e7e7e7] bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e7e7e7]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ef4444] text-white shadow-xs">
                      <X size={16} strokeWidth={3} />
                    </span>
                    <span className="font-lato text-xl sm:text-2xl font-black text-[#181818] tracking-tight">
                      Cons
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {product.cons.map((con, conIdx) => (
                      <li
                        key={conIdx}
                        className="font-lora text-[16px] sm:text-[18px] leading-[1.7] text-[#181818] flex items-start gap-3"
                      >
                        <XCircle size={18} className="text-[#ef4444] mt-1 shrink-0 stroke-[2.5]" />
                        <span>{renderFormattedBoldText(con)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ROW 4 (BOTTOM CTA): "GO TO OFFICIAL WEBSITE" (Winner Only) */}
              {product.isWinner && (
                <div className="mt-8">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl bg-[#181818] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group cursor-pointer"
                  >
                    <span>Go to Official Website</span>
                    <ArrowRight size={22} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* 8B. DENTIST'S VERDICT SECTION (Trustpilot Parity) */}
        <section className="mt-20 mb-12 relative max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#8b1528] mb-6 md:mb-10 font-lato tracking-tight">
              Dentist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square overflow-hidden rounded-2xl border border-[#dfd1bd] bg-white shadow-xl">
                  <img
                    src="/img/toothbrushes/miroooo-brush-x2-dentist-verdict-dr-olivia.webp"
                    alt="Dr. Julian Vance - Dentist's Verdict on Miroooo Brush X2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4 font-lato tracking-tight">
                  Miroooo X2
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6" />

                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-6 font-lato">
                  Now at 50% off
                </div>

                {/* Trust Badge */}
                <div className="border border-neutral-200 bg-white/80 rounded-xl p-3.5 mx-auto mb-6 inline-block shadow-2xs">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="font-extrabold text-base text-[#181818] font-lato">
                      Excellent
                    </span>
                    <GoldStars rating={5} size={20} />
                  </div>
                  <div className="text-xs text-neutral-600 flex items-center justify-center gap-1 font-openSans font-medium">
                    Rated 4.9 / 5 on <span className="font-bold text-[#181818]">Trustpilot</span>
                  </div>
                </div>

                <a
                  href={MIROOOO_PRODUCT_URL}
                  className="mx-auto w-full max-w-[280px] sm:max-w-xs py-4 px-8 rounded-full bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-sm sm:text-base font-extrabold tracking-wider uppercase shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Check Availability</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SIDE-BY-SIDE COMPARISON TABLE MATRIX */}
        <section className="mt-20 bg-white rounded-3xl p-3 sm:p-5 lg:p-6 border border-[#e7e7e7] shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
              Complete Side-by-Side Matrix
            </span>
            <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
              Top 5 Electric Toothbrushes at a Glance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[720px] md:min-w-0">
              <thead>
                <tr className="border-b-2 border-[#e7e7e7] text-neutral-500 font-openSans text-[11px] sm:text-xs uppercase tracking-wider">
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[22%]">Toothbrush Model</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[16%]">Acoustic Clean</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[14%]">Weight &amp; Build</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[15%]">Battery &amp; Dock</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[13%]">Money-Back Trial</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold w-[8%]">Price</th>
                  <th className="py-2.5 px-2.5 sm:px-3 font-extrabold text-right w-[12%]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {TOOTHBRUSH_PRODUCTS.map((p) => (
                  <tr
                    key={p.id}
                    className={p.isWinner ? "bg-[#fdf4ff]/60 font-semibold" : "hover:bg-[#fafafa]"}
                  >
                    <td className="py-3 px-2.5 sm:px-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={p.isWinner ? "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp" : p.image}
                          alt={p.name}
                          className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl object-contain shrink-0"
                        />
                        <div>
                          <div className="font-lato font-bold text-[#181818] text-xs sm:text-sm">
                            {p.rank} {p.name}
                          </div>
                          {p.isWinner && (
                            <span className="font-openSans text-[10px] text-[#7e22ce] font-extrabold uppercase tracking-wide">
                              ★ #1 Best Overall
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2.5 sm:px-3 text-[#181818]">
                      <span className="font-lora text-[11px] sm:text-xs text-neutral-700 block">{p.specSheet.technology}</span>
                      <span className="font-openSans text-[10px] text-neutral-500 font-semibold">{p.specSheet.noiseLevel}</span>
                    </td>
                    <td className="py-3 px-2.5 sm:px-3 font-lora text-neutral-700 text-xs sm:text-sm">
                      {p.isWinner ? (
                        <span className="inline-flex items-center gap-1 text-[#7e22ce] font-openSans font-bold text-xs sm:text-sm">
                          <Check size={14} strokeWidth={3} className="shrink-0" />
                          <span>{p.specSheet.weight}</span>
                        </span>
                      ) : (
                        <span>{p.specSheet.weight}</span>
                      )}
                    </td>
                    <td className="py-3 px-2.5 sm:px-3 font-lora text-neutral-700 text-xs sm:text-sm">
                      <span className="block font-semibold text-[#181818]">{p.specSheet.batteryLife}</span>
                      <span className="text-[10px] text-neutral-500 font-openSans block">{p.specSheet.dockType}</span>
                    </td>
                    <td className="py-3 px-2.5 sm:px-3 font-lora text-neutral-700 text-xs sm:text-sm">{p.specSheet.trial}</td>
                    <td className="py-3 px-2.5 sm:px-3 font-lato font-extrabold text-[#181818] text-base sm:text-lg whitespace-nowrap">
                      {p.price}
                    </td>
                    <td className="py-3 px-2.5 sm:px-3 text-right whitespace-nowrap">
                      <a
                        href={p.link}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-bold uppercase tracking-normal whitespace-nowrap transition-all ${
                          p.isWinner
                            ? "bg-[#000000] hover:bg-[#b265ff] text-white shadow-xs"
                            : "border border-neutral-300 text-[#181818] hover:border-[#181818] bg-white"
                        }`}
                      >
                        <span>{p.isWinner ? "Official Store" : "View"}</span>
                        <ExternalLink size={13} className="shrink-0" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 9B. GUIDE-SPECIFIC FAQS */}
        {guide?.faqs && guide.faqs.length > 0 && (
          <section className="mt-20 bg-white rounded-3xl p-6 sm:p-9 border border-[#e7e7e7] shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
                Clinical Questions &amp; Answers
              </span>
              <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
                Frequently Asked Questions
              </h2>
              <p className="font-lora text-sm sm:text-base text-neutral-600 mt-2">
                Evidence-based answers reviewed by Dr. Julian Vance, BDS.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {guide.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-[#fafafa] rounded-2xl p-5 sm:p-6 border border-[#e7e7e7] hover:border-neutral-300 transition-colors"
                >
                  <h3 className="font-lato text-base sm:text-lg font-bold text-[#181818] mb-2.5 flex items-start gap-2.5">
                    <HelpCircle size={18} className="text-[#7e22ce] mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="font-lora text-sm sm:text-base text-neutral-700 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. EDITORIAL FOOTER & DISCLOSURES */}
        <footer className="mt-20 pt-12 border-t border-[#e7e7e7] text-center text-xs text-neutral-500 font-openSans">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/privacy-policy" className="hover:text-[#181818] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#181818] transition-colors">
              Terms and Conditions
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
            Disclaimer: The information published on Best Product Verdict is intended for educational and consumer research
            purposes. Electric toothbrushes should be used strictly in accordance with manufacturer instructions. If you
            have severe periodontal disease, active dental surgery, or bleeding gums, consult your dentist or oral health
            specialist prior to changing your brushing routine.
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
              Our evaluations, ratings, and dentist reviews are based on rigorous clinical benchmarks, acoustic testing,
              plaque removal measurements, and genuine user feedback.
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

      {/* STICKY WINNER BOX (DESKTOP) & STICKY BAR (MOBILE) */}
      <StickyWinnerBox winnerProduct={winnerProduct} />
    </div>
  );
}

function StickyWinnerBox({ winnerProduct }: { winnerProduct: ToothbrushProduct }) {
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

        {/* #1 Product Image */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-black/80 border border-[#2e2e2e]">
          <img
            src="/img/toothbrushes/miroooo-x2-sonic-electric-toothbrush-silver-global-dental-innovation-award.webp"
            alt="Miroooo Brush X2 Sonic Electric Toothbrush"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Title: #1 Product Name in Bold Uppercase */}
        <div className="mt-1.5 mb-1.5 text-center px-0.5">
          <h4 className="font-lato font-extrabold text-white text-[11px] tracking-wider uppercase leading-tight">
            MIROOOO BRUSH X2
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

      {/* 2. MOBILE FLOATING STICKY BUTTON (No background bar - button only) */}
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
