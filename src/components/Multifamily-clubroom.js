import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BayshoreLeasingOffice1 from '../images/bayshore/Common-area.jpg';
import P5LeasingOffice from '../images/parc5/Leasing-office.jpg';
import P5LeasingOffice2 from '../images/parc5/TV-seating.jpg';
import ProtreroLeasingOffice2 from '../images/protrero/Leasing-office2.jpg';

export default class ClubRoom extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Club Room</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ProtreroLeasingOffice2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5LeasingOffice}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5LeasingOffice2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayshoreLeasingOffice1}
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
