import "@/styles/education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title" style={{color:" #08afa1"}}>Academic Qualification</h2>

        <div className="education-timeline">

          {/* College */}
          <div className="edu-card reveal">
            <div className="edu-left">
              <h3>B.Tech — Computer Science Engineering</h3>
              <span>2023 — 2027</span>
            </div>

            <div className="edu-right">
              <h4>Acropolis Institute of Technolog and Research</h4>
              <p>
                Currently pursuing Bachelor of Technology in Computer Science
                Engineering with focus on Data Structures, and Web Development.(Current Cgpa - 7.68)
              </p>
            </div>
          </div>

          {/* 12th */}
          <div className="edu-card reveal">
            <div className="edu-left">
              <h3>Class XII (Science)</h3>
              <span>2023</span>
            </div>

            <div className="edu-right">
              <h4>CBSE</h4>
              <p>
                Completed higher secondary education with emphasis on Mathematics
                and Science.(85.6%)
              </p>
            </div>
          </div>

          {/* 10th */}
          <div className="edu-card reveal">
            <div className="edu-left">
              <h3>Class X</h3>
              <span>2021</span>
            </div>

            <div className="edu-right">
              <h4>CBSE</h4>
              <p>
                Completed secondary education with strong academic performance.(81%)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}