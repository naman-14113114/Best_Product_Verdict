import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Flame, 
  AlertTriangle, 
  Gift, 
  Clock,
  ArrowRight
} from "lucide-react";
import { MailingListForm } from "@/components/MailingListForm";

export const metadata = {
  title: "Join The Verdict Insider Newsletter | Price Alerts & Lab Teardowns",
  description:
    "Subscribe to The Verdict Insider for weekly UK price drops, independent lab teardowns, scam alerts, and curated product verdicts.",
};

export default function MailingListPage() {
  const subscriberPerks = [
    {
      title: "Weekly Price Drop Radar",
      desc: "Our automated scraper monitors UK merchant pricing across Amazon, Currys, and brand stores to alert you when tested products hit all-time lows.",
      icon: Flame,
      color: "text-orange-500 bg-orange-50",
    },
    {
      title: "Exclusive Lab Teardowns",
      desc: "Get behind-the-scenes teardown photos, thermal camera captures, and decibel frequency graphs not included in our public summary guides.",
      icon: Sparkles,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Counterfeit & Scam Warnings",
      desc: "We expose fake 5-star review rings, drop-shipped knockoffs, and deceptive manufacturer marketing claims before you waste your money.",
      icon: AlertTriangle,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Subscriber-Only Voucher Codes",
      desc: "Direct partnership discount codes and exclusive free gift bundles (such as travel cases and spare parts) negotiated for our community.",
      icon: Gift,
      color: "text-teal-600 bg-teal-50",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>The Verdict Insider Newsletter</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Join 150,000+ Smart UK Shoppers
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Receive our weekly breakdown of verified top-rated verdicts, lab teardowns, and price drop alerts sent directly to your inbox every Thursday morning.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Interactive Subscription Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <MailingListForm />
        </div>

        {/* 4 Core Perks Grid */}
        <div className="space-y-6">
          <div className="space-y-1 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Subscriber Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What You Get Every Week
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subscriberPerks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${perk.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Privacy & Anti-Spam Guarantee Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            100% Privacy &amp; Zero Spam Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We will never sell your email address or spam your inbox with third-party marketing offers. Every email contains an instant 1-click unsubscribe link. Protected under UK GDPR.
          </p>
        </div>

      </div>

    </div>
  );
}
