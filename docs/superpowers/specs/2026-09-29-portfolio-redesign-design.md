# Especificação de Design: Redesign do Portfólio Pessoal (TSA Tech)

**Data:** 2026-09-29  
**Status:** Aprovado para Planejamento  
**Autor:** Matheus Abella & Antigravity  

---

## 1. Visão Geral e Objetivos

O objetivo deste projeto é redesenhar integralmente a landing page do portfólio profissional de **Matheus Abella (TSA Tech)**. A aplicação é construída em **React 19 + TypeScript + Vite + Tailwind CSS 4 + Motion**, mantendo alta performance, design responsivo, acessibilidade e interações fluidas.

A experiência combina um layout moderno inspirado em referências contemporâneas de portfólio (ex: Emilly Moitinho) com uma identidade temática singular:
- **Tema Escuro (Dark Mode / Pôr do Sol):** Inspirado no crepúsculo/pôr do sol com tons quentes de vinho, coral, âmbar e dourado.
- **Tema Claro (Light Mode / Nascer do Sol):** Inspirado na aurora matinal com tons frescos de azul oceano, azul céu e toques solares dourados.

---

## 2. Sistema Visual e Design Tokens

### 2.1 Tipografia
- **Títulos & Display:** `Plus Jakarta Sans` (fontes 600, 700, 800) via Google Fonts.
- **Corpo de Texto:** `Plus Jakarta Sans` ou `Inter` (fontes 400, 500) com altura de linha confortável (`leading-relaxed`).
- **Código & Badges:** `JetBrains Mono` ou `monospace` para termos técnicos e tags de stack.

### 2.2 Paletas Temáticas

#### Tema Escuro (Sunset / Pôr do Sol)
- `bg-dark`: `#0d080c` (Fundo primário escuro com subtom crepuscular)
- `surface-dark`: `#170e17` (Superfície de cards e elementos elevados)
- `surface-border-dark`: `rgba(235, 127, 49, 0.15)` (Bordas sutis âmbar/coral)
- `sunset-crimson`: `#972828`
- `sunset-coral`: `#E45742`
- `sunset-amber`: `#EB7F31`
- `sunset-gold`: `#FCAD38`
- `text-dark-primary`: `#f8fafc`
- `text-dark-secondary`: `#cbd5e1`
- `accent-gradient`: `linear-gradient(135deg, #E45742 0%, #EB7F31 50%, #FCAD38 100%)`

#### Tema Claro (Sunrise / Nascer do Sol)
- `bg-light`: `#f9fbfe` (Fundo claro suave matinal)
- `surface-light`: `#ffffff` (Superfície limpa de cards)
- `surface-border-light`: `rgba(0, 97, 153, 0.12)` (Bordas em azul amanhecer)
- `sunrise-ocean`: `#006199`
- `sunrise-sky`: `#8ACFF8`
- `sunrise-pale`: `#F4EB6C`
- `sunrise-gold`: `#FFD444`
- `text-light-primary`: `#00253b`
- `text-light-secondary`: `#335368`
- `accent-gradient-light`: `linear-gradient(135deg, #006199 0%, #0284c7 60%, #FFD444 100%)`

---

## 3. Arquitetura de Componentes e Estrutura da Página

### 3.1 `Navbar`
- **Branding:** Logotipo/Texto "TSA Tech" / "Matheus Abella" com ícone estilizado.
- **Navegação Desktop:** Links de rolagem suave (`#sobre`, `#stack`, `#projetos`, `#contato`).
- **Alternador de Tema (Sunset/Sunrise):** Botão animado com ícones temáticos de transição entre sol da manhã e sol poente.
- **Menu Mobile:** Botão hambúrguer acessível que abre um menu dropdown/drawer responsivo com fechamento automático ao selecionar uma seção.

### 3.2 `HeroSection` (Apresentação & Perfil)
- **Grid Responsivo em 2 Colunas:**
  - **Coluna 1 (Texto & CTAs):**
    - Status badge pulsante: "🟢 Disponível para novos projetos / contratos".
    - Título principal com gradiente temático: "Matheus Abella — Engenheiro de Software Full Stack".
    - Bio direta sobre criação de sistemas escaláveis, arquiteturas resilientes e interfaces de alto padrão.
    - CTAs primário ("Explorar Projetos") e secundário ("Entrar em Contato").
  - **Coluna 2 (Foto & Aura Visual):**
    - Imagem do perfil (`assets/eu_square.jpeg`) em moldura moderna com cantos arredondados (`rounded-3xl`), sombra temática e efeito glow do Pôr do Sol/Nascer do Sol.

### 3.3 `TechStackSection` (Stack Tecnológica)
- Grade de 4 categorias estruturadas:
  1. **Frontend:** React, TypeScript, Tailwind CSS, Next.js, HTML5/CSS3.
  2. **Backend:** Node.js, Java (Spring Boot), Ruby on Rails, REST APIs, Microservices.
  3. **Bancos de Dados & Cache:** PostgreSQL, MySQL, Redis, MongoDB.
  4. **DevOps & Infraestrutura:** Docker, Git & GitHub Actions, Linux, Cloud & CI/CD.
- Cartões com hover interativo e badges com ícones/pontos luminosos.

### 3.4 `ProjectsPreviewSection` (Projetos em Destaque)
- Grid com os 3 projetos principais:
  1. **Fintech Core / Plataforma Financeira:** Gateway de pagamentos e liquidação em tempo real.
  2. **E-Commerce Scalable Engine:** Plataforma de alto volume com catálogo dinâmico e checkout otimizado.
  3. **DevOps & Observability Dashboard:** Painel de telemetria e métricas de infraestrutura com WebSockets.
- Cada card exibe imagem de capa com aspect ratio refinado, título, resumo executivo, pills da stack técnica e botão de ação **"Ver Detalhes do Projeto"**.

### 3.5 `ProjectDetailDrawer` (Slide-Over de Detalhes)
- Drawer deslizante pela lateral direita animado com `motion`.
- Backdrop blur escuro com fechamento ao clicar fora ou via tecla `Esc`.
- Botão explícito de fechar (`close`).
- **Seções internas do detalhe do projeto:**
  - Mockup/Thumbnail do projeto em alta resolução.
  - Título e subtítulo do escopo.
  - **Visão Geral:** Contexto do produto e objetivos.
  - **O Desafio:** Complexidades técnicas e gargalos superados.
  - **A Solução:** Decisões de engenharia, padrões de arquitetura e tecnologias aplicadas.
  - **Resultados e Métricas:** Impacto mensurável alcançado.
  - **Stack Tecnológica Completa:** Lista de todas as bibliotecas e ferramentas.
  - **Botões de Ação:** Links para "Código no GitHub" e "Demonstração ao Vivo".

### 3.6 `ContactSection` & `Footer`
- **Área de Contato Rápido:**
  - Link direto para perfil no **LinkedIn** (com ícone e link seguro `target="_blank"`).
  - Link direto para perfil no **GitHub** (com ícone e link seguro).
  - Card interativo com e-mail `mtsa.dev@gmail.com`:
    - Botão de 1 clique para "Copiar E-mail" com feedback de toast ("Copiado!").
    - Botão para abrir cliente de e-mail.
- **Footer:**
  - Assinatura "© {ano} Matheus Abella · TSA Tech. Todos os direitos reservados."
  - Links sociais e indicação de tecnologia (React & Tailwind CSS).

---

## 4. Gerenciamento de Estado & Acessibilidade

- `darkMode: boolean` (com persistência em `localStorage` e suporte à preferência do sistema operacional).
- `selectedProject: Project | null` (controla a abertura e o conteúdo do Drawer de Detalhes).
- `isMobileMenuOpen: boolean` (controla o menu de navegação em telas pequenas).
- **Acessibilidade:**
  - `role="dialog"` e `aria-modal="true"` no drawer.
  - Suporte completo a navegação por teclado (`Tab`, `Esc`).
  - Textos com contraste WCAG AA em ambos os temas.
  - Imagens com textos alternativos semânticos.

---

## 5. Plano de Verificação e Testes

1. **Build & Compilação:** Executar `npm run build` e `npm run lint` para garantir tipagem TypeScript sem erros.
2. **Interações do Drawer:** Testar abertura, fechamento por clique externo, botão de fechar e tecla `Esc`.
3. **Alternância de Tema:** Verificar fidelidade das cores Sunset no tema escuro e Sunrise no tema claro.
4. **Responsividade:** Validar em breakpoints Mobile (`375px`, `414px`), Tablet (`768px`) e Desktop (`1280px+`).
