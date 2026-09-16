import React from 'react';
import { Sparkles, Heart, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Strip with Motto from the flyer */}
        <div className="py-4 px-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-display text-white text-base font-bold mx-auto sm:mx-0">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>MENTORIA PROFESSOR IA</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-amber-300 uppercase tracking-widest mx-auto sm:mx-0">
            <span>MAIS TECNOLOGIA</span>
            <span>•</span>
            <span>MAIS CRIATIVIDADE</span>
            <span>•</span>
            <span>MAIS TEMPO</span>
          </div>
        </div>

        {/* Security and Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400">
          <div>
            <h4 className="font-bold text-white text-sm mb-2">Sobre a Formação</h4>
            <p className="leading-relaxed">
              A Mentoria Professor IA foi desenvolvida com a missão de capacitar educadores de todas as disciplinas a utilizarem as tecnologias de Inteligência Artificial para otimizar seu tempo de planejamento e enriquecer a aprendizagem dos seus alunos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-2">Segurança e Pagamentos</h4>
            <p className="leading-relaxed">
              Seus dados de pagamento estão protegidos por criptografia de ponta a ponta com certificados de segurança SSL de 256 bits. O acesso à área de membros é liberado imediatamente após a confirmação.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-2">Garantia e Suporte</h4>
            <p className="leading-relaxed">
              Você conta com 7 dias de garantia incondicional de reembolso e suporte humano no WhatsApp para tirar dúvidas ao longo da sua jornada de capacitação.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para educadores que transformam o Brasil. © {new Date().getFullYear()} Mentoria Professor IA. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>Contato</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
