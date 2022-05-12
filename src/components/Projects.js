import React from "react";
// import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
import project_3 from "../images/project_3.png";
import project_4 from "../images/project_4.png";
import project_5 from "../images/project_5.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="Projects" id="projects">
        <div className="container-fluid">
          <h1>PROJECTS</h1>
          <h4>Here you will find my personal and clients projects.</h4>
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-3">Weather App</h2>
              <img
                src={project_2}
                alt="project weather"
                className="img-fluid project"
                title="This is my weather project"
              />
              <button className="btn btn-branding-outline">
                <a href="/" target="_blank" rel="noreferrer">
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </button>
              <button className="btn btn-branding-outline">
                <a
                  href="https://react-weather-project-keciasantos.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </button>
            </div>

            <div className="col-md-6">
              <h2 className="mb-3">Dictionary App</h2>
              <img
                src={project_3}
                alt="project dictionary"
                className="img-fluid project"
                title="This is my dictionary project"
              />
              <button className="btn btn-branding-outline">
                <a href="/" target="_blank" rel="noreferrer">
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </button>
              <button className="btn btn-branding-outline">
                <a
                  href="https://react-dictionary-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </button>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-3">TODO App</h2>
                <img
                  src={project_4}
                  alt="project FrontEndMentor TODO-LIST"
                  className="img-fluid project"
                  title="This is my TODO list project"
                />
                <button className="btn btn-branding-outline">
                  <a href="/" target="_blank" rel="noreferrer">
                    GitHub <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </button>
                <button className="btn btn-branding-outline">
                  <a
                    href="https://todo-app-keciasantos.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo live <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </button>

                <a
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  frontendmentor.io
                </a>
              </div>

              <div className="col-md-6">
                <h2 className="mb-3">Portfolio - Yasmin Rolim</h2>
                <img
                  src={project_5}
                  alt="project Yasmin Rolim"
                  className="img-fluid project"
                  title="Yasmin Rolim Portfolio"
                />
                <button className="btn btn-branding-outline">
                  <a href="/" target="_blank" rel="noreferrer">
                    GitHub <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </button>
                <button className="btn btn-branding-outline">
                  <a
                    href="https://yasminrolim-arquitetura.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo live <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
