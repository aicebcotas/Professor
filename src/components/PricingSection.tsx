import React, { useState } from 'react';
import { PLANS } from '../data/packagesData';
import { Plan, PlanId } from '../types';
import { 
  Check, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  MessageSquare, 
  Gift, 
  Award,
  Zap,
  Tag
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: PlanId) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'installments' | 'cash'>('cash');

  return (
    <section id="planos" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 relative">
      {/* Background illumination for pricing */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Condição Especial de Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Escolha o pacote perfeito para a sua rotina
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Investimento único com acesso imediato. Recupere o seu tempo de descanso e transforme suas aulas para sempre.
          </p>

          {/* Payment Toggle Switch */}
          <div className="pt-2 flex items-center justify-center">
            <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setBillingCycle('cash')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  billingCycle === 'cash'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                À Vista no PIX ou Cartão
              </button>

              <button
                onClick={() => setBillingCycle('installments')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'installments'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Até 12x no Cartão</span>
                <span className="text-[10px] bg-amber-950/40 text-amber-300 px-1.5 py-0.5 rounded border border-amber-600/30">
                  Suave
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const isGold = plan.id === 'ouro';
            const isSilver = plan.id === 'prata';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                  isGold
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-400 shadow-2xl shadow-amber-500/20 lg:-translate-y-4'
                    : isSilver
                    ? 'bg-slate-900/90 border border-slate-700 hover:border-slate-500 shadow-xl'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-amber-700/50 shadow-lg'
                } p-6 sm:p-8`}
              >
                {/* Gold Highlight Top Ribbon */}
                {isGold && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-yellow-200">
                    <Crown className="w-3.5 h-3.5 fill-slate-950" />
                    <span>MAIS ESCOLHIDO & COMPLETO</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isGold ? 'Formação Completa' : isSilver ? 'Equilíbrio Ideal' : 'Ponto de Partida'}
                    </span>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight font-display">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-amber-300 font-medium mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">
                    {plan.targetAudience}
                  </p>

                  {/* Access Duration Pill */}
                  <div className="mt-4 flex items-center gap-2 bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold text-white">{plan.accessDuration}</span>
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    {plan.oldPrice && (
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <span>De:</span>
                        <span className="line-through text-red-400 font-medium">
                          R$ {plan.oldPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          R$ 100 OFF
                        </span>
                      </div>
                    )}

                    {billingCycle === 'cash' ? (
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 uppercase tracking-wider block">
                          Valor à vista
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-amber-400">R$</span>
                          <span className="text-4xl sm:text-5xl font-black text-white font-display">
                            {plan.price.toFixed(0)}
                          </span>
                          <span className="text-lg font-bold text-slate-300">,00</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          ou em até 12x de R$ {plan.installments.value.toFixed(2).replace('.', ',')} no cartão
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 uppercase tracking-wider block">
                          Em até 12x de
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-amber-400">12x de R$</span>
                          <span className="text-4xl sm:text-5xl font-black text-white font-display">
                            {plan.installments.value.toFixed(2).split('.')[0]}
                          </span>
                          <span className="text-lg font-bold text-slate-300">
                            ,{plan.installments.value.toFixed(2).split('.')[1]}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          ou R$ {plan.price.toFixed(2).replace('.', ',')} à vista
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Primary Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className={`w-full py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer ${
                        isGold
                          ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-500/25 hover:scale-[1.02]'
                          : isSilver
                          ? 'bg-slate-100 hover:bg-white text-slate-950'
                          : 'bg-amber-600 hover:bg-amber-500 text-slate-950'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Módulos inclusos list */}
                  <div className="mt-8 space-y-3">
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block">
                      Conteúdo do Pacote:
                    </span>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.modulesIncluded.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-200">{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bônus Inclusos */}
                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5" />
                      Bônus Inclusos:
                    </span>

                    <ul className="space-y-2 text-xs text-slate-300">
                      {plan.bonuses.map((bonus, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certificate check */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs">
                    {plan.hasCertificate ? (
                      <div className="flex items-center gap-2 text-amber-300 font-semibold">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{plan.certificateDetails}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-500">
                        <span className="w-4 h-4 text-center">✕</span>
                        <span>Sem certificado (incluso no Prata e Ouro)</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* Bottom Trust Stamp on card */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Garantia 7 dias
                  </span>
                  <span>Acesso Imediato</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Payment guarantee strip under cards */}
        <div className="mt-14 max-w-4xl mx-auto text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-amber-400" />
              <span>PIX (liberação instantânea) ou até 12x no Cartão</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ambiente 100% Criptografado e Seguro</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Garantia de 7 dias ou seu dinheiro de volta</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
