import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Shalini</h3>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}