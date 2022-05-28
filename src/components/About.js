import React from "react";
import "./About.css";
import { HashLink } from "react-router-hash-link";

export default function About() {
	return (
		<div className="About" id="about">
			<div className="about-me">
				<h1>ABOUT ME</h1>
				<h4>
					Here some information about me, what I do, and my current skills
					mostly in terms of programming and technology
				</h4>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<h3>
								<strong>This is me!</strong>
							</h3>
							<p>
								I am a Materials Engineer that fell in love with the web
								developer Frontend world. I finished a coding Bootcamp{" "}
								<a
									href="https://www.shecodes.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									SheCodes.io
								</a>
								, including real-life projects, all my certificates are
								available on my{" "}
								<a
									href="https://www.linkedin.com/in/keciasantos/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</a>
								, fell free to connect with me.
							</p>
							<p>
								As a junior developer, I am constantly tailoring myself to
								better work, studying new techs and looking for opportunities. I
								believe in teamwork and always try to contribute to improvement.
							</p>
							<p>
								I'm open to <strong>Job</strong> opportunities where I can
								contribute, learn and grow. If you have a good opportunity that
								matches my skills and experience then don't hesitate to{" "}
								<strong>contact</strong> me.
							</p>
							<div className="button">
								<HashLink to="#contact" className="btn btn-branding">
									Contact
								</HashLink>
							</div>
						</div>
						<div className="col-md-6">
							<h3>
								<strong>Skills</strong>
							</h3>
							<ul className="skills">
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>PHP</li>
								<li>Laravel</li>
								<li>JEST</li>
								<li>Python</li>
								<li>GitHub</li>
								<li>Responsive Design</li>
								<li>SEO</li>
								<li>Figma Basics</li>
								<li>Kanban</li>
								<li>Scrum</li>
								<li>Agile</li>
								<li>Microsoft Office</li>
								<li>npm</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
