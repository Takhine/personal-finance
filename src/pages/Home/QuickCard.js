import React from "react";
import { Card, Row, Col } from "antd";

// Images
import creditCard from "static/images/services/credit-card.svg";
import homeLoan from "static/images/services/home-loan.svg";
import personalLoan from "static/images/services/personal-loan.svg";
import autoLoan from "static/images/services/auto-loan.svg";

const services = [
  {
    id: 1,
    img: creditCard,
    name: "Credit Card",
    dark: true,
  },
  {
    id: 2,
    img: personalLoan,
    name: "Personal Mortgage",
    dark: true,
  },
  {
    id: 3,
    img: homeLoan,
    name: "Home Mortgage",
    dark: true,
  },
  {
    id: 4,
    img: autoLoan,
    name: "Auto-Mortgage",
    dark: true,
  },
];
export default function QuickCard() {
  return (
    <div className="quick-cards">
      <Row gutter={12} className="cards-row">
        {services.map((service) => (
          <Col xs={12} lg={6}>
            <Card
              hoverable={false}
              bordered={false}
              style={
                { backgroundColor: "#FF441C" }
              }
              className={`service-card darkCard`}
            >
              <img
                className="service-img"
                src={service.img}
                alt={service.name}
              />
              <h3
                style={
                  { color: "#FFFFFF" }
                }
                className={`service-name darkName`}

              >
                {service.name}
              </h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
