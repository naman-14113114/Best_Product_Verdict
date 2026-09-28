import type { Metadata } from "next";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Research Fellowships | Best Product Verdict UK",
  description: "Join the technical testing and editorial team at Best Product Verdict UK.",
};

export default function CareersPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Opportunities</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Careers at Best Product Verdict</h1>

          <p>
            We are always looking for meticulous hardware testers, electrical engineers, culinary specialists, and investigative product journalists to join our London laboratory and remote review panel.
          </p>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Open Positions:</h3>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-2">
              <li>Senior Consumer Electronics Test Engineer (London Lab)</li>
              <li>Oral Care &amp; Health Tech Contributing Reviewer (Remote UK)</li>
              <li>Culinary Hardware &amp; BBQ Specialist (Remote UK)</li>
            </ul>
            <p className="text-xs text-slate-500 pt-2">
              To apply, please send your CV and portfolio to <span className="font-semibold text-slate-800">careers@bestproductverdict.co.uk</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
