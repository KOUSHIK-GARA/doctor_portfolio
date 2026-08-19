import { ChevronRight, Stethoscope } from 'lucide-react';
import type { Doctor, Hero as HeroContent } from '../../types/portfolio';

interface HeroProps {
  doctor: Doctor;
  content: HeroContent;
}

export function Hero({ doctor, content }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="heroText">
        <span className="specialistBadge">
          <Stethoscope size={14} /> Specialist Care
        </span>
        <span className="eyebrow">{content.eyebrow.toUpperCase()}</span>
        <h1>
          Advanced care for every <em>breath</em> you take.
        </h1>
        <p className="credentials">{doctor.credentials.join(', ')}</p>
        <p>{doctor.bio}</p>

        <div className="actions">
          <a className="primary" href="#appointment">
            Book an Appointment <ChevronRight size={18} />
          </a>
          {/* <a className="secondary" href="#about">
            Meet the Doctor
          </a> */}
        </div>

        <div className="trust">
          {content.stats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="heroImage">
        <img
          src={doctor.heroImage}
          alt={doctor.name}
          width={1100}
          height={1485}
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
