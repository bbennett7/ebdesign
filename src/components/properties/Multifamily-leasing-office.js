import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import BayshoreLeasingOffice1 from '../../images/bayshore/Common-area.jpg';
import BayshoreLeasingOffice2 from '../../images/bayshore/Desk.jpg';
import BayshoreLeasingOffice3 from '../../images/bayshore/Chairs.jpg';
import ChadLeasingOffice from '../../images/chadwick/Leasing-office.jpg';
import CorsicaLeasingOffice from '../../images/corsica/Leasing-office.jpg';
import HarborLeasingOffice from '../../images/harborview/Leasing-office.jpg';
import LexLeasingOffice1 from '../../images/lexington/Leasing-office.jpg';
import LexLeasingOffice2 from '../../images/lexington/Leasing-interior.jpg';
import RockLeasingOffice from '../../images/rockwood/Leasing-office.jpg';
import P5LeasingOffice from '../../images/parc5/Leasing-office.jpg';
import P5LeasingOffice2 from '../../images/parc5/TV-seating.jpg';
import ProtreroLeasingOffice1 from '../../images/protrero/Leasing-office.jpg';
import ProtreroLeasingOffice2 from '../../images/protrero/Leasing-office2.jpg';
import VicLeasingOffice1 from '../../images/vicino/Center-area.jpg';
import VicLeasingOffice2 from '../../images/vicino/Lounge-area.jpg';
import VicLeasingOffice3 from '../../images/vicino/Table.jpg';

export default class LeasingOffice extends Component {
  render() {
    return(
      <div className="Property">
        <h4>Leasing Office</h4>
        <Carousel interval="null" className="Carousel">

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={VicLeasingOffice1}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={VicLeasingOffice2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={VicLeasingOffice3}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={ProtreroLeasingOffice1}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={ProtreroLeasingOffice2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={LexLeasingOffice1}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={P5LeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={P5LeasingOffice2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={HarborLeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={BayshoreLeasingOffice1}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={BayshoreLeasingOffice2}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={BayshoreLeasingOffice3}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={RockLeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={ChadLeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="Carousel-image"
              src={CorsicaLeasingOffice}
              alt=""
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
