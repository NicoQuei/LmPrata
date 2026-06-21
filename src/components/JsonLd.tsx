import { BUSINESS, SITE, WHATSAPP_NUMBER } from "@/lib/config";

/** JSON-LD JewelryStore (LocalBusiness) para SEO local. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: BUSINESS.name,
    description:
      "Loja de joias em prata 950 e ouro 18k em Fortaleza/CE. Cordões, anéis, brincos, pulseiras e alianças com pronta entrega e sob encomenda. Pix, cartão e parcelamento. Também faz consertos.",
    url: SITE.url,
    image: `${SITE.url}/og.jpg`,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "BR",
    },
    areaServed: `${BUSINESS.city}, ${BUSINESS.state}`,
    sameAs: [BUSINESS.instagramUrl],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricação de joias sob encomenda" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soldas e consertos de joias" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alianças sob medida" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD precisa ser injetado como string
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
