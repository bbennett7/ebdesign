import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Kitchen from '../../images/levine/Kitchen.jpg';
import KitchenIsland from '../../images/levine/KitchenIsland.jpg';
import LivingRoom from '../../images/levine/LivingRoom.jpg';

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

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Kitchen}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={KitchenIsland}
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
