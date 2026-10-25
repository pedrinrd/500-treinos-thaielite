/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { OFFER_CONFIG } from '../config/offer.ts';
import { Shield, Lock, Award, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#070707] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#71717A]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Brand Lockup */}
        <div className="flex items-center justify-center gap-2">
          <img
            src={OFFER_CONFIG.logoSrc}
            alt="Thai Elite"
            width={24}
            height={24}
            loading="lazy"
            decoding="async"
            className="w-6 h-6 object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-headline font-bold text-base text-white tracking-wider uppercase">
            THAI <span className="text-[#E50914]">ELITE</span>
          </span>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#A1A1AA] text-xs">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pagamento 100% Criptografado
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#E50914]" />
            Garantia Incondicional de 7 Dias
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            Acesso Digital Imediato
          </span>
        </div>

        {/* Legal Disclaimer */}
        <p className="max-w-2xl mx-auto text-[11px] text-[#555] leading-relaxed">
          Este produto não substitui o acompanhamento médico ou de um profissional de educação física credenciado. Consulte sempre seu médico antes de iniciar qualquer atividade física de alta intensidade.
        </p>

        {/* Copyright */}
        <div className="pt-4 border-t border-[#141414] text-[11px] text-[#444]">
          <p>© {currentYear} Thai Elite • Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
