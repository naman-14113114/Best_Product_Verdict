import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HOMEPAGE_CATEGORIES } from "@/data/categories";
import { NewsletterBox } from "@/components/NewsletterBox";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Comparisons and Buying Guides",
  description:
    "UK-focused desk-research comparisons with practical buying considerations, source information and disclosed commercial relationships.",
};

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#1c2e4a] via-[#16253d] to-[#111c2e] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-5 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
            Shopping Simplified.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Compare product formats and plan your next purchase
          </p>

          <div className="pt-3">
            <a
              href="#explore"
              className="inline-block px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer no-underline tracking-wide"
            >
              Explore »
            </a>
          </div>

          <div className="pt-2 text-xs sm:text-sm text-slate-300">
            or{" "}
            <a
              href="#search-products"
              className="underline text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              make a search
            </a>
          </div>
        </div>

        {/* Ambient subtle lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none -z-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. 3-Column Category Exploration Grid */}
      <section id="explore" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-20">
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

      {/* 3. Search Section Below Categories */}
      <section id="search-products" className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200 scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Search Product Comparison Guides
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

      {/* 4. Content Pair 1: Connecting You With The Products You Love */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Connecting You With The Products You Love
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Our buying guides explain practical differences and the questions to check with a seller before purchasing.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm p-4 flex items-center justify-center">
              <Image
                src="https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/62286ee06929527a8e452ced_shoppinggif.gif"
                alt="Connecting You With The Products You Love"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Content Pair 2: Transforming The Online Marketplace */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm p-4 flex items-center justify-center">
              <Image
                src="https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/61fa13e9a7d64d3ab1929542_donatepic.png"
                alt="Transforming The Online Marketplace"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Transforming The Online Marketplace
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Explore our published guides for product-format comparisons, buying considerations and links to current UK listings.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Newsletter Signup Section */}
      <NewsletterBox />
    </div>
  );
}
