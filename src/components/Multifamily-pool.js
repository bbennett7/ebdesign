import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BayridgePool from '../../images/bayridge/Pool-area.jpg';
import ChadwickPool from '../../images/chadwick/Pool.jpg';
import CorsicaPool1 from '../../images/corsica/Pool-area.jpg';
import CorsicaPool2 from '../../images/corsica/Pool.jpg';
import HarborPool from '../../images/harborview/Pool.jpg';
import P5Pool1 from '../../images/parc5/Game-board.jpg';
import P5Pool2 from '../../images/parc5/Pool-area.jpg';
import P5Pool3 from '../../images/parc5/Pool-tray.jpg';
import RockPool from '../../images/rockwood/Pool.jpg';
import VicinoPool1 from '../../images/vicino/Chaise-lounges.jpg';
import VicinoPool2 from '../../images/vicino/Pool-seating.jpg';
import VicinoPool3 from '../../images/vicino/Pool.jpg';


export default class Pool extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Pool</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicinoPool1}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicinoPool2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicinoPool3}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={HarborPool}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgePool}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5Pool1}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5Pool2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5Pool3}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChadwickPool}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CorsicaPool1}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CorsicaPool2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockPool}
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
