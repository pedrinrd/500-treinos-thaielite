/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  FileText,
  Target,
  Dumbbell,
  Timer,
  BarChart3,
  Shield,
  Crosshair,
  Brain,
  BookOpen,
  Compass,
  Star,
  Heart,
  Zap,
  Activity,
  Gift,
  ChevronRight,
} from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export function BonusSection({ onCtaClick }: BonusSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [showBgVideos, setShowBgVideos] = useState(false);

  // Only mount decorative background videos on >= 640px screens and when #bonus is near viewport
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    if (!mq.matches) return;

    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShowBgVideos(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShowBgVideos(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bonus"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a] overflow-hidden relative"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[300px] bg-[#E50914]/10 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mb-2.5">
          <span className="text-[#E50914] font-bold">BÔNUS EXCLUSIVOS</span>
          <span className="text-[#666]">•</span>
          <span className="text-white/90">
            CONTEÚDO EXTRA PARA MAXIMIZAR SEUS TREINOS
          </span>
        </div>
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
          Além da biblioteca principal, você recebe{' '}
          <strong className="text-white font-semibold">5 bônus completos</strong>{' '}
          com{' '}
          <strong className="text-white font-semibold">
            materiais exclusivos
          </strong>{' '}
          para dar mais variedade às aulas e acelerar sua evolução.
        </p>
      </motion.div>

      {/* ROW 1: BÔNUS 01 (Wide 7 cols) + BÔNUS 02 (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-5 sm:mb-6">
        {/* BÔNUS 01 — 20 COMBINAÇÕES DE ATAQUE PROFISSIONAIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-5 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl transition-colors duration-300 min-h-[320px] sm:min-h-[360px]"
        >
          {/* Background Live Video Preview on Right with Dark Gradient Mask (Desktop/Tablet Only) */}
          {showBgVideos && (
            <div
              aria-hidden="true"
              className="hidden sm:block absolute inset-y-0 right-0 w-3/5 opacity-35 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
            >
              <video
                src={OFFER_CONFIG.bonuses[0].previewVideoSrc}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/60" />
            </div>
          )}

          {/* Diagonal Red Slash Accent */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -left-10 w-44 h-44 bg-[#E50914]/15 rotate-45 blur-2xl pointer-events-none"
          />

          <div className="relative z-10 max-w-md">
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BÔNUS 01
            </span>

            <div className="mb-4 sm:mb-5">
              <span className="block font-headline font-black text-5xl sm:text-7xl text-[#E50914] leading-[0.85] tracking-tight">
                20
              </span>
              <h3 className="font-headline font-black text-2xl sm:text-3xl text-white uppercase leading-[0.98] mt-1">
                COMBINAÇÕES
                <br />
                DE ATAQUE
                <br />
                PROFISSIONAIS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#D4D4D8] mb-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <Play className="w-3 h-3 fill-current" />
                </span>
                <span>Vídeos em alta qualidade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <FileText className="w-3 h-3" />
                </span>
                <span>Passo a passo detalhado</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#E50914] shrink-0">
                  <Target className="w-3 h-3" />
                </span>
                <span>Aplicação prática no treino</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="w-8 h-0.5 bg-[#E50914] mb-2" />
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xs leading-relaxed">
                Sequências de golpes testadas e utilizadas por lutadores profissionais.
              </p>
            </div>

            <button
              type="button"
              onClick={onCtaClick}
              className="self-start sm:self-auto inline-flex items-center gap-2.5 px-4 py-2.5 min-h-[44px] rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn shrink-0"
            >
              <span className="w-6 h-6 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 fill-current translate-x-0.5" />
              </span>
              <span>ASSISTIR AGORA</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BÔNUS 02 — 50 TREINOS FÍSICOS PARA MUAY THAI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-5 sm:p-8 flex flex-col justify-between overflow-hidden group shadow-2xl transition-colors duration-300 min-h-[320px] sm:min-h-[360px]"
        >
          {/* Background Video Preview (Desktop/Tablet Only) */}
          {showBgVideos && (
            <div
              aria-hidden="true"
              className="hidden sm:block absolute inset-y-0 right-0 w-1/2 opacity-30 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
            >
              <video
                src={OFFER_CONFIG.bonuses[1].previewVideoSrc}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent" />
            </div>
          )}

          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BÔNUS 02
            </span>

            <div className="mb-4 sm:mb-5">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                50
              </span>
              <h3 className="font-headline font-black text-2xl text-white uppercase leading-[0.98] mt-1">
                TREINOS
                <br />
                FÍSICOS PARA
                <br />
                MUAY THAI
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#D4D4D8] mb-5">
              <li className="flex items-start gap-2.5">
                <Dumbbell className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Treinos de força, resistência e condicionamento</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Timer className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Programas de curta e longa duração</span>
              </li>
              <li className="flex items-start gap-2.5">
                <BarChart3 className="w-4 h-4 text-[#A1A1AA] shrink-0 mt-0.5" />
                <span>Melhore seu desempenho no tatame e na vida</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>ACESSAR BÔNUS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ROW 2: BÔNUS 03, BÔNUS 04 (Red Highlighted Border), BÔNUS 05 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
        {/* BÔNUS 03 — 50 TÉCNICAS DE DEFESA E CONTRA-ATAQUE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden group shadow-xl transition-colors duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BÔNUS 03
            </span>

            <div className="mb-4 pb-4 border-b border-[#1f1f1f]">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                50
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                TÉCNICAS
                <br />
                DE DEFESA E
                <br />
                CONTRA-ATAQUE
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#D4D4D8] mb-5">
              <li className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Defesas eficientes e precisas</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Crosshair className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Contra-ataques rápidos e eficazes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Brain className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Aumente seu poder de reação</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>ACESSAR BÔNUS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BÔNUS 04 — GUIA DE FUNDAMENTOS DO MUAY THAI (Featured Red Border as in 3rd print) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0e0e0e] border-2 border-[#E50914] shadow-[0_0_35px_rgba(229,9,20,0.18)] rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden group transition-all duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BÔNUS 04
            </span>

            <div className="mb-4 pb-4 border-b border-[#E50914]/30">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                GUIA
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                DE FUNDAMENTOS
                <br />
                DO MUAY THAI
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/90 mb-5">
              <li className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Postura, movimentação e guarda</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Base sólida para evoluir</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Ideal para iniciantes e intermediários</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>ACESSAR BÔNUS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>

        {/* BÔNUS 05 — GUIA DE RECUPERAÇÃO MUSCULAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0e0e0e] border border-[#262626] hover:border-[#E50914]/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden group shadow-xl transition-colors duration-300"
        >
          <div>
            <span className="inline-block px-2.5 py-1 text-[11px] font-headline font-bold tracking-wider uppercase text-[#E50914] bg-[#E50914]/15 border border-[#E50914]/30 rounded mb-3">
              BÔNUS 05
            </span>

            <div className="mb-4 pb-4 border-b border-[#1f1f1f]">
              <span className="block font-headline font-black text-5xl sm:text-6xl text-[#E50914] leading-[0.85] tracking-tight">
                GUIA
              </span>
              <h3 className="font-headline font-black text-xl sm:text-2xl text-white uppercase leading-[1.02] mt-1">
                DE RECUPERAÇÃO
                <br />
                MUSCULAR
              </h3>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#D4D4D8] mb-5">
              <li className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Previna lesões</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Volte mais rápido aos treinos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#A1A1AA] shrink-0" />
                <span>Cuide do seu corpo</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-end pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[42px] rounded-lg bg-black/80 hover:bg-[#E50914] border border-[#E50914] text-white text-xs font-headline font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            >
              <span className="w-5 h-5 rounded-full bg-[#E50914] group-hover/btn:bg-white group-hover/btn:text-[#E50914] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </span>
              <span>ACESSAR BÔNUS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E50914] group-hover/btn:text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM VALUE ANCHOR BANNER (Fiel à 3ª Print: Valor Total R$ 179,00 riscado + Inclusos no Pacote Pro) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={onCtaClick}
        className="max-w-4xl mx-auto bg-gradient-to-r from-[#0c0c0c] via-[#130909] to-[#1a0708] border border-dashed border-[#E50914]/75 rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 cursor-pointer hover:border-[#E50914] transition-all shadow-2xl relative overflow-hidden"
      >
        {/* Left: Gift Icon + Total Value Strikethrough */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] shrink-0">
            <Gift className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.16em] text-white uppercase">
              VALOR TOTAL DOS BÔNUS
            </span>
            <div className="relative inline-block mt-0.5">
              <span className="font-headline font-black text-3xl sm:text-5xl text-[#E50914] tracking-tight tabular-nums">
                R$ 179,00
              </span>
              {/* Crisp horizontal red/white strike bar */}
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white/85 rounded-full shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Vertical Divider on Desktop */}
        <div
          aria-hidden="true"
          className="hidden md:block w-px h-14 bg-[#E50914]/40"
        />

        {/* Right: Included in Pro Package */}
        <div className="text-center md:text-left flex-1">
          <span className="block text-xs sm:text-sm font-bold tracking-[0.14em] text-[#E50914] uppercase mb-1">
            INCLUSOS GRATUITAMENTE NO PACOTE COMPLETO
          </span>
          <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
            Receba todos os{' '}
            <strong className="text-white font-semibold">
              5 bônus exclusivos
            </strong>{' '}
            + biblioteca completa de treinos e combinações.
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onCtaClick();
          }}
          className="w-full md:w-auto px-6 py-3.5 min-h-[48px] bg-[#E50914] hover:bg-[#C40812] text-white font-headline font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg transition-colors shrink-0"
        >
          ESCOLHER MEU PLANO
        </button>
      </motion.div>
    </section>
  );
}
