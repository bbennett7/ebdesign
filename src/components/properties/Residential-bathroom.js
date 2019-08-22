import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import B1 from '../../images/residential-bathroom/B1.jpg';
import B2 from '../../images/residential-bathroom/B2.jpg';

export default class Bathroom extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Bathroom</h4>
        <Carousel interval="null" className="Carousel">
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={B1}
              alt="Second Kitchen"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={B2}
              alt="Second Kitchen"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
