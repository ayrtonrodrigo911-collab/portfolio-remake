# Boldfolio Brutal Blocks

# 🚨 PROTOCOLO DE ENGENHARIA FRONT-END: RECRIAÇÃO FIEL DE LANDING PAGE (NEO-BRUTALISMO)

Atue como um Desenvolvedor Front-End Sênior e Designer UI/UX. Sua missão é recriar a landing page anexada com o máximo de fidelidade visual possível, usando React, Next.js e Tailwind CSS. A imagem fornecida é a ÚNICA fonte da verdade. Se houver conflito entre o texto e a imagem, priorize a imagem.

## 🎨 1. DESIGN SYSTEM (DIRETRIZES GLOBAIS)

- **Estilo Visual:** Neo-Brutalismo. Blocos duros, alto contraste, ausência de `border-radius` (cantos 100% retos), grids visíveis e tipografia pesada.
- **Paleta de Cores:**
  - Preto puro: `#000000` (fundos e textos)
  - Branco puro: `#FFFFFF` (fundos e textos)
  - Azul Elétrico: `#0022FF` (destaques e backgrounds de seções)
  - Verde Limão/Neon: `#D4FF00` (botões CTA, tags e detalhes de destaque)
  - Cinza Escuro: `#1A1A1A` (cards de fundo escuro)
- **Tipografia:**
  - Títulos e Headlines: Fonte Sans-Serif ultra-condensada e pesada (ex: 'Anton', 'Impact', 'Oswald' ou 'Bebas Neue'). Use `uppercase`, `font-black` e `tracking-tighter`.
  - Textos de apoio e parágrafos: Fonte Sans-Serif limpa e moderna (ex: 'Inter', 'Roboto' ou 'Space Grotesk'). Tamanho pequeno (`text-sm`).
- **Micro-interações (Opcionais):** Hover states que invertem as cores (ex: botão verde fica preto com texto verde).

---

## 🏗️ 2. ESTRUTURA DA PÁGINA (SEÇÃO POR SEÇÃO)

Crie a página seguindo a ordem exata e o layout visual da imagem:

### 2.1 Header (Fixo no topo)

- Fundo Preto. Logo "DEV/PIXEL" à esquerda (texto branco, "PIXEL" em negrito).
- Menu central: HOME, WORK, CASE STUDIES, ABOUT, EXPERIENCE, CONTACT (texto branco, fonte pequena, hover em verde limão).
- Botão à direita: Fundo verde limão, texto preto "LET'S BUILD ↗". Sem bordas arredondadas.

### 2.2 Hero Section

- Fundo branco com blocos geométricos azuis e verdes (use `divs` com clip-path ou formas absolutas para criar o fundo atrás do homem).
- **Esquerda (Texto):** Tipografia gigante (ex: `text-7xl` ou `text-8xl`).
  - "I DESIGN." (Preto)
  - "I CODE." (Azul Elétrico)
  - "I ELEVATE BRANDS." (Preto, com "BRANDS." em destaque).
  - Subtítulo pequeno em cinza escuro abaixo.
  - Dois botões: "VIEW MY WORK ↗" (Verde Limão) e "AVAILABLE FOR FREELANCE" (Preto com texto branco).
- **Direita (Imagem):** Uma foto em preto e branco de um homem olhando para cima (use um placeholder de imagem). Aplique um bloco azul geométrico atrás dele e um "X" gigante em verde limão sobreposto.
- **Extremo Direita:** Textos pequenos verticais (UI/UX FOCUSED, PERFORMANCE DRIVEN, PIXEL PERFECT).

### 2.3 Featured Work (Portfólio em destaque)

- Fundo Preto. Título "FEATURED WORK" (branco) com link "SEE ALL PROJECTS ↗" (verde) à direita.
- Grid de 4 colunas. Cada card tem uma imagem de fundo escura, o nome do projeto (SPARK, NEXORA, VELOCE, OUTLIER) e uma seta para baixo no canto inferior esquerdo.
- O último card (OUTLIER) tem um gráfico simples e uma tag "+240%".

### 2.4 Case Studies

- Fundo Branco.
- **Esquerda:** Título "CASE STUDIES". Lista numerada (01, 02, 03) com os nomes (SPARK SAAS, NEXORA AGENCY, VELOCE STORE) e setas.
- **Direita:** Um grande card Azul Elétrico. Texto "FEATURED CASE STUDY / SPARK SAAS". Estatísticas grandes em branco (180%, 2.4X, 95+). Botão "READ FULL CASE STUDY ↗" (Verde Limão). Inclua uma imagem de mockup de dashboard de software em um notebook/tela.

### 2.5 Tools & Stack

- Fundo Branco, borda superior preta fina.
- Título "TOOLS & STACK".
- Linha horizontal de ícones (HTML, CSS, JS, TS, React, Next.js, Tailwind, GSAP, Figma, SASS) em caixas quadradas com bordas pretas finas e fundo branco.

### 2.6 Experience (Timeline)

- Fundo Preto.
- Título "EXPERIENCE".
- Linha do tempo horizontal com pontos e anos (2019, 2020, 2021, 2022, 2023, 2024). Textos pequenos embaixo de cada ano.
- À direita, um bloco Verde Limão com o texto "5+ YEARS OF EXPERIENCE".

### 2.7 What Clients Say (Depoimentos)

- Fundo Branco.
- Título "WHAT CLIENTS SAY".
- Grid de 3 colunas. Cada card tem fundo cinza muito claro, aspas grandes, texto do depoimento, foto redonda do cliente, nome e cargo.
- À direita dos cards, uma ilustração abstrata de um prédio em preto e branco (use uma imagem ou crie blocos geométricos).

### 2.8 Footer (CTA e Contato)

- Fundo Branco. Bordas pretas grossas separando as seções.
- **Esquerda (Bloco Azul Elétrico):** Texto gigante "LET'S BUILD SOMETHING GREAT TOGETHER." e um pequeno texto "↗ I'M AVAILABLE FOR FREELANCE PROJECTS".
- **Direita (Contato):** Lista vertical com ícones: Email (hello@devpixel.dev), Telefone, Localização (Worldwide), e um link "Let's start a project".
- **Base do Footer:** Fundo Preto. Textos de copyright e ícones sociais (Github, LinkedIn, Twitter/X).

---

## 🛠️ 3. REQUISITOS TÉCNICOS

1.  **Tailwind CSS:** Use as classes utilitárias do Tailwind para construir o layout. Use `grid` e `flex` extensivamente. Use `border-2` ou `border-4` pretas para os contornos do estilo neo-brutalista.
2.  **Responsividade:** O layout na imagem é desktop. Crie a versão mobile adaptando os grids para `grid-cols-1`.
3.  **Imagens:** Use `https://placehold.co/600x400/000000/FFFFFF?text=Image` ou links do Unsplash para as imagens e avatares, mantendo o contraste em preto e branco (aplique classes do Tailwind como `grayscale`).
4.  **Código Limpo:** Componentize o código. Crie componentes separados para `Header`, `Hero`, `WorkSection`, `CaseStudies`, `Experience`, `Testimonials`, e `Footer`.
5.  **Sem Erros:** O código deve rodar perfeitamente sem avisos ou erros no console.

**Comece gerando o código completo seguindo esta estrutura rigorosamente.**

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
