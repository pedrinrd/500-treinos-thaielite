/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BonusSection } from './components/BonusSection.tsx';
import { OfferSection } from './components/OfferSection.tsx';
import { GuaranteeFaqSection } from './components/GuaranteeFaqSection.tsx';
import { UpgradeModal } from './components/UpgradeModal.tsx';
import {
  CheckoutNoticeModal,
  CheckoutState,
} from './components/CheckoutNoticeModal.tsx';
import { Footer } from './components/Footer.tsx';
import { OFFER_CONFIG } from './config/offer.ts';
import {
  initMetaPixel,
  trackMetaEvent,
  buildTrackedCheckoutUrl,
} from './utils/metaPixel.ts';

export default function App() {
  // Upgrade Modal state (triggered only on Basic plan button click)
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Active checkout notification state
  const [activeCheckout, setActiveCheckout] = useState<CheckoutState | null>(
    null
  );

  // Initialize Meta / LowTrack Pixel on page mount
  useEffect(() => {
    initMetaPixel();
  }, []);

  // Smooth scroll to offer section
  const handleScrollToOffer = () => {
    trackMetaEvent('ViewContent', {
      content_name: 'Thai Elite — Seção de Oferta',
      content_category: 'Treinamento Digital',
    });
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // User clicked "QUERO O BÁSICO POR R$ 10" -> Triggers the Upgrade Modal
  const handleSelectBasic = () => {
    trackMetaEvent('ViewContent', {
      content_name: 'Pop-up de Upgrade Thai Elite',
      value: OFFER_CONFIG.prices.upgrade,
      currency: 'BRL',
    });
    setIsUpgradeModalOpen(true);
  };

  // User clicked "QUERO O PRO POR R$ 25,90" -> Direct to Pro Checkout
  const handleSelectPro = () => {
    const targetUrl = buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.pro);
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Pacote Pro Completo — Thai Elite',
      value: OFFER_CONFIG.prices.pro,
      currency: 'BRL',
    });
    setActiveCheckout({
      planId: 'pro',
      planName: 'Pacote Pro Completo — Thai Elite',
      price: OFFER_CONFIG.prices.pro,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  // In modal: User accepted upgrade ("SIM, QUERO O PRO POR R$ 18,90")
  const handleConfirmUpgrade = () => {
    const targetUrl = buildTrackedCheckoutUrl(
      OFFER_CONFIG.checkouts.proUpgrade
    );
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Pacote Pro Completo — Thai Elite (Upgrade Especial)',
      value: OFFER_CONFIG.prices.upgrade,
      currency: 'BRL',
    });
    setIsUpgradeModalOpen(false);
    setActiveCheckout({
      planId: 'pro-upgrade',
      planName: 'Pacote Pro Completo — Thai Elite (Upgrade Especial)',
      price: OFFER_CONFIG.prices.upgrade,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  // In modal: User declined upgrade ("Não, continuar com o Básico por R$ 10")
  const handleDeclineToBasic = () => {
    const targetUrl = buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.basic);
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Pacote Básico — Thai Elite',
      value: OFFER_CONFIG.prices.basic,
      currency: 'BRL',
    });
    setIsUpgradeModalOpen(false);
    setActiveCheckout({
      planId: 'basic',
      planName: 'Pacote Básico — Thai Elite',
      price: OFFER_CONFIG.prices.basic,
      url: targetUrl,
    });
    try {
      window.open(targetUrl, '_blank');
    } catch {
      // fallback to modal
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col selection:bg-[#E50914] selection:text-white">
      <main className="flex-1">
        {/* SEÇÃO 1: HERO + VSL */}
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 2: BENEFÍCIOS + CARROSSEL ANIMADO EXCLUSIVO DE VÍDEOS DE TREINOS (9:16 REELS) */}
        <BenefitsSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 3: CARROSSEL ANIMADO EXCLUSIVO DE DEPOIMENTOS DE ALUNOS */}
        <TestimonialsSection />

        {/* SEÇÃO 4: 5 BÔNUS EXCLUSIVOS (FIEL À 3ª PRINT + BANNER R$ 179,00) */}
        <BonusSection onCtaClick={handleScrollToOffer} />

        {/* SEÇÃO 5: OFERTA (PACOTE BÁSICO R$ 10 & PACOTE PRO R$ 25,90) */}
        <OfferSection
          onSelectBasic={handleSelectBasic}
          onSelectPro={handleSelectPro}
        />

        {/* SEÇÃO 6: GARANTIA (7 DIAS) + FAQ (4 PERGUNTAS) + FINAL CTA */}
        <GuaranteeFaqSection onCtaClick={handleScrollToOffer} />
      </main>

      {/* POP-UP DE UPGRADE (Gatilho: Exclusivamente no clique do Pacote Básico) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onConfirmUpgrade={handleConfirmUpgrade}
        onDeclineToBasic={handleDeclineToBasic}
      />

      {/* Checkout notice & link modal */}
      <CheckoutNoticeModal
        checkoutState={activeCheckout}
        onClose={() => setActiveCheckout(null)}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
