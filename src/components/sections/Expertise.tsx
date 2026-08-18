import { Activity } from 'lucide-react';
import type { ExpertiseArea } from '../../types/portfolio';

interface ExpertiseProps {
  areas: ExpertiseArea[];
}

export function Expertise({ areas }: ExpertiseProps) {
  return (
    <section id="expertise" className="section tinted">
      <div className="sectionTag">AREAS OF EXPERTISE</div>
      <h2>
        Comprehensive <span>respiratory care.</span>
      </h2>
      <div className="serviceGrid">
        {areas.map((area) => (
          <div className="service" key={area.title}>
            <div className="icon">
              <Activity />
            </div>
            <h3>{area.title}</h3>
            {area.details.length > 0 ? (
              <ul className="tags">
                {area.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p>Comprehensive evaluation, diagnosis and ongoing management.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
