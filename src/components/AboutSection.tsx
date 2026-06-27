import React from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, CheckCircle2, GraduationCap, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const profileHighlights = [
    {
      icon: <Award className="w-5 h-5 text-amber-600" />,
      title: "Years of Experience",
      value: "10+ Years",
      description: "Extensive classroom and private mentoring expertise across CBSE, ICSE, and State boards."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-700" />,
      title: "Subjects Taught",
      value: "All Subjects (1-7) & Adv. English (8-12)",
      description: "Specialized mastery in English grammar, creative writing, and foundational primary subjects."
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: "Student-Centered Approach",
      value: "Personalized Care",
      description: "Small batch mentoring tailored to each child's individual learning speed and emotional comfort."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Exam Preparation Expertise",
      value: "Board Exam Mastery",
      description: "Rigorous practice of board question formats, time management, and answer presentation skills."
    }
  ];

  const keyPoints = [
    "Over 10+ years of dedicated teaching experience guiding students of diverse aptitudes",
    "Passionate educator deeply committed to helping every student unlock academic success",
    "Strong expertise in English language, formal literature analysis, and spoken communication",
    "Personalized attention and customized worksheets provided for every single learner",
    "Laser-sharp focus on concept clarity, confidence building, and board exam preparation"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Meet Your Mentor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            About Deeba Ma'am
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Profile Card Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#fcfaf6] rounded-3xl p-8 sm:p-10 border border-amber-200/60 shadow-xl relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-100/60 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-200/80">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 text-amber-300 flex items-center justify-center font-serif font-bold text-2xl shadow-lg shadow-blue-900/20">
                    DM
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900">Deeba Ma'am</h3>
                    <p className="text-xs font-medium text-amber-800">Founder & Lead Academic Coach</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-semibold">
                      Verified Educator
                    </span>
                  </div>
                </div>

                {/* Profile Highlights Grid */}
                <div className="space-y-5">
                  {profileHighlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow transition-shadow">
                      <div className="p-2 bg-slate-50 rounded-xl mt-0.5 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {item.title}
                        </p>
                        <p className="text-sm font-bold text-slate-900 mt-0.5">
                          {item.value}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Right Narrative & Philosophy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-blue-950 leading-snug">
                "Education is not merely rote memorization—it is nurturing the confidence to articulate one's brightest thoughts."
              </h3>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Welcome to <strong>Deeba Ma'am's Classes</strong>. For over a decade, Deeba Ma'am has stood as a pillar of academic mentorship, cultivating an enriching institute where students transition from academic hesitation to standing tall at the top of their class rankings.
              </p>
              <p className="text-base text-slate-600 mt-3 leading-relaxed">
                Recognizing that every child possesses an entirely unique learning rhythm, Ma'am combines rigorous syllabus discipline with compassionate individual encouragement. Whether guiding young learners through primary numeracy or sharpening senior secondary essays for board examinations, her teaching methodology centers on profound concept clarity.
              </p>
            </div>

            {/* Checklist of core tenets */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-3.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Core Educator Commitment
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom personal assurance */}
            <div className="p-5 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-8 h-8 text-amber-300 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">Direct Parent-Teacher Synergy</p>
                  <p className="text-xs text-slate-200">We maintain open lines of communication for regular progress check-ins.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
