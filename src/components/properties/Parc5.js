import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Exterior from '../../images/parc5/Exterior.jpg';
import GameBoard from '../../images/parc5/Game-board.jpg';
import GrillArea from '../../images/parc5/Grill-area.jpg';
import LeasingOffice from '../../images/parc5/Leasing-office.jpg';
import PoolArea from '../../images/parc5/Pool-area.jpg';
import PoolLounge from '../../images/parc5/Pool-lounge.jpg';
import PoolTray from '../../images/parc5/Pool-tray.jpg';
import TVArea from '../../images/parc5/TV-area.jpg';
import TVSeating from '../../images/parc5/TV-seating.jpg';
import TV from '../../images/parc5/TV.jpg';


export default class Parc5 extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Parc @ 5</h4>
          <Carousel interval="null" className="Carousel">
            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Exterior}
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
                src={TVArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TVSeating}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={TV}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={GameBoard}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={GrillArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolArea}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolLounge}
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PoolTray}
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
