import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Vicino2 from '../images/vicino/Vicino2.jpg';
import CGym from '../images/corsica/Gym.jpg';
import RFitnessCenter from '../images/rockwood/Fitness-center.jpg';
import Vicino13 from '../images/vicino/Vicino13.jpg';
import Harborview4 from '../images/harborview/Harborview4.jpg';
import TH3 from '../images/townhomes/TH3.JPG';

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
              <img className="Carousel-image" src={Vicino13} alt="Treadmills" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview4} alt="Fitness-center" border="0" />
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

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TH3}
                alt=""
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    )
  }
}
