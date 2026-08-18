import { ArrowRight, Mail, Phone } from 'lucide-react';
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
        <p>
          Have a question or need an appointment? Get in touch with the clinic. We&apos;re here to
          help.
        </p>
      </div>
      <div className="contactCards">
        <a href={`tel:${doctor.phone.replace(/\s+/g, '')}`}>
          <span className="ccIcon">
            <Phone />
          </span>
          <span className="ccText">
            <small>Call us</small>
            <b>{doctor.phone}</b>
          </span>
          <span className="ccArrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </a>
        <a href={`mailto:${doctor.email}`}>
          <span className="ccIcon">
            <Mail />
          </span>
          <span className="ccText">
            <small>Email</small>
            <b>{doctor.email}</b>
          </span>
          <span className="ccArrow" aria-hidden="true">
            <ArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
}
