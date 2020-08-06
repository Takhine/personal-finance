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
    dark: false,
  },
  {
    id: 2,
    img: personalLoan,
    name: "Personal Loan",
    dark: true,
  },
  {
    id: 3,
    img: homeLoan,
    name: "Home Loan",
    dark: false,
  },
  {
    id: 4,
    img: autoLoan,
    name: "Auto-Loan",
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
                service.dark
                  ? { backgroundColor: "#FF441C" }
                  : { backgroundColor: "#FFFFFF" }
              }
              className={`service-card ${service.dark? 'darkCard':'lightCard'}`}
            >
              <img
                className="service-img"
                src={service.img}
                alt={service.name}
              />
              <h3
                style={
                  service.dark ? { color: "#FFFFFF" } : { color: "#554860" }
                }
              className={`service-name ${service.dark? 'darkName':'lightName'}`}

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
