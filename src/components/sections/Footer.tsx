"use client";

import { BUSINESS, SITE, WHATSAPP_IS_PLACEHOLDER, waLink } from "@/lib/config";
import { InstagramIcon, WhatsAppIcon } from "../icons";
import { trackWhatsApp } from "@/lib/analytics";
import { EmbossWord, SparkleRow } from "../Brand";

/** FOOTER — limpo e enxuto: nome de fundo + contato + poucos links. */
export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Coleção", href: "#colecao" },
    { label: "Encomendas", href: "#servicos" },
    { label: "Como comprar", href: "#como-funciona" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-olive/15 px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
      {/* wordmark gigante em relevo no fundo */}
      <EmbossWord className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 text-[30vw] leading-none">
        JM PRATA
      </EmbossWord>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <SparkleRow className="mb-7" />

        {/* contato como protagonista */}
        <a
          href={waLink("final")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("final")}
          className="group inline-flex items-center gap-3 text-cream transition-colors hover:text-blue"
        >
          <WhatsAppIcon className="h-7 w-7 text-blue" />
          <span className="font-display text-3xl sm:text-4xl">
            Falar no WhatsApp
          </span>
        </a>

        <a
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-cream-dim transition-colors hover:text-blue"
        >
          <InstagramIcon className="h-5 w-5" />
          <span className="text-lg">{BUSINESS.instagramHandle}</span>
        </a>

        <p className="mt-4 text-cream-dim">
          {BUSINESS.city}/{BUSINESS.state} · {BUSINESS.hours}
        </p>

        {/* links rápidos */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-cream-dim transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* base */}
        <div className="mt-12 w-full border-t border-olive/20 pt-6">
          <p className="eyebrow text-cream-dim/70">
            © {year} {BUSINESS.name} · Site por{" "}
            <a
              href={SITE.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream transition-colors hover:text-blue"
            >
              {SITE.credit}
            </a>
          </p>
        </div>

        {WHATSAPP_IS_PLACEHOLDER && (
          <p className="mt-6 rounded border border-blue/40 bg-blue/10 px-4 py-2 text-xs text-blue">
            ⚠️ Dev: número de WhatsApp ainda é placeholder. Edite{" "}
            <code className="font-display">src/lib/config.ts</code>{" "}
            (WHATSAPP_NUMBER).
          </p>
        )}
      </div>
    </footer>
  );
}
