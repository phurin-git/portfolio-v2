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
      <Theme className='fixed top-0 sm:right-5 lg:right-10 hidden md:flex flex-col before:w-px before:h-24 before:m-auto before:mb-5 before:bg-black before:dark:bg-white max-sm:hidden'/>
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