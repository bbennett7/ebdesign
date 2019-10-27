import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import DR1 from '../images/residential-dining-room/DR1.jpg';
import DR2 from '../images/residential-dining-room/DR2.JPG';

export default class DiningRoom extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Backyard</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={DR1}
                alt="First backyard"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={DR2}
                alt="Fourth backyard"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
