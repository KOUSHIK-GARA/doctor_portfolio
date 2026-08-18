import { Mail, Phone } from 'lucide-react';
import type { Doctor } from '../../types/portfolio';

interface AppointmentProps {
  doctor: Doctor;
}

export function Appointment({ doctor }: AppointmentProps) {
  return (
    <section id="appointment" className="appointment">
      <div>
        <div className="sectionTag">BOOK A VISIT</div>
        <h2>
          Let&apos;s take the next step <span>together.</span>
        </h2>
        <p>Have a question or need an appointment? Get in touch with the clinic.</p>
      </div>
      <div className="contactCards">
        <a href={`tel:${doctor.phone}`}>
          <Phone />
          <span>
            <small>Call us</small>
            <b>{doctor.phone}</b>
          </span>
        </a>
        <a href={`mailto:${doctor.email}`}>
          <Mail />
          <span>
            <small>Email</small>
            <b>{doctor.email}</b>
          </span>
        </a>
      </div>
    </section>
  );
}
