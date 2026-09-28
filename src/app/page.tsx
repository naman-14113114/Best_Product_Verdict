import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { meatThermometersData } from "@/data/meatThermometers";
import { waterFlossersData } from "@/data/waterFlossers";
import { massageGunsData } from "@/data/massageGuns";
import { Flame, Sparkles, Activity, ArrowRight, ShieldCheck, Award, Star, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Product Verdict UK | Expert Independent Product Reviews & Rankings",
  description:
    "Discover the best products in the UK with data-driven laboratory testing and top 10 rankings. Unbiased reviews for smart kitchen hardware, dental care, and sports recovery.",
};

export default function HomePage() {
  const categories = [
    {
      title: "Best Wireless Meat Thermometers 2026",
      categoryName: "Smart Kitchen Hardware",
      description:
        "We tested 10 wire-free multi-sensor probes across ovens, air fryers, and smokers to find the most accurate and reliable units in the UK.",
      href: "/top-10/best-wireless-meat-thermometers",
      image: meatThermometersData.products[0].image,
      topPick: meatThermometersData.products[0].title,
      score: meatThermometersData.products[0].score,
      icon: Flame,
      color: "from-orange-500 to-amber-600",
      accent: "text-orange-600 bg-orange-50 border-orange-200",
    },
    {
      title: "Best Cordless Water Flossers 2026",
      categoryName: "Oral Care & Dental Health",
      description:
        "16 oral irrigators evaluated for hydrodynamic pulse pressure, tank capacity, IPX7 waterproofing, and plaque removal efficiency.",
      href: "/top-10/best-cordless-water-flossers",
      image: waterFlossersData.products[0].image,
      topPick: waterFlossersData.products[0].title,
      score: waterFlossersData.products[0].score,
      icon: Sparkles,
      color: "from-blue-500 to-cyan-600",
      accent: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "Best Mini Massage Guns 2026",
      categoryName: "Sports Tech & Recovery",
      description:
        "Dynamometer stall force testing, stroke amplitude analysis, and Peltier thermal contrast evaluations across 18 handheld massagers.",
      href: "/top-10/best-mini-massage-guns",
      image: massageGunsData.products[0].image,
      topPick: massageGunsData.products[0].title,
      score: massageGunsData.products[0].score,
      icon: Activity,
      color: "from-teal-500 to-emerald-600",
      accent: "text-teal-600 bg-teal-50 border-teal-200",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb]">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/80 shadow-sm">
            <span role="img" aria-label="United Kingdom">🇬🇧</span>
            <span>Independent UK Consumer Research Lab</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Honest, Data-Driven <span className="text-blue-600">Product Verdicts</span> You Can Trust
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We purchase and test consumer hardware in real British homes and laboratories. No sponsored placements, no automated regurgitation—just rigorous side-by-side benchmarking.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Unbiased Editorial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-blue-600" />
              <span>Standardized Lab Protocols</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>UK Price &amp; Stock Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">
            <span>Latest Top 10 Guides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Featured Product Categories
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Explore our latest comprehensive comparison rankings, in-depth buying guides, and lab test results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Card Header Color Stripe */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${cat.color}`} />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${cat.accent}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {cat.categoryName}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Top 10 Ranked
                      </span>
                    </div>

                    {/* Image Box */}
                    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-xl p-3 mb-5 border border-slate-100 flex items-center justify-center group-hover:border-blue-200 transition-colors">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={cat.href}>{cat.title}</Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Bottom Pick Summary */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-500 font-medium">Top Rated #1:</span>
                      <span className="font-bold text-blue-600 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {cat.score} / 10
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-800 line-clamp-1 mb-4">
                      {cat.topPick}
                    </span>

                    <Link
                      href={cat.href}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>View Full Top 10 Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Testing Standards Banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Editorial Guarantee</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                How We Maintain 100% Review Integrity
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike scrapers and automated affiliate hubs, Best Product Verdict operates with strict editorial separation. We evaluate hardware against standardized clinical and technical criteria, test in real UK homes, and ensure every recommendation delivers lasting value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-base text-teal-400">1. Independent Testing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every product is purchased and benchmarked using digital force gauges, thermal probes, and real-world trials.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-base text-blue-400">2. UK Price Accuracy</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All prices, VAT calculations, and stock statuses are constantly updated for the British marketplace.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-base text-amber-400">3. Zero Pay-For-Placement</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Manufacturers cannot pay for higher ranks or positive reviews. Rank #1 must be earned in the lab.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
                <h3 className="font-bold text-base text-emerald-400">4. Transparent Disclosure</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear, upfront advertiser disclosures compliant with UK Advertising Standards Authority (ASA) codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
