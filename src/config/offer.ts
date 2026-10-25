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
  tagline: 'APRENDA MUAY THAI EM CASA, MESMO COMEÇANDO DO ZERO!',

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

  // Media assets (optimized WebP & faststart MP4 for instant mobile load)
  vslVideoSrc: '/assets/aistudio/vsl_nova__6c4375b2.mp4',
  vslPosterSrc: '/assets/aistudio/vsl-poster.webp',
  logoSrc:
    '/assets/aistudio/Logo_Esportivo_Thai_Elite_em_Vermelho_e_Prata_41134ae1.webp',
  logoPngFallbackSrc:
    '/assets/aistudio/Logo_Esportivo_Thai_Elite_em_Vermelho_e_Prata_41134ae1.png',
  bonusShowcaseImageSrc: '/assets/aistudio/image_74197a46.png',

  // Real training drill previews for the dedicated 9:16 vertical Reels carousel (prioritizing fundamentals & basic movements)
  drillClips: [
    {
      id: 'drill-1',
      numberLabel: 'TREINO #01',
      title: 'Fundamentos de Defesa, Esquiva e Resposta',
      subtitle: 'Demonstração prática de bloqueios, esquivas e retorno de golpes básicos.',
      category: 'Fundamentos & Defesa',
      duration: '01:01',
      videoSrc: '/assets/aistudio/Tecnica_29-D_9qbE1l_cae8af89.mp4',
    },
    {
      id: 'drill-4',
      numberLabel: 'TREINO #02',
      title: 'Técnica e Base para Chutes',
      subtitle: 'Exercícios práticos de rotação de quadril, equilíbrio e retorno de base.',
      category: 'Movimentos Básicos',
      duration: '00:18',
      videoSrc: '/assets/aistudio/Treino_503-Br_7r3Yo_861fe170.mp4',
    },
    {
      id: 'drill-8',
      numberLabel: 'TREINO #03',
      title: 'Treino de Movimentação e Condicionamento em Casa',
      subtitle: 'Rotina prática de exercícios para desenvolver fôlego, base e coordenação.',
      category: 'Prática em Casa',
      duration: '00:39',
      videoSrc:
        '/assets/aistudio/94865300-717d-466e-876b-0472e8c03bed-BuUE_Uas_4e73b901.mp4',
    },
    {
      id: 'drill-7',
      numberLabel: 'TREINO #04',
      title: 'Exercícios de Base: Joelhada e Chute Frontal (Teep)',
      subtitle: 'Demonstração de coordenação de pernas combinada com golpes fundamentais.',
      category: 'Joelhadas & Chutes',
      duration: '00:20',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro__2__679ae61e.mp4',
    },
    {
      id: 'drill-3',
      numberLabel: 'TREINO #05',
      title: 'Combinações Básicas em 3 Níveis',
      subtitle: 'Sequência coordenando socos e chutes em diferentes alturas de guarda.',
      category: 'Combinações em Vídeo',
      duration: '00:11',
      videoSrc: '/assets/aistudio/Treino_32-ib7gM5gP_046bb0ac.mp4',
    },
    {
      id: 'drill-2',
      numberLabel: 'TREINO #06',
      title: 'Sequência de Socos, Chutes Baixos e Joelhadas',
      subtitle: 'Demonstração de ritmo e conexão entre golpes de mão, chute e joelho.',
      category: 'Sequências de Golpes',
      duration: '00:26',
      videoSrc: '/assets/aistudio/Treino_13-CjV3z0c__64573131.mp4',
    },
    {
      id: 'drill-6',
      numberLabel: 'TREINO #07',
      title: 'Noção de Distância e Tempo de Golpe',
      subtitle: 'Demonstração de controle de distância longa, média e curta no Muay Thai.',
      category: 'Controle de Distância',
      duration: '00:29',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro-2_ee4a450e.mp4',
    },
    {
      id: 'drill-5',
      numberLabel: 'TREINO #08',
      title: 'Fortalecimento e Postura para Clinch',
      subtitle: 'Exercícios complementares de postura, core, ombros e joelhadas.',
      category: 'Preparação Física',
      duration: '00:10',
      videoSrc:
        '/assets/aistudio/14143778-a1ef-4032-8ffb-1ac77666a8ff-CO-ITNjV_bc1d64f4.mp4',
    },
  ] as DrillClip[],

  // Real customer social proof reviews for the dedicated Testimonials Carousel
  testimonials: [
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
      id: 'test-4',
      author: 'Junior Kbeça',
      handle: '@rjunior_jf10',
      tag: 'Acesso pelo Celular',
      imageSrc: '/assets/aistudio/testimonial-3-800_8cb67df6.webp',
      quote:
        'Suporte super rápido, consegui logar no aplicativo pelo celular na mesma hora. Deu tudo certo, obrigado!',
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
      id: 'test-3',
      author: 'Antônio Carlos',
      handle: '@kongao44',
      tag: 'Aluno Verificado',
      imageSrc: '/assets/aistudio/testimonial-2-800_137b88fa.webp',
      quote:
        'Agradeço pela atenção! Depois vou comprar outros materiais com vocês. Muito obrigado, Osss!',
    },
    {
      id: 'test-1',
      author: 'Lucas Ferreira',
      handle: '@lucasferreira.mt',
      tag: 'Praticante & Instrutor',
      imageSrc: '/assets/aistudio/depoimento-1-UJHwJDK__fb0a57c7.webp',
      quote:
        'Já comprei vários conteúdos antes e nenhum chega perto da qualidade desse. Consigo montar os treinos da semana sem quebrar a cabeça. Vale cada centavo!',
    },
    {
      id: 'test-2',
      author: 'Matheus Lima',
      handle: '@matheuslima.mt',
      tag: 'Praticante de Muay Thai',
      imageSrc: '/assets/aistudio/depoimento-2-1zoWddI4_46bb19a3.webp',
      quote:
        'O que mais me chamou atenção foi a organização dos vídeos e combinações. As sequências já vêm prontas e isso facilita muito pra praticar!',
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
        'Sequências de golpes em vídeo para você observar a técnica e praticar no seu ritmo.',
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

  // FAQ (prioritizing beginner level, mobile access, equipment needed, single payment, and difference between plans)
  faq: [
    {
      question: 'Sou iniciante e estou começando do zero. O Thai Elite é para mim?',
      answer:
        'Sim! O Thai Elite é uma biblioteca digital de treinamentos em vídeo onde você pode observar fundamentos como postura, guarda, socos, chutes, joelhadas, defesas e combinações para revisar e praticar no seu próprio ritmo. Importante: o material serve como biblioteca de consulta e prática pessoal, não substituindo a orientação presencial de um instrutor.',
    },
    {
      question: 'Preciso de equipamentos para praticar em casa?',
      answer:
        'Diversos vídeos de fundamentos, movimentação, defesas, sombra e condicionamento físico podem ser estudados e praticados em casa sem equipamentos. Já algumas demonstrações da biblioteca utilizam saco de pancadas, aparadores (manoplas) ou acessórios de treino caso você tenha esses materiais em casa ou queira consultar na academia.',
    },
    {
      question: 'Como recebo meu acesso e posso assistir pelo celular?',
      answer:
        'Logo após a confirmação do pagamento, os dados de acesso são enviados imediatamente para o seu e-mail e WhatsApp. Você pode assistir aos vídeos pelo celular, tablet ou computador, de onde estiver.',
    },
    {
      question: 'O pagamento é único ou tem mensalidade?',
      answer:
        'O pagamento é 100% único, sem mensalidades ou cobranças recorrentes. Você paga apenas uma vez o valor do plano escolhido (a partir de R$ 10,00) e conta com 7 dias de garantia.',
    },
    {
      question: 'Qual a diferença entre os planos Essencial e Completo?',
      answer:
        'O Plano Essencial (R$ 10,00) inclui o acesso à biblioteca principal com 500 treinamentos em vídeo. Já o Plano Completo (R$ 25,90) libera os 500 treinamentos em vídeo mais os 5 Bônus Exclusivos: 20 Combinações de Ataque Profissionais, 50 Treinos Físicos para Muay Thai, 50 Técnicas de Defesa e Contra-Ataque, Guia de Fundamentos do Muay Thai e Guia de Recuperação Muscular.',
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
