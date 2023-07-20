import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

export default function Footer() {
  return (
    <footer
      className="navbar-background pt-3 pb-1 mt-5 d-flex justify-content-center text-center"
      id="footer"
    >
      <h6>
        Written in <strong>React + Vite + TS + Bootstrap 5.</strong> Powered by{" "}
        <strong>GitHub Pages.</strong>
      </h6>
    </footer>
  );
}
