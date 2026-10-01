import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  TrendingUp,
  Layers,
  FileText,
  Code2,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from 'lucide-react';
import { Project } from '../types/portfolio';

export interface ProjectDetailDrawerProps {
  project: Project | null;
  onClose: () => void;
}

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  subtitle: string;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasErrorMap, setHasErrorMap] = useState<Record<number, boolean>>({});

  // Reset current index when images list changes
  useEffect(() => {
    setCurrentIndex(0);
    setHasErrorMap({});
  }, [images]);

  const total = images.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation within carousel
  useEffect(() => {
    if (total <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total, handlePrev, handleNext]);

  const currentImage = images[currentIndex] || '';
  const isCurrentError = hasErrorMap[currentIndex];

  if (total === 0) return null;

  return (
    <div className="space-y-3">
      {/* Main Image Viewport */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-surface-border-light dark:border-surface-border-dark group shadow-md">
        <AnimatePresence mode="wait">
          {isCurrentError ? (
            <motion.div
              key={`fallback-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-[#180f1d] to-[#25101a] text-center relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(#eb7f31_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"
                aria-hidden="true"
              />
              <div className="w-14 h-14 rounded-2xl bg-sunset-amber/15 border border-sunset-amber/30 text-sunset-gold flex items-center justify-center mb-3">
                <Code2 className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{title}</span>
              <span className="text-xs font-mono text-sunset-gold/80 mt-1">{subtitle}</span>
            </motion.div>
          ) : (
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={`${title} - Imagem ${currentIndex + 1} de ${total}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onError={() =>
                setHasErrorMap((prev) => ({ ...prev, [currentIndex]: true }))
              }
              className="w-full h-full object-cover object-center"
            />
          )}
        </AnimatePresence>

        {/* Ambient Overlay Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtitle Badge (Bottom Left) */}
        <div className="absolute bottom-4 left-4 sm:left-5 pointer-events-none z-10">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-sunset-gold border border-sunset-amber/30 shadow-xs">
            {subtitle}
          </span>
        </div>

        {/* Slide Counter (Top Right) */}
        {total > 1 && (
          <div className="absolute top-4 right-4 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-black/70 backdrop-blur-md text-white/90 border border-white/15 shadow-xs">
              <ImageIcon className="w-3 h-3 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
              {currentIndex + 1} / {total}
            </span>
          </div>
        )}

        {/* Chevron Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagem anterior (Seta esquerda)"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer shadow-md focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima imagem (Seta direita)"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer shadow-md focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </>
        )}

        {/* Dot Pagination (Bottom Right) */}
        {total > 1 && (
          <div className="absolute bottom-4 right-4 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para a imagem ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : undefined}
                className={`transition-all duration-200 rounded-full cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-sunset-amber ${
                  idx === currentIndex
                    ? 'w-5 h-2 bg-gradient-to-r from-sunset-coral to-sunset-amber dark:from-sunset-amber dark:to-sunset-gold'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails Bar (only if more than 1 image) */}
      {total > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1" role="tablist" aria-label="Miniaturas das imagens do projeto">
          {images.map((img, idx) => {
            const isSelected = idx === currentIndex;
            const isError = hasErrorMap[idx];

            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Ver imagem ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-[16/9] rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sunset-amber ${
                  isSelected
                    ? 'border-sunset-coral dark:border-sunset-gold ring-2 ring-sunset-coral/40 dark:ring-sunset-gold/40 opacity-100 scale-[1.02]'
                    : 'border-surface-border-light dark:border-surface-border-dark opacity-60 hover:opacity-100'
                }`}
              >
                {isError ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/40 text-text-light-secondary dark:text-text-dark-secondary">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                ) : (
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[70] overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-drawer-title"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Slide-over Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-2xl bg-surface-light dark:bg-surface-dark border-l border-surface-border-light dark:border-surface-border-dark shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-surface-border-light dark:border-surface-border-dark bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md">
                <div className="pr-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sunset-coral dark:text-sunset-gold">
                    Estudo de Caso
                  </span>
                  <h2
                    id="project-drawer-title"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary"
                  >
                    {project.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar detalhes do projeto"
                  className="p-2 rounded-xl text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-hidden focus:ring-2 focus:ring-sunset-amber cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                {/* Image Carousel / Hero Visual */}
                <ProjectImageCarousel
                  images={
                    project.images && project.images.length > 0
                      ? project.images
                      : [project.image]
                  }
                  title={project.title}
                  subtitle={project.subtitle}
                />

                {/* Visão Geral */}
                <section aria-labelledby="section-overview" className="space-y-3">
                  <div className="flex items-center gap-2 text-text-light-primary dark:text-text-dark-primary">
                    <FileText className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
                    <h3 id="section-overview" className="text-base font-bold tracking-tight">
                      Visão Geral
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                    {project.overview}
                  </p>
                </section>

                {/* O Desafio */}
                <section aria-labelledby="section-challenge" className="space-y-3">
                  <div className="flex items-center gap-2 text-text-light-primary dark:text-text-dark-primary">
                    <Target className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
                    <h3 id="section-challenge" className="text-base font-bold tracking-tight">
                      O Desafio
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl bg-black/5 dark:bg-white/5 border border-surface-border-light dark:border-surface-border-dark">
                    <p className="text-sm sm:text-base text-text-light-primary dark:text-text-dark-primary leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </section>

                {/* A Solução */}
                <section aria-labelledby="section-solution" className="space-y-3">
                  <div className="flex items-center gap-2 text-text-light-primary dark:text-text-dark-primary">
                    <Lightbulb className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
                    <h3 id="section-solution" className="text-base font-bold tracking-tight">
                      A Solução
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </section>

                {/* Resultados & Métricas */}
                <section aria-labelledby="section-results" className="space-y-4">
                  <div className="flex items-center gap-2 text-text-light-primary dark:text-text-dark-primary">
                    <TrendingUp className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
                    <h3 id="section-results" className="text-base font-bold tracking-tight">
                      Resultados & Métricas
                    </h3>
                  </div>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-4 rounded-xl bg-sunset-amber/10 dark:bg-sunset-amber/15 border border-sunset-amber/25 flex flex-col"
                        >
                          <span className="text-2xl font-bold font-mono text-sunset-coral dark:text-sunset-gold">
                            {metric.value}
                          </span>
                          <span className="text-xs font-medium text-text-light-secondary dark:text-text-dark-secondary mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                    {project.results}
                  </p>
                </section>

                {/* Stack Tecnológica Completa */}
                <section aria-labelledby="section-stack" className="space-y-3">
                  <div className="flex items-center gap-2 text-text-light-primary dark:text-text-dark-primary">
                    <Layers className="w-4 h-4 text-sunset-coral dark:text-sunset-gold" aria-hidden="true" />
                    <h3 id="section-stack" className="text-base font-bold tracking-tight">
                      Stack Tecnológica Completa
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Action Footer */}
              <div className="sticky bottom-0 z-20 px-6 py-4 border-t border-surface-border-light dark:border-surface-border-dark bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-text-light-primary text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity shadow-sm focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>Ver Código no GitHub</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sunset-coral to-sunset-amber text-white hover:opacity-95 transition-opacity shadow-sm focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Demonstração ao Vivo</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/5 transition-colors ml-auto cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
