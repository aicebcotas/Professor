import React from 'react';
import { ShieldCheck, Lock, RefreshCw, HeartHandshake, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onScrollToPricing: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Guarantee Badge Stamp Icon */}
            <div className="md:col-span-4 text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 p-1 shadow-2xl shadow-amber-500/30 animate-pulse-subtle">
                  <div className="w-full h-full rounded-full bg-slate-950 border border-amber-400/40 flex flex-col items-center justify-center p-2 text-center">
                    <ShieldCheck className="w-8 h-8 text-amber-400 mb-1" />
                    <span className="text-2xl font-black text-white font-display leading-none">
                      7 DIAS
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 mt-0.5">
                      Garantia Total
                    </span>
                    <span className="text-[8px] text-slate-400">
                      Risco 100% Zero
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation Copy */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Seu Investimento 100% Protegido
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Garantia Incondicional de Satisfação
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Temos tanta certeza de que o método <strong>Professor IA</strong> vai revolucionar a sua rotina e devolver o seu tempo livre que assumimos todo o risco com você.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Entre na plataforma, assista às aulas, baixe o pacote de prompts e modelos de provas. Se dentro de 7 dias você achar que o treinamento não valeu cada centavo, basta nos enviar um e-mail ou uma mensagem no WhatsApp. Nós devolveremos <strong>100% do valor pago</strong>, sem burocracia, sem perguntas e sem ressentimentos.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Compra 100% Criptografada</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span>Reembolso Rápido e Sem Fricção</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onScrollToPricing}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <span>Experimentar Sem Riscos Por 7 Dias</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
