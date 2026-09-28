"use client";

import React, { useState } from "react";
import { BuyingGuideSectionData } from "@/lib/types";
import { ChevronDown, HelpCircle, Award, CheckCircle2, FlaskConical, ShieldCheck } from "lucide-react";

interface BuyingGuideProps {
  guide: BuyingGuideSectionData;
  authorName?: string;
  authorRole?: string;
}

export const BuyingGuide: React.FC<BuyingGuideProps> = ({ guide, authorName = "David Welch", authorRole = "Senior Product Analyst" }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-14 space-y-12">
      {/* Main Guide Container */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 md:p-10">
        <div className="max-w-4xl">
          {/* Guide Header */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-200/60">
            <Award className="w-3.5 h-3.5" />
            <span>Comprehensive Buyer&apos;s Advisory</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {guide.title}
          </h2>

          {guide.subtitle && (
            <p className="text-base text-slate-600 mt-2 font-medium">
              {guide.subtitle}
            </p>
          )}

          {/* Introduction */}
          <div className="mt-6 text-slate-700 text-sm md:text-base leading-relaxed space-y-4 border-b border-slate-100 pb-8">
            <p>{guide.introduction}</p>
          </div>

          {/* Key Evaluation Factors */}
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              <span>5 Critical Factors We Evaluate Before Recommending</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {guide.keyFactors.map((factor, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-200 transition-colors"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 text-blue-900">
                    {factor.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testing Methodology Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-6 md:p-10 border border-slate-800 shadow-md">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800/80">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Standardized Lab Protocols</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            How We Test & Benchmark Hardware in the UK
          </h3>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {guide.testingMethodology}
          </p>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
              <span className="text-2xl font-black text-teal-400 block">100%</span>
              <span className="text-[11px] text-slate-400 font-medium uppercase">UK Hands-On Tested</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
              <span className="text-2xl font-black text-blue-400 block">140h+</span>
              <span className="text-[11px] text-slate-400 font-medium uppercase">Lab Benchmarking</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
              <span className="text-2xl font-black text-amber-400 block">£0</span>
              <span className="text-[11px] text-slate-400 font-medium uppercase">Paid Placement</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80">
              <span className="text-2xl font-black text-emerald-400 block">Strict</span>
              <span className="text-[11px] text-slate-400 font-medium uppercase">Data Integrity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Verdict Callout Box */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50/70 border-2 border-blue-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Editorial Board Final Verdict
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">
                Authored by {authorName} ({authorRole})
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
              {guide.expertVerdict}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 md:p-10">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions (UK Guide)
            </h3>
          </div>

          <div className="space-y-3 pt-2">
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
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-slate-50/60 hover:bg-slate-100 transition-colors gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 md:p-5 pt-2 bg-white text-sm text-slate-700 leading-relaxed border-t border-slate-100 animate-fadeIn">
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
