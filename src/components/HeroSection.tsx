/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { OFFER_CONFIG } from '../config/offer.ts';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  return (
    <section id="vsl" className="relative pt-12 sm:pt-16 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E50914]/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Faixa superior */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#E50914] bg-[#E50914]/10 border border-[#E50914]/25 rounded-md mb-6"
      >
        <span>THAI ELITE</span>
        <span className="text-[#555] font-light">|</span>
        <span className="text-[#A1A1AA]">TREINAMENTO DIGITAL</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-headline font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-white max-w-4xl leading-[0.95] mb-4"
        style={{ textWrap: 'balance' }}
      >
        PARE DE TREINAR <span className="text-[#E50914]">SEM DIREÇÃO</span>.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg sm:text-2xl text-white font-medium max-w-2xl leading-snug mb-3"
      >
        Tenha seus treinos de Muay Thai organizados e prontos para consultar.
      </motion.p>

      {/* Texto complementar */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm sm:text-base text-[#A1A1AA] max-w-xl leading-relaxed mb-8"
      >
        Chega de procurar exercícios espalhados pela internet. Encontre combinações, técnicas e sessões de treino em vídeo, tudo em um só lugar.
      </motion.p>

      {/* VSL Player (Formato vertical 9:16, centralizado, responsivo, sem cortar) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/16] bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] shadow-2xl shadow-black/80 group mb-8"
        onMouseEnter={() => setShowControls(true)}
      >
        {/* Glow border on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#E50914]/40 transition-all pointer-events-none z-20" />

        <video
          ref={videoRef}
          src={OFFER_CONFIG.vslVideoSrc}
          className="w-full h-full object-contain bg-black cursor-pointer"
          playsInline
          preload="metadata"
          onClick={togglePlay}
          aria-label="Vídeo oficial de apresentação do Muay Thai Pro"
        />

        {/* Big initial Play overlay if not playing */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer z-10 transition-opacity"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg shadow-[#E50914]/50 border-2 border-white/20 transition-all"
            >
              <Play className="w-9 h-9 fill-white translate-x-1" />
            </motion.div>
            <span className="mt-4 text-xs font-semibold tracking-wider text-white uppercase bg-black/70 px-3 py-1 rounded-md border border-white/10">
              {hasStartedPlaying ? 'Continuar Vídeo' : 'Assistir com Áudio'}
            </span>
          </div>
        )}

        {/* Video Controls Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 transition-opacity duration-200 ${
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
                onClick={togglePlay}
                className="p-1.5 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#A1A1AA]" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[11px] font-mono text-[#A1A1AA] tabular-nums">
                {formatSeconds(currentTime)} / {formatSeconds(duration || 52)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={restartVideo}
                className="p-1.5 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label="Reiniciar vídeo"
              >
                <RotateCcw className="w-4 h-4 text-[#A1A1AA] hover:text-white" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-1.5 hover:text-[#E50914] transition-colors focus:outline-none"
                aria-label="Tela cheia"
              >
                <Maximize2 className="w-4 h-4 text-[#A1A1AA] hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full flex flex-col items-center gap-3"
      >
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto px-8 py-4 min-h-[52px] bg-[#E50914] hover:bg-[#C40812] active:scale-[0.98] text-white text-base sm:text-lg font-headline font-bold uppercase tracking-wider rounded-lg shadow-xl shadow-[#E50914]/25 border border-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
        >
          QUERO ACESSAR OS TREINOS
        </button>

        {/* Microcopy */}
        <p className="text-xs sm:text-sm text-[#A1A1AA] font-normal tracking-wide">
          Pagamento único • Acesso digital • 7 dias de garantia
        </p>
      </motion.div>
    </section>
  );
}
