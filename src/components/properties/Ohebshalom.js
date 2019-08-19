import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Backyard from '../../images/ohebshalom/Backyard.jpg';
import Bench from '../../images/ohebshalom/Bench.jpg';
import Fountain from '../../images/ohebshalom/Fountain.jpg';
import LivingRoom from '../../images/ohebshalom/LivingRoom.jpg';
import OutdoorSeating from '../../images/ohebshalom/OutdoorSeating.jpg';

export default class Ohebshalom extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Ohebshalom</h4>
        <Carousel interval="null" className="Carousel">
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={OutdoorSeating}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Backyard}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Bench}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Fountain}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

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
