import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Harborview1 from '../images/harborview/Harborview1.jpg';
import Harborview2 from '../images/harborview/Harborview2.jpg';
import Harborview3 from '../images/harborview/Harborview3.jpg';
import Harborview4 from '../images/harborview/Harborview4.jpg';
import Harborview5 from '../images/harborview/Harborview5.jpg';

export default class Harborview extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Harborview</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Harborview1} alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview2} alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview3} alt="Leasing-office2" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview4} alt="Fitness-center" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview5} alt="Pool" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
