import test from 'node:test';
import assert from 'node:assert/strict';
import {
  OFFER_CONFIG,
  calculateUpgradeSavings,
  calculateUpgradeDelta,
  formatBRL,
} from './offer.ts';

test('Offer pricing matches exact user requirements', () => {
  assert.equal(OFFER_CONFIG.prices.basic, 10.0);
  assert.equal(OFFER_CONFIG.prices.pro, 25.9);
  assert.equal(OFFER_CONFIG.prices.upgrade, 18.9);
  assert.equal(OFFER_CONFIG.prices.bonusTotalValue, 179.0);
});

test('Upgrade savings calculation is exactly R$ 7,00', () => {
  const savings = calculateUpgradeSavings(
    OFFER_CONFIG.prices.pro,
    OFFER_CONFIG.prices.upgrade
  );
  assert.equal(savings, 7.0);
});

test('Upgrade delta over basic is exactly R$ 8,90', () => {
  const delta = calculateUpgradeDelta(
    OFFER_CONFIG.prices.upgrade,
    OFFER_CONFIG.prices.basic
  );
  assert.equal(delta, 8.9);
});

test('Product name is Thai Elite and VSL points to new fast-rendered video', () => {
  assert.equal(OFFER_CONFIG.productName, 'Thai Elite');
  assert.equal(
    OFFER_CONFIG.vslVideoSrc,
    '/assets/aistudio/vsl_nova__6c4375b2.mp4'
  );
  assert.equal(OFFER_CONFIG.vslPosterSrc, '/assets/aistudio/vsl-poster.webp');
});

test('Checkout URLs are verified Zuptos checkout endpoints', () => {
  const { basic, pro, proUpgrade } = OFFER_CONFIG.checkouts;
  assert.equal(basic, 'https://app.zuptos.com.br/checkout/3bc50bf7cae82cc2');
  assert.equal(pro, 'https://app.zuptos.com.br/checkout/6f58f92ff68eb1ea');
  assert.equal(proUpgrade, 'https://app.zuptos.com.br/checkout/b59b2e457b833f24');
});

test('5 Exclusive Bonuses are configured properly', () => {
  assert.equal(OFFER_CONFIG.bonuses.length, 5);
  assert.equal(OFFER_CONFIG.bonuses[0].badge, 'BÔNUS 01');
  assert.equal(OFFER_CONFIG.bonuses[3].featuredBorder, true);
});

test('Drill clips and Testimonials carousels have complete items', () => {
  assert.ok(OFFER_CONFIG.drillClips.length >= 6);
  assert.ok(OFFER_CONFIG.testimonials.length >= 6);
});

test('Brazilian Real format helper formats values properly', () => {
  const formatted = formatBRL(25.9);
  assert.ok(formatted.includes('25,90'));
});

test('FAQ covers beginner level, equipment, mobile access, single payment, and plan differences', () => {
  assert.equal(
    OFFER_CONFIG.tagline,
    'APRENDA MUAY THAI EM CASA, MESMO COMEÇANDO DO ZERO!'
  );
  assert.equal(OFFER_CONFIG.faq.length, 5);
  assert.equal(
    OFFER_CONFIG.faq[0].question,
    'Sou iniciante e estou começando do zero. O Thai Elite é para mim?'
  );
  assert.equal(
    OFFER_CONFIG.faq[1].question,
    'Preciso de equipamentos para praticar em casa?'
  );
  assert.equal(
    OFFER_CONFIG.faq[2].question,
    'Como recebo meu acesso e posso assistir pelo celular?'
  );
  assert.equal(
    OFFER_CONFIG.faq[3].question,
    'O pagamento é único ou tem mensalidade?'
  );
  assert.equal(
    OFFER_CONFIG.faq[4].question,
    'Qual a diferença entre os planos Essencial e Completo?'
  );
});

test('Pixel ID and script loader are configured properly', async () => {
  const {
    UTMIFY_PIXEL_ID,
    UTMIFY_SCRIPT_SRC,
    LOWTRACK_PIXEL_ID,
    buildTrackedCheckoutUrl,
  } = await import('../utils/metaPixel.ts');
  assert.equal(UTMIFY_PIXEL_ID, '6abf39dabeae388a564376b3');
  assert.equal(
    UTMIFY_SCRIPT_SRC,
    'https://cdn.utmify.com.br/scripts/pixel/pixel.js'
  );
  assert.equal(LOWTRACK_PIXEL_ID, 'lt_px_6b33dc4435fd');
  assert.equal(
    buildTrackedCheckoutUrl(OFFER_CONFIG.checkouts.pro),
    'https://app.zuptos.com.br/checkout/6f58f92ff68eb1ea'
  );
});
