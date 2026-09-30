import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Code2, ExternalLink } from 'lucide-react';
import { projects as defaultProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export interface ProjectsPreviewSectionProps {
  projects?: Project[];
  onSelectProject: (project: Project) => void;
}

interface ProjectThumbnailProps {
  image: string;
  title: string;
  subtitle: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ image, title, subtitle }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-[#180f1d] to-[#25101a] text-center select-none relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(#eb7f31_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"
          aria-hidden="true"
        />
        <div className="w-12 h-12 rounded-xl bg-sunset-amber/15 border border-sunset-amber/30 text-sunset-gold flex items-center justify-center mb-3 shadow-inner">
          <Code2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-sm font-bold text-white tracking-tight">{title}</span>
        <span className="text-xs font-mono text-sunset-gold/80 mt-1">{subtitle}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      <img
        src={image}
        alt={`Prévia do projeto ${title}`}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-sunset-gold border border-sunset-amber/30">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export const ProjectsPreviewSection: React.FC<ProjectsPreviewSectionProps> = ({
  projects = defaultProjects,
  onSelectProject,
}) => {
  return (
    <section
      id="projetos"
      className="py-20 sm:py-24 border-t border-surface-border-light dark:border-surface-border-dark relative"
      aria-label="Projetos em destaque desenvolvidos por Matheus Abella"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-sunrise-ocean/10 dark:bg-sunset-crimson/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-24 w-80 h-80 rounded-full bg-sunrise-gold/10 dark:bg-sunset-amber/10 blur-3xl pointer-events-none"
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
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Portfólio em Destaque</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary"
          >
            Projetos Selecionados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-3 text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed"
          >
            Aplicações web e mobile construídas com foco em engenharia limpa, escalabilidade e resolução direta de gargalos reais.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col h-full rounded-2xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark shadow-xs hover:shadow-2xl hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#150d18]">
                <ProjectThumbnail
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary group-hover:text-sunset-coral dark:group-hover:text-sunset-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono font-medium text-text-light-secondary/80 dark:text-text-dark-secondary/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Key Metrics Highlight */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-surface-border-light/70 dark:border-surface-border-dark/70">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="text-sm font-mono font-bold text-sunset-coral dark:text-sunset-gold">
                            {metric.value}
                          </span>
                          <span className="text-[11px] text-text-light-secondary/70 dark:text-text-dark-secondary/70 truncate">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-text-light-secondary dark:text-text-dark-secondary border border-surface-border-light dark:border-surface-border-dark"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-mono font-medium text-text-light-secondary/70 dark:text-text-dark-secondary/70 bg-black/5 dark:bg-white/5 border border-surface-border-light dark:border-surface-border-dark">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black/5 dark:bg-white/5 hover:bg-sunset-amber hover:text-white dark:hover:bg-sunset-amber dark:hover:text-white text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark hover:border-transparent transition-all duration-200 cursor-pointer group/btn focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
                  aria-label={`Ver detalhes completos do projeto ${project.title}`}
                >
                  <span>Ver Detalhes do Projeto</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
