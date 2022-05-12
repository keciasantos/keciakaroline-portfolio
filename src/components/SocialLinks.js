import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="social-link">
        <span>
          <a
            href="https://github.com/keciasantos"
            target="_blank"
            title="GitHub page - Kécia Santos"
            alt="GitHub page"
          >
            <i class="fab fa-github-square"></i>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/keciasantos/"
            target="_blank"
            title="Linkedin page - Kécia Santos"
            alt="Linkedin page"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </span>

        <ul>
          <li className="contact-link">
            <h3>Email:</h3>
            <a href="mailto:keciakaroline@gmail.com" alt="email link">
              keciakaroline@gmail.com
            </a>
          </li>
          <li className="contact-link">
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
          <li className="contact-link">
            <h3>Linkedin:</h3>
            <a
              href="https://www.linkedin.com/in/keciasantos/"
              alt="Linkedin page"
              target="_blank"
              rel="noreferrer"
            >
              Kécia Santos
            </a>
          </li>
          <li className="contact-link">
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
    </>
  );
}
