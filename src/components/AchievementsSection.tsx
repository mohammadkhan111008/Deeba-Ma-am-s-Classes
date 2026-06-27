import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Smile, Trophy, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';

interface CounterProps {
  endValue: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ endValue, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={ref} className="font-serif font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const AchievementsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-8 h-8 text-amber-300" />;
      case 1:
        return <Users className="w-8 h-8 text-blue-300" />;
      case 2:
        return <Smile className="w-8 h-8 text-emerald-300" />;
      case 3:
      default:
        return <Trophy className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white border-y border-amber-500/20 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verifiable Institute Records</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Institute Achievements
          </h2>
        </div>

        {/* 4 Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-4 shadow-xl"
            >
              <div className="p-3 bg-white/10 rounded-2xl border border-white/15">
                {getIcon(idx)}
              </div>

              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                <AnimatedNumber endValue={item.value} suffix={item.suffix} />
              </div>

              <div>
                <p className="text-base font-bold text-amber-200">
                  {idx === 3 ? "Countless Success Stories" : item.label}
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 italic font-serif">
            "Results measured by academic marks and enduring student character."
          </p>
        </div>

      </div>
    </section>
  );
};
