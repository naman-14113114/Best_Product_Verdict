import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Sparkles, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export default function NotFound() {
  return (
    <div className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Discovery Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Page not found
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This address does not match a published page. Search our buying guides or choose a comparison below.
          </p>

          {/* Search Box */}
          <form action="/search" method="get" className="pt-2 max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-md border-2 border-slate-200 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 p-1.5 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                name="query"
                placeholder="Search products, categories, or brands..."
                className="w-full px-3 py-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent font-medium"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shrink-0 transition-colors shadow-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* 3 Live Top-10 Guides Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Published Buying Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Desk-research comparisons and practical buying considerations
              </p>
            </div>
            <Link
              href="/top-10"
              className="text-xs sm:text-sm font-bold text-[#0087ee] hover:underline flex items-center gap-1"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
              >
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {cat.categoryGroup}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                        <span>Compare</span>
                        <span>{cat.itemCount} options</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500">
                      Featured option: <span className="text-slate-800 font-bold">{cat.topPicksPreview[0]?.name}</span>
                    </div>

                    <Link
                      href={`/top-10/${cat.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      <span>Explore Top 10</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation Footer Row */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            &larr; Return to Homepage
          </Link>
          <Link
            href="/top-10"
            className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Browse All Categories
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Contact Support &amp; Editorial
          </Link>
        </div>
      </div>
    </div>
  );
}
