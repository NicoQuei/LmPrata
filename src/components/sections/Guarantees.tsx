import { GUARANTEES } from "@/lib/content";
import { Section, SectionHead } from "../Section";
import { Reveal } from "../Reveal";
import { ShieldIcon } from "../icons";

/** GARANTIA & DIFERENCIAIS — consolida os motivos pra fechar. */
export function Guarantees() {
  return (
    <Section id="garantias">
      <SectionHead
        eyebrow="POR QUE COMIGO"
        title="O que você leva além da joia"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {GUARANTEES.map((g, i) => (
          <Reveal
            key={g}
            delay={(i % 2) * 70}
            className="card-lift flex items-start gap-3 rounded-[var(--radius)] border border-olive/20 bg-mocha p-6"
          >
            <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
            <span className="leading-relaxed text-cream/90">{g}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
