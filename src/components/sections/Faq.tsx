import { FAQ } from "@/lib/content";
import { Section, SectionHead } from "../Section";
import { WhatsAppButton } from "../WhatsAppButton";
import { Reveal } from "../Reveal";

/** FAQ — mata as últimas objeções antes de virar motivo pra não mandar mensagem. */
export function Faq() {
  return (
    <Section id="faq" surface>
      <SectionHead eyebrow="DÚVIDAS FREQUENTES" title="Antes de me chamar, talvez já esteja aqui" />

      <div className="divide-y divide-olive/15 rounded-[var(--radius)] border border-olive/20 bg-mocha">
        {FAQ.map((item) => (
          <details key={item.q} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-cream marker:hidden">
              <span>{item.q}</span>
              <span className="shrink-0 text-blue transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="-mt-1 pb-5 leading-relaxed text-cream-dim">{item.a}</p>
          </details>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <p className="mb-4 text-cream-dim">Ficou outra dúvida? Pergunta direto.</p>
        <WhatsAppButton source="final" size="md">
          Tirar dúvida no WhatsApp
        </WhatsAppButton>
      </Reveal>
    </Section>
  );
}
