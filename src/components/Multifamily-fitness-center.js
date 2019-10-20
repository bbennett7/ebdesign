import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import CGym from '../images/corsica/Gym.jpg';
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
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VTreadmills}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/d61wC7v/Fitness-center.jpg" alt="Fitness-center" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CGym}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RFitnessCenter}
                alt=""
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    )
  }
}
