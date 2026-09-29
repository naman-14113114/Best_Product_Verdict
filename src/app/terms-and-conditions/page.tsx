"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TermsAndConditionsPage() {
  const router = useRouter();

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700">
          {/* Letterhead */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Terms and Conditions
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Updated on February 1st, 2021
              </p>
            </div>
            <div>
              <button
                onClick={handleGoBack}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg border border-slate-300 transition-colors cursor-pointer"
              >
                &laquo; Go Back
              </button>
            </div>
          </div>

          {/* Terms Body */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-800">
              Please read these terms and conditions carefully before using Our Service.
            </p>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Interpretation</h2>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
              </p>
              <p>
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Definitions</h2>
              <p>For the purposes of these Terms and Conditions:</p>
              <div className="space-y-2 pl-2 text-slate-600">
                <p>
                  <strong>&quot;Affiliate&quot;</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </p>
                <p>
                  <strong>&quot;Company&quot;</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Nation Videos Corporation, doing business as Consumer Picks.
                </p>
                <p>
                  <strong>&quot;Country&quot;</strong> refers to: United States
                </p>
                <p>
                  <strong>&quot;Device&quot;</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
                </p>
                <p>
                  <strong>&quot;Service&quot;</strong> refers to the Website.
                </p>
                <p>
                  <strong>&quot;Terms and Conditions&quot;</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
                </p>
                <p>
                  <strong>&quot;Third-party Social Media Service&quot;</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                </p>
                <p>
                  <strong>&quot;Website&quot;</strong> refers to Consumer Picks, accessible from https://www.consumerpicks.org
                </p>
                <p>
                  <strong>&quot;You&quot;</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Acknowledgement</h2>
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are (a) over the age of 18 or (b) have parental consent and supervision, to utilize the Service. The Company does not permit those under 18 to use the Service without consent from your parent or legal guardian to use the Service. The Service is not intended for use by children under the age of 13.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p>
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Termination</h2>
              <p>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p>
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
              <p>
                The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p>
                Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses or other harmful components.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Website Accessibility and Liability Disclaimer</h2>
              <p>
                Consumer Picks does not warrant or guarantee that the Website and/or Service will operate and/or be available at all times without disruption or interruption, or that it will be immune from unauthorized access or error-free. Despite our efforts to ensure accessibility of this website, there may be some limitations such as some pages may not be accessible, or the appropriate technological solution has not yet been found. Please contact us with any complaints so that we may attempt to fix them.
              </p>
              <p className="pt-1">
                In no event shall the website owner be liable for any damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Loss of use or access to the Website;</li>
                <li>Loss of profits or business opportunities;</li>
                <li>Special, incidental, consequential, or punitive damages arising from or related to any alleged non-compliance with any disability-related laws or regulations.</li>
              </ul>
              <p className="pt-2">
                In no event will we be liable for any damages, including consequential, incidental, or punitive damages, arising from or related to any claims for website accessibility.
              </p>
              <p className="pt-1">
                By accessing this Website you agree to indemnify and hold us harmless from and against any claims, damages, or expenses arising from or related to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Any alleged failure to comply any disability-related laws;</li>
                <li>Any claims related to website accessibility;</li>
                <li>Any other matter arising from or related to these Terms and Conditions.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Governing Law</h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Disputes Resolution</h2>
              <p>
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">For European Union (EU) Users</h2>
              <p>
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">United States Legal Compliance</h2>
              <p>
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Severability</h2>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Waiver</h2>
              <p>
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Translation Interpretation</h2>
              <p>
                These Terms and Conditions may have been translated if We have made them available to You on our Service.
              </p>
              <p>
                You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Changes to These Terms and Conditions</h2>
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p>
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              <p>
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block text-[#0087ee] hover:underline font-bold text-sm"
                >
                  Contact Form &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
