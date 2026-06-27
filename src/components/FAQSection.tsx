import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, FAQItem, CONTACT_INFO } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200/80">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear, transparent answers for discerning parents regarding batch structure, subject eligibility, and academic coaching.
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq: FAQItem, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#fcfaf6] border-amber-300 shadow-md ring-1 ring-amber-300/30' 
                    : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-slate-900 outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="group-hover:text-blue-900 transition-colors flex items-center gap-3">
                    <span className="text-xs font-sans font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-lg">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-amber-600 text-white border-amber-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-200/40 animate-in fade-in duration-200">
                    <div className="pl-9">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium">Have a specific question not listed here?</p>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask Deeba Ma'am on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
