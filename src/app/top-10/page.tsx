import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HOMEPAGE_CATEGORIES } from "@/data/categories";
import { NewsletterBox } from "@/components/NewsletterBox";
import { Search, Sparkles, Flame, Activity, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Top 10 Product Categories Directory (2026) | Best Product Verdict UK",
  description:
    "Explore the full directory of Top 10 product categories and buying guides tested by UK experts at Best Product Verdict.",
};

export default function Top10DirectoryPage() {
  const liveGuides = [
    {
      title: "Top 10 Wireless Meat Thermometers (2026)",
      href: "/top-10/best-wireless-meat-thermometers",
      image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
      score: "9.9",
      topPick: "Chef IQ Smart Wireless Thermometer",
      price: "£79.99",
      badge: "Flagship Guide",
      icon: Flame,
    },
    {
      title: "Top 10 Cordless Water Flossers (2026)",
      href: "/top-10/best-cordless-water-flossers",
      image: "https://m.media-amazon.com/images/I/51c0Wy9sXiL._SL250_.jpg",
      score: "9.9",
      topPick: "Coslus C20 Cordless Oral Flosser",
      price: "£29.99",
      badge: "Flagship Guide",
      icon: Sparkles,
    },
    {
      title: "Top 10 Mini Massage Guns (2026)",
      href: "/top-10/best-mini-massage-guns",
      image: "https://m.media-amazon.com/images/I/41qZt+HtZxL._SL250_.jpg",
      score: "9.9",
      topPick: "Renpho Active Thermacool 2",
      price: "£79.99",
      badge: "Flagship Guide",
      icon: Activity,
    },
  ];

  return (
    <div className="w-full bg-white space-y-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#1c2e4a] to-[#111c2e] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
            <span>UK Top 10 Product Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Explore All Product Categories
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Browse our full directory of product categories. Find top picks, side-by-side spec sheets, and verified reviews.
          </p>
        </div>
      </section>

      {/* Featured Live Top 10 Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Featured Top 10 Comparison Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Full 10-product ranked guides with verified scores and comprehensive UK buying advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveGuides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                      {guide.badge}
                    </span>
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                      ★ {guide.score} / 10
                    </span>
                  </div>

                  <div className="relative w-full aspect-video bg-slate-50 rounded-xl p-3 flex items-center justify-center">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link href={guide.href}>{guide.title}</Link>
                  </h3>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-teal-700 font-bold uppercase">#1 Top Pick:</span>
                      <span className="font-bold text-slate-900">{guide.price}</span>
                    </div>
                    <div className="font-semibold text-slate-800 truncate">
                      {guide.topPick}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    href={guide.href}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <span>View Top 10 Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3-Column Category Exploration Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Complete Department Directory
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Explore products by department to find deals and top recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {HOMEPAGE_CATEGORIES.map((col, cIdx) => (
            <div key={cIdx} className="flex flex-col space-y-3">
              {/* Preview Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xs group">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Column Heading */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-200 pb-1.5 tracking-tight">
                {col.title}
              </h3>

              {/* Links List */}
              <ul className="space-y-1 text-xs sm:text-sm">
                {col.links.map((item, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={item.href}
                      className={`block py-1 transition-colors ${
                        item.isLive
                          ? "text-blue-600 font-bold hover:text-blue-800 hover:underline"
                          : "text-slate-600 hover:text-slate-900 hover:underline font-normal"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Search Bar Strip */}
      <section className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <form action="/search" method="get" className="max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-xl shadow-xs border border-slate-300 focus-within:ring-2 focus-within:ring-[#00c092]/30 focus-within:border-[#00c092] overflow-hidden transition-all">
              <Search className="w-4 h-4 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="search"
                name="query"
                placeholder="Search for products…"
                required
                className="w-full py-3 px-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border-l border-slate-200 transition-colors shrink-0 cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
}
