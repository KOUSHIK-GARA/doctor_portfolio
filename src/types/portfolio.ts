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

export interface BookingConfig {
  /**
   * WhatsApp number in international format, digits only (no "+" or spaces),
   * e.g. "919494204143". Used as the delivery recipient.
   */
  whatsappNumber: string;
  /**
   * Selectable appointment time slots shown in the booking form, e.g.
   * "5:00 PM". Keep them rounded (":00" / ":30").
   */
  timeSlots: string[];
  /**
   * PREFERRED direct-send path. A serverless endpoint (e.g. Cloudflare Worker /
   * Vercel function) that receives the request as JSON and forwards it to the
   * clinic's WhatsApp via the WhatsApp Cloud API. When set, submissions POST
   * here and NO WhatsApp window is opened.
   */
  relayEndpoint: string;
  /**
   * QUICK no-backend direct-send path. A free CallMeBot API key that delivers a
   * WhatsApp message to `whatsappNumber` via a URL call (fire-and-forget, no
   * WhatsApp window). Get one at https://www.callmebot.com/blog/free-api-whatsapp-messages/.
   */
  callmebotApiKey: string;
  /**
   * Feature flag for the (deferred) email request flow.
   */
  enableEmail: boolean;
  /**
   * Web3Forms access key used to deliver appointment requests by email once
   * `enableEmail` is turned on. Get a free key at https://web3forms.com.
   */
  web3formsAccessKey: string;
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
  booking: BookingConfig;
}
