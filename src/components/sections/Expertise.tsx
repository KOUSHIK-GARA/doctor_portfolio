import {
  Baby,
  ChevronRight,
  Cpu,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Moon,
  PersonStanding,
  Repeat,
  ShieldPlus,
  Stethoscope,
  Users,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import type { ExpertiseArea } from '../../types/portfolio';

interface ExpertiseProps {
  areas: ExpertiseArea[];
  image: string;
  imageAlt: string;
}

// Icons paired with each area (by position in the data array).
const EXPERTISE_ICONS: LucideIcon[] = [
  HeartPulse, // Clinical Respiratory Care
  Stethoscope, // Adult Lung Interventions
  Baby, // Pediatric Lung Interventions
  Moon, // Sleep Medicine
  Wind, // Asthma & Allergy
  ShieldPlus, // Respiratory Critical Care
  PersonStanding, // Pulmonary Rehabilitation
  Repeat, // Lung Transplant Assessment
  Microscope, // Lung Cancer Screening & Diagnosis
];

// Brand promises shown in the strip beneath the cards.
const VALUE_PROPS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ShieldPlus, title: 'Evidence-Based Care', text: 'Latest guidelines and protocols' },
  { icon: Users, title: 'Patient-Centered Approach', text: 'Care tailored to your needs' },
  { icon: Cpu, title: 'Advanced Technology', text: 'Modern tools for accurate care' },
  { icon: HeartHandshake, title: 'Compassionate Care', text: 'Every breath matters to us' },
];

interface ExpertiseCardProps {
  area: ExpertiseArea;
  Icon: LucideIcon;
}

function ExpertiseCard({ area, Icon }: ExpertiseCardProps) {
  return (
    <article
      className="expCard"
      title={area.details.length > 0 ? area.details.join(', ') : undefined}
    >
      <div className="expCardHead">
        <span className="expCardIcon" aria-hidden="true">
          <Icon />
        </span>
        <h3>{area.title}</h3>
      </div>
      <p>{area.description}</p>
      <ChevronRight className="expCardArrow" aria-hidden="true" />
    </article>
  );
}

export function Expertise({ areas, image, imageAlt }: ExpertiseProps) {
  const cards = areas.map((area, index) => ({
    area,
    Icon: EXPERTISE_ICONS[index] ?? HeartPulse,
  }));

  const leftCards = cards.slice(0, 3);
  // The last three areas have the longest headings, so flank the image with
  // them on the right to visually balance the two-line titles on the left.
  const rightCards = cards.slice(6);
  const bottomCards = cards.slice(3, 6);

  return (
    <section id="expertise" className="section tinted">
      <div className="expHead">
        <div className="sectionTag">OUR EXPERTISE</div>
        <h2>
          Comprehensive <span>respiratory care.</span>
        </h2>
        <p className="expLead">Advanced care for every breath, for every age.</p>
      </div>

      <div className="expGrid">
        <div className="expCol">
          {leftCards.map(({ area, Icon }) => (
            <ExpertiseCard key={area.title} area={area} Icon={Icon} />
          ))}
        </div>

        <div className="expHero">
          {/* <span className="expHeroShape" aria-hidden="true" /> */}
          <div className="expHeroImg">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        </div>

        <div className="expCol">
          {rightCards.map(({ area, Icon }) => (
            <ExpertiseCard key={area.title} area={area} Icon={Icon} />
          ))}
        </div>
      </div>

      <div className="expBottom">
        {bottomCards.map(({ area, Icon }) => (
          <ExpertiseCard key={area.title} area={area} Icon={Icon} />
        ))}
      </div>

      <div className="expValues">
        {VALUE_PROPS.map(({ icon: Icon, title, text }) => (
          <div className="expValue" key={title}>
            <span className="expValueIcon" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <b>{title}</b>
              <small>{text}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
