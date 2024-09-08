import Nav from './ui/Nav';
import Hero from './ui/Hero';
import About from './ui/About';
import Experience from './ui/Experience';
import Education from './ui/Education'
import Skills from './ui/Skills';
import Projects from './ui/Projects';
import Contact from './ui/Contact';
import Footer from './ui/Footer';
import { LeftDock, RightDock } from './ui/Dock';

export default function Home() {
  return (
    <>
      <LeftDock />
      <RightDock />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};