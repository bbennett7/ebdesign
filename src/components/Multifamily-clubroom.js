import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import PortreroLeasingOffice2 from '../images/portrero/Leasing-office2.jpg';
import SherwoodCrossing from '../images/sherwood-crossing/SC3.jpg';

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
                src={PortreroLeasingOffice2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/ZGvYQnj/Leasing-office.jpg" alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/dsZ2HQr/TV-seating.jpg" alt="TV-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/z6cWprb/Common-area.jpg" alt="Common-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="Carousel-image"
                src={SherwoodCrossing}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
