/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquareQuote,
  ZoomIn,
  X,
} from 'lucide-react';
import { OFFER_CONFIG, TestimonialItem } from '../config/offer.ts';

export function TestimonialsSection() {
  const testimonials = OFFER_CONFIG.testimonials;
  const total = testimonials.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedItem, setZoomedItem] = useState<TestimonialItem | null>(null);

  // Auto-advance every 4.5s
  useEffect(() => {
    if (isPaused || zoomedItem) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, zoomedItem, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const currentItem = testimonials[activeIndex];
  const nextItem = testimonials[(activeIndex + 1) % total];

  return (
    <section
      id="depoimentos"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2.5">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>PROVA SOCIAL VERIFICADA</span>
        </div>
        <h2
          className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-2.5"
          style={{ textWrap: 'balance' }}
        >
          QUEM JÁ CONHECEU O <span className="text-[#E50914]">THAI ELITE</span> RECOMENDA
        </h2>
        <p className="text-sm sm:text-base text-[#A1A1AA]">
          Mensagens reais de alunos e praticantes que acessam os treinamentos em vídeo pelo celular.
        </p>
      </motion.div>

      {/* Animated Testimonials Carousel Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#181818]/95 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-200 focus:outline-none"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#181818]/95 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-200 focus:outline-none"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Cards Grid (2 cards visible on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 sm:px-8">
          {[currentItem, nextItem].map((item, idx) => (
            <AnimatePresence mode="wait" key={`${item.id}-${idx}`}>
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`${
                  idx === 1 ? 'hidden lg:flex' : 'flex'
                } flex-col sm:flex-row gap-4 sm:gap-5 bg-[#111111] border border-[#242424] hover:border-[#E50914]/50 rounded-2xl p-4 sm:p-6 transition-colors duration-300 shadow-xl`}
              >
                {/* Screenshot Image Thumbnail */}
                <div
                  onClick={() => setZoomedItem(item)}
                  className="relative w-full sm:w-48 h-64 sm:h-64 shrink-0 bg-[#080808] rounded-xl overflow-hidden border border-[#262626] group cursor-pointer flex items-center justify-center p-1.5"
                >
                  <img
                    src={item.imageSrc}
                    alt={`Print do depoimento de ${item.author}`}
                    width={320}
                    height={420}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 text-white text-xs font-medium border border-white/15">
                      <ZoomIn className="w-3.5 h-3.5 text-[#E50914]" />
                      Ampliar Print
                    </span>
                  </div>
                </div>

                {/* Quote & Author Details */}
                <div className="flex flex-col justify-between flex-1 text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        Compra Verificada
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-4">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#1e1e1e] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="font-headline font-bold text-lg text-white tracking-wide truncate">
                        {item.author}
                      </h4>
                      <span className="text-xs text-[#A1A1AA] block truncate">
                        {item.handle}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/20 shrink-0">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-[#E50914]'
                  : 'w-2.5 bg-[#333333] hover:bg-[#555555]'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal for Full Screenshot View */}
      <AnimatePresence>
        {zoomedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setZoomedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-[#111111] border border-[#2a2a2a] rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222]">
                <div>
                  <h4 className="font-headline font-bold text-lg text-white">
                    {zoomedItem.author}
                  </h4>
                  <p className="text-xs text-[#A1A1AA]">{zoomedItem.tag}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomedItem(null)}
                  className="p-2 text-[#A1A1AA] hover:text-white rounded-full bg-[#1a1a1a]"
                  aria-label="Fechar visualização do depoimento"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img
                src={zoomedItem.imageSrc}
                alt={`Depoimento completo de ${zoomedItem.author}`}
                className="w-full max-h-[75vh] object-contain rounded-lg mx-auto"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
