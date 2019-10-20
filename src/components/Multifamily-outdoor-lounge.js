import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeODL from '../images/bayridge/Common-area.jpg';
import ChadwickODL from '../images/chadwick/Fireplace.png';
import ChadwickODL1 from '../images/chadwick/Pool-seating.png';
import P5ODL from '../images/parc5/Pool-lounge.jpg';
import RockODL from '../images/rockwood/Outdoor-lounge.jpg';
import RockODL2 from '../images/rockwood/Pool-seating.jpg';
import VicODL from '../images/vicino/Firepit.jpg';
import VicODL2 from '../images/vicino/Outdoor-TV.jpg';



export default class OutdoorLounge extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Outdoor Lounge</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChadwickODL}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChadwickODL1}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicODL}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicODL2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgeODL}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5ODL}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
