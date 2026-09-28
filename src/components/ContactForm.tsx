"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    productCategory: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        productCategory: "",
        message: ""
      });
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#0087ee]">
          Send a Message
        </span>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">
          Editorial & General Inquiries
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Our London editorial and technical staff respond to all verified inquiries within 1 business day.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-teal-950">Thank You for Reaching Out!</h3>
          <p className="text-xs text-teal-800 leading-relaxed max-w-md mx-auto">
            Your inquiry has been routed to the appropriate testing desk. A senior reviewer or team member will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-5 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. James Wilson"
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. james.wilson@example.co.uk"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Inquiry Category *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] text-slate-900"
              >
                <option value="General Inquiry">General Consumer Inquiry</option>
                <option value="Product Correction">Product Correction or Spec Update</option>
                <option value="Product Test Request">Request a Product for Lab Testing</option>
                <option value="Press & Media">Press & Media Outreach</option>
                <option value="Commercial & Partnerships">Commercial / Affiliate Partnerships</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Relevant Product / Guide (Optional)
              </label>
              <input
                type="text"
                value={formData.productCategory}
                onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                placeholder="e.g. Wireless Meat Thermometers"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Message *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide detailed feedback, query details, or product test suggestions..."
              className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0087ee] focus:bg-white text-slate-900"
            />
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Your email is strictly protected under UK GDPR. We never share or sell personal data.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#0087ee] hover:bg-[#006bbd] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Transmitting Message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to Testing Team</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
