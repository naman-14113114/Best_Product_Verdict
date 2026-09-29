"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export const HeroSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/search");
    }
  };

  const popularTags = [
    { label: "Meat Thermometers", query: "meat thermometer" },
    { label: "Water Flossers", query: "water flosser" },
    { label: "Mini Massage Guns", query: "massage gun" },
    { label: "LED Face Masks", query: "led face mask" },
    { label: "Electric Toothbrushes", query: "electric toothbrush" },
    { label: "Air Fryers", query: "air fryer" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3.5">
      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="relative w-full">
        <div className="flex items-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-2 border-2 border-slate-200 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">
          <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search product category, brand, or model (e.g., meat probe, water flosser)..."
            className="w-full px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none bg-transparent font-medium"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors text-xs sm:text-sm shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Search</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </button>
        </div>
      </form>

      {/* Suggested Search Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        <span className="text-xs font-semibold text-slate-400">Popular:</span>
        {popularTags.map((tag) => (
          <button
            key={tag.label}
            type="button"
            onClick={() => router.push(`/search?query=${encodeURIComponent(tag.query)}`)}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors"
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSearch;
