import type { Metadata } from "next";
import Link from "next/link";
import { 
  Target, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Scale, 
  Lock, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Editorial Mission & Zero-Sponsorship Pledge | Best Product Verdict UK",
  description:
    "Learn about our strict editorial integrity code, zero pay-for-placement pledge, and independent testing standards for UK shoppers.",
};

export default function MissionPage() {
  const editorialPillars = [
    {
      title: "1. 100% Anonymous Unit Acquisition",
      desc: "We do not accept specially selected 'review samples' sent directly from manufacturers. Every unit tested is bought off the shelf or ordered through public retailers at regular pricing.",
      icon: Lock,
    },
    {
      title: "2. Zero Pay-to-Rank Policy",
      desc: "No manufacturer or marketing agency can pay to improve their rank, delete a critical flaw, or secure a '#1 Best Overall' verdict. Placements are determined solely by lab metrics.",
      icon: ShieldCheck,
    },
    {
      title: "3. Calibrated UK Testing Context",
      desc: "We test against British 230V mains voltage, UK water hardness ratings, domestic kitchen appliances, and UK warranty service standards.",
      icon: Award,
    },
    {
      title: "4. Total Commercial Transparency",
      desc: "We disclose all affiliate relationships clearly in accordance with UK Advertising Standards Authority (ASA) and FTC codes. Commissions never influence product ratings.",
      icon: Scale,
    },
    {
      title: "5. Fact-Checking & Open Corrections",
      desc: "If a manufacturer issues a firmware patch, rectifies a hardware flaw, or alters pricing, we welcome documented correction requests to keep our guides accurate.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
          <Target className="w-4 h-4 text-teal-600" />
          <span>Consumer Advocacy &amp; Integrity</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Our Editorial Mission &amp; Ethics Pledge
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We believe UK consumers deserve unvarnished truth before spending their hard-earned money on domestic hardware and wellness gear.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Zero-Sponsorship Pledge Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                The Best Product Verdict Zero-Sponsorship Guarantee
              </h2>
              <span className="text-xs text-slate-400 font-medium">Non-Negotiable Editorial Code</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            The modern internet is flooded with pay-to-play review websites that disguise affiliate ads as independent journalism. Best Product Verdict was founded as a direct countermeasure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-100 space-y-2">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>What We NEVER Do:</span>
              </div>
              <ul className="text-xs text-red-700 space-y-1.5 list-disc list-inside">
                <li>Accept paid placements or sponsored Top 10 rankings</li>
                <li>Let brands preview or edit our reviews before publication</li>
                <li>Give favorable coverage in exchange for free review hardware</li>
                <li>Hide product downsides, noise issues, or failure points</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>What We ALWAYS Do:</span>
              </div>
              <ul className="text-xs text-emerald-700 space-y-1.5 list-disc list-inside">
                <li>Acquire test units anonymously at full retail cost</li>
                <li>Run identical instrumented bench tests on all contenders</li>
                <li>Disclose all affiliate funding mechanisms upfront</li>
                <li>Update our guides when new firmware or models release</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Editorial Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The 5 Pillars of Our Editorial Code
            </h2>
          </div>

          <div className="space-y-4">
            {editorialPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start gap-4 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accountability & Contact CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Holding Us Accountable
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            If you ever believe a review has fallen short of these standards, or if you spot a factual error, our senior editor welcomes your direct feedback.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              <span>Contact Senior Editorial Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
