import React from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Clock, 
  FileCheck,
  ShieldCheck,
  Building2,
  HelpCircle,
  PhoneCall
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Editorial & Testing Team | Best Product Verdict UK",
  description:
    "Get in touch with the editorial, research, and technical testing team at Best Product Verdict London headquarters.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>London Editorial &amp; Testing Desks</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Contact Best Product Verdict
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have a question about a product verdict, want to request a lab benchmark for a new device, or need editorial assistance? We are here to help.
        </p>
      </div>

      {/* Main Grid: Form + Address Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">London Headquarters &amp; Lab</h3>
                  <p className="text-xs text-slate-400">Best Product Verdict Ltd</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div>
                  <strong className="text-white block mb-0.5">Physical Facility:</strong>
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
                </div>

                <div>
                  <strong className="text-white block mb-0.5">Direct Editorial Desk:</strong>
                  <a href="mailto:support@bestproductverdict.co.uk" className="text-blue-400 hover:underline font-semibold">
                    support@bestproductverdict.co.uk
                  </a>
                </div>

                <div>
                  <strong className="text-white block mb-0.5">Product Corrections &amp; Updates:</strong>
                  <a href="mailto:corrections@bestproductverdict.co.uk" className="text-teal-400 hover:underline font-semibold">
                    corrections@bestproductverdict.co.uk
                  </a>
                </div>

                <div>
                  <strong className="text-white block mb-0.5">Partnership Submissions:</strong>
                  <a href="mailto:contact@bestproductverdict.co.uk" className="text-amber-400 hover:underline font-semibold">
                    contact@bestproductverdict.co.uk
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
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span>Product Correction Policy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Did a manufacturer release a firmware upgrade, alter hardware dimensions, or update pricing? Our editorial board welcomes verifiable correction requests. Please select &ldquo;Product Correction&rdquo; in the form and attach documentation or links.
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 space-y-2 text-xs">
              <div className="font-bold text-slate-900">Need Immediate Policy Guidance?</div>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                    → Review our GDPR Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/advertiser-disclosure" className="text-blue-600 hover:underline font-medium">
                    → Read our FTC &amp; ASA Advertiser Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-blue-600 hover:underline font-medium">
                    → View Terms and Conditions of Service
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
