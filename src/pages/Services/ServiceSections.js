import React from "react";
import { Row, Col, Button } from "antd";

export default function ServicesSection() {
  return (
    <div className="services-section">
      <div className="service">
        <Row gutter={12}>
          <Col xs={24} md={12}>
            <h3 className="service-name">Credit Cards</h3>
            <p className="service-description">
              Get personal loan, credit card loan, business loan facilities,
              even at the nick of time in UAE. Your financial needs will be met
              once you get in touch with us. Money in gulf. (United Arab
              Emirates).
            </p>
          </Col>
          <Col xs={24} md={12}></Col>
        </Row>
      </div>
      <div className="service withBackground">
        <Row gutter={12}>
          <Col xs={24} md={12}></Col>
          <Col xs={24} md={12}>
            <h3 className="service-name white">Personal Loans</h3>
            <p className="service-description white">
              Get personal loan, credit card loan, business loan facilities,
              even at the nick of time in UAE. Your financial needs will be met
              once you get in touch with us. Money in gulf. (United Arab
              Emirates).
            </p>
          </Col>
        </Row>
      </div>
      <div className="service">
        <Row gutter={12}>
          <Col xs={24} md={12}>
            <h3 className="service-name">Home Loans</h3>
            <p className="service-description">
              Get personal loan, credit card loan, business loan facilities,
              even at the nick of time in UAE. Your financial needs will be met
              once you get in touch with us. Money in gulf. (United Arab
              Emirates).
            </p>
          </Col>
          <Col xs={24} md={12}></Col>
        </Row>
      </div>
      <div className="service withBackground">
        <Row gutter={12}>
          <Col xs={24} md={12}></Col>
          <Col xs={24} md={12}>
            <h3 className="service-name white">Auto Loans</h3>
            <p className="service-description white">
              Get personal loan, credit card loan, business loan facilities,
              even at the nick of time in UAE. Your financial needs will be met
              once you get in touch with us. Money in gulf. (United Arab
              Emirates).
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
