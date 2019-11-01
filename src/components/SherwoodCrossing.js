import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import SC1 from '../images/sherwood-crossing/SC1.jpg';
import SC2 from '../images/sherwood-crossing/SC2.jpg';
import SC3 from '../images/sherwood-crossing/SC3.jpg';
import SC4 from '../images/sherwood-crossing/SC4.jpg';
import SC5 from '../images/sherwood-crossing/SC5.jpg';

export default class SherwoodCrossing extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Sherwood Crossing</h4>
          <Carousel className="Carousel">
          <Carousel.Item>
              <img
                className="Carousel-image"
                src={SC4}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={SC3}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={SC5}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={SC1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={SC2}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}