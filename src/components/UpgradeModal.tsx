/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmUpgrade: () => void;
  onDeclineToBasic: () => void;
}

export function UpgradeModal({
  isOpen,
  onClose,
  onConfirmUpgrade,
  onDeclineToBasic,
}: UpgradeModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Darkened backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="upgrade-modal-title"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#090909] border border-[#E50914]/40 rounded-2xl shadow-2xl shadow-black p-6 sm:p-8 z-10 text-center"
        >
          {/* Close button (fechar modal sem redirecionamento) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#A1A1AA] hover:text-white hover:bg-[#1a1a1a] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Fechar pop-up de upgrade"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Selo Dourado */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/35 rounded-full text-[#D4AF37] text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFERTA ESPECIAL DE UPGRADE</span>
          </div>

          {/* Headline */}
          <h2
            id="upgrade-modal-title"
            className="font-headline font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight mb-2"
          >
            ESPERE! LEVE O PACOTE COMPLETO POR UM PREÇO PROMOCIONAL.
          </h2>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
            Antes de finalizar, aproveite esta condição única para liberar a biblioteca completa + os 5 bônus reais (incluindo o Guia de Fundamentos).
          </p>

          {/* Comparação Card */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 sm:p-5 mb-5 sm:mb-6 text-left">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#222222]">
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E50914] block">
                  PACOTE COMPLETO (PROMOCIONAL)
                </span>
                <p className="text-xs text-[#A1A1AA]">
                  500 treinos em vídeo + 5 Bônus Exclusivos
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-[#71717A] line-through block whitespace-nowrap tabular-nums">
                  De R$ 25,90
                </span>
                <span className="font-headline font-black text-2xl sm:text-3xl text-white whitespace-nowrap tabular-nums">
                  R$ 18,90
                </span>
              </div>
            </div>

            {/* Economia tag */}
            <div className="pt-3 flex items-center justify-between gap-2 text-xs">
              <span className="text-[#A1A1AA]">Preço total promocional do Completo:</span>
              <span className="font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/20 whitespace-nowrap shrink-0 tabular-nums">
                Economia de R$ 7,00
              </span>
            </div>
          </div>

          {/* Texto de Valor */}
          <p className="text-sm text-white font-medium mb-6">
            Por apenas <span className="text-[#E50914] font-bold">R$ 18,90 no total</span> (pagamento único), você leva o Pacote Completo com os 5 bônus.
          </p>

          {/* Botão Principal */}
          <div className="space-y-3">
            <button
              onClick={onConfirmUpgrade}
              className="w-full py-4 min-h-[50px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-base font-headline font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-[#E50914]/25 border border-white/20 transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              <span>QUERO O PACOTE COMPLETO POR R$ 18,90</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Link Secundário */}
            <button
              onClick={onDeclineToBasic}
              className="text-xs text-[#A1A1AA] hover:text-white underline underline-offset-4 py-2 transition-colors block w-full focus-visible:outline-none"
            >
              Não, continuar com o Plano Essencial por R$ 10,00.
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
