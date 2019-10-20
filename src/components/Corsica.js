import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Gym from '../images/corsica/Gym.jpg';
import LeasingOffice from '../images/corsica/Leasing-office.jpg';
import PoolArea from '../images/corsica/Pool-area.jpg';
import Pool from '../images/corsica/Pool.jpg';

export default class Corsica extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Corsica</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingOffice}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolArea}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Pool}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Gym}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
