import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
function Contact() {
  useTitle("Contact")
  return (
    <section className="contact" id="contact">
      <h3 className="page-title">
        contact <span>us</span>
      </h3>
      <div className="content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51929.90371041403!2d45.3364555267438!3d35.56311114191952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002dd99000000f%3A0xd25fef9e431232df!2sGrand%20Millennium%20Hotel%20Sulaimani!5e0!3m2!1sen!2siq!4v1696264001271!5m2!1sen!2siq"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <div className="input-box">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="text" placeholder="name" />
          </div>
          <div className="input-box">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" placeholder="email" />
          </div>
          <div className="input-box">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input type="text" placeholder="phone" />
          </div>

          <Link to="" className="btn">
            contact now
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Contact;
