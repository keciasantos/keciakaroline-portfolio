import react from "react";
import Footer from "./Footer";
import FooterContact from "./FooterContact";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>Hey! I am Kécia Santos</h1>
              <h2 className="mt-4">Front-end Developer, based in Europe</h2>
              <p>
                I am a Materials Engineer from Brazil, living in Germany, that
                fell in love for the WebDeveloper world. I like challenges and I
                always give my best to them, adapting when it is necessary. I
                also believe that teamwork contributes to archive better
                results.
                <br />
                I’m currently seeking new opportunities in front-end
                development. I’m open to work remotely or on site, I have
                flexible hours. I have skills in HTML, CSS, JavaScript and React
                as you can see from my projects.
              </p>
              <div className="text-center">
                <a
                  href="/projects"
                  alt="Go to my projects page"
                  className="btn btn-branding"
                >
                  Check my projects!
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/"
              className="img-fluid profile"
              alt="Kécia Santos"
              title="Kécia Santos Profile Photo"
              width="500"
            />
          </div>
        </div>
      </div>
      <FooterContact />
      <Footer />
    </div>
  );
}
