import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BBQs from '../images/lexington/BBQs.jpg';
import Entrance from '../images/lexington/Entrance.jpg';
import LeasingInterior from '../images/lexington/Leasing-interior.jpg';
import LeasingOffice from '../images/lexington/Leasing-office.jpg';
import MainExterior from '../images/lexington/Main-exterior.jpg';

export default class Lexington extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>The Lexington</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Entrance}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingInterior}
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
                src={BBQs}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={MainExterior}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
