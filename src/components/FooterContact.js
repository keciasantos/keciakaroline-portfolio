import react from "react";
import "./FooterContact.css";

export default function FooterContact() {
  return (
    <div className="FooterContact">
      <div class="section-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="mb-3">Work Inquiry</h2>
              <p>
                Are you interested? Let's work together and I'll help you by all
                my best
              </p>
            </div>
            <div class="col-lg-6 mt-4 text-center">
              <a href="/" class="btn btn-branding-outline">
                Contact me here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
