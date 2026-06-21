import { TESTIMONIALS, SHOW_TESTIMONIALS } from "@/lib/content";
import { Section, SectionHead } from "../Section";
import { Hallmark } from "../Hallmark";
import { Reveal } from "../Reveal";

/**
 * DEPOIMENTOS — prova social. Oculta enquanto não houver provas reais
 * (SHOW_TESTIMONIALS=false em content.ts). Prints de WhatsApp funcionam muito bem.
 */
export function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <Section id="depoimentos" surface>
      <SectionHead
        eyebrow="QUEM JÁ CONFIOU"
        title="Histórias de quem saiu satisfeito"
        center
      />
      <div className="grid gap-5 sm:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.id}
            delay={i * 80}
            className="flex h-full flex-col rounded-[var(--radius)] border border-olive/20 bg-mocha p-6"
          >
            <Hallmark className="text-blue">{t.tag}</Hallmark>
            <p className="mt-3 flex-1 leading-relaxed text-cream/90">“{t.text}”</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/15 font-display text-sm text-blue">
                {t.initials}
              </span>
              <span className="text-sm font-medium text-cream">{t.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
