"use client";

import React from "react";
import Image from "next/image";
import { ProductItem } from "@/lib/types";
import { StarRating } from "./StarRating";
import { trackOutboundClick } from "@/lib/tracking";
import { ArrowDown, ExternalLink } from "lucide-react";

interface ComparisonTableProps {
  products: ProductItem[];
  categoryName: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ products, categoryName }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-12">
      {/* Table Header */}
      <div className="p-5 md:p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded-full mb-1.5 border border-teal-800/60">
            <span>Fast Comparison Matrix</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold">
            At-A-Glance: Top 10 {categoryName} Ranked
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Click any model to jump directly to its full hands-on laboratory evaluation.
          </p>
        </div>

        <div className="text-xs text-slate-300 flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
          <span>All prices verified for the UK market</span>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-xs uppercase font-bold tracking-wider">
              <th className="py-3.5 px-4 w-16 text-center">Rank</th>
              <th className="py-3.5 px-4">Product & Key Feature</th>
              <th className="py-3.5 px-4 text-center">Score</th>
              <th className="py-3.5 px-4">Key Highlight</th>
              <th className="py-3.5 px-4 text-center">UK Price</th>
              <th className="py-3.5 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {products.map((p) => {
              const handleCtaClick = (e: React.MouseEvent) => {
                e.preventDefault();
                trackOutboundClick(p.outboundUrl, p.title, p.rank, categoryName);
              };

              return (
                <tr
                  key={p.rank}
                  className={`hover:bg-blue-50/40 transition-colors ${
                    p.rank === 1 ? "bg-teal-50/20" : ""
                  }`}
                >
                  {/* Rank */}
                  <td className="py-4 px-4 text-center font-bold">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                        p.rank === 1
                          ? "bg-teal-600 text-white shadow-sm"
                          : p.rank === 2
                          ? "bg-blue-600 text-white"
                          : p.rank === 3
                          ? "bg-amber-500 text-white"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      #{p.rank}
                    </span>
                  </td>

                  {/* Product */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-white rounded-lg p-1 shrink-0 border border-slate-200 flex items-center justify-center">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <a
                          href={`#rank-${p.rank}`}
                          className="font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1 inline-flex items-center gap-1 group"
                        >
                          <span>{p.title}</span>
                          <ArrowDown className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-y-0.5 shrink-0" />
                        </a>
                        {p.badge && (
                          <span className="inline-block mt-0.5 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Score */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-extrabold text-blue-600 text-base">
                        {p.score}
                      </span>
                      <StarRating score={p.score} size={12} />
                    </div>
                  </td>

                  {/* Key Highlight / First Spec */}
                  <td className="py-4 px-4 text-xs text-slate-600">
                    <span className="line-clamp-2">
                      {p.highlights?.[0] || p.keySpecs?.[0]?.value || p.subtitle || "Editor Verified"}
                    </span>
                  </td>

                  {/* UK Price */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    <span className="font-bold text-slate-900 text-sm">
                      {p.priceDisplay || "Check"}
                    </span>
                    {p.originalPriceDisplay && (
                      <span className="block text-[10px] text-slate-400 line-through">
                        {p.originalPriceDisplay}
                      </span>
                    )}
                  </td>

                  {/* CTA */}
                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    <a
                      href={p.outboundUrl}
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
                      rel="nofollow noopener noreferrer"
                    >
                      <span>Check Price</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
