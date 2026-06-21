/**
 * ============================================================================
 *  JM PRATA — CONFIG CENTRAL
 *  Edite tudo deste site AQUI. É o único arquivo que o João/Dovra precisa tocar.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  WHATSAPP — o coração da conversão                                          */
/* -------------------------------------------------------------------------- */

/**
 * ⚠️ TODO TROCAR: número real do WhatsApp do João.
 * Formato: código do país + DDD + número, SÓ DÍGITOS, sem espaços/sinais.
 * Ex.: Fortaleza (85) 9 9999-9999  ->  "5585999999999"
 *
 * O link w.app/frnmya do Instagram estava PAUSADO e não deu pra extrair.
 * Assim que tiver o número, substitua a linha abaixo e pronto — entra em todos
 * os botões da página automaticamente.
 */
export const WHATSAPP_NUMBER = "5585999999999"; // <-- PLACEHOLDER, trocar

/** true enquanto o número acima for o placeholder (controla um aviso discreto no rodapé em dev) */
export const WHATSAPP_IS_PLACEHOLDER = WHATSAPP_NUMBER === "5585999999999";

/** Mensagens pré-preenchidas por origem do clique (qualifica o lead) */
export const WA_MESSAGES = {
  hero: "Olá! Vim pelo site da JM Prata e quero ver as peças disponíveis.",
  topbar: "Olá! Vim pelo site da JM Prata e quero falar com vocês.",
  colecao: "Olá! Vi a coleção no site e quero comprar uma peça. Pode me ajudar?",
  produto: "Olá! Tenho interesse em uma peça do site. Está disponível?",
  encomenda:
    "Olá! Quero encomendar uma peça personalizada em prata/ouro. Pode me passar um orçamento?",
  conserto:
    "Olá! Preciso de um conserto/solda. Vou mandar uma foto da peça.",
  aliancas:
    "Olá! Quero ver alianças (prata/ouro). Pode me mostrar modelos e valores?",
  comofunciona:
    "Olá! Quero comprar uma peça do site. Como funciona o pagamento e a entrega?",
  presente: "Olá! Quero uma joia pra presentear. Pode me mostrar opções?",
  casal:
    "Olá! Quero ver opções pra casal (alianças de namoro, noivado ou casamento).",
  masculino:
    "Olá! Quero ver joias masculinas (cordões, pulseiras e anéis). Pode me mostrar?",
  paramim: "Olá! Quero me presentear com uma joia. Pode me mostrar opções?",
  sobre: "Olá! Vim pelo site da JM Prata e quero falar com vocês.",
  fab: "Olá! Vim pelo site da JM Prata e quero comprar uma joia.",
  final: "Olá! Vim pelo site da JM Prata. Bora fechar minha joia?",
} as const;

export type WaSource = keyof typeof WA_MESSAGES;

/** Monta o deep link wa.me com mensagem pré-preenchida e codificada */
export function waLink(source: WaSource): string {
  const text = encodeURIComponent(WA_MESSAGES[source]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/** Deep link de compra de um produto específico (inclui nome e preço) */
export function waProductLink(name: string, priceLabel: string): string {
  const text = encodeURIComponent(
    `Olá! Quero comprar a peça "${name}" (${priceLabel}) que vi no site. Está disponível?`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/** Formata número em Real (R$ 1.290) */
export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

/* -------------------------------------------------------------------------- */
/*  NEGÓCIO                                                                    */
/* -------------------------------------------------------------------------- */

export const BUSINESS = {
  name: "JM PRATA",
  owner: "João Marcelo",
  role: "Ourives",
  instagramHandle: "@jm_prata_085",
  instagramUrl: "https://www.instagram.com/jm_prata_085/",
  /** Cidade de atendimento (definido: só Fortaleza/CE) */
  city: "Fortaleza",
  state: "CE",
  /** TODO: confirmar com o João */
  hours: "Seg a Sáb, 9h às 18h",
  /** TODO: confirmar formas de pagamento */
  payments: "Pix e cartão",
  /** TODO: confirmar prazo médio de encomenda */
  leadTime: "combinado na hora do orçamento",
} as const;

/* -------------------------------------------------------------------------- */
/*  ANALYTICS — preencha quando tiver as contas (deixe vazio pra desativar)    */
/* -------------------------------------------------------------------------- */

export const ANALYTICS = {
  /** Meta Pixel ID, ex.: "123456789012345" */
  metaPixelId: "",
  /** GA4 Measurement ID, ex.: "G-XXXXXXXXXX" */
  ga4Id: "",
} as const;

/* -------------------------------------------------------------------------- */
/*  SITE / SEO                                                                 */
/* -------------------------------------------------------------------------- */

export const SITE = {
  /** TODO: trocar pelo domínio final quando publicar */
  url: "https://jmprata.com.br",
  credit: "Dovra Tech",
  creditUrl: "https://dovratech.com.br",
} as const;
