import React from 'react';
import { Check, X, Crown, ArrowRight } from 'lucide-react';
import { PlanId } from '../types';

interface ComparisonTableProps {
  onSelectPlan: (planId: PlanId) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectPlan }) => {
  const rows = [
    { feature: 'Tempo de Acesso à Plataforma', bronze: '3 Meses', prata: '6 Meses', ouro: 'Completo + Atualizações' },
    { feature: 'Módulo 1: Fundamentos da IA', bronze: true, prata: true, ouro: true },
    { feature: 'Módulo 2: Provas e Avaliações com Gabarito', bronze: 'Básico', prata: 'Básico', ouro: 'Avançado + Rubricas' },
    { feature: 'Módulo 3: Atividades e Situações-Problema', bronze: 'Básico', prata: 'Básico', ouro: 'Completo + Diferenciação' },
    { feature: 'Módulo 4: Planejamento de Aulas e BNCC', bronze: 'Básico', prata: 'Básico', ouro: 'Sequências Didáticas BNCC' },
    { feature: 'Módulo 5: Trabalhos e Projetos Interdisciplinares', bronze: false, prata: false, ouro: true },
    { feature: 'Módulo 6: Material Visual (Canva + IA)', bronze: false, prata: true, ouro: 'Completo (jogos, slides)' },
    { feature: '100+ Prompts Prontos por Disciplina', bronze: false, prata: '100 Prompts', ouro: '100+ Prompts Categorizados' },
    { feature: 'Modelos de Provas Editáveis (Word/PDF)', bronze: true, prata: true, ouro: true },
    { feature: 'Banco de Atividades com Gabarito', bronze: true, prata: true, ouro: true },
    { feature: 'Materiais Editáveis no Canva', bronze: true, prata: true, ouro: true },
    { feature: 'Comunidade Exclusiva de Educadores', bronze: true, prata: true, ouro: 'Comunidade VIP' },
    { feature: 'Guia de Ferramentas de IA Gratuitas', bronze: false, prata: false, ouro: true },
    { feature: 'Grupo de Suporte no WhatsApp', bronze: 'Grupo Geral', prata: 'Suporte Ativo', ouro: 'Suporte Exclusivo Prioritário' },
    { feature: 'Certificado Oficial com Carga Horária', bronze: false, prata: true, ouro: true },
    { feature: 'Investimento à Vista', bronze: 'R$ 97,00', prata: 'R$ 177,00', ouro: 'R$ 297,00 (De R$ 397)' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400">
            Transparência Total
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Comparativo Detalhado dos Pacotes
          </h2>
          <p className="text-slate-400 text-sm">
            Confira tudo o que está incluso em cada plano e faça a escolha mais inteligente para você.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                <th className="p-4 sm:p-5 font-bold text-white w-1/3">Recursos & Benefícios</th>
                <th className="p-4 sm:p-5 font-bold text-amber-400 text-center w-1/5">
                  Bronze
                  <div className="text-[11px] font-normal text-slate-400 mt-0.5">R$ 97</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-slate-200 text-center w-1/5">
                  Prata
                  <div className="text-[11px] font-normal text-slate-400 mt-0.5">R$ 177</div>
                </th>
                <th className="p-4 sm:p-5 font-bold text-amber-300 bg-amber-500/10 text-center w-1/4 border-x border-amber-500/30">
                  <div className="inline-flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Ouro (Mais Completo)</span>
                  </div>
                  <div className="text-[11px] font-bold text-amber-300 mt-0.5">R$ 297</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-850/40 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-slate-200">
                    {row.feature}
                  </td>

                  {/* Bronze */}
                  <td className="p-4 sm:p-5 text-center">
                    {typeof row.bronze === 'boolean' ? (
                      row.bronze ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-slate-300">{row.bronze}</span>
                    )}
                  </td>

                  {/* Prata */}
                  <td className="p-4 sm:p-5 text-center">
                    {typeof row.prata === 'boolean' ? (
                      row.prata ? (
                        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-slate-200">{row.prata}</span>
                    )}
                  </td>

                  {/* Ouro */}
                  <td className="p-4 sm:p-5 text-center bg-amber-500/5 border-x border-amber-500/20">
                    {typeof row.ouro === 'boolean' ? (
                      row.ouro ? (
                        <Check className="w-5 h-5 text-amber-400 font-black mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-amber-300">{row.ouro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-900 border-t border-slate-800">
                <td className="p-4 sm:p-5 font-bold text-slate-300">Ação</td>
                <td className="p-4 sm:p-5 text-center">
                  <button
                    onClick={() => onSelectPlan('bronze')}
                    className="px-3 py-2 bg-amber-700/60 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Escolher Bronze
                  </button>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <button
                    onClick={() => onSelectPlan('prata')}
                    className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Escolher Prata
                  </button>
                </td>
                <td className="p-4 sm:p-5 text-center bg-amber-500/10 border-x border-amber-500/30">
                  <button
                    onClick={() => onSelectPlan('ouro')}
                    className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-black transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    Escolher Ouro (Recomendado)
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
};
