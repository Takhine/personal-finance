import React from "react";
import { Row, Col, Button } from "antd";
import rootsImage from 'static/images/roots-image.png';
export default function Quote() {
  return (
    <div className="quote">
      <Row gutter={12}>
        <Col xs={24} md={14}>
          <h2 className="quote-heading">Section Heading</h2>
          <p className="quote-description">
            Get personal loan, credit card loan, business loan facilities, even
            at the nick of time in UAE. Your financial needs will be met once
            you get in touch with us. Money in gulf. (United Arab Emirates).
          </p>
          <p className="quote-description">
            Get personal loan, credit card loan, business loan facilities, even
            at the nick of time in UAE. Your financial needs will be met once
            you get in touch with us. Money in gulf. (United Arab Emirates).
          </p>
          <div className="button-container">
          <Button className="enquiry-button">
          Enquire Now
          </Button>
          </div>
        </Col>
        <Col xs={24} md={10}>
          <div className="quote-image-container">
            <img
              className="quote-image"
              src={rootsImage}
              alt="Personal Loans with Personal Finance Gulf"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
