import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import CGym from '../images/corsica/Gym.jpg';
import HarborGym from '../images/harborview/Fitness-center.jpg';
import RFitnessCenter from '../images/rockwood/Fitness-center.jpg';
import VGym from '../images/vicino/Gym.jpg';
import VTreadmills from '../images/vicino/Treadmills.jpg';

export default class FitnessCenter extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Fitness Center</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VGym}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VTreadmills}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={HarborGym}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CGym}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RFitnessCenter}
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
