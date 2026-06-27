import React from 'react';
import { ShieldCheck, Users, Sparkles, Target, FileText, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, Feature } from '../data/content';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-900" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-700" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-800" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-rose-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The Deeba Ma'am Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Why Choose Deeba Ma'am's Classes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We prioritize genuine intellectual growth over crowd tutoring. Here is how our institute guarantees verifiable academic elevation.
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Features Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature: Feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#fcfaf6] border border-amber-200/50 hover:bg-white hover:border-blue-900/30 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.iconName)}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-blue-950 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-amber-800">
                <span>Verified Benefit</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:animate-ping" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
