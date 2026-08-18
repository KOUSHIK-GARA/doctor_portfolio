import { Award } from 'lucide-react';
import type { ExperienceItem } from '../../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
  achievements: string[];
}

export function Experience({ experience, achievements }: ExperienceProps) {
  return (
    <section id="experience" className="section tinted">
      <div className="sectionTag">CAREER JOURNEY</div>
      <h2>
        A Journey of Growth &  <span>Expertise.</span>
      </h2>

      <ol className="timelineTrack">
        {experience.map((item) => (
          <li className="tl-item" key={`${item.period}-${item.role}`}>
            <span className="tl-marker" aria-hidden="true" />
            <div className="tl-card">
              <span className="tl-period">{item.period}</span>
              <b>{item.role}</b>
              {item.organization && <small>{item.organization}</small>}
            </div>
          </li>
        ))}
      </ol>

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
