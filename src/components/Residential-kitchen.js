import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import K1 from '../images/residential-kitchen/K1.jpg';
import K2 from '../images/residential-kitchen/K2.jpg';
import K3 from '../images/residential-kitchen/K3.jpg';
import K4 from '../images/residential-kitchen/K4.jpg';
import K5 from '../images/residential-kitchen/K5.jpg';

export default class Kitchen extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Kitchen</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={K2}
                alt="Second Kitchen"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={K3}
                alt="Third Kitchen"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={K1}
                alt="First Kitchen"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={K4}
                alt="Fourth Kitchen"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={K5}
                alt="Fifth Kitchen"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
