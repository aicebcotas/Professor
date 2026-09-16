import React from 'react';
import { COURSE_BONUSES } from '../data/packagesData';
import { 
  Gift, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Crown
} from 'lucide-react';

interface BonusesSectionProps {
  onScrollToPricing: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Aceleradores de Produtividade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Bônus Exclusivos inclusos na sua inscrição
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Materiais prontos para você copiar, editar e usar nas suas aulas amanhã mesmo. Economize meses de trabalho individual.
          </p>
        </div>

        {/* Bonus Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {COURSE_BONUSES.map((bonus) => {
            const isOuroOnly = bonus.tag.includes('Ouro');
            
            return (
              <div
                key={bonus.id}
                className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                  isOuroOnly
                    ? 'bg-gradient-to-b from-slate-900 to-amber-950/20 border-amber-500/50 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md">
                      BÔNUS #{bonus.id}
                    </span>

                    <span className="text-xs font-bold text-slate-400 line-through">
                      {bonus.value}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-1">
                      {bonus.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Incluso gratuitamente
                  </span>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isOuroOnly
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {bonus.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Highlight Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Award className="w-8 h-8 text-amber-400" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Certificação Docente
              </span>
              <h3 className="text-xl font-bold text-white">
                Certificado Oficial de Conclusão com Carga Horária
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Válido em todo o território nacional para comprovação de horas complementares e progressão no plano de carreira docente (disponível nos pacotes Prata e Ouro).
              </p>
            </div>
          </div>

          <button
            onClick={onScrollToPricing}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-md cursor-pointer"
          >
            Quero Meus Bônus
          </button>
        </div>

      </div>
    </section>
  );
};
