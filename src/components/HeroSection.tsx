/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Toggle playback
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedPlaying(true);
        })
        .catch((err) => {
          console.error('Video play error:', err);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle audio
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request error:', err);
      });
    }
  };

  // Restart video
  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Update progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 1, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      id="vsl"
      className="relative pt-4 sm:pt-12 md:pt-16 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#E50914]/15 rounded-full blur-[90px] pointer-events-none -z-10"
      />

      {/* Brand Lockup + Faixa Superior */}
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white bg-[#141414] border border-[#E50914]/35 rounded-lg mb-3 sm:mb-5 shadow-md"
      >
        <img
          src={OFFER_CONFIG.logoSrc}
          alt="Logo Thai Elite"
          width={20}
          height={20}
          fetchPriority="high"
          decoding="sync"
          className="w-5 h-5 object-contain shrink-0"
        />
        <span className="text-[#E50914] font-bold">THAI ELITE</span>
        <span className="text-[#555] font-light" aria-hidden="true">
          |
        </span>
        <span className="text-[#D4D4D8]">TREINAMENTO DIGITAL</span>
      </motion.div>

      {/* Headline Principal */}
      <motion.h1
        {...fadeUp(0.03)}
        className="font-headline font-black text-[2rem] sm:text-5xl md:text-6xl tracking-tight text-white max-w-4xl leading-[0.95] mb-2.5 sm:mb-4 uppercase"
        style={{ textWrap: 'balance' }}
      >
        APRENDA MUAY THAI EM CASA,{' '}
        <span className="text-[#E50914]">MESMO COMEÇANDO DO ZERO!</span>
      </motion.h1>

      {/* Subheadline Direta */}
      <motion.p
        {...fadeUp(0.06)}
        className="text-xs sm:text-lg text-[#D4D4D8] font-medium max-w-2xl leading-relaxed mb-3.5 sm:mb-5 px-1"
      >
        Descubra os fundamentos do Muay Thai com treinamentos em vídeo. Conheça técnicas de socos, chutes, joelhadas, defesas e combinações para começar a praticar no seu ritmo.
      </motion.p>

      {/* Resumo Rápido da Oferta (O que está comprando + Quanto custa + Como acessar) */}
      <motion.div
        {...fadeUp(0.12)}
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-sm text-[#D4D4D8] mb-3.5 sm:mb-6 px-3 py-1.5 rounded-lg bg-[#111111]/90 border border-[#222222]"
      >
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
          <span>Biblioteca com 500 Treinos em Vídeo</span>
        </span>
        <span className="text-[#444]" aria-hidden="true">
          •
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-white whitespace-nowrap">
          <span>A partir de </span>
          <span className="text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-2">
            R$10
          </span>
        </span>
      </motion.div>

      {/* VSL Player (Formato vertical 9:16, centralizado, responsivo, sem cortar) */}
      <motion.div
        {...fadeUp(0.15)}
        className="relative w-full max-w-[235px] sm:max-w-[340px] aspect-[9/16] bg-[#111111] rounded-2xl overflow-hidden border-2 border-[#262626] hover:border-[#E50914]/60 shadow-[0_16px_50px_rgba(0,0,0,0.85)] group mb-4 sm:mb-7 transition-colors"
        onMouseEnter={() => setShowControls(true)}
      >
        {/* Glow border on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#E50914]/40 transition-all pointer-events-none z-20" />

        {/* High-priority WebP Poster Image for instant mobile LCP before video playback starts */}
        {!hasStartedPlaying && (
          <img
            src={OFFER_CONFIG.vslPosterSrc}
            alt="Prévia do vídeo de apresentação Thai Elite"
            width={540}
            height={960}
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />
        )}

        <video
          ref={videoRef}
          src={OFFER_CONFIG.vslVideoSrc}
          poster={OFFER_CONFIG.vslPosterSrc}
          className="relative z-[1] w-full h-full object-contain bg-black cursor-pointer"
          playsInline
          preload="metadata"
          onClick={togglePlay}
          aria-label="Vídeo oficial de apresentação do Thai Elite"
        />

        {/* Poster / Big Initial Play Overlay */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80 flex flex-col items-center justify-center cursor-pointer z-10 transition-opacity p-4"
          >
            {!hasStartedPlaying && (
              <span className="mb-3 px-2.5 py-1 rounded bg-black/75 border border-white/15 text-[11px] font-semibold uppercase tracking-widest text-[#D4D4D8]">
                Apresentação Rápida • 45s
              </span>
            )}
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E50914] hover:bg-[#C40812] text-white flex items-center justify-center shadow-[0_0_35px_rgba(229,9,20,0.65)] border-2 border-white/25 transition-transform duration-200 hover:scale-105 active:scale-95">
              <Play className="w-9 h-9 fill-white translate-x-0.5" />
            </div>
            <span className="mt-4 text-xs sm:text-sm font-bold tracking-wider text-white uppercase bg-black/85 px-4 py-1.5 rounded-md border border-[#E50914]/40 shadow-lg">
              {hasStartedPlaying ? 'Continuar Vídeo' : 'Toque para Assistir com Áudio'}
            </span>
          </div>
        )}

        {/* Video Controls Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-20 transition-opacity duration-200 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0 hover:opacity-100'
          }`}
        >
          {/* Progress bar */}
          <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden">
            <div
              className="h-full bg-[#E50914] transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="p-2 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#A1A1AA]" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[11px] font-mono text-[#D4D4D8] tabular-nums">
                {formatSeconds(currentTime)} / {formatSeconds(duration || 45)}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={restartVideo}
                className="p-2 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label="Reiniciar vídeo"
              >
                <RotateCcw className="w-4 h-4 text-[#A1A1AA] hover:text-white" />
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label="Tela cheia"
              >
                <Maximize2 className="w-4 h-4 text-[#A1A1AA] hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Principal com Destaque Máximo */}
      <motion.div
        {...fadeUp(0.26)}
        className="w-full max-w-md sm:max-w-lg flex flex-col items-center gap-3"
      >
        <button
          type="button"
          onClick={onCtaClick}
          className="w-full px-8 py-4 min-h-[54px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.99] text-white text-lg sm:text-xl font-headline font-bold uppercase tracking-wider rounded-xl shadow-[0_10px_30px_rgba(229,9,20,0.35)] border border-white/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
        >
          QUERO COMEÇAR A APRENDER
        </button>

        {/* Microcopy de Segurança e Preço */}
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#A1A1AA] font-normal">
          <span className="inline-flex items-center gap-1 text-white/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            Pagamento único
          </span>
          <span aria-hidden="true">•</span>
          <span>A partir de R$10</span>
          <span aria-hidden="true">•</span>
          <span>7 dias de garantia</span>
        </p>
      </motion.div>
    </section>
  );
}
