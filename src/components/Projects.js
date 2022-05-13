import React from "react";
import "./Projects.css";
import project_2 from "../images/project_2.png";
import project_3 from "../images/project_3.png";
import project_4 from "../images/project_4.png";
import project_5 from "../images/project_5.png";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <div className="container-fluid">
        <h1>PROJECTS</h1>
        <h4>Here you will find my personal and clients projects.</h4>
        <ul className="grid-project">
          <li className="grid-item">
            <>
              <div className="item-title">
                <h2>Weather App</h2>
              </div>
              <div className="item-pic">
                <img
                  src={project_2}
                  alt="project weather"
                  className="img-fluid"
                  title="This is my weather project"
                />
              </div>
              <div className="tags">
                <button
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <button
                  href="https://react-weather-project-keciasantos.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  Demo Live <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </>
          </li>
          <li className="grid-item">
            <>
              <div className="item-title">
                <h2>Dictionary App</h2>
              </div>
              <div className="item-pic">
                <img
                  src={project_3}
                  alt="project dictionary"
                  className="img-fluid"
                  title="This is my dictionary project"
                />
              </div>
              <div className="tags">
                <button
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <button
                  href="https://react-dictionary-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  Demo Live <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </>
          </li>
          <li className="grid-item">
            <>
              <div className="item-title">
                <h2>TODO App</h2>
              </div>
              <div className="item-pic">
                <img
                  src={project_4}
                  alt="project FrontEndMentor TODO-LIST"
                  className="img-fluid"
                  title="This is my TODO list project"
                />
              </div>
              <div className="tags">
                <button
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <button
                  href="https://todo-app-keciasantos.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  Demo live <i className="fas fa-long-arrow-alt-right"></i>
                </button>
                <button
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding"
                >
                  FrontEnd-Mentor
                </button>
              </div>
            </>
          </li>
          <li className="grid-item">
            <>
              <div className="item-title">
                <h2>Portfolio - Yasmin Rolim</h2>
              </div>
              <div className="item-pic">
                <img
                  src={project_5}
                  alt="project Yasmin Rolim"
                  className="img-fluid"
                  title="Yasmin Rolim Portfolio"
                />
              </div>
              <button
                href="/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-branding"
              >
                GitHub <i className="fas fa-long-arrow-alt-right"></i>
              </button>
              <button
                href="https://yasminrolim-arquitetura.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-branding"
              >
                Demo live <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
}
