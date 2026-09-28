import React from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Clock, 
  FileCheck
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Editorial & Testing Team | Best Product Verdict UK",
  description: "Get in touch with the editorial, research, and technical team at Best Product Verdict UK.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0e1e2d] via-[#13283c] to-[#0b1724] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-semibold">
            <Mail className="w-4 h-4 text-[#00d6b6]" />
            <span>Direct Access to Our UK Testing Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Contact Best Product Verdict
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about a product verdict, want to request a test for a new device, or need editorial assistance? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Form (Spans 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details & Headquarters Info (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#0087ee] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">UK Headquarters & Lab</h3>
                  <p className="text-xs text-slate-400">Registered Corporate Facility</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div>
                  <strong className="text-white block mb-0.5">Physical Address:</strong>
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
                </div>

                <div>
                  <strong className="text-white block mb-0.5">Direct Editorial Desk:</strong>
                  <a href="mailto:support@bestproductverdict.com" className="text-blue-400 hover:underline">
                    support@bestproductverdict.com
                  </a>
                </div>

                <div>
                  <strong className="text-white block mb-0.5">Partnership Submissions:</strong>
                  <a href="mailto:contact@bestproductverdict.com" className="text-teal-400 hover:underline">
                    contact@bestproductverdict.com
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-2 text-slate-400">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Mon – Fri: 09:00 – 18:00 GMT</span>
                </div>
              </div>
            </div>

            {/* Corrections Policy Card */}
            <div id="corrections" className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <FileCheck className="w-4 h-4 text-[#0087ee]" />
                <span>Product Correction Policy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Did a manufacturer release a firmware upgrade, alter hardware dimensions, or update pricing? Our editorial board welcomes verifiable correction requests. Please select &ldquo;Product Correction&rdquo; in the form and attach documentation or links.
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 space-y-2 text-xs">
              <div className="font-bold text-slate-900">Need Immediate Policy Guidance?</div>
              <ul className="space-y-1 text-slate-600">
                <li>
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    → Review our GDPR Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/advertiser-disclosure" className="text-blue-600 hover:underline">
                    → Read our FTC & ASA Advertiser Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
                    → View Terms and Conditions of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
