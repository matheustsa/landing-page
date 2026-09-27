/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 bg-white dark:bg-surface-dark w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10"
          >
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
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="mt-2 w-full flex items-center justify-center gap-2 h-12 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30 transition-all"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ darkMode, setDarkMode, onOpenModal }: { darkMode: boolean, setDarkMode: (v: boolean) => void, onOpenModal: () => void }) => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 text-[#111318] dark:text-white cursor-pointer"
        >
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined text-2xl">code</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">TSA Tech</h2>
        </motion.div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#servicos">Serviços</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#tecnologias">Tecnologias</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#portfolio">Projetos</a>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal} 
            className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-blue-500/20"
          >
            <span>Contratar</span>
          </motion.button>
        </div>
        <div className="md:hidden flex items-center gap-4 text-[#111318] dark:text-white">
          <button onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-center">
            <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-100 h-100 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-75 h-75 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 lg:py-32 flex flex-col items-center gap-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 w-full max-w-4xl z-10 items-center text-center"
        >
          <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Disponível para Projetos</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} custom={1} className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#111318] dark:text-white">
            Transformando Ideias em <span className="text-primary relative inline-block">Software <svg className="absolute w-full h-3 bottom-1 left-0 text-primary/30 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg></span> de Alta Performance
          </motion.h1>

          <motion.h2 variants={fadeInUp} custom={2} className="text-lg text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-xl font-body">
            Desenvolvedor Full Stack especializado em arquiteturas escaláveis, código limpo e experiências web modernas que impulsionam negócios.
          </motion.h2>

          <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-4 mt-2 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal} 
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-500/20 transition-all"
            >
              <span>Iniciar Projeto</span>
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio} 
              className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-[#111318] dark:text-white text-base font-bold transition-all hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <span>Ver Portfólio</span>
            </motion.button>
          </motion.div>

          <motion.div variants={fadeInUp} custom={4} className="flex items-center gap-6 mt-6 text-sm font-medium text-gray-500 dark:text-gray-400 justify-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span>Código Otimizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span>Design Responsivo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-20 overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square w-full max-w-md mx-auto md:mr-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10" 
              style={{ backgroundImage: 'url("/assets/eu_square.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-7/12 flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold text-[#111318] dark:text-white">Sobre Mim</h2>
            <h3 className="text-xl font-medium text-primary">Engenheiro de Software & Solucionador de Problemas</h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 font-body">
              <p className="mb-4">
                Com mais de 7 anos de experiência no desenvolvimento de software, meu foco é criar soluções limpas, eficientes e escaláveis. Apaixonado por transformar problemas complexos em interfaces simples e funcionais.
              </p>
              <p>
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web e evoluiu para uma carreira dedicada à excelência técnica. Acredito que um bom código não é apenas funcional, mas também legível e sustentável.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {[
                { number: "7+", label: "Anos de Experiência" },
                { number: "50+", label: "Projetos concluídos" },
                { number: "20+", label: "Clientes Satisfeitos" },
                { number: "100%", label: "Comprometimento" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-bold text-primary">{stat.number}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: "web",
      colorClass: "bg-blue-100 dark:bg-blue-500/10 text-primary",
      checkColor: "text-primary",
      title: "Desenvolvimento Web Full Stack",
      desc: "Criação de aplicações web modernas, responsivas e rápidas utilizando React, Next.js e Node.js.",
      bullets: ["SPAs & PWAs", "Dashboards Interativos"]
    },
    {
      icon: "smartphone",
      colorClass: "bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400",
      checkColor: "text-orange-600 dark:text-orange-400",
      title: "Desenvolvimento Mobile",
      desc: "Criação de aplicativos nativos e multiplataforma para Android e iOS com alta performance.",
      bullets: ["React Native & Flutter", "Publicação nas Lojas"]
    },
    {
      icon: "dns",
      colorClass: "bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
      checkColor: "text-purple-600 dark:text-purple-400",
      title: "Arquitetura de Sistemas & API",
      desc: "Desenho de bancos de dados eficientes e APIs RESTful/GraphQL seguras e escaláveis.",
      bullets: ["Microserviços", "Integrações Complexas"]
    },
    {
      icon: "rocket_launch",
      colorClass: "bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400",
      checkColor: "text-green-600 dark:text-green-400",
      title: "Otimização & Performance",
      desc: "Auditoria técnica e otimização para garantir tempos de carregamento mínimos e melhor SEO.",
      bullets: ["Core Web Vitals", "Acessibilidade (WCAG)"]
    }
  ];

  return (
    <section className="py-24" id="servicos">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">O que eu faço</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white mb-4">Serviços Especializados</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-body">Soluções completas desenhadas para escalar o seu negócio digital.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md hover:bg-white dark:hover:bg-[#253248] border border-gray-200/50 dark:border-white/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${srv.colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111318] dark:text-white">{srv.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-body mb-4">{srv.desc}</p>
              <ul className="space-y-2">
                {srv.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className={`material-symbols-outlined ${srv.checkColor} text-base`}>check</span> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-20" id="tecnologias">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#111318] dark:text-white mb-10 text-center"
        >
          Stack Tecnológico
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/10 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">desktop_windows</span> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <motion.span whileHover={{ scale: 1.08 }} key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 cursor-default">{tech}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/10 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">storage</span> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Ruby on Rails', 'Java', 'Node.js', 'PostgreSQL', 'GraphQL', 'Redis'].map(tech => (
                <motion.span whileHover={{ scale: 1.08 }} key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 cursor-default">{tech}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/10 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">smartphone</span> Mobile
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'React Native', 'iOS', 'Android', 'Dart'].map(tech => (
                <motion.span whileHover={{ scale: 1.08 }} key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 cursor-default">{tech}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/10 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">smart_toy</span> Inteligência Artificial
            </h3>
            <div className="flex flex-wrap gap-2">
              {['OpenAI', 'Gemini', 'LangChain', 'TensorFlow', 'PyTorch'].map(tech => (
                <motion.span whileHover={{ scale: 1.08 }} key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 cursor-default">{tech}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-white/10 lg:col-span-2 lg:col-start-2 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-primary">settings_suggest</span> Tools & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'AWS', 'Google Cloud', 'Git', 'CI/CD', 'Figma'].map(tech => (
                <motion.span whileHover={{ scale: 1.08 }} key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 cursor-default">{tech}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111318] dark:text-white">Projetos em Destaque</h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline">
            Ver todos os projetos <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20 items-center"
        >
          <div className="lg:w-1/2 w-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg group relative aspect-video border border-transparent dark:border-white/5" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform" href="#">Ver Projeto</a>
              </div>
            </motion.div>
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center"
        >
          <div className="lg:w-1/2 w-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg group relative aspect-video border border-transparent dark:border-white/5" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform" href="#">Ver Projeto</a>
              </div>
            </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const featuresList = [
    { icon: "chat", title: "Comunicação Clara", desc: "Sem jargões técnicos desnecessários. Transparência total." },
    { icon: "schedule", title: "Prazos Cumpridos", desc: "Respeito rigoroso ao cronograma e entregas pontuais." },
    { icon: "code_off", title: "Clean Code", desc: "Código fácil de manter, testável e bem documentado." },
    { icon: "support_agent", title: "Suporte Pós-Venda", desc: "Garantia e acompanhamento após o lançamento do projeto." }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-[#111318] dark:text-white"
        >
          Por que trabalhar comigo?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md rounded-xl text-center border border-gray-200/50 dark:border-white/10 shadow-sm"
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="font-bold mb-2 text-[#111318] dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-[#111318] dark:text-white"
        >
          O que dizem os clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-8 rounded-2xl relative border border-gray-200/50 dark:border-white/10"
          >
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-gray-200 dark:text-gray-700">format_quote</span>
            <p className="text-gray-600 dark:text-gray-300 font-body italic mb-6 relative z-10">"O nível técnico e a atenção aos detalhes superaram nossas expectativas. O projeto foi entregue antes do prazo e a qualidade do código facilitou muito a manutenção futura pela nossa equipe interna."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop")' }}></div>
              <div>
                <h4 className="font-bold text-[#111318] dark:text-white">Ricardo Mendes</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">CTO, TechFin Solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white/70 dark:bg-surface-dark/80 backdrop-blur-md p-8 rounded-2xl relative border border-gray-200/50 dark:border-white/10"
          >
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-gray-200 dark:text-gray-700">format_quote</span>
            <p className="text-gray-600 dark:text-gray-300 font-body italic mb-6 relative z-10">"Excelente profissional! Conseguiu traduzir nossas ideias vagas em um produto funcional e bonito. A comunicação foi fluida durante todo o processo."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop")' }}></div>
              <div>
                <h4 className="font-bold text-[#111318] dark:text-white">Ana Souza</h4>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">Founder, EcoMarket</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-200 mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-[#111318] dark:text-white"
        >
          Vamos construir algo incrível juntos?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 font-body"
        >
          Estou disponível para novos projetos. Se você tem uma ideia ou precisa escalar seu time de tecnologia, vamos conversar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal} 
            className="flex items-center justify-center gap-2 h-14 px-8 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/40 transition-all"
          >
            <span className="material-symbols-outlined">mail</span>
            Entrar em Contato
          </motion.button>
        </motion.div>

        <div className="mt-12 flex justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.2, color: "#3b82f6" }}
            className="text-gray-400 hover:text-primary transition-colors" 
            href="https://www.linkedin.com/in/matheus-abella/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
            </svg>
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, color: "#3b82f6" }}
            className="text-gray-400 hover:text-primary transition-colors" 
            href="https://github.com/matheustsa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200/50 dark:border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
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
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50/30 to-slate-100 dark:from-[#0b0f17] dark:via-[#0f172a] dark:to-[#080d1a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
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
