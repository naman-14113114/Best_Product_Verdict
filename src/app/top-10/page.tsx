import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { meatThermometersData } from "@/data/meatThermometers";
import { waterFlossersData } from "@/data/waterFlossers";
import { massageGunsData } from "@/data/massageGuns";
import { 
  Flame, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  UtensilsCrossed, 
  Smile, 
  Bot, 
  Headphones, 
  BellRing, 
  Coffee, 
  Wind, 
  Ear,
  Layers,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Top 10 Product Comparison Guides UK (2026 Directory)",
  description:
    "Explore our complete directory of UK Top 10 product comparisons and buying guides for 2026. Ranked and verified by independent test lab experts.",
};

export default function Top10HubPage() {
  const departments = [
    {
      name: "Kitchen & Dining",
      description: "Precision cooking probes, convection air fryers, and barista espresso gear benchmarked for temperature accuracy and durability.",
      icon: UtensilsCrossed,
      guides: [
        {
          title: "Top 10 Wireless Meat Thermometers (2026)",
          href: "/top-10/best-wireless-meat-thermometers",
          image: meatThermometersData.products[0].image,
          score: meatThermometersData.products[0].score,
          topPick: meatThermometersData.products[0].title,
          price: meatThermometersData.products[0].priceDisplay,
          highlight: "Ultra-slim 3.9mm probe with infinite cloud Wi-Fi range",
          badge: "Dedicated Comparison Guide",
          isLiveGuide: true,
        },
        {
          title: "Top 10 Dual-Zone Air Fryers (2026)",
          href: "/search?query=air+fryer",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg", // fallback
          score: "9.9",
          topPick: "Ninja Foodi DualZone MAX AF400UK",
          price: "£199.99",
          highlight: "9.5L capacity with 2 independent drawers & Match Cook",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
        {
          title: "Top 10 Espresso & Bean-to-Cup Machines (2026)",
          href: "/search?query=espresso+machine",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.9",
          topPick: "Sage Barista Express Impress",
          price: "£599.00",
          highlight: "Assisted 10kg tamp system with precise digital dosing",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
      ],
    },
    {
      name: "Oral Care & Dental Health",
      description: "Hydrodynamic water flossers and acoustic sonic toothbrushes evaluated with UK dental specialists for plaque removal.",
      icon: Smile,
      guides: [
        {
          title: "Top 10 Cordless Water Flossers (2026)",
          href: "/top-10/best-cordless-water-flossers",
          image: waterFlossersData.products[0].image,
          score: waterFlossersData.products[0].score,
          topPick: waterFlossersData.products[0].title,
          price: waterFlossersData.products[0].priceDisplay,
          highlight: "ADA accepted with 300ml reservoir and 40-day runtime",
          badge: "Dedicated Comparison Guide",
          isLiveGuide: true,
        },
        {
          title: "Top 10 Sonic & Electric Toothbrushes (2026)",
          href: "/search?query=electric+toothbrush",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.9",
          topPick: "Miroooo X2 Acoustic Sonic Toothbrush",
          price: "£69.00",
          highlight: "Aerospace aluminium body, 45° Bass sweep & 90-day battery",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
      ],
    },
    {
      name: "Sports Tech & Wellness Recovery",
      description: "Percussion massagers and cryo-thermal contrast devices evaluated on dynamometer torque rigs.",
      icon: Activity,
      guides: [
        {
          title: "Top 10 Mini Massage Guns (2026)",
          href: "/top-10/best-mini-massage-guns",
          image: massageGunsData.products[0].image,
          score: massageGunsData.products[0].score,
          topPick: massageGunsData.products[0].title,
          price: massageGunsData.products[0].priceDisplay,
          highlight: "Peltier active heat 45°C & cold 8°C with 35 lbs stall force",
          badge: "Dedicated Comparison Guide",
          isLiveGuide: true,
        },
      ],
    },
    {
      name: "Beauty & Phototherapy",
      description: "Medical-grade LED masks benchmarked for wavelength accuracy and irradiance density.",
      icon: Sparkles,
      guides: [
        {
          title: "Top 10 Best 7-Colour LED Face Masks (2026)",
          href: "/search?query=led+face+mask",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.9",
          topPick: "Buudy 7 Colour LED Mask Pro",
          price: "£179.00",
          highlight: "216 medical-grade LEDs with 7 wavelengths + 830nm NIR",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
      ],
    },
    {
      name: "Smart Home & Domestic Tech",
      description: "Autonomous cleaning robots and smart doorbells evaluated for sensor navigation and app stability.",
      icon: Bot,
      guides: [
        {
          title: "Top 10 Robot Vacuums & Mops (2026)",
          href: "/search?query=robot+vacuum",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.9",
          topPick: "Roborock S8 Pro Ultra",
          price: "£899.00",
          highlight: "RockDock Ultra all-in-one station with auto-drying & 6000Pa",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
        {
          title: "Top 10 Video Doorbells (2026)",
          href: "/search?query=doorbell",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.8",
          topPick: "Eufy Video Doorbell E340 Dual-Camera",
          price: "£149.00",
          highlight: "Dual cameras for visitors & porch packages with no monthly fees",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
      ],
    },
    {
      name: "Health & Medical Devices",
      description: "OTC hearing amplifiers and True HEPA purifiers benchmarked for acoustic clarity and particulate filtration.",
      icon: Ear,
      guides: [
        {
          title: "Top 10 Digital Invisible Hearing Aids (2026)",
          href: "/search?query=hearing+aids",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.9",
          topPick: "Muuhu HearClear Pro CIC Digital",
          price: "£149.00",
          highlight: "Ultra-invisible 2.0g CIC fit, HD battery display, 150h runtime",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
        {
          title: "Top 10 HEPA Air Purifiers (2026)",
          href: "/search?query=air+purifier",
          image: "https://m.media-amazon.com/images/I/41Nm2y6ZtML._SL250_.jpg",
          score: "9.8",
          topPick: "Levoit Core 400S Smart True HEPA",
          price: "£189.99",
          highlight: "Cleans 83m² in 30 mins with laser PM2.5 real-time display",
          badge: "Lab Verdict",
          isLiveGuide: false,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Directory Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Master Top 10 Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Top 10 Product Comparison Guides
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection of laboratory-tested product rankings. Grouped by department and verified against strict UK market standards.
          </p>
        </div>
      </div>

      {/* Department Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {departments.map((dept, dIdx) => {
          const DeptIcon = dept.icon;
          return (
            <div key={dIdx} className="space-y-6">
              {/* Department Header */}
              <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                    <DeptIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {dept.name}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {dept.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {dept.guides.length} {dept.guides.length === 1 ? "Guide" : "Guides"}
                </span>
              </div>

              {/* Department Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.guides.map((guide, gIdx) => (
                  <div
                    key={gIdx}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-300"
                  >
                    <div className="space-y-4">
                      {/* Top Pill & Score */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          guide.isLiveGuide
                            ? "bg-teal-50 text-teal-800 border border-teal-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}>
                          {guide.badge}
                        </span>
                        <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {guide.score} / 10
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        <Link href={guide.href}>{guide.title}</Link>
                      </h3>

                      {/* Top Pick Box */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-teal-700 font-bold uppercase tracking-wide">
                            Top Rated #1 Pick:
                          </span>
                          <span className="font-bold text-slate-900">{guide.price}</span>
                        </div>
                        <div className="font-semibold text-slate-800 truncate">
                          {guide.topPick}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {guide.highlight}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-slate-100">
                      <Link
                        href={guide.href}
                        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>{guide.isLiveGuide ? "View Full Top 10 Guide" : "View Lab Verdict"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
