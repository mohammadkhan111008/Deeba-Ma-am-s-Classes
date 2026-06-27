import React from 'react';
import { BookOpen, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block leading-none">
                  Deeba Ma'am's
                </span>
                <span className="text-xs font-sans tracking-widest text-amber-400 font-semibold uppercase block mt-1">
                  Classes • Private Tutoring
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Empowering students through quality education and personalized guidance. We build firm conceptual roots for lifelong achievement.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <p className="mt-1">📞 {CONTACT_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Deeba Ma'am
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-amber-400 transition-colors">
                  Courses & Programs
                </a>
              </li>
              <li>
                <a href="#webinars" className="hover:text-amber-400 transition-colors">
                  Revision Webinars
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-amber-400 transition-colors">
                  Teaching Methodology
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Programs Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tutoring Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center justify-between">
                <span>Classes 1–7</span>
                <span className="text-xs bg-slate-900 px-2 py-0.5 rounded text-slate-300">All Subjects</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Classes 8–10</span>
                <span className="text-xs bg-slate-900 px-2 py-0.5 rounded text-amber-400 font-medium">Advanced English</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Classes 11–12</span>
                <span className="text-xs bg-slate-900 px-2 py-0.5 rounded text-amber-400 font-medium">Adv. English Spec.</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Exam Seasons</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">3-Hour Webinars</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Deeba Ma'am's Classes. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Academic Excellence
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
