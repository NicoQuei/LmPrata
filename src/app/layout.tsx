import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost, Caveat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SITE, BUSINESS } from "@/lib/config";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const title = "JM PRATA — Loja de Joias em Prata 950 e Ouro 18k | Fortaleza";
const description =
  "Loja de joias em prata 950 e ouro 18k em Fortaleza/CE. Cordões, anéis, brincos, pulseiras e alianças com pronta entrega — e encomendas sob medida. Pix, cartão e parcelamento. Também fazemos consertos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "loja de joias Fortaleza",
    "joias de prata 950",
    "joias de ouro 18k",
    "cordões de prata",
    "anéis e alianças",
    "brincos e pingentes",
    "joias sob encomenda",
    "conserto de joias",
    "alianças sob medida",
  ],
  authors: [{ name: BUSINESS.owner }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: BUSINESS.name,
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "JM PRATA — joias de prata e ouro feitas à mão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${jost.variable} ${caveat.variable} antialiased`}
    >
      <body>
        <JsonLd />
        <div className="grain-overlay" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
