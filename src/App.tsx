import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Appointment } from './components/sections/Appointment';
import { Experience } from './components/sections/Experience';
import { Expertise } from './components/sections/Expertise';
import { Gallery } from './components/sections/Gallery';
import { Hero } from './components/sections/Hero';
import { ChatButton } from './components/ui/ChatButton';
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
  } = portfolio;

  return (
    <>
      <Header brandName={doctor.name} />

      <main>
        <Hero doctor={doctor} content={hero} />
        <About content={about} education={education} memberships={memberships} />
        <Expertise areas={expertise} image={expertiseImage} imageAlt={expertiseImageAlt} />
        <Gallery items={gallery} />
        <Experience experience={experience} achievements={achievements} />
        <Appointment doctor={doctor} />
      </main>

      <Footer doctor={doctor} />
      <ChatButton />
    </>
  );
}
