import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import GameRoom from '../../images/rockwood/Game-room.jpg';
import OutdoorLounge from '../../images/rockwood/Outdoor-lounge.jpg';
import PoolTable from '../../images/rockwood/Pool-table.jpg';
import FitnessCenter from '../../images/rockwood/Fitness-center.jpg';
import LeasingOffice from '../../images/rockwood/Leasing-office.jpg';
import PoolSeating from '../../images/rockwood/Pool-seating.jpg';
import Pool from '../../images/rockwood/Pool.jpg';

export default class Rockwood extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Rockwood</h4>
          <Carousel className="Carousel">
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
                src={PoolSeating}
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

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolTable}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={OutdoorLounge}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={FitnessCenter}
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
          </Carousel>
        </div>
      </div>
    )
  }
}
