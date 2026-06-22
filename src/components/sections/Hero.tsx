import { WhatsAppButton } from "../WhatsAppButton";
import { Frame } from "../Frame";
import { Hallmark } from "../Hallmark";
import { Sparkle } from "../Brand";
import { TrustIcon } from "../icons";

/**
 * HERO — foto de fundo cobrindo TUDO (full-screen) + conteúdo por cima.
 * Tema escuro mantido; gradiente garante leitura mesmo com placeholder.
 * Foto: /public/hero.jpg (vertical/impactante).
 */
export function Hero() {
  const trust = [
    { icon: "box", label: "Pronta entrega" },
    { icon: "gem", label: "Prata 950 · Ouro 18k" },
    { icon: "card", label: "Pix e cartão" },
  ];

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* foto de fundo cobrindo a hero inteira */}
      <div className="absolute inset-0">
        <Frame
          src="/hero.jpg"
          alt="Joias em prata e ouro da JM Prata"
          ratio="h-full w-full"
          priority
          sizes="100vw"
          className="!rounded-none !border-0"
        />
      </div>

      {/* escurecimento pra leitura */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--base) 70%, transparent) 0%, color-mix(in srgb, var(--base) 30%, transparent) 35%, color-mix(in srgb, var(--base) 45%, transparent) 65%, color-mix(in srgb, var(--base) 92%, transparent) 100%)",
        }}
      />

      {/* conteúdo por cima — alinhado à esquerda, base */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-start justify-end px-5 pb-32 pt-24 text-left sm:px-8 sm:pb-36">
        <div className="flex items-center gap-2 text-gold">
          <Sparkle size={12} />
          <Hallmark className="text-cream/80">Loja de joias · Fortaleza</Hallmark>
        </div>

        <h1 className="font-display mt-5 max-w-3xl text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] text-cream">
          Joias em prata
          <span className="italic text-blue"> &amp; ouro</span>,
          <br className="hidden sm:block" /> feitas pra durar.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
          Cordões, anéis, brincos e alianças com pronta entrega — e encomendas
          sob medida. Pague no Pix ou cartão.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#colecao"
            className="inline-flex items-center justify-center rounded-[var(--radius)] bg-cream px-9 py-4 text-[0.9rem] font-medium uppercase tracking-[0.16em] text-base transition-colors hover:bg-blue"
          >
            Ver coleção
          </a>
          <WhatsAppButton source="hero" variant="ghost">
            Comprar no WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      {/* faixa de provas sobreposta na base */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-cream/10 bg-base/30 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 sm:px-8">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5">
              <TrustIcon name={t.icon} className="h-5 w-5 text-blue" />
              <span className="eyebrow text-cream/90">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
