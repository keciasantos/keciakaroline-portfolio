import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

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
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="user_name"></input>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email"></input>
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message"></textarea>
          <input
            type="submit"
            name="submit"
            value="Send"
            className="formBtn"
          ></input>
        </div>
        {/* <div class="g-recaptcha" data-sitekey="your_site_key"></div>
        <br /> */}
      </form>
    </div>
  );
}
