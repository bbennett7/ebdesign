import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import CorsicaLeasingOffice from '../images/corsica/Leasing-office.jpg';
import LexLeasingOffice from '../images/lexington/Leasing-office.jpg';
import RockLeasingOffice from '../images/rockwood/Leasing-office.jpg';
import PortreroLeasingOffice1 from '../images/portrero/Leasing-office.jpg';
import SouthfieldLeasingOffice1 from '../images/southfield/southfield1.jpg';
import Waterleaf from '../images/waterleaf/Waterleaf3.jpg';
import Vicino1 from '../images/vicino/Vicino1.jpg';


export default class LeasingOffice extends Component {
  render() {
    return(
      <div className="Property-grid">
        <div className="Property">
          <h4>Leasing Office</h4>
          <Carousel className="Carousel">

            <Carousel.Item>
              <img className="Carousel-image" src={Vicino1} alt="Center-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/bF9CzZc/Lounge-area.jpg" alt="Lounge-area" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/sPvr2Xc/Table.jpg" alt="Table" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={Waterleaf}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={SouthfieldLeasingOffice1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={PortreroLeasingOffice1}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={LexLeasingOffice}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/Tm4JF1c/Leasing-office.jpg" alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={RockLeasingOffice}
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img className="Carousel-image" src="https://i.ibb.co/DkHdvYr/Leasing-office.jpg" alt="Leasing-office" border="0" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="Carousel-image"
                src={CorsicaLeasingOffice}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
