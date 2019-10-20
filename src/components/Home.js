import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Gym from '../images/vicino/Gym.jpg';
import GameRoom from '../images/rockwood/Pool-table.jpg';
import LeasingOffice from '../images/vicino/Center-area.jpg';
import Pool2 from '../images/vicino/Chaise-lounges.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel className="Home-carousel">
        <Carousel.Item>
            <img className="Carousel-image" id="Home-five" src="https://i.ibb.co/3W7brXn/Fireplace.png" alt="Fireplace" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              id="Home-four"
              src={LeasingOffice}
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              id="Home-one"
              src={Gym}
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              id="Home-six"
              src={Pool2}
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Carousel-image" id="Home-one" src="https://i.ibb.co/x7f1251/Pool.jpg" alt="Pool" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image"
              id="Home-seven"
              src={GameRoom}
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Carousel-image" src="https://i.ibb.co/PN92nmv/Exterior.jpg" alt="Exterior" border="0" />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
