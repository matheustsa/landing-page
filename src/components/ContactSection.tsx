import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { authorProfile } from '../data/portfolioData';

export interface ContactSectionProps {
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = authorProfile.email || 'mtsa.dev@gmail.com',
  linkedinUrl = 'https://linkedin.com/in/matheus-abella',
  githubUrl = 'https://github.com/MatheusTSA',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 border-t border-surface-border-light dark:border-surface-border-dark relative overflow-hidden"
      aria-label="Informações de contato direto"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-sunrise-sky/15 dark:bg-sunset-crimson/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-24 w-80 h-80 rounded-full bg-sunrise-gold/15 dark:bg-sunset-amber/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sunset-amber/10 dark:bg-sunset-amber/20 text-sunset-coral dark:text-sunset-gold border border-sunset-amber/20 mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Vamos Conversar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary"
          >
            Entre em Contato
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-3 text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed"
          >
            Disponível para novos projetos, consultoria técnica e oportunidades de engenharia.
            Escolha o canal de sua preferência.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Email Card (Highlighted) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-2xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 transition-all duration-300 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sunset-amber/15 dark:bg-sunset-amber/20 border border-sunset-amber/30 text-sunset-coral dark:text-sunset-gold flex items-center justify-center shadow-xs">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                {copied && (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 animate-in fade-in zoom-in-95 duration-200"
                    role="status"
                    aria-live="polite"
                  >
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    Copiado!
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary">
                  E-mail
                </h3>
                <p className="text-xs font-mono text-text-light-secondary/80 dark:text-text-dark-secondary/80 mt-1 truncate">
                  {email}
                </p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-3 leading-relaxed">
                  Canal direto para propostas, detalhamento técnico e alinhamento de escopo.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border-light dark:border-surface-border-dark flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
                aria-label={copied ? 'E-mail copiado' : 'Copiar endereço de e-mail'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-text-light-secondary dark:text-text-dark-secondary" aria-hidden="true" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-sunset-coral hover:bg-sunset-amber text-white shadow-xs hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
                aria-label={`Enviar e-mail para ${email}`}
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Abrir E-mail</span>
              </a>
            </div>
          </motion.article>

          {/* LinkedIn Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-2xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/30 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-xs">
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary group-hover:text-sunset-coral dark:group-hover:text-sunset-gold transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs font-mono text-text-light-secondary/80 dark:text-text-dark-secondary/80 mt-1">
                  in/matheus-abella
                </p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-3 leading-relaxed">
                  Conexões profissionais, histórico de carreira e atualizações sobre projetos de tecnologia.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border-light dark:border-surface-border-dark">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark transition-all duration-200 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
                aria-label="Abrir perfil no LinkedIn em nova aba"
              >
                <span>Conectar no LinkedIn</span>
                <ArrowUpRight
                  className="w-4 h-4 text-text-light-secondary dark:text-text-dark-secondary transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.article>

          {/* GitHub Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-2xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs">
                <Github className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary group-hover:text-sunset-coral dark:group-hover:text-sunset-gold transition-colors">
                  GitHub
                </h3>
                <p className="text-xs font-mono text-text-light-secondary/80 dark:text-text-dark-secondary/80 mt-1">
                  github.com/MatheusTSA
                </p>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-3 leading-relaxed">
                  Repositórios abertos, contribuições de código e arquitetura prática de sistemas.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border-light dark:border-surface-border-dark">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark transition-all duration-200 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
                aria-label="Abrir perfil no GitHub em nova aba"
              >
                <span>Explorar no GitHub</span>
                <ArrowUpRight
                  className="w-4 h-4 text-text-light-secondary dark:text-text-dark-secondary transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
