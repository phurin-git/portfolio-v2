import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Project from "./ui/Project";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import { LeftDock, RightDock } from "./ui/Dock";

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
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}