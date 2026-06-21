import { Hallmark } from "../Hallmark";
import { WhatsAppButton } from "../WhatsAppButton";
import { Reveal } from "../Reveal";

/** CTA FINAL — último empurrão, sem distração. Acento de brasa. */
export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 120%, color-mix(in srgb, var(--blue) 22%, transparent) 0%, transparent 60%)",
        }}
      />
      <Reveal className="mx-auto max-w-2xl text-center">
        <Hallmark className="text-blue">JM PRATA · OURIVES</Hallmark>
        <h2 className="font-display mt-4 text-balance text-4xl font-medium leading-[1.1] text-cream sm:text-5xl">
          Sua próxima joia começa com uma mensagem.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-cream-dim">
          Me manda a ideia ou a foto da peça. Respondo rápido e sem compromisso.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton source="final">Falar com o João no WhatsApp</WhatsAppButton>
        </div>
        <p className="eyebrow mt-6 text-cream-dim/80">
          SEM COMPROMISSO · RESPOSTA RÁPIDA · ORÇAMENTO NA HORA
        </p>
      </Reveal>
    </section>
  );
}
