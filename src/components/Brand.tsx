/** Elementos de marca: a estrela de 4 pontas (brilho da joia) e wordmark em relevo. */

/** Estrela de 4 pontas — assinatura da marca (o brilho/lapidação). */
export function Sparkle({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={`sparkle ${className}`}
    >
      <path d="M12 0c.7 6.2 5.1 10.6 12 11.4v1.2C17.1 13.4 12.7 17.8 12 24c-.7-6.2-5.1-10.6-12-11.4v-1.2C6.9 10.6 11.3 6.2 12 0z" />
    </svg>
  );
}

/** Trio/linha de estrelas como ornamento (ref. SHADAN ✦ ✦✦✦). */
export function SparkleRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 text-blue ${className}`}>
      <Sparkle size={14} />
      <span className="flex gap-3">
        <Sparkle size={14} />
        <Sparkle size={18} />
        <Sparkle size={14} />
      </span>
    </div>
  );
}

/** Fita adesiva p/ colagem (decorativa). */
export function Tape({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden
      className={`tape ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}

/** Clipe de papel p/ colagem (decorativo). */
export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M17 14v20a7 7 0 01-14 0V10a5 5 0 0110 0v22a3 3 0 01-6 0V14" />
    </svg>
  );
}

/**
 * Wordmark gigante em baixo-relevo no fundo (letterpress), como na ref SHADAN.
 * Decorativo — fica atrás do conteúdo.
 */
export function EmbossWord({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`emboss font-display pointer-events-none select-none whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
}
