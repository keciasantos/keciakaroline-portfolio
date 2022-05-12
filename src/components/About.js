import React from "react";
import "./About.css";
import { HashLink } from "react-router-hash-link";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="about-me">
        <h1>ABOUT ME</h1>
        <h4>
          Here some information about me, what I do, and my current skills
          mostly in terms of programming and technology
        </h4>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h3>This is me!</h3>
              <p>
                I am a Materials Engineer from Brazil, living in Germany, that
                fell in love for the Front-End Developer world. I believe that
                teamwork contributes to archive better results. I did the{" "}
                <a
                  href="https://www.shecodes.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SheCodes Workshops
                </a>{" "}
                , all my certificates are available on my{" "}
                <a
                  href="https://www.linkedin.com/in/keciasantos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                , fell free to connect with me.
              </p>
              <p>
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to{" "}
                <strong>contact</strong> me.
              </p>
              <div className="button">
                <HashLink to="#contact" className="btn btn-branding">
                  Contact
                </HashLink>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Skills</h3>
              <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>GitHub</li>
                <li>Responsive Design</li>
                <li>SEO</li>
                <li>Figma Basics</li>
                <li>Kanban</li>
                <li>Scrum</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
