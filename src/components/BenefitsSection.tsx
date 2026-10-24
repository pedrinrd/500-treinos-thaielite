/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Video,
  Layers,
  Smartphone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { OFFER_CONFIG, DrillClip } from '../config/offer.ts';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

interface ReelCardProps {
  clip: DrillClip;
  isCenter: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  onSelect: () => void;
}

function ReelVideoCard({
  clip,
  isCenter,
  isMuted,
  onToggleMute,
  onSelect,
}: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = isCenter ? isMuted : true;
    if (isCenter && !isPaused) {
      vid.play().catch(() => {
        // Ignore autoplay restrictions
      });
    } else if (!isCenter) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  }, [isCenter, isMuted, isPaused]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setIsPaused(false);
    } else {
      vid.pause();
      setIsPaused(true);
    }
  };

  return (
    <motion.div
      layout
      onClick={onSelect}
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{
        opacity: isCenter ? 1 : 0.55,
        scale: isCenter ? 1 : 0.9,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative aspect-[9/16] w-full max-w-[290px] sm:max-w-[310px] mx-auto rounded-2xl overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${
        isCenter
          ? 'border-2 border-[#E50914] shadow-[0_0_40px_rgba(229,9,20,0.28)] z-20'
          : 'border border-[#262626] hover:border-[#444] z-10'
      } bg-[#0d0d0d]`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={clip.videoSrc}
        className="w-full h-full object-cover bg-black"
        autoPlay
        loop
        muted={isCenter ? isMuted : true}
        playsInline
        preload="metadata"
      />

      {/* Top Overlay Bar */}
      <div className="absolute top-0 inset-x-0 p-3.5 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-2 min-w-0">
          <span className="px-2 py-0.5 text-[10px] font-headline font-bold tracking-wider uppercase bg-[#E50914] text-white rounded whitespace-nowrap shrink-0">
            {clip.numberLabel}
          </span>
          <span className="text-[11px] font-medium text-white/90 truncate">
            {clip.category}
          </span>
        </div>

        {isCenter && (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleMute();
              }}
              className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center transition-colors"
              aria-label={isMuted ? 'Ativar áudio do treino' : 'Silenciar áudio do treino'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center transition-colors"
              aria-label={isPaused ? 'Reproduzir treino' : 'Pausar treino'}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              ) : (
                <Pause className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Bottom Scrim & Metadata */}
      <div className="absolute bottom-0 inset-x-0 p-4 pt-12 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10 text-left">
        <div className="flex items-center justify-between text-[11px] text-[#D4AF37] font-mono mb-1">
          <span>AULA PRÁTICA</span>
          <span className="tabular-nums">{clip.duration}</span>
        </div>
        <h4 className="font-headline font-bold text-xl sm:text-2xl text-white leading-tight mb-1">
          {clip.title}
        </h4>
        <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
          {clip.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export function BenefitsSection({ onCtaClick }: BenefitsSectionProps) {
  const drills = OFFER_CONFIG.drillClips;
  const total = drills.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPausedHold, setIsPausedHold] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-advance carousel every 4.2s when not hovered or unmuted
  useEffect(() => {
    if (isPausedHold || !isMuted) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPausedHold, isMuted, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const benefitsCards = [
    {
      icon: Video,
      title: 'TREINOS EM VÍDEO',
      description:
        'Acompanhe demonstrações e consulte os exercícios sempre que precisar.',
      footer: '500 aulas com demonstração em alta definição',
    },
    {
      icon: Layers,
      title: 'COMBINAÇÕES PRONTAS',
      description:
        'Encontre sequências de golpes e combinações para complementar sua prática.',
      footer: 'Sequências testadas para manoplas e saco de pancada',
    },
    {
      icon: Smartphone,
      title: 'ACESSO PELO CELULAR',
      description: 'Consulte os materiais de forma prática, onde estiver.',
      footer: 'Interface rápida sem travamentos, direto no tatame',
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Section Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#E50914] mb-2 block">
          ESTRUTURA COMPLETA
        </span>
        <h2
          className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight"
          style={{ textWrap: 'balance' }}
        >
          TUDO PARA ORGANIZAR SEUS TREINOS EM UM SÓ LUGAR.
        </h2>
      </motion.div>

      {/* 3 Minimal Cards with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {benefitsCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-[#111111] border border-[#222222] hover:border-[#E50914]/60 p-7 rounded-xl flex flex-col justify-between transition-colors duration-300 relative overflow-hidden"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E50914]/10 border border-[#E50914]/25 flex items-center justify-center text-[#E50914] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-headline font-bold text-2xl text-white tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center gap-2 text-xs text-[#71717A]">
                <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0" />
                <span>{card.footer}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SEÇÃO EXCLUSIVA: CARROSSEL ANIMADO DE VÍDEOS DE TREINOS (FORMATO REELS 9:16) */}
      <motion.div
        id="treinos"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-b from-[#121212] to-[#0b0b0b] border border-[#242424] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden"
        onMouseEnter={() => setIsPausedHold(true)}
        onMouseLeave={() => setIsPausedHold(false)}
      >
        {/* Ambient red glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#E50914]/12 rounded-full blur-[110px] pointer-events-none"
        />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E50914]/10 border border-[#E50914]/25 text-[#E50914] text-xs font-semibold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>BIBLIOTECA EM VÍDEO • FORMATO PRÁTICO</span>
          </div>
          <h3
            className="font-headline font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-3"
            style={{ textWrap: 'balance' }}
          >
            VEJA OS TREINOS REAIS DO <span className="text-[#E50914]">THAI ELITE</span> EM AÇÃO
          </h3>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Deslize pelos exemplos abaixo. Todos os 500 vídeos são diretos ao ponto para você assistir no celular e aplicar na hora.
          </p>
        </div>

        {/* 9:16 Reels Carousel Stage */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center py-2">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 z-30 w-11 h-11 rounded-full bg-[#141414]/90 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-200 focus:outline-none"
            aria-label="Treino anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* 3-Card Stage on Desktop / 1-Card on Mobile */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-center px-4 sm:px-12">
            {/* Left Preview Card (Desktop Only) */}
            <div className="hidden lg:block">
              <ReelVideoCard
                key={`left-${drills[prevIndex].id}`}
                clip={drills[prevIndex]}
                isCenter={false}
                isMuted={true}
                onToggleMute={() => {}}
                onSelect={handlePrev}
              />
            </div>

            {/* Center Active Card */}
            <div>
              <AnimatePresence mode="wait">
                <ReelVideoCard
                  key={`center-${drills[activeIndex].id}`}
                  clip={drills[activeIndex]}
                  isCenter={true}
                  isMuted={isMuted}
                  onToggleMute={() => setIsMuted(!isMuted)}
                  onSelect={() => {}}
                />
              </AnimatePresence>
            </div>

            {/* Right Preview Card (Desktop Only) */}
            <div className="hidden lg:block">
              <ReelVideoCard
                key={`right-${drills[nextIndex].id}`}
                clip={drills[nextIndex]}
                isCenter={false}
                isMuted={true}
                onToggleMute={() => {}}
                onSelect={handleNext}
              />
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 sm:right-2 z-30 w-11 h-11 rounded-full bg-[#141414]/90 hover:bg-[#E50914] border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-200 focus:outline-none"
            aria-label="Próximo treino"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots & Counter */}
        <div className="mt-8 flex flex-col items-center gap-6 relative z-10">
          <div className="flex items-center gap-2">
            {drills.map((drill, idx) => (
              <button
                key={drill.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-8 bg-[#E50914]'
                    : 'w-2 bg-[#333333] hover:bg-[#555555]'
                }`}
                aria-label={`Ver demonstração ${idx + 1}: ${drill.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="px-8 py-4 min-h-[50px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.98] text-white font-headline font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg shadow-lg shadow-[#E50914]/25 border border-white/10 transition-all duration-200"
          >
            QUERO ACESSAR TODOS OS 500 TREINOS
          </button>
        </div>
      </motion.div>
    </section>
  );
}
