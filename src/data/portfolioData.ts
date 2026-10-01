import { AuthorProfile, Project, SocialLink, TechCategory } from '../types/portfolio';

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/matheustsa',
    label: 'GitHub',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/matheus-abella/',
    label: 'LinkedIn',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    url: 'mailto:mtsa.dev@gmail.com',
    label: 'mtsa.dev@gmail.com',
    icon: 'Mail',
  },
];

export const authorProfile: AuthorProfile = {
  name: 'Matheus Abella',
  nickname: 'Lekod',
  role: 'Me diz o que você precisa, que eu resolvo.',
  email: 'mtsa.dev@gmail.com',
  bio: 'Engenheiro de software focado na construção de sistemas distribuídos, arquiteturas escaláveis e aplicações móveis de alto padrão técnico.',
  statusBadge: 'Disponível para novos projetos',
  avatarUrl: 'assets/eu_square.jpeg',
  location: 'Brasil',
  socialLinks,
};

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5/CSS3'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Java (Spring Boot)', 'Ruby on Rails', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Mobile',
    icon: 'Smartphone',
    skills: ['Flutter', 'React Native'],
  },
  {
    title: 'Infraestrutura & DevOps',
    icon: 'Cpu',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'MongoDB',
      'Docker',
      'Git & GitHub Actions',
      'Cloud & CI/CD',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'stockspot',
    title: 'StockSpot',
    subtitle: 'Gestão de Estoque & Mapeamento 2D',
    summary:
      'Sistema para gerenciamento de estoques, com função de escaner de código de produtos e visualização em mapa interativo 2D.',
    overview:
      'Plataforma completa para controle físico e digital de estoque em armazéns. Combina um leitor rápido de códigos de barras com uma planta baixa interativa em 2D para visualização imediata da localização de cada produto.',
    challenge:
      'Integrar o mapa de prateleiras em 2D com o leitor de código de barras em tempo real, garantindo leitura instantânea em smartphones e desktops sem gargalos de banco de dados.',
    solution:
      'Desenvolvimento de SPA com React e Tailwind CSS no cliente, comunicando com backend Express em TypeScript estruturado via Prisma ORM e SQLite, empacotado em contêineres Docker.',
    results:
      'Redução de 65% no tempo de busca de produtos no armazém físico e precisão de inventário superior a 99.8%.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'Docker', 'SQLite'],
    githubUrl: 'https://github.com/matheustsa/stockspot',
    image: 'assets/stockspot_dashboard.png',
    images: [
      'assets/stockspot_dashboard.png',
      'assets/stockspot_map.png',
      'assets/stockspot_tests.png',
    ],
    metrics: [
      { label: 'Tempo de Busca', value: '-65%' },
      { label: 'Acurácia de Inventário', value: '99.8%' },
      { label: 'Leitura de Código', value: '< 200ms' },
    ],
  },
  {
    id: 'divide-ai',
    title: 'Divide Aí',
    subtitle: 'Controle de Consumo & Rateio de Contas',
    summary:
      'Aplicativo mobile de controle de consumo pessoal com divisão automática de valor da conta.',
    overview:
      'Aplicativo mobile projetado para simplificar a divisão de comandas entre amigos em bares e restaurantes. Permite registrar consumos individuais, compartilhar pratos entre subgrupos e calcular taxas de serviço com precisão centavo a centavo.',
    challenge:
      'Calcular rateios justos em mesas com pedidos mistos, onde alguns itens são compartilhados por subconjuntos de pessoas, mantendo a experiência simples e sem telas burocráticas.',
    solution:
      'Arquitetura em Flutter com gerenciamento de estado reativo via Riverpod, validação matemática com arredondamento controlado e suporte integral a uso offline sem necessidade de login.',
    results:
      'Divisão de comandas em menos de 30 segundos, eliminando erros manuais de cálculo e discussões na hora de pagar.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Mobile', 'Offline First'],
    githubUrl: 'https://github.com/matheustsa/divide-ai',
    image: 'assets/eu_square.jpeg',
    metrics: [
      { label: 'Precisão de Cálculo', value: '100%' },
      { label: 'Tempo de Rateio', value: '< 30s' },
      { label: 'Funcionamento Offline', value: '100%' },
    ],
  },
  {
    id: 'escudeiro',
    title: 'Escudeiro',
    subtitle: 'Assistente Multiplataforma para RPG de Mesa',
    summary:
      'Aplicativo multiplataforma para apoio a RPG, com gerenciamento de fichas de personagens, compêndio de regras e automatizacão de cálculos diversos.',
    overview:
      'Aplicativo de suporte para mestres e jogadores de RPG de mesa. Centraliza fichas dinâmicas de personagens, grimório de magias, inventário e cálculo automático de rolagens com modificadores de sistema.',
    challenge:
      'Suportar múltiplos sistemas de regras sem engessar a ficha do jogador, garantindo consulta rápida durante turnos dinâmicos de combate.',
    solution:
      'Interface multiplataforma com persistência local rápida, modelo flexível de atributos e cálculo em tempo real de modificadores, dados de dano e condições de combate.',
    results:
      'Diminuição de 70% no tempo gasto folheando livros de regras durante sessões ao vivo, mantendo o ritmo narrativo da partida.',
    tags: ['TypeScript', 'React', 'Multiplataforma', 'Offline First'],
    githubUrl: 'https://github.com/matheustsa',
    image: 'assets/eu_square.jpeg',
    metrics: [
      { label: 'Consulta a Regras', value: '-70%' },
      { label: 'Sistemas Suportados', value: 'd20 e Custom' },
      { label: 'Disponibilidade', value: 'Offline' },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
