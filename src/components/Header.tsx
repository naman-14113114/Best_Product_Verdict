"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Search, Menu, X, ShieldCheck } from "lucide-react";
import { DisclosureModal } from "./DisclosureModal";

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
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00c092] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Check className="w-5 h-5 text-white stroke-[3]" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Best Product
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#00c092] tracking-tight">
                Verdict
              </span>
            </div>
          </Link>

          {/* Search bar in the center */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative flex items-center w-full border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#00c092]/30 focus-within:border-[#00c092] transition-all">
                <Search className="w-4 h-4 text-slate-400 shrink-0 ml-3 mr-1" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full py-2 px-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border-l border-slate-200 transition-colors shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link
              href="/top-10"
              className="hover:text-slate-900 transition-colors py-1"
            >
              Top Pick
            </Link>

            <Link
              href="/top-10/best-cordless-water-flossers"
              className="hover:text-slate-900 transition-colors py-1"
            >
              Best Deal
            </Link>

            <button
              onClick={() => setIsDisclosureOpen(true)}
              className="hover:text-slate-900 transition-colors py-1 cursor-pointer font-medium text-slate-600"
            >
              Ad Disclosure
            </button>

            <Link
              href="/contact"
              className="hover:text-slate-900 transition-colors py-1"
            >
              Contact
            </Link>
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
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative flex items-center w-full border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#00c092]/30 focus-within:border-[#00c092]">
                <Search className="w-4 h-4 text-slate-400 shrink-0 ml-3 mr-1" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full py-2 px-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border-l border-slate-200 transition-colors shrink-0"
                >
                  Search
                </button>
              </div>
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

      {/* Reusable Disclosure Modal */}
      <DisclosureModal isOpen={isDisclosureOpen} onClose={() => setIsDisclosureOpen(false)} />
    </>
  );
};

export default Header;
