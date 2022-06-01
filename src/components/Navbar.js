import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <span className="nav-logo">Kécia Karoline</span>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
            {/* <li className="nav-item cv">
							<a
								href="https://drive.google.com/file/d/1_uLUzTgVyXqw-heplJeYME7wI3L5pcvy/view?usp=sharing"
								download
								target="_blank"
								rel="noreferrer"
							>
								Resume
							</a>
						</li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
