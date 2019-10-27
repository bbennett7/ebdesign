import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import LeasingOffice3 from '../images/portrero/IMG_4215.JPG';
import LeasingOffice from '../images/portrero/Leasing-office.jpg';
import LeasingOffice2 from '../images/portrero/Leasing-office2.jpg';

export default class Portrero extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Portrero</h4>
          <Carousel className="Carousel">
          <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingOffice3}
                alt=""
              />
            </Carousel.Item>
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
                src={LeasingOffice2}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
