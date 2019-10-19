import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import ChadwickGR from '../images/chadwick/Game-room.jpg';
import RockwoodGR1 from '../images/rockwood/Pool-table.jpg';
import RockwoodGR2 from '../images/rockwood/Game-room.jpg';


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
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockwoodGR2}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={ChadwickGR}
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
