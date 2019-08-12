import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import GameRoom from '../../images/rockwood/Game-room.jpg';
import OutdoorLounge from '../../images/rockwood/Outdoor-lounge.jpg';
import PoolTable from '../../images/rockwood/Pool-table.jpg';

export default class Rockwood extends Component {
  render() {
    return(
      <div className="Property">
        <h4>The Chadwick</h4>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={GameRoom}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={PoolTable}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={OutdoorLounge}
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
