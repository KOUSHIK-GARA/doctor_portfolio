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
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ExpertiseArea {
  title: string;
  /** One-line summary shown on the expertise card. */
  description: string;
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
  /** Centerpiece photo shown in the middle of the expertise orbit. */
  expertiseImage: string;
  expertiseImageAlt: string;
  gallery: GalleryItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  achievements: string[];
  memberships: string[];
}
