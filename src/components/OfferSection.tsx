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
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E50914] mb-2 block">
          PLANOS E PREÇOS • ACESSO IMEDIATO
        </span>
        <h2
          className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight mb-2.5"
          style={{ textWrap: 'balance' }}
        >
          ESCOLHA COMO QUER COMEÇAR.
        </h2>
        <p className="text-sm sm:text-lg text-[#A1A1AA]">
          Pagamento único, sem mensalidades. Compare os planos abaixo e libere seu acesso agora:
        </p>
      </motion.div>

      {/* Grid of Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-stretch max-w-4xl mx-auto">
        {/* CARD 1: PLANO ESSENCIAL — PACOTE BÁSICO (R$ 10,00) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#161616] border border-[#282828] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-lg"
        >
          <div>
            <div className="mb-3">
              <span className="inline-block text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold">
                PLANO ESSENCIAL
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-0.5">
                PACOTE BÁSICO
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Para quem deseja consultar a biblioteca inicial de vídeos.
              </p>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#262626] my-5">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-[#A1A1AA] uppercase">
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
            <div className="mb-7">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3">
                O que está incluído no Essencial:
              </span>
              <ul className="space-y-3">
                {[
                  'Biblioteca principal de treinos organizados',
                  'Conteúdos práticos em vídeo',
                  'Sessões e combinações de Muay Thai do plano',
                  'Acesso digital pelo celular ou computador',
                  'Garantia incondicional de 7 dias',
                ].map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#D4D4D8]"
                  >
                    <Check className="w-4 h-4 text-[#A1A1AA] mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectBasic}
              className="w-full py-4 min-h-[52px] bg-[#242424] hover:bg-[#2f2f2f] active:scale-[0.99] border border-[#3a3a3a] hover:border-[#525252] text-white text-sm sm:text-base font-headline font-bold tracking-wider uppercase rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              QUERO O BÁSICO POR R$ 10
            </button>
            <p className="text-[11px] text-center text-[#8E8E98] mt-2.5">
              Acesso digital liberado imediatamente após confirmação
            </p>
          </div>
        </motion.div>

        {/* CARD 2: PLANO COMPLETO — PACOTE PRO (R$ 25,90) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-b from-[#170c0d] via-[#111111] to-[#111111] border-2 border-[#E50914] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_12px_45px_rgba(229,9,20,0.22)]"
        >
          {/* Gold Seal Banner */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 bg-[#D4AF37] text-black text-[11px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-md shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Zap className="w-3.5 h-3.5 fill-black shrink-0" />
            <span>MAIS ESCOLHIDO • PACOTE COMPLETO</span>
          </div>

          <div>
            <div className="mb-3 pt-1 sm:pt-0">
              <span className="inline-block text-xs uppercase tracking-wider text-[#E50914] font-bold">
                PLANO COMPLETO
              </span>
              <h3 className="font-headline font-bold text-3xl text-white tracking-wide mt-0.5">
                PACOTE PRO
              </h3>
              <p className="text-xs text-[#D4D4D8] mt-1">
                Mais variedade para as aulas e economia de tempo no planejamento.
              </p>
            </div>

            {/* Price Box */}
            <div className="py-4 border-y border-[#2a2020] my-5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs text-[#8E8E98] line-through mr-1">
                  De R$ 179,00
                </span>
                <span className="text-sm font-semibold text-[#E50914] uppercase">
                  por R$
                </span>
                <span className="font-headline font-black text-5xl sm:text-6xl text-[#E50914] tracking-tight tabular-nums">
                  25,90
                </span>
              </div>
              <span className="text-xs text-[#D4AF37] font-semibold block mt-1">
                Pagamento único • Inclui os 5 Bônus Exclusivos (R$ 179,00) grátis
              </span>
            </div>

            {/* Benefits List */}
            <div className="mb-7">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white mb-3">
                Tudo do Essencial + 5 Bônus Exclusivos:
              </span>
              <ul className="space-y-3">
                {[
                  'Tudo do Pacote Básico (500 Treinos Organizados em Vídeo)',
                  'Bônus 01: 20 Combinações de Ataque Profissionais',
                  'Bônus 02: 50 Treinos Físicos para Muay Thai',
                  'Bônus 03: 50 Técnicas de Defesa e Contra-Ataque',
                  'Bônus 04 e 05: Guias de Fundamentos e Recuperação',
                  'Fichas de combinações e recursos de organização',
                  'Garantia incondicional de 7 dias',
                ].map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-white font-medium"
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
          </div>

          <div>
            <button
              type="button"
              onClick={onSelectPro}
              className="w-full py-4 min-h-[54px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-base sm:text-lg font-headline font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-[#E50914]/30 border border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
            >
              QUERO O PRO POR R$ 25,90
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#D4D4D8] mt-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Acesso imediato + 7 dias de garantia incondicional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
