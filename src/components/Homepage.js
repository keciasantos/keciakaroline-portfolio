import React from "react";
import profile_1 from "../images/profile_1.jpg";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import "./Homepage.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import About from "./About";
import SocialLinks from "./SocialLinks";

export default function Homepage() {
  return (
    <div className="Homepage">
      <section className="heading text-center">
        <div className="container-fluid">
          <div>
            <img src={profile_1} alt="Kécia Santos" className="img-fluid" />
          </div>
          <div className="intro">
            <h2>Hey, I'm </h2>
            <h1>Kécia Santos</h1>
            <h3>
              A Frontend focused on Web Developer building the Frontend of
              Websites and Web Applications
            </h3>
            <HashLink to="#projects" className="btn btn-branding">
              Projects
            </HashLink>
          </div>
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>

        <SocialLinks />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
