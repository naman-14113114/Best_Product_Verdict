import Link from "next/link";
interface AboutEditorProps { name?: string; role?: string; bio?: string; avatarUrl?: string; }
export function AboutEditor({ name = "Best Product Verdict", bio = "UK-focused desk-research comparisons operated by Naman Kharbanda, with AI-assisted drafting." }: AboutEditorProps) {
  return <section className="w-full py-8 my-8 text-center"><div className="max-w-2xl mx-auto px-4 space-y-3.5"><h2 className="text-sm sm:text-base font-bold text-slate-900">About the Publisher</h2><div className="flex justify-center"><div className="w-14 h-14 rounded-full border border-slate-200 bg-teal-50 text-teal-700 font-bold flex items-center justify-center" aria-hidden="true">BP</div></div><p className="font-bold text-sm text-slate-900">{name}</p><p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{bio}</p><Link href="/about" className="inline-block text-xs font-semibold text-blue-600 hover:underline">Publisher and research information →</Link></div></section>;
}
export default AboutEditor;
