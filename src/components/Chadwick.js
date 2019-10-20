import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import BBQs from '../images/chadwick/BBQs.jpg';
// import Pool from '../images/chadwick/Pool.jpg';
// import Seating from '../images/chadwick/Seating.jpg';
// import Fireplace from '../images/chadwick/Fireplace.png';
// import GameRoom from '../images/chadwick/Game-room.jpg';
// import LeasingOffice from '../images/chadwick/Leasing-office.jpg';
// import PoolSeating from '../images/chadwick/Pool-seating.png';


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
              <img className="Carousel-image" src="https://i.ibb.co/3W7brXn/Fireplace.png" alt="Fireplace" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/tP5zDpY/Seating.jpg" alt="Seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/8rVKz1J/BBQs.jpg" alt="BBQs" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/x7f1251/Pool.jpg" alt="Pool" border="0" />
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
