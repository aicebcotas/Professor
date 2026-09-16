import React, { useState } from 'react';
import { SIMULATOR_PRESETS } from '../data/packagesData';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  ArrowRight,
  Lightbulb,
  FileSpreadsheet
} from 'lucide-react';

interface AiPromptSimulatorProps {
  onScrollToPricing: () => void;
}

export const AiPromptSimulator: React.FC<AiPromptSimulatorProps> = ({ onScrollToPricing }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = SIMULATOR_PRESETS[selectedIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.promptExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-slate-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador Interativo em Tempo Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Veja a mágica acontecer na prática
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Um dos grandes segredos ensinados na mentoria é a <strong className="text-amber-400">Engenharia Pedagógica de Prompts</strong>. Veja abaixo exemplos de materiais reais gerados em segundos:
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {SIMULATOR_PRESETS.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                selectedIndex === index
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{item.subject}</span>
              <span className="opacity-70 text-[11px] hidden sm:inline">({item.grade.split('-')[0]})</span>
            </button>
          ))}
        </div>

        {/* Interactive Showcase Box */}
        <div className="max-w-5xl mx-auto bg-slate-950 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Bar of the Simulator */}
          <div className="bg-slate-900/90 border-b border-slate-800 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="h-4 w-px bg-slate-800 ml-1"></div>
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                {current.subject} • {current.grade}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{current.timeSaved}</span>
            </div>
          </div>

          {/* Grid Layout: Prompt vs Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left: The Prompt given to the AI */}
            <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-950/90 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    O Comando Estruturado (Prompt)
                  </span>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer bg-slate-900 border border-slate-800 px-2.5 py-1 rounded"
                    title="Copiar prompt de exemplo"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 leading-relaxed max-h-64 overflow-y-auto">
                  {current.promptExample}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">💡 Por que esse comando funciona?</p>
                <p>Ele define persona pedagógica, público-alvo, alinhamento curricular, distratores com justificativa e formato de saída pronto para imprimir.</p>
              </div>
            </div>

            {/* Right: The Instant Educational Output */}
            <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-950 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                  {current.resultTitle}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded">
                  Gerado em 35s
                </span>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 sm:p-5 text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line max-h-96 overflow-y-auto selection:bg-amber-500/30">
                {current.resultOutput}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>Totalmente pronto para colar no Word, Google Docs ou Canva.</span>
                <span className="text-amber-400 font-semibold">Sem respostas genéricas ou erros factuais.</span>
              </div>
            </div>

          </div>

          {/* Bottom Banner inside Simulator */}
          <div className="bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-amber-950/40 border-t border-amber-500/30 p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-white">
                Gostou? Você terá acesso a mais de 100 Prompts Prontos na mentoria!
              </p>
              <p className="text-xs text-slate-300">
                Cobrem todas as matérias e necessidades da rotina escolar diária.
              </p>
            </div>

            <button
              onClick={onScrollToPricing}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Quero Acessar os 100 Prompts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
