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
              Best Product Verdict is a product comparison publisher operated by Naman Kharbanda.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 pt-1">How This Website Is Funded</h3>
          <p>
            The comparisons and buying guides published on Best Product Verdict are provided free of charge to all visitors. Some outbound links may earn us a commission. Commercial relationships may influence product inclusion and order.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-1">Does This Affect Your Cost?</h3>
          <p className="font-semibold text-slate-900">
            We do not charge readers to browse the guides. The retailer determines the purchase price, shipping charges and any offer. We do not promise an exclusive discount or a fixed price.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-1">Research Method and Guide Order</h3>
          <p>
            These are desk-research comparisons, with AI-assisted drafting. We do not claim hands-on product testing, clinical trials or an independent laboratory audit. Numbers indicate reading order rather than test results or customer ratings. Manufacturer information may differ by model, generation and region. Check the exact seller listing before buying.
          </p>

          <div className="pt-2 text-xs text-slate-500">
            For detailed terms, legal disclosures, and our research methods, please visit our full{" "}
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
