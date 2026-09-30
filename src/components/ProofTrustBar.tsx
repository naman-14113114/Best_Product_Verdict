"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, BookOpen, CheckCircle2, ChevronDown, X, ShieldCheck, Eye } from "lucide-react";
import { AFFILIATE_DISCLOSURE, EDITORIAL_METHOD } from "@/lib/site";
export interface ProofTrustBarProps { categoryName?: string; updatedDate?: string; authorName?: string; showTitle?: boolean; }
export function ProofTrustBar({ categoryName = "Products", updatedDate = "30 September 2026", authorName = "Best Product Verdict", showTitle = false }: ProofTrustBarProps) {
  const [activeModal, setActiveModal] = useState<"method" | "disclosure" | null>(null);
  useEffect(() => {
    if (!activeModal) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveModal(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", closeOnEscape); };
  }, [activeModal]);
  return (
    <div className="w-full">
      {showTitle && <><div className="flag-updated-row"><span className="flag-emoji" role="img" aria-label="UK Flag">🇬🇧</span><span className="updated-date-pill">Updated: {updatedDate}</span></div><h1 className="title-main-desktop-copy"><span className="teal-vertical-line" /><span>Top 10 {categoryName} - Compared for UK Buyers</span></h1></>}
      <div className="cta-pointers-container-copy-4-copyauthor-top10">
        <div className="white-copy-2-author"><div className="w-9 h-9 rounded-full border border-slate-200 bg-teal-50 text-teal-700 font-bold flex items-center justify-center shrink-0" aria-hidden="true">BP</div><div><span className="authorname">{authorName}</span><span className="author-role">Product comparison publisher</span></div></div>
        <Link href="/about" className="audited-by-pill"><ShieldCheck className="w-4 h-4 text-emerald-600" /><span>About the publisher</span></Link>
      </div>
      <div className="cta-pointers-container-copy-4">
        <div className="white-copy-2-top10"><Search className="w-4 h-4 text-[#0087ee]" /><span>Product buying considerations</span></div>
        <div className="white-copy-2-top10"><BookOpen className="w-4 h-4 text-amber-600" /><span>Desk-research guide</span></div>
        <div className="white-copy-2-top10"><CheckCircle2 className="w-4 h-4 text-[#00c092]" /><span>Check retailer return terms</span></div>
      </div>
      <div className="cp-trust"><div className="cp-trust__row">
        <button type="button" onClick={() => setActiveModal("method")} className="cp-pill cp-pill--human"><BookOpen className="w-3.5 h-3.5" /><span>How this guide is prepared</span><ChevronDown className="w-3 h-3" /></button>
        <button type="button" onClick={() => setActiveModal("disclosure")} className="cp-pill cp-pill--quiet"><Eye className="w-3.5 h-3.5 text-slate-500" /><span>Commercial disclosure</span><ChevronDown className="w-3 h-3" /></button>
      </div></div>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">{AFFILIATE_DISCLOSURE}</p>
      {activeModal && <div className="cp-overlay" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true" aria-labelledby="research-modal-title">
        <div className="cp-modal" onClick={event => event.stopPropagation()}>
          <div className="cp-modal__head"><h2 id="research-modal-title" className="cp-modal__title">{activeModal === "method" ? "Our research method" : "Commercial relationships"}</h2><button type="button" onClick={() => setActiveModal(null)} className="cp-modal__close" aria-label="Close modal"><X className="w-5 h-5" /></button></div>
          <div className="cp-modal__scroll"><div className="cp-qa"><p>{activeModal === "method" ? EDITORIAL_METHOD : AFFILIATE_DISCLOSURE}</p></div><div className="cp-qa"><h3>Check the exact listing</h3><p>Find UK listings opens a retailer search for a model or product family. Confirm the seller, version, kit contents, total price, stock and return terms before buying.</p></div><div className="cp-qa"><Link href={activeModal === "method" ? "/about" : "/advertiser-disclosure"} className="text-blue-600 hover:underline">Read more →</Link></div></div>
          <button type="button" onClick={() => setActiveModal(null)} className="cp-closebtn">Close</button>
        </div>
      </div>}
    </div>
  );
}
export default ProofTrustBar;
