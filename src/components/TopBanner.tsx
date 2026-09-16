import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 }; // reset loop for urgency
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-medium text-xs sm:text-sm py-2.5 px-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="uppercase tracking-wider font-extrabold text-amber-950 bg-amber-300/80 px-2 py-0.5 rounded text-[11px]">
            Turma Aberta
          </span>
          <span className="hidden sm:inline">Desconto de lançamento nos pacotes + Bônus Exclusivos liberados!</span>
          <span className="sm:hidden">Desconto nos pacotes liberado!</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/15 px-2.5 py-1 rounded-md text-slate-900 font-mono font-bold text-xs">
            <Clock className="w-3.5 h-3.5 text-slate-900" />
            <span>
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={scrollToPricing}
            className="inline-flex items-center gap-1 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold px-3 py-1 rounded-md text-xs transition-colors shadow-sm cursor-pointer"
          >
            <span>Ver Planos</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
