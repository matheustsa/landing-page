import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sunset, Sunrise, Code2 } from 'lucide-react';

export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Close mobile menu on Escape key press or window resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-light/85 dark:bg-bg-dark/85 backdrop-blur-md border-b border-surface-border-light dark:border-surface-border-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Branding */}
          <a
            href="#sobre"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber rounded-xl p-1"
            aria-label="Ir para seção Sobre de Matheus Lekod Abella"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark shadow-xs group-hover:border-sunset-amber/40 transition-colors">
              {!imgError ? (
                <img
                  src="assets/Icon.png"
                  alt="Logo Matheus Abella"
                  className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Code2 className="w-5 h-5 text-sunset-amber" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary flex items-center gap-1.5 transition-colors">
                <span>Matheus</span>
                <span className="font-mono text-xs px-1.5 py-0.5 rounded-md bg-sunset-amber/10 dark:bg-sunset-amber/20 text-sunset-coral dark:text-sunset-gold font-medium border border-sunset-amber/20">
                  "Lekod"
                </span>
                <span>Abella</span>
              </span>
              <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary hidden sm:block">
                TSA Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle, CTA Button, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="relative h-10 w-10 sm:w-[104px] shrink-0 rounded-xl border border-surface-border-light dark:border-surface-border-dark bg-surface-light/80 dark:bg-surface-dark/80 hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 text-text-light-primary dark:text-text-dark-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber flex items-center justify-center overflow-hidden group cursor-pointer shadow-xs"
              aria-label={
                darkMode
                  ? 'Alternar para tema Nascer do Sol (Claro)'
                  : 'Alternar para tema Pôr do Sol (Escuro)'
              }
              title={
                darkMode
                  ? 'Tema atual: Pôr do Sol (Escuro) • Clique para Nascer do Sol (Claro)'
                  : 'Tema atual: Nascer do Sol (Claro) • Clique para Pôr do Sol (Escuro)'
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sunset-mode"
                    initial={{ y: -24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-1.5 text-sunset-gold w-full"
                  >
                    <Sunset className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="hidden sm:inline text-xs font-mono font-semibold tracking-wide">Sunset</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sunrise-mode"
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-1.5 text-sunrise-ocean w-full"
                  >
                    <Sunrise className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="hidden sm:inline text-xs font-mono font-semibold tracking-wide">Sunrise</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sunset-amber via-sunset-coral to-sunset-crimson hover:opacity-95 shadow-md shadow-sunset-amber/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber"
            >
              Falar Comigo
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-amber cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-surface-border-light dark:border-surface-border-dark bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-xl shadow-lg"
          >
            <nav className="px-4 pt-3 pb-6 space-y-1.5" aria-label="Navegação mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-surface-border-light dark:border-surface-border-dark">
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sunset-amber via-sunset-coral to-sunset-crimson shadow-md text-center"
                >
                  Falar Comigo
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
