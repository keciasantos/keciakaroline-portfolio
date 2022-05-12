import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  document.getElementById("year").innerHTML = new Date().getFullYear();

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
      and is{" "}
      <a
        href="https://github.com/keciasantos/react-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify.
      </a>
      <p id="copyright-year">{year}</p>
    </div>
  );
}
