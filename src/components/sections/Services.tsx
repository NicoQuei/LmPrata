"use client";

import { SERVICES, type Service } from "@/lib/content";
import { waLink } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { Section, SectionHead } from "../Section";
import { Reveal } from "../Reveal";
import { Frame } from "../Frame";
import { Hallmark } from "../Hallmark";
import { ArrowIcon, TrustIcon } from "../icons";

/* posições do mosaico (1º grande, os outros menores) */
const TILE = [
  "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
  "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
];

/** TAMBÉM FAZEMOS — mosaico (bento) com foto de fundo e nome por cima. */
export function Services() {
  return (
    <Section id="servicos">
      <SectionHead
        eyebrow="Além da loja"
        title="Também fazemos sob medida"
        sub="Não achou na coleção? A gente encomenda, conserta e faz alianças do seu jeito."
      />

      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[230px] lg:grid-cols-3 lg:auto-rows-[260px]">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 90} className={`${TILE[i] ?? ""} h-full`}>
            <Tile service={s} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Tile({ service: s, featured }: { service: Service; featured: boolean }) {
  return (
    <a
      href={waLink(s.waSource)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(s.waSource)}
      className="group relative block h-full overflow-hidden rounded-[var(--radius)]"
    >
      {/* foto de fundo */}
      <div className="absolute inset-0">
        <Frame
          src={s.src}
          alt={s.title}
          ratio="h-full w-full"
          className="!rounded-none !border-0"
          sizes={featured ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 50vw, 33vw"}
        />
      </div>

      {/* escurecimento */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--base) 25%, transparent) 0%, transparent 35%, color-mix(in srgb, var(--base) 88%, transparent) 100%)",
        }}
      />

      {/* conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <TrustIcon name={s.icon} className="h-6 w-6 text-blue" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream transition-all duration-300 group-hover:border-blue group-hover:bg-blue group-hover:text-base">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>

        <div>
          <Hallmark className="text-cream/70">{s.hallmark}</Hallmark>
          <h3
            className={`font-display leading-[0.95] text-cream ${
              featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {s.title}
          </h3>
          {featured && (
            <p className="mt-2 max-w-sm text-sm text-cream/85">
              {s.items.join(" · ")}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
