import React from "react";
import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
import project_3 from "../images/project_3.png";
import project_4 from "../images/project_4.jpg";
import "./ExampleProjects.css";

export default function ExampleProjects() {
  return (
    <div className="ExampleProjects">
      <div className="homepage" id="homepage">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={project_1}
                alt="project corgi"
                className="img-fluid project"
                title="This is my corgi project"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-3">1st Project</h2>
                <p className="mb-3">
                  My first coding project using basic HTML and CSS, simple but
                  with love (one day I will be a proud mom of a Corgi). It was
                  made after a few weeks of classes about HTML and CSS basic.
                </p>

                <a
                  href="https://www.shecodes.io/workshops/shecodes-basics-00f05685-1a07-4d9f-a4e1-7b822eb75fcb/projects/503334"
                  className="btn btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-3">Weather App</h2>
                <p className="mb-3">
                  My second project, a live weather app build using Vanilla
                  Javascript, where the user can get real time weather
                  information locally and worldwide.
                </p>
                <a
                  href="https://weather-application-keciasantos.netlify.app/"
                  className="btn btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <p className="mt-2">
                  You can also check out this project updated! Now build with
                  React <i className="fab fa-react"></i>
                </p>
                <a
                  href="https://react-weather-project-keciasantos.netlify.app/"
                  className="btn btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View updated project{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
            <br />
            <div className="col d-none d-lg-block">
              <img
                src={project_2}
                alt="project weather"
                className="img-fluid project"
                title="This is my weather project"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={project_3}
                alt="project dictionary"
                className="img-fluid project"
                title="This is my dictionary project"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-3">Dictionary App</h2>
                <p className="mb-3">
                  This last project was build with React{" "}
                  <i className="fab fa-react"></i> and two API's <br />
                </p>
                <a
                  href="https://react-dictionary-project.netlify.app/"
                  className="btn btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-3">TODO App</h2>
                <p className="mb-3">
                  This project is from{" "}
                  <a
                    href="https://www.frontendmentor.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    frontendmentor.io
                  </a>
                  , build with React <i className="fab fa-react"></i>. For me it
                  was a big challenge to apply all this resources in an APP with
                  so less field experience. Really loved! <br />
                </p>
                <a
                  href="https://todo-app-keciasantos.netlify.app/"
                  className="btn btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={project_4}
                alt="project FrontEndMentor TODO-LIST"
                className="img-fluid project"
                title="This is my TODO list project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
