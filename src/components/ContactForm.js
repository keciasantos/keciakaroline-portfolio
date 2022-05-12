import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_dls8dul",
        "template_bcc0l0w",
        form.current,
        "TJN42Gc7yk7Gk6-RG"
      )
      .then(
        ({ status }) => {
          // show sucess message
          alert("Thank you for your contact! I will reply as soon as possible");
        },
        () => {
          // show error message
          alert("Please verify that you are a human.");
        }
      );
  };

  return (
    <div className="Contact" id="contact">
      <div className="container-fluid ContactForm">
        <form ref={form} onSubmit={handleSubmit}>
          <h1>CONTACT</h1>
          <h4>
            Feel free to complete the contact form below and I will get back to
            you as soon as possible
          </h4>

          <div>
            <label>Name:</label>
            <br />
            <input type="text" name="user_name"></input>
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input type="email" name="user_email"></input>
          </div>
          <div>
            <label>Message:</label>
            <br />
            <textarea name="message"></textarea>
            <ReCAPTCHA
              className="recaptcha"
              sitekey="6LdT7jEfAAAAADT0pLJvphtSaR_NkbClcN3I__NO"
              onChange={handleSubmit}
            />
            <button
              type="submit"
              name="submit"
              value="Send"
              className="form-btn btn-branding"
              onSubmit={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
