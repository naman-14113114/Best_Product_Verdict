import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  Scale, 
  ShieldCheck, 
  Building2, 
  AlertCircle,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions of Use | Best Product Verdict UK",
  description:
    "Terms and Conditions of Use for Best Product Verdict UK, governed under the laws of England and Wales.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Scale className="w-4 h-4 text-blue-600" />
          <span>Legal Agreement &amp; Governance</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Terms and Conditions
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Effective Date: September 2026 • Governed under the laws and jurisdiction of England and Wales.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-1">
            <strong className="block text-amber-900 font-bold">Important Notice:</strong>
            <span>By accessing, reading, or browsing <strong>https://www.bestproductverdict.co.uk</strong>, you signify that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any provision, you must discontinue use immediately.</span>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. About Us and Operating Entity
            </h2>
            <p>
              This website is operated by <strong>Best Product Verdict Ltd</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a company registered in England and Wales, with its registered corporate facility at <strong>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Intellectual Property Rights &amp; Copyright
            </h2>
            <p>
              All content on this website—including but not limited to written comparison reviews, laboratory benchmark data, 10-point scoring rubrics, teardown photographs, bespoke infographics, and proprietary page designs—is the exclusive intellectual property of Best Product Verdict Ltd and is protected under the Copyright, Designs and Patents Act 1988 and international intellectual property treaties.
            </p>
            <p>
              You may print or download extracts for your own personal, non-commercial use only. Automated web scraping, data harvesting, or republication of our ranking tables without prior written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Nature of the Service &amp; Editorial Independence
            </h2>
            <p>
              Best Product Verdict provides independent consumer buying guides and product comparison tables. While our reviews reflect rigorous empirical testing and genuine expert analysis, all content is provided for general informational and educational purposes only.
            </p>
            <p>
              We do not provide medical advice, electrical engineering certifications, or formal warranties on behalf of manufacturers. Always consult qualified healthcare professionals or certified appliance technicians before making specialized purchases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. External Merchant Links &amp; Affiliate Relationships
            </h2>
            <p>
              Our website contains links directing users to external third-party merchant platforms (e.g. Amazon.co.uk and official brand storefronts). As detailed in our <Link href="/advertiser-disclosure" className="text-blue-600 hover:underline font-semibold">Advertiser Disclosure</Link>, we may earn affiliate commissions on qualifying purchases.
            </p>
            <p>
              We do not control, own, or operate these third-party websites and are not responsible for their checkout processes, return policies, warranty fulfillment, delivery timelines, or product availability. Any transaction you enter into with an external retailer is strictly between you and that merchant.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Accuracy of Information &amp; Price Fluctuations
            </h2>
            <p>
              We make every effort to verify technical specifications, battery capacities, and GBP retail prices before publication. However, manufacturers frequently modify firmware, bundle accessories, or adjust retail pricing without notice. We cannot guarantee that all prices or stock statuses displayed on external merchant sites will match the figures shown on our guides at any given moment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by English law, Best Product Verdict Ltd and its directors, test engineers, contributors, and agents shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of this website, reliance on product scores, or purchases made through external merchant links.
            </p>
            <p className="text-xs text-slate-500">
              Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any liability that cannot be excluded under English law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by and construed in accordance with the laws of <strong>England and Wales</strong>. You agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              8. Contacting Us Regarding Legal Matters
            </h2>
            <p>
              For legal inquiries, copyright notices, or questions regarding these terms, please contact our legal desk:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
              <div><strong>Email:</strong> legal@bestproductverdict.co.uk</div>
              <div><strong>Entity:</strong> Best Product Verdict Ltd</div>
              <div><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</div>
            </div>
          </section>

        </div>
      </div>

    </div>
  );
}
