import "@/styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills ">
      <div className="container">
        <h2 className="section-title" style={{color:" #08afa1"}}>My Skills</h2>

        <div className="skills-grid">

          {/* Frontend */}
         <div className="skill-card  reveal fade-up">
            <h3>Language</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>React.js</li>
              <li>C / C++ </li>
            </ul>
          </div>

          {/* AI Integration */}
         <div className="skill-card fade-up reveal">
            <h3>AI Integration</h3>
            <ul>
              <li>Prompt Engineering</li>
              <li>OpenAI API</li>
              <li>Groq API</li>
             
            </ul>
          </div>

          {/* Core CS */}
         <div className="skill-card fade-up reveal">
            <h3>Core CS</h3>
            <ul>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Problem Solving</li>
              <li>OOPs</li>
              <li>DBMS Basics</li>
            </ul>
          </div>

          {/* Tools */}
      <div className="skill-card fade-up reveal">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Chrome DevTools</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}