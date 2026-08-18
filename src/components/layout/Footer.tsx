import { ChevronRight, Clock, HeartPulse, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import type { Doctor, SocialPlatform } from '../../types/portfolio';

interface FooterProps {
  doctor: Doctor;
}

const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
};

// Brand marks are not part of lucide's icon set, so they're inlined here.
function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1V11H8v3h2.5v8h3z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H9z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 001.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 001.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 001.8-1.8C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer({ doctor }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="footerMain">
        <div className="footerBrandCol">
          <div className="brand">
            <HeartPulse size={26} />
            <span>{doctor.name}</span>
          </div>
          <span className="footerRule" aria-hidden="true" />
          <p>{doctor.title}</p>
          <div className="socials">
            {doctor.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                aria-label={SOCIAL_LABELS[social.platform]}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>

        <ul className="footerContact">
          <li>
            <span className="fIcon">
              <MapPin />
            </span>
            <div>
              <b>Location</b>
              <span>{doctor.address}</span>
              <span className="footerSub">{doctor.locationHours}</span>
            </div>
          </li>
          <li>
            <span className="fIcon">
              <Phone />
            </span>
            <div>
              <b>Phone</b>
              <a href={`tel:${doctor.phone.replace(/\s+/g, '')}`}>{doctor.phone}</a>
            </div>
          </li>
          <li>
            <span className="fIcon">
              <Mail />
            </span>
            <div>
              <b>Email</b>
              <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
            </div>
          </li>
        </ul>

        <div className="footerCol">
          <div className="footerHours">
            <div className="footerHoursHead">
              <span className="fIcon">
                <Clock />
              </span>
              <b>Clinic Hours</b>
            </div>
            <ul>
              {doctor.hours.map((slot) => (
                <li key={slot.label}>
                  <span>{slot.label}</span>
                  <span>{slot.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCta">
            <b>Need an appointment?</b>
            <p>We&apos;re just a call or email away.</p>
            <a className="footerCtaBtn" href="#appointment">
              Book an Appointment <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBar">
        <ShieldCheck size={16} />
        <span>
          © {year} {doctor.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
