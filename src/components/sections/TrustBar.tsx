import { TRUST_ITEMS } from "@/lib/content";
import { TrustIcon } from "../icons";
import { Reveal } from "../Reveal";

/** TRUST BAR — baixa a guarda. 4 provas reais (sem alegar tempo de mercado). */
export function TrustBar() {
  return (
    <section className="border-y border-olive/15 bg-mocha/40 px-5 py-7 sm:px-8">
      <Reveal className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <TrustIcon name={item.icon} className="h-6 w-6 text-blue" />
            <span className="eyebrow text-cream/85">{item.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
