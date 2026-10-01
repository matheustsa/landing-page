import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

export interface ImageLightboxModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  title?: string;
  subtitle?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  images,
  initialIndex = 0,
  title,
  subtitle,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const total = images.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && total > 1) {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight' && total > 1) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, total, handlePrev, handleNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title ? `Visualização da imagem: ${title}` : 'Visualização da imagem ampliada'}
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            aria-hidden="true"
          />

          {/* Top Bar with Title and Close Button */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <div className="pointer-events-auto">
              {title && (
                <div className="flex items-center gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {title}
                  </h3>
                  {subtitle && (
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-black/60 text-sunset-gold border border-sunset-amber/30">
                      {subtitle}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              {total > 1 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/10 text-white backdrop-blur-md border border-white/15">
                  <ImageIcon className="w-3.5 h-3.5 text-sunset-gold" aria-hidden="true" />
                  {currentIndex + 1} / {total}
                </span>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar visualização ampliada (Escape)"
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="relative z-10 max-w-[94vw] max-h-[82vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={title ? `${title} - Imagem ${currentIndex + 1}` : 'Imagem ampliada'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="max-w-[94vw] max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10 select-none"
              />
            </AnimatePresence>
          </div>

          {/* Chevrons for Navigation */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagem anterior (Seta esquerda)"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer shadow-xl focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima imagem (Seta direita)"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer shadow-xl focus:outline-hidden focus:ring-2 focus:ring-sunset-amber"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Bottom Dot Pagination */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/15 shadow-lg">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para a imagem ${idx + 1}`}
                    aria-current={idx === currentIndex ? 'true' : undefined}
                    className={`transition-all duration-200 rounded-full cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-sunset-amber ${
                      idx === currentIndex
                        ? 'w-6 h-2 bg-gradient-to-r from-sunset-coral to-sunset-amber dark:from-sunset-amber dark:to-sunset-gold'
                        : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightboxModal;
