import React from "react";
import { Row, Col, Divider } from "antd";
import { NavLink } from "react-router-dom";
import footerBackground from 'static/images/footer/footer-background.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-image" src={footerBackground} alt="Personal Finance Gulf" />
      <Row gutter={8} className="footer-row">
        <Col xs={24} sm={12} lg={9} className="footer-col">
          <h4 className="list-header">Quick Links</h4>
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
              <NavLink exact to="/contact-us">
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
        <Col xs={24} sm={12} lg={9} className="footer-col">
          <h4 className="list-header">Banking Resources</h4>
          <ul className="footer-list">
            <li>
              <NavLink exact to="/services">
                <p className="link">Credit Cards</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Personal Mortgage</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Home Mortgage</p>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/services">
                <p className="link">Auto Mortgage</p>
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col xs={24} lg={6} className="footer-col">
          <h3 className="list-header">Contact us </h3>
          <ul className="footer-list">
            <li>
              <a className="contact" href="mailto: admin@personalfinancegulf.com">
                admin@personalfinancegulf.com
              </a>
            </li>
            <li>
              <a className="contact" href="tel:+971557782895">
                +97 1557782895
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider style={{ borderColor: 'white' }} />
      <div>
        <p className="copyright">
          ©2020 personalfinancegulf.com The information given by Personal Finance Gulf on bank mortgage rates/information is on the best result of our effort. As the interest rates and terms are dynamic, the information given on personalfinancegulf.com is for information purposes only and does not offer advice. Please confirm always with the banks/financial providers directly before committing yourselves. Our organization is not responsible for any contract/service you get through such Banks/Financial Institutions/Agents.
      </p>
      </div>
    </div>
  );
};

export default Footer;
