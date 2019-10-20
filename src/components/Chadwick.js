import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BBQs from '../images/chadwick/BBQs.jpg';
import Pool from '../images/chadwick/Pool.jpg';
import Seating from '../images/chadwick/Seating.jpg';
import Fireplace from '../images/chadwick/Fireplace.png';
import GameRoom from '../images/chadwick/Game-room.jpg';
import LeasingOffice from '../images/chadwick/Leasing-office.jpg';
import PoolSeating from '../images/chadwick/Pool-seating.png';

export default class Chadwick extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>The Chadwick</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolSeating}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Fireplace}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Seating}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BBQs}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Pool}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LeasingOffice}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={GameRoom}
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
