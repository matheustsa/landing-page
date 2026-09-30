import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { authorProfile } from '../data/portfolioData';

export interface FooterProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export const Footer: React.FC<FooterProps> = ({
  githubUrl = 'https://github.com/MatheusTSA',
  linkedinUrl = 'https://linkedin.com/in/matheus-abella',
  email = authorProfile.email || 'mtsa.dev@gmail.com',
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full border-t border-surface-border-light dark:border-surface-border-dark bg-surface-light/40 dark:bg-surface-dark/40 py-12 transition-colors duration-300"
      aria-label="Rodapé do site"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary tracking-tight">
              Matheus "Lekod" Abella · TSA Tech
            </span>
            <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>

          {/* Tech Stack credits */}
          <div className="text-center">
            <p className="text-xs font-mono text-text-light-secondary dark:text-text-dark-secondary">
              Construído com React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Matheus Abella"
              className="p-2 rounded-xl text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Matheus Abella"
              className="p-2 rounded-xl text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${email}`}
              aria-label="Enviar e-mail para Matheus Abella"
              className="p-2 rounded-xl text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-2 rounded-xl text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
