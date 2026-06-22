"use client";

import { BUSINESS, SITE, waLink } from "@/lib/config";
import { InstagramIcon, WhatsAppIcon, TrustIcon } from "../icons";
import { trackWhatsApp } from "@/lib/analytics";
import { EmbossWord, Sparkle } from "../Brand";

export function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Loja",
      links: [
        { label: "Coleção", href: "#colecao" },
        { label: "Novidades", href: "#atelie" },
        { label: "Comprar por ocasião", href: "#ocasioes" },
        { label: "Como comprar", href: "#como-funciona" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { label: "Encomendas", href: "#servicos" },
        { label: "Consertos", href: "#servicos" },
        { label: "Alianças", href: "#servicos" },
        { label: "Dúvidas frequentes", href: "#faq" },
      ],
    },
  ];

  const selos = [
    { icon: "box", label: "Pronta entrega" },
    { icon: "card", label: "Pix, cartão e parcelamento" },
    { icon: "shield", label: "Garantia em toda peça" },
  ];

  return (
    <footer id="contato" className="relative overflow-hidden border-t border-olive/20">
      {/* faixa de selos */}
      <div className="border-b border-olive/20 bg-mocha/30 px-5 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl sm:grid-cols-3">
          {selos.map((s) => (
            <div key={s.label} className="flex items-center justify-center gap-3 py-5">
              <TrustIcon name={s.icon} className="h-5 w-5 text-blue" />
              <span className="eyebrow text-cream/90">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* corpo */}
      <div className="relative px-5 py-16 sm:px-8 sm:py-20">
        <EmbossWord className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 text-[27vw] leading-none">
          JM PRATA
        </EmbossWord>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* marca + contato */}
          <div>
            <div className="flex items-center gap-2 text-cream">
              <Sparkle size={14} className="text-blue" />
              <span className="font-display text-3xl">{BUSINESS.name}</span>
            </div>
            <p className="mt-4 max-w-[32ch] leading-relaxed text-cream-dim">
              Loja de joias em prata 950 e ouro 18k. Pronta entrega, encomendas
              sob medida e consertos — atendimento direto, sem intermediário.
            </p>
            <a
              href={waLink("final")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("final")}
              className="mt-6 inline-flex items-center gap-2.5 rounded-[var(--radius)] bg-cream px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-base transition-colors hover:bg-blue"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          {/* colunas de links */}
          {cols.map((c) => (
            <nav key={c.title}>
              <p className="eyebrow text-blue">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-cream-dim transition-colors hover:text-cream"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* atendimento */}
          <div>
            <p className="eyebrow text-blue">Atendimento</p>
            <p className="mt-4 text-sm leading-relaxed text-cream-dim">
              {BUSINESS.city}/{BUSINESS.state}
              <br />
              {BUSINESS.hours}
            </p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cream-dim transition-colors hover:text-blue"
            >
              <InstagramIcon className="h-4 w-4" />
              {BUSINESS.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* base */}
      <div className="relative z-10 border-t border-olive/20 px-5 py-6 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="eyebrow text-cream-dim/70">
            © {year} {BUSINESS.name}
          </p>
          <a
            href="#top"
            className="eyebrow text-cream-dim/70 transition-colors hover:text-cream"
          >
            Voltar ao topo ↑
          </a>
          <p className="eyebrow text-cream-dim/70">
            Site por{" "}
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
      </div>
    </footer>
  );
}
