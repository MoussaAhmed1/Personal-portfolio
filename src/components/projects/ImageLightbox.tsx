'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import type { ProjectScreenshot } from '@/data/projects';

interface ImageLightboxProps {
  isOpen: boolean;
  images: ProjectScreenshot[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setActiveIndex(initialIndex);
  }, [isOpen, initialIndex]);

  useEffect(() => {
    transformRef.current?.resetTransform();
  }, [activeIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      const scale = transformRef.current?.state.scale ?? 1;
      if (scale > 1) return;

      if (e.key === 'ArrowLeft') {
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((i) => (i + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, images.length, onClose]);

  if (!mounted) return null;

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  const current = images[activeIndex];

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot ${activeIndex + 1} of ${images.length}: ${current.alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-20 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="size-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Prev (desktop) */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Next (desktop) */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            >
              <ChevronRight className="size-6" />
            </button>
          )}

          {/* Image with zoom/pan */}
          <div className="relative w-full h-full flex items-center justify-center px-4 md:px-20">
            <TransformWrapper
              key={activeIndex}
              ref={transformRef}
              minScale={1}
              maxScale={5}
              initialScale={1}
              centerOnInit
              doubleClick={{ mode: 'toggle', step: 1.5 }}
              wheel={{ step: 0.15 }}
              pinch={{ step: 5 }}
              panning={{ velocityDisabled: true }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <TransformComponent
                    wrapperClass="!w-full !h-full"
                    contentClass="!w-full !h-full flex items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={current.src}
                      alt={current.alt}
                      className="max-w-[95vw] max-h-[80vh] md:max-h-[85vh] object-contain select-none"
                      draggable={false}
                    />
                  </TransformComponent>

                  {/* Bottom toolbar */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => zoomOut()}
                      aria-label="Zoom out"
                      className="size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <ZoomOut className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => resetTransform()}
                      aria-label="Reset zoom"
                      className="size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <RotateCcw className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => zoomIn()}
                      aria-label="Zoom in"
                      className="size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <ZoomIn className="size-4" />
                    </button>

                    {/* Mobile prev/next inline */}
                    {images.length > 1 && (
                      <>
                        <span className="md:hidden mx-1 h-6 w-px bg-white/20" />
                        <button
                          type="button"
                          onClick={goPrev}
                          aria-label="Previous screenshot"
                          className="md:hidden size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          aria-label="Next screenshot"
                          className="md:hidden size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="size-4" />
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          {/* Caption */}
          {current.caption && (
            <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm max-w-[90vw] text-center">
              {current.caption}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
