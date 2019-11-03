import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgePool from '../images/bayridge/Pool-area.jpg';
import CorsicaPool1 from '../images/corsica/Pool-area.jpg';
import CorsicaPool2 from '../images/corsica/Pool.jpg';
import RockPool from '../images/rockwood/Pool.jpg';
import Vicino3 from '../images/vicino/Vicino3.jpg';
import Chadwick2 from '../images/chadwick/Chadwick2.jpg';
import Harborview5 from '../images/harborview/Harborview5.jpg';
import Vicino11 from '../images/vicino/Vicino11.jpg';
import Vicino10 from '../images/vicino/Vicino10.jpg';
import Parc53 from '../images/parc5/Parc5-3.jpg';
import Parc55 from '../images/parc5/Parc5-5.jpg';


export default class Pool extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Pool</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Vicino3} alt="Chaise-lounges" border="0 " />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino11} alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino10} alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview5} alt="Pool" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgePool}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc53} alt="Game-board" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Parc55} alt="Pool-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Chadwick2} alt="Pool" border="0" />
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
