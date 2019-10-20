import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeBBQ from '../images/bayridge/BBQ.jpg';
import ChadwickBBQ from '../images/chadwick/BBQs.jpg';
import LexBBQ from '../images/lexington/BBQs.jpg';
import P5BBQ from '../images/parc5/Grill-area.jpg';

export default class Barbecue extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Barbecue</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LexBBQ}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgeBBQ}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChadwickBBQ}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={P5BBQ}
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