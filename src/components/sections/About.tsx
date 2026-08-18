import {
  Activity,
  BookOpen,
  ChevronRight,
  Globe,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { About as AboutContent, EducationItem } from '../../types/portfolio';

interface AboutProps {
  content: AboutContent;
  education: EducationItem[];
  memberships: string[];
}

// Presentational icon mappings (by position) for the education and membership lists.
const EDUCATION_ICONS: LucideIcon[] = [HeartPulse, Stethoscope, BookOpen];
const MEMBERSHIP_ICONS: LucideIcon[] = [HeartPulse, Globe, Users, Activity];

export function About({ content, education, memberships }: AboutProps) {
  return (
    <section id="about" className="section about">
      <div className="aboutTop">
        <div className="aboutImage">
          <img src={content.image} alt={content.imageAlt} loading="lazy" />
        </div>
        <div className="aboutIntro">
          <div className="sectionTag">ABOUT THE DOCTOR</div>
          <h2>
            Expertise backed by <span>experience &amp; empathy.</span>
          </h2>
          <p className="lead">{content.lead}</p>
        </div>
      </div>

      <div className="grid2">
        <div className="infoCard">
          <div className="infoHead">
            <span className="infoBadge">
              <GraduationCap />
            </span>
            <div>
              <h3>Education</h3>
              <p>Academic journey and qualifications</p>
            </div>
          </div>

          <ul className="eduTimeline">
            {education.map((item, index) => {
              const Icon = EDUCATION_ICONS[index] ?? GraduationCap;
              return (
                <li className="eduItem" key={`${item.year}-${item.degree}`}>
                  <span className="eduNode" aria-hidden="true" />
                  <div className="eduCard">
                    <span className="eduYear">{item.year}</span>
                    <span className="eduIcon">
                      <Icon />
                    </span>
                    <div className="eduText">
                      <b>{item.degree}</b>
                      <small>{item.institution}</small>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="infoCard">
          <div className="infoHead">
            <span className="infoBadge">
              <Users />
            </span>
            <div>
              <h3>Memberships</h3>
              <p>Professional associations and societies</p>
            </div>
          </div>

          <ul className="memList">
            {memberships.map((membership, index) => {
              const Icon = MEMBERSHIP_ICONS[index % MEMBERSHIP_ICONS.length];
              return (
                <li className="memItem" key={membership}>
                  <span className="memIcon">
                    <Icon />
                  </span>
                  <span className="memName">{membership}</span>
                  <ChevronRight className="memChevron" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
