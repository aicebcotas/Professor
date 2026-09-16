import React from 'react';
import { MessageSquareText } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Mentoria%20Professor%20IA"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all group"
      aria-label="Atendimento via WhatsApp"
    >
      <div className="relative">
        <MessageSquareText className="w-5 h-5 text-slate-950 fill-slate-950/20" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full animate-ping"></span>
      </div>
      <span className="text-xs sm:text-sm hidden sm:inline">Dúvidas? Fale no WhatsApp</span>
    </a>
  );
};
