/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Novo Contato de ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
    
    window.location.href = `mailto:mtsa.dev@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-surface-dark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10">
        <div className="p-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-center">
          <h3 className="text-xl font-bold text-[#111318] dark:text-white">Iniciar Projeto</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
            <input required type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111318] text-[#111318] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input required type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111318] text-[#111318] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
            <textarea required id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111318] text-[#111318] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Conte-me sobre o seu projeto..."></textarea>
          </div>
          <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 h-12 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all">
            <span className="material-symbols-outlined text-sm">send</span>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = ({ darkMode, setDarkMode, onOpenModal }: { darkMode: boolean, setDarkMode: (v: boolean) => void, onOpenModal: () => void }) => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[#111318] dark:text-white">
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined text-2xl">code</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">TSA Tech</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#servicos">Serviços</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#tecnologias">Tecnologias</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#portfolio">Projetos</a>
          </nav>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={onOpenModal} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-blue-500/20">
            <span>Contratar</span>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4 text-[#111318] dark:text-white">
          <button onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-center">
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-background-dark">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 lg:py-32 flex flex-col items-center gap-12">
        <div className="flex flex-col gap-6 w-full max-w-4xl z-10 items-center">
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Disponível para Projetos</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#111318] dark:text-white">
              Transformando Ideias em <span className="text-primary relative inline-block">Software <svg className="absolute w-full h-3 bottom-1 left-0 text-primary/30 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg></span> de Alta Performance
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl font-body">
              Desenvolvedor Full Stack especializado em arquiteturas escaláveis, código limpo e experiências web modernas que impulsionam negócios.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <button onClick={onOpenModal} className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-500/20 transition-all hover:translate-y-[-2px]">
              <span>Iniciar Projeto</span>
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </button>
            <button onClick={scrollToPortfolio} className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-[#111318] dark:text-white text-base font-bold transition-all hover:bg-gray-50 dark:hover:bg-white/5">
              <span>Ver Portfólio</span>
            </button>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm font-medium text-gray-500 dark:text-gray-400 justify-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span>Código Otimizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span>Design Responsivo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-[#0f172a]" id="sobre">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative aspect-square w-full max-w-md mx-auto md:mr-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white">Sobre Mim</h2>
            <h3 className="text-xl font-medium text-primary">Engenheiro de Software & Solucionador de Problemas</h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 font-body">
              <p className="mb-4">
                Com mais de 5 anos de experiência no desenvolvimento de software, meu foco é criar soluções limpas, eficientes e escaláveis. Apaixonado por transformar problemas complexos em interfaces simples e funcionais.
              </p>
              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web e evoluiu para uma carreira dedicada à excelência técnica. Acredito que um bom código não é apenas funcional, mas também legível e sustentável.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">5+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Anos de Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Projetos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">20+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Clientes Felizes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Comprometimento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="servicos">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">O que eu faço</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white mb-4">Serviços Especializados</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-body">Soluções completas desenhadas para escalar o seu negócio digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark hover:bg-white dark:hover:bg-[#253248] border border-transparent hover:border-gray-200 dark:border-white/5 dark:hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">web</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111318] dark:text-white">Desenvolvimento Web Full Stack</h3>
            <p className="text-gray-600 dark:text-gray-400 font-body mb-4">Criação de aplicações web modernas, responsivas e rápidas utilizando React, Next.js e Node.js.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-primary text-base">check</span> SPAs & PWAs
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-primary text-base">check</span> Dashboards Interativos
              </li>
            </ul>
          </div>
          <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark hover:bg-white dark:hover:bg-[#253248] border border-transparent hover:border-gray-200 dark:border-white/5 dark:hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">smartphone</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111318] dark:text-white">Desenvolvimento Mobile</h3>
            <p className="text-gray-600 dark:text-gray-400 font-body mb-4">Criação de aplicativos nativos e multiplataforma para Android e iOS com alta performance.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-base">check</span> React Native & Flutter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-base">check</span> Publicação nas Lojas
              </li>
            </ul>
          </div>
          <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark hover:bg-white dark:hover:bg-[#253248] border border-transparent hover:border-gray-200 dark:border-white/5 dark:hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">dns</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111318] dark:text-white">Arquitetura de Sistemas & API</h3>
            <p className="text-gray-600 dark:text-gray-400 font-body mb-4">Desenho de bancos de dados eficientes e APIs RESTful/GraphQL seguras e escaláveis.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-base">check</span> Microserviços
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-base">check</span> Integrações Complexas
              </li>
            </ul>
          </div>
          <div className="group p-8 rounded-2xl bg-gray-50 dark:bg-surface-dark hover:bg-white dark:hover:bg-[#253248] border border-transparent hover:border-gray-200 dark:border-white/5 dark:hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111318] dark:text-white">Otimização & Performance</h3>
            <p className="text-gray-600 dark:text-gray-400 font-body mb-4">Auditoria técnica e otimização para garantir tempos de carregamento mínimos e melhor SEO.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-base">check</span> Core Web Vitals
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-base">check</span> Acessibilidade (WCAG)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-[#0f172a]" id="tecnologias">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-[#111318] dark:text-white mb-10 text-center">Stack Tecnológico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">desktop_windows</span> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">storage</span> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Ruby on Rails', 'Java', 'Node.js', 'PostgreSQL', 'GraphQL', 'Redis'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">smartphone</span> Mobile
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'React Native', 'iOS', 'Android', 'Dart'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">smart_toy</span> Inteligência Artificial
            </h3>
            <div className="flex flex-wrap gap-2">
              {['OpenAI', 'Gemini', 'LangChain', 'TensorFlow', 'PyTorch'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 lg:col-span-2 lg:col-start-2">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">settings_suggest</span> Tools & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'AWS', 'Google Cloud', 'Git', 'CI/CD', 'Figma'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white">Projetos em Destaque</h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline">
            Ver todos os projetos <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg group relative aspect-video border border-transparent dark:border-white/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform" href="#">Ver Projeto</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-bold px-2 py-1 rounded">Fintech</span>
              <span className="text-gray-400 text-sm">2023</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#111318] dark:text-white">Plataforma de Gestão Financeira</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Desafio:</p>
                <p className="text-gray-600 dark:text-gray-400 font-body text-sm">Os usuários precisavam de uma maneira de visualizar grandes volumes de dados financeiros em tempo real sem lentidão.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Solução:</p>
                <p className="text-gray-600 dark:text-gray-400 font-body text-sm">Desenvolvimento de um dashboard SPA usando React e WebSockets para atualizações em tempo real, com backend otimizado em Node.js.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Resultado:</p>
                <p className="text-green-600 dark:text-green-400 font-bold font-body text-sm">↑ 40% na retenção de usuários e redução de 60% no tempo de carregamento.</p>
              </div>
            </div>
            <div className="flex gap-2">
              {['React', 'Node.js', 'D3.js'].map(tech => (
                <span key={tech} className="px-2 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs text-gray-500 dark:text-gray-400">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg group relative aspect-video border border-transparent dark:border-white/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform" href="#">Ver Projeto</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 text-xs font-bold px-2 py-1 rounded">E-commerce</span>
              <span className="text-gray-400 text-sm">2022</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#111318] dark:text-white">App de Marketplace Sustentável</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Desafio:</p>
                <p className="text-gray-600 dark:text-gray-400 font-body text-sm">Criar um marketplace multi-vendedor com sistema de geolocalização complexo e pagamentos integrados.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Solução:</p>
                <p className="text-gray-600 dark:text-gray-400 font-body text-sm">Aplicativo Progressive Web App (PWA) utilizando Next.js para SEO e performance, integrado com Stripe Connect.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white mb-1">Resultado:</p>
                <p className="text-green-600 dark:text-green-400 font-bold font-body text-sm">Lançamento bem-sucedido com 5k+ usuários no primeiro mês.</p>
              </div>
            </div>
            <div className="flex gap-2">
              {['Next.js', 'Stripe', 'PostGIS'].map(tech => (
                <span key={tech} className="px-2 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs text-gray-500 dark:text-gray-400">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-[#0f172a]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#111318] dark:text-white">Por que trabalhar comigo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-surface-dark rounded-xl text-center border border-transparent dark:border-white/5">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <h3 className="font-bold mb-2 text-[#111318] dark:text-white">Comunicação Clara</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Sem jargões técnicos desnecessários. Transparência total.</p>
          </div>
          <div className="p-6 bg-white dark:bg-surface-dark rounded-xl text-center border border-transparent dark:border-white/5">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="font-bold mb-2 text-[#111318] dark:text-white">Prazos Cumpridos</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Respeito rigoroso ao cronograma e entregas pontuais.</p>
          </div>
          <div className="p-6 bg-white dark:bg-surface-dark rounded-xl text-center border border-transparent dark:border-white/5">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">code_off</span>
            </div>
            <h3 className="font-bold mb-2 text-[#111318] dark:text-white">Clean Code</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Código fácil de manter, testável e bem documentado.</p>
          </div>
          <div className="p-6 bg-white dark:bg-surface-dark rounded-xl text-center border border-transparent dark:border-white/5">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3 className="font-bold mb-2 text-[#111318] dark:text-white">Suporte Pós-Venda</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Garantia e acompanhamento após o lançamento do projeto.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#111318] dark:text-white">O que dizem os clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl relative border border-transparent dark:border-white/5">
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-gray-200 dark:text-gray-700">format_quote</span>
            <p className="text-gray-600 dark:text-gray-300 font-body italic mb-6 relative z-10">"O nível técnico e a atenção aos detalhes superaram nossas expectativas. O projeto foi entregue antes do prazo e a qualidade do código facilitou muito a manutenção futura pela nossa equipe interna."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop")' }}></div>
              <div>
                <h4 className="font-bold text-[#111318] dark:text-white">Ricardo Mendes</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">CTO, TechFin Solutions</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl relative border border-transparent dark:border-white/5">
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-gray-200 dark:text-gray-700">format_quote</span>
            <p className="text-gray-600 dark:text-gray-300 font-body italic mb-6 relative z-10">"Excelente profissional! Conseguiu traduzir nossas ideias vagas em um produto funcional e bonito. A comunicação foi fluida durante todo o processo."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop")' }}></div>
              <div>
                <h4 className="font-bold text-[#111318] dark:text-white">Ana Souza</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">Founder, EcoMarket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-primary/5 dark:bg-blue-900/10">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#111318] dark:text-white">Vamos construir algo incrível juntos?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 font-body">Estou disponível para novos projetos. Se você tem uma ideia ou precisa escalar seu time de tecnologia, vamos conversar.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onOpenModal} className="flex items-center justify-center gap-2 h-14 px-8 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-1">
            <span className="material-symbols-outlined">mail</span>
            Entrar em Contato
          </button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a className="text-gray-400 hover:text-primary transition-colors" href="https://www.linkedin.com/in/matheus-abella/" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
            </svg>
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="https://github.com/matheustsa" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">GitHub</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark py-8 border-t border-[#f0f2f4] dark:border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-body">© 2023 DevPortfolio. Todos os direitos reservados.</p>
        <div className="flex gap-6 text-sm">
          <a className="text-gray-500 hover:text-primary transition-colors" href="#">Termos</a>
          <a className="text-gray-500 hover:text-primary transition-colors" href="#">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Features />
      <Testimonials />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
    </div>
  );
}
