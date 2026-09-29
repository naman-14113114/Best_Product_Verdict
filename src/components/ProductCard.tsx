"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { StarRating } from "./StarRating";
import { trackOutboundClick } from "@/lib/tracking";
import { Check, X, Tag, ChevronDown, ChevronUp } from "lucide-react";

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
  const isPremiumPick = product.rank === 2 || product.badgeType === "runner-up" || product.badgeType === "premium";

  return (
    <div
      id={`rank-${product.rank}`}
      className={`scroll-mt-24 w-full mb-6 sm:mb-8 relative rounded-2xl bg-white transition-all duration-300 overflow-visible group ${
        isBestOverall
          ? "border-2 border-[#00c092] shadow-md hover:shadow-xl"
          : isPremiumPick
          ? "border-2 border-[#f59e0b] shadow-sm hover:shadow-lg"
          : "border border-slate-200/90 shadow-2xs hover:shadow-lg"
      }`}
    >
      {/* Top Badge (Best Overall Pick / Premium Pick) */}
      {isBestOverall && (
        <div className="absolute -top-3 left-6 sm:left-8 z-20">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full bg-[#00c092] text-white shadow-xs tracking-wide">
            {product.badge || "Best Overall Pick"}
          </span>
        </div>
      )}

      {isPremiumPick && (
        <div className="absolute -top-3 left-6 sm:left-8 z-20">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full bg-[#f59e0b] text-white shadow-xs tracking-wide">
            {product.badge || "Premium Pick"}
          </span>
        </div>
      )}

      <div className="p-4 sm:p-6 lg:p-7 pt-6 sm:pt-7">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          
          {/* Left Column: Rank Circle & Product Image */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 w-full lg:w-auto justify-start">
            {/* Rank Circle Badge */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white shadow-2xs flex items-center justify-center font-bold text-sm sm:text-base text-slate-800 shrink-0">
              {product.rank}
            </div>

            {/* Product Image */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-xl p-2 flex items-center justify-center shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={`${product.brand || ""} ${product.title}`}
                  fill
                  sizes="(max-width: 768px) 140px, 160px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  loading={product.rank <= 3 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </div>

          {/* Middle Column: Brand, Description, Read More, Specs */}
          <div className="flex-1 w-full space-y-2.5">
            <div>
              {product.brand && (
                <div className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight mb-1">
                  {product.brand}
                </div>
              )}

              {/* Title & Short Description with inline read more */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-medium text-slate-900 mr-1.5">{product.title}.</span>
                <span>
                  {expanded ? product.description : product.description.slice(0, 140) + "..."}
                </span>
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-0.5 text-blue-600 hover:text-blue-800 font-semibold text-xs ml-1.5 underline cursor-pointer"
                >
                  <span>{expanded ? "read less" : "read more"}</span>
                  {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Discount Ribbon / Badge */}
            {product.discountPercent && (
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                  <Tag className="w-3 h-3" />
                  {product.discountPercent}
                </span>
                {product.priceDisplay && (
                  <span className="text-xs font-bold text-slate-900">
                    {product.priceDisplay}
                    {product.originalPriceDisplay && (
                      <span className="text-slate-400 line-through font-normal text-[11px] ml-1.5">
                        {product.originalPriceDisplay}
                      </span>
                    )}
                  </span>
                )}
              </div>
            )}

            {/* Expanded Content: Pros, Cons & Key Specifications */}
            {expanded && (
              <div className="pt-3 space-y-3 border-t border-slate-100 animate-fadeIn">
                {product.pros && product.pros.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Key Advantages</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {product.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.cons && product.cons.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span className="text-slate-400 font-bold">✕</span>
                      <span>Considerations</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {product.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400">✕</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.keySpecs && product.keySpecs.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    {product.keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 border border-slate-200 rounded-lg p-2">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">{spec.label}</span>
                        <span className="font-bold text-slate-800 text-[11px]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Score, Rating Stars & Royal Blue "Check Price" Button */}
          <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center shrink-0 w-full lg:w-44 gap-3 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
            <div className="text-left lg:text-center">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                {product.score}
              </div>
              <div className="mt-1 flex items-center lg:justify-center">
                <StarRating score={product.score} size={16} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 mt-0.5">
                Our Rating
              </div>
            </div>

            <div className="w-auto lg:w-full">
              <a
                href={product.outboundUrl}
                onClick={handleClick}
                className="w-full py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg bg-[#0080ff] hover:bg-[#0070e0] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer text-center no-underline tracking-wide active:scale-98"
                rel="nofollow noopener noreferrer"
              >
                <span>Check Price</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
