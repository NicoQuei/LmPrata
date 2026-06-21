"use client";

import Image from "next/image";
import { useState } from "react";
import { GemIcon } from "./icons";

/**
 * Moldura de imagem com fallback elegante e tolerante a erro.
 * - `src` existe e carrega -> next/image (AVIF/WebP, lazy abaixo da dobra).
 * - `src` é null OU o arquivo não existe ainda -> placeholder no estilo da marca.
 *   (assim dá pra pré-conectar os caminhos; foto faltando não quebra a página)
 */
export function Frame({
  src,
  alt,
  eyebrow,
  ratio = "aspect-[4/5]",
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 50vw, 25vw",
}: {
  src: string | null;
  alt: string;
  eyebrow?: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={`group relative overflow-hidden rounded-[var(--radius)] border border-olive/20 bg-mocha ${ratio} ${className}`}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Placeholder alt={alt} />
      )}

      {eyebrow && (
        <span className="eyebrow absolute bottom-2 left-2 rounded bg-base/70 px-2 py-1 text-cream/90 backdrop-blur-sm">
          {eyebrow}
        </span>
      )}
    </div>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, var(--blue) 12%, transparent) 0%, transparent 55%), var(--mocha)",
      }}
    >
      <GemIcon className="h-8 w-8 text-blue/50" />
      <span className="eyebrow text-cream-dim/80">FOTO EM BREVE</span>
      <span className="max-w-[80%] text-xs leading-snug text-cream-dim/70">{alt}</span>
    </div>
  );
}
