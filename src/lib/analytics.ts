/**
 * Tracking de conversão. Dispara o MESMO evento no Meta Pixel e no GA4
 * a cada clique de WhatsApp, com o parâmetro de qual seção originou.
 * Seguro chamar mesmo sem IDs configurados (vira no-op).
 */

import type { WaSource } from "./config";

type Fbq = (...args: unknown[]) => void;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function trackWhatsApp(source: WaSource) {
  if (typeof window === "undefined") return;

  // Meta Pixel — evento padrão Contact + custom com a origem
  try {
    window.fbq?.("track", "Contact", { content_name: source });
    window.fbq?.("trackCustom", "WhatsAppClick", { section: source });
  } catch {
    /* no-op */
  }

  // GA4 — evento generate_lead com a origem
  try {
    window.gtag?.("event", "generate_lead", {
      method: "whatsapp",
      section: source,
    });
  } catch {
    /* no-op */
  }
}
