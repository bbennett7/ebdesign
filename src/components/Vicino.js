import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Vicino1 from '../images/vicino/Vicino1.jpg';
import Vicino2 from '../images/vicino/Vicino2.jpg';
import Vicino3 from '../images/vicino/Vicino3.jpg';

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
                <img className="Carousel-image" src={Vicino1} alt="Center-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/bF9CzZc/Lounge-area.jpg" alt="Lounge-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src="https://i.ibb.co/sPvr2Xc/Table.jpg" alt="Table" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino2} alt="Gym" border="0" />
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
                <img className="Carousel-image" src={Vicino3} alt="Chaise-lounges" border="0" />
              </Carousel.Item>
            </Carousel>
        </div>
      </div>
    )
  }
}
