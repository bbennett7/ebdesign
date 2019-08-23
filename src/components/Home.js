import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Pool from '../images/chadwick/Pool.jpg';
import Gym from '../images/vicino/Gym.jpg';
import Exterior from '../images/harborview/Exterior.jpg';
import GameRoom from '../images/rockwood/Pool-table.jpg';
import LeasingOffice from '../images/vicino/Center-area.jpg';
import OutdoorLounge from '../images/chadwick/Fireplace.png';
import Pool2 from '../images/vicino/Chaise-lounges.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel className="Home-carousel">
          <Carousel.Item>
            <img
              className="Home-carousel-image one"
              src={Pool}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image one"
              src={Gym}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image one"
              src={Exterior}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image four"
              src={LeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image five"
              src={OutdoorLounge}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image six"
              src={Pool2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Home-carousel-image seven"
              src={GameRoom}
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
