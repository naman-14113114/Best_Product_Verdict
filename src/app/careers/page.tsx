"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Check, Lock, ShieldCheck } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobCategory: "",
    specialization: "",
    skills: "",
    resume: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName || !formData.email || !formData.phone || !formData.jobCategory || !formData.specialization || !formData.skills || !formData.resume) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Header */}
      <div className="relative w-full bg-[#0087ee] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            A small but mighty team
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 font-medium max-w-2xl mx-auto">
            Accelerate your career goals at Consumer Picks
          </p>
        </div>

        {/* Sharp Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10 sm:h-14 text-white fill-current"
          >
            <path d="M1200 0L0 120H1200V0Z" />
          </svg>
        </div>
      </div>

      {/* Main Form & Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Text & Perks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <span className="text-[#00c092] border-b-4 border-[#00c092] pb-1">
                  Submit your Resume
                </span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We are always seeking talented content editors and digital marketing specialists. These are both remote positions.
              </p>
              <p className="text-sm font-semibold text-slate-500 italic">
                *You must reside in the United States to apply.
              </p>
            </div>

            {/* Why submit card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Why submit your resume with us?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00c092]/10 text-[#00c092] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">
                    Flexible work environment. Work on your own hours.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00c092]/10 text-[#00c092] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">
                    Seamless interview process. We value your time.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00c092]/10 text-[#00c092] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">
                    100% private. Your information will not be shared or sold to 3rd parties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#00c092] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Thank you for your interest!
                  </h3>
                  <p className="text-sm text-teal-800 leading-relaxed max-w-md mx-auto">
                    Your submission has been received. You will hear back from us within 3 business days if we&apos;d like to proceed with an interview or have any questions.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Full Name<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="First Last"
                        required
                        className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Email<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@email.com"
                        required
                        className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Phone Number<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="012-345-6789"
                        required
                        className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="jobCategory" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Job Category<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        id="jobCategory"
                        name="jobCategory"
                        value={formData.jobCategory}
                        onChange={handleChange}
                        placeholder="Ex. Digital Marketing"
                        required
                        className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialization" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Specialization<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      placeholder="Facebook, Google, etc"
                      required
                      className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Skills<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      rows={3}
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="Skill 1, Skill 2, Skill 3..."
                      required
                      className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Please include up to 10 skills on your job category and specialization.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Resume<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="Resume Link or Portfolio Link"
                      required
                      className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="If you would like to include any extra note or cover letter, please feel free to do it here."
                      className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-lg border border-slate-300 focus:border-[#0087ee] focus:ring-2 focus:ring-[#0087ee]/20 focus:outline-none transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs font-semibold">
                      {errorMessage}
                    </p>
                  )}

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#0087ee] hover:bg-[#0077dd] text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                    >
                      {status === "loading" ? "Submitting..." : "submit resume"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
