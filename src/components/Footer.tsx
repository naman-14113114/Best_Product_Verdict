"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-16">
      {/* "Back to Top" top bar (ConsumerPicks Webflow classes) */}
      <div className="backtotopdiv-top10">
        <div className="backtotop">
          <button
            type="button"
            onClick={scrollToTop}
            className="backtotop-link"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Main 5-Column Footer (ConsumerPicks Webflow classes) */}
      <div className="footer-3-copy-copy-copy-copy-3-cojkjk">
        <div className="footer-row">
          {/* Column 1: Info (Logo + Tagline + DMCA + Copyright) */}
          <div className="footer-info">
            <Link href="/" className="brand-logo-cp group">
              <div className="brand-logo-circle">
                <Check className="w-4 h-4 text-white stroke-[3]" />
              </div>
              <div className="brand-title-text text-lg">
                Best Product <span className="brand-title-highlight">Verdict</span>
              </div>
            </Link>

            <p className="text-small-2">
              Breaking down the online shopping barrier to help you make the right purchasing decisions.
            </p>

            {/* DMCA Protected Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-white text-[11px] font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-emerald-400">DMCA</span>
                <span className="text-slate-300 font-normal">PROTECTED</span>
              </div>
            </div>

            <div className="text-small-2 pt-1">
              &copy; 2026 Best Product Verdict. All Rights Reserved.
            </div>
          </div>

          {/* 4 Menus Row (Stores, Company, Policies, Support) */}
          <div className="footer-menus-row">
            {/* Column 2: Stores */}
            <div className="footer-menu-column">
              <h4 className="footer-menu-title">Stores</h4>
              <a
                href="https://www.amazon.co.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footer-link-3"
              >
                Amazon
              </a>
              <a
                href="https://www.ebay.co.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footer-link-3"
              >
                Ebay
              </a>
              <a
                href="https://www.currys.co.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footer-link-3"
              >
                Currys
              </a>
              <a
                href="https://www.argos.co.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footer-link-3"
              >
                Argos
              </a>
              <a
                href="https://www.johnlewis.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="footer-link-3"
              >
                John Lewis
              </a>
            </div>

            {/* Column 3: Company */}
            <div className="footer-menu-column">
              <h4 className="footer-menu-title">Company</h4>
              <Link href="/about" className="footer-link-3">
                About
              </Link>
              <Link href="/mission" className="footer-link-3">
                Mission
              </Link>
              <Link href="/careers" className="footer-link-3">
                Careers
              </Link>
            </div>

            {/* Column 4: Policies */}
            <div className="footer-menu-column">
              <h4 className="footer-menu-title">Policies</h4>
              <Link href="/privacy-policy" className="footer-link-3">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="footer-link-3">
                Terms &amp; Conditions
              </Link>
              <Link href="/advertiser-disclosure" className="footer-link-3">
                Advertiser Disclosure
              </Link>
            </div>

            {/* Column 5: Support */}
            <div className="footer-menu-column">
              <h4 className="footer-menu-title">Support</h4>
              <Link href="/contact" className="footer-link-3">
                Contact
              </Link>
              <Link href="/mailing-list" className="footer-link-3">
                Mailing List
              </Link>
              <Link href="/partnerships" className="footer-link-3">
                Partnerships
              </Link>
            </div>
          </div>
        </div>

        {/* ASA/FTC Compliance subtext */}
        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-slate-200/80 text-[11px] text-slate-400 text-center leading-relaxed">
          Best Product Verdict is a participant in affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to official UK retail stores including Amazon.co.uk. Product prices, availability, and promotional offers are accurate as of the date/time indicated and are subject to change.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
