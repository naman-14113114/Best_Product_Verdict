"use client";

import React, { useState } from "react";
import { Search, Star, CheckCircle, ChevronDown, Sparkles, Eye, ShieldCheck, X } from "lucide-react";

export const ProofTrustBar: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"humans" | "transparency" | null>(null);

  return (
    <div className="w-full my-6">
      {/* Proof Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-800 shadow-sm">
          <Search className="w-3.5 h-3.5 text-blue-600" />
          <span>100+ Products Analyzed</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-800 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>50k Reviews Evaluated</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-800 shadow-sm">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>30 Day Returns</span>
        </div>
      </div>

      {/* Trust Pills with dropdown toggles */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3 text-xs">
        <button
          type="button"
          onClick={() => setActiveModal(activeModal === "humans" ? null : "humans")}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100/80 transition-all font-semibold cursor-pointer shadow-xs"
        >
          <span className="text-sm">🌱</span>
          <span>Ranked By Humans, Not AI</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${activeModal === "humans" ? "rotate-180" : ""}`} />
        </button>

        <button
          type="button"
          onClick={() => setActiveModal(activeModal === "transparency" ? null : "transparency")}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/70 transition-all font-semibold cursor-pointer shadow-xs"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500" />
          <span>Transparency Center</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${activeModal === "transparency" ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Modal / Dropdown Details Drawer */}
      {activeModal && (
        <div className="mt-4 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 shadow-md animate-fadeIn text-xs sm:text-sm text-slate-700 relative">
          <button
            type="button"
            onClick={() => setActiveModal(null)}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {activeModal === "humans" && (
            <div className="space-y-2 pr-6">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our 100% Human Testing & Verification Pledge</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Unlike scrapers and automated AI content farms, every ranking on Best Product Verdict is researched, benchmarked, and written by our UK-based editorial team led by David Welch. We perform real-world hardware stress testing, review verification, and spec cross-checking before assigning any verdict score.
              </p>
            </div>
          )}

          {activeModal === "transparency" && (
            <div className="space-y-2 pr-6">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                <Eye className="w-4 h-4 text-blue-600" />
                <span>Affiliate & Editorial Transparency Notice</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Best Product Verdict is an independent consumer comparison publication. We maintain strict separation between our editorial ratings and commercial relationships. When you purchase products through our links, we may receive an affiliate referral commission at no additional cost to you. Rankings are never sold or sponsored.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProofTrustBar;
