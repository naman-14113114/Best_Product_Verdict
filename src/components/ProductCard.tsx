"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { StarRating } from "./StarRating";
import { trackOutboundClick } from "@/lib/tracking";
import { Check, X, ExternalLink, Sparkles, Clock, Tag, ChevronDown, ChevronUp } from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
  categoryName: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, categoryName }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackOutboundClick(product.outboundUrl, product.title, product.rank, categoryName);
  };

  const isBestOverall = product.rank === 1 || product.badgeType === "best-overall";
  const isRunnerUpOrPremium = product.rank === 2 || product.badgeType === "runner-up" || product.badgeType === "premium" || product.badgeType === "top-pick";

  const getTopBadge = () => {
    if (isBestOverall) {
      return {
        text: product.badge || "Best Overall Pick",
        classes: "bg-[#00b67a] text-white shadow-sm",
      };
    }
    if (isRunnerUpOrPremium) {
      return {
        text: product.badge || "Premium Pick",
        classes: "bg-[#f59e0b] text-white shadow-sm",
      };
    }
    if (product.badge) {
      return {
        text: product.badge,
        classes: "bg-slate-700 text-white shadow-xs",
      };
    }
    return null;
  };

  const topBadge = getTopBadge();

  return (
    <div
      id={`rank-${product.rank}`}
      className={`scroll-mt-24 w-full mb-8 relative rounded-2xl bg-white transition-all duration-300 overflow-visible group ${
        isBestOverall
          ? "border-2 border-[#00b67a] shadow-md hover:shadow-xl"
          : "border border-slate-200/90 shadow-xs hover:shadow-lg"
      }`}
    >
      {/* Top Badge Pill (Anchored on Top Left) */}
      {topBadge && (
        <div className="absolute -top-3.5 left-6 z-20">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider ${topBadge.classes}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {topBadge.text}
          </span>
        </div>
      )}

      {/* Rank Circle Badge */}
      <div className="absolute top-4 -left-3 sm:-left-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-slate-300 shadow-md flex items-center justify-center font-black text-sm sm:text-base text-slate-800">
        {product.rank}
      </div>

      <div className="p-5 sm:p-7 pt-7 sm:pt-8">
        {/* Deal Pills & Micro Banner */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pl-6 sm:pl-8">
          <div className="flex flex-wrap items-center gap-2">
            {product.discountPercent && (
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                <Tag className="w-3 h-3" />
                {product.discountPercent}
              </span>
            )}

            {product.dealTimer && (
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                <Clock className="w-3 h-3 text-amber-600" />
                {product.dealTimer}
              </span>
            )}
          </div>

          <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
            Tested &amp; Verified UK Stock
          </span>
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Image & Pricing */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[240px] bg-slate-50/80 rounded-xl p-4 flex items-center justify-center border border-slate-100 group-hover:border-blue-200 transition-colors">
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={`${product.title} review in the UK`}
                  fill
                  sizes="(max-width: 768px) 220px, 240px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  loading={product.rank <= 3 ? "eager" : "lazy"}
                />
              </div>
            </div>

            {/* Price Block */}
            {product.priceDisplay && (
              <div className="mt-3 text-center w-full">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {product.priceDisplay}
                  </span>
                  {product.originalPriceDisplay && (
                    <span className="text-sm font-medium text-slate-400 line-through">
                      {product.originalPriceDisplay}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                  Typical UK Amazon Price (inc. VAT)
                </span>
              </div>
            )}
          </div>

          {/* Middle Column: Brand, Title, Description, Pros, Cons & Specs */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            <div>
              {product.brand && (
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-0.5">
                  {product.brand}
                </span>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                <a href={product.outboundUrl} onClick={handleClick} className="hover:underline">
                  {product.title}
                </a>
              </h2>
              {product.subtitle && (
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* Description Paragraph */}
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className={expanded ? "" : "line-clamp-3"}>
                {product.description}
              </p>
              {product.description.length > 180 && (
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 mt-1 inline-flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{expanded ? "Show less" : "Read more"}</span>
                  {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              )}
            </div>

            {/* Why We Love It (Pros tick points ✓) */}
            {product.pros && product.pros.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="text-emerald-600 font-black">✓</span>
                  <span>Why We Love It</span>
                </div>
                <ul className="space-y-1.5">
                  {product.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cons / Considerations (✗ cross points) */}
            {product.cons && product.cons.length > 0 && (
              <div className="pt-1">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="text-slate-400 font-black">✗</span>
                  <span>Things To Keep In Mind</span>
                </div>
                <ul className="space-y-1">
                  {product.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✕
                      </div>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Specs Pills */}
            {product.keySpecs && product.keySpecs.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Key Specifications
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {product.keySpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/80 rounded-lg p-2 flex flex-col"
                    >
                      <span className="text-slate-400 font-medium text-[10px] uppercase">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-slate-800 text-[11px] truncate" title={spec.value}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Score, Rating & Blue CTA Button */}
          <div className="lg:col-span-3 flex flex-col items-center justify-between h-full bg-gradient-to-b from-blue-50/50 to-slate-50 p-5 rounded-xl border border-blue-100/80 text-center gap-4">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                Verdict Score
              </span>
              <div className="flex items-baseline gap-1 text-slate-900">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {product.score}
                </span>
                <span className="text-base font-bold text-slate-400">/ 10</span>
              </div>

              <div className="mt-1.5">
                <StarRating score={product.score} size={18} />
              </div>

              <span className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
                {product.ratingLabel}
              </span>

              {product.reviewCount && (
                <span className="text-[11px] text-slate-500 mt-1">
                  Based on {product.reviewCount.toLocaleString()}+ Reviews
                </span>
              )}
            </div>

            {/* Blue CTA Button (ConsumerPicks Style) */}
            <div className="w-full">
              <a
                href={product.outboundUrl}
                onClick={handleClick}
                className="w-full py-3.5 px-4 rounded-xl bg-[#0080ff] hover:bg-blue-600 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:translate-y-[-1px] active:translate-y-[0px] transition-all cursor-pointer text-center no-underline"
                rel="nofollow noopener noreferrer"
              >
                <span>Check Price</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-400 block mt-2 text-center">
                Free UK Delivery Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
