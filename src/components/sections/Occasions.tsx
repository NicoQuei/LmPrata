"use client";

import { OCCASIONS } from "@/lib/content";
import { waLink } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { Section, SectionHead } from "../Section";
import { Frame } from "../Frame";
import { Reveal } from "../Reveal";
import { Sparkle, Tape, EmbossWord } from "../Brand";
import { ArrowIcon } from "../icons";

/* layout bento: 1º bloco grande, demais menores (assimétrico, editorial) */
const LAYOUT = [
  "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2", // Presente (destaque)
  "col-span-2 row-span-1 lg:col-span-4 lg:row-span-1", // Namoro & Noivado (banner)
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1", // Masculino
  "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1", // Pra mim
];

/** COMPRAR POR OCASIÃO — bento assimétrico que abre conversa qualificada. */
export function Occasions() {
  return (
    <Section id="ocasioes" surface className="relative overflow-hidden">
      <EmbossWord className="pointer-events-none absolute -right-[6%] top-1/2 -translate-y-1/2 text-[26vw] leading-none">
        JM
      </EmbossWord>

      <div className="relative z-10">
        <SectionHead
          eyebrow="COMPRE POR OCASIÃO"
          title="Pra cada momento, uma joia"
          sub="Não sabe por onde começar? Escolha a ocasião e eu te mostro as melhores opções no WhatsApp."
        />

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:auto-rows-[250px] lg:grid-cols-6">
          {OCCASIONS.map((o, i) => {
            const featured = i === 0;
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal
                key={o.id}
                delay={i * 80}
                className={`${LAYOUT[i] ?? ""} h-full`}
              >
                <a
                  href={waLink(o.waSource)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(o.waSource)}
                  className="card-lift group relative block h-full overflow-hidden rounded-[var(--radius)]"
                >
                  <Frame
                    src={o.src}
                    alt={o.title}
                    ratio="h-full w-full"
                    sizes={featured ? "(max-width:1024px) 100vw, 33vw" : "(max-width:1024px) 50vw, 33vw"}
                  />

                  {/* gradiente pra leitura */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 35%, color-mix(in srgb, var(--base) 90%, transparent) 100%)",
                    }}
                  />

                  {featured && (
                    <Tape rotate={-7} className="left-5 top-[-12px] z-20" />
                  )}

                  {/* número grande em relevo */}
                  <span className="deboss font-display absolute right-3 top-1 text-5xl leading-none sm:text-6xl">
                    {num}
                  </span>

                  <Sparkle
                    size={featured ? 18 : 13}
                    className="absolute left-3 top-3 text-blue opacity-80"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3
                      className={`font-display leading-[0.95] text-cream ${
                        featured ? "text-4xl sm:text-5xl" : "text-2xl"
                      }`}
                    >
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream-dim">{o.sub}</p>
                    <span className="eyebrow mt-3 inline-flex items-center gap-1.5 text-blue">
                      Ver opções
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
