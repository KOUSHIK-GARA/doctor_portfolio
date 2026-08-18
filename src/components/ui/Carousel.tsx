import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types/portfolio';

interface CarouselProps {
  items: GalleryItem[];
  /** Autoplay interval in ms. Set to 0 to disable. */
  interval?: number;
}

export function Carousel({ items, interval = 5000 }: CarouselProps) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((v) => (v + 1) % count), [count]);
  const prev = useCallback(() => setIndex((v) => (v - 1 + count) % count), [count]);

  useEffect(() => {
    if (!interval || paused || count <= 1) return undefined;
    const id = window.setInterval(() => setIndex((v) => (v + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [interval, paused, count]);

  if (count === 0) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carouselViewport">
        <div className="carouselTrack" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item) => (
            <figure className="carouselSlide" key={item.caption}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        {count > 1 && (
          <div className="carouselControls">
            <button type="button" className="carouselBtn" aria-label="Previous slide" onClick={prev}>
              <ChevronLeft />
            </button>
            <button type="button" className="carouselBtn" aria-label="Next slide" onClick={next}>
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      {count > 1 && (
        <div className="carouselDots">
          {items.map((item, i) => (
            <button
              key={item.caption}
              type="button"
              className={i === index ? 'active' : ''}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
