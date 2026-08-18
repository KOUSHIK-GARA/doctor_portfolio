export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'youtube';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ClinicHours {
  /** e.g. "Mon – Sat" */
  label: string;
  /** e.g. "10:00 AM – 6:00 PM" or "Closed" */
  value: string;
}

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
  /** Hospital OPD timing shown under the address in the footer. */
  locationHours: string;
  /** Social profiles rendered in the footer. */
  socials: SocialLink[];
  /** Clinic opening hours rendered in the footer. */
  hours: ClinicHours[];
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
  /** Optional CSS object-position to fine-tune the crop, e.g. "50% 30%". */
  objectPosition?: string;
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
  /** Short category label rendered as a pill on the education card. */
  tag?: string;
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
