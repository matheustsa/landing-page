import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export interface SunCursorFollowerProps {
  darkMode: boolean;
}

export const SunCursorFollower: React.FC<SunCursorFollowerProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for natural, fluid following motion
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.4 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.4 });

  useEffect(() => {
    // Only enable on devices with a mouse/trackpad pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isPointerFine) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[55]"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      {/* Outer ambient radiant sun aura / glow */}
      <div
        className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl transition-colors duration-500 pointer-events-none ${
          darkMode
            ? 'bg-gradient-to-tr from-sunset-crimson/25 via-sunset-amber/25 to-sunset-gold/30'
            : 'bg-gradient-to-tr from-sunrise-sky/35 via-sunrise-pale/25 to-sunrise-gold/35'
        }`}
      />

      {/* Inner concentrated sun core with radiant halo */}
      <div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center pointer-events-none">
        {/* Soft pulse halo */}
        <div
          className={`absolute w-8 h-8 rounded-full blur-sm transition-all duration-500 animate-pulse ${
            darkMode
              ? 'bg-sunset-amber/60 shadow-[0_0_20px_rgba(235,127,49,0.8)]'
              : 'bg-sunrise-gold/60 shadow-[0_0_20px_rgba(255,212,68,0.8)]'
          }`}
        />
        {/* Sun center core */}
        <div
          className={`w-3.5 h-3.5 rounded-full shadow-md transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-br from-sunset-gold via-sunset-amber to-sunset-coral border border-sunset-gold/90'
              : 'bg-gradient-to-br from-white via-sunrise-pale to-sunrise-gold border border-sunrise-sky/80'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default SunCursorFollower;
