"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";
import { type LedMaskGuide } from "@/data/ledMaskGuidesData";
import {
  criteriaHtml,
  productsAndVerdictHtml,
  tableHtml,
  mobileStickyHtml,
  footerHtml,
} from "@/features/led-mask-reference/referenceSlices";
import { LedMaskReferenceControls } from "@/features/led-mask-reference/LedMaskReferenceControls";
import "@/features/led-mask-reference/reference.css";
import "@/features/led-mask-reference/theme.css";

/* Dynamic UK Date Formatter matching Best Mask Reference Page */
function useCurrentDateFormatted() {
  const [currentDateFormatted, setCurrentDateFormatted] = useState("19 November 2026");

  useEffect(() => {
    try {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString("en-GB", { month: "long" });
      const year = now.getFullYear();
      setCurrentDateFormatted(`${day} ${month} ${year}`);
    } catch {
      setCurrentDateFormatted("19 November 2026");
    }
  }, []);

  return currentDateFormatted;
}

export function LuxuryLedMaskLandingPage({ guide }: { guide: LedMaskGuide }) {
  const [openFaqIndices, setOpenFaqIndices] = useState<Record<number, boolean>>({ 0: true });
  const currentDateFormatted = useCurrentDateFormatted();

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
        {/* 1. TOP HEADER BANNER (Deep Royal Slate-Navy Theme Banner with UK Flag & Dynamic Date) */}
        <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Category / Comparison Pill */}
            {guide.cardCode && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-extrabold uppercase tracking-widest mb-3 backdrop-blur-xs">
                <span>{guide.cardCode}</span>
              </div>
            )}

            <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
              <span className="block">{guide.headline}</span>
              <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
                <svg aria-label="United Kingdom flag" className="h-5 w-8 overflow-hidden rounded-[3px] border border-white/40 shadow-sm md:h-6 md:w-9 shrink-0 inline-block" role="img" viewBox="0 0 38 24">
                  <rect fill="#012169" height="24" width="38" />
                  <path d="M0 0 38 24M38 0 0 24" stroke="#fff" strokeWidth="5" />
                  <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" strokeWidth="2" />
                  <path d="M19 0v24M0 12h38" stroke="#fff" strokeWidth="8" />
                  <path d="M19 0v24M0 12h38" stroke="#c8102e" strokeWidth="4" />
                </svg>
                <span>United Kingdom - 2026</span>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
              <CheckCircle2 size={20} className="text-white shrink-0" />
              <span>Last updated – <span data-led-updated-date="">{currentDateFormatted}</span></span>
            </div>
          </div>
        </div>

        {/* 2. HEADER: HERO IMAGE & DR. SHANNON CREDENTIALS CARD */}
        <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Guide Hero Image */}
            {guide.heroImage && (
              <img
                alt={guide.headline}
                className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
                decoding="async"
                fetchPriority="high"
                loading="eager"
                src={guide.heroImage}
              />
            )}

            {/* Dr. Shannon Certified Dermatologist Box */}
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
              <div className="flex flex-col md:block items-center text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                  <img
                    alt="Dr. Shannon"
                    className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                    src="/img/dr-shannon.png"
                  />
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl underline text-slate-900 font-serif">Dr. Shannon</h3>
                    <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                      Certified Dermatologist
                    </p>
                  </div>
                </div>

                <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 font-sans">
                  {guide.drShannonVerdict ? (
                    <>
                      <p className="italic mb-3 text-slate-800 font-medium">
                        &ldquo;{guide.drShannonVerdict.quote}&rdquo;
                      </p>
                      <p>{guide.drShannonVerdict.clinicalRationale}</p>
                      {guide.drShannonVerdict.recommendation && (
                        <p className="mt-3 font-semibold text-slate-900">
                          {guide.drShannonVerdict.recommendation}
                        </p>
                      )}
                    </>
                  ) : (
                    <p>
                      With 10+ years of experience in skincare and beauty technology, <strong className="text-slate-900">Dr. Shannon</strong> is a certified dermatologist and beauty technology expert. She reviewed 18 popular United Kingdom LED face mask options over 200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and guarantees. Her biggest finding was simple: the most expensive mask was not always the best choice. The strongest options used the right wavelengths, gave even face-and-neck coverage, and were easy enough to use consistently at home.
                    </p>
                  )}
                </div>

                <hr className="border-slate-200 w-full mb-4" />
                <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                  * Recommended by over 1,000 UK buyers skincare users.
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3. MAIN CONTENT CONTAINER */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Quick Take / Editorial Intro */}
          <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
            {guide.subheadline && (
              <p className="text-xl md:text-2xl font-serif font-bold text-slate-900 leading-snug">
                {guide.subheadline}
              </p>
            )}

            {guide.quickTake && (
              <div className="p-5 md:p-6 rounded-2xl bg-slate-100 border-l-4 border-emerald-500 text-slate-800 text-base md:text-lg leading-relaxed shadow-xs">
                <strong>Executive Takeaway:</strong> {guide.quickTake}
              </div>
            )}

            {guide.intro && guide.intro.map((p, idx) => (
              <p key={idx} className="text-base md:text-lg text-slate-700 leading-relaxed font-sans">
                {p}
              </p>
            ))}
          </div>

          {/* 4. 10 EVALUATION CRITERIA (Exact Reference Slice) */}
          <div dangerouslySetInnerHTML={{ __html: criteriaHtml }} />

          {/* 5. HEAD-TO-HEAD SPECIFICATION MATRIX (Specific to this Guide) */}
          {guide.comparisonRows && guide.comparisonRows.length > 0 && (
            <section className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-slate-200 mb-10 md:mb-16">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                  Head-to-Head Specification Matrix
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
                  {guide.headline}
                </h3>
              </div>
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-left border-collapse border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden min-w-[600px] font-sans">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs sm:text-sm uppercase tracking-wider">
                      <th className="py-3.5 px-4">Feature / Metric</th>
                      <th className="py-3.5 px-4 bg-emerald-500 text-white font-extrabold text-center">Buudy 7 Colour</th>
                      <th className="py-3.5 px-4 text-center">Benchmark / Competitor</th>
                      <th className="py-3.5 px-4">Clinical Relevance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {guide.comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-3.5 px-4 text-center font-bold text-emerald-800 bg-emerald-50/30 border-x border-slate-100">
                          {row.buudy}
                        </td>
                        <td className="py-3.5 px-4 text-center text-slate-700">{row.competitor}</td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{row.whyItMatters}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* 6. BUYER GUIDANCE BLOCKS (Specific to this Guide) */}
          {guide.buyerBlocks && guide.buyerBlocks.length > 0 && (
            <section className="mb-14 space-y-6">
              {guide.buyerBlocks.map((block, bIdx) => (
                <div key={bIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                      {bIdx + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        {block.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-sans">
                        {block.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* 7. 10 PRODUCT CARDS + DERMATOLOGIST'S VERDICT VIDEO SECTION (Exact Reference Slices) */}
          <div dangerouslySetInnerHTML={{ __html: productsAndVerdictHtml }} />

          {/* 8. SIDE-BY-SIDE COMPARISON TABLE (Exact Reference Slice) */}
          <div dangerouslySetInnerHTML={{ __html: tableHtml }} />

          {/* 9. CLINICAL FAQ ACCORDION (Specific to this Guide) */}
          {guide.faqs && guide.faqs.length > 0 && (
            <section className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-16 max-w-4xl mx-auto font-sans">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center font-serif">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {guide.faqs.map((faq, fIdx) => {
                  const isOpen = !!openFaqIndices[fIdx];
                  return (
                    <div key={fIdx} className="border border-slate-200 rounded-xl overflow-hidden transition-all">
                      <button
                        type="button"
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                          <HelpCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
                          <span>{faq.question}</span>
                        </span>
                        <span className="shrink-0 mt-1 text-slate-400">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed pl-11 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>

        {/* 10. EDITORIAL FOOTER & DISCLOSURES (Exact Reference Slice) */}
        <div dangerouslySetInnerHTML={{ __html: footerHtml }} />

        {/* 11. MOBILE BOTTOM STICKY BAR (Exact Reference Slice) */}
        <div dangerouslySetInnerHTML={{ __html: mobileStickyHtml }} />

        {/* 12. REFERENCE CLIENT CONTROLS & EXIT POPUP */}
        <LedMaskReferenceControls />
        <Script
          id="buudy-exit-popup"
          src="/assets/buudy-exit-popup-20261104.js"
          data-popup-site="bestproductverdict"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
