const projects = [
  {
    title: "Agri-Tools E-Commerce Platform",
    tech: "React, JavaScript, Tailwind CSS",
    description:
      "A frontend web application that connects farmers with agricultural tool sellers with a clean and responsive UI.",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js, Tailwind CSS",
    description:
      "My personal portfolio showcasing skills, projects, and experience using a modern dark-themed design.",
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    tech: "JavaScript, API, CSS",
    description:
      "A weather application that fetches real-time weather data from an API and displays it in a user-friendly interface.",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-purple-400 mb-3">
                {project.tech}
              </p>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-md border border-gray-600 hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
