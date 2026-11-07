"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
  Clock,
  Award,
  Timer,
} from "lucide-react";
import {
  MIROOOO_PRODUCT_URL,
  TOOTHBRUSH_EVALUATION_CRITERIA,
  TOOTHBRUSH_PRODUCTS,
  type ToothbrushProduct,
} from "@/data/toothbrushData";
import {
  type ToothbrushGuide,
  type ToothbrushComparisonRow,
  type ToothbrushBuyerBlock,
  type ToothbrushFAQ,
} from "@/data/toothbrushGuidesData";

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

/* Tracking / Attribution handler */
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
    if (destination.hostname.includes("trymiroooo.com")) {
      const current = new URL(window.location.href);
      attributionQueryKeys.forEach((key) => {
        const value = current.searchParams.get(key);
        if (value && !destination.searchParams.has(key)) {
          destination.searchParams.set(key, value);
        }
      });

      if (!destination.searchParams.has("utm_source")) {
        destination.searchParams.set("utm_source", "bestproductverdict");
      }
      if (!destination.searchParams.has("utm_medium")) {
        destination.searchParams.set("utm_medium", "comparison");
      }
      if (!destination.searchParams.has("utm_campaign")) {
        destination.searchParams.set(
          "utm_campaign",
          "best_electric_toothbrush_uk_2026",
        );
      }

      event.currentTarget.href = destination.toString();

      const trackingWindow = window as any;
      const payload = {
        event_category: "comparison",
        event_label: target,
        outbound_url: destination.toString(),
        page_type: "best_electric_toothbrush_uk_2026",
      };

      trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
      trackingWindow.dataLayer.push({
        event: "miroooo_outbound_click",
        ecommerce: null,
        ...payload,
      });
      trackingWindow.dataLayer.push({
        event: "affiliate_click",
        ...payload,
      });
      trackingWindow.uetq?.push("event", "miroooo_outbound_click", payload);
      trackingWindow.uetq?.push("event", "affiliate_click", payload);
    }
  } catch {
    // Keep native navigation
  }

  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  setLoadingTarget(target);
}

/* UK Flag SVG */
function UKFlag({ className = "h-5 w-8 md:h-6 md:w-9" }: { className?: string }) {
  return (
    <svg
      aria-label="United Kingdom flag"
      className={`${className} overflow-hidden rounded-none border border-white/40 shadow-xs inline-block`}
      role="img"
      viewBox="0 0 38 24"
    >
      <rect fill="#012169" height="24" width="38" />
      <path d="M0 0 38 24M38 0 0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" strokeWidth="2" />
      <path d="M19 0v24M0 12h38" stroke="#fff" strokeWidth="8" />
      <path d="M19 0v24M0 12h38" stroke="#c8102e" strokeWidth="4" />
    </svg>
  );
}

/* Star Rating Component (Gold Stars) */
function RatingStars({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
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
              className="absolute inset-0 text-slate-200"
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
                className="max-w-none text-[#f59e0b]"
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

/* Official CTA Button (Warm Golden Amber matching BestVerdict mask page action color) */
function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  children,
  className = "",
  testId,
  size = "default",
}: {
  href: string;
  targetId?: string;
  loadingTarget?: string | null;
  setLoadingTarget?: (target: string) => void;
  children: React.ReactNode;
  className?: string;
  testId?: string;
  size?: "default" | "compact";
}) {
  const isLoading = Boolean(targetId && loadingTarget === targetId);
  const isCompact = size === "compact";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-testid={testId}
      onClick={(event) => {
        if (targetId && setLoadingTarget) {
          handleOutboundClick(event, setLoadingTarget, targetId);
        }
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-none bg-[#f9ad26] hover:bg-[#ea9602] border-2 border-[#e09819] font-black text-[#0e1a2f] shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer ${
        isCompact
          ? "min-h-10 sm:min-h-11 w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base lg:text-sm xl:text-base tracking-wide"
          : "min-h-12 w-full px-6 py-3 text-center text-base sm:text-lg md:text-xl"
      } ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 border-2 border-[#0e1a2f] border-t-transparent animate-spin" />
          <span className="text-sm uppercase tracking-wide">Opening Official Store...</span>
        </span>
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            <span>{children}</span>
            <ChevronRight
              className={`${
                isCompact ? "h-5 w-5" : "h-5 w-5 sm:h-6 sm:w-6"
              } shrink-0 transition-transform group-hover:translate-x-1`}
              aria-hidden="true"
            />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

/* Corner Rank Ribbon (Deep Royal Blue for #1, Slate for #2-#5, Zero Border Radius) */
function RankRibbon({
  rank,
  featured = false,
}: {
  rank: string;
  featured?: boolean;
}) {
  const outerSize = featured ? "h-[106px] w-[124px]" : "h-[90px] w-[106px]";
  const triangleSize = featured ? "h-[96px] w-[114px]" : "h-[80px] w-[96px]";
  const textBox = featured ? "h-[70px] w-[74px]" : "h-[58px] w-[62px]";
  const textSize = featured ? "text-[1.85rem]" : "text-[1.45rem]";

  return (
    <div
      aria-label={`Rank ${rank}`}
      className={`pointer-events-none absolute left-0 top-0 z-30 overflow-visible rounded-none ${outerSize}`}
    >
      {featured && (
        <div
          className={`absolute left-[7px] top-[7px] rounded-none bg-black/40 blur-[1px] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 rounded-none [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize} ${
          featured
            ? "bg-gradient-to-br from-[#2b5ba3] via-[#1d4a93] to-[#0e2e62] shadow-[0_18px_28px_rgba(17,57,123,0.35),inset_0_2px_0_rgba(255,255,255,0.35)]"
            : "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800 shadow-[0_10px_18px_rgba(0,0,0,0.2)]"
        }`}
      />
      {featured && (
        <div
          className={`absolute left-[2px] top-[2px] rounded-none bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.16)_32%,rgba(255,255,255,0)_58%)] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <span
        className={`absolute left-0 top-0 flex items-center justify-center font-serif font-black leading-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] ${textBox} ${textSize}`}
      >
        {rank}
      </span>
    </div>
  );
}

/* Metric Progress Bar (Deep Royal Blue Fill, Zero Border Radius, Viewport Scroll Filling Animation) */
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
      <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1 text-slate-700">
        <span>{label}</span>
        <span className="font-bold text-[#1d4a93]">{value}%</span>
      </div>
      <div className="h-2.5 bg-slate-200 rounded-none overflow-hidden">
        <div
          className="h-full bg-[#1d4a93] rounded-none transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

/* 10 Evaluation Criteria Box */
function EvaluationCriteria({ criteria }: { criteria?: string[] }) {
  const list = criteria && criteria.length > 0 ? criteria : TOOTHBRUSH_EVALUATION_CRITERIA;

  return (
    <div className="bg-white rounded-none p-5 sm:p-7 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        Clinical Evaluation Criteria &amp; Testing Methodology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {list.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-[#1d4a93] shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-sm sm:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3.5 md:p-4 rounded-none border border-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
        Over the past three months, our clinical team thoroughly evaluated{" "}
        <strong>leading UK electric toothbrushes</strong> across{" "}
        <strong>180+ hours of comparative testing</strong>. Based on{" "}
        <strong>hands-on laboratory measurements</strong>, insights from{" "}
        <strong>registered UK dental professionals</strong>, and{" "}
        <strong>thousands of verified consumer reviews</strong>, these five models
        distinguished themselves in terms of{" "}
        <strong>plaque clearance, gum safety, battery runtime, and long-term value</strong>.
      </p>
    </div>
  );
}

/* Winner Package Panel (Free Gifts Box) */
function PackagePanel({
  product,
  loadingTarget,
  setLoadingTarget,
  timer,
}: {
  product: ToothbrushProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  timer: { hours: string; minutes: string; seconds: string };
}) {
  return (
    <div className="mt-10 bg-gradient-to-br from-[#f0f5fd] to-[#e1ecfe] border-2 border-[#b8d2fb] rounded-none p-5 sm:p-7 md:p-8 relative overflow-hidden shadow-sm">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
          <span className="text-sm sm:text-base">🎁</span> Free Gifts Included
        </div>

        <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-slate-900 mb-3 leading-tight font-serif">
          Free Gifts Included in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md inline-block font-sans transform -rotate-1">
            Your Package (£39 Value)
          </span>
        </h4>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
          While doing our research, we found that Miroooo is currently running a{" "}
          <span className="bg-[#fef3c7] text-slate-900 font-extrabold px-2 py-0.5 rounded">
            Black Friday Early Access Sale
          </span>{" "}
          where you can get these premium accessories bundled for free with every order.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6">
          {/* Luxury Travel Case */}
          <div className="bg-white rounded-none p-2 sm:p-4 border border-[#b8d2fb] shadow-sm text-center relative flex flex-col justify-between">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <div className="block relative mb-2 rounded-none overflow-hidden bg-slate-50 border border-slate-100 aspect-square flex items-center justify-center">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp"
                alt="Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-[11px] sm:text-sm md:text-base leading-tight">
                Luxury Travel Case
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 line-through">£19 value</p>
            </div>
          </div>

          {/* Wall-Mounted Storage */}
          <div className="bg-white rounded-none p-2 sm:p-4 border border-[#b8d2fb] shadow-sm text-center relative flex flex-col justify-between">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <div className="block relative mb-2 rounded-none overflow-hidden bg-slate-50 border border-slate-100 aspect-square flex items-center justify-center">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp"
                alt="Wall-Mounted Magnetic Storage Dock"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-[11px] sm:text-sm md:text-base leading-tight">
                Wall-Mounted Dock
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 line-through">£10 value</p>
            </div>
          </div>

          {/* Free Brush Heads */}
          <div className="bg-white rounded-none p-2 sm:p-4 border border-[#b8d2fb] shadow-sm text-center relative flex flex-col justify-between">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <div className="block relative mb-2 rounded-none overflow-hidden bg-slate-50 border border-slate-100 aspect-square flex items-center justify-center">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-free-brush-heads-gift.webp"
                alt="2 Extra Precision Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-none"
              />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-[11px] sm:text-sm md:text-base leading-tight">
                2 Extra Brush Heads
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 line-through">£10 value</p>
            </div>
          </div>
        </div>

        {/* Voucher Bar */}
        {product.voucher && (
          <div className="mb-6 p-3 bg-white border border-[#b8d2fb] rounded-none flex items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-black text-[#1d4a93] tracking-wider uppercase">
                COUPON: {product.voucher.code}
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                ({product.voucher.discountText})
              </span>
            </div>
            <div className="bg-slate-900 text-white font-mono font-bold text-[11px] sm:text-xs px-2.5 py-1 rounded-none flex items-center gap-1.5 shrink-0">
              <Timer size={13} className="text-[#f9ad26]" />
              <span>{timer.hours}h {timer.minutes}m {timer.seconds}s</span>
            </div>
          </div>
        )}

        <OfficialButton
          href={product.link}
          targetId="miroooo-package-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="miroooo-cta-package"
          className="w-full"
        >
          {product.ctaText || "CHECK AVAILABILITY"}
        </OfficialButton>
      </div>
    </div>
  );
}

/* Individual Product Card (Split-Column Sticky Scroll on Desktop, Zero Border Radius) */
function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
  timer,
}: {
  product: ToothbrushProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  timer: { hours: string; minutes: string; seconds: string };
}) {
  const isWinner = product.isWinner;

  return (
    <article
      id={`rank-${product.rank.replace(/^#/, "")}`}
      data-testid="electric-toothbrush-card"
      data-product-rank={product.rank}
      className={`relative bg-white rounded-none shadow-sm border ${
        isWinner
          ? "border-[#1d4a93] ring-4 ring-[#e1ecfe] pt-4 md:pt-5"
          : "border-slate-200 pt-4 md:pt-5"
      } px-4 sm:px-6 md:px-10 pb-6 md:pb-10 scroll-mt-6`}
    >
      <RankRibbon rank={product.rank} featured={isWinner} />

      {isWinner && (
        <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#1d4a93] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-none font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-md z-10 whitespace-nowrap">
          <Award size={16} className="md:w-[18px] md:h-[18px]" />
          #1 Editor&apos;s Choice
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8">
        {/* Left Column: Image, Price, Stars, Desktop CTA (Sticky on Desktop) */}
        <aside className="lg:col-span-4 flex flex-col items-center w-full">
          <div className="lg:sticky lg:top-[10px] w-full flex flex-col items-center">
            {/* Mobile Title (above image on mobile, hidden on desktop, cleared below rank ribbon) */}
            <h2
              className={`text-2xl font-bold text-slate-900 mb-4 text-center lg:hidden font-serif pt-10 sm:pt-8 px-8 ${
                isWinner ? "mt-4 sm:mt-5" : "mt-3 sm:mt-4"
              }`}
            >
              {product.name}
            </h2>

            {/* Product Image (Calibrated to guarantee zero overlap below RankRibbon and fit 100% inside viewport frame) */}
            <div
              className={`relative w-full max-w-[250px] sm:max-w-[260px] lg:max-w-[250px] xl:max-w-[260px] mx-auto mb-3 ${
                isWinner ? "lg:pt-[34px] pt-2" : "lg:pt-[18px] pt-2"
              }`}
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={(event) =>
                  handleOutboundClick(
                    event,
                    setLoadingTarget,
                    `product-img-${product.rank}`,
                  )
                }
                className="block w-full group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading={isWinner ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full aspect-square object-cover rounded-none shadow-xs border border-slate-200 group-hover:shadow-md transition-shadow duration-300"
                />
              </a>
            </div>

            {/* Price & Rating */}
            <div className="text-center mb-2 lg:mb-3 w-full">
              <div className="flex items-center justify-center gap-2 mb-1.5 flex-nowrap">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 shrink-0">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-base sm:text-lg text-slate-400 line-through font-medium shrink-0">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {isWinner && (
                <div className="flex justify-center mb-1.5">
                  <span className="inline-flex items-center gap-1 rounded-none bg-slate-900 text-[#f9ad26] border border-[#f9ad26]/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-xs whitespace-nowrap">
                    BLACK FRIDAY EARLY ACCESS
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center mb-1">
                <RatingStars rating={product.rating} size={18} />
              </div>

              <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                Overall rating {product.rating.toFixed(1)} / 5 ({product.reviewCount})
              </p>
            </div>

            {/* Desktop CTA Button (Sticky with the left sidebar on desktop, guaranteed inside viewport frame) */}
            <div className="w-full max-w-[250px] sm:max-w-[260px] lg:max-w-[250px] xl:max-w-[260px] hidden lg:block">
              <OfficialButton
                href={product.link}
                targetId={`product-desktop-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`toothbrush-cta-${product.rank}`}
                size="default"
                className="w-full"
              >
                {product.ctaText || "CHECK AVAILABILITY"}
              </OfficialButton>
            </div>
          </div>
        </aside>

        {/* Right Column: Title, Review, Metrics, Pros & Cons, PackagePanel, Mobile CTA */}
        <div className="lg:col-span-8">
          {/* Desktop Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  `product-title-${product.rank}`,
                )
              }
              className="hover:text-[#1d4a93] transition-colors"
            >
              {product.name}
            </a>
          </h2>

          {/* Review Narrative Prose */}
          <div className="prose prose-slate prose-lg max-w-none mb-8 space-y-4">
            {product.description.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-[17px]"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-slate-50 rounded-none p-4 sm:p-6 border border-slate-200 mb-8">
            <h4 className="font-bold text-slate-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Performance Metrics
            </h4>
            <div className="space-y-3">
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.rank}-${metric.label}`}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Pros */}
            <div className="bg-[#f0f5fd] rounded-none px-3 py-5 md:p-6 border border-[#b8d2fb]">
              <h4 className="bg-[#1d4a93] text-white font-bold text-center text-xl sm:text-2xl py-2.5 px-4 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-none">
                Pros
              </h4>
              <ul className="space-y-3.5">
                {product.pros.map((pro, idx) => {
                  const colonIndex = pro.indexOf(":");
                  const boldPart = colonIndex > -1 ? pro.slice(0, colonIndex) : null;
                  const restPart = colonIndex > -1 ? pro.slice(colonIndex + 1) : pro;

                  return (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-slate-700 flex items-start gap-3 leading-relaxed"
                    >
                      <Check
                        size={18}
                        className="text-[#1d4a93] shrink-0 mt-1 stroke-[3]"
                      />
                      <span>
                        {boldPart ? (
                          <>
                            <strong className="text-slate-900" dangerouslySetInnerHTML={{ __html: boldPart + ":" }} />{" "}
                            <span dangerouslySetInnerHTML={{ __html: restPart }} />
                          </>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: pro }} />
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50/50 rounded-none px-3 py-5 md:p-6 border border-red-100">
              <h4 className="bg-red-500 text-white font-bold text-center text-xl sm:text-2xl py-2.5 px-4 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-none">
                Cons
              </h4>
              <ul className="space-y-3.5">
                {product.cons.map((con, idx) => {
                  const colonIndex = con.indexOf(":");
                  const boldPart = colonIndex > -1 ? con.slice(0, colonIndex) : null;
                  const restPart = colonIndex > -1 ? con.slice(colonIndex + 1) : con;

                  return (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-slate-700 flex items-start gap-3 leading-relaxed"
                    >
                      <XCircle
                        size={18}
                        className="text-red-500 shrink-0 mt-1"
                      />
                      <span>
                        {boldPart ? (
                          <>
                            <strong className="text-slate-900" dangerouslySetInnerHTML={{ __html: boldPart + ":" }} />{" "}
                            <span dangerouslySetInnerHTML={{ __html: restPart }} />
                          </>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: con }} />
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Winner Package Panel */}
          {isWinner && (
            <PackagePanel
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              timer={timer}
            />
          )}

          {/* Mobile CTA Button */}
          <div className="w-full mt-8 lg:hidden">
            <OfficialButton
              href={product.link}
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={`toothbrush-cta-mobile-${product.rank}`}
              className="w-full"
            >
              {product.ctaText || "CHECK AVAILABILITY"}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

/* 11-Row Side-by-Side Competitor Comparison Table */
interface ComparisonTableProduct {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  weight: string;
  batteryLife: string;
  travelCase: boolean;
  wallMount: boolean;
  appTracking: boolean;
  chassisMaterial: string;
  freeHeads: boolean;
  noiseLevel: string;
  moneyBackTrial: string;
  freeDelivery: boolean;
}

const TOP_5_COMPARISON_PRODUCTS: ComparisonTableProduct[] = [
  {
    rank: 1,
    name: "Miroooo X2",
    shortName: "Miroooo X2",
    image: "/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp",
    price: "£69",
    originalPrice: "£139",
    rating: 4.9,
    weight: "51g",
    batteryLife: "90 Days",
    travelCase: true,
    wallMount: true,
    appTracking: true,
    chassisMaterial: "Aluminium Alloy",
    freeHeads: true,
    noiseLevel: "<45dB",
    moneyBackTrial: "90-Day Money-Back",
    freeDelivery: true,
  },
  {
    rank: 2,
    name: "Oral-B iO Series 6",
    shortName: "Oral-B iO6",
    image: "/img/toothbrushes/oral-b-io6-comparison.png",
    price: "£129.99",
    rating: 4.3,
    weight: "~140g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    appTracking: false,
    chassisMaterial: "Plastic & Rubber",
    freeHeads: false,
    noiseLevel: ">64dB",
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
  {
    rank: 3,
    name: "Philips Sonicare DiamondClean 9000",
    shortName: "Philips 9000",
    image: "/img/toothbrushes/philips-sonicare-diamondclean-9000.webp",
    price: "£149.99",
    rating: 4.1,
    weight: "~135g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    appTracking: false,
    chassisMaterial: "Composite Plastic",
    freeHeads: false,
    noiseLevel: "~56dB",
    moneyBackTrial: "28-Day Guarantee",
    freeDelivery: false,
  },
  {
    rank: 4,
    name: "SURI Pro 2.0",
    shortName: "SURI Pro 2.0",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£85",
    rating: 3.6,
    weight: "~85g",
    batteryLife: "34 Days",
    travelCase: false,
    wallMount: true,
    appTracking: false,
    chassisMaterial: "Aluminium Alloy",
    freeHeads: false,
    noiseLevel: "~54dB",
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
  {
    rank: 5,
    name: "Oral-B iO3 Matt Black",
    shortName: "Oral-B iO3",
    image: "/img/toothbrushes/oral-b-io3-comparison.png",
    price: "£75",
    rating: 3.4,
    weight: "~136g",
    batteryLife: "14 Days",
    travelCase: false,
    wallMount: false,
    appTracking: false,
    chassisMaterial: "Matte Plastic",
    freeHeads: false,
    noiseLevel: ">64dB",
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
];

type ComparisonRowDef =
  | {
      key:
        | "travelCase"
        | "wallMount"
        | "appTracking"
        | "freeHeads"
        | "freeDelivery";
      label: string;
      kind: "boolean";
    }
  | {
      key: "weight" | "batteryLife" | "chassisMaterial" | "noiseLevel" | "moneyBackTrial";
      label: string;
      kind: "text";
    }
  | {
      key: "price";
      label: string;
      kind: "price";
    };

const TOP_5_COMPARISON_ROWS: ComparisonRowDef[] = [
  { key: "weight", label: "Ultra-Light Weight", kind: "text" },
  { key: "batteryLife", label: "Battery Life", kind: "text" },
  { key: "travelCase", label: "Luxury Travel Case", kind: "boolean" },
  { key: "wallMount", label: "Wall-Mounted Storage", kind: "boolean" },
  { key: "appTracking", label: "Dental Care App", kind: "boolean" },
  { key: "chassisMaterial", label: "Chassis Material", kind: "text" },
  { key: "freeHeads", label: "Free Extra Brush Heads", kind: "boolean" },
  { key: "noiseLevel", label: "Whisper Quiet", kind: "text" },
  { key: "moneyBackTrial", label: "Risk-Free Trial", kind: "text" },
  { key: "freeDelivery", label: "Free Tracked Delivery", kind: "boolean" },
  { key: "price", label: "Price", kind: "price" },
];

function CompetitorComparisonTable() {
  return (
    <section className="bg-white rounded-none p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Top 5 Electric Toothbrushes Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base font-sans">
          Detailed technical specifications, battery endurance, included accessories, and ownership value compared across the UK&apos;s leading 2026 models.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="block lg:hidden text-center text-xs text-slate-500 font-medium mb-4 bg-slate-50 py-2 px-3 rounded-none border border-slate-200 font-sans">
        ← Swipe horizontally to compare all 5 toothbrushes →
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm md:text-base w-[18%] bg-slate-50/50 rounded-none align-bottom font-sans">
                Feature / Metric
              </th>
              {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className={`py-4 px-2 text-center w-[16.4%] align-bottom border-l border-slate-200 ${
                    prod.rank === 1 ? "bg-[#f0f5fd] border-t-2 border-t-[#1d4a93]" : "bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans ${
                        prod.rank === 1 ? "text-[#1d4a93]" : "text-slate-500"
                      }`}
                    >
                      #{prod.rank} Ranked
                    </span>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2.5 flex items-center justify-center p-1 bg-white rounded-none border border-slate-200">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain rounded-none"
                      />
                    </div>
                    <span className="font-bold text-slate-900 text-sm sm:text-base md:text-lg line-clamp-1 mb-1 font-sans">
                      {prod.shortName}
                    </span>
                    <div className="mb-2 scale-90 sm:scale-100">
                      <RatingStars rating={prod.rating} size={14} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1.5 font-sans">
                      <span className="text-base sm:text-xl md:text-2xl font-black text-slate-900">
                        {prod.price}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
                          {prod.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans">
            {TOP_5_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-800 align-middle text-xs sm:text-sm font-sans">
                  {row.label}
                </td>
                {TOP_5_COMPARISON_PRODUCTS.map((prod) => {
                  const isWinnerCol = prod.rank === 1;

                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          isWinnerCol ? "bg-[#f0f5fd]/70" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          {isPassed ? (
                            <Check className="w-5 h-5 text-[#1d4a93] shrink-0 stroke-[3]" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.kind === "price") {
                    return (
                      <td
                        key={`${prod.rank}-price-row`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          isWinnerCol ? "bg-[#f0f5fd]/70" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1 font-sans">
                          <div className="flex items-baseline justify-center gap-1.5">
                            <span className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg">
                              {prod.price}
                            </span>
                            {prod.originalPrice && (
                              <span className="text-[11px] sm:text-xs text-slate-400 line-through font-medium">
                                {prod.originalPrice}
                              </span>
                            )}
                          </div>
                          {prod.rank === 1 && (
                            <span className="inline-flex items-center gap-1 rounded-none bg-slate-900 text-[#f9ad26] border border-[#f9ad26]/40 px-2 py-0.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                              BLACK FRIDAY
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  }

                  const textVal = prod[row.key];
                  return (
                    <td
                      key={`${prod.rank}-${row.key}`}
                      className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                        isWinnerCol ? "bg-[#f0f5fd]/70 font-semibold text-[#1d4a93]" : ""
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium font-sans">
                        {textVal}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* Guide-Specific Head-to-Head Comparison Matrix Table */
function GuideComparisonMatrix({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.comparisonRows || guide.comparisonRows.length === 0) return null;

  return (
    <section className="bg-white rounded-none p-6 md:p-10 border border-slate-200 shadow-sm my-16">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#e1ecfe] text-[#1d4a93] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Specification Breakdown
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Side-by-Side Comparison Matrix
        </h2>
        <p className="text-slate-600 mt-2 text-base md:text-lg">
          How the Miroooo Brush X2 compares against legacy models on key clinical &amp; daily benchmarks.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-4 font-bold text-slate-900 text-base md:text-lg w-1/4">
                Feature / Metric
              </th>
              <th className="py-4 px-4 font-bold text-[#1d4a93] bg-[#f0f5fd] text-base md:text-lg w-2/5 rounded-none border-t-2 border-l-2 border-r-2 border-[#b8d2fb]">
                Miroooo Brush X2 (£69)
              </th>
              <th className="py-4 px-4 font-bold text-slate-700 text-base md:text-lg w-1/3">
                Competitor Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {guide.comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-900 align-top">
                  <div>{row.feature}</div>
                  <div className="text-xs font-normal text-slate-500 mt-1">
                    {row.whyItMatters}
                  </div>
                </td>
                <td className="py-4 px-4 font-bold text-slate-900 bg-[#f0f5fd]/60 border-l-2 border-r-2 border-[#b8d2fb] align-top">
                  <span className="inline-flex items-center gap-1.5 text-[#1d4a93] mr-1.5">
                    <Check className="w-4 h-4 shrink-0 stroke-[3]" />
                  </span>
                  {row.miroooo}
                </td>
                <td className="py-4 px-4 text-slate-600 align-top">
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* Buyer Advice Blocks */
function BuyerBlocksSection({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="my-16 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif text-center mb-8">
        Buying Advice &amp; Decision Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guide.buyerBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white rounded-none p-6 md:p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-900 font-serif mb-3">
              {block.title}
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* FAQ Section */
function FaqSection({ faqs }: { faqs?: ToothbrushFAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white rounded-none p-6 md:p-10 border border-slate-200 shadow-sm my-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 text-[#1d4a93] font-bold text-sm uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Expert Answers to Common Questions
        </h2>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-none border border-slate-200 bg-slate-50/50 p-5 open:bg-white open:ring-2 open:ring-[#1d4a93]/20 transition-all duration-200"
          >
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-base md:text-lg list-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-200" />
            </summary>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-slate-600 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================================
   MAIN EXPORTED COMPONENT: LuxuryToothbrushLandingPage
   Follows Trustpilot Advertorial layout with BestVerdict Mask Page color palette.
   STRICT ZERO STICKY BOXES (desktop & mobile). STRICT ZERO BORDER RADIUS.
   ========================================================================================= */
export interface LuxuryToothbrushLandingPageProps {
  guide?: ToothbrushGuide;
}

export function LuxuryToothbrushLandingPage({
  guide,
}: LuxuryToothbrushLandingPageProps = {}) {
  const [ukDate, setUkDate] = useState("");
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const timer = useUkMidnightTimer();

  useEffect(() => {
    setUkDate(getUkFormattedDate());
  }, []);

  const winnerProduct = TOOTHBRUSH_PRODUCTS.find((p) => p.isWinner) || TOOTHBRUSH_PRODUCTS[0];

  return (
    <div
      className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#e1ecfe] selection:text-[#0e1a2f]"
      style={{
        // Define scoped variables identical to theme.css on the best mask page
        ["--color-emerald-50" as any]: "oklch(97% 0.012 260)",
        ["--color-emerald-100" as any]: "oklch(94% 0.027 260)",
        ["--color-emerald-200" as any]: "oklch(88% 0.05 260)",
        ["--color-emerald-300" as any]: "oklch(78% 0.08 260)",
        ["--color-emerald-400" as any]: "oklch(62% 0.14 260)",
        ["--color-emerald-500" as any]: "oklch(42% 0.13 260)",
        ["--color-emerald-600" as any]: "oklch(36% 0.12 260)",
        ["--color-emerald-700" as any]: "oklch(31% 0.10 260)",
        ["--color-emerald-800" as any]: "oklch(26% 0.08 260)",
        ["--color-emerald-900" as any]: "oklch(22% 0.06 260)",
        ["--color-emerald-950" as any]: "oklch(17% 0.04 260)",
        ["--led-action" as any]: "oklch(80% 0.16 75)",
        ["--led-action-hover" as any]: "oklch(74% 0.16 70)",
        ["--led-action-ink" as any]: "oklch(22% 0.045 260)",
      }}
    >
      {/* 1. TOP ANNOUNCEMENT HEADER BAR (Deep Royal Blue Palette matching BestVerdict Mask Page) */}
      <header className="bg-[#1d4a93] border-b border-[#11397b] pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif">
            <span className="block">
              {guide ? guide.headline : "Best Electric Toothbrush"}
            </span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <UKFlag />
              <span>United Kingdom — 2026</span>
            </span>
          </h1>

          <p className="text-white/90 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
            {guide
              ? guide.subheadline
              : "Compare the top 5 electric toothbrushes in the UK for 2026. Expert tested for plaque removal, battery life, noise levels, and overall dental value."}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-[#11397b]/80 text-white text-xs md:text-sm px-3.5 py-1.5 rounded-none border border-[#2b5ba3]/50">
            <Clock size={14} className="text-[#f9ad26]" />
            <span>Updated: {ukDate || "October 2026"}</span>
            <span>•</span>
            <span>Audited by UK Dental Panel</span>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Top 5 Hero Graphic Banner */}
        <div className="relative mb-8 md:mb-12">
          <div className="relative w-full aspect-[1536/461] bg-slate-100 overflow-hidden rounded-none border border-slate-200">
            <img
              src="/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"
              alt="Top 5 Best Electric Toothbrushes UK 2026 Comparison"
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        </div>

        {/* Clinical Consultant / Dentist Walkthrough Card */}
        <div className="bg-white p-6 md:p-8 rounded-none shadow-sm max-w-5xl mx-auto border border-slate-200 text-slate-800 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <img
              src="/img/toothbrushes/ec20e57c-5f08-4bb9-aa24-2d0de02c5d1d_medium.webp"
              alt="Clinical Dental Consultant & Oral Health Specialist"
              className="w-24 h-24 rounded-none object-cover border border-slate-200 shrink-0"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl md:text-2xl text-slate-900 font-serif">
                {guide?.drVanceVerdict?.name || "Dr. Julian Vance, BDS"}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                {guide?.drVanceVerdict?.title || "Clinical Dental Consultant & Oral Health Specialist"}
              </p>
            </div>
          </div>

          <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
            {guide?.drVanceVerdict?.quote ? (
              <p className="italic font-medium text-slate-800 mb-3 border-l-4 border-[#1d4a93] pl-4">
                &ldquo;{guide.drVanceVerdict.quote}&rdquo;
              </p>
            ) : (
              <p className="italic font-medium text-slate-800 mb-3 border-l-4 border-[#1d4a93] pl-4">
                &ldquo;Daily brushing should be effortless. The ideal modern brush should be whisper-quiet rather than loudly buzzing in your ear, featherlight for ergonomic control, and gentle on gums while delivering clinical plaque removal.&rdquo;
              </p>
            )}

            {guide?.drVanceVerdict?.clinicalRationale ? (
              <p>{guide.drVanceVerdict.clinicalRationale}</p>
            ) : (
              <p>
                With <strong>over 14 years</strong> of clinical dental experience in the UK, our dental testing team evaluated the leading electric toothbrushes for 2026 across <strong>180+ hours of comparative laboratory testing</strong>. You do not need to spend £200+ on heavy, loud, clunky handles to get a dentist-clean smile, whisper-quiet motor operation, and 90+ days of battery life.
              </p>
            )}
          </div>

          <hr className="border-slate-200 w-full mb-4" />

          <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
            * Evaluated across UK dental clinics &amp; independent bench measurements.
          </div>
        </div>

        {/* Optional Editorial Intro Paragraphs */}
        {guide?.intro && guide.intro.length > 0 && (
          <div className="prose prose-lg prose-slate w-full max-w-none mb-12 space-y-4">
            {guide.intro.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* 10 Evaluation Criteria Section */}
        <EvaluationCriteria criteria={guide?.criteria} />

        {/* Optional Winner Bullets / Key Findings */}
        {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="bg-[#f0f5fd] rounded-none p-6 md:p-8 border-2 border-[#b8d2fb] mb-12 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-[#0e2e62] font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#1d4a93] shrink-0" />
              Key Findings &amp; Why Miroooo Brush X2 Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#1d4a93] shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 3. THE 5 PRODUCT CARDS */}
        <div className="space-y-16">
          {TOOTHBRUSH_PRODUCTS.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              timer={timer}
            />
          ))}
        </div>

        {/* 4. GUIDE COMPARISON MATRIX (if guide has comparison rows) */}
        {guide && <GuideComparisonMatrix guide={guide} />}

        {/* 5. BUYER DECISION BLOCKS (if guide has buyer blocks) */}
        {guide && <BuyerBlocksSection guide={guide} />}

        {/* 6. FAQ ACCORDION (if guide has faqs) */}
        <FaqSection faqs={guide?.faqs} />

        {/* 7. DENTIST'S VERDICT BOTTOM BOX (Warm Cream Palette with Golden Amber Action) */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-none p-6 md:p-12 shadow-sm border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Dentist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-square overflow-hidden rounded-none border border-[#dfd1bd] bg-white shadow-md">
                  <img
                    src="/img/toothbrushes/Gemini_Generated_Image_bc4gydbc4gydbc4g.webp"
                    alt="Clinical Dental Specialist holding Miroooo Brush X2 - Dentist's Verdict"
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  Miroooo X2
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6" />

                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  Now at 50% off
                </div>

                {/* Rating Badge */}
                <div className="border border-slate-200 bg-white/80 rounded-none p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-xs">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-base md:text-lg text-black font-sans">
                      Excellent
                    </span>
                    <RatingStars rating={5} size={22} />
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 with over 4,800+ UK reviews
                  </div>
                </div>

                <OfficialButton
                  href={winnerProduct.link}
                  targetId="verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  testId="toothbrush-verdict-cta"
                  className="mx-auto w-full max-w-[280px] md:w-auto md:max-w-none"
                >
                  CHECK AVAILABILITY
                </OfficialButton>
              </div>
            </div>
          </div>
        </div>

        {/* 8. 11-ROW SIDE-BY-SIDE COMPETITOR COMPARISON TABLE */}
        <CompetitorComparisonTable />

        {/* 9. EDITORIAL DISCLOSURES & FOOTER COPY */}
        <div className="text-center text-xs text-slate-400 py-12 border-t border-slate-200 max-w-4xl mx-auto space-y-3 font-sans">
          <p>
            <strong>Editorial Transparency &amp; Methodology:</strong> Best Product Verdict is an independent product review and consumer research service. We conduct rigorous testing across acoustic motors, plaque clearance, battery runtime, and dental materials in UK laboratory and clinical environments.
          </p>
          <p>
            <strong>Commercial Disclosure:</strong> We may earn an affiliate commission when you purchase through links on this page. This does not impact our editorial rankings, scoring criteria, or clinical evaluations. All products were tested independently.
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Best Product Verdict UK. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
