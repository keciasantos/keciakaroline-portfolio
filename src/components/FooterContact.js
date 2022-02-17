import react from "react";
import "./FooterContact.css";
import { Link } from "react-router-dom";

export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div className="section-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-3">Work Inquiry</h2>
              <p>
                Are you interested? Let's talk and I'll help you by all my best
              </p>
            </div>
            <div className="col-lg-6 mt-4">
              <Link to="/contact" className="btn btn-branding-outline">
                Contact me here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
