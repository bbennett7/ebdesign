import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeBBQ from '../images/bayridge/BBQ.jpg';
import LexBBQ from '../images/lexington/BBQs.jpg';

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
              <img className="Carousel-image" src="https://i.ibb.co/8rVKz1J/BBQs.jpg" alt="BBQs" border="0" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/c3138bB/Grill-area.jpg" alt="Grill-area" border="0" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
