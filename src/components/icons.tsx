/** Ícones lineares minimalistas (sem libs). currentColor herda a cor do texto. */

type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function WhatsAppIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function HandIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M18 11V6a2 2 0 00-4 0M14 10V4a2 2 0 00-4 0v6M10 10.5V6a2 2 0 00-4 0v8" />
      <path d="M18 8a2 2 0 014 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15" />
    </svg>
  );
}

export function RulerIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M21.3 8.7L8.7 21.3a1 1 0 01-1.4 0l-4.6-4.6a1 1 0 010-1.4L15.3 2.7a1 1 0 011.4 0l4.6 4.6a1 1 0 010 1.4z" />
      <path d="M7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2" />
    </svg>
  );
}

export function RecycleIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M7 19H4.8a2 2 0 01-1.7-3l1.3-2.2M9.6 4.6L11 7M14.5 19h2.5a2 2 0 001.7-3l-1.1-1.9M12 4l1.3 2.2a2 2 0 01-1.7 3H8.2" />
      <path d="M5.7 12.3L4.6 14.2M18.3 11.7l1.1 1.9M10.5 19l1.5 2 1.5-2" />
    </svg>
  );
}

export function ShieldIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ArrowIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function InstagramIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function GemIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M6 3h12l3 6-9 12L3 9l3-6z" />
      <path d="M3 9h18M9 3l-3 6 6 12M15 3l3 6-6 12M9 3l3 6 3-6" />
    </svg>
  );
}

export function BoxIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.3 7l8.7 5 8.7-5M12 22V12" />
    </svg>
  );
}

export function CardIcon({ className }: P) {
  return (
    <svg className={className} {...base}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  );
}

const ICONS = {
  hand: HandIcon,
  ruler: RulerIcon,
  recycle: RecycleIcon,
  shield: ShieldIcon,
  gem: GemIcon,
  box: BoxIcon,
  card: CardIcon,
} as const;

export function TrustIcon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name as keyof typeof ICONS] ?? ShieldIcon;
  return <C className={className} />;
}
