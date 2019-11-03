import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import CountryOaksExterior from '../images/country-oaks/Exterior.jpg';
import LexEntrance from '../images/lexington/Entrance.jpg';
import LexMainExterior from '../images/lexington/Main-exterior.jpg';
import Harborview1 from '../images/harborview/Harborview1.jpg';
import Vicino4 from '../images/vicino/Vicino4.jpg';
import Parc51 from '../images/parc5/Parc5-1.jpg';

export default class Exterior extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Exterior</h4>
          <Carousel className="Carousel">
            <Carousel.Item>
              <img className="Carousel-image" src={Parc51} alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Harborview1} alt="Exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino4} alt="Leasing-office-exterior" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CountryOaksExterior}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LexEntrance}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LexMainExterior}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
