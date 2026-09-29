"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
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

          {/* Policy Body */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              Consumer Picks, a DBA of Nation Videos Corporation (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) operates the https://www.consumerpicks.org/ website, which provides the SERVICE.
            </p>
            <p>
              This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Consumer Picks website.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://www.consumerpicks.org/terms-and-conditions, unless otherwise defined in this Privacy Policy.
            </p>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Log Data</h2>
              <p>
                We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (&quot;IP&quot;) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
              <p>
                Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.
              </p>
              <p>
                Our website uses these Cookies to collect information and to improve our Service.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Service Providers</h2>
              <p>
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services;</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
              <p className="pt-2">
                We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Security</h2>
              <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Children&apos;s Privacy</h2>
              <p>
                The Site is not intended for individuals under the age of 18. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us by emailing support@consumerpicks.org to request deletion.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">CCPA</h2>
              <p>
                If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the ‘Right to Know’), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us by emailing support@consumerpicks.org.
              </p>
              <p>
                If you would like to designate an authorized agent to submit these requests on your behalf, please contact us by emailing support@consumerpicks.org.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">GDPR</h2>
              <p>We are a Data Controller of your information.</p>
              <p>
                Consumer Picks legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Consumer Picks needs to perform a contract with you</li>
                <li>You have given Consumer Picks permission to do so</li>
                <li>Processing your personal information is in Consumer Picks legitimate interests</li>
                <li>Consumer Picks needs to comply with the law</li>
              </ul>
              <p className="pt-2">
                Consumer Picks will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
              <p>
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us by emailing support@consumerpicks.org.
              </p>
              <p>
                In certain circumstances, you have the following data protection rights:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>The right to access, update or to delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl font-bold text-slate-900">Your Consent</h2>
              <p>
                By using our site, you consent to our online Privacy Policy.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
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
