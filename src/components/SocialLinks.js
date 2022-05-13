import React from "react";
import "./SocialLinks.css";

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
          <i className="fa-solid fa-envelope fa-2x"></i>
        </a>

        <a
          href="https://github.com/keciasantos"
          target="_blank"
          title="GitHub page - Kécia Santos"
          alt="GitHub page"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github-square fa-2x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/keciasantos/"
          target="_blank"
          title="Linkedin page - Kécia Santos"
          alt="Linkedin page"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>

        <a
          href="https://www.xing.com/profile/KeciaKaroline_RolimdosSantos"
          alt="XING page"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-xing-square fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/kecia_karoline"
          alt="Twitter page"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter-square fa-2x"></i>
        </a>
      </div>
    </>
  );
}
