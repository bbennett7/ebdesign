import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import WL1 from '../images/waterleaf/Waterleaf1.jpg';
import WL2 from '../images/waterleaf/Waterleaf2.jpg';
import WL3 from '../images/waterleaf/Waterleaf3.jpg';

export default class Waterleaf extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Waterleaf</h4>
          <Carousel className="Carousel">
          <Carousel.Item>
              <img
                className="Carousel-image"
                src={WL3}
                alt=""
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={WL1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={WL2}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
