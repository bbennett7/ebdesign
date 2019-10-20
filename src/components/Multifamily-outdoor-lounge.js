import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import BayridgeODL from '../images/bayridge/Common-area.jpg';
import RockODL from '../images/rockwood/Outdoor-lounge.jpg';
import RockODL2 from '../images/rockwood/Pool-seating.jpg';
import VicODL from '../images/vicino/Firepit.jpg';
import VicODL2 from '../images/vicino/Outdoor-TV.jpg';



export default class OutdoorLounge extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Outdoor Lounge</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/3W7brXn/Fireplace.png" alt="Fireplace" border="0" />
            </Carousel.Item>
            
            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/Ph9NbVQ/Pool-seating.png" alt="Pool-seating" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicODL}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={VicODL2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={BayridgeODL}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockODL2}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/TPh7cYF/Pool-lounge.jpg" alt="Pool-lounge" border="0" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
