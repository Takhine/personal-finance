import React from "react";
import orangeButton from "static/images/icons/orange-arrow-button.svg";
import whiteButton from "static/images/icons/white-arrow-button.svg";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div className="services-banner">
      <h1 className="main-heading">
        Our <span>Services</span>
      </h1>
      <p className="services-description">
        Financial excellence starts with us
      </p>

      <div className="shortcut-container">
        <Link
          activeClass="active"
          to="credit-card"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <div className="shortcut">
            <img
              className="shortcut-image"
              src={orangeButton}
              alt="orange button"
            />
            <span className="shortcut-name">Credit Cards</span>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="personal-loan"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <div className="shortcut">
            <img
              className="shortcut-image"
              src={whiteButton}
              alt="orange button"
            />
            <span className="shortcut-name">Personal Mortgages</span>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="home-loan"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <div className="shortcut">
            <img
              className="shortcut-image"
              src={orangeButton}
              alt="orange button"
            />
            <span className="shortcut-name">Home Mortgage</span>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="auto-loan"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <div className="shortcut">
            <img
              className="shortcut-image"
              src={whiteButton}
              alt="orange button"
            />
            <span className="shortcut-name">Auto-Mortgages</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
