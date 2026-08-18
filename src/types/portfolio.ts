export interface Doctor {
  name: string;
  title: string;
  /** Post-nominal credentials, rendered as a single line. */
  credentials: string[];
  location: string;
  phone: string;
  email: string;
  address: string;
  bio: string;
  heroImage: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Hero {
  eyebrow: string;
  stats: HeroStat[];
}

export interface About {
  lead: string;
}

export interface ExpertiseArea {
  title: string;
  /** Optional list of procedures / sub-specialities under this area. */
  details: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
}

export interface PortfolioData {
  doctor: Doctor;
  hero: Hero;
  about: About;
  expertise: ExpertiseArea[];
  education: EducationItem[];
  experience: ExperienceItem[];
  achievements: string[];
  memberships: string[];
}
