import { Section, SectionHead } from "../Section";
import { Frame } from "../Frame";
import { WhatsAppButton } from "../WhatsAppButton";
import { Reveal } from "../Reveal";
import { Tape, Paperclip, Sparkle } from "../Brand";

/**
 * COLLAGE / ATELIÊ — momento de colagem editorial (ref. SHADAN board).
 * Fotos sobrepostas, rotacionadas, com fita, clipe e bilhete à mão.
 * Board com posições em % dentro de um container de altura responsiva.
 * Fotos: troque os `src` (hoje placeholders no tom da marca).
 */
export function Collage() {
  return (
    <Section id="atelie">
      <SectionHead
        eyebrow="COLEÇÃO · NOVIDADES"
        title="Peças que acabaram de chegar"
        sub="Prata 950 e ouro 18k. Pronta entrega ou sob encomenda."
      />

      <Reveal>
        <div className="relative mx-auto h-[560px] w-full max-w-4xl sm:h-[640px] lg:h-[720px]">
          {/* foto principal */}
          <figure className="absolute left-[2%] top-[4%] w-[46%] rotate-[-3deg] sm:w-[42%]">
            <div className="card-lift overflow-hidden rounded-[var(--radius)]">
              <Frame
                src="/colecao/01.jpg"
                alt="Peça em destaque da coleção JM Prata"
                ratio="aspect-[3/4]"
                sizes="(max-width: 640px) 46vw, 360px"
              />
            </div>
            <figcaption className="eyebrow mt-2 text-cream-dim">
              PRONTA ENTREGA
            </figcaption>
          </figure>

          {/* foto topo direita com fita */}
          <figure className="absolute right-[3%] top-0 w-[40%] rotate-[4deg] sm:w-[34%]">
            <Tape rotate={-6} className="left-1/2 top-[-12px] z-20 -translate-x-1/2" />
            <div className="card-lift overflow-hidden rounded-[var(--radius)]">
              <Frame
                src="/colecao/02.jpg"
                alt="Peça finalizada em prata 950"
                ratio="aspect-square"
                sizes="(max-width: 640px) 40vw, 300px"
              />
            </div>
            <figcaption className="eyebrow mt-2 text-right text-cream-dim">
              PRATA 950
            </figcaption>
          </figure>

          {/* foto inferior direita */}
          <figure className="absolute bottom-[2%] right-[8%] w-[34%] rotate-[-2deg] sm:w-[28%]">
            <div className="card-lift overflow-hidden rounded-[var(--radius)]">
              <Frame
                src="/colecao/03.jpg"
                alt="Detalhe de anel em ouro 18k"
                ratio="aspect-[4/5]"
                sizes="(max-width: 640px) 34vw, 240px"
              />
            </div>
          </figure>

          {/* bilhete à mão (papel) com clipe */}
          <div className="paper absolute bottom-[6%] left-[6%] w-[44%] rotate-[2deg] rounded-[2px] p-5 sm:w-[36%]">
            <Paperclip className="absolute -top-4 left-6 h-10 w-5 text-olive/70" />
            <p className="handwriting text-2xl text-[#3a2a22] sm:text-3xl">
              Pra presentear
              <br />
              (ou se presentear).
            </p>
            <p className="handwriting mt-3 text-xl text-[#6f5a4a]">— JM Prata</p>
          </div>

          {/* etiqueta de teor (papel pequeno) */}
          <div className="paper absolute right-[2%] top-[44%] w-[22%] rotate-[6deg] rounded-[2px] px-3 py-2 sm:w-[16%]">
            <p className="eyebrow text-[#3a2a22]">TEOR</p>
            <p className="font-display text-lg text-[#3a2a22]">950 · 18K</p>
          </div>

          {/* acentos */}
          <Sparkle size={20} className="absolute left-[48%] top-[10%] text-blue/70" />
          <Sparkle size={12} className="absolute bottom-[24%] left-[40%] text-blue/50" />
        </div>
      </Reveal>

      <Reveal className="mt-16 text-center">
        <WhatsAppButton source="colecao">Quero ver as novidades</WhatsAppButton>
      </Reveal>
    </Section>
  );
}
