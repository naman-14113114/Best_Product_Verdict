import type { Metadata } from "next";
import { Target, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Testing Mission | Best Product Verdict UK",
  description: "Learn about the mission, values, and testing standards of Best Product Verdict UK.",
};

export default function MissionPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <Target className="w-4 h-4 text-teal-600" />
            <span>Our Mission</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Empowering UK Consumers With Truth in Product Testing
          </h1>

          <p>
            In an era where the internet is saturated with incentivized influencer sponsorships and fabricated five-star ratings, finding genuine, trustworthy product advice has never been more difficult.
          </p>

          <p>
            At Best Product Verdict, our mission is to eliminate guesswork. We invest in physical hardware purchases, establish standardized laboratory test benches, and subject every product to the exact real-world stresses it will encounter in British homes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" /> Zero Pay-to-Win
              </span>
              <p className="text-xs text-slate-600">No brand can buy their way into our Top 10 rankings. Placements are earned solely on merit.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" /> Real-World Relevance
              </span>
              <p className="text-xs text-slate-600">We test products against British electrical standards, water hardness levels, and cooking styles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
