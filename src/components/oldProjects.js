import React from "react";
import FooterContact from "./FooterContact";
import Footer from "./Footer";
import "./Projects.css";
import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
import project_2_1 from "../images/project_2_1.png";
import project_3 from "../images/project_3.png";
import project_4 from "../images/project_4.jpg";

export default function Projects() {
  return (
    <>
      <div class="content-container container-fluid">
        <div class="content">
          <h1 class="mb-5 text-center">
            Hey! Take a look in what I've working on!
          </h1>
          <div class="row text-center">
            <div class="col-md-6 mt-5 mb-5">
              <img
                src={project_1}
                class="img-fluid project"
                id="project-1"
                alt="Corgi Project"
                title="Corgi Project"
              />
              <h3 class="text-center mt-5 mb-4">Corgi Project</h3>
              <p class="text-center p-2">Build with HTML and CSS</p>
              <a
                href="https://www.shecodes.io/workshops/shecodes-basics-00f05685-1a07-4d9f-a4e1-7b822eb75fcb/projects/503334"
                className="btn btn-branding-outline"
                target="_blank"
                rel="noreferrer"
              >
                View project <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
            <div class="col-md-6 mt-5 mb-5">
              <img
                src={project_2}
                class="img-fluid project"
                id="project-2"
                alt="Weather Project"
                title="Weather Project"
              />
              <h3 class="text-center mt-5 mb-4">Weather Project</h3>
              <p class="text-center p-2">Build with HTML, CSS and Javascript</p>

              <a
                href="https://weather-application-keciasantos.netlify.app/"
                className="btn btn-branding-outline"
                target="_blank"
                rel="noreferrer"
              >
                View project <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>

            <div class="col-md-6 mt-5 mb-5">
              <img
                src={project_2_1}
                class="img-fluid project"
                id="project-3"
                alt="Weather Project Update"
                title="Weather Project Update"
              />
              <h3 class="text-center mt-5 mb-4">Weather Project Updated</h3>
              <p class="text-center p-2">
                Build with HTML, CSS and React <i class="fab fa-react"></i>.
                Also included animated icons! 🥳
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
            <div class="col-md-6 mt-5 mb-5">
              <img
                src={project_3}
                class="img-fluid project"
                id="project-4"
                alt="Dictionary Project"
                title="Dictionary Project"
              />
              <h3 class="text-center mt-5 mb-4">Dictionary Project</h3>
              <p class="text-center p-2">
                Build with HTML, CSS and React <i class="fab fa-react"></i>. And
                two API's for words and images.
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
            <div class="col-md-6 mt-5 mb-5">
              <img
                src={project_4}
                class="img-fluid project"
                id="project-4"
                alt="TODO Project"
                title="TODO Project"
              />
              <h3 class="text-center mt-5 mb-4">TODO list Project</h3>
              <p class="text-center p-2">
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
        </div>
      </div>

      <FooterContact />
      <Footer />
    </>
  );
}
