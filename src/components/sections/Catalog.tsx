"use client";

import { useState } from "react";
import {
  PRODUCTS,
  PRODUCT_FILTERS,
  type Product,
  type ProductCategory,
} from "@/lib/content";
import { waProductLink, formatBRL } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { Section, SectionHead } from "../Section";
import { Frame } from "../Frame";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../icons";
import { WhatsAppButton } from "../WhatsAppButton";

/** CATÁLOGO — seção principal da loja: peças com preço + filtro + comprar. */
export function Catalog() {
  const [filter, setFilter] = useState<"Todos" | ProductCategory>("Todos");
  const items = PRODUCTS.filter(
    (p) => filter === "Todos" || p.category === filter,
  );

  return (
    <Section id="colecao">
      <SectionHead
        eyebrow="COLEÇÃO · PRATA 950 · OURO 18K"
        title="Escolha a sua peça"
        sub="Pronta entrega ou sob encomenda. Clique em comprar e fechamos no WhatsApp."
      />

      {/* filtro de categorias */}
      <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
        {PRODUCT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`eyebrow rounded-full border px-4 py-2 transition-colors ${
              filter === f
                ? "border-blue bg-blue/10 text-blue"
                : "border-olive/30 text-cream-dim hover:border-olive/60 hover:text-cream"
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      {/* grade de produtos */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 60}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <p className="mb-5 text-cream-dim">
          Quer ver mais modelos ou um valor específico?
        </p>
        <WhatsAppButton source="colecao">Ver mais no WhatsApp</WhatsAppButton>
      </Reveal>
    </Section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const priceLabel = formatBRL(product.price);

  return (
    <div className="group flex h-full flex-col">
      <div className="relative">
        <Frame
          src={product.src}
          alt={`${product.name} em ${product.material === "OURO 18K" ? "ouro 18k" : "prata 950"}`}
          eyebrow={product.material}
          ratio="aspect-[4/5]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="card-lift"
        />
        <span
          className={`eyebrow absolute right-2 top-2 rounded-full px-2.5 py-1 backdrop-blur-sm ${
            product.inStock
              ? "bg-blue/85 text-base"
              : "bg-base/75 text-cream-dim"
          }`}
        >
          {product.inStock ? "Pronta entrega" : "Sob encomenda"}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="eyebrow text-cream-dim/70">{product.category}</p>
        <h3 className="font-display mt-1 text-xl leading-tight text-cream">
          {product.name}
        </h3>
        <p className="font-display mt-2 text-2xl text-cream">{priceLabel}</p>

        <a
          href={waProductLink(product.name, priceLabel)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("produto")}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-olive/40 px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:border-blue hover:bg-blue hover:text-base"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Comprar
        </a>
      </div>
    </div>
  );
}
