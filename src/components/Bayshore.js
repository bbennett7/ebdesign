import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Bayshore1 from '../images/bayshore/Bayshore1.jpg';
import Bayshore2 from '../images/bayshore/Bayshore2.jpg';
import Bayshore3 from '../images/bayshore/Bayshore3.jpg';
import Bayshore4 from '../images/bayshore/Bayshore4.jpg';
import Bayshore5 from '../images/bayshore/Bayshore5.jpg';

export default class Bayshore extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Bayshore</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Bayshore1} alt="Common-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Bayshore2} alt="Kitchen" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Bayshore3} alt="Chairs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Bayshore4} alt="Bench" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Bayshore5} alt="Desk" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
