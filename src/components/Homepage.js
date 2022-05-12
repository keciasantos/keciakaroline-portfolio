import React from "react";
import profile_1 from "../images/profile_1.jpg";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Homepage.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import About from "./About";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col introdution">
              <h1>Hey, I'm Kécia Santos</h1>
              <h3 className="font-text mb-5">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications
              </h3>

              <HashLink to="#projects" className="btn btn-branding">
                Projects
              </HashLink>
            </div>
            <div className="col d-none d-lg-block">
              <img src={profile_1} alt="Kécia Santos" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
