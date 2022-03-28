import react from "react";
import Footer from "./Footer";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="content-container container-fluid">
        <div className="content-contact text-center">
          <h1>Let's get in touch!</h1>
          <div className="row">
            <div className="col-md-6 mt-5 mb-5">
              <div className="row contact">
                <div className="col-md-6 mt-3 mb-3">
                  <div className="contact-link">
                    <h3>Email:</h3>
                    <a href="mailto:keciakaroline@gmail.com" alt="email link">
                      keciakaroline@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mb-3">
                  <div className="contact-link">
                    <h3>XING:</h3>
                    <a
                      href="https://www.xing.com/profile/KeciaKaroline_RolimdosSantos"
                      alt="XING page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kécia Santos
                    </a>
                  </div>
                </div>
              </div>

              <div className="row contact">
                <div className="col-md-6 mt-3 mb-3">
                  <div className="mt-5 mb-5 contact-link">
                    <h3>Linkedin:</h3>
                    <a
                      href="https://www.linkedin.com/in/keciasantos/"
                      alt="Linkedin page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      keciasantos
                    </a>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mb-3">
                  <div className="mt-5 mb-5 contact-link">
                    <h3>GitHub:</h3>
                    <a
                      href="https://github.com/keciasantos"
                      alt="GitHub page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      keciasantos
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5 mb-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
