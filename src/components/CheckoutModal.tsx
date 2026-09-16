import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Plan, PlanId } from '../types';
import { PLANS } from '../data/packagesData';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  QrCode, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Copy, 
  Check,
  Award,
  Crown
} from 'lucide-react';

interface CheckoutModalProps {
  planId: PlanId | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ planId, onClose }) => {
  const plan = PLANS.find(p => p.id === planId) || PLANS[2]; // Default to Ouro

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [installments, setInstallments] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [copiedPix, setCopiedPix] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!planId) return null;

  const finalPrice = couponApplied 
    ? plan.price * (1 - discountPercent / 100) 
    : plan.price;

  const installmentOptions = [
    { num: 1, val: finalPrice },
    { num: 2, val: (finalPrice * 1.03) / 2 },
    { num: 3, val: (finalPrice * 1.05) / 3 },
    { num: 6, val: (finalPrice * 1.09) / 6 },
    { num: 10, val: (finalPrice * 1.15) / 10 },
    { num: 12, val: (finalPrice * 1.19) / 12 },
  ];

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'PROFESSOR10' || coupon.trim().toUpperCase() === 'DESCONTO10') {
      setCouponApplied(true);
      setDiscountPercent(10);
    } else {
      alert('Cupom inválido. Tente PROFESSOR10 para 10% de desconto!');
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136professoria-mentoria-oficial-pix-chave5204000053039865405' + finalPrice.toFixed(2));
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os campos obrigatórios para envio do seu acesso.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#d97706', '#10b981', '#ffffff']
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border-2 border-amber-500/50 rounded-3xl shadow-2xl overflow-hidden my-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400">
                Inscrição Concluída com Sucesso!
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Parabéns, Professor(a) {name.split(' ')[0]}!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Você acaba de dar um passo gigantesco para transformar sua rotina com a <strong>{plan.name}</strong>.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-3">
              <div className="font-bold text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Próximos Passos Imediatos:</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">1.</span>
                  <span>Enviamos os dados de acesso à plataforma para o seu e-mail: <strong className="text-white">{email}</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">2.</span>
                  <span>Você será adicionado ao grupo VIP de suporte no WhatsApp cadastrado (<strong className="text-white">{phone}</strong>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400">3.</span>
                  <span>Todos os bônus e modelos de prompts já estão liberados dentro da área de membros.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl cursor-pointer"
              >
                Acessar Área do Aluno Agora
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            {/* Header Strip with Selected Plan */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 p-5 sm:p-6 border-b border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Inscrição Oficial
                    </span>
                    {plan.id === 'ouro' && (
                      <span className="bg-amber-500/20 text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        RECOMENDADO
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300">{plan.tagline}</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Total a pagar:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-amber-400">R$</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-display">
                      {finalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {couponApplied && (
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      Cupom 10% Aplicado!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
              
              {/* Personal Info Fields */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  1. Seus Dados de Acesso
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria dos Santos Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      WhatsApp com DDD (para suporte) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    E-mail (para onde enviaremos o login) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: professora.maria@escola.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  2. Forma de Pagamento
                </span>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold">PIX</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Instantâneo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'credit'
                        ? 'bg-amber-950/40 border-amber-500 text-amber-300 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold">Cartão</span>
                    <span className="text-[10px] text-amber-400 font-semibold">Até 12x</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'boleto'
                        ? 'bg-slate-800 border-slate-600 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-xs font-bold">Boleto</span>
                    <span className="text-[10px] text-slate-500 font-semibold">1-3 dias</span>
                  </button>
                </div>
              </div>

              {/* PIX View */}
              {paymentMethod === 'pix' && (
                <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-4 text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Aprovação Imediata • Acesso Liberado no E-mail</span>
                  </div>

                  <div className="w-36 h-36 bg-white p-2 rounded-xl mx-auto flex items-center justify-center shadow-md">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=00020126580014br.gov.bcb.pix0136professoria-mentoria-${finalPrice}`}
                      alt="QR Code PIX para pagamento"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedPix ? 'Chave Copiada!' : 'Copiar Código PIX (Copia e Cola)'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Abra o app do seu banco, escolha PIX e aponte a câmera ou use o código Copia e Cola.
                  </p>
                </div>
              )}

              {/* Credit Card View */}
              {paymentMethod === 'credit' && (
                <div className="space-y-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Validade (MM/AA)
                      </label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        CVV (Código)
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Parcelamento
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      {installmentOptions.map(opt => (
                        <option key={opt.num} value={opt.num}>
                          {opt.num}x de R$ {opt.val.toFixed(2).replace('.', ',')}
                          {opt.num === 1 ? ' (sem juros)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Boleto View */}
              {paymentMethod === 'boleto' && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-center space-y-2 text-xs text-slate-300">
                  <FileText className="w-8 h-8 text-amber-400 mx-auto" />
                  <p className="font-semibold text-white">Boleto Bancário</p>
                  <p className="text-[11px] text-slate-400">
                    O boleto pode levar até 3 dias úteis para ser compensado. Se você deseja acesso imediato, recomendamos utilizar <strong>PIX</strong> ou <strong>Cartão de Crédito</strong>.
                  </p>
                </div>
              )}

              {/* Coupon Section */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Possui cupom? (Ex: PROFESSOR10)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </div>

              {/* Final Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Processando Inscrição...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-slate-950" />
                    <span>FINALIZAR INSCRIÇÃO AGORA • R$ {finalPrice.toFixed(2).replace('.', ',')}</span>
                  </>
                )}
              </button>

              {/* Security info */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Criptografia SSL 256-bit
                </span>
                <span>Acesso Imediato</span>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};
