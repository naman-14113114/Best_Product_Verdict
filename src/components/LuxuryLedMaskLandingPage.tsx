"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
  Clock,
  Award,
  Timer,
  Play,
  ArrowRight,
} from "lucide-react";
import {
  BUUDY_PRODUCT_URL,
  EVALUATION_CRITERIA,
  LED_MASK_PRODUCTS,
  LED_FAQS,
  type LedMaskProduct,
} from "@/data/ledMaskData";
import {
  type LedMaskGuide,
  type LedMaskComparisonRow,
  type LedMaskBuyerBlock,
  type LedMaskFAQ,
} from "@/data/ledMaskGuidesData";

/* Helper to format UK dynamic date (e.g. "19 November 2026") */
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
      "July", "August", "September", "October", "November", "December",
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}

/* UK Midnight Countdown Timer Hook */
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
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        });
      } catch {
        // Fallback gracefully
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}

/* Outbound Tracking / Attribution handler */
const attributionQueryKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "msclkid",
  "gclid",
  "fbclid",
];

function handleOutboundClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  setLoadingTarget: (target: string) => void,
  target: string,
) {
  try {
    const destination = new URL(event.currentTarget.href, window.location.href);
    if (destination.hostname.includes("buudy.co.uk") || destination.hostname.includes("buudy.com")) {
      const current = new URL(window.location.href);
      attributionQueryKeys.forEach((key) => {
        const value = current.searchParams.get(key);
        if (value && !destination.searchParams.has(key)) {
          destination.searchParams.set(key, value);
        }
      });
      event.currentTarget.href = destination.toString();
    }
    setLoadingTarget(target);
  } catch {
    // Non-blocking fallback
  }
}

/* Signature Trustpilot Green Stars (#00b67a on #d7e5df background) */
function TrustpilotStars({ rating = 5, size = 22 }: { rating?: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
      style={{ gap: "4px" }}
    >
      {[...Array(5)].map((_, i) => {
        const starRating = i + 1;
        const fillPercent =
          rating >= starRating
            ? 100
            : rating > i
            ? Math.round((rating - i) * 100)
            : 0;

        return (
          <span
            key={i}
            className="relative inline-block shrink-0"
            style={{ width: size, height: size }}
          >
            {/* Background empty star */}
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              className="absolute inset-0 text-[#d7e5df]"
            >
              <polygon
                points="12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25"
                fill="currentColor"
              />
            </svg>
            {/* Filled overlay */}
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <svg
                viewBox="0 0 24 24"
                width={size}
                height={size}
                className="max-w-none text-[#00b67a]"
              >
                <polygon
                  points="12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25"
                  fill="currentColor"
                />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

/* Official Emerald CTA Button (matching Best Product Verdict reference mask page) */
function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  children,
  className = "",
  size = "default",
}: {
  href: string;
  targetId?: string;
  loadingTarget?: string | null;
  setLoadingTarget?: (target: string) => void;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "compact";
}) {
  const isLoading = Boolean(targetId && loadingTarget === targetId);
  const isCompact = size === "compact";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={(event) => {
        if (targetId && setLoadingTarget) {
          handleOutboundClick(event, setLoadingTarget, targetId);
        }
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] cursor-pointer ${
        isCompact
          ? "px-5 py-2.5 text-sm sm:text-base"
          : "px-8 py-4 text-base sm:text-lg md:text-xl"
      } ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-5 w-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
          <span className="text-sm uppercase tracking-wide">Opening Official Store...</span>
        </span>
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            <span>{children}</span>
            <ChevronRight
              className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

/* Competitor Action Button (Clean Neutral Slate) */
function CompetitorButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-sm transition-all duration-200 active:scale-[0.99] px-6 py-3.5 text-center text-sm sm:text-base w-full ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span>{children}</span>
        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-slate-500" />
      </span>
    </a>
  );
}

/* Metric Progress Bar (Emerald Green Fill matching Best Verdict Mask Page) */
function MetricBar({ label, value }: { label: string; value: number }) {
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
      <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
        <span>{label}</span>
        <span className="font-bold text-emerald-600">{value}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

/* 10 Evaluation Criteria Box */
function EvaluationCriteriaSection({ criteria }: { criteria?: string[] }) {
  const list = criteria && criteria.length > 0 ? criteria : EVALUATION_CRITERIA;

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
      <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        We evaluated LED face masks based on 10 criteria
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {list.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, we have thoroughly tested{" "}
        <strong>18 different LED face masks</strong>. Based on{" "}
        <strong>hands-on evaluations</strong>, insights from{" "}
        <strong>board-certified dermatologists</strong>, and{" "}
        <strong>thousands of consumer reviews</strong>, the following models stood out as the best in terms of{" "}
        <strong>performance, comfort, safety, and affordability</strong>.
      </p>
    </div>
  );
}

/* Free Gifts Box (£128 Value with bouncing FREE badges matching reference page) */
function FreeGiftsBox({
  loadingTarget,
  setLoadingTarget,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  return (
    <div className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
          <span className="text-lg">💡</span> Editor&apos;s Tip
        </div>

        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
          Active Offer Found: £128 in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            FREE GIFTS
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          While doing our research, we found that Buudy is currently running a{" "}
          <span className="bg-[#fef3c7] text-slate-900 font-extrabold px-2 py-0.5 rounded">
            Black Friday Early Access Sale
          </span>{" "}
          where you can get these premium accessories bundled for free with every mask purchase.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
          {/* 1. Premium Travel Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href={BUUDY_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Buudy LED Mask offer with free Premium Travel Box"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £39
              </span>
              <img
                src="/img/93-w.webp"
                alt="Premium Travel Box"
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Premium Travel Box
            </p>
          </div>

          {/* 2. Buudy LED Torch */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href={BUUDY_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Buudy LED Mask offer with free LED Torch"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £70
              </span>
              <img
                src="/img/35-w.webp"
                alt="Buudy LED Torch"
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Buudy LED Torch
            </p>
          </div>

          {/* 3. Expert Skincare Guide */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href={BUUDY_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Buudy LED Mask offer with free Expert Skincare Guide"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £19
              </span>
              <img
                src="/img/94-w.webp"
                alt="Expert Skincare Guide"
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Expert Skincare Guide
            </p>
          </div>
        </div>

        {/* Check Availability CTA */}
        <a
          href={BUUDY_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleOutboundClick(e, setLoadingTarget, "free-gifts-cta")}
          className="relative block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] overflow-hidden group border-2 border-blue-500 cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
            Check Availability
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </a>
      </div>
    </div>
  );
}

/* Individual Product Card (Matching Best LED Mask Reference Page 2-Column Split) */
function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
}: {
  product: LedMaskProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isWinner = product.isWinner;

  return (
    <article
      id={`product-${product.id}`}
      data-led-product={product.id}
      className={`relative bg-white rounded-3xl shadow-sm ${
        isWinner
          ? "border border-emerald-500 ring-4 ring-emerald-50"
          : "border border-slate-200"
      } pt-10 md:pt-10 p-6 md:p-10 scroll-mt-6`}
    >
      {/* Top Center Award Ribbon for Winner */}
      {isWinner && (
        <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
          <Award size={16} className="md:w-[18px] md:h-[18px]" />
          #1 Editor&apos;s Choice
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
        {/* Left Column (lg:col-span-4): Sticky on Desktop */}
        <aside className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
            {/* Mobile Title */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3 font-serif">
              {product.rank} {product.name}
            </h2>

            {/* Product Image */}
            <div className="relative w-full mb-3">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={(e) =>
                  handleOutboundClick(
                    e,
                    setLoadingTarget,
                    `product-img-${product.id}`
                  )
                }
                className="block w-full group"
                aria-label={`View ${product.name}`}
              >
                <img
                  alt={product.name}
                  src={product.image}
                  loading={isWinner ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>

            {/* Price & Rating */}
            <div className="text-center mb-2 lg:mb-3 w-full">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="text-3xl font-extrabold text-slate-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-slate-400 line-through font-medium">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {isWinner && (
                <div className="flex justify-center mb-1.5">
                  <span className="inline-flex items-center gap-1 rounded-none bg-slate-900 text-[#f9ad26] border border-[#f9ad26]/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                    BLACK FRIDAY EARLY ACCESS
                  </span>
                </div>
              )}

              {/* Trustpilot Green Stars */}
              <div className="flex items-center justify-center mb-1">
                <TrustpilotStars rating={product.rating} size={22} />
              </div>

              <p className="text-sm font-medium text-slate-500">
                Overall rating {product.ratingDisplay} ({product.reviewCount} Reviews)
              </p>
            </div>

            {/* Desktop CTA Button */}
            <div className="w-full hidden lg:block">
              {isWinner ? (
                <OfficialButton
                  href={product.link}
                  targetId={`product-desktop-${product.id}`}
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  className="w-full"
                >
                  Official Website
                </OfficialButton>
              ) : (
                <CompetitorButton href={product.link}>
                  {product.ctaText || "Check Current UK Listing"}
                </CompetitorButton>
              )}
            </div>
          </div>
        </aside>

        {/* Right Column (lg:col-span-8): Title, Narrative, Metrics, Pros/Cons, Gifts */}
        <div className="lg:col-span-8">
          {/* Desktop Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={isWinner ? "hover:text-emerald-600 transition-colors" : "hover:text-slate-700 transition-colors"}
            >
              {product.rank} {product.name}
            </a>
          </h2>

          {/* Narrative Prose */}
          <div className="prose prose-slate prose-lg max-w-none mb-8 text-slate-600 leading-relaxed space-y-4">
            {product.description.map((para, pIdx) => (
              <p
                key={pIdx}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
            <div className="space-y-3">
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.id}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Pros */}
            <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
              <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl font-serif">
                Pros
              </h4>
              <ul className="space-y-4">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                    <Check className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <span dangerouslySetInnerHTML={{ __html: pro }} />
                      {/* For Buudy: Add 7-colour spectrum pills below colour item */}
                      {isWinner && idx === 1 && (
                        <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                          {[
                            { name: "Red", color: "#EF4444" },
                            { name: "Blue", color: "#3B82F6" },
                            { name: "Green", color: "#10B981" },
                            { name: "Cyan", color: "#06B6D4" },
                            { name: "Yellow", color: "#F59E0B" },
                            { name: "Purple", color: "#A855F7" },
                            { name: "White", color: "#FFFFFF" },
                            { name: "Near-Infrared", color: "#881337" },
                          ].map((c) => (
                            <span
                              key={c.name}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-xs"
                            >
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0 border border-slate-300"
                                style={{ backgroundColor: c.color }}
                              />
                              <span className="text-[11px] font-medium">{c.name}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-100">
              <h4 className="bg-red-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl font-serif">
                Cons
              </h4>
              <ul className="space-y-4">
                {product.cons.map((con, idx) => (
                  <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span dangerouslySetInnerHTML={{ __html: con }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* £128 Free Gifts Box for #1 Buudy */}
          {isWinner && (
            <FreeGiftsBox
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          )}

          {/* Mobile CTA Button */}
          <div className="w-full mt-8 lg:hidden">
            {isWinner ? (
              <OfficialButton
                href={product.link}
                targetId={`product-mobile-${product.id}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                className="w-full"
              >
                Official Website
              </OfficialButton>
            ) : (
              <CompetitorButton href={product.link}>
                {product.ctaText || "Check Current UK Listing"}
              </CompetitorButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* Head-to-Head Specification Matrix (for VS Pages & Guides) */
function HeadToHeadMatrix({ guide }: { guide: LedMaskGuide }) {
  if (!guide.comparisonRows || guide.comparisonRows.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200 shadow-sm mb-16 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
          Clinical Specification Matrix
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          {guide.headline}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Side-by-side benchmark comparison across optical wavelengths, neck treatment modules, irradiance density, and clinical UK pricing.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b-2 border-slate-200 text-slate-700 bg-slate-50">
              <th className="py-3 px-4 font-extrabold w-[25%]">Feature / Metric</th>
              <th className="py-3 px-4 font-extrabold w-[25%] bg-emerald-500 text-white text-center">
                Buudy 7 Colour LED Mask
              </th>
              <th className="py-3 px-4 font-extrabold w-[25%] text-center">Comparison Benchmark</th>
              <th className="py-3 px-4 font-extrabold w-[25%]">Why It Matters in Practice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {guide.comparisonRows.map((row: LedMaskComparisonRow, rIdx: number) => (
              <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                <td className="py-3.5 px-4 font-bold text-emerald-900 bg-emerald-50/50 text-center">
                  {row.buudy}
                </td>
                <td className="py-3.5 px-4 text-slate-700 text-center">{row.competitor}</td>
                <td className="py-3.5 px-4 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  {row.whyItMatters}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* Buyer Guidance Blocks Section */
function BuyerGuidanceBlocks({ guide }: { guide: LedMaskGuide }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="space-y-6 mb-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
          Clinical Analysis &amp; Buyer Guidance
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          What UK Patients &amp; Consumers Need to Know
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {guide.buyerBlocks.map((block: LedMaskBuyerBlock, bIdx: number) => (
          <div
            key={bIdx}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs"
          >
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3 font-serif">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-white text-xs font-bold shrink-0">
                {bIdx + 1}
              </span>
              {block.title}
            </h4>
            <p className="text-slate-700 leading-relaxed text-base md:text-[17px]">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Dr. Shannon Video Section (Walkthrough Video Player) */
function DrShannonVideoCard({
  guide,
  loadingTarget,
  setLoadingTarget,
}: {
  guide?: LedMaskGuide;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => setIsVideoPlaying(false));
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm mb-16">
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Dermatologist&apos;s Clinical Verdict
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 font-serif">
          {guide?.drShannonVerdict?.name
            ? `${guide.drShannonVerdict.name}'s Recommendation`
            : "Dr. Shannon's Final Recommendation"}
        </h3>
        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Column: Video Player */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-xs rounded-2xl overflow-hidden border border-slate-200 bg-black shadow-xl aspect-[9/16]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover block"
              controls
              playsInline
              preload="metadata"
              poster="/assets/buudy-dr-shannon-poster.jpg?v=3"
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
                className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer focus:outline-none"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play size={28} fill="currentColor" className="ml-1 text-white" />
                </span>
              </button>
            )}

            <div className="pointer-events-none absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs z-10">
              Clinical Walkthrough
            </div>
          </div>
        </div>

        {/* Right Column: Research & Reviews */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 font-serif">
            Verified Clinical Review
          </h4>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4">
            <TrustpilotStars rating={4.9} size={20} />
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Trusted by 16,000+ UK users &bull; 90-Day Money-Back Trial
            </span>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 mb-6">
            {guide?.drShannonVerdict ? (
              <>
                <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic font-medium text-slate-800 bg-emerald-50/50 rounded-r-lg my-2 text-left">
                  &ldquo;{guide.drShannonVerdict.quote}&rdquo;
                </blockquote>
                <p>{guide.drShannonVerdict.clinicalRationale}</p>
                {guide.drShannonVerdict.recommendation && (
                  <p className="font-semibold text-slate-900 pt-1 text-left">
                    Clinical Recommendation: {guide.drShannonVerdict.recommendation}
                  </p>
                )}
              </>
            ) : (
              <>
                <p>
                  With <strong>over a decade of clinical dermatological practice</strong>, Dr. Shannon
                  scrutinised <strong>18 leading UK LED masks over 200+ testing hours</strong>. She evaluated
                  spectral wavebands, optical irradiance, facial ergonomics, eye safety shields, integrated neck
                  treatment, and authentic long-term patient outcomes.
                </p>
                <p className="italic text-slate-800 bg-slate-50 p-3.5 sm:p-4 rounded-xl border-l-4 border-emerald-500 border border-slate-100 shadow-xs text-sm sm:text-[15px] leading-relaxed">
                  &ldquo;My primary finding was that exorbitant price tags and celebrity sponsorship do not ensure
                  superior phototherapy. The standout device is the one that delivers scientifically verified
                  wavelengths with complete face and neck coverage in a routine comfortable enough for daily home
                  use.&rdquo;
                </p>
              </>
            )}
          </div>

          <OfficialButton
            href={BUUDY_PRODUCT_URL}
            targetId="dr-shannon-video-cta"
            loadingTarget={loadingTarget}
            setLoadingTarget={setLoadingTarget}
            className="w-full"
          >
            Check Official Availability &amp; Claim Offer
          </OfficialButton>
        </div>
      </div>
    </div>
  );
}

/* Comparison Table (Comparing Top Models Side-by-Side) */
function SideBySideComparisonTable() {
  const [showAllColumns, setShowAllColumns] = useState(false);

  return (
    <section className="bg-white rounded-3xl p-5 md:p-8 border border-slate-200 shadow-sm mb-16 overflow-hidden">
      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-serif text-center">
        Top 5 LED Face Masks Side-by-Side Comparison
      </h3>
      <p className="text-slate-600 text-sm sm:text-base text-center mb-6">
        Technical specifications, light wavelengths, included coverage, and ownership value compared across the UK&apos;s leading 2026 models.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-800">
              <th className="py-3.5 px-3 font-extrabold w-[20%]">Feature / Metric</th>
              <th className="py-3.5 px-3 font-extrabold w-[24%] bg-emerald-50/60 border-l border-r border-emerald-200 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mb-1">
                    #1 WINNER
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-slate-900">
                    Buudy 7 Colour
                  </span>
                  <span className="text-xs text-emerald-600 font-extrabold">£179 (was £449)</span>
                </div>
              </th>
              <th className="py-3.5 px-3 font-extrabold w-[19%] text-center">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-sm sm:text-base font-bold text-slate-900">CurrentBody</span>
                  <span className="text-xs text-slate-500 font-medium">£399.99</span>
                </div>
              </th>
              <th className="py-3.5 px-3 font-extrabold w-[19%] text-center">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-sm sm:text-base font-bold text-slate-900">Omnilux Contour</span>
                  <span className="text-xs text-slate-500 font-medium">£348</span>
                </div>
              </th>
              <th className="py-3.5 px-3 font-extrabold w-[18%] text-center">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-sm sm:text-base font-bold text-slate-900">Shark CryoGlow</span>
                  <span className="text-xs text-slate-500 font-medium">£299.99</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">Light Spectrum / Modes</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                7 Colours + 830nm NIR
              </td>
              <td className="py-3 px-3 text-center text-slate-700">Red &amp; NIR (2 Modes)</td>
              <td className="py-3 px-3 text-center text-slate-700">Red &amp; NIR (2 Modes)</td>
              <td className="py-3 px-3 text-center text-slate-700">Red &amp; Blue (4 Modes)</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">Integrated Neck Coverage</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                <Check className="inline text-emerald-600 mr-1" size={16} /> Yes (Included)
              </td>
              <td className="py-3 px-3 text-center text-slate-500">No (£679.99 Combo)</td>
              <td className="py-3 px-3 text-center text-slate-500">No (£348 Extra)</td>
              <td className="py-3 px-3 text-center text-slate-500">No (Face Only)</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">LED Diode Count</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                192 Precision Diodes
              </td>
              <td className="py-3 px-3 text-center text-slate-700">132 LEDs</td>
              <td className="py-3 px-3 text-center text-slate-700">132 LEDs</td>
              <td className="py-3 px-3 text-center text-slate-700">Unspecified</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">Cordless Hands-Free</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                <Check className="inline text-emerald-600 mr-1" size={16} /> Yes (Tap Tech)
              </td>
              <td className="py-3 px-3 text-center text-slate-500">Wired Controller</td>
              <td className="py-3 px-3 text-center text-slate-500">Wired Controller</td>
              <td className="py-3 px-3 text-center text-slate-700">Rechargeable Rigid</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">Free Deluxe Gifts</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                £128 Bundle (3 Gifts)
              </td>
              <td className="py-3 px-3 text-center text-slate-500">None</td>
              <td className="py-3 px-3 text-center text-slate-500">None</td>
              <td className="py-3 px-3 text-center text-slate-500">None</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-bold text-slate-900">Risk-Free Trial</td>
              <td className="py-3 px-3 text-center bg-emerald-50/40 border-l border-r border-emerald-200 font-bold text-emerald-800">
                90-Day Money-Back
              </td>
              <td className="py-3 px-3 text-center text-slate-700">60-Day (10% Fee)</td>
              <td className="py-3 px-3 text-center text-slate-700">30-Day Guarantee</td>
              <td className="py-3 px-3 text-center text-slate-700">30-Day Guarantee</td>
            </tr>
            <tr className="bg-slate-50/80 font-bold">
              <td className="py-3 px-3 text-slate-900">Final Price</td>
              <td className="py-3 px-3 text-center bg-emerald-100/50 border-l border-r border-emerald-200 text-emerald-900 text-base">
                £179
              </td>
              <td className="py-3 px-3 text-center text-slate-800 text-base">£399.99</td>
              <td className="py-3 px-3 text-center text-slate-800 text-base">£348</td>
              <td className="py-3 px-3 text-center text-slate-800 text-base">£299.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* FAQ Accordion */
function FaqSection({ faqs }: { faqs?: LedMaskFAQ[] }) {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true });
  const list = faqs && faqs.length > 0 ? faqs : LED_FAQS;

  const toggle = (idx: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm mb-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Frequently Asked Questions
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-2">
          Everything You Need to Know About LED Masks
        </h3>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {list.map((faq, idx) => {
          const isOpen = Boolean(openIndices[idx]);
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg font-serif">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* Floating Mobile Bottom Sticky CTA */
function MobileStickyBottomBar({
  loadingTarget,
  setLoadingTarget,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
      <a
        href={BUUDY_PRODUCT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => handleOutboundClick(e, setLoadingTarget, "mobile-sticky-bottom")}
        className="relative w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap overflow-hidden group cursor-pointer"
      >
        <span className="relative z-10">Take me to the winning LED Mask</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
      </a>
    </div>
  );
}

/* =========================================================================
   MAIN COMPONENT: LuxuryLedMaskLandingPage
   ========================================================================= */
export function LuxuryLedMaskLandingPage({
  guide,
  showHeroBanner,
}: {
  guide?: LedMaskGuide;
  showHeroBanner?: boolean;
} = {}) {
  const [ukDate, setUkDate] = useState<string>(getUkFormattedDate());
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const displayHeroBanner = showHeroBanner !== undefined ? showHeroBanner : true;

  useEffect(() => {
    setUkDate(getUkFormattedDate());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0 antialiased selection:bg-emerald-500 selection:text-white">
      {/* 1. TOP EMERALD NOTIFICATION BANNER (Exact reference match) */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Guide battle category badge if present */}
          {guide?.cardCode && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/60 border border-emerald-400 text-white text-xs uppercase font-extrabold tracking-wider mb-3">
              <Award size={14} className="text-yellow-300" />
              <span>{guide.cardCode}</span>
            </div>
          )}

          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">
              {guide ? guide.headline : "Best LED Face Mask"}
            </span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <svg
                aria-label="United Kingdom flag"
                className="h-5 w-8 overflow-hidden rounded-[3px] border border-white/40 shadow-sm md:h-6 md:w-9"
                role="img"
                viewBox="0 0 38 24"
              >
                <rect fill="#012169" height="24" width="38" />
                <path d="M0 0 38 24M38 0 0 24" stroke="#fff" strokeWidth="5" />
                <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" strokeWidth="2" />
                <path d="M19 0v24M0 12h38" stroke="#fff" strokeWidth="8" />
                <path d="M19 0v24M0 12h38" stroke="#c8102e" strokeWidth="4" />
              </svg>
              <span>United Kingdom - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 className="text-white shrink-0" size={20} />
            <span>Last updated – <span>{ukDate}</span></span>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL HEADER & DR. SHANNON PROFILE CARD */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Hero Banner Graphic */}
          {displayHeroBanner && (
            <img
              alt={guide?.headline || "Top LED masks comparison for the UK"}
              className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src={guide?.heroImage || "/assets/led-mask-reference-20261027/TOP 5 LED Mask uk.png"}
            />
          )}

          {/* Dr. Shannon Certified Dermatologist Card */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <img
                  alt="Dr. Shannon"
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                  src="/img/dr-shannon.png"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900 font-serif">
                    Dr. Shannon
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    Certified Dermatologist
                  </p>
                </div>
              </div>

              {/* Bio & Clinical Quote */}
              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 space-y-3">
                {guide?.drShannonVerdict ? (
                  <>
                    <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic font-medium text-slate-800 bg-emerald-50/50 rounded-r-lg my-2 text-left">
                      &ldquo;{guide.drShannonVerdict.quote}&rdquo;
                    </blockquote>
                    <p>{guide.drShannonVerdict.clinicalRationale}</p>
                    {guide.drShannonVerdict.recommendation && (
                      <p className="font-semibold text-slate-900 pt-1 text-left">
                        <strong>Clinical Recommendation:</strong> {guide.drShannonVerdict.recommendation}
                      </p>
                    )}
                  </>
                ) : (
                  <p>
                    With 10+ years of experience in skincare and beauty technology,{" "}
                    <strong className="text-slate-900">Dr. Shannon</strong> is a certified dermatologist and
                    beauty technology expert. She reviewed 18 popular United Kingdom LED face mask options over
                    200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment,
                    usability, reviews, price, and guarantees. Her biggest finding was simple: the most expensive
                    mask was not always the best choice. The strongest options used the right wavelengths, gave even
                    face-and-neck coverage, and were easy enough to use consistently at home.
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
        {/* Executive Summary / Editorial Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          {guide?.intro && guide.intro.length > 0 ? (
            guide.intro.map((para: string, pIdx: number) => (
              <p key={pIdx} className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {para}
              </p>
            ))
          ) : (
            <>
              <p>
                LED face masks have exploded in the UK, but the market is confusing. Prices range from{" "}
                <strong>£100 to £600+</strong>, and many brands make almost identical claims about collagen,
                acne, redness, and anti-ageing results.
              </p>
              <p>
                So we tested <strong>18 of the most popular LED masks</strong> over{" "}
                <strong>200+ hours</strong>, comparing wavelengths, light coverage, comfort, eye safety, neck
                treatment, ease of use, reviews, price, and guarantees.
              </p>
              <p>
                The biggest finding was simple: a higher price did not always mean better results. The best masks
                used the right wavelengths, gave even face and neck coverage, and were easy enough to use
                consistently at home.
              </p>
              <p>
                Below, we rank the LED masks that actually stood out, including the one we believe offers the
                strongest balance of results, safety, comfort, and value for UK buyers.
              </p>
            </>
          )}
        </div>

        {/* 4. 10 EVALUATION CRITERIA */}
        <EvaluationCriteriaSection />

        {/* 5. GUIDE-SPECIFIC HEAD-TO-HEAD MATRIX (for VS pages) */}
        {guide && <HeadToHeadMatrix guide={guide} />}

        {/* 6. GUIDE-SPECIFIC BUYER GUIDANCE BLOCKS */}
        {guide && <BuyerGuidanceBlocks guide={guide} />}

        {/* 7. DR. SHANNON WALKTHROUGH VIDEO CARD */}
        <DrShannonVideoCard
          guide={guide}
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
        />

        {/* 8. RANKED PRODUCT CARDS (#1 Buudy to #10) */}
        <div className="space-y-16">
          {LED_MASK_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        {/* 9. TOP 5 COMPARISON TABLE */}
        <div className="mt-16">
          <SideBySideComparisonTable />
        </div>

        {/* 10. FAQS SECTION */}
        <div className="mt-16">
          <FaqSection faqs={guide?.faqs} />
        </div>
      </main>

      {/* 11. MOBILE BOTTOM STICKY CTA */}
      <MobileStickyBottomBar
        loadingTarget={loadingTarget}
        setLoadingTarget={setLoadingTarget}
      />

      {/* 12. BUUDY EXIT POPUP SCRIPT */}
      <Script
        id="buudy-exit-popup"
        src="/assets/buudy-exit-popup-20261104.js"
        data-popup-site="bestproductverdict"
        strategy="afterInteractive"
      />
    </div>
  );
}
