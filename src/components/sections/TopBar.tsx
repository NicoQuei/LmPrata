"use client";

import { useEffect, useState } from "react";
import { waLink, BUSINESS } from "@/lib/config";
import { trackWhatsApp } from "@/lib/analytics";

/** Top bar fina: logo + "Falar agora". Some ao rolar pra baixo (FAB assume). */
export function TopBar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      setHidden(y > last && y > 200); // some descendo, volta subindo
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-olive/15 bg-base/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide text-cream">
          {BUSINESS.name}
        </a>
        <a
          href={waLink("topbar")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("topbar")}
          className="eyebrow rounded-full border border-olive/40 px-4 py-2 text-cream transition-colors hover:border-blue hover:text-blue"
        >
          Falar agora
        </a>
      </div>
    </header>
  );
}
