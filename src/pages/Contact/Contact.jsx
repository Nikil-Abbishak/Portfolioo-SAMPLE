import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>nikilabbishake@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+94 777 541 612</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Sri Lanka</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form" action="mailto:nikilabbishake@gmail.com" method="POST" encType="text/plain">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;
