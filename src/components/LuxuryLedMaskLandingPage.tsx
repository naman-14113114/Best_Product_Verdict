"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Check,
  X,
  Play,
  ArrowRight,
  ExternalLink,
  Award,
  Clock,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  EVALUATION_CRITERIA,
  LED_MASK_PRODUCTS,
  type LedMaskProduct,
} from "@/data/ledMaskData";

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

/* Warm Gold Rating Stars (matching womenskinhealth.com) */
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

/* Accessible High-Contrast Performance Bar with Smooth Viewport Animation (womenskinhealth.com styling) */
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

export function LuxuryLedMaskLandingPage() {
  const [ukDate, setUkDate] = useState<string>(getUkFormattedDate());
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timer = useUkMidnightTimer();

  useEffect(() => {
    setUkDate(getUkFormattedDate());
  }, []);

  const handlePlayVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => setIsVideoPlaying(false));
  };

  return (
    <div className="min-h-screen bg-white text-[#181818] antialiased selection:bg-[#d1a3ff] selection:text-[#181818]">
      {/* 1. TOP MINIMAL ACCENT LINE */}
      <div className="w-full h-1 bg-[#181818]" />

      {/* 2. CLEAN EDITORIAL HEADER (womenskinhealth.com style) */}
      <header className="border-b border-[#e7e7e7] bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#181818] text-white font-openSans font-bold text-sm tracking-tight shadow-sm">
              BV
            </span>
            <div className="flex flex-col">
              <span className="font-lato font-extrabold text-lg sm:text-xl tracking-tight text-[#181818] group-hover:text-[#7e22ce] transition-colors">
                Best Product Verdict <span className="text-[#b265ff]">UK</span>
              </span>
              <span className="font-openSans text-[11px] tracking-wider uppercase text-neutral-500 font-semibold">
                Independent 2026 Phototherapy Audit
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs sm:text-sm font-openSans font-semibold">
            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-neutral-600 hover:text-[#181818] transition-colors py-1 px-2.5 rounded-md hover:bg-neutral-100"
            >
              <HelpCircle size={15} />
              <span>Advertising Disclosure</span>
            </button>
            <span className="inline-flex items-center gap-1.5 bg-[#f5f3ff] text-[#7e22ce] border border-[#d1a3ff] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-[#b265ff] animate-pulse" />
              Verified UK Report
            </span>
          </div>
        </div>
      </header>

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
              Our evaluations, ratings, and doctor reviews are based on rigorous clinical benchmarks, optical testing,
              and genuine user feedback.
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

      {/* 3. HERO EDITORIAL SECTION (Clean White / Off-White Aesthetic) */}
      <section className="bg-[#fafafa] text-[#181818] pt-12 pb-14 md:pt-16 md:pb-20 px-4 sm:px-6 border-b border-[#e7e7e7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d1a3ff] bg-[#f5f3ff] text-xs uppercase tracking-[0.15em] font-openSans font-bold text-[#7e22ce] mb-6 shadow-xs">
            <Award size={15} className="text-[#9333ea]" />
            <span>2026 United Kingdom Phototherapy Audit</span>
          </div>

          <h1 className="font-lato text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#181818] mb-5 leading-[1.15]">
            Best LED Face Mask
            <span className="block mt-2 font-lato font-normal text-2xl sm:text-3xl md:text-4xl text-neutral-600">
              United Kingdom — 2026 Clinical Comparison
            </span>
          </h1>

          <p className="font-lora text-base sm:text-lg md:text-[19px] text-[#181818] max-w-3xl mx-auto leading-[1.8] mb-6 font-normal">
            A comprehensive clinical assessment evaluating light wavelength precision, full face &amp; neck coverage,
            optical energy density, and verified customer results across 18 leading models.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-openSans font-semibold text-neutral-600">
            <span className="flex items-center gap-1.5 text-[#181818] bg-white px-3.5 py-1.5 rounded-full border border-[#e7e7e7] shadow-xs">
              <Clock size={14} className="text-[#9333ea]" />
              Updated: <strong className="text-[#181818]">{ukDate}</strong>
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-700">Audited by Certified Dermatologist Panel</span>
          </div>
        </div>
      </section>

      {/* 4. HERO BANNER IMAGE & DR. SHANNON PROFILE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 space-y-8 relative z-20">
        {/* Main Top 5 Comparison Hero Graphic */}
        <div className="relative overflow-hidden rounded-2xl border border-[#e7e7e7] shadow-sm aspect-[1536/461] bg-[#fafafa]">
          <img
            src="/img/TOP 5 LED Mask uk.png"
            alt="Top 5 Best LED Face Masks UK 2026 Comparison"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Dr. Shannon Clinical Profile Box */}
        <div className="bg-[#fafafa] rounded-2xl p-6 sm:p-8 border border-[#e7e7e7] shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/img/dr-shannon.png"
              alt="Dr. Shannon"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-3 border-white shadow-md shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-lato text-2xl font-extrabold text-[#181818]">
                    Dr. Shannon, MD
                  </h3>
                  <p className="font-openSans text-xs uppercase tracking-wider text-neutral-600 font-bold mt-0.5">
                    Consultant Dermatologist &amp; Medical Phototherapy Specialist
                  </p>
                </div>
                <span className="inline-flex self-center sm:self-auto items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f3ff] border border-[#d1a3ff] text-xs font-openSans font-bold text-[#7e22ce] shadow-xs">
                  <CheckCircle2 size={14} className="text-[#7e22ce]" />
                  Verified Clinical Review
                </span>
              </div>

              <div className="font-lora text-base sm:text-[18px] text-[#181818] leading-[1.8] space-y-3 mb-4 font-normal">
                <p>
                  With <strong>over a decade of clinical dermatological practice</strong>, Dr. Shannon
                  scrutinised <strong>18 leading UK LED masks over 200+ testing hours</strong>. She evaluated
                  spectral wavebands, optical irradiance, facial ergonomics, eye safety shields, integrated neck
                  treatment, and authentic long-term patient outcomes.
                </p>
                <p className="italic text-[#181818] bg-white p-4 sm:p-5 rounded-xl border-l-4 border-[#181818] border border-[#e7e7e7] shadow-xs text-base sm:text-[17px]">
                  &ldquo;My primary finding was that exorbitant price tags and celebrity sponsorship do not ensure
                  superior phototherapy. The standout device is the one that delivers scientifically verified
                  wavelengths with complete face and neck coverage in a routine comfortable enough for daily home
                  use.&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#e7e7e7] flex flex-wrap items-center justify-between text-xs font-openSans text-neutral-600">
                <span>* Tested &amp; recommended for mature skin (ages 40+)</span>
                <span className="font-bold text-[#181818]">100% Independent Medical Audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE SUMMARY & INTRO */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto font-lora text-[18px] text-[#181818] leading-[1.8] space-y-6 mb-14">
          <p className="first-letter:font-lato first-letter:text-5xl first-letter:font-extrabold first-letter:float-left first-letter:mr-3 first-letter:text-[#181818] leading-[1.8]">
            LED face masks have quickly become the most sought-after beauty tech devices in the United Kingdom.
            However, selecting the correct device is fraught with confusion. Prices fluctuate wildly from{" "}
            <strong>£100 to over £600</strong>, with multiple manufacturers making identical promises regarding
            collagen restoration, acne eradication, and anti-ageing transformation.
          </p>
          <p>
            To separate authentic phototherapy science from marketing exaggeration, our clinical team spent{" "}
            <strong>200+ hours laboratory-testing 18 popular UK devices</strong>. We measured wavelength accuracy,
            optical density, neck coverage, facial weight distribution, battery endurance, and thousands of verified
            customer experiences.
          </p>
          <p>
            Our core finding: <em>a higher price does not equal better results</em>. The highest-performing masks
            offered medical-grade multi-spectrum LEDs, standard full-neck treatment, and lightweight cordless mobility
            for effortless consistency.
          </p>
          <p className="font-semibold text-[#181818]">
            Below is our definitive, ranked top 5 LED face masks for UK buyers in 2026, beginning with our undisputed #1
            winner.
          </p>
        </div>

        {/* 6. 10 EVALUATION CRITERIA (ACCESSIBLE GRID IN LAT & OPEN SANS) */}
        <section className="bg-white rounded-3xl p-6 sm:p-9 border border-[#e7e7e7] shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
              Testing Methodology
            </span>
            <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
              We Evaluated LED Face Masks on 10 Key Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
            {EVALUATION_CRITERIA.map((criterion, idx) => (
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

          <div className="p-4 rounded-2xl bg-[#181818] text-white font-lora text-sm sm:text-base text-center leading-relaxed">
            Synthesising <strong>laboratory bench measurements</strong>, <strong>dermatological oversight</strong>, and{" "}
            <strong>thousands of verified UK consumer submissions</strong>, the following five devices distinguished
            themselves in 2026.
          </div>
        </section>

        {/* 7. THE RANKED PRODUCTS (STRICT 3-TIER WIREFRAME & WOMENSKINHEALTH STYLING) */}
        <div className="space-y-16">
          {LED_MASK_PRODUCTS.slice(0, visibleCount).map((product) => (
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
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
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

                {/* RIGHT COLUMN: Direct Title, Rating, Price (No Wrapper Box), Performance Bars, and CTA */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Product Title (No duplicate #1 and no subtitle paragraph) */}
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
                  <h3 className="font-lato text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {product.gifts.title}
                  </h3>
                  <p className="font-lora text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                    {product.gifts.description}
                  </p>

                  {/* 3 Gift Tiles in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.gifts.items.map((gift, gIdx) => (
                      <div
                        key={gIdx}
                        className="bg-neutral-900 rounded-xl p-3.5 border border-neutral-800 text-center relative"
                      >
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                          <span className="absolute top-2 right-2 z-20 bg-[#b265ff] text-white font-openSans font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md pointer-events-none">
                            FREE
                          </span>
                          <img
                            src={gift.image}
                            alt={gift.name}
                            className="w-full h-full object-cover rounded-xl block pointer-events-none"
                          />
                        </div>

                        <span className="block font-openSans text-xs text-neutral-400 line-through font-semibold mb-1">
                          Worth {gift.regularPrice}
                        </span>
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
                        <span>{pro}</span>
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
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}

          {/* INTERACTIVE LOAD MORE / SHOW LESS BUTTON */}
          <div className="pt-2 text-center">
            {visibleCount < LED_MASK_PRODUCTS.length ? (
              <button
                type="button"
                onClick={() => setVisibleCount(LED_MASK_PRODUCTS.length)}
                className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-[#181818] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                <span>Load More</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setVisibleCount(5);
                  const el = document.getElementById("product-5");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-neutral-300 hover:border-[#181818] bg-white text-[#181818] font-openSans font-bold text-sm uppercase tracking-wide transition-colors cursor-pointer shadow-xs"
              >
                <span>Show Less</span>
              </button>
            )}
          </div>
        </div>

        {/* 8. DERMATOLOGIST'S VIDEO & FINAL VERDICT */}
        <section className="mt-20 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#181818] shadow-lg relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
              Consultant Dermatologist Verdict
            </span>
            <h2 className="font-lato text-3xl sm:text-4xl font-extrabold text-[#181818] mt-1">
              Dr. Shannon&apos;s Final Recommendation
            </h2>
            <div className="w-16 h-1 bg-[#181818] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video Box */}
            <div className="relative">
              <div className="relative mx-auto max-w-[280px] sm:max-w-xs rounded-2xl overflow-hidden border border-[#e7e7e7] bg-black shadow-xl aspect-[9/16]">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover block"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/assets/buudy-dr-shannon-poster.jpg"
                  aria-label="Dr. Shannon walkthrough of the Buudy 7 Colour LED Mask"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src="/assets/buudy-dr-shannon-verdict.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {!isVideoPlaying && (
                  <button
                    type="button"
                    onClick={handlePlayVideo}
                    aria-label="Play Dr. Shannon walkthrough video"
                    className="absolute inset-0 flex items-center justify-center bg-transparent group cursor-pointer focus:outline-none"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#181818] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play size={28} fill="currentColor" className="ml-1 text-[#181818]" />
                    </span>
                  </button>
                )}

                <div className="pointer-events-none absolute top-3 left-3 bg-[#181818]/90 text-white text-[11px] font-openSans font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs z-10">
                  Clinical Walkthrough
                </div>
              </div>

              <p className="mt-3.5 text-center font-lora text-xs sm:text-sm text-neutral-500 max-w-xs mx-auto font-medium">
                Watch the light modes, neck fitting, eye protection, and tap controls in action.
              </p>
            </div>

            {/* Verdict Summary Box */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="inline-block font-openSans text-xs uppercase tracking-widest font-extrabold text-[#7e22ce] mb-1">
                #1 Rated System for UK Homes
              </span>
              <h3 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mb-2">
                Buudy 7 Colour LED Mask
              </h3>

              <div className="font-lato text-3xl font-extrabold text-[#181818] mb-4">
                Now £179 <span className="text-base font-lora text-neutral-400 font-normal line-through">£449</span>
              </div>

              <p className="font-lora text-base sm:text-[18px] text-[#181818] leading-[1.8] mb-6 font-normal">
                &ldquo;Buudy outclasses alternatives by providing a full 7-colour medical spectrum plus 830nm
                near-infrared with standard built-in neck coverage. At £179 with an included 90-day guarantee and £128
                free gifts, it represents the soundest investment for UK phototherapy in 2026.&rdquo;
              </p>

              {/* Trust Badge */}
              <div className="bg-[#fafafa] rounded-2xl p-4 border border-[#e7e7e7] mb-6 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-lato font-extrabold text-lg text-[#181818]">Rated 4.9 / 5</span>
                  <GoldStars rating={5} size={18} />
                </div>
                <span className="font-lora text-xs text-neutral-600 font-medium">
                  Trusted by 16,000+ UK users &bull; 90-Day Money-Back Risk-Free Guarantee
                </span>
              </div>

              <a
                href={BUUDY_PRODUCT_URL}
                className="w-full py-4 px-8 rounded-xl bg-[#000000] hover:bg-[#b265ff] text-white font-openSans font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
              >
                <span>Check Official Availability &amp; Claim Offer</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* 9. SIDE-BY-SIDE COMPARISON TABLE MATRIX (Clean Minimal Styling) */}
        <section className="mt-20 bg-white rounded-3xl p-3 sm:p-5 lg:p-6 border border-[#e7e7e7] shadow-sm overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="font-openSans text-xs uppercase tracking-widest text-[#7e22ce] font-bold">
              Complete Side-by-Side Matrix
            </span>
            <h2 className="font-lato text-2xl sm:text-3xl font-extrabold text-[#181818] mt-1">
              Top 10 LED Face Masks at a Glance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[700px] lg:min-w-0 lg:table-fixed">
              <thead>
                <tr className="border-b-2 border-[#e7e7e7] text-neutral-500 font-openSans text-[11px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[17%]">Device Model</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[17%]">Optical Spectrum</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[12%]">Neck Coverage</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[13%]">Controls</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[15%]">Money-Back Trial</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold lg:w-[10%]">Price</th>
                  <th className="py-2.5 px-2 sm:px-2.5 font-extrabold text-right lg:w-[16%]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {LED_MASK_PRODUCTS.map((p) => (
                  <tr
                    key={p.id}
                    className={p.isWinner ? "bg-[#fdf4ff]/60 font-semibold" : "hover:bg-[#fafafa]"}
                  >
                    <td className="py-3 px-2 sm:px-2.5">
                      <div className="flex items-center gap-2">
                        <img
                          src={p.image}
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
                    <td className="py-3 px-2 sm:px-2.5 text-[#181818]">
                      <div className="flex items-center gap-1 mb-0.5">
                        {p.specSheet.spectrumDots.map((dot, dIdx) => (
                          <span
                            key={dIdx}
                            className="h-2.5 w-2.5 rounded-full border border-neutral-300 shadow-xs"
                            style={{ backgroundColor: dot.color }}
                            title={dot.name}
                          />
                        ))}
                      </div>
                      <span className="font-lora text-[11px] sm:text-xs text-neutral-600 block">{p.specSheet.wavelengths}</span>
                    </td>
                    <td className="py-3 px-2 sm:px-2.5">
                      {p.isWinner ? (
                        <span className="inline-flex items-center gap-1 text-[#7e22ce] font-openSans font-bold text-xs sm:text-sm whitespace-nowrap">
                          <Check size={15} strokeWidth={3} /> Included Free
                        </span>
                      ) : (
                        <span className="font-lora text-neutral-500 text-xs">{p.specSheet.neckIncluded}</span>
                      )}
                    </td>
                    <td className="py-3 px-2 sm:px-2.5 font-lora text-neutral-700 text-xs sm:text-sm">{p.specSheet.cordless}</td>
                    <td className="py-3 px-2 sm:px-2.5 font-lora text-neutral-700 text-xs sm:text-sm">{p.specSheet.trial}</td>
                    <td className="py-3 px-2 sm:px-2.5 font-lato font-extrabold text-[#181818] text-base sm:text-lg whitespace-nowrap">
                      {p.price}
                    </td>
                    <td className="py-3 px-2 sm:px-2.5 text-right whitespace-nowrap">
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
            Disclaimer: The information on Best Product Verdict is intended for educational and consumer research
            purposes. Phototherapy devices should be used strictly in accordance with manufacturer guidelines. If you have
            an active medical condition or take photosensitising medications, consult your GP or dermatologist prior to
            starting treatment.
          </p>

          <p className="text-neutral-400 text-[11px] font-openSans">
            &copy; {new Date().getFullYear()} Best Product Verdict UK. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
