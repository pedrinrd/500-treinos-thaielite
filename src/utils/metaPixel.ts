/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Pixel helper supporting both LowTrack (lt_px_6b33dc4435fd)
 * and Meta Pixel (fbq), plus UTM parameter forwarding to Zuptos checkouts.
 */

import { OFFER_CONFIG } from '../config/offer.ts';

declare global {
  interface Window {
    pixelId?: string;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const UTMIFY_PIXEL_ID = '6abf39dabeae388a564376b3';
export const UTMIFY_SCRIPT_SRC =
  'https://cdn.utmify.com.br/scripts/pixel/pixel.js';
export const LOWTRACK_PIXEL_ID = 'lt_px_6b33dc4435fd';
export const LOWTRACK_SCRIPT_SRC = 'https://lowtrack.com.br/pixel.js';

export function initMetaPixel(rawConfig = OFFER_CONFIG.metaPixelId): void {
  if (typeof window === 'undefined') return;

  // 1. Ensure Pixel is initialized if not already loaded by index.html <head> script
  if (!window.pixelId) {
    window.pixelId = UTMIFY_PIXEL_ID;
  }
  const existingPixelScript = document.querySelector(
    `script[src="${UTMIFY_SCRIPT_SRC}"], script[src="${LOWTRACK_SCRIPT_SRC}"]`
  );
  if (!existingPixelScript) {
    const a = document.createElement('script');
    a.async = true;
    a.defer = true;
    a.src = UTMIFY_SCRIPT_SRC;
    (document.head || document.documentElement).appendChild(a);
  }

  // 2. If a numeric Meta Pixel ID is also provided, initialize fbq
  const numericMatch = rawConfig ? rawConfig.match(/^\d{10,20}$/) : null;
  if (numericMatch) {
    const cleanId = numericMatch[0];
    if (!window.fbq) {
      const n: any = (window.fbq = function (...args: unknown[]) {
        if (n.callMethod) {
          n.callMethod.apply(n, args);
        } else {
          n.queue.push(args);
        }
      });
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }

    window.fbq('init', cleanId);
    window.fbq('track', 'PageView');
  }
}

export function trackMetaEvent(
  eventName: 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Lead',
  params?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
}

/**
 * Appends current page query parameters (UTMs, fbclid, LowTrack params)
 * to the target Zuptos checkout URL so tracking is never lost.
 */
export function buildTrackedCheckoutUrl(baseUrl: string): string {
  if (typeof window === 'undefined' || !window.location.search) {
    return baseUrl;
  }
  try {
    const targetUrl = new URL(baseUrl);
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.forEach((value, key) => {
      if (!targetUrl.searchParams.has(key)) {
        targetUrl.searchParams.set(key, value);
      }
    });
    return targetUrl.toString();
  } catch {
    return baseUrl;
  }
}
