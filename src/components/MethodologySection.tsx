import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/content';

export const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Academic Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Our Teaching Methodology
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A proven 6-step cycle that systematically bridges conceptual understanding with triumphant board examination outcomes.
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-amber-300 to-blue-100 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {METHODOLOGY_STEPS.map((item, index) => (
              <div 
                key={index}
                className="bg-[#fcfaf6] rounded-3xl p-8 border border-amber-200/60 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-300 font-serif font-bold text-xl flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    {index < 5 && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-900 transition-colors flex items-center gap-1">
                        <span>Phase {index + 1}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Core Tenet
                  </span>
                  {index < 5 ? (
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <span className="text-amber-700 font-bold">★ Mastery</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Quote Footer */}
        <div className="mt-16 text-center bg-blue-50/60 rounded-2xl p-6 max-w-2xl mx-auto border border-blue-100">
          <p className="text-xs sm:text-sm font-medium text-blue-950 italic">
            "Consistency in practice eliminates exam anxiety."
          </p>
        </div>

      </div>
    </section>
  );
};
