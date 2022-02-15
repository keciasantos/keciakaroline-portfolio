import react from "react";
import FooterContact from "./FooterContact";

export default function Projects() {
  return (
    <div className="Projects">
      <div class="content-container container-fluid">
        <div class="content">
          <h1 class="mb-5 text-center">
            Hey! Take a look in what I've working on!
          </h1>
          <div class="row text-center">
            <div class="col-md-6 mt-5 mb-5">
              <img
                src="/"
                class="img-fluid project"
                id="project-1"
                alt="Corgi Project"
                title="Corgi Project"
              />
              <h3 class="text-center mt-5 mb-4">Corgi Project</h3>
              <p class="text-center p-2">Build with HTML and CSS</p>
            </div>
            <div class="col-md-6 mt-5 mb-5">
              <img
                src="/"
                class="img-fluid project"
                id="project-2"
                alt="Weather Project"
                title="Weather Project"
              />
              <h3 class="text-center mt-5 mb-4">Weather Project</h3>
              <p class="text-center p-2">Build with HTML, CSS and Javascript</p>
            </div>
            {/* need to add: Update on project: https://react-weather-project-keciasantos.netlify.app/ */}
            <div class="col-md-6 mt-5 mb-5">
              <img
                src="/"
                class="img-fluid project"
                id="project-3"
                alt="Dictionary Project"
                title="Dictionary Project"
              />
              <h3 class="text-center mt-5 mb-4">Dictionary Project</h3>
              <p class="text-center p-2">
                Build with HTML, CSS with React <i class="fab fa-react"></i>
              </p>
            </div>
            <div class="col-md-6 mt-5 mb-5">
              <img
                src="/"
                class="img-fluid project"
                id="project-4"
                alt="Translator Project"
                title="Translator Project"
              />
              <h3 class="text-center mt-5 mb-4">Translator Project</h3>
              <p class="text-center p-2">
                Build with HTML, CSS with React <i class="fab fa-react"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />
    </div>
  );
}
