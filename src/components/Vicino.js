import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Vicino1 from '../images/vicino/Vicino1.jpg';
import Vicino2 from '../images/vicino/Vicino2.jpg';
import Vicino3 from '../images/vicino/Vicino3.jpg';
import Vicino4 from '../images/vicino/Vicino4.jpg';
import Vicino5 from '../images/vicino/Vicino5.jpg';
import Vicino6 from '../images/vicino/Vicino6.jpg';
import Vicino7 from '../images/vicino/Vicino7.jpg';
import Vicino8 from '../images/vicino/Vicino8.jpg';
import Vicino9 from '../images/vicino/Vicino9.jpg';
import Vicino10 from '../images/vicino/Vicino10.jpg';
import Vicino11 from '../images/vicino/Vicino11.jpg';
import Vicino12 from '../images/vicino/Vicino12.jpg';
import Vicino13 from '../images/vicino/Vicino13.jpg';

export default class Vicino extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Vicino</h4>
            <Carousel className="Carousel">
              <Carousel.Item>
                <img className="Carousel-image" src={Vicino4} alt="Leasing-office-exterior" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino1} alt="Center-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino6} alt="Lounge-area" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino7} alt="Leasing-office-interior" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino5} alt="Leasing-office-interior" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino12} alt="Table" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino2} alt="Gym" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino13} alt="Treadmills" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino8} alt="Firepit" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino9} alt="Outdoor-TV" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino11} alt="Pool" border="0" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="Carousel-image" src={Vicino10} alt="Pool-seating" border="0" />
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
