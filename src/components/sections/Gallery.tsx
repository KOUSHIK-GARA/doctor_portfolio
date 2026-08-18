import { Award } from 'lucide-react';
import type { GalleryItem } from '../../types/portfolio';

interface GalleryProps {
  items: GalleryItem[];
  achievements: string[];
}

export function Gallery({ items, achievements }: GalleryProps) {
  return (
    <section id="gallery" className="section">
      <div className="sectionTag">IN PRACTICE</div>
      <h2>
          Where expertise meets <span>precision.</span>
      </h2>
      <div className="gallery">
        {items.map((item) => (
          <figure className="galleryItem" key={item.caption}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="recognition">
        <h3>Recognition &amp; awards</h3>
        <ul className="recognitionGrid">
          {achievements.map((achievement) => (
            <li className="award" key={achievement}>
              <Award />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
