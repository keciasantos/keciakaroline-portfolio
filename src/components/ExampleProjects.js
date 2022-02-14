import react from "react";
import project_1 from "../images/project_1.png";
import project_2 from "../images/project_2.png";
import project_3 from "../images/project_3.png";
import "./ExampleProjects.css";

export default function ExampleProjects() {
  return (
    <div className="ExampleProjects">
      <div className="homepage" id="homepage">
        <div className="container-fluid">
          <div className="row m-5">
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
                <a href="/" className="btn btn-branding-outline">
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row m-5">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-3">Weather App</h2>
                <p className="mb-3">
                  My second project, a live weather app build using Vanilla
                  Javascript, where the user can get real time weather
                  information locally and worldwide.
                </p>
                <a href="/" className="btn btn-branding-outline">
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
                <p className="mb-3">
                  You can also check out this project updated! Now build with
                  React <i className="fab fa-react"></i>
                </p>
                <a href="/" className="btn btn-branding-outline">
                  View updated project{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={project_2}
                alt="project weather"
                className="img-fluid project"
                title="This is my weather project"
              />
            </div>
          </div>
          <div className="row m-5">
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
                <a href="/" className="btn btn-branding-outline">
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
