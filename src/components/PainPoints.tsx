import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap, Coffee, Clock, Heart } from 'lucide-react';

interface PainPointsProps {
  onScrollToPricing: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onScrollToPricing }) => {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span>A Realidade Docente</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Você se reconhece nessa rotina exaustiva?
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg">
            Ser professor é uma das profissões mais nobres do mundo, mas o excesso de burocracia e planejamento consome a sua energia e rouba o seu descanso.
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Card: Sem a Mentoria (A rotina exaustiva) */}
          <div className="rounded-2xl bg-slate-900/80 border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                    ✕
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Sua rotina hoje (Sem IA estruturada)
                  </h3>
                </div>
                <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md">
                  Exaustiva
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fins de semana sacrificados:</strong> Horas sentado na frente da tela digitando avaliações, gabaritos e planos de aula sem descanso.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bloqueio criativo constante:</strong> Dificuldade em bolar dinâmicas inovadoras que prendam a atenção de alunos hiperconectados.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Insegurança com a tecnologia:</strong> Medo de ficar obsoleto ou receber respostas genéricas e 'robóticas' do ChatGPT.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sobrecarga e cansaço mental:</strong> Pouco tempo para você, para sua família e para o que realmente importa: a sua saúde.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-500 italic">
              Resultado: Sentimento de esgotamento e desmotivação ao final de cada bimestre.
            </div>
          </div>

          {/* Card: Com a Mentoria (A rotina transformada) */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-amber-950/20 border-2 border-amber-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-amber-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-300 font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Sua rotina com o Professor IA
                  </h3>
                </div>
                <span className="text-xs font-semibold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-md">
                  Leve & Produtiva
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Planejamento veloz:</strong> Crie provas bimestrais, gabaritos comentados e sequências didáticas em minutos com prompts prontos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Aulas dinâmicas e contextualizadas:</strong> Jogos educativos, situações-problema e materiais visuais no Canva que encantam alunos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Adaptação rápida para turmas diversas:</strong> Ajuste o nível das atividades para alunos com dificuldades em poucos cliques.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fins de semana e noites 100% livres:</strong> Deixe a IA trabalhar na parte burocrática enquanto você curte sua vida pessoal.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/30 text-xs text-amber-300/80 font-medium">
              Resultado: Mais tempo para ensinar com brilho nos olhos e muito mais tempo para sua família. ❤️
            </div>
          </div>

        </div>

        {/* Impact Callout Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg">
          <p className="text-xl sm:text-2xl font-bold text-white font-display">
            "A Inteligência Artificial não vai substituir os professores. Mas os professores que dominam a IA certamente vão liderar o futuro da educação."
          </p>
          <div className="pt-2">
            <button
              onClick={onScrollToPricing}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Quero Transformar Minha Rotina Agora</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
