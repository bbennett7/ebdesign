import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Chadwick1 from '../images/chadwick/Chadwick1.png';
import Chadwick2 from '../images/chadwick/Chadwick2.jpg';
import Chadwick3 from '../images/chadwick/Chadwick3.png';
import Chadwick4 from '../images/chadwick/Chadwick4.jpg';
import Chadwick5 from '../images/chadwick/Chadwick5.jpg';
import Chadwick6 from '../images/chadwick/Chadwick6.jpg';

export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>The Chadwick</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick3} alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick1} alt="Fireplace" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick4} alt="Seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick5} alt="BBQs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick2} alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick6} alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/tDqNPXH/Game-room.jpg" alt="Game-room" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
