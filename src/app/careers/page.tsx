import type { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  Heart,
  Laptop,
  Sparkles,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Research Fellowships | Best Product Verdict UK",
  description:
    "Join the testing and editorial team at Best Product Verdict. Explore open roles for test engineers, medical writers, and research fellows.",
};

export default function CareersPage() {
  const openRoles = [
    {
      title: "Senior Consumer Electronics Test Engineer",
      location: "London Testing Facility (Covent Garden)",
      type: "Full-Time",
      department: "Hardware Metrology Lab",
      desc: "Lead standardized bench testing, optical spectrometry, and acoustic chamber measurements across smart home and audio hardware.",
      skills: ["NIST Calibration", "Oscilloscopes & Spectrometers", "Data Modeling", "Hardware Teardowns"],
    },
    {
      title: "Oral Health & Dental Tech Contributing Editor",
      location: "Remote (UK-Based)",
      type: "Part-Time / Contract",
      department: "Clinical Review Board",
      desc: "Evaluate hydrodynamic water flossers, ultrasonic toothbrushes, and oral irrigators in consultation with British dental standards.",
      skills: ["BDS / Dental Hygiene Qualification", "Technical Writing", "Enamel Safety Analysis"],
    },
    {
      title: "Culinary Hardware & Thermal Dynamics Specialist",
      location: "Hybrid (London Lab / Remote)",
      type: "Full-Time",
      department: "Kitchen & Appliances",
      desc: "Benchmark smart wireless meat thermometers, multi-zone air fryers, and commercial espresso extraction systems under rigorous test protocols.",
      skills: ["Thermal Metrology (±0.1°C)", "App Stability Testing", "Culinary Hardware Testing"],
    },
    {
      title: "Graduate Testing & Research Fellowship 2026",
      location: "London Headquarters",
      type: "12-Month Paid Fellowship",
      department: "Editorial & Metrology",
      desc: "Designed for recent engineering, physics, or data science graduates interested in investigative consumer journalism and metrology.",
      skills: ["STEM Degree", "Data Analysis (Python / Excel)", "Passion for Hardware Integrity"],
    },
  ];

  const perks = [
    {
      title: "Cutting-Edge Testing Lab",
      desc: "Work with top-tier digital oscilloscopes, dynamometer torque benches, and acoustic isolation rooms.",
      icon: Laptop,
    },
    {
      title: "100% Uncompromised Ethics",
      desc: "Never write sponsored copy. Our engineers enjoy total freedom to report hardware flaws honestly.",
      icon: Award,
    },
    {
      title: "Flexible Working Options",
      desc: "Hybrid and remote-friendly positions with central London Covent Garden headquarters access.",
      icon: Clock,
    },
    {
      title: "Comprehensive Health & Gear Allowance",
      desc: "Private medical, optical, and dental coverage plus an annual home lab gear stipend.",
      icon: Heart,
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fb] py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          <Briefcase className="w-4 h-4 text-blue-600" />
          <span>Join Our UK Team</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Careers &amp; Research Fellowships
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Help us build the most rigorous, honest, and scientifically grounded product evaluation laboratory in the United Kingdom.
        </p>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Culture & Perks Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Why Best Product Verdict
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Life at Best Product Verdict
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions List */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Current Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Open Roles &amp; Fellowships
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              We review applications on a rolling basis. All positions offer competitive London-weighted compensation.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-blue-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                      {role.department}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {role.location}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                      {role.type}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {role.desc}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 mr-1">Key Competencies:</span>
                  {role.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Reference: BPV-2026-0{idx + 1}</span>
                  <a
                    href={`mailto:careers@bestproductverdict.co.uk?subject=Application: ${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speculative Application Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Don&apos;t See Your Exact Specialty?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We are always eager to speak with experienced laboratory metrologists, clinical specialists, and investigative tech journalists. Send us your CV and sample teardowns.
          </p>
          <div className="pt-2">
            <a
              href="mailto:careers@bestproductverdict.co.uk?subject=Speculative Application - Product Testing & Editorial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Email careers@bestproductverdict.co.uk</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
