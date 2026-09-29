import React from "react";
import Link from "next/link";
import { 
  Handshake, 
  Beaker, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  Send, 
  ArrowRight,
  HelpCircle,
  FileCheck,
  Building2,
  Lock,
  Clock
} from "lucide-react";

export const metadata = {
  title: "Brand Partnerships & Lab Submissions | Best Product Verdict UK",
  description:
    "Product submission guidelines and commercial partnership information for brands, PR agencies, and hardware manufacturers.",
};

export default function PartnershipsPage() {
  const submissionSteps = [
    {
      step: "01",
      title: "Initial Product Submission Form",
      desc: "Brands or PR representatives submit technical product specifications, UKCA/CE compliance certificates, and UK retail availability timelines.",
      icon: FileCheck,
    },
    {
      step: "02",
      title: "Editorial Demand Review",
      desc: "Our senior testing board reviews the product to determine if it meets UK consumer search interest and warrants inclusion in an upcoming lab round-up.",
      icon: Clock,
    },
    {
      step: "03",
      title: "Standardized Lab Testing (2-6 Weeks)",
      desc: "The device enters our London laboratory for instrumented measurement rigs, thermal stress tests, battery degradation runs, and panel trials.",
      icon: Beaker,
    },
    {
      step: "04",
      title: "Objective Publication of Verdict",
      desc: "Results and rankings are published according to our 10-point scoring matrix. Negative flaws and positive benchmarks are shared transparently.",
      icon: Award,
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Handshake className="w-4 h-4 text-blue-600" />
          <span>Brand Outreach &amp; Product Submissions</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Partner With Best Product Verdict
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Information for consumer brands, hardware manufacturers, and PR representatives seeking lab benchmarking and comparative review evaluations.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Core Submission Policy Box */}
        <div className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-3xl space-y-3 text-amber-950">
          <div className="flex items-center gap-2.5 font-bold text-base text-amber-900">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            <span>Crucial Rule: Product Submissions Do Not Guarantee Positive Verdicts</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
            Best Product Verdict maintains strict editorial independence. While we welcome product submissions and technical briefs from brands, <strong>submitting a unit for lab evaluation NEVER guarantees a positive review, a #1 Verdict badge, or inclusion in our Top 10 rankings</strong>. All products are evaluated strictly against empirical test results.
          </p>
        </div>

        {/* What We Offer to Reputable Brands */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Commercial Credibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Reputable Brands Partner With Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Over 8 million UK consumers consult Best Product Verdict before making purchasing decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Definitive UK Authority</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rankings backed by our London testing facility, digital instrument logs, and certified engineers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Beaker className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Engineering Feedback</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We share anonymized mechanical data and usability feedback to help engineering teams refine hardware.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Affiliate Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless outbound integration with merchant stores, Amazon UK, and major affiliate networks.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Submission Process */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Protocol Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How the Product Submission Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {submissionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Phase {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 pt-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Submission Callout Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Submit a Product for Evaluation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Please include product spec sheets, UK retail pricing in GBP, distribution channels, and press kit links in your outreach.
          </p>

          <div className="pt-2">
            <a
              href="mailto:contact@bestproductverdict.co.uk?subject=Product Lab Submission - [Brand Name]"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Email Partnerships Desk (contact@bestproductverdict.co.uk)</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            Postal Address for Hardware Submissions: Best Product Verdict Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
          </div>
        </div>

      </div>

    </div>
  );
}
