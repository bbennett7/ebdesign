import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeODL from '../images/bayridge/Common-area.jpg';
import RockODL from '../images/rockwood/Outdoor-lounge.jpg';
import RockODL2 from '../images/rockwood/Pool-seating.jpg';
import Chadwick1 from '../images/chadwick/Chadwick1.png';
import Chadwick3 from '../images/chadwick/Chadwick3.png';
import Vicino8 from '../images/vicino/Vicino8.jpg';
import Vicino9 from '../images/vicino/Vicino9.jpg';
import Parc56 from '../images/parc5/Parc5-6.jpg';

export default class OutdoorLounge extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Outdoor Lounge</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick1} alt="Fireplace" border="0" />
            </Carousel.Item>
            
            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick3} alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino8} alt="Firepit" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino9} alt="Outdoor-TV" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgeODL}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc56} alt="Pool-lounge" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
