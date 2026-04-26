'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectScreenshot } from '@/data/projects';

interface ScreenshotCarouselProps {
  images: ProjectScreenshot[];
  onImageClick: (index: number) => void;
}

export function ScreenshotCarousel({
  images,
  onImageClick,
}: ScreenshotCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const slide = slideRefs.current[index];
    const track = trackRef.current;
    if (!slide || !track) return;
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackLeft = track.scrollLeft;
        let nearest = 0;
        let nearestDist = Infinity;
        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const dist = Math.abs(slide.offsetLeft - track.offsetLeft - trackLeft);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearest = i;
          }
        });
        setActiveIndex(nearest);
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goPrev = () =>
    scrollToIndex((activeIndex - 1 + images.length) % images.length);
  const goNext = () =>
    scrollToIndex((activeIndex + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            onClick={() => onImageClick(index)}
            aria-label={`Open ${image.alt} in lightbox`}
            className="group relative shrink-0 snap-center w-full md:w-[80%] lg:w-[70%] aspect-video rounded-xl overflow-hidden bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 70vw, (min-width: 768px) 80vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <span className="size-12 rounded-full bg-white text-gray-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="size-5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Arrows (desktop only) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-md hover:bg-background items-center justify-center transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 size-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-md hover:bg-background items-center justify-center transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      {/* Thumbnail rail */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={`thumb-${image.src}`}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`View screenshot ${index + 1}: ${image.alt}`}
              aria-current={index === activeIndex}
              className={cn(
                'relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-md overflow-hidden border-2 transition-all',
                index === activeIndex
                  ? 'border-primary opacity-100 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100',
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
