"use client";

import React, { useState, useEffect } from "react";
import { Info, X } from "lucide-react";
import { DisclosureModal } from "./DisclosureModal";

export const DisclosureBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("bpv_disclosure_dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem("bpv_disclosure_dismissed", "true");
    } catch (e) {
      console.warn("localStorage inaccessible", e);
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return <DisclosureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
  }

  return (
    <>
      <aside
        aria-label="Advertiser Disclosure"
        className="w-full bg-[#0e1e2d] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/60 sticky top-0 z-40 transition-all duration-300 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Info className="w-4 h-4 text-[#00d6b6] shrink-0 hidden sm:inline-block" />
            <span>
              <span className="font-semibold text-slate-100">Ad Disclosure:</span> If you buy a product after clicking one of our links, we may earn a commission where an affiliate link is used.{" "}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-[#00d6b6] hover:text-teal-300 underline font-medium cursor-pointer transition-colors ml-1"
              >
                Read full disclosure here.
              </button>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleDismiss}
              className="bg-[#00d6b6] hover:bg-teal-400 text-slate-950 font-bold px-3 py-1 rounded text-xs transition-all shadow-sm active:scale-95"
            >
              Okay, I Got It!
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors sm:hidden"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      <DisclosureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default DisclosureBanner;
