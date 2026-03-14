import "@/styles/projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title" style={{color:" #08afa1"}}>Featured Projects</h2>

        <p className="section-subtitle">
          Here are some of my AI-powered and web development projects.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}