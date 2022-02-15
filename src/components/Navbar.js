import react from "react";
import "./Navbar.css";
import Projects from "./Projects";
import { NavLink } from "react-router-dom";

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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/src/components/Homepage.js"
              >
                Home
              </a>
              {/* <NavLink
                activeClassName="active"
                to="/src/components/Projects.js"
              >
                Project
              </NavLink> */}
              <a className="nav-link" href="/src/components/Projects.js">
                My projects
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
