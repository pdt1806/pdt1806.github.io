import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-background">
      <div className="container-fluid d-flex align-items-baseline">
        <a className="navbar-brand h1" href="#introduction">
          Benny Nguyen
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
