import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Vicino extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Vicino</h4>
            <Carousel className="Carousel">
              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/HH27HSS/Leasing-office-exterior.jpg" alt="Leasing-office-exterior" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/qgCgqtP/Leasing-office-interior.jpg" alt="Leasing-office-interior" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/m95ngMg/Center-area.jpg" alt="Center-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/bF9CzZc/Lounge-area.jpg" alt="Lounge-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/sPvr2Xc/Table.jpg" alt="Table" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/n1jKfhB/Gym.jpg" alt="Gym" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/Fh1dBkN/Treadmills.jpg" alt="Treadmills" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/PNNf6xk/Firepit.jpg" alt="Firepit" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/8694bYk/Outdoor-TV.jpg" alt="Outdoor-TV" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/3SgbvXd/Pool.jpg" alt="Pool" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/HzvKZhn/Pool-seating.jpg" alt="Pool-seating" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/6FkP9bH/Chaise-lounges.jpg" alt="Chaise-lounges" border="0" />
              </Carousel.Item>
            </Carousel>
        </div>
      </div>
    )
  }
}
