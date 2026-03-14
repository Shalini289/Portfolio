import "@/styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">


        <div className="about-right fade-right reveal ">
          <h2 style={{color:" #08afa1"}}>About Me</h2>

          <p>
            I am a passionate Computer Science Engineering student focused on building full stack web applications that solve real-world problems. I enjoy creating fast, scalable, and user-friendly digital products.
          </p>

        

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎓</h3>
              <span>CSE Student</span>
            </div>

            <div className="highlight-card">
              <h3>🤖</h3>
              <span>AI Focused</span>
            </div>

            <div className="highlight-card">
              <h3>⚡</h3>
              <span>Fast Learner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}