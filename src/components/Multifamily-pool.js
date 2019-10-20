import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgePool from '../images/bayridge/Pool-area.jpg';
import CorsicaPool1 from '../images/corsica/Pool-area.jpg';
import CorsicaPool2 from '../images/corsica/Pool.jpg';
import RockPool from '../images/rockwood/Pool.jpg';


export default class Pool extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Pool</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/6FkP9bH/Chaise-lounges.jpg" alt="Chaise-lounges" border="0 " />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/HzvKZhn/Pool-seating.jpg" alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/3SgbvXd/Pool.jpg" alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/VmMT0fZ/Pool.jpg" alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgePool}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/dmqDRYY/Game-board.jpg" alt="Game-board" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/5v7drKF/Pool-area.jpg" alt="Pool-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/x7f1251/Pool.jpg" alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CorsicaPool1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CorsicaPool2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockPool}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
