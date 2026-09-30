import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsPreviewSection } from './components/ProjectsPreviewSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailDrawer } from './components/ProjectDetailDrawer';
import { SunCursorFollower } from './components/SunCursorFollower';
import { Project } from './types/portfolio';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light-primary dark:text-text-dark-primary font-sans transition-colors duration-300 antialiased selection:bg-sunset-amber selection:text-white">
      <SunCursorFollower darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main-content">
        <HeroSection />
        <TechStackSection />
        <ProjectsPreviewSection onSelectProject={setSelectedProject} />
        <ContactSection />
      </main>
      <Footer />
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
