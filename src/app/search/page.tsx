"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Search, 
  Flame, 
  Droplets, 
  Activity, 
  Sparkles, 
  Smile, 
  UtensilsCrossed, 
  Bot, 
  Headphones, 
  BellRing, 
  Coffee, 
  Wind, 
  Ear,
  Award, 
  ArrowRight, 
  ChevronRight, 
  Filter, 
  SlidersHorizontal,
  Star,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { CATEGORIES, CategoryData, searchCategories } from "@/data/categories";
import { StarRating } from "@/components/StarRating";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialQuery = searchParams.get("query") || searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedGroup, setSelectedGroup] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"relevance" | "rating" | "tested">("relevance");

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

  // Perform search
  let matchedCategories = searchCategories(query);

  if (selectedGroup !== "All") {
    matchedCategories = matchedCategories.filter((c) => c.categoryGroup === selectedGroup);
  }

  // Sort results
  if (sortBy === "rating") {
    matchedCategories = [...matchedCategories].sort((a, b) => parseFloat(b.averageRating) - parseFloat(a.averageRating));
  } else if (sortBy === "tested") {
    matchedCategories = [...matchedCategories].sort((a, b) => b.testedCount - a.testedCount);
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Flame": return Flame;
      case "Droplets": return Droplets;
      case "Activity": return Activity;
      case "Sparkles": return Sparkles;
      case "Smile": return Smile;
      case "UtensilsCrossed": return UtensilsCrossed;
      case "Bot": return Bot;
      case "Headphones": return Headphones;
      case "BellRing": return BellRing;
      case "Coffee": return Coffee;
      case "Wind": return Wind;
      case "Ear": return Ear;
      default: return Award;
    }
  };

  const categoryGroups = [
    "All",
    "Kitchen & Dining",
    "Personal Care & Beauty",
    "Wellness & Recovery",
    "Smart Home",
    "Tech & Audio",
    "Health & Medical"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Search Header Banner */}
      <div className="bg-gradient-to-br from-[#0e1e2d] via-[#13283c] to-[#0b1724] text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-teal-300 text-xs font-semibold">
            <Search className="w-3.5 h-3.5" />
            <span>UK Product Testing Search Engine</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Search Tested Products & Top 10 Verdicts
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Find independent ratings, tested specs, and comparison charts across 3,400+ lab-benchmarked consumer devices.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="pt-2">
            <div className="flex items-center bg-white rounded-2xl shadow-xl p-1.5 border-2 border-slate-200 focus-within:border-[#0087ee] transition-all max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search category, product model, or keyword (e.g., meat probe, water flosser)..."
                className="w-full px-3 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-[#0087ee] hover:bg-[#006bbd] text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs sm:text-sm shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Filter and Sorting Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categoryGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedGroup === group
                  ? "bg-[#0087ee] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#0087ee]"
          >
            <option value="relevance">Best Relevance</option>
            <option value="rating">Highest Lab Rating</option>
            <option value="tested">Most Tested Models</option>
          </select>
        </div>
      </div>

      {/* Results Count & Query Info */}
      <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
        <div>
          {query ? (
            <span>
              Showing <strong className="text-slate-900">{matchedCategories.length}</strong> matching categories for &ldquo;<span className="text-[#0087ee] font-bold">{query}</span>&rdquo;
            </span>
          ) : (
            <span>
              Showing all <strong className="text-slate-900">{matchedCategories.length}</strong> available Top 10 buying guides
            </span>
          )}
        </div>
        {query && (
          <button
            onClick={() => {
              setQuery("");
              router.push("/search");
            }}
            className="text-slate-500 hover:text-slate-900 underline text-xs"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Results Grid */}
      {matchedCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedCategories.map((category: CategoryData) => {
            const IconComponent = getIconComponent(category.iconName);

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#0087ee]/50"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0087ee] text-[#0087ee] group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {category.categoryGroup}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        Updated {category.updatedDate}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0087ee] transition-colors leading-snug">
                      <Link href={`/top-10/${category.slug}`}>
                        {category.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Top Product Samples */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Ranked Models in this Verdict:
                    </div>
                    {category.topPicksPreview.map((item, idx) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-slate-50 group-hover:bg-blue-50/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                            #{idx + 1}
                          </span>
                          <span className="font-semibold text-slate-800 truncate">{item.name}</span>
                        </div>
                        <span className="font-bold text-emerald-600 text-xs shrink-0">{item.rating}★</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {category.testedCount} Models Benchmarked
                  </span>
                  <Link
                    href={`/top-10/${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0087ee] group-hover:text-[#006bbd] transition-colors"
                  >
                    <span>Read Full Top 10</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-6 max-w-2xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0087ee] flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              No matching categories found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We may not have completed a lab benchmark for this exact search term yet. Try searching for broader terms or browse our popular categories below.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Try searching for:</span>
            {["Meat Thermometer", "Water Flosser", "Massage Gun", "LED Mask", "Toothbrush", "Air Fryer"].map((suggest) => (
              <button
                key={suggest}
                onClick={() => {
                  setQuery(suggest);
                  router.push(`/search?query=${encodeURIComponent(suggest)}`);
                }}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
              >
                {suggest}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Popular Categories Section */}
      <div className="pt-8 border-t border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">
          Popular Tested Categories Across the UK
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.slice(0, 6).map((cat) => {
            const Icon = getIconComponent(cat.iconName);
            return (
              <Link
                key={cat.id}
                href={`/top-10/${cat.slug}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0087ee] hover:shadow-md transition-all text-center flex flex-col items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-[#0087ee] flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0087ee] transition-colors line-clamp-2">
                  {cat.shortName}
                </span>
                <span className="text-[10px] text-slate-400">
                  {cat.itemCount} Ranked
                </span>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#0087ee]" />
        <p className="text-sm text-slate-500 mt-2">Loading search results...</p>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
