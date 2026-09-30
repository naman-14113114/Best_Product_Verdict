"use client";

import React from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { trackOutboundClick } from "@/lib/tracking";

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
    <section className="w-full my-12 pt-4">
      <div className="mb-6 text-left">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 underline underline-offset-4 decoration-slate-400">
          More options to research
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product, idx) => {
          const handleCtaClick = () => { trackOutboundClick(product.outboundUrl, product.title, product.rank || 11 + idx, categoryName); };

          return (
            <div
              key={product.rank || idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group text-center"
            >
              <div className="space-y-3">
                {/* Product Image */}
                <div className="relative w-full aspect-square max-w-[160px] mx-auto flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 150px, 160px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Brand */}
                {product.brand && (
                  <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">
                    {product.brand}
                  </h4>
                )}

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {product.description || product.title}
                </p>
              </div>

              {/* Royal Blue CTA Button */}
              <div className="mt-5 w-full">
                <a
                  href={product.outboundUrl}
                  onClick={handleCtaClick}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#0080ff] hover:bg-[#0070e0] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs hover:shadow transition-all cursor-pointer no-underline tracking-wide"
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                >
                  <span>Find UK listings</span>
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
