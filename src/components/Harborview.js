import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Harborview extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Harborview</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/PN92nmv/Exterior.jpg" alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/Tm4JF1c/Leasing-office.jpg" alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/4P9yLBd/Leasing-office2.jpg" alt="Leasing-office2" border="0" />
            </Carousel.Item>

              <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/d61wC7v/Fitness-center.jpg" alt="Fitness-center" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/VmMT0fZ/Pool.jpg" alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/c3S5qCh/Barbecue.jpg" alt="Barbecue" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
