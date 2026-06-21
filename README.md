# JM PRATA — Landing Page

Landing page de conversão para **João Marcelo · Ourives** (joias de prata e ouro
sob encomenda + soldas/consertos). Objetivo único: transformar o visitante do
Instagram em uma conversa no **WhatsApp**.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. Página única,
100% estática (SSG), mobile-first. Reveals de scroll com `IntersectionObserver`
nativo (sem Framer Motion — bundle menor, LCP mais rápido).

---

## ⚠️ Ambiente: certificado / proxy

Esta máquina tem um proxy/antivírus que intercepta HTTPS, então o npm e o
`next/font` precisam usar o certificado do Windows. **Rode sempre com:**

```bash
# Git Bash
NODE_OPTIONS=--use-system-ca npm install
NODE_OPTIONS=--use-system-ca npm run build
```

```powershell
# PowerShell
$env:NODE_OPTIONS='--use-system-ca'; npm run dev
```

Sem isso aparece `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.

---

## Rodar

```bash
$env:NODE_OPTIONS='--use-system-ca'; npm run dev    # desenvolvimento -> http://localhost:3000
npm run build && npm run start                       # produção
```

---

## ✅ O que editar (tudo em 2 arquivos)

### 1. `src/lib/config.ts` — dados do negócio

| Campo | O que é |
|---|---|
| `WHATSAPP_NUMBER` | **PENDENTE.** Número real do João, só dígitos: `55` + DDD + número. O link `w.app/frnmya` do bio estava **pausado** e não deu pra extrair. Enquanto for o placeholder, aparece um aviso laranja no rodapé (some sozinho ao trocar). |
| `WA_MESSAGES` | Mensagens pré-preenchidas de cada botão (já qualificam o lead por seção). |
| `BUSINESS` | Cidade (Fortaleza/CE), horário, pagamento, prazo — confirmar os marcados `TODO`. |
| `ANALYTICS` | `metaPixelId` e `ga4Id`. Deixe vazio = não carrega nada. Preencheu = dispara `Lead`/`Contact` em todo clique de WhatsApp. |
| `SITE.url` | Domínio final (para SEO/OpenGraph/JSON-LD). |

### 2. `src/lib/content.ts` — textos e fotos

- `GALLERY`, `BEFORE_AFTER`, `About`, `Hero`, `Aliancas`: troque `src: null` pelo
  caminho da foto (ex.: `"/gallery/cordao-01.jpg"`). `null` mostra um placeholder
  elegante no estilo da marca — **nunca** imagem quebrada.
- `TESTIMONIALS` + `SHOW_TESTIMONIALS`: a seção de depoimentos está **oculta**
  (`false`) até existirem provas reais (prints de WhatsApp funcionam ótimo).
  Preencha os depoimentos e mude para `true`.
- `FAQ`, `GUARANTEES`, `HOW_IT_WORKS`: textos prontos, ajuste à vontade.

---

## 📸 Como colocar fotos

1. Salve em `public/` (ex.: `public/gallery/cordao-01.jpg`, `public/joao.jpg`,
   `public/hero.jpg`).
2. Aponte o caminho no `src` correspondente em `content.ts` (ou direto na seção
   `Hero.tsx` / `Aliancas.tsx` / `About.tsx`, onde o `src={null}` está marcado).
3. **OpenGraph:** coloque uma foto boa em `public/og.jpg` (1200×630). É a imagem
   que aparece ao compartilhar o link no WhatsApp.

---

## Checklist de assets pendentes do João

- [ ] **Número do WhatsApp** (resolver/reativar `w.app/frnmya`).
- [ ] Fotos das peças (galeria), antes/depois de consertos, foto do João.
- [ ] `public/og.jpg` para compartilhamento.
- [ ] Confirmar horário, formas de pagamento e prazo médio (em `config.ts`).
- [ ] Depoimentos / prints de WhatsApp.
- [ ] IDs de Meta Pixel e GA4.

---

## Estrutura

```
src/
  app/            layout (fontes, SEO, JSON-LD, analytics) + page (monta as seções)
  components/     CTA WhatsApp, FAB, Reveal, Frame (imagem+placeholder), Hallmark, ícones
    sections/     Hero, TrustBar, Services, Gallery, BeforeAfter, HowItWorks,
                  Aliancas, About, Testimonials, Guarantees, Faq, FinalCta, Footer, TopBar
  lib/            config.ts (negócio) · content.ts (conteúdo) · analytics.ts (tracking)
```

Site por **Dovra Tech**.
