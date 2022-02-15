import react from "react";
import Navbar from "./Navbar";
import kecia from "../images/kecia-1.png";
import ExampleProjects from "./ExampleProjects";
import FooterContact from "./FooterContact";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h2>Hi, I am</h2>
              <h1>Kécia Santos</h1>
              <h3 className="font-text mb-5">
                {" "}
                <span
                  className="iconify-inline"
                  data-icon="emojione-v1:flag-for-brazil"
                ></span>{" "}
                Brazilian Front-end developer 👩‍💻 based in Europe
              </h3>
              <a href="/" className="btn btn-branding">
                Get started!
              </a>
            </div>
            <div className="col-sm-6">
              <img src={kecia} alt="Kécia Santos" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <p class="headline text-center m-4">
        A little show about my featured projects until now
      </p>
      <ExampleProjects />
      <FooterContact />
    </div>
  );
}
