/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Central configuration for Thai Elite commercial offer,
 * prices, checkout URLs, guarantee terms, bonuses and multimedia assets.
 */

export interface PricingPlan {
  id: 'basic' | 'pro' | 'pro-upgrade';
  name: string;
  tag?: string;
  price: number;
  priceFormatted: string;
  periodText: string;
  description: string;
  checkoutUrl: string;
  benefits: string[];
  featured?: boolean;
}

export interface DrillClip {
  id: string;
  numberLabel: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  videoSrc: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  handle: string;
  tag: string;
  imageSrc: string;
  quote: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  highlightRed: string;
  title: string;
  description?: string;
  bullets: string[];
  ctaLabel: string;
  featuredBorder?: boolean;
  wideCard?: boolean;
  previewVideoSrc?: string;
}

export const OFFER_CONFIG = {
  productName: 'Thai Elite',
  category: 'Treinamento Digital',
  tagline: 'SEU PRÓXIMO TREINO DE MUAY THAI JÁ ESTÁ ORGANIZADO.',

  // LowTrack / Meta Pixel ID configurado
  metaPixelId:
    (typeof import.meta !== 'undefined' &&
      (import.meta as { env?: Record<string, string> }).env
        ?.VITE_META_PIXEL_ID) ||
    'lt_px_6b33dc4435fd',

  // Official checkout links (Zuptos)
  checkouts: {
    basic: 'https://app.zuptos.com.br/checkout/3bc50bf7cae82cc2',
    pro: 'https://app.zuptos.com.br/checkout/6f58f92ff68eb1ea',
    proUpgrade: 'https://app.zuptos.com.br/checkout/b59b2e457b833f24',
  },

  prices: {
    basic: 10.0,
    pro: 25.9,
    upgrade: 18.9,
    bonusTotalValue: 179.0,
  },

  // Guarantee
  guaranteeDays: 7,
  guaranteeText:
    'Conheça os materiais e avalie se atendem às suas necessidades. Caso não fique satisfeito, solicite o reembolso dentro do prazo e das condições da garantia.',

  // Media assets (optimized WebP for instant mobile load, keeping original PNG intact)
  vslVideoSrc:
    '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro_d0ae31dc.mp4',
  vslPosterSrc: '/assets/aistudio/vsl-poster.webp',
  logoSrc:
    '/assets/aistudio/Logo_Esportivo_Thai_Elite_em_Vermelho_e_Prata_41134ae1.webp',
  logoPngFallbackSrc:
    '/assets/aistudio/Logo_Esportivo_Thai_Elite_em_Vermelho_e_Prata_41134ae1.png',
  bonusShowcaseImageSrc: '/assets/aistudio/image_74197a46.png',

  // Real training drill previews for the dedicated 9:16 vertical Reels carousel
  drillClips: [
    {
      id: 'drill-1',
      numberLabel: 'TREINO #01',
      title: 'Bloqueio, Esquiva & Contra-Ataque',
      subtitle: '5 formas eficazes de responder ao golpe do oponente com precisão.',
      category: 'Defesa & Resposta',
      duration: '01:01',
      videoSrc: '/assets/aistudio/Tecnica_29-D_9qbE1l_cae8af89.mp4',
    },
    {
      id: 'drill-2',
      numberLabel: 'TREINO #02',
      title: 'Sequência Explosiva de Manoplas',
      subtitle: 'Ritmo intenso de socos cruzados, chutes baixos e joelhadas no pad.',
      category: 'Combinações no Pad',
      duration: '00:26',
      videoSrc: '/assets/aistudio/Treino_13-CjV3z0c__64573131.mp4',
    },
    {
      id: 'drill-3',
      numberLabel: 'TREINO #03',
      title: 'Drills Diários: 3 Alvos de Ataque',
      subtitle: 'Combinação rosto, fígado e coxa para quebrar a guarda adversária.',
      category: 'Drills de Combate',
      duration: '00:11',
      videoSrc: '/assets/aistudio/Treino_32-ib7gM5gP_046bb0ac.mp4',
    },
    {
      id: 'drill-4',
      numberLabel: 'TREINO #04',
      title: '3 Drills para Chutes Mais Rápidos',
      subtitle: 'Exercícios de rotação de quadril, equilíbrio e retorno de base.',
      category: 'Técnica de Chute',
      duration: '00:18',
      videoSrc: '/assets/aistudio/Treino_503-Br_7r3Yo_861fe170.mp4',
    },
    {
      id: 'drill-5',
      numberLabel: 'TREINO #05',
      title: 'Força Específica para o Clinch',
      subtitle: 'Condicionamento de core, ombros e joelhadas com carga para dominar o clinch.',
      category: 'Preparação Física',
      duration: '00:10',
      videoSrc:
        '/assets/aistudio/14143778-a1ef-4032-8ffb-1ac77666a8ff-CO-ITNjV_bc1d64f4.mp4',
    },
    {
      id: 'drill-6',
      numberLabel: 'TREINO #06',
      title: 'Guia de Padwork: Potência e Distância',
      subtitle: 'Controle de distância longa, média e curta com reação imediata.',
      category: 'Domínio de Ringue',
      duration: '00:29',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro-2_ee4a450e.mp4',
    },
    {
      id: 'drill-7',
      numberLabel: 'TREINO #07',
      title: 'Treino de Pernas & Explosão',
      subtitle: 'Circuito prático de afundo com joelhada e agachamento com teep.',
      category: 'Potência de Pernas',
      duration: '00:20',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro__2__679ae61e.mp4',
    },
    {
      id: 'drill-8',
      numberLabel: 'TREINO #08',
      title: 'Condicionamento Completo em Casa',
      subtitle: 'Rotina intensa sem equipamentos para resistência cardiovascular e força.',
      category: 'Treino em Casa',
      duration: '00:39',
      videoSrc:
        '/assets/aistudio/94865300-717d-466e-876b-0472e8c03bed-BuUE_Uas_4e73b901.mp4',
    },
  ] as DrillClip[],

  // Real customer social proof reviews for the dedicated Testimonials Carousel
  testimonials: [
    {
      id: 'test-1',
      author: 'Lucas Ferreira',
      handle: '@lucasferreira.mt',
      tag: 'Instrutor de Muay Thai',
      imageSrc: '/assets/aistudio/depoimento-1-UJHwJDK__fb0a57c7.webp',
      quote:
        'Já comprei vários conteúdos antes e nenhum chega perto da qualidade desse. Consigo montar os treinos da semana sem quebrar a cabeça. Vale cada centavo!',
    },
    {
      id: 'test-2',
      author: 'Matheus Lima',
      handle: '@matheuslima.mt',
      tag: 'Praticante & Atleta',
      imageSrc: '/assets/aistudio/depoimento-2-1zoWddI4_46bb19a3.webp',
      quote:
        'O que mais me chamou atenção foi o de manoplas e os planos de aula. As sequências já vêm prontas e isso facilita muito pra aplicar na academia!',
    },
    {
      id: 'test-3',
      author: 'Antônio Carlos',
      handle: '@kongao44',
      tag: 'Aluno Verificado',
      imageSrc: '/assets/aistudio/testimonial-2-800_137b88fa.webp',
      quote:
        'Agradeço pela atenção! Depois vou comprar outros materiais com vocês. Muito obrigado, Osss!',
    },
    {
      id: 'test-4',
      author: 'Junior Kbeça',
      handle: '@rjunior_jf10',
      tag: 'Acesso Imediato',
      imageSrc: '/assets/aistudio/testimonial-3-800_8cb67df6.webp',
      quote:
        'Suporte super rápido, consegui logar no aplicativo pelo celular na mesma hora. Deu tudo certo, obrigado!',
    },
    {
      id: 'test-5',
      author: 'Sonny',
      handle: '@sonny7musicc',
      tag: 'Entrega via WhatsApp',
      imageSrc: '/assets/aistudio/depoimento-3-CaIhWknC_2c36b7fe.webp',
      quote:
        'Acabei de fazer a compra e já recebi meu acesso direto pelo WhatsApp e e-mail. Atendimento nota 10!',
    },
    {
      id: 'test-6',
      author: 'Alunos na Comunidade',
      handle: 'Comentários Reais',
      tag: 'Avaliação 5 Estrelas',
      imageSrc: '/assets/aistudio/2-8_1.png_0aec4e8a.webp',
      quote:
        'Material Top! Já baixei o meu e vou consultar sempre que precisar. Muito bom pra quem tá começando e evoluindo na área!',
    },
    {
      id: 'test-7',
      author: 'Praticantes Thai Elite',
      handle: 'Feedbacks no Instagram',
      tag: 'Aprovação Total',
      imageSrc: '/assets/aistudio/3-6.png_24c8966d.webp',
      quote:
        'Eu tenho esse material, me ajuda muuuuito nos treinos. Muita informação de qualidade, comprei e recomendo!',
    },
  ] as TestimonialItem[],

  // 5 Exclusive Bonuses (matching the 3rd screenshot design)
  bonuses: [
    {
      id: 'bonus-01',
      badge: 'BÔNUS 01',
      highlightRed: '20',
      title: 'COMBINAÇÕES DE ATAQUE PROFISSIONAIS',
      description:
        'Sequências de golpes testadas e utilizadas por lutadores profissionais.',
      bullets: [
        'Vídeos em alta qualidade',
        'Passo a passo detalhado',
        'Aplicação prática no treino',
      ],
      ctaLabel: 'ASSISTIR AGORA',
      wideCard: true,
      previewVideoSrc: '/assets/aistudio/Treino_13-CjV3z0c__64573131.mp4',
    },
    {
      id: 'bonus-02',
      badge: 'BÔNUS 02',
      highlightRed: '50',
      title: 'TREINOS FÍSICOS PARA MUAY THAI',
      bullets: [
        'Treinos de força, resistência e condicionamento',
        'Programas de curta e longa duração',
        'Melhore seu desempenho no tatame e na vida',
      ],
      ctaLabel: 'ACESSAR BÔNUS',
      previewVideoSrc:
        '/assets/aistudio/14143778-a1ef-4032-8ffb-1ac77666a8ff-CO-ITNjV_bc1d64f4.mp4',
    },
    {
      id: 'bonus-03',
      badge: 'BÔNUS 03',
      highlightRed: '50',
      title: 'TÉCNICAS DE DEFESA E CONTRA-ATAQUE',
      bullets: [
        'Defesas eficientes e precisas',
        'Contra-ataques rápidos e eficazes',
        'Aumente seu poder de reação',
      ],
      ctaLabel: 'ACESSAR BÔNUS',
      previewVideoSrc: '/assets/aistudio/Tecnica_29-D_9qbE1l_cae8af89.mp4',
    },
    {
      id: 'bonus-04',
      badge: 'BÔNUS 04',
      highlightRed: 'GUIA',
      title: 'DE FUNDAMENTOS DO MUAY THAI',
      bullets: [
        'Postura, movimentação e guarda',
        'Base sólida para evoluir',
        'Ideal para iniciantes e intermediários',
      ],
      ctaLabel: 'ACESSAR BÔNUS',
      featuredBorder: true,
      previewVideoSrc: '/assets/aistudio/Treino_32-ib7gM5gP_046bb0ac.mp4',
    },
    {
      id: 'bonus-05',
      badge: 'BÔNUS 05',
      highlightRed: 'GUIA',
      title: 'DE RECUPERAÇÃO MUSCULAR',
      bullets: [
        'Previna lesões',
        'Volte mais rápido aos treinos',
        'Cuide do seu corpo',
      ],
      ctaLabel: 'ACESSAR BÔNUS',
      previewVideoSrc:
        '/assets/aistudio/94865300-717d-466e-876b-0472e8c03bed-BuUE_Uas_4e73b901.mp4',
    },
  ] as BonusItem[],

  // FAQ
  faq: [
    {
      question: 'Como recebo meu acesso?',
      answer:
        'Logo após a confirmação do pagamento, os dados de login e o link de acesso chegam imediatamente no seu e-mail cadastrado e também pelo WhatsApp. Você pode começar a consultar os treinos em menos de 2 minutos.',
    },
    {
      question: 'Posso acessar pelo celular?',
      answer:
        'Sim! A plataforma foi desenvolvida pensando no uso prático direto no tatame, na academia ou em casa. Você pode assistir a todos os treinos em vídeo e consultar as fichas pelo smartphone, tablet ou computador.',
    },
    {
      question: 'Preciso pagar mensalidade?',
      answer:
        'Não. O pagamento é 100% único, sem nenhuma taxa oculta ou cobrança recorrente. Você paga apenas uma vez e tem acesso à sua biblioteca de treinos.',
    },
    {
      question: 'Qual a diferença entre Básico e Pro?',
      answer:
        'O Pacote Básico inclui a biblioteca principal de treinos em vídeo, sessões e combinações estruturadas. Já o Pacote Pro conta com o material completo: todos os 500 treinos em vídeo + os 5 Bônus Exclusivos (20 Combinações Profissionais, 50 Treinos Físicos, 50 Técnicas de Defesa e Contra-Ataque, Guia de Fundamentos e Guia de Recuperação Muscular).',
    },
  ],
};

// Pure calculation utilities for pricing & upgrade logic
export function calculateUpgradeSavings(proPrice: number, upgradePrice: number): number {
  return Number((proPrice - upgradePrice).toFixed(2));
}

export function calculateUpgradeDelta(upgradePrice: number, basicPrice: number): number {
  return Number((upgradePrice - basicPrice).toFixed(2));
}

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}
