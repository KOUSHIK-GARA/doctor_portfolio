import {
  Activity,
  Award,
  Baby,
  BookOpen,
  ChevronRight,
  Globe,
  GraduationCap,
  HeartPulse,
  Microscope,
  Moon,
  Stethoscope,
  Users,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import type { About as AboutContent, EducationItem } from '../../types/portfolio';

interface AboutProps {
  content: AboutContent;
  education: EducationItem[];
  memberships: string[];
}

// Presentational icon mappings (by position) for the education and membership lists.
const EDUCATION_ICONS: LucideIcon[] = [
  Award, // DNB (Pulmonary Medicine)
  Stethoscope, // MD (Pulmonary Medicine)
  BookOpen, // MBBS
  Microscope, // Fellowship in Interventional Pulmonology
  Activity, // Fellowship in Advanced Lung Endoscopy
  Moon, // Fellowship in Sleep Medicine (ISDA)
  Baby, // Diploma in Pediatric Pulmonary Medicine
  Baby, // Diploma in Pediatric Sleep Medicine
  Wind, // Advanced Certification in Asthma & Allergy
];
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

      <div className="eduBlock">
        <div className="infoHead">
          <span className="infoBadge">
            <GraduationCap />
          </span>
          <div>
            <h3>Education</h3>
            <p>Academic journey and qualifications</p>
          </div>
        </div>

        <ol className="eduTL">
          {education.map((item, index) => {
            const Icon = EDUCATION_ICONS[index] ?? GraduationCap;
            const side = index % 2 === 0 ? 'up' : 'down';
            return (
              <li className={`eduTLItem ${side}`} key={`${item.year}-${item.degree}`}>
                <div className="eduTLCard">
                  <span className="eduTLIcon" aria-hidden="true">
                    <Icon />
                  </span>
                  <b>{item.degree}</b>
                  <small>{item.institution}</small>
                  {/* {item.tag ? <span className="eduTag">{item.tag}</span> : null} */}
                </div>
                <span className="eduTLNode" aria-hidden="true" />
              </li>
            );
          })}
        </ol>
      </div>

      <div className="memBlock">
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
    </section>
  );
}
