import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Chadwick1 from '../images/chadwick/Chadwick1.png';
import Chadwick2 from '../images/chadwick/Chadwick2.jpg';

export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>The Chadwick</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/Ph9NbVQ/Pool-seating.png" alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick1} alt="Fireplace" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/tP5zDpY/Seating.jpg" alt="Seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/8rVKz1J/BBQs.jpg" alt="BBQs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick2} alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/DkHdvYr/Leasing-office.jpg" alt="Leasing-office" border="0" />
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
