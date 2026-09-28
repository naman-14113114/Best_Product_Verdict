import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { meatThermometersData } from "@/data/meatThermometers";
import { waterFlossersData } from "@/data/waterFlossers";
import { massageGunsData } from "@/data/massageGuns";
import { Flame, Sparkles, Activity, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "All Top 10 Product Comparison Guides UK (2026)",
  description:
    "Explore our complete index of Top 10 product comparisons and buying guides for 2026. Ranked and verified by UK experts.",
};

export default function Top10HubPage() {
  const guides = [
    {
      title: "Top 10 Wireless Meat Thermometers (2026)",
      category: "Smart Kitchen Hardware",
      href: "/top-10/best-wireless-meat-thermometers",
      image: meatThermometersData.products[0].image,
      score: meatThermometersData.products[0].score,
      badge: "Best Overall: " + meatThermometersData.products[0].title,
      icon: Flame,
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Top 10 Cordless Water Flossers (2026)",
      category: "Oral Health & Dental Care",
      href: "/top-10/best-cordless-water-flossers",
      image: waterFlossersData.products[0].image,
      score: waterFlossersData.products[0].score,
      badge: "Best Overall: " + waterFlossersData.products[0].title,
      icon: Sparkles,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Top 10 Mini Massage Guns (2026)",
      category: "Sports Tech & Recovery",
      href: "/top-10/best-mini-massage-guns",
      image: massageGunsData.products[0].image,
      score: massageGunsData.products[0].score,
      badge: "Best Overall: " + massageGunsData.products[0].title,
      icon: Activity,
      color: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">
            <span>Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Top 10 Product Comparison Guides
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Browse our laboratory-tested rankings across domestic tech, oral hygiene, and fitness recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${guide.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                      {guide.category}
                    </span>
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {guide.score} / 10
                    </span>
                  </div>

                  <div className="relative w-full aspect-square bg-slate-50 rounded-xl p-3 mb-4 flex items-center justify-center">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <h2 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                    <Link href={guide.href}>{guide.title}</Link>
                  </h2>

                  <p className="text-xs text-teal-700 font-semibold mt-2 bg-teal-50 p-2 rounded-lg border border-teal-100">
                    {guide.badge}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={guide.href}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
