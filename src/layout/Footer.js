import React from "react";
import { Row, Col, Divider } from "antd";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <Row gutter={8} className="footer-row">
        <Col xs={24} sm={12} md={9} className="footer-col">
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
        <Col xs={24} sm={12} md={9} className="footer-col">
        <h4 className="list-header">Banking Resources</h4>
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
        <Col xs={24} md={6} className="footer-col">
          <h3 className="list-header">Contact us </h3>
          <ul className="footer-list">
            <li>
              <a className="contact" href="mailto: admin@peronalfinancegulf.com">
                admin@peronalfinancegulf.com
              </a>
            </li>
            <li>
              <a className="contact" href="tel:(347) 709-0030">
                (347) 709-0030
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider style={{borderColor: 'white'}} />
      <div>
      <p className="copyright">
      ©2020 personalfinancegulf.com The information given by Personal Finance Gulf on bank loan rates/information is on the best result of our effort. As the interest rates and terms are dynamic, the information given on personalfinancegulf.com is for information purposes only and does not offer advice. Please confirm always with the banks/financial providers directly before committing yourselves. Our organization is not responsible for any contract/service you get through such Banks/Financial Institutions/Agents.
      </p>
      </div>
    </div>
  );
};

export default Footer;
