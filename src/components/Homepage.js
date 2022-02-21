import react from "react";
import profile_1 from "../images/profile_1.png";
import ExampleProjects from "./ExampleProjects";
import FooterContact from "./FooterContact";
import "./Homepage.css";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col introdution">
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

              <HashLink to="#homepage" className="btn btn-branding">
                Get started!
              </HashLink>
            </div>
            <div className="col d-none d-lg-block">
              <img src={profile_1} alt="Kécia Santos" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <p class="headline text-center m-4">
        A little show about my featured projects until now
      </p>
      <ExampleProjects />
      <FooterContact />
      <Footer />
    </div>
  );
}
