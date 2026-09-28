"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export const MailingListForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  const [preferences, setPreferences] = useState({
    kitchen: true,
    personalCare: true,
    smartHome: false,
    fitnessRecovery: false,
    audioTech: false,
    priceAlerts: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 600);
  };

  const categories = [
    { key: "kitchen", label: "Smart Kitchen & Cooking Probes", desc: "Wireless meat thermometers, dual air fryers, espresso machines." },
    { key: "personalCare", label: "Beauty & Oral Care Tech", desc: "LED phototherapy face masks, sonic electric toothbrushes, water flossers." },
    { key: "fitnessRecovery", label: "Wellness & Deep Tissue Recovery", desc: "Mini percussion massage guns, recovery boots, posture gear." },
    { key: "smartHome", label: "Smart Home & Automation", desc: "LiDAR robot vacuums, video doorbells, smart home sensors." },
    { key: "audioTech", label: "Tech, Audio & Wearables", desc: "Active noise-cancelling headphones, power banks, health trackers." },
    { key: "priceAlerts", label: "Historic Low Price Drop Alerts", desc: "Instant alerts when top-ranked products hit record UK discount prices." },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
      {isSubscribed ? (
        <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-teal-950">You&apos;re Officially on the List!</h2>
          <p className="text-sm text-teal-800 leading-relaxed max-w-md mx-auto">
            We&apos;ve sent a confirmation email to <strong>{email}</strong>. Check your inbox to confirm your subscription and download your free <em>&ldquo;2026 UK Consumer Buying & Price-Trap Guide&rdquo;</em>.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Customize Your Newsletter Preferences
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select the categories you care about so we only send you relevant product verdicts and price drops.
            </p>
          </div>

          {/* Personal Info Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                First Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Charlotte"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. charlotte@example.co.uk"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] focus:bg-white text-slate-900"
              />
            </div>
          </div>

          {/* Topic Checkboxes */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Your Product Interests:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => {
                const isChecked = preferences[cat.key as keyof typeof preferences];
                return (
                  <div
                    key={cat.key}
                    onClick={() => handleToggle(cat.key as keyof typeof preferences)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                      isChecked
                        ? "bg-blue-50/60 border-[#0087ee] shadow-sm"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 rounded text-[#0087ee] focus:ring-[#0087ee] cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{cat.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{cat.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Frequency */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-slate-700 mb-2">
              Delivery Frequency
            </label>
            <div className="flex gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value="weekly"
                  checked={frequency === "weekly"}
                  onChange={() => setFrequency("weekly")}
                  className="text-[#0087ee]"
                />
                <span className="font-semibold text-slate-800">Weekly Digest (Recommended)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value="monthly"
                  checked={frequency === "monthly"}
                  onChange={() => setFrequency("monthly")}
                  className="text-[#0087ee]"
                />
                <span className="font-semibold text-slate-800">Monthly Roundup Only</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#0087ee] hover:bg-[#006bbd] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Subscribing...</span>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Join The Verdict Insider Newsletter</span>
              </>
            )}
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 pt-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> 100% Free Forever
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> Zero Spam Guarantee
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> 1-Click Unsubscribe
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
