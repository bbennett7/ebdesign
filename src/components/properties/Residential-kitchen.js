import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import LevineKitchen from '../../images/levine/Kitchen.jpg';
import LevineKitchenIsland from '../../images/levine/KitchenIsland.jpg';
import Fountain from '../../images/ohebshalom/Fountain.jpg';
import LivingRoom from '../../images/ohebshalom/LivingRoom.jpg';
import OutdoorSeating from '../../images/ohebshalom/OutdoorSeating.jpg';

export default class Kitchen extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Kitchen</h4>
        <Carousel interval="null" className="Carousel">
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LevineKitchen}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LevineKitchenIsland}
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
