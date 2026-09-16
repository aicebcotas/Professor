import React from 'react';
import { TESTIMONIALS } from '../data/packagesData';
import { Star, MessageCircle, Quote, Clock, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Voz de Quem Já Aplica na Prática</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            O que dizem os professores que transformaram suas rotinas
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Mais de 1.450 educadores de escolas públicas e particulares de todo o Brasil já economizam tempo e encantam seus alunos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-amber-500/30 transition-all shadow-xl relative"
            >
              <div className="space-y-4">
                
                {/* Rating and Hours Saved Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.hoursSaved}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-sm sm:text-base font-bold text-amber-300 italic">
                  "{item.highlight}"
                </p>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>

              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-900 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • <span className="text-slate-500">{item.subject}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
