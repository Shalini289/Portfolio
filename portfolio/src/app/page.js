import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
