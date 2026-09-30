import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Smartphone, Cpu, Layers } from 'lucide-react';
import { techCategories } from '../data/portfolioData';
import { TechCategory } from '../types/portfolio';

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Smartphone,
  Cpu,
};

export interface TechStackSectionProps {
  categories?: TechCategory[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  categories = techCategories,
}) => {
  return (
    <section
      id="stack"
      className="py-20 sm:py-24 border-t border-surface-border-light dark:border-surface-border-dark relative"
      aria-label="Stack tecnológica e habilidades técnicas"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sunset-amber/10 dark:bg-sunset-amber/20 text-sunset-coral dark:text-sunset-gold border border-sunset-amber/20 mb-3"
          >
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Stack Tecnológica</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-text-light-primary dark:text-text-dark-primary"
          >
            Tecnologias & Ferramentas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="mt-3 text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary"
          >
            Conjunto técnico aplicado no desenvolvimento de sistemas distribuídos, aplicações móveis e interfaces modernas.
          </motion.p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => {
            const IconComponent = categoryIconMap[category.icon] || Layers;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-light dark:bg-surface-dark border border-surface-border-light dark:border-surface-border-dark shadow-xs hover:shadow-xl hover:border-sunset-amber/40 dark:hover:border-sunset-gold/40 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header with Icon and Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sunset-amber/10 dark:bg-sunset-amber/20 text-sunset-coral dark:text-sunset-gold border border-sunset-amber/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-medium text-text-light-secondary/70 dark:text-text-dark-secondary/70 px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-surface-border-light dark:border-surface-border-dark">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mt-5 tracking-tight">
                    {category.title}
                  </h3>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-text-light-primary dark:text-text-dark-primary border border-surface-border-light dark:border-surface-border-dark group-hover:border-sunset-amber/25 dark:group-hover:border-sunset-gold/25 hover:bg-sunset-amber/10 dark:hover:bg-sunset-amber/15 transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-sunset-amber dark:bg-sunset-gold shadow-[0_0_6px_rgba(235,127,49,0.4)]"
                          aria-hidden="true"
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
