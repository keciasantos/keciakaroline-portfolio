import React, { useRef, useReducer, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const state = {
    name: "",
    email: "",
    message: "",
  };

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const {name, email, message}

    emailjs
      .sendForm(
        "service_dls8dul",
        "template_bcc0l0w",
        form.current,
        "TJN42Gc7yk7Gk6-RG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thank you for your contact! I will reply as soon as possible");
  };

  return (
    <div className="ContactForm">
      <form ref={form} onSubmit={handleSubmit}>
        <h2>
          Contact Me!{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="contact-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </h2>
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
            sitekey="6LdT7jEfAAAAADT0pLJvphtSaR_NkbClcN3I__NO"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifiedRecaptcha}
          />

          <button
            type="submit"
            name="submit"
            value="Send"
            className="form-btn btn-branding"
          >
            Send
          </button>
        </div>
        {/* <div
          class="g-recaptcha"
          data-sitekey="6LdT7jEfAAAAADT0pLJvphtSaR_NkbClcN3I__NO"
        ></div> */}
        <br />
      </form>
    </div>
  );
}

// className="form-btn btn-branding"
