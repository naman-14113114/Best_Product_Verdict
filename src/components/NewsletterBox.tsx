import Link from "next/link";
export function NewsletterBox() {
  return <section id="guide-updates" className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-b border-slate-200"><div className="max-w-2xl mx-auto text-center space-y-3"><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Explore Our Buying Guides</h2><p className="text-sm text-slate-600">Compare product formats and check the details before choosing. Newsletter subscriptions are not currently available.</p><Link href="/top-10" className="inline-flex rounded-lg bg-[#0087ee] px-6 py-3 text-sm font-bold text-white hover:bg-[#0070f3]">Browse comparison guides →</Link></div></section>;
}
export default NewsletterBox;
