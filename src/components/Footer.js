import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = "© Copyright " + new Date().getFullYear();
  // document.getElementById("year").innerHTML = new Date().getFullYear();

  return (
    <div className="Footer">
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/keciasantos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kécia Santos
      </a>{" "}
      and is hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify.
      </a>
      <div className="social-link">
        <span>
          <a
            href="https://github.com/keciasantos"
            target="_blank"
            title="GitHub page - Kécia Santos"
            alt="GitHub page"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keciasantos/"
            target="_blank"
            title="Linkedin page - Kécia Santos"
            alt="Linkedin page"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.xing.com/profile/KeciaKaroline_RolimdosSantos"
            alt="XING page"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-xing-square"></i>
          </a>
          <a
            href="https://twitter.com/kecia_karoline"
            alt="Twitter page"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter-square"></i>
          </a>
        </span>
      </div>
      <p className="copyright-year">{year}</p>
    </div>
  );
}
