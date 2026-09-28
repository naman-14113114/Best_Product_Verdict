import React from "react";
import Link from "next/link";
import { ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                V
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Best Product <span className="text-teal-400">Verdict</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Best Product Verdict is an independent UK consumer testing and review publication. Our mission is to provide transparent, data-driven comparisons to help British shoppers make confident purchasing decisions.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Unbiased Editorial Standards</span>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Top 10 Comparisons
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/top-10/best-wireless-meat-thermometers"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Best Wireless Meat Thermometers
                </Link>
              </li>
              <li>
                <Link
                  href="/top-10/best-cordless-water-flossers"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Best Cordless Water Flossers
                </Link>
              </li>
              <li>
                <Link
                  href="/top-10/best-mini-massage-guns"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Best Mini Massage Guns
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & About */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              About &amp; Methodology
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                  About Our Editorial Board
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-white transition-colors block py-0.5">
                  Our Testing Mission
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors block py-0.5">
                  Careers &amp; Research Fellowships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block py-0.5">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/advertiser-disclosure"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Advertiser Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Privacy Policy (GDPR / UK DPA)
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-400">UK Advertising &amp; Affiliate Disclosure:</strong> Best Product Verdict is an independent commercial review website. We participate in affiliate marketing programmes, including the Amazon EU Associates Programme, which allows us to earn advertising fees by linking to Amazon.co.uk, Amazon.com, and affiliated sites. These commissions help support our comprehensive laboratory evaluations and product purchases. Product prices, availability, and specifications are accurate as of the last update date but are subject to change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
            <p>© 2026 Best Product Verdict. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Made with integrity for UK consumers</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
