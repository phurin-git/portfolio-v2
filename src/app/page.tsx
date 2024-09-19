import { LeftDock, RightDock } from './components/ui/Dock';
import Nav from './components/ui/Nav';
import Theme from './components/ui/Theme';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Experience from './components/ui/Experience';
import Education from './components/ui/Education'
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import AcademicProjects from './components/ui/AcademicProjects';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <AcademicProjects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
};