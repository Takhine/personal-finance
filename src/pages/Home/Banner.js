import React from 'react';
import { Row, Col, Button, Carousel } from "antd";
import ProgressiveImage from "react-progressive-image";

export default function Banner() {
    return (
        <div className="home-banner">
        <Carousel className="image-carousel" autoplay effect="fade">
          <div className="image-container">
            1
          </div>
      </Carousel>
        </div>
    )
}
