import React from "react";
import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks() {
  return (
    <>
      <div className="SocialLinks">
        <a
          href="mailto:keciakaroline@gmail.com"
          rel="noopener noreferrer"
          alt="email link"
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="https://github.com/keciasantos"
          target="_blank"
          title="GitHub page - Kécia Santos"
          alt="GitHub page"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github-square"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/keciasantos/"
          target="_blank"
          title="Linkedin page - Kécia Santos"
          alt="Linkedin page"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.xing.com/profile/KeciaKaroline_RolimdosSantos"
          alt="XING page"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-xing-square"></i>
        </a>
      </div>
    </>
  );
}
