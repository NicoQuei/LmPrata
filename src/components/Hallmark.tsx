/** Eyebrow / label editorial — serifa em caixa-alta com tracking largo (ref. SHADAN). */

export function Hallmark({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}) {
  return <Tag className={`eyebrow ${className}`}>{children}</Tag>;
}
