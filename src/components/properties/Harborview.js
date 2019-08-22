import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Barbecue from '../../images/harborview/Barbecue.jpg';
import Exterior from '../../images/harborview/Exterior.jpg';
import FitnessCenter from '../../images/harborview/Fitness-center.jpg';
import LeasingOffice from '../../images/harborview/Leasing-office.jpg';
import LeasingOffice2 from '../../images/harborview/Leasing-office2.jpg';
import Pool from '../../images/harborview/Pool1.jpg';

export default class Harborview extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Harborview</h4>
        <Carousel interval="null" className="Carousel">
          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Exterior}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LeasingOffice2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={FitnessCenter}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Pool}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={Barbecue}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
