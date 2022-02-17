import react from "react";
import Footer from "./Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="content-container container-fluid">
        <div className="content-contact text-center">
          <h1 className="mb-5">Let's get in touch!</h1>
          <ul className="text-center">
            <li className="mt-5 mb-5 contact-link">
              <h3>Email:</h3>
              <a href="mailto:keciakaroline@gmail.com" alt="email link">
                keciakaroline@gmail.com
              </a>
            </li>
            <li className="mt-5 mb-5 contact-link">
              <h3>Linkedin:</h3>
              <a
                href="https://www.linkedin.com/in/keciasantos/"
                alt="Linkedin page"
                target="_blank"
                rel="noreferrer"
              >
                keciasantos
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
