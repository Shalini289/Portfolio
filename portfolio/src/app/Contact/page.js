"use client";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact<span className="text-purple-400"> Me</span></h2>
     
        Feel free to reach out for internships, projects, or collaboration.
    
      <div style={styles.links}>
        <a href="mailto:shalinibhadouriya95@gmail.com">Email</a>
        <a href="https://github.com/shalini289" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/shalini-bhadouriya" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "80px 20px",
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  text: {
    color: "#aaa",
    marginBottom: "30px",
  },
  form: {
    maxWidth: "400px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #333",
    background: "#111",
    color: "#fff",
  },
  textarea: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #333",
    background: "#111",
    color: "#fff",
  },
  button: {
    padding: "12px",
    background: "#fff",
    color: "#000",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  links: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};
