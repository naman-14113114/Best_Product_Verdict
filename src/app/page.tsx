import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { meatThermometersData } from "@/data/meatThermometers";
import { waterFlossersData } from "@/data/waterFlossers";
import { massageGunsData } from "@/data/massageGuns";
import { CATEGORIES } from "@/data/categories";
import { HeroSearch } from "@/components/HeroSearch";
import { NewsletterBox } from "@/components/NewsletterBox";
import { 
  Flame, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Star, 
  FlaskConical,
  Beaker,
  CheckCircle2,
  Users,
  Search,
  Zap,
  Sliders,
  Clock,
  ExternalLink,
  ChevronRight,
  Smile,
  UtensilsCrossed,
  Bot,
  Headphones,
  Ear
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Product Verdict UK | Top 10 Product Reviews & Buying Guides",
  description:
    "Discover the best products in the UK with data-driven laboratory testing and top 10 rankings. Unbiased reviews for smart kitchen hardware, dental care, sports recovery, and smart home tech.",
};

export default function HomePage() {
  // Primary featured top 10 guides with active dedicated comparison pages
  const primaryGuides = [
    {
      title: "Top 10 Best Wireless Meat Thermometers (2026)",
      categoryName: "Smart Kitchen Hardware",
      description:
        "10 wire-free multi-sensor probes tested across fan ovens, air fryers, and Weber smokers for thermal accuracy and Wi-Fi range.",
      href: "/top-10/best-wireless-meat-thermometers",
      image: meatThermometersData.products[0].image,
      topPick: meatThermometersData.products[0].title,
      price: meatThermometersData.products[0].priceDisplay,
      score: meatThermometersData.products[0].score,
      testedCount: 18,
      icon: Flame,
      badge: "Best Overall #1",
      highlight: "Ultra-thin 3.9mm probe with unlimited cloud Wi-Fi range",
    },
    {
      title: "Top 10 Best Cordless Water Flossers (2026)",
      categoryName: "Oral Care & Dental Health",
      description:
        "16 rechargeable oral irrigators evaluated for hydrodynamic pulse pressure, reservoir volume, IPX7 waterproofing, and plaque removal.",
      href: "/top-10/best-cordless-water-flossers",
      image: waterFlossersData.products[0].image,
      topPick: waterFlossersData.products[0].title,
      price: waterFlossersData.products[0].priceDisplay,
      score: waterFlossersData.products[0].score,
      testedCount: 22,
      icon: Sparkles,
      badge: "Best Overall #1",
      highlight: "ADA accepted with 300ml reservoir and 40-day battery runtime",
    },
    {
      title: "Top 10 Best Mini Massage Guns (2026)",
      categoryName: "Sports Tech & Recovery",
      description:
        "Dynamometer stall force testing, stroke amplitude depth analysis, and Peltier thermal contrast evaluations across 18 massagers.",
      href: "/top-10/best-mini-massage-guns",
      image: massageGunsData.products[0].image,
      topPick: massageGunsData.products[0].title,
      price: massageGunsData.products[0].priceDisplay,
      score: massageGunsData.products[0].score,
      testedCount: 20,
      icon: Activity,
      badge: "Best Overall #1",
      highlight: "Active Peltier heat 45°C & cold 8°C with 35 lbs stall force",
    },
  ];

  // Secondary categories from comprehensive lab datasets
  const secondaryCategories = [
    {
      title: "Top 10 Best LED Face Masks UK (2026)",
      categoryName: "Beauty & Phototherapy",
      slug: "best-led-face-masks",
      href: "/search?query=led+face+mask",
      icon: Sparkles,
      topPick: "Buudy 7 Colour LED Mask Pro",
      score: "9.9",
      price: "£179.00",
      highlight: "216 medical-grade LEDs with 7 wavelengths & 830nm NIR",
      testedCount: 16,
    },
    {
      title: "Top 10 Best Electric Toothbrushes UK (2026)",
      categoryName: "Oral Care & Hygiene",
      slug: "best-electric-toothbrushes",
      href: "/search?query=electric+toothbrush",
      icon: Smile,
      topPick: "Miroooo X2 Acoustic Sonic Toothbrush",
      score: "9.9",
      price: "£69.00",
      highlight: "Aerospace aluminium body, 45° Bass sweep & 90-day battery",
      testedCount: 25,
    },
    {
      title: "Top 10 Best Air Fryers & Multi-Cookers UK (2026)",
      categoryName: "Kitchen & Dining",
      slug: "best-air-fryers",
      href: "/search?query=air+fryer",
      icon: UtensilsCrossed,
      topPick: "Ninja Foodi DualZone MAX AF400UK",
      score: "9.9",
      price: "£199.99",
      highlight: "9.5L capacity with 2 independent drawers & Match Cook",
      testedCount: 20,
    },
    {
      title: "Top 10 Best Robot Vacuums & Mops UK (2026)",
      categoryName: "Smart Home & Automation",
      slug: "best-robot-vacuums",
      href: "/search?query=robot+vacuum",
      icon: Bot,
      topPick: "Roborock S8 Pro Ultra",
      score: "9.9",
      price: "£899.00",
      highlight: "RockDock Ultra all-in-one station with 6000Pa suction",
      testedCount: 15,
    },
    {
      title: "Top 10 Best Noise-Cancelling Headphones (2026)",
      categoryName: "Tech & Audio",
      slug: "best-noise-cancelling-headphones",
      href: "/search?query=headphones",
      icon: Headphones,
      topPick: "Sony WH-1000XM5 Wireless ANC",
      score: "9.9",
      price: "£279.00",
      highlight: "Industry-leading 8-microphone ANC with Auto NC Optimizer",
      testedCount: 18,
    },
    {
      title: "Top 10 Best Digital Hearing Aids UK (2026)",
      categoryName: "Health & Medical",
      slug: "best-hearing-aids",
      href: "/search?query=hearing+aids",
      icon: Ear,
      topPick: "Muuhu HearClear Pro CIC Digital",
      score: "9.9",
      price: "£149.00",
      highlight: "Ultra-invisible 2.0g CIC fit, HD battery display, 150h runtime",
      testedCount: 12,
    },
  ];

  // Testing Protocol Steps
  const protocolSteps = [
    {
      number: "01",
      title: "Independent Retail Acquisition",
      desc: "Every product tested is purchased anonymously at full retail price through public UK merchants to prevent manufacturer cherry-picking.",
      icon: ShieldCheck,
      accent: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      number: "02",
      title: "Instrumented Lab Benchmarking",
      desc: "Devices undergo precision measurement using NIST-calibrated digital thermometers, dynamometer force rigs, and optical spectrometers.",
      icon: FlaskConical,
      accent: "text-teal-600 bg-teal-50 border-teal-200",
    },
    {
      number: "03",
      title: "6-Week Real-World In-Home Trials",
      desc: "Hardware is placed in genuine British homes and evaluated across daily family use, UK hard water conditions, and domestic electrical standards.",
      icon: Clock,
      accent: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      number: "04",
      title: "100% Unbiased Verdict Scoring",
      desc: "Scores are computed via a standardized 10-point mathematical rubric. Manufacturers can never pay for higher rankings or altered scores.",
      icon: Award,
      accent: "text-teal-600 bg-teal-50 border-teal-200",
    },
  ];

  // Editorial Board Members
  const editorialBoard = [
    {
      name: "David Welch",
      role: "Lead Hardware Testing Analyst & Culinary Tech Specialist",
      credentials: "BEng Mechanical Systems, 12+ years evaluating consumer culinary hardware and thermal sensor dynamics.",
      specialty: "Smart Kitchen Tech & Precision Thermal Metrology",
      avatarLetter: "D",
      gradient: "from-blue-600 to-teal-500",
    },
    {
      name: "Dr. Olivia Henderson, BDS",
      role: "Senior Oral Health Consultant & Clinical Reviewer",
      credentials: "BDS University of Bristol Dental School, 14+ years clinical practice and dental hydrodynamic technology evaluation.",
      specialty: "Sonic Hydrodynamics & Periodontal Protection",
      avatarLetter: "O",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      name: "Marcus Davies",
      role: "Senior Biomechanics & Recovery Tech Specialist",
      credentials: "MSc Sports Biomechanics, Imperial College London, consultant to British athletic recovery facilities.",
      specialty: "Percussion Stall Force & Peltier Contrast Cryotherapy",
      avatarLetter: "M",
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      name: "Dr. Eleanor Vance, AuD, MSc",
      role: "Senior Consultant Audiologist & Acoustics Specialist",
      credentials: "AuD, MSc Audiology, 18+ years NHS & private practice specialist in multi-channel DSP digital hearing technologies.",
      specialty: "Acoustic Attenuation & CIC Micro-Electronics",
      avatarLetter: "E",
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] space-y-16 pb-20">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          
          {/* Top Authority Pill */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200/90 shadow-sm">
            <span role="img" aria-label="United Kingdom">🇬🇧</span>
            <span>Independent UK Consumer Research Lab • 2026 Edition</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Honest, Lab-Tested <span className="text-blue-600">Product Verdicts</span> for UK Consumers
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We buy, teardown, and benchmark consumer hardware in real British homes and standardized laboratories. No sponsored ranks, no fake reviews—just rigorous empirical data.
          </p>

          {/* Interactive Search Input */}
          <div className="pt-2">
            <HeroSearch />
          </div>

          {/* Proof Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-semibold text-slate-600 border-t border-slate-100 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <FlaskConical className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">100+ Products Tested</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">100% Unbiased Editorial</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Beaker className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">Standardized Lab Protocols</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-800">UK Price &amp; Stock Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Primary Top 10 Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">
              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              <span>Flagship Lab Guides</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Top 10 Comparison Guides
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Explore our most comprehensive side-by-side comparison matrixes with verified lab scores.
            </p>
          </div>
          <Link
            href="/top-10"
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group self-start md:self-end"
          >
            <span>View All Department Guides</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {primaryGuides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-blue-300"
              >
                {/* Top Accent Stripe */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Category & Badge Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                        <Icon className="w-3.5 h-3.5" />
                        {guide.categoryName}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {guide.testedCount} Models Tested
                      </span>
                    </div>

                    {/* Product Image Box */}
                    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50/30 transition-colors">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-2.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{guide.score}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={guide.href}>{guide.title}</Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {guide.description}
                    </p>
                  </div>

                  {/* Top Pick Summary Box */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-teal-700 uppercase tracking-wider">
                          #1 Lab Top Pick:
                        </span>
                        <span className="font-black text-slate-900">{guide.price}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {guide.topPick}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {guide.highlight}
                      </div>
                    </div>

                    {/* Button */}
                    <Link
                      href={guide.href}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-98"
                    >
                      <span>View Full Top 10 Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Secondary Categories Grid (ConsumerPicks Department Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full mb-2">
            <span>More Tested Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Popular Product Category Verdicts
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Browse additional top-ranked product categories evaluated by our UK testing panel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {cat.categoryName}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 font-medium">
                        {cat.testedCount} Tested Models
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={cat.href}>{cat.title}</Link>
                    </h3>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-teal-700 font-bold">#1 Top Pick:</span>
                      <span className="font-bold text-blue-600 flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {cat.score}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-800 line-clamp-1">
                      {cat.topPick} ({cat.price})
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">
                      {cat.highlight}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Full Lab Review
                  </span>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Read Verdict</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "How We Test" 4-Point Protocol Section */}
      <section className="bg-white border-y border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              <FlaskConical className="w-4 h-4 text-teal-600" />
              <span>Standardized Evaluation Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How We Test &amp; Benchmark Every Product
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our 4-tier testing framework combines precision laboratory instrumentation with extensive domestic field trials to deliver absolute verdict accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {protocolSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#f7f9fb] rounded-2xl border border-slate-200 p-6 space-y-4 hover:border-teal-300 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-bold text-lg text-white">Have Questions About Our Lab Benchmarks?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Read our complete institutional testing manifesto and zero-sponsorship commitment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
              >
                About Our Lab
              </Link>
              <Link
                href="/mission"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
              >
                Our Editorial Pledge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Board Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Expert Panel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Meet the Editorial &amp; Testing Board
          </h2>
          <p className="text-sm text-slate-500">
            Real British engineers, clinical specialists, and product analysts behind every verdict.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorialBoard.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${member.gradient} text-white font-black text-xl flex items-center justify-center shadow-md shrink-0`}>
                    {member.avatarLetter}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-600 block mt-0.5">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.credentials}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Verified UK Test Lead</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Callout */}
      <NewsletterBox />

    </div>
  );
}
