import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Building2, 
  Mail, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Best Product Verdict UK (GDPR & UK DPA 2018 Compliant)",
  description:
    "Comprehensive GDPR, UK Data Protection Act 2018, and PECR compliant privacy policy for Best Product Verdict UK.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Lock className="w-4 h-4 text-blue-600" />
          <span>Data Protection &amp; UK GDPR</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Last Updated: September 2026 • Governed under UK Data Protection Act 2018 and UK General Data Protection Regulation (UK GDPR).
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          {/* Executive Summary Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 text-base">Key Privacy Commitments:</h3>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>We collect minimal analytical data to ensure fast page load speeds and accurate product rankings.</li>
              <li>We never sell, rent, or trade your personal data to data brokers or third-party advertisers.</li>
              <li>You have full statutory rights under UK GDPR to access, rectify, or erase your data at any time.</li>
              <li>Data Controller: Best Product Verdict Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</li>
            </ul>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Introduction and Data Controller Information
            </h2>
            <p>
              Best Product Verdict Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is the data controller responsible for your personal data when you access or interact with <strong>https://www.bestproductverdict.co.uk</strong> (the &ldquo;Website&rdquo;). We are committed to protecting your privacy in full compliance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (DPA 2018), and the Privacy and Electronic Communications Regulations 2003 (PECR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>We may collect and process the following categories of personal information:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600">
              <li><strong>Contact Data:</strong> Name, email address, inquiry category, and message text submitted via our interactive contact forms or newsletter signup boxes.</li>
              <li><strong>Technical &amp; Telemetry Data:</strong> IP addresses (anonymized), browser type and version, time zone setting, operating system, and hardware platform.</li>
              <li><strong>Usage Data:</strong> Clickstream telemetry, URLs visited, search queries performed on our internal search engine, and outbound link interaction metrics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Legal Basis for Processing
            </h2>
            <p>Under Article 6 of the UK GDPR, we rely on the following lawful bases:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600">
              <li><strong>Legitimate Interests:</strong> To optimize our website performance, analyze search trends, benchmark consumer interest, and secure our infrastructure against malicious attacks.</li>
              <li><strong>Consent:</strong> Where you voluntarily subscribe to our newsletter (&ldquo;The Verdict Insider&rdquo;) or accept non-essential cookies.</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable UK accounting, tax, or regulatory standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Cookies and Analytical Technologies
            </h2>
            <p>
              Our website uses first-party and third-party cookies, tracking pixels, and local storage tokens. We use Google Analytics 4 (with IP masking enabled) and Microsoft Clarity to understand user navigation behavior without identifying individual visitors personally.
            </p>
            <p>
              When you click on an external merchant link (e.g. Amazon UK or brand store), an affiliate tracking cookie is deposited by the third-party merchant network to accurately attribute qualifying purchases. You can manage or disable cookies at any time via your browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. How We Protect and Retain Your Data
            </h2>
            <p>
              We implement industry-standard SSL/TLS 256-bit encryption, strict access controls, and firewalled cloud hosting. We retain contact inquiry submissions for up to 12 months for editorial verification purposes, after which they are securely purged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Your Statutory Rights Under UK GDPR
            </h2>
            <p>As a data subject in the United Kingdom, you possess the following rights:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong>• Right of Access:</strong> Request a copy of the personal information we hold about you.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong>• Right to Rectification:</strong> Request correction of inaccurate or incomplete data.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong>• Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal records.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong>• Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. International Data Transfers
            </h2>
            <p>
              Where analytical data or cloud server assets are hosted outside the UK/EEA (such as in the United States), we ensure appropriate safeguards are implemented in accordance with UK International Data Transfer Agreements (IDTAs) or Standard Contractual Clauses (SCCs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              8. Contact the Data Protection Officer (DPO)
            </h2>
            <p>
              If you wish to exercise your statutory rights, request data deletion, or ask questions regarding this policy, please contact our Data Protection Officer:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
              <div><strong>Email:</strong> privacy@bestproductverdict.co.uk</div>
              <div><strong>Data Controller:</strong> Best Product Verdict Ltd</div>
              <div><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</div>
              <div><strong>UK Supervisory Authority:</strong> You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ico.org.uk</a>.</div>
            </div>
          </section>

        </div>
      </div>

    </div>
  );
}
