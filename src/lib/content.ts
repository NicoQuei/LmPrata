/**
 * ============================================================================
 *  JM PRATA — CONTEÚDO EDITÁVEL (produtos, textos, fotos)
 *  Modelo: LOJA com estoque (foco em venda) + encomendas (secundário).
 * ============================================================================
 *
 *  COMO COLOCAR FOTOS:
 *  1) Salve as imagens na pasta /public (ex.: /public/produtos/cordao-01.jpg).
 *  2) Coloque o caminho (começando com "/") no campo `src`.
 *  3) `src: null` mostra um placeholder elegante no lugar — sem imagem quebrada.
 */

import type { WaSource } from "./config";

/* ============================== CATÁLOGO ================================= */
/* ⚠️ PREÇOS E PEÇAS SÃO PLACEHOLDERS — troque pelos reais do João.         */

export type ProductCategory =
  | "Cordões"
  | "Anéis & Alianças"
  | "Brincos & Pingentes"
  | "Pulseiras";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  material: "PRATA 950" | "OURO 18K";
  price: number; // em reais
  src: string | null; // ex.: "/produtos/cordao-01.jpg"
  inStock: boolean; // true = pronta entrega · false = sob encomenda
};

export const PRODUCT_FILTERS: ("Todos" | ProductCategory)[] = [
  "Todos",
  "Cordões",
  "Anéis & Alianças",
  "Brincos & Pingentes",
  "Pulseiras",
];

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Cordão Grumet", category: "Cordões", material: "PRATA 950", price: 290, src: "/produtos/p1.jpg", inStock: true },
  { id: "p2", name: "Cordão Veneziano", category: "Cordões", material: "PRATA 950", price: 240, src: "/produtos/p2.jpg", inStock: true },
  { id: "p3", name: "Corrente Cubana", category: "Cordões", material: "OURO 18K", price: 3290, src: "/produtos/p3.jpg", inStock: false },
  { id: "p4", name: "Anel Solitário", category: "Anéis & Alianças", material: "PRATA 950", price: 190, src: "/produtos/p4.jpg", inStock: true },
  { id: "p5", name: "Par de Alianças Clássicas", category: "Anéis & Alianças", material: "PRATA 950", price: 450, src: "/produtos/p5.jpg", inStock: true },
  { id: "p6", name: "Par de Alianças", category: "Anéis & Alianças", material: "OURO 18K", price: 3900, src: "/produtos/p6.jpg", inStock: false },
  { id: "p7", name: "Brinco Argola", category: "Brincos & Pingentes", material: "PRATA 950", price: 160, src: "/produtos/p7.jpg", inStock: true },
  { id: "p8", name: "Pingente Ponto de Luz", category: "Brincos & Pingentes", material: "OURO 18K", price: 690, src: "/produtos/p8.jpg", inStock: true },
  { id: "p9", name: "Pulseira Veneziana", category: "Pulseiras", material: "PRATA 950", price: 230, src: "/produtos/p9.jpg", inStock: true },
  { id: "p10", name: "Bracelete Liso", category: "Pulseiras", material: "PRATA 950", price: 380, src: "/produtos/p10.jpg", inStock: true },
  { id: "p11", name: "Anel Aparador", category: "Anéis & Alianças", material: "OURO 18K", price: 1290, src: "/produtos/p11.jpg", inStock: true },
  { id: "p12", name: "Pingente Coração", category: "Brincos & Pingentes", material: "PRATA 950", price: 150, src: "/produtos/p12.jpg", inStock: true },
];

/* --------------------------- COMPRAR POR OCASIÃO ------------------------- */

export type Occasion = {
  id: string;
  title: string;
  sub: string;
  waSource: WaSource;
  src: string | null; // foto da ocasião (ex.: "/ocasioes/presente.jpg")
};

export const OCCASIONS: Occasion[] = [
  { id: "presente", title: "Presente", sub: "Pra surpreender alguém", waSource: "presente", src: "/ocasioes/presente.jpg" },
  { id: "casal", title: "Namoro & Noivado", sub: "Alianças e joias pra dois", waSource: "casal", src: "/ocasioes/namoro.jpg" },
  { id: "masculino", title: "Masculino", sub: "Cordões, pulseiras e anéis", waSource: "masculino", src: "/ocasioes/masculino.jpg" },
  { id: "paramim", title: "Pra mim", sub: "Aquele mimo que você merece", waSource: "paramim", src: "/ocasioes/parami.jpg" },
];

/* ----------------------------- TRUST BAR --------------------------------- */
/* Benefícios de LOJA (não mais "feito à mão / anos de ofício").            */

export const TRUST_ITEMS = [
  { icon: "box", label: "PRONTA ENTREGA" },
  { icon: "gem", label: "PRATA 950 · OURO 18K" },
  { icon: "card", label: "PIX E CARTÃO" },
  { icon: "shield", label: "GARANTIA" },
];

/* --------------------- TAMBÉM FAZEMOS (secundário) ----------------------- */

export type Service = {
  id: string;
  hallmark: string;
  title: string;
  desc: string;
  items: string[];
  icon: string;
  src: string | null; // foto do serviço (ex.: "/servicos/encomenda.jpg")
  cta: string;
  waSource: WaSource;
  anchor: string;
};

export const SERVICES: Service[] = [
  {
    id: "encomenda",
    hallmark: "SOB MEDIDA",
    title: "Encomendas",
    desc: "Não achou o que queria? Faço sua peça personalizada em prata 950 ou ouro 18k, do seu jeito.",
    items: [
      "Anéis, cordões e pingentes personalizados",
      "Trabalho com o seu próprio material",
      "Orçamento na hora, sem compromisso",
    ],
    icon: "ruler",
    src: "/servicos/encomenda.jpg",
    cta: "Encomendar peça",
    waSource: "encomenda",
    anchor: "#contato",
  },
  {
    id: "conserto",
    hallmark: "SOLDA · CONSERTO",
    title: "Consertos",
    desc: "Quebrou ou soltou o fecho? Solda e conserto em prata, ouro e Romanel — até o que outras lojas não fazem.",
    items: [
      "Solda e troca de fecho",
      "Ajuste de tamanho de anel",
      "Limpeza, polimento e banho",
    ],
    icon: "recycle",
    src: "/servicos/conserto.jpg",
    cta: "Mandar pra consertar",
    waSource: "conserto",
    anchor: "#contato",
  },
  {
    id: "aliancas",
    hallmark: "PAR · SOB MEDIDA",
    title: "Alianças",
    desc: "Alianças de namoro, noivado e casamento — gravadas e ajustadas sob medida.",
    items: [
      "Namoro, noivado e casamento",
      "Gravação de nomes e datas",
      "Ajuste de medida do par",
    ],
    icon: "gem",
    src: "/servicos/aliancas.jpg",
    cta: "Ver alianças",
    waSource: "aliancas",
    anchor: "#contato",
  },
];

/* --------------------------- COMO COMPRAR -------------------------------- */

export const HOW_IT_WORKS = [
  {
    n: "01",
    icon: "gem",
    title: "Escolha",
    text: "Achou a peça? Toque em “Comprar” e me chame no WhatsApp.",
  },
  {
    n: "02",
    icon: "whatsapp",
    title: "Confirmo na hora",
    text: "Confirmo a disponibilidade, tiro suas dúvidas e combino tudo.",
  },
  {
    n: "03",
    icon: "card",
    title: "Pague fácil",
    text: "Pix ou cartão — e dá pra parcelar do seu jeito.",
  },
  {
    n: "04",
    icon: "box",
    title: "Receba",
    text: "Sua joia chega rapidinho, com garantia.",
  },
];

/* ----------------------------- DEPOIMENTOS ------------------------------- */
/* Oculto até ter prova real (prints de WhatsApp funcionam ótimo).          */

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  text: string;
  tag: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Cliente JM Prata", initials: "—", text: "Espaço reservado para depoimento real de compra.", tag: "Compra" },
  { id: "t2", name: "Cliente JM Prata", initials: "—", text: "Espaço reservado para depoimento real de encomenda.", tag: "Encomenda" },
  { id: "t3", name: "Cliente JM Prata", initials: "—", text: "Espaço reservado para depoimento real de conserto.", tag: "Conserto" },
];

export const SHOW_TESTIMONIALS = false;

/* ----------------------------- GARANTIAS --------------------------------- */

export const GUARANTEES = [
  "Prata 950 e ouro 18k de verdade — teor garantido.",
  "Pronta entrega nas peças em estoque.",
  "Pix, cartão e parcelamento.",
  "Também fazemos sob encomenda e consertos.",
  "Garantia em toda peça.",
  "Atendimento direto, rápido e sem enrolação.",
];

/* -------------------------------- FAQ ------------------------------------ */

export const FAQ = [
  {
    q: "As peças têm pronta entrega?",
    a: "Sim. As marcadas como “Pronta entrega” saem na hora; as demais são feitas sob encomenda, com prazo combinado no WhatsApp.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pix, cartão e parcelamento. A gente combina a melhor forma pra você.",
  },
  {
    q: "Vocês entregam ou enviam?",
    a: "Atendo em Fortaleza/CE e combino entrega ou envio pra outras cidades direto no WhatsApp.",
  },
  {
    q: "A prata e o ouro são de verdade? Qual o teor?",
    a: "Sim, metal de verdade: prata 950 e ouro 18k, com teor garantido.",
  },
  {
    q: "Posso encomendar um modelo diferente?",
    a: "Pode! Faço peças sob encomenda, personalizadas do seu jeito — é só me mandar a ideia ou uma foto.",
  },
  {
    q: "Vocês consertam joias?",
    a: "Sim, faço soldas e consertos em prata, ouro e Romanel — inclusive o que outras lojas não consertam.",
  },
  {
    q: "Tem garantia?",
    a: "Tem. Toda peça tem garantia, e ajustes a gente combina sem complicação.",
  },
];
