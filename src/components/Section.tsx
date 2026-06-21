import { Hallmark } from "./Hallmark";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Brand";

/** Wrapper de seção com ritmo vertical amplo (editorial). */
export function Section({
  id,
  children,
  className = "",
  surface = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  surface?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-24 sm:px-8 sm:py-36 ${
        surface ? "bg-mocha/40" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/** Cabeçalho de seção editorial: estrela + eyebrow + título serifado, centrado. */
export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-14 ${center ? "flex flex-col items-center text-center" : ""}`}>
      <Sparkle size={16} className="mb-6 text-blue" />
      <Hallmark className="text-cream-dim">{eyebrow}</Hallmark>
      <h2 className="font-display mt-4 max-w-2xl text-3xl font-normal leading-tight text-cream sm:text-[2.6rem]">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-cream-dim ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
