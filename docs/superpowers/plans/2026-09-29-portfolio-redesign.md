# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesenhar integralmente a landing page do portfólio de Matheus "Lekod" Abella em React 19 + TypeScript + Tailwind CSS 4 + Motion, com identidade temática Pôr do Sol (Dark) / Nascer do Sol (Light) e Drawer lateral expansível de detalhes para os 3 projetos principais.

**Architecture:** Componentização modular em React com TypeScript puro e Tailwind CSS 4 `@theme`. O estado da aplicação gerencia `darkMode` (persistido em `localStorage`), `selectedProject` (que ativa o slide-over drawer de detalhes via `AnimatePresence`) e `isMobileMenuOpen`. Separação estrita entre dados (`src/data/portfolioData.ts`), tipos (`src/types/portfolio.ts`) e componentes de apresentação.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion (`motion/react`), Lucide React.

**Spec:** [docs/superpowers/specs/2026-09-29-portfolio-redesign-design.md](file:///home/mtsa/Projetos/Outros/landing-page/docs/superpowers/specs/2026-09-29-portfolio-redesign-design.md)

## Global Constraints

- Tipografia: `Plus Jakarta Sans` para display/títulos/corpo e `JetBrains Mono` para termos técnicos.
- Tema Dark (Pôr do Sol): `#0d080c` (bg), `#170e17` (surface), acentos em `#972828`, `#E45742`, `#EB7F31`, `#FCAD38`.
- Tema Light (Nascer do Sol): `#f9fbfe` (bg), `#ffffff` (surface), acentos em `#006199`, `#8ACFF8`, `#F4EB6C`, `#FFD444`.
- Acessibilidade: Drawer com `role="dialog"`, `aria-modal="true"`, foco acessível e fechamento com tecla `Esc`.
- Responsividade: Compatibilidade total de 360px a telas 4K.

## Review Focus

1. **Drawer Dismiss via Tecla `Esc` & Clique Externo:** Pressionar `Esc` ou clicar no backdrop fecha o drawer sem disparar cliques no conteúdo subjacente.
2. **Navegação Mobile:** O menu hambúrguer abre o drawer/dropdown mobile e fecha automaticamente ao clicar em qualquer âncora de seção.
3. **Persistência de Tema:** A alternância entre Nascer do Sol e Pôr do Sol salva o estado em `localStorage` e aplica a classe `.dark` no elemento raiz.
4. **Interação de Cópia de E-mail:** Clicar em "Copiar E-mail" copia `mtsa.dev@gmail.com` para a área de transferência e exibe confirmação visual temporária ("Copiado!").
5. **Fallback de Imagens:** Caso `Icon.png` ou thumbnails específicas não estejam disponíveis, a interface exibe fallbacks vetoriais elegantes e sem quebra visual.

---

### Task 1: Setup de Tipografia, Design Tokens & Configuração Base

**Files:**
- Modify: `index.html:1-18`
- Modify: `src/index.css:1-23`

**Interfaces:**
- Produces: Variáveis CSS temáticas no `@theme` do Tailwind CSS 4 para Dark (Sunset) e Light (Sunrise), classes base e importação de fontes Google (`Plus Jakarta Sans`, `JetBrains Mono`).

- [ ] **Step 1: Atualizar `index.html` com fontes e metadados**
  Substituir a fonte `Preahvihear` por `Plus Jakarta Sans` (pesos 400, 500, 600, 700, 800) e `JetBrains Mono`, atualizar título da página para `Matheus "Lekod" Abella | Engenheiro de Software` e favicon.

- [ ] **Step 2: Atualizar `src/index.css` com paleta Sunset & Sunrise**
  Configurar no `@theme` do Tailwind 4 as variáveis para `sunset-crimson` (`#972828`), `sunset-coral` (`#E45742`), `sunset-amber` (`#EB7F31`), `sunset-gold` (`#FCAD38`), `sunrise-ocean` (`#006199`), `sunrise-sky` (`#8ACFF8`), `sunrise-pale` (`#F4EB6C`), `sunrise-gold` (`#FFD444`), fundos e superfícies.

- [ ] **Step 3: Validar compilação**
  Run: `rtk npm run build`
  Expected: Build concluído com sucesso sem erros de CSS.

- [ ] **Step 4: Commit**
  ```bash
  rtk git add index.html src/index.css
  rtk git commit -m "style: configure sunset/sunrise design tokens and modern typography"
  ```

---

### Task 2: Modelagem de Dados & Tipagem TypeScript

**Files:**
- Create: `src/types/portfolio.ts`
- Create: `src/data/portfolioData.ts`

**Interfaces:**
- Produces: Tipos `Project`, `TechCategory`, `AuthorProfile` e exportação dos dados dos 3 projetos (`StockSpot`, `Divide Aí`, `Escudeiro`), das 4 categorias de tecnologias e informações de perfil.

- [ ] **Step 1: Criar interfaces em `src/types/portfolio.ts`**
  Definir tipos estruturados para `Project` (id, title, subtitle, summary, overview, challenge, solution, results, tags, githubUrl, liveUrl, image, metrics), `TechCategory` (title, icon, skills) e `AuthorProfile`.

- [ ] **Step 2: Criar dados do portfólio em `src/data/portfolioData.ts`**
  Implementar os dados completos conforme a especificação aprovada para os 3 projetos principais (`StockSpot`, `Divide Aí`, `Escudeiro`), categorias de stack (Frontend, Backend, Mobile, Infraestrutura & DevOps) e links sociais.

- [ ] **Step 3: Validar tipagem com TypeScript compiler**
  Run: `rtk npx tsc --noEmit`
  Expected: 0 erros de tipagem.

- [ ] **Step 4: Commit**
  ```bash
  rtk git add src/types/portfolio.ts src/data/portfolioData.ts
  rtk git commit -m "feat: add portfolio types and structured project data"
  ```

---

### Task 3: Componente Navbar & Alternador de Tema Sunset/Sunrise

**Files:**
- Create: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: `darkMode: boolean`, `setDarkMode: (v: boolean) => void`
- Produces: Header sticky com branding "Matheus 'Lekod' Abella", navegação desktop suave, botão de troca de tema animado e menu mobile expansível.

- [ ] **Step 1: Criar componente `Navbar` em `src/components/Navbar.tsx`**
  Implementar suporte a navegação responsiva, estado `isMobileMenuOpen`, transições de menu hambúrguer, botão de tema com ícones de sol poente / sol nascente e links de rolagem âncora (`#sobre`, `#stack`, `#projetos`, `#contato`).

- [ ] **Step 2: Validar tipagem e build**
  Run: `rtk npx tsc --noEmit`
  Expected: PASS.

- [ ] **Step 3: Commit**
  ```bash
  rtk git add src/components/Navbar.tsx
  rtk git commit -m "feat: add responsive navbar with sunset/sunrise theme toggle"
  ```

---

### Task 4: Componentes HeroSection & TechStackSection

**Files:**
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/TechStackSection.tsx`

**Interfaces:**
- Consumes: Dados do `portfolioData.ts` e handlers de navegação/contato.
- Produces: Seção Hero com foto e status badge pulsante; Seção de Stack categorizada em 4 blocos interativos.

- [ ] **Step 1: Criar `src/components/HeroSection.tsx`**
  Implementar layout em duas colunas: coluna de texto com badge de status ativo ("🟢 Disponível para novos projetos"), título com gradiente temático, bio profissional e CTAs; coluna visual com a foto `assets/eu_square.jpeg` emoldurada com glow temático adaptativo (Sunset no dark / Sunrise no light).

- [ ] **Step 2: Criar `src/components/TechStackSection.tsx`**
  Implementar grade com 4 categorias (Frontend, Backend, Mobile, Infraestrutura & DevOps) com cards interativos, badges estilizados e efeitos hover suaves.

- [ ] **Step 3: Validar compilação**
  Run: `rtk npx tsc --noEmit`
  Expected: PASS.

- [ ] **Step 4: Commit**
  ```bash
  rtk git add src/components/HeroSection.tsx src/components/TechStackSection.tsx
  rtk git commit -m "feat: add hero section with user photo and categorized tech stack grid"
  ```

---

### Task 5: Componente ProjectsPreviewSection & ProjectDetailDrawer

**Files:**
- Create: `src/components/ProjectsPreviewSection.tsx`
- Create: `src/components/ProjectDetailDrawer.tsx`

**Interfaces:**
- Consumes: `Project[]`, `selectedProject: Project | null`, `onSelectProject: (p: Project) => void`, `onCloseDrawer: () => void`.
- Produces: Seção de preview com 3 cards de projetos e Drawer lateral expansível com estudo de caso detalhado.

- [ ] **Step 1: Criar `src/components/ProjectsPreviewSection.tsx`**
  Renderizar os 3 projetos principais (`StockSpot`, `Divide Aí`, `Escudeiro`) em cards modernos com thumbnail, título, resumo, tags técnicas e botão "Ver Detalhes do Projeto".

- [ ] **Step 2: Criar `src/components/ProjectDetailDrawer.tsx`**
  Implementar o slide-over drawer com `motion` e `AnimatePresence`. Adicionar listener global para tecla `Esc`, bloqueio de rolagem do body quando aberto, backdrop blur, e renderização das seções: Visão Geral, O Desafio, A Solução, Resultados & Métricas, Stack Completa e Botões de Ação (GitHub/Live Demo).

- [ ] **Step 3: Validar compilação e tipagem**
  Run: `rtk npx tsc --noEmit`
  Expected: PASS.

- [ ] **Step 4: Commit**
  ```bash
  rtk git add src/components/ProjectsPreviewSection.tsx src/components/ProjectDetailDrawer.tsx
  rtk git commit -m "feat: add projects preview grid and interactive project detail drawer"
  ```

---

### Task 6: Componentes ContactSection, Footer & Integração Principal em App.tsx

**Files:**
- Create: `src/components/ContactSection.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx:1-731`

**Interfaces:**
- Produces: Seção de contato direto (LinkedIn, GitHub, botão copiar e-mail com toast), footer com direitos reservados e orquestração limpa em `App.tsx`.

- [ ] **Step 1: Criar `src/components/ContactSection.tsx`**
  Implementar cards para LinkedIn e GitHub com ícones e links externos, além de card de e-mail com botão interativo "Copiar E-mail" e estado visual temporário de confirmação.

- [ ] **Step 2: Criar `src/components/Footer.tsx`**
  Implementar footer com branding, ano dinâmico e links sociais.

- [ ] **Step 3: Refatorar `src/App.tsx`**
  Substituir o código monolítico anterior pela composição modular dos novos componentes (`Navbar`, `HeroSection`, `TechStackSection`, `ProjectsPreviewSection`, `ProjectDetailDrawer`, `ContactSection`, `Footer`), orquestrando o estado do tema e do drawer.

- [ ] **Step 4: Executar testes de compilação e linter**
  Run: `rtk npm run build && rtk npm run lint`
  Expected: Build final concluído em `dist/` com 0 erros.

- [ ] **Step 5: Commit**
  ```bash
  rtk git add src/components/ContactSection.tsx src/components/Footer.tsx src/App.tsx
  rtk git commit -m "feat: integrate redesigned portfolio with contact section, footer and modular app layout"
  ```

---

### Task 7: Verificação Final, Testes & Polish de Acessibilidade

**Files:**
- Test/Verify: Toda a aplicação no navegador / bundle local.

- [ ] **Step 1: Verificar integridade do build de produção**
  Run: `rtk npm run build`
  Expected: Build executado com sucesso e arquivos gerados em `dist/`.

- [ ] **Step 2: Executar detector de qualidade de design do Impeccable**
  Run: `rtk /home/mtsa/.gemini/config/skills/impeccable/scripts/impeccable detect --json index.html src/App.tsx`
  Expected: 0 violações de regras.

- [ ] **Step 3: Commit final**
  ```bash
  rtk git add .
  rtk git commit -m "chore: verify build and design quality floor compliance"
  ```
