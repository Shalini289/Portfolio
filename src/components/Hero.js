import "@/styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        
        <div className="hero-left fade-left reveal reveal-left">
          <h1>
           Full Stack <span>Web Developer</span>
          </h1>

          <p>
            I build smart, scalable and high-converting web applications
            using AI integration to help businesses grow faster.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Hire Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>5+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>AI</h3>
              <span>Focused</span>
            </div>

            <div>
              <h3>Fast</h3>
              <span>Delivery</span>
            </div>
          </div>
        </div>

       <div className="hero-right fade-right reveal reveal-right">
          <img src="/profile.png" alt="profile" />
        </div>

      </div>
    </section>
  );
}