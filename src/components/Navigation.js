import { Navbar, Nav, Container } from "react-bootstrap";
import react from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect className="navbar" fixed="top" expand="md">
        <Container fluid>
          <Navbar.Brand className="navbar-brand">
            <strong>Kécia Santos</strong>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-toggler-icon"
          >
            <Nav className="me-auto navbar-nav">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
