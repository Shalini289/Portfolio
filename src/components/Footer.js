import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fcontainer">
        <h3 style={{background:"black"}}>Shalini</h3>
        <p style={{background:"black"}}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}