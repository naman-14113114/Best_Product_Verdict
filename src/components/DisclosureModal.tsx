"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck, Info, ExternalLink } from "lucide-react";

interface DisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclosureModal: React.FC<DisclosureModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclosure-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span id="disclosure-title">Advertiser & Editorial Disclosure</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close disclosure modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="font-medium text-xs md:text-sm">
              Best Product Verdict is an independent, advertising-supported comparison and product review service. Our goal is to provide honest, data-driven purchasing recommendations.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 pt-1">How We Operate & Free Service Guarantee</h3>
          <p>
            The content, comparison rankings, ratings, and buying guides published on Best Product Verdict are provided free of charge to all visitors. To sustain our intensive product testing, editorial team, and lab benchmarks, we may receive compensation from merchant partners and affiliate networks when you click links on our site and make a purchase.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-1">Does This Affect Your Cost?</h3>
          <p className="font-semibold text-slate-900">
            No. Clicking our links will never increase the price you pay. In many instances, our partnership agreements unlock exclusive discount codes, bundle upgrades, or promotional pricing for our readers.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-1">Editorial Independence & Ranking Integrity</h3>
          <p>
            Our editorial scores (ranging from 1.0 to 10.0) and ranking positions are derived from rigorous hands-on evaluations, verified customer sentiment, build quality checks, and real-world performance metrics. Merchant compensation does not dictate which product achieves our #1 Verdict or Top Pick placement.
          </p>

          <div className="pt-2 text-xs text-slate-500">
            For detailed terms, legal disclosures, and our comprehensive testing guidelines, please visit our full{" "}
            <Link
              href="/advertiser-disclosure"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
              onClick={onClose}
            >
              Advertiser Disclosure Page <ExternalLink className="w-3 h-3" />
            </Link>.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end px-6 py-4 bg-slate-50 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0087ee] hover:bg-[#006bbd] text-white font-semibold rounded-lg shadow-sm transition-all text-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclosureModal;
