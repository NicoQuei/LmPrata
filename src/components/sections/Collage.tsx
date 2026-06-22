"use client";

import { PRODUCTS, type Product } from "@/lib/content";
import { waProductLink, formatBRL } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { Section, SectionHead } from "../Section";
import { Frame } from "../Frame";
import { Reveal } from "../Reveal";
import { Hallmark } from "../Hallmark";
import { EmbossWord, CircularSeal, Sparkle } from "../Brand";
import { WhatsAppIcon, ArrowIcon } from "../icons";

/** seleção de "novidades" (ids escolhidos a dedo da lista de produtos) */
const find = (id: string) => PRODUCTS.find((p) => p.id === id)!;
const FEATURED = find("p8");
const SIDE = [find("p1"), find("p4"), find("p9")];

/** NOVIDADES — vitrine com peça em destaque + lista, preços e selo (escuro). */
export function Collage() {
  return (
    <Section id="atelie" className="relative overflow-hidden">
      <EmbossWord className="pointer-events-none absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 text-[30vw] leading-none">
        NOVO
      </EmbossWord>

      <div className="relative z-10">
        <SectionHead
          eyebrow="COLEÇÃO · NOVIDADES"
          title="Peças que acabaram de chegar"
          sub="Prata 950 e ouro 18k. Pronta entrega ou sob encomenda."
        />

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* destaque */}
          <Reveal>
            <FeaturedCard product={FEATURED} />
          </Reveal>

          {/* lista */}
          <div className="relative space-y-4">
            <CircularSeal
              size={120}
              className="absolute -left-16 -top-14 z-30 hidden drop-shadow-[0_8px_20px_rgba(0,0,0,0.55)] lg:block"
            />
            {SIDE.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <MiniCard product={p} />
              </Reveal>
            ))}
            <Reveal delay={SIDE.length * 90}>
              <a
                href="#colecao"
                className="eyebrow inline-flex items-center gap-1.5 pt-1 text-blue transition-colors hover:text-cream"
              >
                Ver toda a coleção
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

function NewBadge() {
  return (
    <span className="eyebrow absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-blue px-2.5 py-1 text-base">
      <Sparkle size={9} className="text-base" /> Novo
    </span>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  const priceLabel = formatBRL(product.price);
  return (
    <a
      href={waProductLink(product.name, priceLabel)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("produto")}
      className="card-lift group relative block overflow-hidden rounded-[var(--radius)] border border-olive/20 bg-mocha"
    >
      <div className="relative">
        <NewBadge />
        <Frame
          src={product.src}
          alt={product.name}
          eyebrow={product.material}
          ratio="aspect-[4/5]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="flex items-end justify-between gap-4 p-5">
        <div>
          <h3 className="font-display text-2xl leading-tight text-cream">
            {product.name}
          </h3>
          <p className="mt-1 font-display text-xl text-cream">{priceLabel}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-base transition-transform group-hover:scale-[1.03]">
          <WhatsAppIcon className="h-4 w-4" />
          Comprar
        </span>
      </div>
    </a>
  );
}

function MiniCard({ product }: { product: Product }) {
  const priceLabel = formatBRL(product.price);
  return (
    <a
      href={waProductLink(product.name, priceLabel)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp("produto")}
      className="card-lift group flex items-center gap-4 rounded-[var(--radius)] border border-olive/20 bg-mocha p-3 transition-colors hover:border-blue/40"
    >
      <div className="w-24 shrink-0 sm:w-28">
        <Frame
          src={product.src}
          alt={product.name}
          ratio="aspect-square"
          sizes="120px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <Hallmark className="text-cream-dim/80">{product.material}</Hallmark>
        <h3 className="font-display mt-0.5 truncate text-lg text-cream">
          {product.name}
        </h3>
        <p className="font-display text-lg text-cream">{priceLabel}</p>
      </div>
      <ArrowIcon className="h-4 w-4 shrink-0 text-blue transition-transform group-hover:translate-x-1" />
    </a>
  );
}
