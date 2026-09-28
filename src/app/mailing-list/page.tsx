import React from "react";
import { Sparkles } from "lucide-react";
import { MailingListForm } from "@/components/MailingListForm";

export const metadata = {
  title: "Join The Verdict Insider Newsletter | Price Alerts & Lab Teardowns",
  description: "Subscribe to The Verdict Insider for weekly price drops, independent lab teardowns, and curated UK product verdicts.",
};

export default function MailingListPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0e1e2d] via-[#13283c] to-[#0b1724] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#00d6b6]" />
            <span>The Verdict Insider Newsletter</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Join 150,000+ Smart UK Shoppers
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get weekly laboratory teardowns, curated price drop alerts, and exclusive scam warnings sent directly to your inbox.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <MailingListForm />
      </section>

    </div>
  );
}
