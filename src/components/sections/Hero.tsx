import { WhatsAppButton } from "../WhatsAppButton";
import { Frame } from "../Frame";
import { Hallmark } from "../Hallmark";
import { SparkleRow, EmbossWord, Sparkle, Tape } from "../Brand";

/**
 * HERO — loja de joias (foco em venda), editorial alta-costura.
 * Bodoni gigante + foto sobreposta, wordmark em relevo, brilho 1x.
 * Foto: coloque /public/hero.jpg e troque o `src` no <Frame>.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-28 sm:px-8"
    >
      <EmbossWord className="absolute -right-[8%] top-[8%] text-[34vw] leading-none">
        JM
      </EmbossWord>
      <EmbossWord className="absolute -left-[4%] bottom-[6%] text-[14vw] leading-none opacity-70">
        PRATA
      </EmbossWord>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 25%, color-mix(in srgb, var(--blue) 12%, transparent) 0%, transparent 65%), radial-gradient(50% 40% at 15% 85%, color-mix(in srgb, var(--blue-deep) 8%, transparent) 0%, transparent 60%)",
        }}
      />

      <Sparkle size={22} className="absolute left-[12%] top-[20%] text-blue/70" />
      <Sparkle size={12} className="absolute right-[20%] top-[16%] text-blue/50" />
      <Sparkle size={16} className="absolute bottom-[18%] right-[12%] text-blue/60" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-y-14 lg:grid-cols-12">
        {/* copy */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <SparkleRow className="lg:justify-start" />

          <Hallmark className="mt-7 block text-cream-dim">
            LOJA DE JOIAS · PRATA 950 · OURO 18K
          </Hallmark>

          <h1 className="display-xl mt-5 text-[clamp(3rem,12vw,9rem)] text-cream">
            Joias em
            <span className="block font-display italic">prata &amp; ouro</span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-cream-dim lg:mx-0">
            Cordões, anéis, brincos e alianças com{" "}
            <span className="text-cream">pronta entrega</span> — e encomendas sob
            medida. Pague no Pix ou cartão.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#colecao"
              className="inline-flex items-center justify-center rounded-[var(--radius)] bg-cream px-9 py-4 text-[0.95rem] font-medium uppercase tracking-[0.16em] text-base transition-colors hover:bg-blue"
            >
              Ver coleção
            </a>
            <WhatsAppButton source="hero" variant="ghost">
              Comprar no WhatsApp
            </WhatsAppButton>
          </div>

          <p className="eyebrow mt-10 text-cream-dim/70">
            PRONTA ENTREGA · PIX E CARTÃO · ENVIO COMBINADO
          </p>
        </div>

        {/* foto sobreposta, com fita */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-[68%] max-w-xs rotate-[-3deg] sm:w-[55%] lg:w-full lg:max-w-sm">
            <Tape rotate={-8} className="left-1/2 top-[-14px] z-20 -translate-x-1/2" />
            <div className="card-lift overflow-hidden rounded-[var(--radius)]">
              <Frame
                src="/hero.jpg"
                alt="Joia em destaque da JM Prata"
                ratio="aspect-[3/4]"
                priority
                sizes="(max-width: 1024px) 70vw, 380px"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <Hallmark className="text-cream-dim">PRONTA ENTREGA · PRATA 950</Hallmark>
              <Sparkle size={12} className="text-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
