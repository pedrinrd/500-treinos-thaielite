/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface GuaranteeFaqSectionProps {
  onCtaClick: () => void;
}

export function GuaranteeFaqSection({ onCtaClick }: GuaranteeFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Bloco de Garantia de 7 Dias */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-10 mb-12 sm:mb-16 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
          {/* Guarantee Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col items-center justify-center shrink-0 text-[#D4AF37]">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-[10px] font-bold tracking-wider uppercase mt-1">
              7 DIAS
            </span>
          </div>

          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              RISCO ZERO • COMPROMISSO COM A SUA EVOLUÇÃO
            </span>
            <h2
              className="font-headline font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mb-2.5"
              style={{ textWrap: 'balance' }}
            >
              7 DIAS PARA CONHECER O THAI ELITE.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {OFFER_CONFIG.guaranteeText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* FAQ Accordion Section */}
      <div className="mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E50914] mb-2 block">
            DÚVIDAS FREQUENTES
          </span>
          <h3 className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight">
            PERGUNTAS FREQUENTES
          </h3>
        </motion.div>

        <div className="space-y-3">
          {OFFER_CONFIG.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#141414] border border-[#242424] hover:border-[#333333] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[52px] flex items-center justify-between text-left text-base sm:text-lg font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A1A1AA] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#E50914]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-2 text-sm text-[#B4B4BC] leading-relaxed border-t border-[#1e1e1e]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-center bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-[#262626] rounded-2xl p-6 sm:p-12 shadow-xl"
      >
        <h3 className="font-headline font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mb-2.5">
          COMECE AGORA COM SEUS TREINOS ORGANIZADOS
        </h3>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-lg mx-auto mb-6 sm:mb-8">
          Tenha combinações de Muay Thai, mais variedade para as aulas e economia de tempo no planejamento direto no seu celular.
        </p>
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full sm:w-auto px-10 py-4 min-h-[54px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-base sm:text-lg font-headline font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-[#E50914]/30 border border-white/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
        >
          ESCOLHER MEU PLANO
        </button>
        <p className="text-xs text-[#A1A1AA] mt-3">
          Planos de R$ 10,00 ou R$ 25,90 • Pagamento único • 7 dias de garantia
        </p>
      </motion.div>
    </section>
  );
}
