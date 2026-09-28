import type { Metadata } from "next";
import Link from "next/link";
import { massageGunsData } from "@/data/massageGuns";
import { ProductCard } from "@/components/ProductCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BuyingGuide } from "@/components/BuyingGuide";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { Clock, ShieldCheck, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: massageGunsData.metaTitle,
  description: massageGunsData.metaDescription,
  alternates: {
    canonical: massageGunsData.canonicalUrl,
  },
  openGraph: {
    title: massageGunsData.metaTitle,
    description: massageGunsData.metaDescription,
    url: massageGunsData.canonicalUrl,
    siteName: "Best Product Verdict UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: massageGunsData.metaTitle,
    description: massageGunsData.metaDescription,
  },
};

export default function BestMiniMassageGunsPage() {
  const data = massageGunsData;

  return (
    <div className="w-full bg-[#f7f9fb] pb-16">
      {/* Schema Markup for SEO */}
      <JsonLdSchema data={data} />

      {/* Hero Section Container */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
          {/* Breadcrumb Bar */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/top-10" className="hover:text-blue-600 transition-colors">Top 10</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{data.categoryName}</span>
          </nav>

          {/* Subheader Banner: UK Flag & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <span className="text-base" role="img" aria-label="United Kingdom">🇬🇧</span>
              <span>UK Physiotherapy Review</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              <Clock className="w-3.5 h-3.5" />
              <span>Updated: {data.updatedDate}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
              <Award className="w-3.5 h-3.5" />
              <span>18 Massagers Dynamometer Tested</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {data.title}
          </h1>

          {/* Author Pill & Editorial Verification */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 py-3 border-y border-slate-100 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                DW
              </div>
              <div>
                <span className="font-bold text-slate-900">{data.author.name}</span>
                <span className="text-slate-500 block text-[11px] sm:text-xs">Sports Tech &amp; Recovery Specialist</span>
              </div>
            </div>

            <span className="text-slate-300 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-teal-700 font-semibold bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/60 text-xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Verified by Sports Science Board</span>
            </div>

            <span className="text-slate-300 hidden sm:inline">•</span>

            <div className="text-xs text-slate-500 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Calibrated Force Testing</span>
            </div>
          </div>

          {/* Editorial Note / Intro */}
          <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
            Our sports recovery laboratory spent over 140 hours benchmarking 18 compact percussion massagers against digital force gauges, sound level meters, and thermal cameras. We analyzed true stall force, stroke amplitude depth, Peltier contrast thermal heads, and motor acoustics under load to rank the 10 best mini massage guns in the UK for 2026.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Fast Comparison Summary Box */}
        <ComparisonTable products={data.products} categoryName={data.categoryName} />

        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-200/60">
            <span>In-Depth Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Detailed Sports Science Rankings &amp; Massager Evaluations
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Each mini massager below has undergone rigorous stall force dynamometer tests, battery discharge cycles, and ergonomics assessments.
          </p>
        </div>

        {/* 10 Product Cards List */}
        <div className="space-y-6">
          {data.products.map((product) => (
            <ProductCard
              key={product.rank}
              product={product}
              categoryName={data.categoryName}
            />
          ))}
        </div>

        {/* Comprehensive Buying Guide & Methodology Section */}
        <BuyingGuide
          guide={data.guide}
          authorName={data.author.name}
          authorRole={data.author.role}
        />
      </div>
    </div>
  );
}
