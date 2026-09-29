import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  FlaskConical, 
  Building2, 
  CheckCircle2, 
  Beaker, 
  Clock, 
  MapPin, 
  Scale, 
  Lock, 
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Independent UK Testing Lab & Editorial Board | Best Product Verdict",
  description:
    "Learn about Best Product Verdict's London research facility, standardized 4-tier testing protocol, and certified editorial board.",
};

export default function AboutPage() {
  const editorialBoard = [
    {
      name: "David Welch",
      role: "Lead Hardware Testing Analyst & Culinary Tech Specialist",
      credentials: "BEng Mechanical Systems, 12+ years evaluating consumer culinary hardware and thermal sensor dynamics.",
      focus: "Kitchen tech, thermal probes, convection air fryers",
      avatarLetter: "D",
      gradient: "from-blue-600 to-teal-500",
    },
    {
      name: "Dr. Olivia Henderson, BDS",
      role: "Senior Oral Health Consultant & Clinical Reviewer",
      credentials: "BDS University of Bristol Dental School, 14+ years clinical practice and dental hydrodynamic technology evaluation.",
      focus: "Water flossers, sonic toothbrushes, enamel preservation",
      avatarLetter: "O",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      name: "Marcus Davies",
      role: "Senior Biomechanics & Recovery Tech Specialist",
      credentials: "MSc Sports Biomechanics, Imperial College London, consultant to British athletic recovery facilities.",
      focus: "Percussion massage guns, dynamometer stall force, cryotherapy",
      avatarLetter: "M",
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      name: "Dr. Eleanor Vance, AuD, MSc",
      role: "Senior Consultant Audiologist & Acoustics Specialist",
      credentials: "AuD, MSc Audiology, 18+ years NHS & private practice specialist in multi-channel DSP digital hearing technologies.",
      focus: "Digital hearing aids, ANC acoustic attenuation, micro-electronics",
      avatarLetter: "E",
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  const protocolTiers = [
    {
      tier: "Tier 1",
      title: "Anonymous Retail Acquisition",
      desc: "We buy all test hardware through regular retail channels at full price. We never accept pre-screened golden samples or special review loaners from manufacturers.",
      icon: Lock,
    },
    {
      tier: "Tier 2",
      title: "Instrumented Bench Metrology",
      desc: "Hardware is placed on calibrated measurement benches in our London facility: NIST digital thermometers, optical spectrometers, decibel acoustic chambers, and digital force meters.",
      icon: FlaskConical,
    },
    {
      tier: "Tier 3",
      title: "6-Week UK Household Field Trials",
      desc: "Products are assigned to real UK consumer panels to evaluate everyday wear, battery longevity, British water hardness impacts, and app interface stability.",
      icon: Clock,
    },
    {
      tier: "Tier 4",
      title: "Mathematical Rubric Scoring",
      desc: "Scores from 1.0 to 10.0 are calculated using a weighted matrix. Rankings are finalized without commercial interference or editorial bias.",
      icon: Scale,
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Building2 className="w-4 h-4 text-blue-600" />
          <span>Independent UK Testing Authority</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          About Best Product Verdict
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Founded in London by veteran engineers and product analysts, Best Product Verdict was created to restore transparency and objective data to consumer hardware buying in the UK.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Core Mission Summary Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Purpose: Defeating Paid Bias with Hard Data
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In an era where online search results are flooded with AI-generated listicles, sponsored influencer shoutouts, and unverified Amazon ratings, British shoppers struggle to discover what actually works. 
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Best Product Verdict operates as an independent UK laboratory. We buy hardware anonymously, tear it down, test it to failure, and publish direct comparison tables so you can invest in gear with absolute confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 text-center space-y-2">
              <FlaskConical className="w-6 h-6 text-blue-600 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">100+ Tested Units</div>
              <div className="text-xs text-slate-500">Purchased anonymously at UK retail prices</div>
            </div>

            <div className="bg-teal-50/50 p-5 rounded-2xl border border-teal-100 text-center space-y-2">
              <ShieldCheck className="w-6 h-6 text-teal-600 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">Zero Paid Placements</div>
              <div className="text-xs text-slate-500">No brand can buy a #1 spot or altered score</div>
            </div>

            <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 text-center space-y-2">
              <Award className="w-6 h-6 text-amber-600 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">UK Market Standards</div>
              <div className="text-xs text-slate-500">Prices, plugs, and warranties verified in GBP</div>
            </div>
          </div>
        </div>

        {/* 4-Tier Testing Protocol */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Laboratory Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our 4-Tier Testing Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Every product featured in our Top 10 lists passes through all 4 rigorous stages before a verdict is rendered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {protocolTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                      {tier.tier}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Board Panel */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              The Review Panel
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Meet the Editorial Board
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Our multidisciplinary team includes mechanical engineers, licensed dental professionals, sports biomechanists, and certified audiologists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {editorialBoard.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${member.gradient} text-white font-black text-xl flex items-center justify-center shadow-md shrink-0`}>
                      {member.avatarLetter}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 leading-tight">
                        {member.name}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 block mt-0.5">
                        {member.focus}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.credentials}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Verified Editorial Board Member</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* London Headquarters & Lab Facilities */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
              <MapPin className="w-3.5 h-3.5" />
              <span>London Headquarters &amp; Physical Lab</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Based in the Heart of London
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Best Product Verdict Ltd operates out of our central London testing hub at <strong>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</strong>. All hardware teardowns, acoustic chamber measurements, and physical metrology are conducted on site.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <span>Contact Editorial Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/mission"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition-colors"
            >
              Read Editorial Mission
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
