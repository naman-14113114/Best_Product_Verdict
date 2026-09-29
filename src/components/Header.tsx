"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Search, Menu, X, ShieldCheck } from "lucide-react";

export const Header: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top accent gradient line bar */}
      <div className="top-line-bar" />

      {/* Main sticky navigation header */}
      <header className="header-cp">
        <div className="header-inner">
          {/* Logo on the left */}
          <Link href="/" className="brand-logo-cp group">
            <div className="brand-logo-circle">
              <Check className="w-5 h-5 text-white stroke-[3]" />
            </div>
            <div className="brand-title-text">
              Best Product <span className="brand-title-highlight">Verdict</span>
            </div>
          </Link>

          {/* Search bar in the center (ConsumerPicks Webflow classes) */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <form onSubmit={handleSearchSubmit} className="search-2-6-cfddsfd">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-3 mr-1" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="search-input-2-copy-co"
              />
              <button type="submit" className="search-button-2-copy-co">
                Search
              </button>
            </form>
          </div>

          {/* Right nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="nav-menu-cp">
              <li>
                <Link href="/top-10" className="nav-link-cp">
                  Top Pick
                </Link>
              </li>
              <li>
                <Link href="/top-10/best-cordless-water-flossers" className="nav-link-cp">
                  Best Deal
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsDisclosureOpen(true)}
                  className="nav-link-cp"
                >
                  Ad Disclosure
                </button>
              </li>
              <li>
                <Link href="/contact" className="nav-link-cp">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile responsive menu drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-5 space-y-4 shadow-lg animate-fadeIn">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearchSubmit} className="search-2-6-cfddsfd w-full max-w-none">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-3 mr-1" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="search-input-2-copy-co"
              />
              <button type="submit" className="search-button-2-copy-co">
                Search
              </button>
            </form>

            <div className="pt-2 space-y-2 text-sm font-semibold text-slate-800">
              <Link
                href="/top-10"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Top Pick
              </Link>
              <Link
                href="/top-10/best-cordless-water-flossers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Best Deal
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDisclosureOpen(true);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between font-semibold text-slate-800"
              >
                <span>Ad Disclosure</span>
                <ShieldCheck className="w-4 h-4 text-[#00c092]" />
              </button>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                Top Categories
              </div>
              <div className="space-y-1">
                <Link
                  href="/top-10/best-wireless-meat-thermometers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50"
                >
                  Wireless Meat Thermometers
                </Link>
                <Link
                  href="/top-10/best-cordless-water-flossers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50"
                >
                  Cordless Water Flossers
                </Link>
                <Link
                  href="/top-10/best-mini-massage-guns"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50"
                >
                  Mini Massage Guns
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Disclosure modal popup (ConsumerPicks Webflow classes) */}
      {isDisclosureOpen && (
        <div
          className="disclosureboxbanks popupbank1 popup"
          onClick={() => setIsDisclosureOpen(false)}
        >
          <div
            className="disclosure-card-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="disclosure-card-title">Advertiser &amp; Editorial Disclosure</h3>
              <button
                type="button"
                onClick={() => setIsDisclosureOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="disclosure-card-text">
              If you buy a product after clicking one of our links, we may be paid a commission at no extra cost to you. Best Product Verdict is an independent product comparison service funded by affiliate referral partnerships. Our ratings, scores, and rankings are calculated using objective editorial testing and verified review analytics.
            </p>
            <div className="flex items-center justify-between pt-2">
              <Link
                href="/advertiser-disclosure"
                onClick={() => setIsDisclosureOpen(false)}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                Read Full Disclosure Policy &rarr;
              </Link>
              <button
                type="button"
                onClick={() => setIsDisclosureOpen(false)}
                className="disclosure-got-it-btn"
              >
                Okay, I Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
