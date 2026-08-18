import type { GalleryItem } from '../../types/portfolio';
import { Carousel } from '../ui/Carousel';

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section id="gallery" className="section">
      <div className="sectionTag">IN PRACTICE</div>
      <h2>
        Where expertise meets <span>precision.</span>
      </h2>
      <Carousel items={items} />
    </section>
  );
}
