"use client";

import React from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { trackOutboundClick } from "@/lib/tracking";
import { ExternalLink } from "lucide-react";

interface ConsideredProductsProps {
  products: ProductItem[];
  categoryName: string;
}

export const ConsideredProducts: React.FC<ConsideredProductsProps> = ({
  products,
  categoryName,
}) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full my-12 pt-6">
      <div className="mb-6 text-left">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 underline underline-offset-4 decoration-slate-400">
          Some other products we considered
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product, idx) => {
          const handleCtaClick = (e: React.MouseEvent) => {
            e.preventDefault();
            trackOutboundClick(
              product.outboundUrl,
              product.title,
              product.rank || 11 + idx,
              categoryName
            );
          };

          return (
            <div
              key={product.rank || idx}
              className="bg-white rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group text-center"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full aspect-square max-w-[180px] mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 160px, 180px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Brand & Title */}
                {product.brand && (
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {product.brand}
                  </h4>
                )}

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                  {product.description || product.title}
                </p>

                {/* Price Display if available */}
                {product.priceDisplay && (
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-xs">
                    <span className="font-bold text-slate-900">
                      {product.priceDisplay}
                    </span>
                    {product.originalPriceDisplay && (
                      <span className="text-slate-400 line-through text-[11px]">
                        {product.originalPriceDisplay}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Blue CTA Button */}
              <div className="mt-2 w-full">
                <a
                  href={product.outboundUrl}
                  onClick={handleCtaClick}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#0080ff] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer no-underline"
                  rel="nofollow noopener noreferrer"
                >
                  <span>Check Price</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConsideredProducts;
