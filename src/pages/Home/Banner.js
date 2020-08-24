import React from "react";
import { Row, Col, Button, Carousel } from "antd";
import TextLoop from "react-text-loop";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

import slide1 from "static/images/slider/slide1.jpg";
import slide2 from "static/images/slider/slide2.jpg";
import slide3 from "static/images/slider/slide3.jpg";
import slide4 from "static/images/slider/slide4.jpg";

export default function Banner() {
  return (
    <div className="home-banner">
      <Row>
        <Col xs={24} md={12}>
          <div className="banner-content">
            <h2 className="main-heading">
              Apply for
              <TextLoop interval={2940} adjustingSpeed={120}>
                <span className="service"> Personal Mortgage</span>
                <span className="service"> Home Mortgage</span>
                <span className="service"> Auto Mortgage</span>
                <span className="service"> Credit Cards</span>
              </TextLoop>{" "}
            </h2>
            <div className="buttons-container">
              <NavLink exact to="/contact-us" activeClassName="selected">

                <Button className="apply">Apply Now</Button>
              </NavLink>
              <Link
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
              >
                <Button className="learn">Learn More</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Carousel
            dots={false}
            className="image-carousel"
            autoplay
            effect="fade"
            pauseOnHover={false}
            pauseOnFocus={false}
          >
            <div className="image-container">
              <img src={slide1} alt="Personal Mortgage" />
            </div>
            <div className="image-container">
              <img src={slide2} alt="Home Mortgage" />
            </div>
            <div className="image-container">
              <img src={slide3} alt="Auto Mortgage" />
            </div>
            <div className="image-container">
              <img src={slide4} alt="Credit Cards" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
