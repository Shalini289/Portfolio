"use client";
import useReveal from "@/lib/useReveal";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Certificates from "@/components/Certificates";

export default function Home() {
  useReveal(); // ⭐ activates scroll reveal

  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <WhyChooseMe />
      <Contact />
    </main>
  );
}
