"use client";
import useReveal from "@/lib/useReveal";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";

export default function Home() {
  useReveal(); // ⭐ activates scroll reveal

  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <WhyChooseMe />
      <Contact />
    </main>
  );
}