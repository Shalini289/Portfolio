import "@/styles/why.css";

export default function WhyChooseMe() {
  return (
    <section className="why">
      <div className="container">
        <h2 className="section-title" style={{color:" #08afa1"}}>Why Choose Me</h2>

        <div className="why-grid">

          <div className="why-card  reveal">
            <h3>⚡ Fast Delivery</h3>
            <p>I deliver high-quality work quickly without compromising performance.</p>
          </div>

          <div className="why-card  reveal">
            <h3>🤖 AI-Powered Solutions</h3>
            <p>Modern AI integrations to give your product a competitive edge.</p>
          </div>

          <div className="why-card  reveal">
            <h3>🧼 Clean & Scalable Code</h3>
            <p>Maintainable and production-ready code following best practices.</p>
          </div>

          <div className="why-card  reveal">
            <h3>💬 Clear Communication</h3>
            <p>Regular updates and smooth collaboration throughout the project.</p>
          </div>

        </div>
      </div>
    </section>
  );
}