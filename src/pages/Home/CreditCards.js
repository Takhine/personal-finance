import React from 'react';
import { Row, Col, Button } from "antd";
import creditImage from 'static/images/credit-image.svg';

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
          <h2 className="card-heading">Section Heading</h2>
          <p className="card-description">
            Get personal loan, credit card loan, business loan facilities, even
            at the nick of time in UAE. Your financial needs will be met once
            you get in touch with us. Money in gulf. (United Arab Emirates).
          </p>
          <p className="card-description">
            Get personal loan, credit card loan, business loan facilities, even
            at the nick of time in UAE. Your financial needs will be met once
            you get in touch with us. Money in gulf. (United Arab Emirates).
          </p>
          <div className="button-container">
          <Button className="enquiry-button">
          Apply Now
          </Button>
          </div>
        </Col>
    
        </Row>
        </div>
    )
}
