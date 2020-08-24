import React from "react";
import { Row, Col, Button } from "antd";
import { NavLink } from "react-router-dom";

import rootsImage from "static/images/roots-image.jpg";
export default function Quote() {
  return (
    <div className="quote">
      <Row gutter={12}>
        <Col xs={24} md={14}>
          <h2 className="quote-heading">Process and How we can help</h2>
          <p className="quote-description">
            Personal Finance Gulf is here for all your personal mortgage, credit
            card mortgage, auto-mortgage and home-mortgage requirements. We are
            associated with reputed banks and organizations who work along with
            us to provide you with quick finance at the best rate.
          </p>
          <p className="quote-description">
            Experience easier than ever Credit Card, Personal mortgage, Home
            Mortgage and Auto-Mortgage facilities with us and we will help you meet
            your financial needs and goals. Get in touch with us.
          </p>
          <div className="button-container">
            <NavLink exact to="/contact-us" activeClassName="selected">

              <Button className="enquiry-button">Enquire Now</Button>
            </NavLink>
          </div>
        </Col>
        <Col xs={24} md={10}>
          <div className="quote-image-container">
            <img
              className="quote-image"
              src={rootsImage}
              alt="Personal Mortgages with Personal Finance Gulf"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
