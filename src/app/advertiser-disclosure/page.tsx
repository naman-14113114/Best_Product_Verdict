import type { Metadata } from "next";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Advertiser & Editorial Disclosure | Best Product Verdict UK",
  description:
    "Learn about our editorial independence, affiliate relationships, and how Best Product Verdict remains free for UK readers.",
};

export default function AdvertiserDisclosurePage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Transparency &amp; Trust Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Advertiser &amp; Editorial Disclosure
          </h1>

          <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="font-medium text-sm leading-relaxed">
              Best Product Verdict is an independent, advertising-supported comparison and product review website. We believe in complete transparency regarding how our research is funded and how our rankings are generated.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h2 className="text-xl font-bold text-slate-900">How We Make Money</h2>
            <p>
              Best Product Verdict is 100% free to access for all readers. We do not require subscriptions, paywalls, or paid memberships. Instead, we participate in affiliate marketing programmes and direct retail partnerships. When you click links on our site that direct you to external merchant retailers (such as Amazon.co.uk or brand storefronts) and complete a qualifying purchase, we may receive a small referral commission at no additional cost to you.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Does This Affect What You Pay?</h2>
            <p className="font-semibold text-slate-900">
              No. Commission fees are paid directly by the retail merchants out of their standard marketing budgets. You will never pay higher prices by clicking through Best Product Verdict. In fact, our editorial relationships frequently allow us to highlight exclusive discount voucher codes and bundle bonuses for our readers.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Editorial Independence &amp; Ranking Criteria</h2>
            <p>
              Our scores, ranking orders, and Best Overall recommendations are decided strictly by our in-house testing team based on physical hardware evaluations, benchmark data, verified customer reviews, build quality, and value-for-money metrics.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>No Paid Ranks:</strong> Manufacturers and brands cannot buy a higher ranking on our Top 10 lists.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Objective Testing:</strong> Every product is benchmarked against identical physical parameters and lab protocols.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>UK Compliance:</strong> We adhere strictly to the UK Advertising Standards Authority (ASA) and Committee of Advertising Practice (CAP) guidelines.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900">Amazon EU Associates Disclosure</h2>
            <p className="text-xs text-slate-500">
              Best Product Verdict is a participant in the Amazon Services LLC Associates Program and Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk, Amazon.com, and affiliated properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
