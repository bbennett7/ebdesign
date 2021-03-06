import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import RockwoodGR1 from '../images/rockwood/Pool-table.jpg';
import RockwoodGR2 from '../images/rockwood/Game-room.jpg';
import Chadwick7 from '../images/chadwick/Chadwick7.jpg';


export default class GameRoom extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Game Room</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockwoodGR1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockwoodGR2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick7} alt="Game-room" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
