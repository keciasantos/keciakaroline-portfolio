import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <div className="container-fluid">
        <h1>PROJECTS</h1>
        <h4>Here you will find my personal and clients projects.</h4>
        <ul className="project-out">
          <li className="project">
            <h2 className="mb-3">Weather App</h2>
            <a
              href="../images/project_2.png"
              alt="project weather"
              className="img-fluid"
            ></a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              GitHub <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a
              href="https://react-weather-project-keciasantos.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              Demo live <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </li>
          <li className="project">
            <h2 className="mb-3">Dictionary App</h2>
            <a
              href="../images/project_3.png"
              alt="project dictionary"
              className="img-fluid"
            ></a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              GitHub <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a
              href="https://react-dictionary-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              Demo live <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </li>
          <li className="project">
            <h2 className="mb-3">TODO App</h2>
            <a
              href="../images/project_4.png"
              alt="project FrontEndMentor TODO-LIST"
              className="img-fluid"
            ></a>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              GitHub <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a
              href="https://todo-app-keciasantos.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              Demo live <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a
              href="https://www.frontendmentor.io/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              FrontEnd-Mentor
            </a>
          </li>
          <li className="project">
            <h2 className="mb-3">Portfolio - Yasmin Rolim</h2>
            <a
              href="../images/project_5.png"
              alt="project Yasmin Rolim"
              className="img-fluid"
            ></a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              GitHub <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <a
              href="https://yasminrolim-arquitetura.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-branding"
            >
              Demo live <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
