import React from "react";
import { Row, Col, Button } from "antd";
import creditImage from "static/images/credit-image.svg";

export default function CreditCard() {
  return (
    <div className="credit-card">
      <Row gutter={16}>
        <Col xs={24} md={10}>
          <div className="card-image-container">
            <img
              className="card-image"
              src={creditImage}
              alt="Credit Cards with Personal Finance Gulf"
            />
          </div>
        </Col>
        <Col xs={24} md={14}>
          <h2 className="card-heading">Credit Card</h2>
          <p className="card-description">
            Get your credit card at the best rates without any hassle. Premium
            banks associated. Instant Approval with Immediate Balance Transfer
            facilities.
          </p>
          <div className="button-container">
            <Button className="enquiry-button">Apply Now</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
