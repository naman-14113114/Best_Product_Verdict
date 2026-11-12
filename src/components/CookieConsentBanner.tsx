"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

declare global {
  interface Window {
    uetq?: unknown[];
    clarity?: (command: string, ...args: unknown[]) => void;
    bpvUpdateConsent?: (status: "granted" | "denied") => void;
  }
}

export const CookieConsentBanner: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("bpv_cookie_consent");
      if (!stored) {
        setIsVisible(true);
      }
    } catch {
      // If localStorage is inaccessible, do not block the user.
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    try {
      localStorage.setItem("bpv_cookie_consent", status);
    } catch {
      // Ignore localStorage restrictions
    }

    // Update Microsoft Advertising UET Consent Mode
    try {
      window.uetq = window.uetq || [];
      window.uetq.push("consent", "update", {
        ad_storage: status,
      });
    } catch {
      // Fail safely
    }

    // Update Microsoft Clarity Consent
    try {
      if (typeof window.clarity === "function") {
        window.clarity("consentv2", {
          ad_Storage: status,
          analytics_Storage: status,
        });
      }
    } catch {
      // Fail safely
    }

    // Also trigger global helper if defined in visitor-tracking.js
    try {
      if (typeof window.bpvUpdateConsent === "function") {
        window.bpvUpdateConsent(status);
      }
    } catch {
      // Fail safely
    }

    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Cookie consent options"
      role="region"
      className="fixed z-40 bottom-20 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto pointer-events-none transition-all duration-300"
    >
      <div className="pointer-events-auto w-full sm:w-[320px] bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-3.5 text-slate-800 text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Cookie Notice</span>
          </div>
          <button
            type="button"
            onClick={() => handleConsent("denied")}
            aria-label="Close cookie notice"
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
          We use cookies to improve your experience and measure advertising performance in accordance with our{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-700 hover:text-teal-800 underline font-medium transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleConsent("granted")}
            className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium py-1.5 px-3 rounded-lg text-xs transition-colors shadow-xs active:scale-[0.98]"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => handleConsent("denied")}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-1.5 px-3 rounded-lg text-xs transition-colors border border-slate-200 active:scale-[0.98]"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
};
