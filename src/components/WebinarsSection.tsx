import React from 'react';
import { Sparkles, Clock, CheckCircle2, ArrowUpRight, ShieldCheck, AlertTriangle, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const WebinarsSection: React.FC = () => {
  const features = [
    "Intensive Revision",
    "Important Question Discussion",
    "Exam Strategies",
    "Doubt Solving",
    "Time Management Tips"
  ];

  return (
    <section id="webinars" className="py-20 md:py-28 bg-gradient-to-b from-[#fcfaf6] via-[#f5efe4] to-white relative overflow-hidden">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Banner Box */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl border border-amber-500/30 overflow-hidden">
          <div className="p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Institutional Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Special Exam Revision Webinars
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Comprehensive <strong className="text-amber-300 font-semibold">3-hour revision sessions</strong> conducted during examination periods to help students revise important concepts, practice key questions, and boost exam confidence.
              </p>

              {/* HIGHLIGHTED NOTE FOR HIGH END CLASSES ONLY */}
              <div className="p-5 bg-amber-500/20 border-2 border-amber-400 rounded-2xl shadow-lg flex items-start gap-3.5">
                <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide">
                    Institutional Notice • Please Read
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed font-medium">
                    This special webinar section is strictly designed for <strong className="text-white underline">high-end classes, schools, and tutoring organizations</strong> to invite Deeba Ma'am to organize guest revision workshops. It is <strong className="text-amber-300">not intended for individual parents or student registrations</strong>.
                  </p>
                </div>
              </div>

              {/* Features list pills */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Action CTA Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/20 text-center flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Organize a Webinar Batch
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Representative heads of classes or schools can submit an institutional inquiry to book dates for upcoming mid-term or board exam seasons.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={CONTACT_INFO.webinarWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-xl transition-all text-base group"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Institutional Inquiry (WhatsApp)</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  ⚡ For Class Administrators & Coordinators Only
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Conducted Live by Deeba Ma'am</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
