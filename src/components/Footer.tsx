"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-16">
      {/* "Back to Top" top bar */}
      <div className="w-full bg-[#f1f3f5] border-t border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <button
            onClick={scrollToTop}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Main footer content (clean white / slate-50 background) */}
      <div className="w-full bg-white text-slate-600 text-sm py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Left Column: Brand Logo & Tagline */}
            <div className="space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-full bg-[#00c092] flex items-center justify-center text-white shadow-sm">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Best Product
                  </span>
                  <span className="text-lg font-extrabold text-[#00c092] tracking-tight">
                    Verdict
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                Breaking down the online shopping barrier to help you make the right purchasing decisions.
              </p>

              {/* DMCA Protected Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-white text-[11px] font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-emerald-400">DMCA</span>
                  <span className="text-slate-300 font-normal">PROTECTED</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 pt-1">
                © 2026 Best Product Verdict. All Rights Reserved.
              </div>
            </div>

            {/* Column 2: Stores */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Stores
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://www.amazon.co.uk"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Amazon
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ebay.co.uk"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Ebay
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.currys.co.uk"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Currys
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.argos.co.uk"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Argos
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.johnlewis.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    John Lewis
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="hover:text-slate-900 transition-colors block py-0.5">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-slate-900 transition-colors block py-0.5">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-slate-900 transition-colors block py-0.5">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Policies */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Policies
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/advertiser-disclosure"
                    className="hover:text-slate-900 transition-colors block py-0.5"
                  >
                    Advertiser Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Support
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/contact" className="hover:text-slate-900 transition-colors block py-0.5">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/mailing-list" className="hover:text-slate-900 transition-colors block py-0.5">
                    Mailing List
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-slate-900 transition-colors block py-0.5">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom UK advertising & affiliate disclosure text compliant with ASA/FTC */}
      <div className="w-full bg-[#f8f9fa] py-6 px-4 sm:px-6 lg:px-8 text-[11px] text-slate-500 leading-relaxed border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00c092]" />
            <span>UK Advertising &amp; Affiliate Disclosure:</span>
          </div>
          <p>
            Best Product Verdict is an independent commercial product review and comparison website. We participate in affiliate marketing programmes, including the Amazon EU Associates Programme, which allows us to earn advertising fees by linking to Amazon.co.uk, Amazon.com, and affiliated merchant stores at zero extra cost to you. Product pricing, stock availability, and merchant specifications are accurate at the time of publication but are subject to change.
          </p>
          <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[10px]">
            <p>Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
            <p>© 2026 Best Product Verdict (bestproductverdict.co.uk). All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
