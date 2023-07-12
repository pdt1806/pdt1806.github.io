import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-background fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand h1" href="#">
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
              <a className="nav-link" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
