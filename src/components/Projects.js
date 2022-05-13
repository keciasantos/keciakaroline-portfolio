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
                <a
                  href="https://github.com/keciasantos/react-weather-project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <a
                  href="https://react-weather-project-keciasantos.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  Demo Live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
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
                <a
                  href="https://github.com/keciasantos/react-dictionary-project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <a
                  href="https://react-dictionary-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  Demo Live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
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
                <a
                  href="https://github.com/keciasantos/todo-app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <a
                  href="https://todo-app-keciasantos.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  Demo live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <br />
                <a
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  FrontEnd-Mentor{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </>
          </li>
          <li className="grid-item">
            <>
              <div className="item-title">
                <h2>
                  Yasmin Rolim
                  <br />
                  Portfolio
                </h2>
              </div>
              <div className="item-pic">
                <img
                  src={project_5}
                  alt="project Yasmin Rolim"
                  className="img-fluid"
                  title="Yasmin Rolim Portfolio"
                />
              </div>
              <div className="tags">
                <a
                  href="https://github.com/keciasantos/yasminrolim-project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  GitHub <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <a
                  href="https://yasminrolim-arquitetura.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-branding-outline"
                >
                  Demo live <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </>
          </li>
        </ul>
      </div>
    </div>
  );
}
