import { SERVICES } from "@/lib/content";
import { Section, SectionHead } from "../Section";
import { Hallmark } from "../Hallmark";
import { WhatsAppButton } from "../WhatsAppButton";
import { Reveal } from "../Reveal";

/** SERVIÇOS — 3 cards, 3 intenções. Cada card roteia pro seu caminho. */
export function Services() {
  return (
    <Section id="servicos" surface>
      <SectionHead
        eyebrow="ALÉM DA LOJA"
        title="Também fazemos sob medida"
        sub="Não achou na coleção? A gente encomenda, conserta e faz alianças do seu jeito."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.id}
            delay={i * 80}
            className="card-lift flex h-full flex-col rounded-[var(--radius)] border border-olive/20 bg-mocha p-8 transition-colors hover:border-blue/40"
          >
            <Hallmark className="text-blue">{s.hallmark}</Hallmark>
            <h3 className="font-display mt-4 text-[1.7rem] leading-tight text-cream">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-cream-dim">{s.desc}</p>
            <WhatsAppButton
              source={s.waSource}
              size="md"
              className="mt-6 w-full"
            >
              {s.cta}
            </WhatsAppButton>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
