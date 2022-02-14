import react from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">Kécia Santos</a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                My projects
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
                Contact
              </a>

              <a
                href="https://www.linkedin.com/in/keciasantos/"
                target="_blank"
                title="Linkedin page - Kécia Santos"
                className="nav-link linkedin-page"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
