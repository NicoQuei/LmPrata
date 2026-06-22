"use client";

import { useEffect, useState } from "react";
import { waLink, BUSINESS } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { WhatsAppIcon } from "../icons";
import { Sparkle } from "../Brand";

const NAV = [
  { label: "Coleção", href: "#colecao" },
  { label: "Novidades", href: "#atelie" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

/** Header da loja: logo + navegação + WhatsApp. Fixo, sempre visível. */
export function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-olive/20 bg-base/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        {/* logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-cream transition-colors hover:text-blue"
        >
          <Sparkle size={13} className="text-blue" />
          <span className="font-display text-xl tracking-[0.04em]">
            {BUSINESS.name}
          </span>
        </a>

        {/* navegação (desktop) */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-sm text-cream/85 transition-colors hover:text-cream"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* WhatsApp */}
        <a
          href={waLink("topbar")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("topbar")}
          className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-base transition-colors hover:bg-blue"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar agora</span>
        </a>
      </div>
    </header>
  );
}
