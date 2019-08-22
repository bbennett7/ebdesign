import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import P5Exterior from '../../images/parc5/Exterior.jpg';
import LexEntrance from '../../images/lexington/Entrance.jpg';
import LexExterior from '../../images/lexington/Exterior-building.jpg';
import LexMainExterior from '../../images/lexington/Main-exterior.jpg';
import VExterior from '../../images/vicino/Leasing-office-exterior.jpg';

export default class Exterior extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Exterior</h4>
        <Carousel interval="null" className="Carousel">
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={P5Exterior}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={VExterior}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LexEntrance}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LexMainExterior}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LexExterior}
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
