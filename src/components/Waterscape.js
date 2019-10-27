import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import W1 from '../images/waterscape/Waterscape1.jpg';
import W2 from '../images/waterscape/Waterscape2.jpg';
import W3 from '../images/waterscape/Waterscape3.jpg';
import W4 from '../images/waterscape/Waterscape4.jpg';

export default class Waterscape extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Waterscape</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={W3}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={W4}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={W2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={W1}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
