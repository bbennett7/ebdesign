import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import LR1 from '../images/residential-living-room/LR1.jpg';
import LR2 from '../images/residential-living-room/LR2.jpg';
import LR3 from '../images/residential-living-room/LR3.jpg';
import LR4 from '../images/residential-living-room/LR4.jpg';

export default class LivingRoom extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Living Room</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LR1}
                alt="First living room"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LR2}
                alt="Second living room"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LR3}
                alt="Third living room"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LR4}
                alt="Fourth living room"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
