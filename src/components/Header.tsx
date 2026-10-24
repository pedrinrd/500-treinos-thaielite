/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { OFFER_CONFIG } from '../config/offer.ts';
import { ShieldCheck, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090909]/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone: 1-line wordmark with logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-white font-headline font-bold text-xl sm:text-2xl tracking-wide uppercase hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          <img
            src={OFFER_CONFIG.logoSrc}
            alt="Thai Elite Logo"
            className="w-8 h-8 object-contain"
            onError={(e) => {
              // Hide image if failed to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span>
            MUAY THAI <span className="text-[#E50914]">PRO</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]">
          <a
            href="#vsl"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Vídeo
          </a>
          <a
            href="#beneficios"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Benefícios
          </a>
          <a
            href="#treinos"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Treinos & Resultados
          </a>
          <a
            href="#oferta"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Planos
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Garantia & FAQ
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E50914] hover:bg-[#C40812] active:scale-[0.98] rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909] whitespace-nowrap shrink-0"
          >
            Acessar Treinos
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#262626] bg-[#0d0d0d] px-4 py-4 space-y-3">
          <a
            href="#vsl"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-white py-1"
          >
            Vídeo de Apresentação
          </a>
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-white py-1"
          >
            Benefícios
          </a>
          <a
            href="#treinos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-white py-1"
          >
            Treinos & Resultados
          </a>
          <a
            href="#oferta"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-white py-1"
          >
            Planos & Preços
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#A1A1AA] hover:text-white py-1"
          >
            Garantia & Perguntas Frequentes
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onCtaClick();
            }}
            className="w-full mt-2 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#E50914] hover:bg-[#C40812] rounded-md transition-colors"
          >
            Quero Acessar os Treinos
          </button>
        </div>
      )}
    </header>
  );
}
