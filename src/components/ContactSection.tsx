import React from 'react';
import { Phone, MessageSquare, Clock, Send, Quote, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, GOOGLE_FORM_URL } from '../data/content';

export const ContactSection: React.FC = () => {
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-blue-900" />,
      label: "Call Directly",
      value: CONTACT_INFO.phone,
      sub: "Available during coaching hours for parents",
      href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />,
      label: "WhatsApp Number",
      value: CONTACT_INFO.whatsapp,
      sub: "Fast parent chat response channel",
      href: CONTACT_INFO.whatsappUrl
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fcfaf6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
            <Send className="w-3.5 h-3.5" />
            <span>Admissions & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-blue-950 tracking-tight">
            Get in Touch with Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions regarding batch availability or subject focus? Reach out directly via phone or WhatsApp.
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Contact Details & Location Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Mobile & WhatsApp Channels */}
          <div className="space-y-4 flex flex-col justify-between">
            <h3 className="text-xl font-serif font-bold text-slate-900 px-1">
              Direct Contact Channels
            </h3>
            
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {contactCards.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-900/40 transition-all group"
                >
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {c.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-blue-900 transition-colors font-mono">
                      {c.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-sans">
                      {c.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Tutoring Timings */}
          <div className="space-y-4 flex flex-col justify-between">
            <h3 className="text-xl font-serif font-bold text-slate-900 px-1">
              Class Timings & Batches
            </h3>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white space-y-6 shadow-xl flex-1 flex flex-col justify-center border border-blue-900/40">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-400/30 text-blue-300 shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-serif">Tutoring Batches</h4>
                  <p className="text-sm text-amber-200 mt-1 font-medium leading-relaxed">
                    {CONTACT_INFO.timings}
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                    Batch schedules are personalized around school timings to ensure students remain energetic and attentive during private sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clear Call-To-Action for Admissions Banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-amber-700 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-200 font-bold text-xs uppercase tracking-widest border border-white/10">
              Admissions CTA • Academic Year 2026–27
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Ready to Secure Your Child's Academic Excellence?
            </h3>
            <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
              Batch slots are purposefully restricted to maintain small student-teacher ratios. Enquire today for prompt admission placement.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 font-bold rounded-xl shadow-xl hover:bg-amber-50 transition-all text-base flex items-center justify-center gap-2 group"
              >
                <span>Enquire for Admissions Now</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-xl transition-all text-base flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* At the end: "A Message from Deeba Ma'am" */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-amber-300 shadow-xl text-center relative overflow-hidden">
          <Quote className="w-12 h-12 text-amber-500 mx-auto mb-6 opacity-80" />
          
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-3">
            A Message from Deeba Ma'am
          </h3>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-snug tracking-tight">
            "Every child has the potential to succeed when guided with patience, encouragement, and the right learning approach."
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-300 font-serif font-bold flex items-center justify-center text-lg shadow">
              DM
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 font-serif">Deeba Ma'am</p>
              <p className="text-xs text-slate-500">Founder & Passionate Educator</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
