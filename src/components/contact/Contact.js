import React from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "../../utils/Snackbar";
const Contact = () => {
  const form = useRef();
  // let n = useRef();
  // let e = useRef();
  // let m = useRef();
  const [status, setStatus] = useState("");
  // let message, type1;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gl6w7h",
        "template_3czl1dm",
        form.current,
        "user_QOMcm4HcTS1T2uPVJEbqc"
      )
      .then(
        (result) => {
          console.log(result.text);

          setStatus({ message: "Message Sent Successfully" });
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(setStatus, 5000);
    e.target.reset();
  };

  // const SnackbarType = {
  //   success: "success",
  //   fail: "fail",
  // };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <div className="contact__content">Let's Talk</div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {status && <Snackbar message={status.message} />}
        </form>
      </div>
    </section>
  );
};

export default Contact;
