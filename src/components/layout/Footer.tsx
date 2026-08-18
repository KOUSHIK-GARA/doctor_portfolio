import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';
import type { Doctor } from '../../types/portfolio';

interface FooterProps {
  doctor: Doctor;
}

export function Footer({ doctor }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="brand">
        <HeartPulse size={26} />
        <span>{doctor.name}</span>
      </div>
      <p>{doctor.title}</p>
      <div className="footerInfo">
        <span>
          <MapPin /> {doctor.address}
        </span>
        <span>
          <Phone /> {doctor.phone}
        </span>
        <span>
          <Mail /> {doctor.email}
        </span>
      </div>
      <small>
        © {year} {doctor.name}. All rights reserved.
      </small>
    </footer>
  );
}
