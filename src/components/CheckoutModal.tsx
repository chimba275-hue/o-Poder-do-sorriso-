import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  QrCode, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { ReaderTheme } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessUnlock: () => void;
  theme: ReaderTheme;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSuccessUnlock,
  theme,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const basePrice = 37.90;
  const totalPrice = basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136smile-poder-sorriso-checkout-2026520400005303986540537.905802BR5925O PODER DO SORRISO DIGITAL6009SAO PAULO62070503***6304');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1C1C1F] text-stone-900 dark:text-white rounded-3xl shadow-2xl border border-stone-200 dark:border-zinc-800 overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-200" />
            <span className="text-xs uppercase tracking-wider font-bold">Checkout 100% Seguro e Criptografado</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h2 className="font-editorial-display text-3xl font-bold">
                Parabéns! Seu Acesso Foi Liberado!
              </h2>
              <p className="font-editorial-serif text-stone-600 dark:text-stone-300 max-w-md mx-auto text-sm sm:text-base">
                Seu pagamento foi confirmado com sucesso. O e-book completo <strong>"O Poder do Sorriso"</strong> e todos os 5 bônus já estão desbloqueados para você.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-md mx-auto text-xs text-amber-900 dark:text-amber-200 text-left space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>O que você tem liberado agora:</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-stone-700 dark:text-stone-300">
                <li>Livro digital completo com 9 capítulos</li>
                <li>Diário Interativo do Desafio de 7 Dias</li>
                <li>30 Pequenas Razões para Sorrir</li>
                <li>Modo Noturno e Leitura em PDF</li>
              </ul>
            </div>

            <button
              onClick={() => {
                onClose();
                onSuccessUnlock();
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Acessar Meu Livro Agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* Form Checkout */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Order summary box */}
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 block">
                  Produto Selecionado
                </span>
                <h3 className="font-editorial-display font-bold text-lg text-stone-900 dark:text-white">
                  O Poder do Sorriso — Pacote Completo VIP
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Livro Digital + 5 Bônus + Acesso Vitalício + Atualizações
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-stone-400 line-through block">De R$ 179,00</span>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Step 1: Customer Info */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Dados Para Acesso Imediato</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    E-mail Principal *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: seuemail@gmail.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Selector */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px]">2</span>
                <span>Forma de Pagamento</span>
              </h4>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 ring-2 ring-emerald-600'
                      : 'border-stone-200 dark:border-zinc-700 hover:bg-stone-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <span>PIX (Imediato)</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded">
                    Recomendado
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'credit'
                      ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 ring-2 ring-amber-600'
                      : 'border-stone-200 dark:border-zinc-700 hover:bg-stone-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  <span>Cartão de Crédito</span>
                  <span className="text-[10px] text-stone-400">Até 4x sem juros</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'boleto'
                      ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 ring-2 ring-amber-600'
                      : 'border-stone-200 dark:border-zinc-700 hover:bg-stone-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <FileText className="w-5 h-5 text-stone-600" />
                  <span>Boleto Bancário</span>
                  <span className="text-[10px] text-stone-400">Compensação 24-48h</span>
                </button>
              </div>

              {/* PIX Details */}
              {paymentMethod === 'pix' && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      Chave PIX Copia e Cola Gerada (Aprovação Instantânea)
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar Código'}</span>
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-emerald-300 dark:border-zinc-700 font-mono text-xs text-stone-600 dark:text-stone-300 truncate">
                    00020126580014br.gov.bcb.pix0136smile-poder-sorriso-checkout-2026520400005303986540537.905802BR5925O PODER DO SORRISO
                  </div>
                </div>
              )}

              {/* Credit Card Details */}
              {paymentMethod === 'credit' && (
                <div className="space-y-3 p-4 rounded-2xl bg-stone-50 dark:bg-zinc-800/40 border border-stone-200 dark:border-zinc-700">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                        Validade (MM/AA)
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="12/28"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                        CVV (3 dígitos)
                      </label>
                      <input
                        type="text"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="123"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit CTA Button */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-600/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processando com segurança...</span>
                ) : (
                  <>
                    <span>Confirmar Pedido — R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia de 7 Dias
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  Criptografia 256-bit
                </span>
                <span>·</span>
                <span>Acesso Vitalício Imediato</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
