import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Parc5 extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Parc @ 5</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/wY7zhMN/Exterior.jpg" alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/ZGvYQnj/Leasing-office.jpg" alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/dmqDRYY/Game-board.jpg" alt="Game-board" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/c3138bB/Grill-area.jpg" alt="Grill-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/5v7drKF/Pool-area.jpg" alt="Pool-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/TPh7cYF/Pool-lounge.jpg" alt="Pool-lounge" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
