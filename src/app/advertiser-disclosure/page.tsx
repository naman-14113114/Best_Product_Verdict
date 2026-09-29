import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Info, 
  CheckCircle2, 
  Lock, 
  Award, 
  ExternalLink,
  Scale,
  Building2,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advertiser & Affiliate Disclosure | Best Product Verdict UK",
  description:
    "Full transparency affiliate and advertising disclosure for Best Product Verdict UK, compliant with ASA, CAP, and FTC guidelines.",
};

export default function AdvertiserDisclosurePage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Trust &amp; Transparency Standards</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Advertiser &amp; Editorial Disclosure
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We believe UK consumers deserve absolute clarity regarding how our lab research is funded, how rankings are generated, and why our content remains 100% free.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Core Summary Info Box */}
        <div className="bg-blue-50/70 border border-blue-200 p-6 sm:p-8 rounded-3xl text-blue-950 space-y-3">
          <div className="flex items-center gap-2.5 font-bold text-base text-blue-900">
            <Info className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Plain-English Summary for UK Readers</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-blue-900">
            Best Product Verdict is an independent consumer comparison publication. When you click outbound retail links on our website (such as Amazon.co.uk or manufacturer official stores) and complete a purchase, we may receive a small referral commission at <strong>no extra cost to you</strong>. These affiliate fees fund our physical laboratory purchases, engineering equipment, and operational overhead. <strong>Commissions never influence our test results or ranking order.</strong>
          </p>
        </div>

        {/* Detailed Sections Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. How We Fund Our Testing Laboratory
            </h2>
            <p>
              Best Product Verdict is 100% free to access for all readers. We do not require monthly subscriptions, paywalls, or gated memberships. Instead, we participate in affiliate marketing programmes and direct merchant referral networks.
            </p>
            <p>
              When our testing panel identifies a standout device, we include links to reputable UK and global merchants where you can check live prices and purchase the product. If you complete a qualifying purchase, the merchant pays us a small percentage of the sale as an advertising referral fee.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Does This Affect What You Pay?
            </h2>
            <p className="font-semibold text-slate-900">
              No. You will never pay higher prices by clicking through Best Product Verdict links.
            </p>
            <p>
              Referral fees are paid directly out of the merchant&apos;s standard marketing budget. In fact, our editorial relationships with reputable brands frequently enable us to secure exclusive discount voucher codes, extended warranties, or free gift bundle perks for our readers.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Strict Editorial Independence &amp; Scoring Firewall
            </h2>
            <p>
              Our scoring rubrics, ranking orders, and &ldquo;#1 Best Overall&rdquo; badges are determined strictly by our in-house testing engineers and clinical review board. Our commercial partnerships team operates behind a strict firewall from our editorial evaluators.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1" />
                <strong className="text-xs text-slate-900 block">No Paid Ranks</strong>
                <span className="text-[11px] text-slate-500">Brands cannot buy a spot on our Top 10 lists.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1" />
                <strong className="text-xs text-slate-900 block">Equal Benchmarking</strong>
                <span className="text-[11px] text-slate-500">Every contender is tested against identical lab metrics.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1" />
                <strong className="text-xs text-slate-900 block">Flaws Disclosed</strong>
                <span className="text-[11px] text-slate-500">We highlight cons, noise, and durability risks clearly.</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Amazon EU Associates Programme Disclosure
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono">
              Best Product Verdict is a participant in the Amazon Services LLC Associates Program and Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk, Amazon.com, and affiliated properties.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Regulatory Compliance (UK ASA, CAP Code &amp; US FTC)
            </h2>
            <p>
              We adhere strictly to the UK Advertising Standards Authority (ASA) and Committee of Advertising Practice (CAP) guidelines regarding transparency, clear labeling of affiliate links, and substantiated performance claims. We also comply with the US Federal Trade Commission (FTC) Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255).
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>Last Updated: September 2026 • Best Product Verdict Ltd</div>
            <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
              Have questions about our disclosures? Contact us →
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
