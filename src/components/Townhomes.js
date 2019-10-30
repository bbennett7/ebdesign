import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import TH1 from '../images/townhomes/TH1.JPG';
import TH2 from '../images/townhomes/TH2.JPG';
import TH3 from '../images/townhomes/TH3.JPG';
import TH4 from '../images/townhomes/TH4.JPG';
import TH5 from '../images/townhomes/TH5.JPG';

export default class Waterleaf extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Townhomes</h4>
          <Carousel className="Carousel">
          <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH1}
                alt=""
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH4}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH3}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH5}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}