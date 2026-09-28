import type { Metadata } from "next";
import { ShieldCheck, Award, Users, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Editorial Board & Testing Lab | Best Product Verdict UK",
  description:
    "Meet the UK research team, lab analysts, and testing experts behind Best Product Verdict's Top 10 buying guides.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Editorial Board</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About Best Product Verdict
          </h1>

          <p className="text-base text-slate-700 leading-relaxed">
            Founded by veteran UK product analysts and testing engineers, Best Product Verdict was created with a simple purpose: to rescue British consumers from paid endorsements, generic listicles, and AI-generated misinformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <FlaskConical className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="font-bold text-slate-900 block text-base">Hands-On Testing</span>
              <span className="text-xs text-slate-500">Every recommended unit is tested in real British households.</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-6 h-6 text-teal-600 mx-auto mb-2" />
              <span className="font-bold text-slate-900 block text-base">Unbiased Scoring</span>
              <span className="text-xs text-slate-500">Strict 1.0 to 10.0 rubric based on measured lab metrics.</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <span className="font-bold text-slate-900 block text-base">UK Market Focus</span>
              <span className="text-xs text-slate-500">All prices, voltages, and warranties verified for the UK.</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-xl font-bold text-slate-900">Our Testing Philosophy</h2>
            <p>
              We believe great reviews require hard data. Whether calibrating wireless temperature probes against boiling points, testing water flosser pressure in PSI on plaque models, or measuring massage gun stall force with digital push gauges, our evaluations provide quantitative clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
