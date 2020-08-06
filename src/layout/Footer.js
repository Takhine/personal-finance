import React from "react";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <Row gutter={8} className="footer-row">
        <Col xs={24} sm={12} md={8} lg={6} className="footer-col">
        <h4>Quick Links</h4>
          <ul className="footer-list">
            <li>
              <NavLink exact to="/">
                <p className="link">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                <p className="link">Contact</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/privacy-policy">
                <p className="link">Privacy Policy</p>
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} className="footer-col">
        <h4>Banking Resources</h4>
          <ul className="footer-list">
            <li>
              <NavLink exact to="/services">
                <p className="link">Credit Cards</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Personal Loan</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Home Mortgage</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Auto Loan</p>
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={12} lg={6} className="footer-col">
          <h3 className="contact-header">Contact us </h3>
          <ul className="footer-list">
            <li>
              <a className="contact" href="mailto: mona@bodypolitic.info">
                mona@bodypolitic.info
              </a>
            </li>
            <li>
              <a className="contact" href="tel:(347) 709-0030">
                (347) 709-0030
              </a>
            </li>
            <li>
              <a
                className="contact"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/R5ucU9V8ZgYfkd9H7"
              >
                186 Montague St, Ground Floor through Lobby Brooklyn, NY 11201
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
