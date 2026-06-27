import React from 'react';
import { BookOpen, Star, ShieldCheck, Users, Award, Sparkles, CheckCircle2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/content';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#fcfaf6] via-[#f7f3ea] to-white">
      {/* Decorative background glow & shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Private Tutoring Institute • CBSE & State Board Experts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-blue-950 leading-[1.15]">
              Building Strong Foundations, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-900 to-amber-700">Inspiring Academic Excellence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experienced and dedicated tutoring for students from <strong className="text-slate-800 font-semibold">Classes 1–10</strong> and Advanced English coaching for <strong className="text-slate-800 font-semibold">Classes 11–12</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-xl shadow-lg shadow-blue-900/20 transition-all text-base group"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-xl border border-slate-200 shadow-sm transition-all text-base"
              >
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>View Courses</span>
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-900">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">10+ Years</p>
                  <p className="text-[11px] text-slate-500">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-800">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Small Batches</p>
                  <p className="text-[11px] text-slate-500">Personal Care</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-900">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Board Experts</p>
                  <p className="text-[11px] text-slate-500">Exam Results</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Academic Showcase Card (Replacing Photos) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Academic Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-6 sm:p-8 text-left space-y-6">
                
                {/* Header Banner */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-blue-950">Academic Focus</h3>
                      <p className="text-xs text-amber-700 font-semibold">Structured Coaching Curriculum</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Admissions Open
                  </div>
                </div>

                {/* Boards Tag Grid */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Teaching Priority Boards</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">CBSE Board</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">State Board</span>
                    </div>
                  </div>
                </div>

                {/* Classes & Subjects breakdown */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Class & Subject Offerings</p>
                  
                  <div className="p-4 rounded-xl bg-blue-950 text-white space-y-1.5 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif font-bold text-amber-300">Classes 1 – 10</span>
                      <span className="text-[10px] bg-blue-900 px-2 py-0.5 rounded text-blue-200 font-mono">Foundation</span>
                    </div>
                    <p className="text-xs text-slate-300">All Core Subjects • Comprehensive Daily Support • Concept Mastery</p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-blue-950 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif font-bold text-blue-950">Classes 11 – 12</span>
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-mono font-bold">Specialized</span>
                    </div>
                    <p className="text-xs text-slate-700">Advanced English Coaching • Grammar & Literature • Board Exam Excellence</p>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="italic font-serif">"Concept clarity builds exam confidence."</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Deeba Ma'am</span>
                  </div>
                </div>

              </div>

              {/* Floating badge bottom right */}
              <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white rounded-2xl p-3.5 shadow-xl border border-blue-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-blue-950 flex items-center justify-center font-bold font-serif text-base">
                  100%
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Dedicated Attention</p>
                  <p className="text-[10px] text-amber-300">Personalized Learning Plans</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
