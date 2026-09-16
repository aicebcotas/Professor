import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/packagesData';
import { PlanId } from '../types';
import { 
  CheckCircle2, 
  Brain, 
  FileCheck, 
  PenTool, 
  Calendar, 
  FolderKanban, 
  Palette,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ModulesSectionProps {
  onScrollToPricing: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-amber-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-amber-400" />,
  PenTool: <PenTool className="w-5 h-5 text-amber-400" />,
  Calendar: <Calendar className="w-5 h-5 text-amber-400" />,
  FolderKanban: <FolderKanban className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-amber-400" />,
};

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onScrollToPricing }) => {
  const [filterPlan, setFilterPlan] = useState<'all' | PlanId>('all');
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const filteredModules = COURSE_MODULES.filter(m => {
    if (filterPlan === 'all') return true;
    return m.includedIn.includes(filterPlan);
  });

  const toggleExpand = (id: number) => {
    setExpandedModule(prev => (prev === id ? null : id));
  };

  return (
    <section id="modulos" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Estrutura Pedagógica Passo a Passo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            O que você vai dominar em cada módulo
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Um currículo direto ao ponto, criado para gerar resultados imediatos já nas primeiras 24 horas após a sua inscrição.
          </p>
        </div>

        {/* Plan Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-slate-400 mr-2">Visualizar módulos por plano:</span>
          
          <button
            onClick={() => setFilterPlan('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterPlan === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Todos os Módulos (6)
          </button>

          <button
            onClick={() => setFilterPlan('ouro')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filterPlan === 'ouro'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-400 hover:text-amber-300 border border-slate-800'
            }`}
          >
            <span>👑 Pacote Ouro (Completo)</span>
          </button>

          <button
            onClick={() => setFilterPlan('prata')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterPlan === 'prata'
                ? 'bg-slate-300 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Pacote Prata (6 Módulos)
          </button>

          <button
            onClick={() => setFilterPlan('bronze')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterPlan === 'bronze'
                ? 'bg-amber-700 text-amber-100'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Pacote Bronze (4 Módulos)
          </button>
        </div>

        {/* Modules Grid / Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredModules.map((item) => {
            const isExpanded = expandedModule === item.id;
            
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-slate-900/90 border-amber-500/50 shadow-xl shadow-amber-500/5'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 cursor-pointer select-none space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                          {item.badge}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <button 
                      className="p-2 text-slate-400 hover:text-white transition-transform"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}
                      aria-label="Expandir detalhes"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400">
                    {item.subtitle}
                  </p>

                  {/* Badges showing which plans include this */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {item.includedIn.includes('bronze') && (
                      <span className="text-[10px] font-semibold bg-amber-900/40 text-amber-300 border border-amber-800/60 px-2 py-0.5 rounded">
                        Bronze
                      </span>
                    )}
                    {item.includedIn.includes('prata') && (
                      <span className="text-[10px] font-semibold bg-slate-700/50 text-slate-200 border border-slate-600/60 px-2 py-0.5 rounded">
                        Prata
                      </span>
                    )}
                    {item.includedIn.includes('ouro') && (
                      <span className="text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded">
                        Ouro
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 sm:px-6 border-t border-slate-800/80 space-y-4 bg-slate-950/40">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        O que você vai aprender na prática:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {item.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-200">
                      <strong className="text-amber-400 font-bold block mb-1">
                        🎯 Resultado Prático Imediato:
                      </strong>
                      {item.practicalOutcome}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onScrollToPricing}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <span>Escolha Seu Pacote e Comece Hoje Mesmo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
