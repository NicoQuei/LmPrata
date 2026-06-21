import { HOW_IT_WORKS } from "@/lib/content";
import { Section, SectionHead } from "../Section";
import { WhatsAppButton } from "../WhatsAppButton";
import { Reveal } from "../Reveal";
import { EmbossWord, Sparkle } from "../Brand";
import { GemIcon, WhatsAppIcon, CardIcon, BoxIcon } from "../icons";

const STEP_ICONS: Record<string, (p: { className?: string }) => React.ReactNode> = {
  gem: GemIcon,
  whatsapp: WhatsAppIcon,
  card: CardIcon,
  box: BoxIcon,
};

/** COMO COMPRAR — fluxo em timeline: ícone por etapa, linha de conexão,
 *  número grande em relevo. Vertical no mobile, horizontal no desktop. */
export function HowItWorks() {
  return (
    <Section id="como-funciona" className="relative overflow-hidden">
      {/* wordmark em relevo no fundo */}
      <EmbossWord className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24vw] leading-none">
        JM PRATA
      </EmbossWord>

      <div className="relative z-10">
        <SectionHead
          eyebrow="COMO COMPRAR"
          title="Da escolha à sua mão"
          sub="Rápido e sem enrolação: você escolhe, paga no Pix ou cartão e recebe."
        />

        <ol className="relative space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
          {/* linha de conexão — vertical (mobile) */}
          <span
            aria-hidden
            className="absolute left-8 top-10 bottom-10 w-px lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, transparent, color-mix(in srgb, var(--blue) 45%, transparent) 12%, color-mix(in srgb, var(--blue) 45%, transparent) 88%, transparent)",
            }}
          />
          {/* linha de conexão — horizontal (desktop) */}
          <span
            aria-hidden
            className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, var(--blue) 45%, transparent) 12%, color-mix(in srgb, var(--blue) 45%, transparent) 88%, transparent)",
            }}
          />

          {HOW_IT_WORKS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon] ?? GemIcon;
            return (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 90}
                className="relative z-10 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                {/* nó com ícone */}
                <div className="relative shrink-0">
                  <span className="deboss font-display absolute -left-3 -top-7 text-6xl leading-none lg:left-1/2 lg:-translate-x-1/2">
                    {step.n}
                  </span>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue/40 bg-base">
                    <Icon className="h-7 w-7 text-blue" />
                  </div>
                </div>

                {/* conteúdo */}
                <div className="pt-1 lg:pt-6">
                  <span className="eyebrow text-blue">Passo {step.n}</span>
                  <h3 className="font-display mt-1 text-xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[26ch] leading-relaxed text-cream-dim lg:mx-auto">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-16 flex flex-col items-center gap-4">
          <WhatsAppButton source="comofunciona">Comprar no WhatsApp</WhatsAppButton>
          <p className="eyebrow flex items-center gap-2 text-cream-dim/70">
            <Sparkle size={10} className="text-blue" /> Resposta rápida · sem
            compromisso
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
