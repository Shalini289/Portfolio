export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  github,
}) {
  return (
    <div className="project-card zoom-in reveal reveal-zoom">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tech-stack">
          {tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={demo} target="_blank">Live Demo</a>
          <a href={github} target="_blank" className="github-btn">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}