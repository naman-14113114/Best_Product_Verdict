"use client";

import React, { useState } from "react";
import { BuyingGuideSectionData } from "@/lib/types";
import { ChevronDown, HelpCircle, Award, CheckCircle2, FlaskConical, ShieldCheck } from "lucide-react";

interface BuyingGuideProps {
  guide: BuyingGuideSectionData;
  authorName?: string;
  authorRole?: string;
}

export const BuyingGuide: React.FC<BuyingGuideProps> = ({
  guide,
  authorName = "Best Product Verdict",
  authorRole = "Product comparison publisher",
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-12 space-y-8">
      {/* Main Guide Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="max-w-4xl">
          {/* Guide Header */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00c092] bg-teal-50 px-3 py-1 rounded-full mb-3 border border-teal-200/60">
            <Award className="w-3.5 h-3.5" />
            <span>Comprehensive Buyer&apos;s Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {guide.title}
          </h2>

          {guide.subtitle && (
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
              {guide.subtitle}
            </p>
          )}

          {/* Introduction */}
          <div className="mt-5 text-slate-700 text-sm sm:text-base leading-relaxed border-b border-slate-100 pb-6">
            <p>{guide.introduction}</p>
          </div>

          {/* Key Evaluation Factors */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#00c092]" />
              <span>5 Practical Buying Considerations</span>
            </h3>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {guide.keyFactors.map((factor, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {factor.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testing Methodology Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Desk-Research Method</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            How This Comparison Is Prepared
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {guide.testingMethodology}
          </p>

          <p className="text-xs text-slate-500">Check manufacturer information for the exact model. Retailer terms and local availability can change.</p>
        </div>
      </div>

      {/* Expert Verdict Callout Box */}
      <div className="bg-[#f0f8ff] border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#0087ee] text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Buying Summary
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">
                Authored by {authorName} ({authorRole})
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              {guide.expertVerdict}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (UK Guide)
            </h3>
          </div>

          <div className="space-y-2.5 pt-2">
            {guide.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-slate-50/60 hover:bg-slate-100 transition-colors gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-2 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingGuide;
