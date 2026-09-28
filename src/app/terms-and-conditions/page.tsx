import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Best Product Verdict UK",
  description: "Terms and conditions of use for Best Product Verdict UK.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Terms &amp; Conditions</h1>
          <p className="text-xs text-slate-500">Effective Date: September 2026</p>

          <p>
            Welcome to Best Product Verdict. By accessing or using this website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, please do not use our website.
          </p>

          <h2 className="text-lg font-bold text-slate-900">1. Intellectual Property</h2>
          <p>
            All original review content, editorial analysis, buying guides, ranking scores, comparison tables, and graphics published on this website are the intellectual property of Best Product Verdict and are protected by copyright laws of England and Wales.
          </p>

          <h2 className="text-lg font-bold text-slate-900">2. Disclaimers &amp; Limitation of Liability</h2>
          <p>
            The information contained on this website is provided for general informational and purchasing guidance purposes only. While we make every effort to ensure information is accurate and up-to-date, product specifications, prices, and stock availability on external retail platforms are subject to change without notice.
          </p>

          <h2 className="text-lg font-bold text-slate-900">3. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of England and Wales.
          </p>
        </div>
      </div>
    </div>
  );
}
