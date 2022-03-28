import react from "react";
import Footer from "./Footer";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="content-container container-fluid">
        <div className="content-contact text-center">
          <h1 className="mb-5">Let's get in touch!</h1>
          <div className="row">
            <div className="col-md-6 mt-5 mb-5">
              <ul className="text-center">
                <li className="mt-5 mb-5 contact-link">
                  <h3>Email:</h3>
                  <a href="mailto:keciakaroline@gmail.com" alt="email link">
                    keciakaroline@gmail.com
                  </a>
                </li>
                <li className="mt-5 mb-5 contact-link">
                  <h3>XING:</h3>
                  <a
                    href="https://www.xing.com/profile/KeciaKaroline_RolimdosSantos"
                    alt="XING page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kécia Santos
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
                <li className="mt-5 mb-5 contact-link">
                  <h3>GitHub:</h3>
                  <a
                    href="https://github.com/keciasantos"
                    alt="GitHub page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    keciasantos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
