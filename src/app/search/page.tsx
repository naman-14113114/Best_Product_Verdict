"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Star, ExternalLink, ArrowRight } from "lucide-react";
import { CATEGORIES, searchCategories, CategoryData } from "@/data/categories";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("query") || searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const q = searchParams.get("query") || searchParams.get("q") || "";
    setQuery(q);
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/search");
    }
  };

  const matchedCategories = query.trim() ? searchCategories(query.trim()) : [];

  const categoryDirectory = [
    {
      group: "Kitchen & Dining",
      links: [
        { name: "Top 10 Wireless Meat Thermometers", href: "/top-10/best-wireless-meat-thermometers" },
        { name: "Smart Bluetooth Cooking Probes", href: "/top-10/best-wireless-meat-thermometers" },
        { name: "WiFi Meat & Smoker Thermometers", href: "/top-10/best-wireless-meat-thermometers" },
      ],
    },
    {
      group: "Personal Care & Dental",
      links: [
        { name: "Top 10 Cordless Water Flossers", href: "/top-10/best-cordless-water-flossers" },
        { name: "Rechargeable Oral Irrigators", href: "/top-10/best-cordless-water-flossers" },
        { name: "Portable Water Jet Flossers", href: "/top-10/best-cordless-water-flossers" },
      ],
    },
    {
      group: "Wellness & Recovery",
      links: [
        { name: "Top 10 Mini Massage Guns", href: "/top-10/best-mini-massage-guns" },
        { name: "Pocket Percussion Massagers", href: "/top-10/best-mini-massage-guns" },
        { name: "Deep Tissue Muscle Recovery Guns", href: "/top-10/best-mini-massage-guns" },
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Search Bar */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full border border-slate-300 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#00c092]/30 focus-within:border-[#00c092]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products…"
              className="w-full py-3 px-4 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border-l border-slate-200 transition-colors shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Area */}
        {query.trim() ? (
          <div className="space-y-6">
            {matchedCategories.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Search Results for &ldquo;{query}&rdquo;
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchedCategories.map((cat: CategoryData) => (
                    <Link
                      key={cat.id}
                      href={`/top-10/${cat.slug}`}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#00c092] hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {cat.categoryGroup}
                          </span>
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {cat.averageRating}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0087ee] transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-[#0087ee] font-bold">
                        <span>View Comparison Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                  <p className="text-slate-800 font-bold text-base">
                    Top Recommendations for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Explore our verified, independently tested UK Top 10 buying guides below:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CATEGORIES.map((cat: CategoryData) => (
                    <Link
                      key={cat.id}
                      href={`/top-10/${cat.slug}`}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#00c092] hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {cat.categoryGroup}
                          </span>
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {cat.averageRating}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0087ee] transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-[#0087ee] font-bold">
                        <span>View Comparison Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Featured Top 10 Buying Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat: CategoryData) => (
                <Link
                  key={cat.id}
                  href={`/top-10/${cat.slug}`}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#00c092] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {cat.categoryGroup}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {cat.averageRating}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0087ee] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-[#0087ee] font-bold">
                    <span>View Comparison Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Explore Section: "Were you looking for one of these products?" */}
        <section className="space-y-6 pt-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">
            Were you looking for one of these products?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryDirectory.map((catGroup) => (
              <div
                key={catGroup.group}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-5 space-y-3"
              >
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-200">
                  {catGroup.group}
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {catGroup.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-[#0087ee] hover:underline transition-colors block py-0.5"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsored / Discover List */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          {/* Item 1: Amazon */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Sponsored
            </span>
            <div className="space-y-1">
              <a
                href="https://www.amazon.com?&linkCode=ll2&tag=amzcpscid-20&linkId=eb76b101910a1c2379cfa3a753fa207e&language=en_US&ref_=as_li_ss_tl"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-base font-bold text-[#0087ee] hover:underline block"
              >
                Shop On Amazon - Spend Less. Smile More.
              </a>
              <div className="text-xs text-slate-400">amazon/search/id=i7m9fm4m</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find the top products available today. Enjoy low prices and great deals on the largest selection of items. Free shipping with prime. Discover on Amazon.
              </p>
            </div>
          </div>

          {/* Item 2: eBay */}
          <div className="space-y-1 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Sponsored
            </span>
            <div className="space-y-1">
              <a
                href="https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338733431&customid=&toolid=10001&mkevt=1"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-base font-bold text-[#0087ee] hover:underline block"
              >
                eBay - Electronics, Fashion, Collectibles, &amp; More
              </a>
              <div className="text-xs text-slate-400">ebay/search/id=948j85kd</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Millions of items listed daily. Find both new and used items. Discover on eBay.
              </p>
            </div>
          </div>

          {/* Item 3: Walmart */}
          <div className="space-y-1 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Sponsored
            </span>
            <div className="space-y-1">
              <a
                href="https://www.walmart.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-base font-bold text-[#0087ee] hover:underline block"
              >
                Walmart | Save Money. Live better.
              </a>
              <div className="text-xs text-slate-400">walmart/search/id=od7i2xls32ds</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Shop Walmart today for Every Day Low Prices. The best selection of items online.
              </p>
            </div>
          </div>

          {/* Item 4: Best Product Verdict */}
          <div className="space-y-1 pt-3 border-t border-slate-100">
            <div className="space-y-1">
              <Link
                href="/"
                className="text-base font-bold text-[#0087ee] hover:underline block"
              >
                Best Product Verdict - Product Ratings &amp; Deals
              </Link>
              <div className="text-xs text-slate-400">bestproductverdict/search/id=0su59sj9za</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our shopping experts create innovative product lists and rankings. Compare choices and find the perfect fit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#0087ee]" />
          <p className="text-sm text-slate-500 mt-2 font-medium">Loading search...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
