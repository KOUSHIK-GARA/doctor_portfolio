import { useState } from 'react';
import { AppointmentModal } from './components/booking/AppointmentModal';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Appointment } from './components/sections/Appointment';
import { Experience } from './components/sections/Experience';
import { Expertise } from './components/sections/Expertise';
import { Gallery } from './components/sections/Gallery';
import { Hero } from './components/sections/Hero';
import { portfolio } from './data/portfolio';

export function App() {
  const {
    doctor,
    hero,
    about,
    expertise,
    expertiseImage,
    expertiseImageAlt,
    gallery,
    education,
    experience,
    achievements,
    memberships,
    booking,
  } = portfolio;

  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Header brandName={doctor.name} onBook={openBooking} />

      <main>
        <Hero doctor={doctor} content={hero} />
        <About content={about} education={education} memberships={memberships} />
        <Expertise areas={expertise} image={expertiseImage} imageAlt={expertiseImageAlt} />
        <Gallery items={gallery} />
        <Experience experience={experience} achievements={achievements} />
        <Appointment doctor={doctor} />
      </main>

      <Footer doctor={doctor} onBook={openBooking} />

      <AppointmentModal open={bookingOpen} onClose={closeBooking} booking={booking} />
    </>
  );
}
