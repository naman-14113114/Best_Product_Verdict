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
  SlidersHorizontal,
  Star,
  CheckCircle2,
  ShieldCheck,
  X
} from "lucide-react";
import { CATEGORIES, CategoryData, searchCategories } from "@/data/categories";

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

  const handleCategoryFilter = (group: string) => {
    setSelectedGroup(group);
  };

  // Perform search
  let matchedCategories = searchCategories(query);

  if (selectedGroup !== "All") {
    matchedCategories = matchedCategories.filter((c) => {
      if (selectedGroup === "Personal Care") {
        return c.categoryGroup.includes("Personal Care");
      }
      if (selectedGroup === "Tech") {
        return c.categoryGroup.includes("Tech");
      }
      return c.categoryGroup.toLowerCase().includes(selectedGroup.toLowerCase());
    });
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

  const categoryFilters = [
    { label: "All Categories", value: "All" },
    { label: "Kitchen & Dining", value: "Kitchen & Dining" },
    { label: "Personal Care", value: "Personal Care" },
    { label: "Wellness & Recovery", value: "Wellness & Recovery" },
    { label: "Smart Home", value: "Smart Home" },
    { label: "Tech", value: "Tech" },
    { label: "Health & Medical", value: "Health & Medical" }
  ];

  const suggestedQueries = [
    "Meat Thermometer",
    "Water Flosser",
    "Massage Gun",
    "LED Face Mask",
    "Electric Toothbrush",
    "Air Fryer",
    "Robot Vacuum",
    "Noise Cancelling Headphones",
    "Hearing Aids"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* ConsumerPicks Search Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden space-y-5">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span>UK Product Testing Search Engine</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Search Tested Products &amp; Top 10 Verdicts
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Instant access to independent UK laboratory test scores, side-by-side spec sheets, and top recommendations across 100+ benchmarked consumer devices.
          </p>

          {/* Instant Search Form */}
          <form onSubmit={handleSearchSubmit} className="pt-2">
            <div className="flex items-center bg-slate-50 rounded-2xl shadow-inner p-1.5 border-2 border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition-all max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search category, product model, or keyword (e.g. meat probe, flosser)..."
                className="w-full px-3 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none bg-transparent font-medium"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    router.push("/search");
                  }}
                  className="p-1.5 text-slate-400 hover:text-slate-600 mr-1"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 sm:px-6 py-2.5 rounded-xl transition-all text-xs sm:text-sm shrink-0 shadow-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Filter and Sorting Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categoryFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleCategoryFilter(filter.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedGroup === filter.value
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            <option value="relevance">Best Relevance</option>
            <option value="rating">Highest Lab Rating</option>
            <option value="tested">Most Tested Models</option>
          </select>
        </div>
      </div>

      {/* Results Count & Query Status */}
      <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
        <div>
          {query ? (
            <span>
              Showing <strong className="text-slate-900">{matchedCategories.length}</strong> matching categories for &ldquo;<span className="text-blue-600 font-bold">{query}</span>&rdquo;
            </span>
          ) : (
            <span>
              Showing all <strong className="text-slate-900">{matchedCategories.length}</strong> tested Top 10 buying categories
            </span>
          )}
        </div>
        {query && (
          <button
            onClick={() => {
              setQuery("");
              router.push("/search");
            }}
            className="text-blue-600 hover:text-blue-800 underline text-xs font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Results Grid */}
      {matchedCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedCategories.map((category: CategoryData) => {
            const IconComponent = getIconComponent(category.iconName);
            // Check if this category has a dedicated comparison page
            const hasDedicatedPage = [
              "best-wireless-meat-thermometers",
              "best-cordless-water-flossers",
              "best-mini-massage-guns"
            ].includes(category.slug);

            const guideLink = hasDedicatedPage 
              ? `/top-10/${category.slug}`
              : `/top-10`;

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {category.categoryGroup}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        Updated {category.updatedDate}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={guideLink}>
                        {category.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Top Product Samples in this Category */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Top Ranked Models in Lab:
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
                        <span className="font-bold text-emerald-600 text-xs shrink-0 flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {item.rating}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {category.testedCount} Models Benchmarked
                  </span>
                  <Link
                    href={guideLink}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                  >
                    <span>View Top 10 Guide</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Fallback Suggestions when no results match query */
        <div className="bg-white rounded-3xl border border-slate-200 p-10 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              No matching categories found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We may not have completed a public lab benchmark for this exact search term yet. Try searching for broader terms or explore our popular tested categories below.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Popular Suggested Search Terms:
            </span>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {suggestedQueries.map((suggest) => (
                <button
                  key={suggest}
                  onClick={() => {
                    setQuery(suggest);
                    router.push(`/search?query=${encodeURIComponent(suggest)}`);
                  }}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-xl font-semibold transition-colors border border-slate-200"
                >
                  {suggest}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Suggested Popular Categories Footer Strip */}
      <div className="pt-8 border-t border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Frequently Consulted UK Buying Guides
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.slice(0, 6).map((cat) => {
            const Icon = getIconComponent(cat.iconName);
            const hasDedicatedPage = [
              "best-wireless-meat-thermometers",
              "best-cordless-water-flossers",
              "best-mini-massage-guns"
            ].includes(cat.slug);

            const targetUrl = hasDedicatedPage ? `/top-10/${cat.slug}` : `/search?query=${encodeURIComponent(cat.shortName)}`;

            return (
              <Link
                key={cat.id}
                href={targetUrl}
                className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-center flex flex-col items-center gap-2 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {cat.shortName}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
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
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        <p className="text-sm text-slate-500 mt-2 font-medium">Loading search results...</p>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
