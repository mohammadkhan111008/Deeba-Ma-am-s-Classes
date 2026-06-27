import React from 'react';
import { BookOpen, Award, GraduationCap, CheckCircle, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { COURSES, Course, GOOGLE_FORM_URL, CONTACT_INFO } from '../data/content';

export const CoursesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-300" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-300" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Academic Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-blue-950 tracking-tight">
            Courses & Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Thoughtfully structured curriculum designed to foster conceptual clarity, intellectual discipline, and outstanding exam performance across CBSE and State Board tiers.
          </p>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES.map((course: Course, index) => (
            <div
              key={course.id}
              className={`flex flex-col bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                index === 1 
                  ? 'border-amber-400 shadow-xl ring-2 ring-amber-400/20 relative' 
                  : 'border-slate-200 shadow-md'
              }`}
            >
              {/* Popular badge on center card */}
              {index === 1 && (
                <div className="bg-amber-600 text-white text-[11px] font-bold uppercase tracking-widest text-center py-1.5 shadow-sm">
                  ★ Most Popular • High School Focus
                </div>
              )}

              {/* Card Header Banner */}
              <div className="p-8 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-amber-300 rounded-full text-xs font-semibold border border-white/10">
                    {course.badge}
                  </span>
                  <div className="p-2.5 bg-white/10 rounded-xl border border-white/15">
                    {getIcon(course.iconName)}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {course.title}
                </h3>
                <p className="text-sm font-medium text-amber-200 mt-1">
                  {course.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-8 bg-white">
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {course.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5 flex items-center gap-1.5">
                      <span>Curriculum Highlights:</span>
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {course.subjects.map((subject, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action linking to Google Form */}
                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md group ${
                      index === 1
                        ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
                        : 'bg-blue-900 hover:bg-blue-800 text-white shadow-blue-900/15'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    CBSE & State Board Curriculum
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white">Unsure which batch suits your child?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Speak with Deeba Ma'am directly on WhatsApp for complimentary academic guidance.</p>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-sm shadow transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Request Counseling</span>
          </a>
        </div>

      </div>
    </section>
  );
};
