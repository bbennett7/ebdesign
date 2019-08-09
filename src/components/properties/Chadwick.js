import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import LivingRoom1 from '../../images/chadwick/LivingRoom1.jpg';
import LivingRoom2 from '../../images/chadwick/LivingRoom2.jpg';

export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property">
        <h5>The Chadwick</h5>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={LivingRoom1}
            alt="First slide of a living room"
          />
          <Carousel.Caption>
            <p>Living Room</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={LivingRoom2}
            alt="Second slide of living room"
          />
          <Carousel.Caption>
            <p>Living room number 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
