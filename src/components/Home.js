import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import GameRoom from '../images/rockwood/Pool-table.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel className="Home-carousel">
        <Carousel.Item>
            <img className="Carousel-image" id="Home-five" src="https://i.ibb.co/3W7brXn/Fireplace.png" alt="Fireplace" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Carousel-image" src="https://i.ibb.co/m95ngMg/Center-area.jpg" alt="Center-area" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Carousel-image" src="https://i.ibb.co/n1jKfhB/Gym.jpg" alt="Gym" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Carousel-image" src="https://i.ibb.co/6FkP9bH/Chaise-lounges.jpg" alt="Chaise-lounges" border="0" />
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
