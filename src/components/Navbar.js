import react from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand">
            <strong>Kécia Santos</strong>
          </span>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
