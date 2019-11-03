import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeBBQ from '../images/bayridge/BBQ.jpg';
import LexBBQ from '../images/lexington/BBQs.jpg';
import Chadwick5 from '../images/chadwick/Chadwick5.jpg';
import Parc54 from '../images/parc5/Parc5-4.jpg';


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
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgeBBQ}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick5} alt="BBQs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc54} alt="Grill-area" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
