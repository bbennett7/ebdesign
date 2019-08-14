import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BBQArea from '../../images/lexington/BBQ-area.jpg';
import BBQs from '../../images/lexington/BBQs.jpg';
import Entrance from '../../images/lexington/Entrance.jpg';
import ExteriorBuilding from '../../images/lexington/Exterior-building.jpg';
import LeasingExterior from '../../images/lexington/Leasing-exterior.jpg';
import LeasingInterior from '../../images/lexington/Leasing-interior.jpg';
import MainExterior from '../../images/lexington/Main-exterior.jpg';
import Pool from '../../images/lexington/Pool.jpg';

export default class Lexington extends Component {
  render() {
    return(
      <div className="Property">
        <h4>The Lexington</h4>
        <Carousel interval="null" className="Carousel">
        <Carousel.Item>
          <img
            className="Carousel-image"
            src={BBQs}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={Entrance}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={LeasingInterior}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={LeasingExterior}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={BBQArea}
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
            src={MainExterior}
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="Carousel-image"
            src={ExteriorBuilding}
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