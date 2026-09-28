"use client";

import React from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { StarRating } from "./StarRating";
import { trackOutboundClick } from "@/lib/tracking";
import { Check, ExternalLink, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
  categoryName: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, categoryName }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackOutboundClick(product.outboundUrl, product.title, product.rank, categoryName);
  };

  const getBadgeBg = (rank: number, badgeType?: string) => {
    if (rank === 1 || badgeType === "best-overall") {
      return "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm";
    }
    if (rank === 2 || badgeType === "runner-up") {
      return "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm";
    }
    if (rank === 3 || badgeType === "top-pick") {
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm";
    }
    if (badgeType === "best-value") {
      return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm";
    }
    return "bg-slate-100 text-slate-700 border border-slate-200";
  };

  return (
    <div
      id={`rank-${product.rank}`}
      className="scroll-mt-24 w-full mb-8 relative rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-visible group"
    >
      {/* Rank Circle Badge */}
      <div className="absolute -top-4 -left-3 md:-left-4 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border-2 border-blue-400 shadow-md flex items-center justify-center font-bold text-lg md:text-xl text-slate-800">
        #{product.rank}
      </div>

      <div className="p-5 md:p-7 pt-7 md:pt-7">
        {/* Top Header Bar: Badge & Quick Rating */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pl-8 md:pl-9">
          {product.badge && (
            <span
              className={`inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold px-3 py-1 rounded-full ${getBadgeBg(
                product.rank,
                product.badgeType
              )}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {product.badge}
            </span>
          )}

          <div className="text-xs text-slate-500 font-medium">
            Tested & Verified • UK Stock Available
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Product Image & Price Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[260px] bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-100 group-hover:border-blue-200 transition-colors">
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={`${product.title} review in the UK`}
                  fill
                  sizes="(max-width: 768px) 240px, 260px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  loading={product.rank <= 3 ? "eager" : "lazy"}
                />
              </div>
            </div>

            {/* Price block */}
            <div className="mt-4 text-center w-full">
              {product.priceDisplay && (
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
              )}
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                Typical UK Amazon Price (inc. VAT)
              </span>
            </div>
          </div>

          {/* Middle Column: Details, Description, Specs & Highlights */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                <a href={product.outboundUrl} onClick={handleClick} className="hover:underline">
                  {product.title}
                </a>
              </h2>
              {product.subtitle && (
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* Editorial Description */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Key Specs Pills */}
            {product.keySpecs && product.keySpecs.length > 0 && (
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Key Specifications
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {product.keySpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/70 rounded-lg p-2 flex flex-col"
                    >
                      <span className="text-slate-400 font-medium text-[10px] uppercase">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-slate-800 truncate" title={spec.value}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Why It Made Our Top 10
                </div>
                <ul className="space-y-1.5">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Score, Rating & CTA Button */}
          <div className="lg:col-span-3 flex flex-col items-center justify-between h-full bg-gradient-to-b from-blue-50/50 to-slate-50 p-5 rounded-xl border border-blue-100/80 text-center gap-5">
            <div className="w-full flex flex-col items-center">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                Verdict Score
              </span>
              <div className="flex items-baseline gap-1 text-slate-900">
                <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tight">
                  {product.score}
                </span>
                <span className="text-lg font-bold text-slate-400">/ 10</span>
              </div>

              <div className="mt-2">
                <StarRating score={product.score} size={20} />
              </div>

              <span className="mt-1 text-sm font-bold text-slate-800">
                {product.ratingLabel}
              </span>

              {product.reviewCount && (
                <span className="text-xs text-slate-500 mt-1">
                  Based on {product.reviewCount.toLocaleString()}+ UK Reviews
                </span>
              )}
            </div>

            {/* CTA Button */}
            <div className="w-full">
              <a
                href={product.outboundUrl}
                onClick={handleClick}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:translate-y-[-1px] active:translate-y-[0px] transition-all cursor-pointer text-center no-underline"
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
