/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Gift } from 'lucide-react';

interface OfferSectionProps {
  onSelectBasic: () => void;
  onSelectPro: () => void;
}

export function OfferSection({
  onSelectBasic,
  onSelectPro,
}: OfferSectionProps) {
  return (
    <section
      id="oferta"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E50914] mb-2 block">
          CONDIÇÃO DE ACESSO
        </span>
        <h2
          className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight mb-3"
          style={{ textWrap: 'balance' }}
        >
          ESCOLHA COMO QUER COMEÇAR.
        </h2>
        <p className="text-base sm:text-lg text-[#A1A1AA]">
          Um pagamento único para acessar seus treinos.
        </p>
      </motion.div>

      {/* Grid of Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* CARD 1: PACOTE BÁSICO */}
        <motion.div
          initial={{ opacity: 0, x: -35, y: 25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="bg-[#181818] border border-[#262626] rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative shadow-lg"
        >
          <div>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold">
                PLANO ESSENCIAL
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-1">
                PACOTE BÁSICO
              </h3>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#262626] my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-semibold text-[#A1A1AA] uppercase">
                  R$
                </span>
                <span className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight tabular-nums">
                  10,00
                </span>
              </div>
              <span className="text-xs text-[#A1A1AA] font-medium block mt-1">
                Pagamento único • Sem mensalidades
              </span>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3.5 mb-8">
              {[
                'Biblioteca principal de treinos',
                'Conteúdos em vídeo',
                'Sessões e combinações incluídas no plano',
                'Acesso digital',
                'Garantia de 7 dias',
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#CCCCCC]"
                >
                  <Check className="w-4 h-4 text-[#A1A1AA] mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectBasic}
              className="w-full py-4 min-h-[48px] bg-[#222222] hover:bg-[#2c2c2c] active:scale-[0.99] border border-[#333333] hover:border-[#444444] text-white text-sm sm:text-base font-semibold tracking-wider uppercase rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              QUERO O BÁSICO POR R$ 10
            </button>
            <p className="text-[11px] text-center text-[#71717A] mt-2">
              Acesso digital liberado imediatamente após confirmação
            </p>
          </div>
        </motion.div>

        {/* CARD 2: PACOTE PRO */}
        <motion.div
          initial={{ opacity: 0, x: 35, y: 25 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="bg-[#111111] border-2 border-[#E50914] rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative shadow-2xl shadow-[#E50914]/20"
        >
          {/* Gold Seal Banner */}
          <div className="absolute -top-3.5 right-6 bg-[#D4AF37] text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-md flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>PACOTE COMPLETO</span>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-[#E50914] font-semibold">
                EXPERIÊNCIA DEFINITIVA
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-1">
                PACOTE PRO
              </h3>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#262626] my-6">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-semibold text-[#A1A1AA] uppercase">
                  R$
                </span>
                <span className="font-headline font-black text-5xl sm:text-6xl text-[#E50914] tracking-tight tabular-nums">
                  27,90
                </span>
              </div>
              <span className="text-xs text-[#A1A1AA] font-medium block mt-1">
                Pagamento único • Inclui os 5 Bônus (R$ 179,00) grátis
              </span>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3.5 mb-8">
              {[
                'Tudo do Pacote Básico (500 Treinos em Vídeo)',
                'Bônus 01: 20 Combinações de Ataque Profissionais',
                'Bônus 02: 50 Treinos Físicos para Muay Thai',
                'Bônus 03: 50 Técnicas de Defesa e Contra-Ataque',
                'Bônus 04 e 05: Guias de Fundamentos e Recuperação',
                'Garantia incondicional de 7 dias',
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white font-medium"
                >
                  {i >= 1 && i <= 4 ? (
                    <Gift className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  ) : (
                    <Check className="w-4 h-4 text-[#E50914] mt-0.5 shrink-0" />
                  )}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectPro}
              className="w-full py-4 min-h-[48px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-base sm:text-lg font-headline font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-[#E50914]/30 border border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              QUERO O PRO POR R$ 27,90
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A1A1AA] mt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Garantia incondicional de 7 dias com reembolso total</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
