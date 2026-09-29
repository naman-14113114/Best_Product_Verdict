"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdvertiserDisclosurePage() {
  const router = useRouter();

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700">
          {/* Letterhead */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Advertiser Disclosure
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Updated on February 1st, 2021
              </p>
            </div>
            <div>
              <button
                onClick={handleGoBack}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg border border-slate-300 transition-colors cursor-pointer"
              >
                &laquo; Go Back
              </button>
            </div>
          </div>

          {/* Disclosure Body */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              Consumer Picks is an independent comparison website that is supported by our readers. If you buy through a link on our website, we may earn a commission at no extra cost to you.
            </p>
            <p>
              The products listed are based on key performance metrics and data¹ analyzed by our editors. Rankings may be impacted by sales² and/or commissions³ — meaning when two products are genuinely close, the one that is on sale or pays us more may take the higher spot. Our editorial standards come first, and we won&apos;t feature a product just because it pays a higher commission.
            </p>
            <div className="space-y-2 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
              <p>
                ¹ &quot;Key performance metrics and data&quot; refers to rating, sales volume, price history, specs, performance, durability, ease of use, value against comparable models, warranty and return terms, and verified customer reviews.
              </p>
              <p>
                ² &quot;Sales&quot; refers to product deals and discounts.
              </p>
              <p>
                ³ &quot;Commissions&quot; refers to compensation provided to Consumer Picks.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <p>
                If you have any questions or suggestions about our Advertiser Disclosure, do not hesitate to contact us:
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block text-[#0087ee] hover:underline font-bold text-sm"
                >
                  Contact Form &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
