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
  FileCheck
} from "lucide-react";

export const metadata = {
  title: "Brand Partnerships & Lab Submissions | Best Product Verdict",
  description: "Product submission guidelines and commercial partnership information for brands, PR agencies, and manufacturers.",
};

export default function PartnershipsPage() {
  const submissionSteps = [
    {
      step: "01",
      title: "Initial Product Submission Form",
      desc: "Brands or PR representatives submit technical product specifications, UKCA/CE compliance certificates, and retail availability timelines."
    },
    {
      step: "02",
      title: "Editorial Benchmark Evaluation",
      desc: "Our senior testing board reviews the product to determine if it meets consumer demand criteria and warrants inclusion in an upcoming lab round-up."
    },
    {
      step: "03",
      title: "Standardized Lab & Panel Testing",
      desc: "The device enters our London laboratory for 2 to 6 weeks of standardized measurement rigs, stress tests, and real-world trials."
    },
    {
      step: "04",
      title: "Objective Publication of Verdict",
      desc: "Results and rankings are published according to our 10-point scoring matrix. Negative flaws and positive benchmarks are shared transparently."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0e1e2d] via-[#13283c] to-[#0b1724] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-semibold">
            <Handshake className="w-4 h-4 text-[#00d6b6]" />
            <span>Brand Outreach & Product Submissions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Partner With Best Product Verdict
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Information for consumer brands, hardware manufacturers, and PR representatives seeking lab benchmarking and comparative review evaluations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Core Submission Policy Box */}
        <div className="bg-amber-50 border border-amber-200 p-6 sm:p-8 rounded-3xl space-y-3 text-amber-950">
          <div className="flex items-center gap-2 font-bold text-base text-amber-900">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            <span>Crucial Rule: Product Submissions Do Not Guarantee Positive Verdicts</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
            Best Product Verdict maintains strict editorial independence. While we welcome product submissions and technical briefs from brands, <strong>submitting a unit for lab evaluation NEVER guarantees a positive review, a #1 Verdict badge, or inclusion in our Top 10 rankings</strong>. All products are evaluated strictly against empirical test results.
          </p>
        </div>

        {/* What We Offer to Reputable Brands */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Why Partner with Best Product Verdict?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Over 8 million UK consumers consult Best Product Verdict before making purchasing decisions. When high-performing products excel in our testing lab, our data-backed endorsement delivers unprecedented credibility and qualified buyer engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0087ee] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Definitive UK Authority</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rankings backed by our London testing facility, digital instrument logs, and certified engineers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Beaker className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Constructive Feedback</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We share anonymized mechanical data and usability feedback to help engineering teams refine hardware.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">Affiliate Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless outbound integration with merchant stores, Amazon UK, and major affiliate networks.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step Submission Process */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-slate-900">
            How the Product Submission Process Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {submissionSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2"
              >
                <span className="text-xs font-black text-[#0087ee] bg-blue-50 px-2 py-0.5 rounded">
                  Phase {step.step}
                </span>
                <h3 className="font-bold text-sm text-slate-900 pt-1">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Form Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Submit a Product for Evaluation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Please include product spec sheets, UK pricing, retail distribution channels, and press kit links in your outreach.
          </p>

          <div className="pt-2">
            <a
              href="mailto:contact@bestproductverdict.com?subject=Product Lab Submission - [Brand Name]"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0087ee] hover:bg-[#006bbd] text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Email Partnerships Desk (contact@bestproductverdict.com)</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            Postal Address for Hardware Submissions: Best Product Verdict Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
          </div>
        </div>

      </section>

    </div>
  );
}
