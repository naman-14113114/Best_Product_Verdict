import Link from "next/link";
import { CONTENT_UPDATED, SUPPORT_EMAIL } from "@/lib/site";

interface InformationPageProps {
  title: string;
  introduction: string;
  sections: { title: string; body: string }[];
  subject?: string;
}

export function InformationPage({ title, introduction, sections, subject = title }: InformationPageProps) {
  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700">
        <div className="border-b border-slate-200 pb-6 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{title}</h1>
          <p className="text-sm text-slate-500">Updated: {CONTENT_UPDATED}</p>
          <p className="leading-relaxed">{introduction}</p>
        </div>
        {sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">{section.body}</p>
          </section>
        ))}
        <div className="border-t border-slate-200 pt-6 space-y-3">
          <p className="text-sm">For enquiries, corrections or privacy requests, email:</p>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`} className="inline-flex break-all rounded-lg bg-[#0087ee] px-4 py-3 font-bold text-white hover:bg-[#0070f3]">{SUPPORT_EMAIL}</a>
          <p className="text-xs text-slate-500">This opens your email app. Send your message there; no message is submitted by clicking the link.</p>
          <Link href="/top-10" className="block text-sm font-bold text-blue-600 hover:underline">Browse buying guides →</Link>
        </div>
      </div>
    </div>
  );
}
