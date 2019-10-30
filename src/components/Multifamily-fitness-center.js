import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Vicino2 from '../images/vicino/Vicino2.jpg';
import CGym from '../images/corsica/Gym.jpg';
import RFitnessCenter from '../images/rockwood/Fitness-center.jpg';

export default class FitnessCenter extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Fitness Center</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Vicino2}alt="Gym" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/Fh1dBkN/Treadmills.jpg" alt="Treadmills" border="0" />
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
