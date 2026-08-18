import { GraduationCap, Users } from 'lucide-react';
import type { About as AboutContent, EducationItem } from '../../types/portfolio';

interface AboutProps {
  content: AboutContent;
  education: EducationItem[];
  memberships: string[];
}

export function About({ content, education, memberships }: AboutProps) {
  return (
    <section id="about" className="section about">
      <div className="sectionTag">ABOUT THE DOCTOR</div>
      <h2>
        Expertise backed by <span>experience &amp; empathy.</span>
      </h2>
      <p className="lead">{content.lead}</p>

      <div className="grid2">
        <div className="card">
          <GraduationCap />
          <h3>Education</h3>
          <ul className="timeline">
            {education.map((item) => (
              <li key={`${item.year}-${item.degree}`}>
                <span className="timeline-year">{item.year}</span>
                <span>
                  <b>{item.degree}</b>
                  <small>{item.institution}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <Users />
          <h3>Memberships</h3>
          <ul>
            {memberships.map((membership) => (
              <li key={membership}>{membership}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
