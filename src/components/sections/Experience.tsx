import { Award } from 'lucide-react';
import type { ExperienceItem } from '../../types/portfolio';

interface ExperienceProps {
  experience: ExperienceItem[];
  achievements: string[];
}

export function Experience({ experience, achievements }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <div className="sectionTag">CAREER</div>
      <h2>
        Experience &amp; <span>achievements.</span>
      </h2>

      <div className="expLayout">
        <ul className="timeline experienceList">
          {experience.map((item) => (
            <li key={`${item.period}-${item.role}`}>
              <span className="timeline-year">{item.period}</span>
              <span>
                <b>{item.role}</b>
                {item.organization && <small>{item.organization}</small>}
              </span>
            </li>
          ))}
        </ul>

        <aside className="card achievements">
          <Award />
          <h3>Achievements</h3>
          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
