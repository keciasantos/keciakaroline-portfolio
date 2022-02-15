import react from "react";
import "./FooterContact.css";

export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div className="section-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-3">Work Inquiry</h2>
              <p>
                Are you interested? Let's work together and I'll help you by all
                my best
              </p>
            </div>
            <div className="col-lg-6 mt-4 text-center">
              <a href="/" className="btn btn-branding-outline">
                Contact me here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
