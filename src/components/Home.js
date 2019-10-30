import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Chadwick1 from '../images/chadwick/Chadwick1.png';
import Chadwick2 from '../images/chadwick/Chadwick2.jpg';
import Vicino1 from '../images/vicino/Vicino1.jpg';
import Vicino2 from '../images/vicino/Vicino2.jpg';
import Vicino3 from '../images/vicino/Vicino3.jpg';
import Harborview1 from '../images/harborview/Harborview1.jpg';
import GameRoom from '../images/rockwood/Pool-table.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel className="Home-carousel">
        <Carousel.Item>
            <img className="Home-carousel-image" id="Home-five" src={Chadwick1} alt="Fireplace" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-four" src={Vicino1} alt="Center-area" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-one" src={Vicino2} alt="Gym" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-six" src={Vicino3} alt="Chaise-lounges" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-one" src={Chadwick2} alt="Pool" border="0" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-seven" src={GameRoom} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="Home-carousel-image" id="Home-one" src={Harborview1} alt="Exterior" border="0" />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
