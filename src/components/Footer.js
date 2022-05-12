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
            <i class="fab fa-github-square"></i>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/keciasantos/"
            target="_blank"
            title="Linkedin page - Kécia Santos"
            alt="Linkedin page"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </span>
      </div>
      <p className="copyright-year">{year}</p>
    </div>
  );
}
