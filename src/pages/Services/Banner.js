import React from "react";
import { Row, Col, Button, Carousel } from "antd";
import orangeButton from 'static/images/icons/orange-arrow-button.svg';
import whiteButton from 'static/images/icons/white-arrow-button.svg';


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
        <div className="shortcut">
          <img className="shortcut-image" src={orangeButton} alt="orange button" />
          <span className="shortcut-name">Credit Cards</span>
        </div>
        <div className="shortcut">
          <img className="shortcut-image" src={whiteButton} alt="orange button" />
          <span className="shortcut-name">Personal Loans</span>
        </div>
        <div className="shortcut">
          <img className="shortcut-image" src={orangeButton} alt="orange button" />
          <span className="shortcut-name">Home Mortgage</span>
        </div>
        <div className="shortcut">
          <img className="shortcut-image" src={whiteButton} alt="orange button" />
          <span className="shortcut-name">Auto-Loans</span>
        </div>
      </div>
    </div>
  );
}
