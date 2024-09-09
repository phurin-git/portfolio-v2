import { LeftDock, RightDock } from './ui/Dock';
import Nav from './ui/Nav';
import Theme from './ui/Theme';
import Hero from './ui/Hero';
import About from './ui/About';
import Experience from './ui/Experience';
import Education from './ui/Education'
import Skills from './ui/Skills';
import Projects from './ui/Projects';
import Contact from './ui/Contact';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <>
      <LeftDock />
      <RightDock />
      <Nav />
      <Theme className='fixed top-10 right-10 size-7 max-sm:hidden'/>
      <main className='px-6'>
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