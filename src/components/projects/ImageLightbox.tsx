'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslations } from 'next-intl';
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { type Locale } from '@/i18n/routing';
import { pickLocale, type ProjectScreenshot } from '@/data/projects';

interface ImageLightboxProps {
  isOpen: boolean;
  images: ProjectScreenshot[];
  locale: Locale;
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  images,
  locale,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const t = useTranslations('lightbox');
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const focusableCacheRef = useRef<HTMLElement[] | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

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

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusCloseFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const getFocusable = () => {
      if (focusableCacheRef.current) return focusableCacheRef.current;
      const root = dialogRef.current;
      if (!root) return [] as HTMLElement[];
      const list = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        ),
      ).filter((el) => !el.hasAttribute('inert'));
      focusableCacheRef.current = list;
      return list;
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (e.key === 'Tab') {
        const focusable = getFocusable();
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
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
      cancelAnimationFrame(focusCloseFrame);
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = original;
      focusableCacheRef.current = null;
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen, images.length]);

  if (!mounted) return null;

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  const current = images[activeIndex];
  const currentAlt = current ? pickLocale(current.alt, locale) : '';
  const currentCaption = current?.caption
    ? pickLocale(current.caption, locale)
    : undefined;

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('dialogLabel', {
            current: activeIndex + 1,
            total: images.length,
            alt: currentAlt,
          })}
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
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t('close')}
            className="absolute top-4 end-4 z-20 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="size-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 start-4 z-20 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Prev (desktop) */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label={t('previous')}
              className="hidden md:flex absolute start-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            >
              <ChevronLeft className="size-6 rtl:rotate-180" />
            </button>
          )}

          {/* Next (desktop) */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label={t('next')}
              className="hidden md:flex absolute end-4 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors"
            >
              <ChevronRight className="size-6 rtl:rotate-180" />
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
                      alt={currentAlt}
                      className="max-w-[95vw] max-h-[80vh] md:max-h-[85vh] object-contain select-none"
                      draggable={false}
                    />
                  </TransformComponent>

                  {/* Bottom toolbar */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => zoomOut()}
                      aria-label={t('zoomOut')}
                      className="size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <ZoomOut className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => resetTransform()}
                      aria-label={t('resetZoom')}
                      className="size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                    >
                      <RotateCcw className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => zoomIn()}
                      aria-label={t('zoomIn')}
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
                          aria-label={t('previous')}
                          className="md:hidden size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="size-4 rtl:rotate-180" />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          aria-label={t('next')}
                          className="md:hidden size-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="size-4 rtl:rotate-180" />
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          {/* Caption */}
          {currentCaption && (
            <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm max-w-[90vw] text-center">
              {currentCaption}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
