import "@/styles/certificates.css";

const certificates = [
  {
    title: "Software Product Developer",
    issuer: "Skill India",
    date: "2026",
    image: "/certificates/certificate-1.png",
    description:
      "A credential that validates ability to design, build, and deliver software products from concept to deployment.",
  },
  {
    title: "Software Engineering	Job	Simulation",
    issuer: "Forage",
    date: "2026",
    image: "/certificates/certificate-2.png",
    description:
      "A Software Engineering Job Simulation Certificate recognizing hands-on experience in building web apps, microservices, mobile features, and user-friendly platforms with industry tools.",
  },
  {
    title: "Software Engineering	Job	Simulation",
    issuer: "Forage",
    date: "2026",
    image: "/certificates/certificate-3.png",
    description:
      "A Software Engineering Job Simulation Certificate recognizing hands-on experience in building web apps, microservices, mobile features, and user-friendly platforms with industry tools.",
  },
  {
    title: "Claude101",
    issuer: "Anthropic",
    date: "2026",
    image: "/certificates/certificate-4.png",
    description:
      "Gained foundational knowledge in AI interaction, safe usage principles, and prompt design tailored to Claude.",
  },
   {
    title: "Claude in Action",
    issuer: "Anthropic",
    date: "2026",
    image: "/certificates/certificate-5.png",
    description:
      "Certificate of Completion recognizing hands-on learning in Anthropic’s Claude Code in Action program.",
  },
   {
    title: "Introduction to Prompt Engineering",
    issuer: "Simplilearn",
    date: "2026",
    image: "/certificates/certificate-6.png",
    description:
      "Certified in Prompt Engineering, skilled at designing effective prompts to optimize AI outputs",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title" style={{ color: " #08afa1" }}>
          Certificates
        </h2>

        <p className="section-subtitle">
          A few certifications that reflect my learning across web development,
          AI tools, and computer science fundamentals.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card reveal fade-up" key={index}>
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="certificate-image"
              />
              <div className="certificate-topline">
                <span>{certificate.issuer}</span>
                <strong>{certificate.date}</strong>
              </div>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
