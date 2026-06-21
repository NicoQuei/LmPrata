"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

/**
 * FAB de WhatsApp — presente a partir do fim do hero.
 * Na paleta editorial (creme/mocha), discreto — sem verde.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("fab")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("fab")}
      aria-label="Falar com o João no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-olive/40 bg-cream/95 px-5 py-3.5 font-body text-sm uppercase tracking-[0.16em] text-base shadow-[0_14px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-500 hover:bg-blue sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
