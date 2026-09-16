import React, { useState } from 'react';
import { Sparkles, Menu, X, ShieldCheck, Award } from 'lucide-react';

interface NavbarProps {
  onSelectPlan: (planId: 'bronze' | 'prata' | 'ouro') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPlan }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-[37px] z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6 text-slate-950" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="text-[10px] tracking-widest uppercase font-bold text-amber-400 flex items-center gap-1.5">
              <span>Mentoria Oficial</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Inteligência Artificial</span>
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-baseline gap-1 font-display">
              PROFESSOR <span className="text-amber-400">IA</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('beneficios')} 
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollTo('simulador')} 
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Simulador IA</span>
            <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
              Teste
            </span>
          </button>
          <button 
            onClick={() => scrollTo('modulos')} 
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Módulos
          </button>
          <button 
            onClick={() => scrollTo('bonus')} 
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Bônus
          </button>
          <button 
            onClick={() => scrollTo('depoimentos')} 
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollTo('faq')} 
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('planos')}
            className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-xl animate-pulse-subtle"></span>
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[11px] bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all group-hover:scale-[0.99]">
              <Award className="w-4 h-4 text-slate-950" />
              <span>Garantir Vaga</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => scrollTo('planos')}
            className="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg"
          >
            Planos
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <button 
            onClick={() => scrollTo('beneficios')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Por que fazer a mentoria?
          </button>
          <button 
            onClick={() => scrollTo('simulador')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium flex items-center justify-between"
          >
            <span>Simulador de Prompts Pedagógicos</span>
            <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">Novo</span>
          </button>
          <button 
            onClick={() => scrollTo('modulos')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Grade de Módulos
          </button>
          <button 
            onClick={() => scrollTo('bonus')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Bônus Exclusivos
          </button>
          <button 
            onClick={() => scrollTo('planos')} 
            className="block w-full text-left py-2 text-amber-400 font-bold"
          >
            Ver Pacotes (Bronze, Prata, Ouro)
          </button>
          <button 
            onClick={() => scrollTo('depoimentos')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Depoimentos de Professores
          </button>
          <button 
            onClick={() => scrollTo('faq')} 
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Perguntas Frequentes
          </button>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => scrollTo('planos')}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-center shadow-lg shadow-amber-500/20"
            >
              Quero Me Inscrever Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
