import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import LivingRoom from '../../images/jim/Living-room.jpg';

export default class Levine extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Levine</h4>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={LivingRoom}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
