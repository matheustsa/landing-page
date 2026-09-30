import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, Github, Linkedin, Terminal, User } from 'lucide-react';
import { authorProfile } from '../data/portfolioData';

export interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="sobre"
      className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 sm:py-24 overflow-hidden"
      aria-label="Apresentação e perfil de Matheus Abella"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/4 -left-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-sunrise-sky/15 dark:bg-sunset-crimson/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 -right-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-sunrise-gold/15 dark:bg-sunset-amber/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium tracking-wide shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{authorProfile.statusBadge}</span>
            </motion.div>

            {/* Headline with Adaptive Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-light-primary dark:text-text-dark-primary leading-[1.1]">
                <span>Olá, eu sou </span>
                <span className="inline-block text-sunrise-ocean dark:text-sunset-amber">
                  {authorProfile.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary">
                {authorProfile.role}
              </p>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed max-w-xl"
            >
              {authorProfile.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projetos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sunset-amber via-sunset-coral to-sunset-crimson hover:opacity-95 shadow-lg shadow-sunset-amber/20 hover:shadow-xl hover:shadow-sunset-amber/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber text-sm sm:text-base cursor-pointer"
              >
                <span>Explorar Projetos</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contato"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-light-primary dark:text-text-dark-primary bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark hover:border-sunset-amber/50 dark:hover:border-sunset-gold/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber text-sm sm:text-base cursor-pointer"
              >
                <span>Entrar em Contato</span>
                <Mail className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Quick Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="flex items-center gap-3 pt-4 border-t border-surface-border-light dark:border-surface-border-dark w-full max-w-xl"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-text-light-secondary/70 dark:text-text-dark-secondary/70">
                Redes:
              </span>
              <div className="flex items-center gap-2">
                {authorProfile.socialLinks
                  .filter((item) => item.platform === 'github' || item.platform === 'linkedin')
                  .map((link) => {
                    const Icon = link.platform === 'github' ? Github : Linkedin;
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar perfil no ${link.label}`}
                        className="p-2.5 rounded-xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark text-text-light-secondary dark:text-text-dark-secondary hover:text-sunset-coral dark:hover:text-sunset-gold hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 shadow-xs hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber cursor-pointer"
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </a>
                    );
                  })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Frame with Ambient Theme Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative w-full max-w-xs sm:max-w-sm flex justify-center"
            >
              <div className="relative group w-full">
                {/* Animated Adaptive Ambient Glow Layers */}
                <motion.div
                  animate={{
                    scale: [1, 1.07, 0.98, 1.05, 1],
                    rotate: [0, 3, -2, 2, 0],
                    opacity: [0.65, 0.9, 0.7, 0.85, 0.65],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-sunrise-sky/40 via-sunrise-ocean/30 to-sunrise-gold/35 dark:from-sunset-crimson/40 dark:via-sunset-coral/35 dark:to-sunset-gold/35 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <motion.div
                  animate={{
                    scale: [1.04, 0.96, 1.06, 1],
                    opacity: [0.35, 0.6, 0.4, 0.55, 0.35],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                  className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-br from-sunrise-gold/30 via-transparent to-sunrise-sky/30 dark:from-sunset-amber/30 dark:via-transparent to-sunset-crimson/30 blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Modern Rounded-3xl Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-surface-border-light dark:border-surface-border-dark bg-surface-light dark:bg-surface-dark shadow-2xl p-2 sm:p-2.5">
                  <div className="relative rounded-[1.35rem] overflow-hidden aspect-square w-full bg-surface-light dark:bg-surface-dark">
                    {!imgError ? (
                      <img
                        src={authorProfile.avatarUrl}
                        alt={`Foto de perfil de ${authorProfile.name}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-light-secondary dark:text-text-dark-secondary">
                        <User className="w-16 h-16 text-sunset-amber/50" />
                        <span className="text-xs font-mono">{authorProfile.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating Badge (Bottom-Left): Technical focus */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border border-surface-border-light dark:border-surface-border-dark px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-sunset-amber/15 dark:bg-sunset-amber/25 flex items-center justify-center text-sunset-coral dark:text-sunset-gold border border-sunset-amber/20">
                    <Terminal className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-text-light-secondary/80 dark:text-text-dark-secondary/80">
                      Especialidade
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-text-light-primary dark:text-text-dark-primary">
                      Full Stack & Mobile
                    </p>
                  </div>
                </motion.div>

                {/* Floating Badge (Top-Right): Location */}
                {authorProfile.location && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.4 }}
                    className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border border-surface-border-light dark:border-surface-border-dark px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-medium text-text-light-primary dark:text-text-dark-primary"
                  >
                    <span className="text-sm" aria-hidden="true">
                      🇧🇷
                    </span>
                    <span className="font-mono text-[11px] text-text-light-secondary dark:text-text-dark-secondary">
                      {authorProfile.location}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
