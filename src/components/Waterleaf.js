import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import LeasingOffice from '../images/rockwood/Leasing-office.jpg';

export default class Waterleaf extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Waterleaf</h4>
          <h1>ADD IMAGES</h1>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingOffice}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
