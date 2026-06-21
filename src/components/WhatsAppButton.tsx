"use client";

import { waLink, type WaSource } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

type Variant = "solid" | "ghost";
type Size = "md" | "lg";

/**
 * Botão/Link de WhatsApp — único canal de conversão.
 * Estilo na paleta editorial (sem verde): creme sólido ou contorno discreto.
 * Dispara tracking (Meta Pixel + GA4) com a origem.
 */
export function WhatsAppButton({
  source,
  children,
  variant = "solid",
  size = "lg",
  icon = true,
  className = "",
}: {
  source: WaSource;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
}) {
  const sizes: Record<Size, string> = {
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-[0.95rem]",
  };

  const variants: Record<Variant, string> = {
    solid:
      "bg-cream text-base hover:bg-blue active:scale-[0.99] border border-transparent",
    ghost:
      "border border-olive/50 text-cream hover:border-blue hover:text-blue bg-transparent",
  };

  return (
    <a
      href={waLink(source)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(source)}
      className={`group inline-flex items-center justify-center gap-3 rounded-[var(--radius)] font-body font-medium uppercase tracking-[0.16em] transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {icon && (
        <WhatsAppIcon className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{children}</span>
    </a>
  );
}
