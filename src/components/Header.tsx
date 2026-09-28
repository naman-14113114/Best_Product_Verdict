"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Flame, Sparkles, Activity, Menu, X } from "lucide-react";
import { DisclosureModal } from "./DisclosureModal";

export const Header: React.FC = () => {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        {/* Top Mini Banner with Disclosure link */}
        <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-slate-200">
                UK Editorial Testing &amp; Buying Guide Authority • Updated September 2026
              </span>
            </div>
            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="text-slate-300 hover:text-teal-400 underline transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <ShieldCheck className="w-3 h-3 text-teal-400" />
              <span>Advertiser Disclosure</span>
            </button>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight">
                Best Product <span className="text-blue-600">Verdict</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-600">
                Independent UK Testing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <Link
              href="/top-10/best-wireless-meat-thermometers"
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
            >
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Meat Thermometers</span>
            </Link>

            <Link
              href="/top-10/best-cordless-water-flossers"
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Water Flossers</span>
            </Link>

            <Link
              href="/top-10/best-mini-massage-guns"
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors py-1"
            >
              <Activity className="w-4 h-4 text-teal-500" />
              <span>Mini Massage Guns</span>
            </Link>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors border border-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>How We Test</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
            <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Top 10 Comparisons
            </div>
            <Link
              href="/top-10/best-wireless-meat-thermometers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
            >
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Wireless Meat Thermometers</span>
            </Link>
            <Link
              href="/top-10/best-cordless-water-flossers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Cordless Water Flossers</span>
            </Link>
            <Link
              href="/top-10/best-mini-massage-guns"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
            >
              <Activity className="w-4 h-4 text-teal-500" />
              <span>Mini Massage Guns</span>
            </Link>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDisclosureOpen(true);
                }}
                className="w-full text-left text-xs font-semibold text-slate-600 py-2 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Advertiser Disclosure &amp; Testing Methodology</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Disclosure Modal */}
      <DisclosureModal isOpen={isDisclosureOpen} onClose={() => setIsDisclosureOpen(false)} />
    </>
  );
};

export default Header;
