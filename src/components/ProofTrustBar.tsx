"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Star, CheckCircle2, ChevronDown, X, ShieldCheck, Share2, Facebook, Twitter, Linkedin, Eye } from "lucide-react";

export interface ProofTrustBarProps {
  categoryName?: string;
  updatedDate?: string;
  authorName?: string;
  auditorName?: string;
  auditName?: string;
  showTitle?: boolean;
}

export const ProofTrustBar: React.FC<ProofTrustBarProps> = ({
  categoryName = "Products",
  updatedDate = "September 2026",
  authorName = "David Welch",
  auditorName = "Eliana Hayes",
  auditName,
  showTitle = false,
}) => {
  const activeAuditor = auditorName || auditName || "Eliana Hayes";
  const [activeModal, setActiveModal] = useState<"how-we-rank" | "transparency" | null>(null);

  return (
    <div className="w-full">
      {/* Optional Top Title with Teal Accent Lines if showTitle is requested */}
      {showTitle && categoryName && (
        <>
          {/* Flag & Updated Date Pill */}
          <div className="flag-updated-row">
            <span className="flag-emoji" role="img" aria-label="UK Flag">🇬🇧</span>
            <span className="updated-date-pill">Updated: {updatedDate}</span>
          </div>

          {/* Desktop Title */}
          <h1 className="title-main-desktop-copy">
            <span className="teal-vertical-line" />
            <span>Top 10 {categoryName} - Compared &amp; Ranked By Experts</span>
          </h1>

          {/* Mobile Title */}
          <h1 className="title-main-mobile-top10">
            Top 10 {categoryName} - Compared &amp; Ranked By Experts
          </h1>

          {/* Teal Gradient Horizontal Line */}
          <div className="teal-horizontal-line" />
        </>
      )}

      {/* Author Strip (ConsumerPicks Webflow classes) */}
      <div className="cta-pointers-container-copy-4-copyauthor-top10">
        <div className="white-copy-2-author">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0">
            <Image
              src="/images/david-welch.jpg"
              alt={authorName}
              fill
              sizes="36px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <span className="authorname">{authorName}</span>
            <span className="author-role">Senior Hardware &amp; Product Editor</span>
          </div>
        </div>

        {/* Audited By Pill */}
        <div className="audited-by-pill">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Audited by {activeAuditor}</span>
        </div>

        {/* Social Share Group */}
        <div className="social-share-group">
          <button
            type="button"
            className="social-icon-btn"
            aria-label="Share this guide"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `Top 10 ${categoryName} UK`,
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="social-icon-btn"
            aria-label="Share on X / Twitter"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="social-icon-btn"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="social-icon-btn"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Proof Bar (ConsumerPicks Webflow classes) */}
      <div className="cta-pointers-container-copy-4">
        <div className="white-copy-2-top10">
          <Search className="w-4 h-4 text-[#0087ee]" />
          <span>100+ Products Analyzed</span>
        </div>

        <div className="white-copy-2-top10">
          <Star className="w-4 h-4 fill-[#d6be09] text-[#d6be09]" />
          <span>50k Reviews Evaluated</span>
        </div>

        <div className="white-copy-2-top10">
          <CheckCircle2 className="w-4 h-4 text-[#00c092]" />
          <span>30 Day Returns</span>
        </div>
      </div>

      {/* Trust Modal Pills (.cp-trust, .cp-trust__row, .cp-pill) */}
      <div className="cp-trust">
        <div className="cp-trust__row">
          <button
            type="button"
            onClick={() => setActiveModal("how-we-rank")}
            className="cp-pill cp-pill--human"
          >
            <span>🌱</span>
            <span>Ranked By Humans, Not AI</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={() => setActiveModal("transparency")}
            className="cp-pill cp-pill--quiet"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>Transparency Center</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Accessible Modals Matching ConsumerPicks (.cp-overlay, .cp-modal) */}
      {activeModal === "how-we-rank" && (
        <div className="cp-overlay" onClick={() => setActiveModal(null)}>
          <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cp-modal__head">
              <h3 className="cp-modal__title">
                <span className="text-base">🌱</span>
                <span>Our 100% Human Testing &amp; Ranking Methodology</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="cp-modal__close"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="cp-modal__scroll">
              <div className="cp-qa">
                <h4>Why Human Testing Matters</h4>
                <p>
                  In a web cluttered with automated AI scrapers and regurgitated summaries, Best Product Verdict operates an independent product testing facility in the UK. Every device is tested hands-on, unboxed, evaluated for build quality, and benchmarked against manufacturer specifications.
                </p>
              </div>

              <div className="cp-qa">
                <h4>Our 4-Stage Evaluation Matrix</h4>
                <p>
                  1. <strong>Hardware Lab Benchmarking:</strong> Accurate thermal, acoustic, and pressure measurements.<br />
                  2. <strong>User Experience Testing:</strong> Daily usability, battery life, ergonomics, and cleaning friction.<br />
                  3. <strong>Verified Sentiment Analysis:</strong> Cross-checking 1,000s of verified customer reviews to spot long-term durability faults.<br />
                  4. <strong>Value Calculation:</strong> Price-to-performance ratio vs current UK market alternatives.
                </p>
              </div>

              <div className="cp-qa">
                <h4>Zero Paid Ranking Adjustments</h4>
                <p>
                  Our ratings cannot be bought. A brand cannot pay to jump from #5 to #1.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-closebtn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeModal === "transparency" && (
        <div className="cp-overlay" onClick={() => setActiveModal(null)}>
          <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cp-modal__head">
              <h3 className="cp-modal__title">
                <Eye className="w-4 h-4 text-[#0087ee]" />
                <span>Editorial &amp; Advertiser Transparency Center</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="cp-modal__close"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="cp-modal__scroll">
              <div className="cp-qa">
                <h4>How We Keep Our Content Free</h4>
                <p>
                  Best Product Verdict is a free consumer comparison resource. When you click our outbound retailer links and make a purchase, we may receive an affiliate commission from merchant partners.
                </p>
              </div>

              <div className="cp-qa">
                <h4>Does It Affect Product Pricing?</h4>
                <p>
                  No. You will never pay more by clicking our links. In fact, we frequently track and list exclusive discounts, coupon codes, and bundle promotions to save you money.
                </p>
              </div>

              <div className="cp-qa">
                <h4>Editorial Independence</h4>
                <p>
                  Our editorial review team functions independently of our commercial partnerships. Placement in our Top 10 guides is strictly merit-based.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-closebtn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProofTrustBar;
