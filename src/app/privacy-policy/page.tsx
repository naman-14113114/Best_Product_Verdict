import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Best Product Verdict UK",
  description: "Privacy policy and data protection standards for Best Product Verdict UK.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last updated: September 2026</p>

          <p>
            Best Product Verdict (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting and respecting your privacy in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            We collect minimal, aggregated analytical information such as browser type, referring URLs, operating system, and anonymized interaction metrics to understand which comparisons are most helpful to our visitors. We do not sell or trade personal information to third parties.
          </p>

          <h2 className="text-lg font-bold text-slate-900">2. Cookies and Tracking Technologies</h2>
          <p>
            We utilize standard cookies and analytical tags (such as Google Analytics and Microsoft Clarity) to optimize website performance and measure user engagement. When you click outbound merchant links, an affiliate tracking cookie may be placed by the respective retailer to attribute referral commissions.
          </p>

          <h2 className="text-lg font-bold text-slate-900">3. Your Rights</h2>
          <p>
            Under UK data protection laws, you have rights including access to personal information, rectification, erasure, and restriction of processing. For any privacy inquiries, please contact us at privacy@bestproductverdict.co.uk.
          </p>
        </div>
      </div>
    </div>
  );
}
