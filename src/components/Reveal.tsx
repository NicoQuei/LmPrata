"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal de scroll discreto (fade + rise curto), sem dependência externa.
 * Mais leve que Framer Motion = melhor LCP, fiel à tese "velocidade > efeito".
 * Respeita prefers-reduced-motion (mostra direto, sem animar).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion users ainda recebem o reveal via observer, mas o CSS global
    // zera a duração da transição (sem movimento). Sem setState síncrono aqui.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(18px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Comp>
  );
}
