import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Parc51 from '../images/parc5/Parc5-1.jpg';
import Parc52 from '../images/parc5/Parc5-2.jpg';
import Parc53 from '../images/parc5/Parc5-3.jpg';
import Parc54 from '../images/parc5/Parc5-4.jpg';
import Parc55 from '../images/parc5/Parc5-5.jpg';
import Parc56 from '../images/parc5/Parc5-6.jpg';

export default class Parc5 extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Parc @ 5</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Parc51} alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc52} alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc53} alt="Game-board" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc54} alt="Grill-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc55} alt="Pool-area" border="0" />
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
