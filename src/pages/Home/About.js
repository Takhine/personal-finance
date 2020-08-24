import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <h2 className="about-heading" name="about-us">About Us</h2>
      <p className="about-description">
        Personal Finance Gulf is a premium credit and financing organization
        specially built together by banking bigwigs of the United Arab Emirates
        Personal Finance Gulf has been working as a financial support system to
        a lot of people for years now! Our financial organization has earned the
        trust of thousands of people by providing them with all the monetary
        assistance that they needed.
      </p>
      <p className="about-description">
        Personal Finance Gulf not only gets the funds processed by notable
        institutions but also takes care of the procedure and paper-work, so the
        clients don’t have to get into the hassle at any point in the process.
        We provide a variety of services including Personal mortgage, Credit Cards,
        Auto Mortgage and Mortgage with processes that can disburse your required
        finance in hours!
      </p>
      <p className="about-description">
        We maintain absolute secrecy and value the time and commitment made by
        the client. We guarantee a seamless experience and a long-term
        association to all our clients.
      </p>
      <NavLink exact to="/contact-us"><p className="contact-link">You Can Get In Touch With Our Representative here</p></NavLink>
    </div>
  );
}
