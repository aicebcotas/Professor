import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Star, 
  Heart, 
  Laptop, 
  Compass, 
  MessageSquare,
  Users
} from 'lucide-react';
import teacherHeroImg from '../assets/images/teacher_hero.jpg';

interface HeroProps {
  onScrollToPricing: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPricing, onScrollToSimulator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>A IA é uma aliada do professor!</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-display">
              Mais tempo para ensinar,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                menos tempo para planejar!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Aprenda a usar a Inteligência Artificial para criar 
              <strong className="text-white font-semibold"> provas completas com gabarito</strong>, 
              <strong className="text-white font-semibold"> atividades adaptadas</strong>, 
              <strong className="text-white font-semibold"> trabalhos interdisciplinares</strong> e 
              <strong className="text-white font-semibold"> planos de aula BNCC</strong> em minutos. 
              Tudo de forma prática, simples e direta — mesmo que você não tenha qualquer experiência prévia com tecnologia.
            </p>

            {/* Key Benefit Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">100% Prático</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">-80% Tempo</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200">
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Suporte Zap</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200">
                <Laptop className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Acesso Direto</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToPricing}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-base sm:text-lg transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUERO GARANTIR MINHA VAGA</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToSimulator}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Demonstração de Prompt</span>
              </button>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-200">4.9 / 5.0</span>
                <span>(Mais de 1.450 educadores)</span>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Garantia Incondicional de 7 Dias</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Teacher Card with Flyer-inspired aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Golden Outer Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-1000"></div>

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-slate-900 border-2 border-amber-500/40 p-3 sm:p-4 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Image Wrap */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800">
                  <img
                    src={teacherHeroImg}
                    alt="Professora utilizando tecnologia e Inteligência Artificial na preparação de aulas"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                  {/* Top-Right Badge: "Educação Transforma Vidas" */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 rounded-full px-3 py-1 text-[11px] font-bold text-amber-300 flex items-center gap-1 shadow-lg">
                    <span>Educação Transforma Vidas</span>
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                  </div>

                  {/* Bottom overlay inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-semibold">Mentoria Professor IA</span>
                    </div>

                    <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2 py-1 rounded border border-amber-600/50">
                      Turma 2026
                    </span>
                  </div>
                </div>

                {/* Floating Metric Card 1 (Bottom Left) */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                      Fins de semana livres
                    </span>
                    <span className="text-xl font-extrabold text-white font-display">
                      +10 Horas
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Economizadas toda semana
                    </span>
                  </div>

                  <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-3 flex flex-col justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                      Provas com Gabarito
                    </span>
                    <span className="text-xl font-extrabold text-white font-display">
                      Em 5 Minutos
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Com níveis de dificuldade
                    </span>
                  </div>
                </div>

                {/* Motivational Quote Footnote */}
                <div className="mt-3 py-2 px-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
                  <p className="text-xs font-medium text-amber-200 italic">
                    "Professores transformam o mundo! E a IA existe para devolver o tempo que você merece." ❤️
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
